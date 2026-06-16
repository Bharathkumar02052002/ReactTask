const GrandChild = ({ name, course }) => {
    return (
        <section>
            <h2>Props Drilling Task</h2>
            <p>Name: {name}</p>
            <p>Course: {course}</p>
        </section>
    );
};

const Child = ({ name, course }) => {
    return <GrandChild name={name} course={course} />;
};

const Parent = ({ name, course }) => {
    return <Child name={name} course={course} />;
};

export default Parent;
