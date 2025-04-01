const SectionForm = ({
  labelName,
  sectionValue,
  setSectionValue,
  children,
}) => {
  return (
    <label className="task-form__label">
      {labelName}
      <select
        className="task-form__select"
        value={sectionValue}
        onChange={(e) => setSectionValue(e.target.value)}
      >
        {children}
      </select>
    </label>
  )
}

export default SectionForm
