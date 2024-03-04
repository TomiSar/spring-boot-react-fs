package com.netjavaguides.ems.service.impl;

import com.netjavaguides.ems.dto.EmployeeDto;
import com.netjavaguides.ems.entity.Department;
import com.netjavaguides.ems.entity.Employee;
import com.netjavaguides.ems.exception.ResourceNotFoundException;
import com.netjavaguides.ems.mapper.DepartmentMapper;
import com.netjavaguides.ems.mapper.EmployeeMapper;
import com.netjavaguides.ems.repository.DepartmentRepository;
import com.netjavaguides.ems.repository.EmployeeRepository;
import com.netjavaguides.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    private DepartmentRepository departmentRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);

        Department department = departmentRepository.findById(employeeDto.getDepartmentId()).orElseThrow(
                () -> new ResourceNotFoundException("Department does not exist with given id: " + employeeDto.getDepartmentId()));
        employee.setDepartment(department);

        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(() ->
                        new ResourceNotFoundException("Employee does not exist with given id: " + employeeId));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream().map(EmployeeMapper::mapToEmployeeDto).collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {

        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourceNotFoundException("Employee does not exist with given id: " + employeeId)
        );

        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());

        Department department = departmentRepository.findById(updatedEmployee.getDepartmentId())
                .orElseThrow(() ->
                        new ResourceNotFoundException("Department does not exist with given id: " + updatedEmployee.getDepartmentId()));
        employee.setDepartment(department);

        Employee updatedEmployeeObj = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
    }


    @Override
    public void deleteEmployee(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(() ->
                        new ResourceNotFoundException("Employee does not exist with given id: " + employeeId));
        employeeRepository.deleteById(employeeId);
    }
}
