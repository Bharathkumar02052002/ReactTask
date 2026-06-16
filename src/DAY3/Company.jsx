const Employee = ({ companyName, employeeName, employeeRole, employeeSalary }) => {
    return (
        <section>
            <h2>Bonus Interview Task - Company Dashboard</h2>
            <p>Company Name: {companyName}</p>
            <p>Employee Name: {employeeName}</p>
            <p>Employee Role: {employeeRole}</p>
            <p>Employee Salary: {employeeSalary}</p>
        </section>
    );
};

const Company = ({ companyName, employeeName, employeeRole, employeeSalary }) => {
    return (
        <Employee
            companyName={companyName}
            employeeName={employeeName}
            employeeRole={employeeRole}
            employeeSalary={employeeSalary}
        />
    );
};

export default Company;
