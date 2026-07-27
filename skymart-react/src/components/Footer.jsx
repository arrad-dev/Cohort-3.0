import { ArrowRight, Globe2, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer" id="newsletter">
      <div className="container newsletter-card">
        <div>
          <span className="kicker">Members get more</span>
          <h2>Good deals. No inbox clutter.</h2>
          <p>Get early access to launches and one useful offer each week.</p>
        </div>
        <form className="newsletter-form" onSubmit={(event) => event.preventDefault()}>
          <input type="email" placeholder="you@example.com" aria-label="Email address" required />
          <button type="submit" aria-label="Subscribe"><ArrowRight size={19} /></button>
        </form>
      </div>

      <div className="container footer-main">
        <div className="footer-brand">
          <a className="brand" href="#top"><span className="brand-mark">S</span><span>SkyMart</span></a>
          <p>Modern technology for work, play, and everything in between.</p>
          <div className="socials">
            <a href="#" aria-label="Community"><MessageCircle size={18} /></a>
            <a href="#" aria-label="Website"><Globe2 size={18} /></a>
            <a href="#" aria-label="Email"><Mail size={18} /></a>
          </div>
        </div>
        <div className="footer-links">
          <div><strong>Shop</strong><a href="#products">New arrivals</a><a href="#products">Best sellers</a><a href="#products">Bundles</a></div>
          <div><strong>Support</strong><a href="#benefits">Delivery</a><a href="#benefits">Returns</a><a href="#benefits">Warranty</a></div>
          <div><strong>Company</strong><a href="#">About us</a><a href="#">Careers</a><a href="#">Contact</a></div>
        </div>
      </div>
      <div className="container footer-bottom"><span>© 2026 SkyMart. All rights reserved.</span><span>Privacy · Terms</span></div>
    </footer>
  );
}
