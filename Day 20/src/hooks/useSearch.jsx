import { useMemo, useState } from 'react';

function useSearch(items, searchKey) {
  const [searchText, setSearchText] = useState('');

  const filteredItems = useMemo(() => {
    const query = searchText.trim().toLowerCase();

    if (!query) return items;

    return items.filter((item) => String(item[searchKey]).toLowerCase().includes(query));
  }, [items, searchKey, searchText]);

  return { searchText, setSearchText, filteredItems };
}

export default useSearch;
