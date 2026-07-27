import { ArrowRight, BadgeCheck, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="new">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> Summer technology edit</div>
          <h1>Upgrade your everyday.</h1>
          <p>
            Thoughtfully selected tech, honest prices, and delivery that keeps up with you.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#products">
              Shop collection <ArrowRight size={18} />
            </a>
            <a className="button button-secondary" href="#benefits">Explore benefits</a>
          </div>
          <div className="hero-trust">
            <span><Truck size={18} /> Fast delivery</span>
            <span><BadgeCheck size={18} /> 1-year warranty</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Featured technology products">
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />
          <div className="visual-card visual-card-main">
            <span className="visual-label">Featured</span>
            <img src="/products/headphones.svg" alt="Nova wireless headphones" />
            <div className="visual-details">
              <div><span>Nova Headphones</span><strong>$129</strong></div>
              <span className="mini-chip">Save $40</span>
            </div>
          </div>
          <div className="floating-card floating-top">
            <span>4.9/5</span>
            <small>2k+ happy shoppers</small>
          </div>
          <div className="floating-card floating-bottom">
            <span>24h</span>
            <small>dispatch available</small>
          </div>
        </div>
      </div>
    </section>
  );
}
