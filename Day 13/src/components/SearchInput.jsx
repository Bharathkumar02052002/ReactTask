import { forwardRef, useImperativeHandle, useRef } from 'react';

const SearchInput = forwardRef(function SearchInput({ value, onChange, placeholder }, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focusInput() {
      inputRef.current.focus();
    },
    clearInput() {
      onChange('');
      inputRef.current.focus();
    },
    getInputValue() {
      return inputRef.current.value;
    },
  }));

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
    />
  );
});

export default SearchInput;
