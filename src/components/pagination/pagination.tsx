import React from 'react';
import { CharacterInfo } from '../../services/rick-api/rick-api.models.ts';
import { NavLink, useParams } from 'react-router-dom';
import s from './pagination.module.scss';

interface PaginationProps {
  info: CharacterInfo;
}

const Pagination: React.FC<PaginationProps> = ({ info }) => {
  const { id } = useParams();

  const newArray = Array.from({ length: info.pages }, (_, index) => index + 1);

  const paginationArray = newArray.filter((_, index) => {
    if (index === 0 || index === newArray.length - 1) return true;
    if (id) {
      if (index + 1 === +id || index + 1 === +id - 1 || index + 1 === +id + 1)
        return true;
    }
    return false;
  });

  return (
    <div className={s.container}>
      {paginationArray.map((pageNumber, i, array) => {
        return (
          <div className={s.linkContainer} key={pageNumber}>
            {i === array.length - 1 && pageNumber !== +id! && <p>...</p>}
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.linkButton} ${s.active}` : `${s.linkButton}`
              }
              to={String(pageNumber)}
            >
              {pageNumber}
            </NavLink>
            {pageNumber === 1 && +id! !== 1 && <p>...</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
