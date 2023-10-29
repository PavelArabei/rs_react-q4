import './header.scss';

const Header = () => {
  return (
    <header className={'header'}>
      <input type={'text'} className={'header__input'} />
      <button className={'header__button'}>click me!</button>
    </header>
  );
};

export default Header;
