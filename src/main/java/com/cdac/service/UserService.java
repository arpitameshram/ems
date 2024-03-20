package com.cdac.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cdac.dto.LoginStatus;
import com.cdac.entity.User;
import com.cdac.exception.UserServiceException;
import com.cdac.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public int register(User user) {
		Optional<User> userCheck = userRepository.findByEmail(user.getEmail());
		if(userCheck.isEmpty()) {
			User savedUser = userRepository.save(user);
			return savedUser.getId();
		}else {
			throw new UserServiceException("User already registered");
		}
		
	}
	
	public User login(String email, String password) {
		Optional<User> userLoggedIn = userRepository.findByEmailAndPassword(email, password);
		if(userLoggedIn.isPresent()) {
			return userLoggedIn.get();
		}else {
			throw new UserServiceException("Invalid credentails");
		}
	}
	
	
	//user login
	
//	public ResponseEntity<LoginStatus> userLogin(User user) {
//		
//		Optional<User> foundUser = UserRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
//		LoginStatus status = new LoginStatus();
//		
//
//		if(foundUser.isPresent()) {
//			//found
//			//status.setStatus(true);
//			status.setStatusMessage("Successfully Logged In!");
//			status.setId(foundUser.get().getId());
//			return new ResponseEntity<LoginStatus>(status, HttpStatus.ACCEPTED);
//			
//		}else{
//			
//			//not found
//			status.setStatus(false);
//			status.setStatusMessage("Wrong Email Or Password!");
//			return new ResponseEntity<LoginStatus>(status, HttpStatus.BAD_REQUEST);
//			
//		}
//		
//	}
//	
	
	
	public void editProfile(int userId, User updatedUser) {
        Optional<User> existingUser = userRepository.findById(userId);

        if (existingUser.isPresent()) {
            User userToUpdate = existingUser.get();

            // Update the fields you want to allow users to modify
            userToUpdate.setName(updatedUser.getName());
            userToUpdate.setEmail(updatedUser.getEmail());
            userToUpdate.setPassword(updatedUser.getPassword());
            userToUpdate.setPhoneNo(updatedUser.getPhoneNo());
            userToUpdate.setCity(updatedUser.getCity());

            userRepository.save(userToUpdate);
        } else {
            throw new UserServiceException("User not found");
        }
    }

    public void deleteProfile(int userId) {
        User existingUser = userRepository.findById(userId).get();
         System.out.println(existingUser.getName());
        if (existingUser!=null) {
            userRepository.deleteById(userId);
        } else {
            throw new UserServiceException("User not found");
        }
    }

    public User getUserById(int userId) {
        return userRepository.findById(userId).get();

    }

    public List<User> getAllUsers() {
        List<User> users = userRepository.findAll();

        if (!users.isEmpty()) {
            return users;
        } else {
            throw new UserServiceException("No users found");
        }
    }
}
    
