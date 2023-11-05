import ItemList from '../../components/item-list/item-list.tsx';
import React from 'react';
import { CharacterResponseInterface } from '../../services/rick-api/rick-api.models.ts';
import { Outlet } from 'react-router-dom';
import s from './main-page.module.scss';
import Pagination from '../../components/pagination/pagination.tsx';

interface MainPageProps {
  rickResponse: CharacterResponseInterface | null;
}

const MainPage: React.FC<MainPageProps> = ({ rickResponse }) => {
  if (!rickResponse) return <h1>No results...</h1>;

  return (
    <div className={s.wrapper}>
      <div>
        <Pagination info={rickResponse.info} />
        <ItemList rickResponse={rickResponse} />
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainPage;
