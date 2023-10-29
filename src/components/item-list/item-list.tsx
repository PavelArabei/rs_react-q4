import './item-list.scss';
import React from 'react';
import { CharacterResponseInterface } from '../../services/rick-api/rick-api.models.ts';
import Item from '../item/item.tsx';

interface ItemListProps {
  rickResponse: CharacterResponseInterface;
}

const ItemList: React.FC<ItemListProps> = ({ rickResponse }) => {
  const itemsArray = rickResponse.results;
  return (
    <div className={'item-list'}>
      {itemsArray.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ItemList;
