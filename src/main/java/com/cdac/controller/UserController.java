package com.cdac.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.LoginStatus;
import com.cdac.dto.RegistrationStatus;
import com.cdac.entity.User;
import com.cdac.exception.UserServiceException;
import com.cdac.service.UserService;

@RestController
@CrossOrigin
public class UserController{
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public RegistrationStatus register(@RequestBody User user, Map map) {
		
		try {
			int id = userService.register(user);
			
			RegistrationStatus status = new RegistrationStatus();
			
			status.setStatus(true);
			status.setStatusMessage("User registered successfully");
			status.setId(id);
			return status;
			
		}catch(UserServiceException e) {
			
			RegistrationStatus status = new RegistrationStatus();
			
			status.setStatus(false);
			status.setStatusMessage(e.getMessage());
			
			return status;
		}
		
	}
	
	@PostMapping("/login")
	public LoginStatus login(@RequestBody Map<String, String> loginData) {
		try {
			String email = loginData.get("email");
			String password = loginData.get("password");
			
			User user = userService.login(email, password);
			
			System.out.println("USER ID" + user.getId());
			
			LoginStatus status = new LoginStatus();
			
			status.setStatus(true);
			status.setStatusMessage("Login successful");
			status.setId(user.getId());
			
			
			return status;
			
		}catch(UserServiceException e) {
			
			LoginStatus status = new LoginStatus();
			
			status.setStatus(false);
			status.setStatusMessage(e.getMessage());
			
			return status;
		}
}
	@GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable int id) {
        // Assuming userService.getUserById(id) returns the user with the given id
        User user = userService.getUserById(id);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
	
	
	@PutMapping("/userupdate/{userId}")// Corrected path variable name
	public String updateUser(@PathVariable int userId, @RequestBody User updatedUser) {
	    try {
	        System.out.println("hello");
	        userService.editProfile(userId, updatedUser);
	        return "User updated successfully";
	    } catch (UserServiceException e) {
	        return e.getMessage();
	    }
	}


    @DeleteMapping("/userdelete/{id}")
    public String deleteUser(@PathVariable int id) {
        try {
            userService.deleteProfile(id);
            return "User deleted successfully";
        } catch (UserServiceException e) {
            return e.getMessage();
        }
    }
    

    @GetMapping("/all")
    public List<User> allUser() {
        try {
           List<User> list =  userService.getAllUsers();
           return list;
        } catch (UserServiceException e) {
            return null;
        }
    }
    @GetMapping("/user/id")
    public User findUser(@PathVariable int id) {
    	return userService.getUserById(id);
       
          
    }
}
