import React, { useState } from 'react';

import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderNavContainer,
} from './header.styled';

interface HeaderModel {
  contextMenu?: boolean;
}

const Header: React.FC<HeaderModel> = ({ contextMenu = false }) => {
  const [menuVisible, setMenuVisible] = useState(false);

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
        {menuVisible && <span>Menu Visible</span>}
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
