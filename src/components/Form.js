import '../styles/components/Form.scss';

function Form(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
      };
    const handleInputLetter = (ev) => {
        const userLetter = ev.currentTarget.value;
        props.handleInput(userLetter);
    }
    
  return (
    <form onSubmit={handleSubmit} className="form">
    <label className="title" htmlFor="last-letter">
      Escribe una letra:
    </label>
    <input
      onChange={handleInputLetter}
      autoComplete="off"
      className="form__input"
      maxLength="1"
      type="text"
      value={props.lastLetter}
      name="last-letter"
      id="last-letter"
    />
  </form>
  );
}

export default Form;
