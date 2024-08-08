// src/App.js
import React from 'react';
import Auth from './components/Auth';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Willkommen zur Authentifizierungs-App</h1>
      </header>
      <main>
        <Auth />
      </main>
    </div>
  );
}

export default App;
