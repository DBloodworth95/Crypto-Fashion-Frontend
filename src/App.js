import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdminSidebar } from './components/admin/AdminSidebar';
import { HomeIndex } from './components/home/HomeIndex';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/admin" exact component={AdminSidebar} />
          <Route path="/" exact component={HomeIndex} />
          <Route path="/" component={() => <div>Error 404: Page not found.</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;