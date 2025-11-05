package com.nilanjan.emp_project.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nilanjan.emp_project.entity.EmpEntity;
import com.nilanjan.emp_project.models.Employee;
import com.nilanjan.emp_project.repo.EmpRepo;

@Service
public class EmpServiceImpl implements EmpService {

    @Autowired
    private EmpRepo empRepo;

    @Override
    public String createEmployee(Employee employee) {
        EmpEntity empEntity = new EmpEntity();
        BeanUtils.copyProperties(employee, empEntity);

        empRepo.save(empEntity);
        return "Employee created successfully";
    }

    @Override
    public List<Employee> readEmployees() {
        List<Employee> employees = new ArrayList<>();
        List<EmpEntity> empEntities = empRepo.findAll();

        for (EmpEntity empEntity : empEntities) {
            Employee emp = new Employee();
            emp.setId(empEntity.getId());
            emp.setName(empEntity.getName());
            emp.setPhone(empEntity.getPhone());
            emp.setEmail(empEntity.getEmail());

            employees.add(emp);
        }
        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmpEntity emp = empRepo.findById(id).get();
        
        empRepo.delete(emp);
        return true;
    }

    @Override
    public String updateEmployee(Long id, Employee employee) {
        EmpEntity existingEmp = empRepo.findById(id).get();

        existingEmp.setName(employee.getName());
        existingEmp.setEmail(employee.getEmail());
        existingEmp.setPhone(employee.getPhone());

        empRepo.save(existingEmp);
        return "Employee updated successfully";
    }

    @Override
    public Employee readEmployee(Long id) {
        EmpEntity emp = empRepo.findById(id).get();

        Employee employee = new Employee();
        BeanUtils.copyProperties(emp, employee);

        return employee;
    }

}
