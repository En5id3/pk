import './HypnoticVisual.css';

export default function HypnoticVisual() {
  return (
    <div className="hypnotic-container">
      <div className="hypnotic-glow"></div>
      <svg
        viewBox="0 0 400 400"
        className="hypnotic-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <g className="hypno-ring-group hypno-ring-group--slow">
          <circle cx="200" cy="200" r="180" className="hypno-ring hypno-ring--outer" />
          <circle cx="200" cy="200" r="160" className="hypno-ring hypno-ring--dashed hypno-ring--delayed-1" />
        </g>
        
        <g className="hypno-ring-group hypno-ring-group--medium" filter="url(#glow)">
          <circle cx="200" cy="200" r="130" className="hypno-ring hypno-ring--solid hypno-ring--delayed-2" />
          <circle cx="200" cy="200" r="100" className="hypno-ring hypno-ring--dashed hypno-ring--delayed-3" />
        </g>

        <g className="hypno-ring-group hypno-ring-group--fast">
          <circle cx="200" cy="200" r="70" className="hypno-ring hypno-ring--solid hypno-ring--delayed-4" />
          <circle cx="200" cy="200" r="40" className="hypno-ring hypno-ring--dashed hypno-ring--delayed-5" />
          <circle cx="200" cy="200" r="15" className="hypno-ring hypno-center" filter="url(#glow)" />
        </g>
      </svg>
    </div>
  );
}
