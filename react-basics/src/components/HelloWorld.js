const HelloWorld = () => {
  const handleClick = () => {
    alert('Button Clicked!');
  };

  const name = 'Chuck Norris';
  const addition = 2 + 9;

  return (
    <div>
      <h1 className='title'>Title</h1>
      <h2>Sub title</h2>
      <img
        className='logo'
        src='https://www.patterns.dev/img/reactjs/react-logo@3x.svg'
        alt='logo'
      />
      <p>Paragraph</p>
      <p>{name}</p>
      <p>{addition}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default HelloWorld;
