import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListStudentComponent from './components/ListStudentComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListStudentComponent />} />
            <Route path="/student" element={<ListStudentComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;
