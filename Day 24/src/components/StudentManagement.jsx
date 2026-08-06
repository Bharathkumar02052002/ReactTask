import { useReducer, useState } from 'react';

const initialStudentState = {
  students: [
    { id: 1, name: 'Sudhan' },
    { id: 2, name: 'Ravi' },
  ],
  editingStudent: null,
};

function studentReducer(state, action) {
  switch (action.type) {
    case 'ADD_STUDENT':
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case 'EDIT_STUDENT':
      return {
        ...state,
        editingStudent: action.payload,
      };
    case 'UPDATE_STUDENT':
      return {
        students: state.students.map((student) =>
          student.id === action.payload.id ? action.payload : student
        ),
        editingStudent: null,
      };
    case 'DELETE_STUDENT':
      return {
        ...state,
        students: state.students.filter((student) => student.id !== action.payload),
      };
    case 'CANCEL_EDIT':
      return {
        ...state,
        editingStudent: null,
      };
    default:
      return state;
  }
}

function StudentManagement() {
  const [state, dispatch] = useReducer(studentReducer, initialStudentState);
  const [studentName, setStudentName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (studentName.trim() === '') return;

    if (state.editingStudent) {
      dispatch({
        type: 'UPDATE_STUDENT',
        payload: { id: state.editingStudent.id, name: studentName },
      });
    } else {
      dispatch({
        type: 'ADD_STUDENT',
        payload: { id: Date.now(), name: studentName },
      });
    }

    setStudentName('');
  };

  const handleEdit = (student) => {
    dispatch({ type: 'EDIT_STUDENT', payload: student });
    setStudentName(student.name);
  };

  const handleCancel = () => {
    dispatch({ type: 'CANCEL_EDIT' });
    setStudentName('');
  };

  return (
    <section className="task-card wide-card">
      <span>Task 2</span>
      <h2>Student Management System</h2>
      <form className="inline-form" onSubmit={handleSubmit}>
        <input
          value={studentName}
          onChange={(event) => setStudentName(event.target.value)}
          placeholder="Enter student name"
        />
        <button type="submit">{state.editingStudent ? 'Update' : 'Add'}</button>
        {state.editingStudent && <button type="button" className="secondary" onClick={handleCancel}>Cancel</button>}
      </form>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {state.students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>
                  <div className="button-row">
                    <button onClick={() => handleEdit(student)}>Edit</button>
                    <button className="danger" onClick={() => dispatch({ type: 'DELETE_STUDENT', payload: student.id })}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default StudentManagement;
