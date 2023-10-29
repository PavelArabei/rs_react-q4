import './App.scss';
import Header from './components/header/header.tsx';
import Footer from './components/footer/footer.tsx';
import MainPage from './pages/main/main-page.tsx';

function App() {
  return (
    <>
      <Header />
      <main className={'main'}>
        <MainPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
