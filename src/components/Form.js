import "../styles/components/Form.scss";
import PropTypes from "prop-types";

function Form({ lastLetter, handleInput }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleInputLetter = (ev) => {
    const userLetter = ev.currentTarget.value;
    handleInput(userLetter);
  };

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
        value={lastLetter}
        name="last-letter"
        id="last-letter"
      />
    </form>
  );
}
Form.defaultProps = {
  lastLetter: "",
  handleInput: null,
};
Form.propTypes = {
  lastLetter: PropTypes.string,
  handleInput: PropTypes.func,
};
export default Form;
