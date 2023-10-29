import './header.scss';
import React, { useEffect, useState } from 'react';
import { RickApiServices } from '../../services/rick-api/rick-api.services.ts';
import { CharacterResponseInterface } from '../../services/rick-api/rick-api.models.ts';

interface HeaderProps {
  setResponseCB: (res: CharacterResponseInterface | null) => void;
  setIsLoadingCB: (isLoading: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setResponseCB, setIsLoadingCB }) => {
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    const savedSearchText = localStorage.getItem('searchTerm');
    if (savedSearchText) setSearchText(savedSearchText);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchText(() => e.target.value.trim());
  };

  const handleSearch = async () => {
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

  return (
    <>
      <h1>RICK AND MORTY</h1>
      <header className={'header'}>
        <input
          value={searchText}
          type="text"
          onChange={handleSearchChange}
          className={'header__input'}
        />
        <button onClick={handleSearch} className={'header__button'}>
          click me!
        </button>
      </header>
    </>
  );
};

export default Header;
