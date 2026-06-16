import SchoolCard from "./SchoolCard";

const Task1SchoolCards = ({ schools }) => {
    return (
        <div className="rounded-2xl bg-slate-100 p-6">
            <h2 className="mb-5 text-2xl font-bold text-slate-900">
                Task 1 - School Management
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {schools.map((school) => (
                    <SchoolCard key={school.id} school={school} />
                ))}
            </div>
        </div>
    );
};

export default Task1SchoolCards;
