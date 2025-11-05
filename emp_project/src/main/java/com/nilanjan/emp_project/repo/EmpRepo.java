package com.nilanjan.emp_project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nilanjan.emp_project.entity.EmpEntity;

@Repository
public interface EmpRepo extends JpaRepository<EmpEntity, Long> {}
