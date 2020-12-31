import React from 'react';
import Router from './components/Router';
import { BrowserRouter } from 'react-router-dom';
import Navbar_ from './components/Navbar';

function App() {
  
  return (
    
    <BrowserRouter >
      <div>
        {/* <Login /> */}

        <Navbar_ />
        
        {/* <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        /><script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin />

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossorigin
        />

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin
        /> */}
        <Router />

      </div>
    </BrowserRouter>
  );
}

export default App;
