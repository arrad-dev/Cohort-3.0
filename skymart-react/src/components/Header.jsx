import { Menu, Moon, Search, ShoppingBag, Sun, User, X } from 'lucide-react';
import { useState } from 'react';

export default function Header({ search, setSearch, totalItems, onCartOpen, theme, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="announcement">
        <span>Free delivery on orders over $75</span>
        <span className="announcement-dot">•</span>
        <span>30-day easy returns</span>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="SkyMart home">
            <span className="brand-mark">S</span>
            <span>SkyMart</span>
          </a>

          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            <a href="#new" onClick={() => setMenuOpen(false)}>New arrivals</a>
            <a href="#products" onClick={() => setMenuOpen(false)}>Shop</a>
            <a href="#benefits" onClick={() => setMenuOpen(false)}>Why us</a>
            <a href="#newsletter" onClick={() => setMenuOpen(false)}>Offers</a>
          </nav>

          <div className="header-actions">
            <label className="search-box" aria-label="Search products">
              <Search size={18} />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search products"
              />
            </label>

            <button className="icon-button desktop-only" onClick={onThemeToggle} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <button className="icon-button desktop-only" aria-label="Account"><User size={19} /></button>
            <button className="icon-button cart-button" onClick={onCartOpen} aria-label="Open cart">
              <ShoppingBag size={19} />
              {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </button>
            <button className="icon-button mobile-menu" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu">
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
