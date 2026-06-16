const UserCard = ({ user }) => {
    const { name, email, phone, city } = user;

    return (
        <section>
            <h2>Task 5 - User Information Card</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>City: {city}</p>
        </section>
    );
};

export default UserCard;
