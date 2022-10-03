import React from 'react';
import './Header.scss'

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__title-box">
          <h3 className='header__title'>Hello Kruluz Utsman</h3>
          <p className='header__tit'>4.45 pm 19 Jan 2022</p>
        </div>

        <div className="header__user-box">
          <p className='header__user-name'>Kruluz Utsman</p>
          <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" alt="avater" />
        </div>
      </header>
    </>
  );
}
