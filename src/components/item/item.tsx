import { CharacterInterface } from '../../services/rick-api/rick-api.models.ts';
import React from 'react';
import s from './item.module.scss';

interface ItemListProps {
  item: CharacterInterface;
}

const Item: React.FC<ItemListProps> = ({ item }) => {
  return (
    <div className={s.item}>
      <h4>{item.name}</h4>
      <img className={s.item__img} src={item.image} alt={item.name} />
      <p>Gender: {item.gender}</p>
    </div>
  );
};

export default Item;
