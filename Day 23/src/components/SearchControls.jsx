import { memo } from 'react';

const SearchControls = memo(function SearchControls({ searchText, sortType, onSearchChange, onSortChange, onClearSearch }) {
  console.log('SearchControls rendered');

  return (
    <section className="controls-card">
      <label>
        Search Products
        <input
          value={searchText}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by product, brand, category"
        />
      </label>

      <label>
        Sort Products
        <select value={sortType} onChange={(event) => onSortChange(event.target.value)}>
          <option value="default">Default</option>
          <option value="price-low-high">Price Low to High</option>
          <option value="price-high-low">Price High to Low</option>
          <option value="rating-high-low">Rating High to Low</option>
          <option value="title-a-z">Title A to Z</option>
        </select>
      </label>

      <button onClick={onClearSearch}>Clear Search</button>
    </section>
  );
});

export default SearchControls;
