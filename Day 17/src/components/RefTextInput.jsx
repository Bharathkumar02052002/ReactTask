import { forwardRef, useImperativeHandle, useRef } from 'react';

const RefTextInput = forwardRef(function RefTextInput({ onTyping }, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focusInput() {
      inputRef.current.focus();
    },
    clearInput() {
      inputRef.current.value = '';
      onTyping('');
      inputRef.current.focus();
    },
    getInputValue() {
      return inputRef.current.value;
    },
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      onChange={(event) => onTyping(event.target.value)}
      placeholder="Type text here"
    />
  );
});

export default RefTextInput;
