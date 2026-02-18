import HeaderBrand from './HeaderBrand';
import './Header.css';

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="header-inner">
        <HeaderBrand />
        <nav className="header-nav" aria-label="Main">
          <ul className="header-nav-list">
            <li><a href="#home" className="header-nav-link header-nav-link--blue">Home</a></li>
            <li><a href="#work" className="header-nav-link header-nav-link--green">Work</a></li>
            <li><a href="#contact" className="header-nav-link header-nav-link--red">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
