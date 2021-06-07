import "./App.css";
import Login from "./pages/Login";
import Nav from "./components/Navbar.tsx";
import { BrowserRouter, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import React, { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3333/api/user", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const content = await res.json();
      if (content.name) setName(content.name);
    })();
  });

  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Nav name={name} setName={setName} />
          <Route path="/" exact component={() => <Home name={name} />} />
          <Route path="/login" component={() => <Login setName={setName} />} />
          <Route path="/register" component={Register} />
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
