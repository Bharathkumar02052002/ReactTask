import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  mobile: '',
  course: '',
  city: '',
};

function App() {
  const [formData, setFormData] = useState(initialForm);
  const [students, setStudents] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.mobile || !formData.course || !formData.city) {
      alert('Please fill all fields');
      return;
    }

    if (editingId) {
      const updatedStudents = students.map((student) =>
        student.id === editingId ? { ...formData, id: editingId } : student
      );
      setStudents(updatedStudents);
      setEditingId(null);
    } else {
      const newStudent = {
        id: Date.now(),
        ...formData,
      };
      setStudents([...students, newStudent]);
    }

    setFormData(initialForm);
  };

  const handleEdit = (student) => {
    setFormData({
      name: student.name,
      email: student.email,
      mobile: student.mobile,
      course: student.course,
      city: student.city,
    });
    setEditingId(student.id);
  };

  const handleDelete = (id) => {
    const filteredStudents = students.filter((student) => student.id !== id);
    setStudents(filteredStudents);

    if (editingId === id) {
      setEditingId(null);
      setFormData(initialForm);
    }
  };

  const handleClear = () => {
    setFormData(initialForm);
    setEditingId(null);
  };

  return (
    <main className="app">
      <header className="page-header">
        <p>React Practice</p>
        <h1>Day 9 Form With Array of Objects</h1>
      </header>

      <section className="layout">
        <form className="form-card" onSubmit={handleSubmit}>
          <h2>{editingId ? 'Update Student Data' : 'Add Student Data'}</h2>

          <label>
            Name
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" />
          </label>

          <label>
            Email
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
          </label>

          <label>
            Mobile
            <input name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter mobile number" />
          </label>

          <label>
            Course
            <input name="course" value={formData.course} onChange={handleChange} placeholder="Enter course" />
          </label>

          <label>
            City
            <input name="city" value={formData.city} onChange={handleChange} placeholder="Enter city" />
          </label>

          <div className="button-row">
            <button type="submit">{editingId ? 'Update Data' : 'Add Data'}</button>
            <button type="button" className="secondary" onClick={handleClear}>Clear</button>
          </div>
        </form>

        <section className="data-card">
          <div className="data-header">
            <h2>Showing Datas on Screen</h2>
            <span>Total: {students.length}</span>
          </div>

          {students.length === 0 ? (
            <p className="empty-text">No data added yet. Fill the form and click Add Data.</p>
          ) : (
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Course</th>
                    <th>City</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.mobile}</td>
                      <td>{student.course}</td>
                      <td>{student.city}</td>
                      <td>
                        <div className="action-row">
                          <button type="button" onClick={() => handleEdit(student)}>Edit</button>
                          <button type="button" className="danger" onClick={() => handleDelete(student.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

export default App;
