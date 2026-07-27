export default function Seal({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Seal reading Dedicated to Excellence, Krishna International School, established mark"
    >
      <defs>
        <path
          id="sealCircleTop"
          d="M 20,100 A 80,80 0 0 1 180,100"
          fill="none"
        />
        <path
          id="sealCircleBottom"
          d="M 180,100 A 80,80 0 0 1 20,100"
          fill="none"
        />
      </defs>
      <circle cx="100" cy="100" r="96" fill="#16233F" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="#D9A441" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="80" fill="none" stroke="#D9A441" strokeWidth="1" strokeDasharray="1 4" />
      <text fill="#EEF1EA" fontSize="10.5" letterSpacing="2.5" fontFamily="'IBM Plex Mono', monospace">
        <textPath href="#sealCircleTop" startOffset="50%" textAnchor="middle">
          DEDICATED TO EXCELLENCE
        </textPath>
      </text>
      <text fill="#EEF1EA" fontSize="10.5" letterSpacing="2.5" fontFamily="'IBM Plex Mono', monospace">
        <textPath href="#sealCircleBottom" startOffset="50%" textAnchor="middle">
          ALIGARH · CBSE AFFILIATED
        </textPath>
      </text>
      {/* center emblem: open book + rising sun, echoing the school motto */}
      <g transform="translate(100,100)">
        <path
          d="M -26,10 C -26,-2 -14,-8 0,-6 C 14,-8 26,-2 26,10 L 26,16 C 14,10 -14,10 -26,16 Z"
          fill="#D9A441"
        />
        <path d="M 0,-6 L 0,14" stroke="#0E1729" strokeWidth="1.2" />
        <g stroke="#D9A441" strokeWidth="1.4" strokeLinecap="round">
          <path d="M 0,-14 L 0,-24" />
          <path d="M -7,-12 L -13,-20" />
          <path d="M 7,-12 L 13,-20" />
        </g>
        <circle cx="0" cy="-14" r="4.5" fill="#D9A441" />
      </g>
    </svg>
  );
}
