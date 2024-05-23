import React from "react";
import Nav from "./components/Navbar";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";

const App = () => {
    return(
        <main className="p-4 text-gray-400">
          <Nav></Nav>
          <Hero/>
          <Skills/>
          <Contact/>
          <Footer/>
        </main>
    )
}
export default App;