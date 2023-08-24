import React, { useState } from "react";
import Header from "./components/Header";
import Service from "./components/Service";
import ServiceTwo from "./components/ServiceTwo";
import FormContact from "./components/FormContact";
import Footer from "./components/Footer";

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <div className={menu ? "App open" : "App"}>
      <Header menu={menu} setMenu={setMenu} />
      <Service />
      <ServiceTwo />
      <FormContact />
      <Footer />
    </div>
  );
}

export default App;
