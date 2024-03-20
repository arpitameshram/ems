package com.cdac.controller;

import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.service.AdminService;
import com.cdac.dto.AdminResponse;
import com.cdac.entity.Admin;
@CrossOrigin
@RestController
public class AdminController {

 @Autowired
 private AdminService adminService;

 @PostMapping("/adminregister")
 public AdminResponse registerAdmin(@RequestBody Admin admin) {
     if (adminService.isAdminExists()) {
         return new AdminResponse("Admin already registered.");
     }
     adminService.registerAdmin(admin);
     return new AdminResponse("Admin registered successfully.");
 }

 @PostMapping("/adminlogin")
 public AdminResponse loginAdmin(@RequestBody Map<String, String> credentials) {
     String email = credentials.get("email");
     String password = credentials.get("password");

     if (adminService.validateAdminCredentials(email, password)) {
         return new AdminResponse("Admin login successful.");
     } else {
         return new AdminResponse("Invalid credentials.");
     }
 }
}