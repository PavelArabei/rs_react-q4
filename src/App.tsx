import './App.scss';
import Header from './components/header/header.tsx';
import Footer from './components/footer/footer.tsx';
import { Component } from 'react';
import { CharacterResponseInterface } from './services/rick-api/rick-api.models.ts';
import MainPage from './pages/main/main-page.tsx';

interface AppState {
  rickResponse: CharacterResponseInterface | null;
  isLoading: boolean;
}
interface AppProps {}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      rickResponse: null,
      isLoading: false,
    };
  }
  setResponseCB = (res: CharacterResponseInterface | null) => {
    this.setState({ rickResponse: res });
  };

  setIsLoadingCB = (isLoading: boolean) => {
    this.setState({ isLoading });
  };

  render() {
    const { rickResponse, isLoading } = this.state;

    return (
      <>
        <Header
          setResponseCB={this.setResponseCB}
          setIsLoadingCB={this.setIsLoadingCB}
        />
        <main className="main">
          {isLoading ? 'loading' : <MainPage rickResponse={rickResponse} />}
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
