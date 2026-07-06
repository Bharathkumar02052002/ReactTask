import { useMemo, useRef, useState } from 'react';
import SearchInput from './SearchInput.jsx';

function SearchTask({ number, title, searchBy, example, items }) {
  const [searchText, setSearchText] = useState('');
  const [lastRefValue, setLastRefValue] = useState('');
  const searchInputRef = useRef(null);

  const filteredItems = useMemo(() => {
    const query = searchText.trim().toLowerCase();

    if (!query) return items;

    return items.filter((item) => item.toLowerCase().includes(query));
  }, [items, searchText]);

  const showRefValue = () => {
    setLastRefValue(searchInputRef.current.getInputValue());
  };

  return (
    <article className="task-card">
      <span className="task-number">Task {number}</span>
      <h2>{title}</h2>
      <p className="hint">Search by: <strong>{searchBy}</strong></p>

      <SearchInput
        ref={searchInputRef}
        value={searchText}
        onChange={setSearchText}
        placeholder={`Example: ${example}`}
      />

      <div className="button-row">
        <button onClick={() => searchInputRef.current.focusInput()}>Focus</button>
        <button className="secondary" onClick={() => searchInputRef.current.clearInput()}>Clear</button>
        <button className="secondary" onClick={showRefValue}>Read Ref Value</button>
      </div>

      {lastRefValue && <p className="ref-value">Ref Value: {lastRefValue}</p>}

      <div className="result-box">
        <h3>Output</h3>
        {filteredItems.length === 0 ? (
          <p className="empty-text">No result found</p>
        ) : (
          <ul>
            {filteredItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export default SearchTask;
