import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdminSidebar } from './components/admin/AdminSidebar';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={AdminSidebar} />
          <Route path="/" component={() => <div>Error 404: Page not found.</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;