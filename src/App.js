import { useState } from 'react';
import { Header } from './components/Header';
import ReactLoading from 'react-loading';
import './css/App.css';

function App() {

  const [ loader, setLoader ] = useState(false); 

  if ( loader == true ) {
    return (
      <div className="Loading">
  
       <ReactLoading type='bubbles' color='#000000' height={'5%'} width={'10%'} />
  
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header></Header>
      </div>
    );
  }
}

export default App;
