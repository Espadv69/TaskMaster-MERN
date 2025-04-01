const InputForm = ({
  labelTitle,
  inputValue,
  setInputValue,
  setInputLength,
  placeholder,
}) => {
  return (
    <label className="task-form__label">
      {labelTitle}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="task-form__input"
        maxLength={setInputLength}
        placeholder={placeholder}
      />
    </label>
  )
}

export default InputForm
