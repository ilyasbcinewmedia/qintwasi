import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Mainroute from './layout/Mainroute';
import StartLoader from "./components/StartLoader";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 

    return () => {
      clearTimeout(delay); // Clean up the timer if the component unmounts
    };
  }, []);

  return (
    <React.StrictMode>
      {isLoading ? (
       <StartLoader />
      ) : (
        <Mainroute />
      )}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
