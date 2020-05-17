import React, { useState } from 'react';

import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderNavContainer,
  Dropdown,
  DropdownList,
} from './header.styled';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth';
import { setFavouritesVisible } from 'redux/fav-slide-panel';
import { useHistory } from 'react-router-dom';

interface HeaderModel {
  contextMenu?: boolean;
}

const Header: React.FC<HeaderModel> = ({ contextMenu = false }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const onFavouritesShow = () => {
    dispatch(setFavouritesVisible());
    toggleMenuVisibility();
  };
  const onLogout = () => {
    dispatch(logout());
    history.push('/login');
  };
  const onShowRandomActivity = () => {
    console.log('showing random activity');
  };

  const toggleMenuVisibility = () => setMenuVisible((prevState) => !prevState);

  const getContextMenu = () => {
    return (
      <>
        <HeaderNavContainer onClick={toggleMenuVisibility}>
          {menuVisible ? (
            <i className='fas fa-angle-up' />
          ) : (
            <i className='fas fa-angle-down' />
          )}
        </HeaderNavContainer>
        {menuVisible && (
          <Dropdown>
            <DropdownList>
              <li onClick={onFavouritesShow}>Show favourites</li>
              <li onClick={onShowRandomActivity}>I'm super bored!</li>
              <li onClick={onLogout}>Logout</li>
            </DropdownList>
          </Dropdown>
        )}
      </>
    );
  };

  return (
    <HeaderContainer data-testid='header-container'>
      <HeaderLogoContainer>
        <img src='/assets/logo.png' alt='Logo' height='60' width='60'></img>
      </HeaderLogoContainer>
      {contextMenu && getContextMenu()}
    </HeaderContainer>
  );
};
export default Header;
