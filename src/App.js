import React from 'react';
import './App.css';
import { UnderC } from './components/UnderC';


function App() {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);

  return (
    <UnderC/>
  );
}

export default App;
