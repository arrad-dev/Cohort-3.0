import { Heart, ShoppingBag, Star } from 'lucide-react';
import { useState } from 'react';

export default function ProductCard({ product, onAdd }) {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  const addToCart = () => {
    onAdd(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1000);
  };

  return (
    <article className="product-card">
      <div className={`product-media accent-${product.accent}`}>
        <span className="product-badge">{product.badge}</span>
        <button
          className={`heart-button ${liked ? 'liked' : ''}`}
          onClick={() => setLiked((current) => !current)}
          aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart size={18} fill={liked ? 'currentColor' : 'none'} />
        </button>
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="product-body">
        <div className="rating-row">
          <Star size={15} fill="currentColor" />
          <span>{product.rating}</span>
          <span className="muted">({product.reviews})</span>
        </div>
        <h3>{product.name}</h3>
        <div className="product-footer">
          <div className="price-wrap">
            <strong>${product.price}</strong>
            <span>${product.oldPrice}</span>
          </div>
          <button className={`add-button ${added ? 'added' : ''}`} onClick={addToCart}>
            <ShoppingBag size={17} />
            <span>{added ? 'Added' : 'Add'}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
