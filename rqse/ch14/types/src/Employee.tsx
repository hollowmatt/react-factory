import React from 'react';
import './employee.css';

type Employee = {
  name: String;
  title: String;
};

interface CardProps {
  item: Employee;
}

function EmployeeCard({ item }: CardProps) {
  return (
    <section className="employee">
      <h2 className="employee_name">{item.name}</h2>
      <h3 className="eployee+title">{item.title}</h3>
    </section>
  );
}

export default EmployeeCard;
