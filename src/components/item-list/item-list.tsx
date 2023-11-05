import s from './item-list.module.scss';
import { CharacterResponseInterface } from '../../services/rick-api/rick-api.models.ts';
import Item from '../item/item.tsx';
import React from 'react';

interface ItemListProps {
  rickResponse: CharacterResponseInterface;
}

const ItemList: React.FC<ItemListProps> = ({ rickResponse }) => {
  const itemsArray = rickResponse.results;

  function goToMainPage() {}

  return (
    <div onClick={goToMainPage} className={s.item_list}>
      {itemsArray.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ItemList;
