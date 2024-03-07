const TodoFormField = ({ label, placeholder, name, value, onChange }) => {
  return (
    <div className='form-group mb-2'>
      <label className='form-label fw-bold'>{label}:</label>
      <input
        className='form-control'
        type='text'
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default TodoFormField;
