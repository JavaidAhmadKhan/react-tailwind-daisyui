import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home/>
      <Footer />
    </div>
  );
}

export default App;
