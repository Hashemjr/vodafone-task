package com.example.task_management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.task_management.dto.RegisterRequest;
import com.example.task_management.dto.LoginRequest;
import com.example.task_management.dto.LoginResponse;
import com.example.task_management.entity.User;
import com.example.task_management.service.UserService;
import com.example.task_management.security.JwtUtil;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        userService.registerUser(request.getEmail(), request.getPassword());
        return ResponseEntity.ok("User registered successfully!");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        User user = userService.validateUser(request.getEmail(), request.getPassword());
        String token = jwtUtil.generateToken(user);  // Generate token
        return ResponseEntity.ok(new LoginResponse(token));  
    }
}
