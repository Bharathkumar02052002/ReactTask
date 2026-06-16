import Task1SchoolCards from "./Task1SchoolCards";
import Task2SchoolCoursesDashboard from "./Task2SchoolCoursesDashboard";
import Task3SchoolManagementDashboard from "./Task3SchoolManagementDashboard";

const schools = [
    {
        id: 1,
        name: "ABC School",
        city: "Chennai",
        principal: "Ramesh",
        students: 2500,
        teachers: 120,
        courses: ["LKG", "UKG", "Primary", "High School"],
        sports: ["Cricket", "Football", "Basketball"],
    },
    {
        id: 2,
        name: "Green Valley School",
        city: "Coimbatore",
        principal: "Anitha",
        students: 1800,
        teachers: 90,
        courses: ["LKG", "UKG", "Primary", "Middle School"],
        sports: ["Volleyball", "Tennis", "Kho Kho"],
    },
    {
        id: 3,
        name: "Sunrise Matric School",
        city: "Salem",
        principal: "Kumar",
        students: 2200,
        teachers: 105,
        courses: ["Primary", "High School", "Higher Secondary"],
        sports: ["Cricket", "Badminton", "Athletics"],
    },
];

const Day4 = () => {
    return (
        <main className="mt-5 space-y-8">
            <h1 className="text-3xl font-bold text-slate-900">
                DAY4 - School Management Tasks
            </h1>

            <Task1SchoolCards schools={schools} />
            <Task2SchoolCoursesDashboard schools={schools} />
            <Task3SchoolManagementDashboard schools={schools} />
        </main>
    );
};

export default Day4;
