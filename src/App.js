import React, { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  margin-top:100px;
  `;

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
        <Dashboard />
    </div>
  );
}

export default App;
