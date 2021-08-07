import React from 'react';
import './App.css';
import { NewShirtModal } from './components/ShirtModal';
import { ShirtTable } from './components/ShirtTable';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <h3>Shirts</h3>
      <div style={{maxWidth: '70%', margin: 'auto'}}>
        <div style={{textAlign: 'right'}}>
          <NewShirtModal />
        </div>
        <ShirtTable />
      </div>
    </div>
  );
}

export default App;
