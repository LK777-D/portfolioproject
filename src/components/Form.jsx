import "./Form.css";

const Form = () => {
  return (
    <div className="form-container">
      <form className="form">
        <span className="heading">Get In Touch</span>
        <input placeholder="Name" type="text" className="input" />
        <input placeholder="Email" id="mail" type="email" className="input" />
        <textarea
          placeholder="Send Email..."
          rows="10"
          cols="30"
          id="message"
          name="message"
          className="textarea"
        ></textarea>
        <div className="button-container">
          <button type="submit" className="send-button">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
