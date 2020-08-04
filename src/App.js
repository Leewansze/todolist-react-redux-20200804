import React from 'react';
import './App.css';
import Input from './compoment/input';
import Finshtodolist from './compoment/finshtodolist/finshtodolist';
import { HashRouter , Route , Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <Link to="/">All-todolist</Link>
          <Link to="/finsh-todolist">finish-todolist</Link>
          <Route exact path="/" component={Input} />
          <Route path="/finsh-todolist" component={Finshtodolist}/>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
