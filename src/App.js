import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import HistoryPage from './Pages/HistoryPage';
import NotFoundPage from './Pages/NotFoundPage';
import './App.css';

const App = () => {

  const [prevSearchTerms, setPrevSearchTerms] = useState([])

  return (
    <div>
      <div>
        <Navbar />
      </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search" component={() => <SearchPage prevSearchTerms={prevSearchTerms} setPrevSearchTerms={setPrevSearchTerms} />} />
          <Route exact path="/history" component={() => <HistoryPage prevSearchTerms={prevSearchTerms} setPrevSearchTerms={setPrevSearchTerms} />} />
          <Route component={NotFoundPage} />
        </Switch>
    </div>
  );
}

export default App;
