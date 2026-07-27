export default function CampusArt({ className = "" }) {
  return (
    <svg viewBox="0 0 640 520" className={className} role="img" aria-label="Illustration of the school building set among trees on the Aligarh campus">
      <rect x="0" y="0" width="640" height="520" rx="18" fill="#33513B" />
      {/* sky gradient wash */}
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#436B4D" />
          <stop offset="100%" stopColor="#33513B" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="640" height="520" rx="18" fill="url(#sky)" />

      {/* distant tree line */}
      <g fill="#2A4230">
        {[40, 110, 180, 250, 330, 410, 480, 560].map((x, i) => (
          <circle key={i} cx={x} cy={330 + (i % 2 === 0 ? -6 : 8)} r={34 + (i % 3) * 6} />
        ))}
      </g>

      {/* main building */}
      <g>
        <rect x="150" y="240" width="340" height="180" fill="#EEF1EA" />
        <rect x="150" y="240" width="340" height="18" fill="#D9A441" />
        {/* central dome/entrance */}
        <path d="M 280,240 L 280,190 Q 320,150 360,190 L 360,240 Z" fill="#EEF1EA" />
        <rect x="280" y="240" width="80" height="10" fill="#D9A441" />
        {/* windows grid */}
        {[0, 1, 2, 3, 4, 5, 6].map((c) =>
          [0, 1].map((r) => (
            <rect
              key={`${c}-${r}`}
              x={172 + c * 44}
              y={280 + r * 60}
              width="26"
              height="36"
              fill="#16233F"
              opacity="0.85"
            />
          ))
        )}
        {/* entrance steps */}
        <rect x="296" y="392" width="48" height="10" fill="#DCE3D6" />
        <rect x="290" y="402" width="60" height="8" fill="#DCE3D6" />
        <rect x="284" y="410" width="72" height="10" fill="#DCE3D6" />
      </g>

      {/* flag */}
      <g>
        <line x1="320" y1="150" x2="320" y2="100" stroke="#EEF1EA" strokeWidth="3" />
        <path d="M 320,102 L 360,112 L 320,122 Z" fill="#8B3A3A" />
      </g>

      {/* foreground trees */}
      <g>
        <g transform="translate(90,380)">
          <rect x="-4" y="30" width="8" height="50" fill="#0E1729" opacity="0.5" />
          <circle cx="0" cy="10" r="42" fill="#D9A441" opacity="0.9" />
          <circle cx="-24" cy="26" r="30" fill="#436B4D" />
          <circle cx="24" cy="26" r="30" fill="#436B4D" />
        </g>
        <g transform="translate(545,400)">
          <rect x="-4" y="24" width="8" height="46" fill="#0E1729" opacity="0.5" />
          <circle cx="0" cy="6" r="38" fill="#436B4D" />
          <circle cx="-20" cy="20" r="26" fill="#2A4230" />
          <circle cx="20" cy="20" r="26" fill="#2A4230" />
        </g>
      </g>

      {/* foreground lawn */}
      <rect x="0" y="440" width="640" height="80" fill="#2A4230" />
      <rect x="0" y="440" width="640" height="6" fill="#D9A441" opacity="0.5" />
    </svg>
  );
}
