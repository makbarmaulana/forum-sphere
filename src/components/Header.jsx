import React from 'react';
import Navigation from './styled/Navigation';

function Header({ keyword, setKeyword }) {
  return (
    <Navigation keyword={keyword} setKeyword={setKeyword} />
  );
}

export default Header;
