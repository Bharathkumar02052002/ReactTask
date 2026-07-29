import { useAppContext } from '../context/AppContext.jsx';

function Profile() {
  const { user } = useAppContext();

  return (
    <section className="task-card">
      <span>Task 1</span>
      <h2>User Profile Rendering</h2>
      <p>Name : <strong>{user.name}</strong></p>
      <p>Email : <strong>{user.email}</strong></p>
      <p>Role : <strong>{user.role}</strong></p>
    </section>
  );
}

export default Profile;
