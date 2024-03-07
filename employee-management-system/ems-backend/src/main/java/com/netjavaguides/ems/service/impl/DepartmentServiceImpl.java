package com.netjavaguides.ems.service.impl;

import com.netjavaguides.ems.dto.DepartmentDto;
import com.netjavaguides.ems.entity.Department;
import com.netjavaguides.ems.exception.ResourceNotFoundException;
import com.netjavaguides.ems.mapper.DepartmentMapper;
import com.netjavaguides.ems.repository.DepartmentRepository;
import com.netjavaguides.ems.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {

    private DepartmentRepository departmentRepository;

    @Override
    public DepartmentDto createDepartment(DepartmentDto departmentDto) {
        Department department = DepartmentMapper.mapToDepartment(departmentDto);
        Department savedDepartment = departmentRepository.save(department);
        return DepartmentMapper.mapToDepartmentDto(savedDepartment);
    }

    @Override
    public DepartmentDto getDepartmentById(Long departmentId) {
        Department department = departmentRepository.findById(departmentId).orElseThrow(
                () -> new ResourceNotFoundException("Department does not exists with a given id: " + departmentId));
        return DepartmentMapper.mapToDepartmentDto(department);
    }

    @Override
    public List<DepartmentDto> getAllDepartments() {
        List<Department> departments = departmentRepository.findAll();
         return departments.stream().map(DepartmentMapper::mapToDepartmentDto).collect(Collectors.toList());
    }

    @Override
    public DepartmentDto updateDepartment(Long departmentId, DepartmentDto updatedDepartment) {

        Department department = departmentRepository.findById(departmentId).orElseThrow(
                () -> new ResourceNotFoundException("Department does not exists with a given id:"+ departmentId));

        department.setDepartmentName(updatedDepartment.getDepartmentName());
        department.setDepartmentDescription(updatedDepartment.getDepartmentDescription());
        department.setEmail(updatedDepartment.getEmail());
        Department savedDepartment = departmentRepository.save(department);

        return DepartmentMapper.mapToDepartmentDto(savedDepartment);
    }

    @Override
    public void deleteDepartment(Long departmentId) {
        departmentRepository.findById(departmentId).orElseThrow(
                () -> new ResourceNotFoundException("Department does not exists with a given id:" + departmentId));
        departmentRepository.deleteById(departmentId);
    }
}
