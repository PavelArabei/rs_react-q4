import './main-page.scss';
import ItemList from '../../components/item-list/item-list.tsx';
import { Component } from 'react';
import { CharacterResponseInterface } from '../../services/rick-api/rick-api.models.ts';

interface MainPageProps {
  rickResponse: CharacterResponseInterface | null;
}

class MainPage extends Component<MainPageProps> {
  render() {
    const { rickResponse } = this.props;

    if (!rickResponse) {
      return <h1>No results...</h1>;
    }

    return <ItemList rickResponse={rickResponse} />;
  }
}

export default MainPage;
