package com.example.task_management.security;

import java.util.Date;

import com.example.task_management.entity.User;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtTokenUtil {
    public static String generateToken(User user) {
    return Jwts.builder()
        .setSubject(user.getEmail())
        .setIssuedAt(new Date())
        .signWith(SignatureAlgorithm.HS256, "SECRET_KEY")
        .compact();
}

}
