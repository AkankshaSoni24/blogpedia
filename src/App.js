import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Navigation />
        <Footer />
      </header>
    </div>
  );
}

export default App;
