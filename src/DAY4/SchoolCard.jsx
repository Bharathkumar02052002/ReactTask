const SchoolCard = ({ school, showCourses = false, showSports = false }) => {
    return (
        <div className="rounded-xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-slate-900">{school.name}</h3>
            <p className="mt-1 text-slate-600">{school.city}</p>

            <div className="mt-5 space-y-2 text-slate-700">
                {school.principal && (
                    <p>
                        <span className="font-semibold">Principal :</span>{" "}
                        {school.principal}
                    </p>
                )}

                {school.students && (
                    <p>
                        <span className="font-semibold">Students :</span>{" "}
                        {school.students}
                    </p>
                )}

                {school.teachers && (
                    <p>
                        <span className="font-semibold">Teachers :</span>{" "}
                        {school.teachers}
                    </p>
                )}
            </div>

            {showCourses && (
                <div className="mt-5 flex flex-wrap gap-2">
                    {school.courses.map((course) => (
                        <span
                            key={course}
                            className="rounded-full bg-teal-100 px-3 py-1 text-sm font-semibold text-teal-800"
                        >
                            {course}
                        </span>
                    ))}
                </div>
            )}

            {showSports && (
                <div className="mt-5 flex flex-wrap gap-2">
                    {school.sports.map((sport) => (
                        <span
                            key={sport}
                            className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-800"
                        >
                            {sport}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SchoolCard;
