import { useRef, useState } from 'react';
import RefTextInput from './components/RefTextInput.jsx';

function App() {
  const [typedText, setTypedText] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [isProcessOn, setIsProcessOn] = useState(false);
  const textInputRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const displayTextFromRef = () => {
    const currentValue = textInputRef.current.getInputValue();
    setButtonText(currentValue || 'No text typed yet');
  };

  return (
    <main className="app">
      <nav className="navbar">
        <strong>Day 17</strong>
        <div>
          <button onClick={() => scrollToSection(homeRef)}>Home</button>
          <button onClick={() => scrollToSection(aboutRef)}>About</button>
          <button onClick={() => scrollToSection(contactRef)}>Contact</button>
        </div>
      </nav>

      <section className="page-section hero-section" ref={homeRef}>
        <div className="section-content">
          <p className="eyebrow">React Practice</p>
          <h1>useRef, Focus, Values and useImperativeHandle</h1>
          <div className="task-card">
            <h2>Input Text Display</h2>
            <RefTextInput ref={textInputRef} onTyping={setTypedText} />
            <p className="live-text">Typing Text: <strong>{typedText || 'Start typing...'}</strong></p>

            <div className="button-row">
              <button onClick={() => textInputRef.current.focusInput()}>Focus Input</button>
              <button onClick={displayTextFromRef}>Display Text</button>
              <button className="secondary" onClick={() => textInputRef.current.clearInput()}>Clear</button>
            </div>

            <p className="output-box">Button Click Text: <strong>{buttonText || 'Click Display Text'}</strong></p>
          </div>
        </div>
      </section>

      <section className="page-section about-section" ref={aboutRef}>
        <div className="section-content two-column">
          <article>
            <p className="eyebrow">About</p>
            <h2>Single Page Scrolling Application</h2>
            <p>
              This page uses section refs for Home, About and Contact. Clicking the navigation buttons scrolls to each section without changing pages.
            </p>
          </article>

          <article className="task-card compact-card">
            <h2>Toggle Process On/Off</h2>
            <button className={isProcessOn ? 'toggle on' : 'toggle'} onClick={() => setIsProcessOn(!isProcessOn)}>
              {isProcessOn ? 'Process ON' : 'Process OFF'}
            </button>
            <p className={isProcessOn ? 'status on' : 'status'}>
              {isProcessOn ? 'Toggle process is running' : 'Toggle process is stopped'}
            </p>
          </article>
        </div>
      </section>

      <section className="page-section contact-section" ref={contactRef}>
        <div className="section-content">
          <p className="eyebrow">Contact</p>
          <h2>Contact Section</h2>
          <p>
            This final section is part of the same scrolling page. The navigation buttons use refs to move here directly.
          </p>
          <div className="contact-box">
            <p>Name: <strong>Bharath</strong></p>
            <p>Task: <strong>Day 17 useRef Assignment</strong></p>
            <p>Status: <strong>Completed</strong></p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
