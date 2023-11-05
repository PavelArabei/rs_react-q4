import React, { useEffect, useState } from 'react';
import { RickApiServices } from '../../services/rick-api/rick-api.services.ts';
import { CharacterResponseInterface } from '../../services/rick-api/rick-api.models.ts';
import s from './header.module.scss';

interface HeaderProps {
  setResponseCB: (res: CharacterResponseInterface | null) => void;
  setIsLoadingCB: (isLoading: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setResponseCB, setIsLoadingCB }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const savedSearchText = localStorage.getItem('searchTerm');
    if (savedSearchText) setSearchText(savedSearchText);
    console.log(s);
    handleSearch().then();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = async (): Promise<void> => {
    if (searchText) {
      localStorage.setItem('searchTerm', searchText);
    }

    setIsLoadingCB(true);

    try {
      const response: CharacterResponseInterface | undefined =
        await RickApiServices.characterSearch(searchText);

      if (response) setResponseCB(response);
      else setResponseCB(null);
    } catch {
      handleError();
    }

    setIsLoadingCB(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value.trim());
  };

  const handleError = () => {
    setError(true);
  };

  if (error) {
    throw new Error('Something go wrong');
  }
  return (
    <>
      <button className={s.throw_err} onClick={handleError}>
        BIG BAD BUTTON TO THROW ERROR
      </button>
      <h1>RICK AND MORTY</h1>
      <header className={s.header}>
        <input
          value={searchText}
          type="text"
          onChange={handleSearchChange}
          className={s.header__input}
        />
        <button onClick={handleSearch} className={s.header__button}>
          click me!
        </button>
      </header>
    </>
  );
};

export default Header;
