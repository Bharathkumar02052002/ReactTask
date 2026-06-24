function UserCard({ name, role }) {
  return (
    <div className="plain-output">
      <p>Name: <strong>{name}</strong></p>
      <p>Role: <strong>{role}</strong></p>
    </div>
  );
}

export default UserCard;
