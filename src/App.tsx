import './App.scss';
import ItemList from './components/item-list/item-list.tsx';
import Header from './components/header/header.tsx';
import Footer from './components/footer/footer.tsx';

function App() {
  return (
    <>
      <Header />
      <main className={'main'}>
        <ItemList />
      </main>
      <Footer />
    </>
  );
}

export default App;
