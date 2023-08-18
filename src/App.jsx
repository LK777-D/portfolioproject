import "./App.css";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Form from "./components/Form";
import FormImg from "./UI/FormImg";
import TopLayout from "./components/TopComponentsLayout";
import Footer from "./components/Footer";
import { useState } from "react";
import Alert from "./UI/Alert";

function App() {
  const [submit, setSubmit] = useState(false);
  return (
    <>
      {submit && <Alert />}
      <TopLayout />
      <Projects />
      <Skills />
      <section id="formsection">
        <h2>Let s Get In Touch</h2>
        <span>Fill The Form To Contact</span>
        <div className="formwithimg">
          <Form setSubmit={setSubmit} />
          <FormImg />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
