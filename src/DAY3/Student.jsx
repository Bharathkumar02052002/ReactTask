const Student = ({ name, age, course, city }) => {
    return (
        <section>
            <h2>Task 1 - Student Profile</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Course: {course}</p>
            <p>City: {city}</p>
        </section>
    );
};

export default Student;
