import { useAppContext } from '../context/AppContext.jsx';

function DashboardHeader() {
  const { dashboard } = useAppContext();

  return (
    <header className="dashboard-header">
      Students : {dashboard.totalStudents} | Courses : {dashboard.totalCourses} | Placements : {dashboard.totalPlacements}
    </header>
  );
}

function DashboardSidebar() {
  const { dashboard } = useAppContext();

  return (
    <aside className="dashboard-sidebar">
      <p>Students : {dashboard.totalStudents}</p>
      <p>Courses : {dashboard.totalCourses}</p>
      <p>Placements : {dashboard.totalPlacements}</p>
    </aside>
  );
}

function DashboardCards() {
  const { dashboard } = useAppContext();

  return (
    <div className="dashboard-cards">
      <article>Students : <strong>{dashboard.totalStudents}</strong></article>
      <article>Courses : <strong>{dashboard.totalCourses}</strong></article>
      <article>Placements : <strong>{dashboard.totalPlacements}</strong></article>
    </div>
  );
}

function Dashboard() {
  return (
    <section className="task-card wide-card">
      <span>Bonus</span>
      <h2>Dashboard Rendering</h2>
      <div className="dashboard-demo">
        <DashboardHeader />
        <div className="dashboard-layout">
          <DashboardSidebar />
          <DashboardCards />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
