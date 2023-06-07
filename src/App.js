import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Subheader from './components/Subheader';
import Categories from './components/Categories';
import Series from './components/Series';
import Movies from './components/Movies';
import Footer from './components/Footer';
import './styles/style.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="content">
          <Header />
          <Subheader />
          <Categories />
          <Routes>
            <Route path="/series" element={<Series />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
