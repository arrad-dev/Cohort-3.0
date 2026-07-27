import { Headphones, RotateCcw, ShieldCheck, Truck } from 'lucide-react';

const benefits = [
  { icon: Truck, title: 'Fast, tracked delivery', text: 'Clear delivery estimates and live updates from checkout to your door.' },
  { icon: ShieldCheck, title: 'Protected purchases', text: 'Secure checkout and a one-year warranty on every technology product.' },
  { icon: RotateCcw, title: 'Easy 30-day returns', text: 'Changed your mind? Send it back with a simple, transparent return process.' },
  { icon: Headphones, title: 'Real human support', text: 'Helpful product advice and friendly support, seven days a week.' },
];

export default function Benefits() {
  return (
    <section className="section benefits-section" id="benefits">
      <div className="container">
        <div className="section-heading centered">
          <span className="kicker">The SkyMart promise</span>
          <h2>Better technology shopping, built in.</h2>
          <p>Every part of the experience is designed to feel simple, quick, and dependable.</p>
        </div>
        <div className="benefit-grid">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article className="benefit-card" key={title}>
              <div className="benefit-icon"><Icon size={22} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
