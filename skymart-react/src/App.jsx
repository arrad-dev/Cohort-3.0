import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import CategoryTabs from './components/CategoryTabs.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import Benefits from './components/Benefits.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import Footer from './components/Footer.jsx';
import { categories, products } from './data/products.js';
import { useCart } from './hooks/useCart.js';

export default function App() {
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('skymart-theme') || 'dark';
    } catch {
      return 'dark';
    }
  });
  const cart = useCart();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('skymart-theme', theme);
    } catch {
      // The site still works when storage is blocked.
    }
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = cartOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [cartOpen]);

  const visibleProducts = useMemo(() => {
    const term = search.trim().toLowerCase();
    return products.filter((product) => {
      const categoryMatches = category === 'all' || product.category === category;
      const searchMatches = !term || product.name.toLowerCase().includes(term);
      return categoryMatches && searchMatches;
    });
  }, [category, search]);

  return (
    <div id="top">
      <Header
        search={search}
        setSearch={setSearch}
        totalItems={cart.totalItems}
        onCartOpen={() => setCartOpen(true)}
        theme={theme}
        onThemeToggle={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
      />
      <main>
        <Hero />
        <section className="section products-section" id="products">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <span className="kicker">Curated essentials</span>
                <h2>Technology worth keeping.</h2>
              </div>
              <p>Useful products selected for performance, design, and everyday value.</p>
            </div>
            <CategoryTabs categories={categories} selected={category} onSelect={setCategory} />
            <ProductGrid products={visibleProducts} onAdd={cart.addItem} />
          </div>
        </section>
        <Benefits />
      </main>
      <Footer />
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart.items}
        subtotal={cart.subtotal}
        changeQuantity={cart.changeQuantity}
        removeItem={cart.removeItem}
        clearCart={cart.clearCart}
      />
    </div>
  );
}
