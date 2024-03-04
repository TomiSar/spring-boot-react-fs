package com.netjavaguides.ems.mapper;

import com.netjavaguides.ems.dto.DepartmentDto;
import com.netjavaguides.ems.entity.Department;

public class DepartmentMapper {

    // convert department jpa entity into department dto
   public static DepartmentDto mapToDepartmentDto(Department department) {
       return new DepartmentDto(
               department.getId(),
               department.getDepartmentName(),
               department.getDepartmentDescription(),
               department.getEmail()
       );
   }

    // convert department dto into department jpa entity
    public static Department mapToDepartment(DepartmentDto departmentDto) {
       return new Department(
               departmentDto.getId(),
               departmentDto.getDepartmentName(),
               departmentDto.getDepartmentDescription(),
               departmentDto.getEmail()
       );
    }
}
