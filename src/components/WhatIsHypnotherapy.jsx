import AnimateOnScroll from './AnimateOnScroll';
import { HiShieldCheck, HiEye, HiCheck, HiX } from 'react-icons/hi';
import './WhatIsHypnotherapy.css';

const myths = [
  { myth: 'Hypnosis is mind control', fact: 'You remain fully aware and in control throughout the session', icon: '🧠' },
  { myth: "You can get 'stuck' in hypnosis", fact: 'You can open your eyes and stop at any time you choose', icon: '🔓' },
  { myth: 'Only weak-minded people can be hypnotized', fact: 'Intelligent, focused individuals often respond best to hypnotherapy', icon: '💪' },
  { myth: 'Hypnotherapy is not scientifically validated', fact: 'Research supports its effectiveness for anxiety, pain, and habits', icon: '🔬' },
];

const comparison = [
  { aspect: 'Primary Goal', meditation: 'Mindfulness & awareness', hypnotherapy: 'Targeted behavioral change' },
  { aspect: 'State of Mind', meditation: 'Present-moment focus', hypnotherapy: 'Focused relaxation with suggestion' },
  { aspect: 'Guidance', meditation: 'Self-directed or guided', hypnotherapy: 'Practitioner-guided' },
  { aspect: 'Target', meditation: 'General well-being', hypnotherapy: 'Specific issues & goals' },
  { aspect: 'Duration of Effect', meditation: 'Cumulative over time', hypnotherapy: 'Can create rapid shifts' },
];

export default function WhatIsHypnotherapy() {
  return (
    <section className="what-is section" id="what-is">
      <div className="container">
        <AnimateOnScroll className="section-header">
          <span className="section-label">Understanding Hypnotherapy</span>
          <h2 className="section-title">What Is Hypnotherapy?</h2>
          <p className="section-subtitle">
            It's not what you see in movies. Hypnotherapy is a safe, natural process
            that uses guided relaxation to access your subconscious mind.
          </p>
        </AnimateOnScroll>

        <div className="what-is__intro">
          <AnimateOnScroll className="what-is__card">
            <div className="what-is__card-icon"><HiShieldCheck /></div>
            <h3>Safe & Natural</h3>
            <p>Hypnotherapy is a recognized therapeutic technique. It's a deeply relaxed, focused state — similar to being absorbed in a good book.</p>
          </AnimateOnScroll>
          <AnimateOnScroll className="what-is__card" delay={150}>
            <div className="what-is__card-icon"><HiEye /></div>
            <h3>You Stay Aware</h3>
            <p>You're never unconscious or out of control. You hear everything, remember the session, and can stop at any time.</p>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll className="what-is__myths" delay={100}>
          <h3 className="what-is__myths-title">Myths vs Facts</h3>
          <div className="what-is__myths-grid">
            {myths.map((item, i) => (
              <div className="what-is__myth-card" key={i}>
                <div className="what-is__myth-icon">{item.icon}</div>
                <div className="what-is__myth-row">
                  <HiX className="what-is__myth-x" />
                  <span className="what-is__myth-text">{item.myth}</span>
                </div>
                <div className="what-is__fact-row">
                  <HiCheck className="what-is__fact-check" />
                  <span className="what-is__fact-text">{item.fact}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="what-is__comparison" delay={150}>
          <h3 className="what-is__comparison-title">Meditation vs Hypnotherapy</h3>
          <div className="what-is__table-wrapper">
            <table className="what-is__table">
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>🧘 Meditation</th>
                  <th>🎯 Hypnotherapy</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i}>
                    <td className="what-is__table-aspect">{row.aspect}</td>
                    <td>{row.meditation}</td>
                    <td className="what-is__table-highlight">{row.hypnotherapy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
