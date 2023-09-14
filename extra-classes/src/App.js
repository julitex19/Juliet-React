import { useContext } from 'react';
import './App.css';
import List from './components/List';
import { context } from './components/Provider';

function App() {
  const {mode} = useContext(context)

  return (
      <div className={`app ${mode}`}>
        <List />
      </div>
      
   
  );
}

export default App;
