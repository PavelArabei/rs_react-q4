import './item.scss';
import { Component } from 'react';
import { CharacterInterface } from '../../services/rick-api/rick-api.models.ts';

interface ItemListProps {
  item: CharacterInterface;
}

class Item extends Component<ItemListProps> {
  render() {
    const { item } = this.props;

    return (
      <div className="item">
        <h4>{item.name}</h4>
        <img className="item__img" src={item.image} alt={item.name} />
        <p>Gender: {item.gender}</p>
      </div>
    );
  }
}

export default Item;
