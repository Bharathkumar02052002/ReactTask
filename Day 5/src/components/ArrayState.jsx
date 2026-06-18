import { useState } from 'react';

function ArrayState() {
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);

  return (
    <article className="task-card">
      <h2>Array in useState</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <button onClick={() => setSkills([...skills, 'useState'])}>Add Skill</button>
    </article>
  );
}

export default ArrayState;
