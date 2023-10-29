import './App.scss';
import Header from './components/header/header.tsx';
import Footer from './components/footer/footer.tsx';
import { useState } from 'react';
import { CharacterResponseInterface } from './services/rick-api/rick-api.models.ts';
import MainPage from './pages/main/main-page.tsx';

function App() {
  const [rickResponse, setRickResponse] = useState<CharacterResponseInterface | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const setResponseCB = (res: CharacterResponseInterface | null) => {
    setRickResponse(res);
  };
  const setIsLoadingCB = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };
  return (
    <>
      <Header setResponseCB={setResponseCB} setIsLoadingCB={setIsLoadingCB} />
      <main className={'main'}>
        {isLoading ? 'loading' : <MainPage rickResponse={rickResponse} />}
      </main>
      <Footer />
    </>
  );
}

export default App;
