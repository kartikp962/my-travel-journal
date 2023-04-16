import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Data from './data'

function App() {
  const cards = Data.map(card => 
    <Card
      card={card}      
    />
    )
  return (
    <div className="App">
      <Navbar />
      <section className='container'>
        {cards}
      </section>
    </div>
  );
}

export default App;
