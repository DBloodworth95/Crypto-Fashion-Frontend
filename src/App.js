import React from 'react';
import './App.css';
import { ShirtTable } from './components/ShirtTable';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ShirtTable} />
          <Route path="/" component={() => <div>Error 404: Page not found.</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;