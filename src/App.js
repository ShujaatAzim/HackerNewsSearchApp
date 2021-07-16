import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import HistoryPage from './Pages/HistoryPage';
import NotFoundPage from './Pages/NotFoundPage';
import './App.css';

const App = () => {

  return (
    <div>
      <div>
        <Navbar />
      </div><br />
      <br />
      <div style={{ marginLeft: "2rem" }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search" component={() => <SearchPage />} />
          <Route exact path="/history" component={() => <HistoryPage />} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
