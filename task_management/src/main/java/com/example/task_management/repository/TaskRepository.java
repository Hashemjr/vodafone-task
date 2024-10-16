package com.example.task_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.task_management.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
