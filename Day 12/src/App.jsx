import { useEffect, useState } from 'react';

const questions = [
  {
    question: 'What is useEffect() in React?',
    answer: 'useEffect() is a React Hook used to run code after a component renders.',
  },
  {
    question: 'Why do we use useEffect()?',
    answer: 'We use it to handle side effects such as fetching data, timers, browser title updates, subscriptions, and localStorage work.',
  },
  {
    question: 'What is a Side Effect?',
    answer: 'A side effect is any work that affects something outside the component render output.',
  },
  {
    question: 'What are examples of Side Effects?',
    answer: 'API calls, console logs, setInterval, setTimeout, document.title changes, localStorage updates, and event listeners are common examples.',
  },
  {
    question: 'Difference between useState() and useEffect()?',
    answer: 'useState() stores and updates data. useEffect() runs side-effect code after rendering or after selected state/props change.',
  },
  {
    question: 'When does useEffect() execute?',
    answer: 'It executes after render. Its dependency array controls whether it runs after every render, only once, or only when specific values change.',
  },
  {
    question: 'Can we have multiple useEffect() hooks in a component?',
    answer: 'Yes. Multiple useEffect() hooks can be used to separate different side effects clearly.',
  },
  {
    question: "What happens if we don't provide a dependency array?",
    answer: 'The effect runs after every render.',
  },
  {
    question: 'What happens if we provide an empty dependency array []?',
    answer: 'The effect runs only once after the first render, when the component loads.',
  },
  {
    question: 'What happens if we provide dependencies inside the dependency array?',
    answer: 'The effect runs after the first render and again whenever any dependency value changes.',
  },
];

function PageLoadMessage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage('Component Loaded');
  }, []);

  return (
    <TaskCard number="1" title="Page Load Message">
      <p className="output-box">{message}</p>
    </TaskCard>
  );
}

function CounterUpdate() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count Updated');
  }, [count]);

  return (
    <TaskCard number="2" title="Counter Update">
      <p className="big-value">{count}</p>
      <div className="button-row">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </TaskCard>
  );
}

function DynamicPageTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count : ${count}`;
  }, [count]);

  return (
    <TaskCard number="3" title="Dynamic Page Title">
      <p className="big-value">{count}</p>
      <p>The browser tab title changes to: Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Title Count</button>
    </TaskCard>
  );
}

function UserDataFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        setUsers(data);
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <TaskCard number="4" title="User Data Fetch" wide>
      {loading && <p className="output-box">Loading users...</p>}
      {error && <p className="error-box">{error}</p>}
      {!loading && !error && (
        <div className="user-grid">
          {users.map((user) => (
            <article className="user-card" key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.address.city}</p>
            </article>
          ))}
        </div>
      )}
    </TaskCard>
  );
}

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((currentSeconds) => currentSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <TaskCard number="5" title="Timer">
      <p className="big-value">{seconds}</p>
      <p>Timer increases every second. Cleanup clears interval when component unmounts.</p>
    </TaskCard>
  );
}

function ClockApplication() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <TaskCard number="6" title="Clock Application">
      <p className="clock-value">{time.toLocaleTimeString()}</p>
      <p>Digital clock updates every second using useEffect cleanup.</p>
    </TaskCard>
  );
}

function TheorySection() {
  return (
    <section className="theory-card">
      <h2>useEffect() Questions</h2>
      <div className="question-grid">
        {questions.map((item) => (
          <article key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function TaskCard({ number, title, children, wide = false }) {
  return (
    <article className={wide ? 'task-card wide-card' : 'task-card'}>
      <span className="task-number">Task {number}</span>
      <h2>{title}</h2>
      {children}
    </article>
  );
}

function App() {
  return (
    <main className="app">
      <header className="page-header">
        <p>React Practice</p>
        <h1>Day 12 useEffect</h1>
      </header>

      <TheorySection />

      <section className="task-grid">
        <PageLoadMessage />
        <CounterUpdate />
        <DynamicPageTitle />
        <UserDataFetch />
        <Timer />
        <ClockApplication />
      </section>
    </main>
  );
}

export default App;
