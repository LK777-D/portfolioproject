import Header from "./Header";
import Navbar from "./Navbar";
import "./TopComponentsLayout.css";

const TopLayout = () => {
  return (
    <header className="header">
      <Navbar />
      <Header />
    </header>
  );
};

export default TopLayout;
