import React, { useEffect, useState } from 'react';
import './stiles.scss';
import logoImg from './assets/images/logo.png';
import menuImg from './assets/images/menu.png';
import avatarImg from './assets/images/avatar.png';
import Cube from './components/cubo/cubo';

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const menuButton = document.getElementById('menu-button');
    const menuList = document.getElementById('menu-list');

    if (menuButton) {
      menuButton.addEventListener('click', toggleMenu);

      return () => {
        menuButton.removeEventListener('click', toggleMenu);
      };
    }

    if (menuList) {
      menuList.addEventListener('click', () => {
        setMenuActive(false);
      });

      return () => {
        menuList.removeEventListener('click', () => {
          setMenuActive(false);
        });
      };
    }
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className={`menu ${menuActive ? 'active' : ''}`}>
          <button className="menu-button" id="menu-button">
            <img src={menuImg} className="menu" alt="Menu" />
          </button>
          <img src={logoImg} alt="Logo UAM" />
          <ul className="menu-list" id="menu-list">
            <li><a href="./pages/flex.html">Fexbox</a></li>
            <li><a href="./pages/Products.html">Products</a></li>
            <li><a href="./pages/contact.html">Contact</a></li>
          </ul>
          <div className="avatar-container">
            <img src={avatarImg} className="avatar" alt="Foto de perfil" />
          </div>
        </div>
      </div>
      <Cube />
    </div>
  );
}

export default App;
