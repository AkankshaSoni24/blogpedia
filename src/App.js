import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title="BLOGPEDIA" />
        <Navigation />
        <Footer />
      </header>
    </div>
  );
}

export default App;
