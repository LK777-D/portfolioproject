import "./Form.css";
/* eslint-disable react/prop-types */

const Form = (props) => {
  const submitForm = (event) => {
    props.setSubmit(true);
    event.preventDefault();
    setTimeout(() => {
      props.setSubmit(false);
    }, 700);
  };

  return (
    <div className="form-container">
      <form name="contact" method="POST" data-netlify="true" className="form">
        <span className="heading">Get In Touch</span>
        <input type="text" name="name" placeholder="Name" className="input" />
        <input
          placeholder="Email"
          id="mail"
          type="email"
          name="email"
          className="input"
          required
        />
        <textarea
          placeholder="Send Email..."
          rows="10"
          cols="30"
          id="message"
          name="message"
          className="textarea"
          required
        ></textarea>
        <div className="button-container">
          <button onClick={submitForm} type="submit" className="send-button">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
