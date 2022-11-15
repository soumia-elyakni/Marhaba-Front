import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Auth from './components/auth/auth';
import './App.css';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>

          <Route path="/" element={<Auth/>} />
          <Route path="/auth" element={<Auth />} />
          {/* <Route path="/*" element={<Error />} /> */}
        
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;