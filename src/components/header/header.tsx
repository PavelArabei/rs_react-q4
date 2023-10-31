import './header.scss';
import React, { Component } from 'react';
import { RickApiServices } from '../../services/rick-api/rick-api.services.ts';
import { CharacterResponseInterface } from '../../services/rick-api/rick-api.models.ts';

interface HeaderProps {
  setResponseCB: (res: CharacterResponseInterface | null) => void;
  setIsLoadingCB: (isLoading: boolean) => void;
}

interface HeaderState {
  searchText: string;
  error: boolean;
}

class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);

    this.state = {
      searchText: '',
      error: false,
    };
  }

  componentDidMount() {
    const savedSearchText = localStorage.getItem('searchTerm');
    if (savedSearchText) this.setState({ searchText: savedSearchText });
  }

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchText: e.target.value.trim() });
  };

  handleSearch = async () => {
    const { searchText } = this.state;
    const { setResponseCB, setIsLoadingCB } = this.props;

    if (searchText) {
      localStorage.setItem('searchTerm', searchText);
    }

    setIsLoadingCB(true);

    const response: CharacterResponseInterface | undefined =
      await RickApiServices.characterSearch(searchText);

    if (response) {
      setResponseCB(response);
    } else {
      setResponseCB(null);
    }

    setIsLoadingCB(false);
  };

  setError = () => {
    this.setState({ error: true });
    console.log(this.state);
  };

  render() {
    const { searchText } = this.state;
    if (this.state.error) {
      throw new Error('Something go wrong');
    }
    return (
      <>
        <button className={'throw-error-button'} onClick={this.setError}>
          BIG BAD BUTTON TO THROW ERROR
        </button>
        <h1>RICK AND MORTY</h1>
        <header className={'header'}>
          <input
            value={searchText}
            type="text"
            onChange={this.handleSearchChange}
            className={'header__input'}
          />
          <button onClick={this.handleSearch} className={'header__button'}>
            click me!
          </button>
        </header>
      </>
    );
  }
}

export default Header;
