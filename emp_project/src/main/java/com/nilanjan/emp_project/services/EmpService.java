package com.nilanjan.emp_project.services;

import java.util.List;

import com.nilanjan.emp_project.models.Employee;

public interface EmpService {
    String createEmployee(Employee employee);
    List<Employee> readEmployees();
    boolean deleteEmployee(Long id);
    String updateEmployee(Long id, Employee employee);
    Employee readEmployee(Long id);
}
