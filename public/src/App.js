import './App.scss';
import FooterTop from './components/FooterTop/FooterTop';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <FooterTop />
    </div>
  );
}

export default App;
