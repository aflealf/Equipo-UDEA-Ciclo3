import logo from './logo.svg';
import './App.css';
import Login from './app/Components/Login/Login.js'
import Header from './app/Components/Header/Header.js'

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <body>
        <Login />
      </body>
    </div>
  );
}

export default App;
