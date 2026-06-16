import SchoolCard from "./SchoolCard";

const Header = () => {
    return (
        <header className="rounded-xl bg-teal-700 p-6 text-white shadow-lg">
            <h1 className="text-3xl font-bold">School Management System</h1>
        </header>
    );
};

const SchoolStats = ({ schools }) => {
    const totalSchools = schools.length;
    const totalStudents = schools.reduce(
        (total, school) => total + school.students,
        0
    );
    const totalTeachers = schools.reduce(
        (total, school) => total + school.teachers,
        0
    );

    return (
        <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-white p-5 text-center shadow-md">
                <p className="text-sm font-semibold text-slate-500">
                    Total Schools
                </p>
                <h2 className="mt-2 text-3xl font-bold text-teal-700">
                    {totalSchools}
                </h2>
            </div>

            <div className="rounded-xl bg-white p-5 text-center shadow-md">
                <p className="text-sm font-semibold text-slate-500">
                    Total Students
                </p>
                <h2 className="mt-2 text-3xl font-bold text-teal-700">
                    {totalStudents}
                </h2>
            </div>

            <div className="rounded-xl bg-white p-5 text-center shadow-md">
                <p className="text-sm font-semibold text-slate-500">
                    Total Teachers
                </p>
                <h2 className="mt-2 text-3xl font-bold text-teal-700">
                    {totalTeachers}
                </h2>
            </div>
        </div>
    );
};

const SchoolList = ({ schools }) => {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {schools.map((school) => (
                <SchoolCard key={school.id} school={school} showSports />
            ))}
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="rounded-xl bg-slate-900 p-4 text-center text-white">
            <p>School Management Dashboard - All Rights Reserved</p>
        </footer>
    );
};

const Task3SchoolManagementDashboard = ({ schools }) => {
    return (
        <div className="space-y-6 rounded-2xl bg-slate-100 p-6">
            <h2 className="text-2xl font-bold text-slate-900">
                Task 3 - School Management Dashboard
            </h2>
            <Header />
            <SchoolStats schools={schools} />
            <SchoolList schools={schools} />
            <Footer />
        </div>
    );
};

export default Task3SchoolManagementDashboard;
