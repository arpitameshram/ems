package com.cdac.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
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
			
			LoginStatus status = new LoginStatus();
			
			status.setStatus(true);
			status.setStatusMessage("Login successful");
			
			return status;
			
		}catch(UserServiceException e) {
			
			LoginStatus status = new LoginStatus();
			
			status.setStatus(false);
			status.setStatusMessage(e.getMessage());
			
			return status;
		}
	}
	
	@PutMapping("/update")
    public String updateUser(@RequestParam int userId, @RequestBody User updatedUser) {
        try {
            userService.editProfile(userId, updatedUser);
            return "User updated successfully";
        } catch (UserServiceException e) {
            return e.getMessage();
        }
    }

    @DeleteMapping("/delete")
    public String deleteUser(@RequestParam int userId) {
        try {
            userService.deleteProfile(userId);
            return "User deleted successfully";
        } catch (UserServiceException e) {
            return e.getMessage();
        }
    }
}
