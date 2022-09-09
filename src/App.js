
import React, { useState } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Resume from "./components/Resume";


function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const Page = () => {
    // eslint-disable-next-line
    switch (currentPage) {
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Resume":
          return <Resume />;
      case "Contact":
        return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  );
}

export default App;