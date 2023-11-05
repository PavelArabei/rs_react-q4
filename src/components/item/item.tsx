import { CharacterInterface } from '../../services/rick-api/rick-api.models.ts';
import React from 'react';
import s from './item.module.scss';
import { NavLink } from 'react-router-dom';

interface ItemProps {
  item: CharacterInterface;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className={s.item}>
      <h4>{item.name}</h4>
      <img className={s.item__img} src={item.image} alt={item.name} />
      <p>Gender: {item.gender}</p>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${s.item__button} ${s.active}` : `${s.item__button}`
        }
        to={`${item.id}`}
      >
        See more..
      </NavLink>
    </div>
  );
};

export default Item;
