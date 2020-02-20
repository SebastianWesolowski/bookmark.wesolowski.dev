import React from 'react';
import PropTypes from 'prop-types';
import {Menu} from 'antd';
import MenuItem from './MenuItem';

const NavMenu = ({theme, ...props}) => {
  return (
    <Menu theme={theme} {...props} mode="inline" defaultSelectedKeys={['1']}>
      <MenuItem key="1" iconType="twitter">
        Titter
      </MenuItem>
      <MenuItem key="2" iconType="container">
        Artykuły
      </MenuItem>
      <MenuItem key="3" iconType="file-text">
        Notatki
      </MenuItem>
    </Menu>
  );
};

NavMenu.defaultProps = {
  theme: 'dark',
};

NavMenu.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']),
};

export default NavMenu;
