import './header.scss';
import React, { useEffect, useState } from 'react';
import { RickApiServices } from '../../services/rick-api/rick-api.services.ts';
import { CharacterResponseInterface } from '../../services/rick-api/rick-api.models.ts';

const Header = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [response, setResponse] = useState<CharacterResponseInterface | null>(null);

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

    const response: CharacterResponseInterface | undefined =
      await RickApiServices.characterSearch(searchText);
    if (response) setResponse(response);
  };

  return (
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

      <p>{JSON.stringify(response)}</p>
    </header>
  );
};

export default Header;
