import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Login from './components/auth/login/login.js'
import Auth from './components/auth/auth';
import './App.css';
function App() {
  return (
    <div className="App">
      <h3 className="mb-4">Welcome to Marhaba Livraison</h3>

      <Auth/>

    </div>
  );
}
export default App;