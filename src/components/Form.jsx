import "./Form.css";
/* eslint-disable react/prop-types */

const Form = () => {
  return (
    <div className="form-container">
      <form
        name="contact v1"
        method="POST"
        data-netlify="true"
        onSubmit="submit"
        className="form"
      >
        <input type="hidden" name="form-name" value="contact v1" />
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
          <button type="submit" className="send-button">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
