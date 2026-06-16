const CourseCard = ({ courseName, duration, fees }) => {
    return (
        <section>
            <h2>Interview-Oriented Task - Course Card</h2>
            <p>Course Name: {courseName}</p>
            <p>Duration: {duration}</p>
            <p>Fees: {fees}</p>
        </section>
    );
};

export default CourseCard;
