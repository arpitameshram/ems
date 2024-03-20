package com.cdac.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.Admin;
import com.cdac.entity.User;
import com.cdac.exception.UserServiceException;
import com.cdac.repository.AdminRepository;

@Service
public class AdminService {
	
	@Autowired
	private AdminRepository adminRepository;
	
	public Admin registerAdmin(Admin admin) {
		return adminRepository.save(admin);
	}
	
	public boolean isAdminExists() {
		return adminRepository.count() > 0;
	}
	
	public boolean validateAdminCredentials(String email, String password) {
		Optional<Admin> adminCheck = adminRepository.findByEmail(email);
		return adminCheck.isPresent() && adminCheck.get().getPassword().equals(password);
	}
}