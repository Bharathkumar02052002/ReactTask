import SchoolCard from "./SchoolCard";

const SchoolList = ({ schools }) => {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {schools.map((school) => (
                <SchoolCard key={school.id} school={school} showCourses />
            ))}
        </div>
    );
};

const Task2SchoolCoursesDashboard = ({ schools }) => {
    return (
        <div className="rounded-2xl bg-emerald-50 p-6">
            <h2 className="mb-5 text-2xl font-bold text-slate-900">
                Task 2 - School Courses Dashboard
            </h2>

            <SchoolList schools={schools} />
        </div>
    );
};

export default Task2SchoolCoursesDashboard;
