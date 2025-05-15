import { useState } from 'react';
import Menu from '../menu';
import Logo from '../../Logo';

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center  w-full px-4">
      <Logo />
      <Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default Header
