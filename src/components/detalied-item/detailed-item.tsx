import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CharacterInterface } from '../../services/rick-api/rick-api.models.ts';
import s from './detailed-item.module.scss';

interface DetailedItemProps {}

const DetailedItem: React.FC<DetailedItemProps> = () => {
  const { item } = useLoaderData() as { item: CharacterInterface };
  return (
    <div className={s.wrapper}>
      <div className={s.item}>
        <h4>{item.name}</h4>
        <img className={s.item__img} src={item.image} alt={item.name} />
        <p>Gender: {item.gender}</p>
        <p>Status: {item.status}</p>
        <p>Species: {item.species}</p>
      </div>
    </div>
  );
};

export default DetailedItem;
