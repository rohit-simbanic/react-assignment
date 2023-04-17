import "./App.css";

import Login from "./Pages/Login";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <Login />
      </div>
    </div>
  );
}

export default App;
