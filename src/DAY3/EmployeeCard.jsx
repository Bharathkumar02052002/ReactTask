const EmployeeCard = ({ employeeName, employeeId, department, salary, experience }) => {
    return (
        <section className="employee-card">
            <h2>Task 2 - Employee Card</h2>
            <p>Employee Name: {employeeName}</p>
            <p>Employee ID: {employeeId}</p>
            <p>Department: {department}</p>
            <p>Salary: {salary}</p>
            <p>Experience: {experience}</p>
        </section>
    );
};

export default EmployeeCard;
