import "./App.css";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Form from "./components/Form";
import FormImg from "./UI/FormImg";
import TopLayout from "./components/TopComponentsLayout";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <TopLayout />
      <Projects />
      <Skills />
      <section id="formsection">
        <h2 className="fontp">Let s Get In Touch</h2>
        <span>Fill The Form To Contact</span>
        <div className="formwithimg">
          <Form />
          <FormImg />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
