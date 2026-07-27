const PALETTE = {
  forest: "#33513B",
  forestLight: "#436B4D",
  ink: "#16233F",
  inkDark: "#0E1729",
  maroon: "#8B3A3A",
  maroonDark: "#6F2C2C",
  marigold: "#D9A441",
  sage: "#EEF1EA",
};

function Library({ id }) {
  const heights = [58, 74, 46, 66, 52, 70];
  return (
    <svg viewBox="0 0 300 375" className="w-full h-full" role="img" aria-labelledby={id}>
      <title id={id}>Illustration of a library shelf</title>
      <rect width="300" height="375" fill={PALETTE.forest} />
      {/* shelf */}
      <rect x="20" y="230" width="260" height="10" fill={PALETTE.sage} opacity="0.9" />
      {/* books */}
      <g>
        {heights.map((h, i) => (
          <rect
            key={i}
            x={34 + i * 40}
            y={230 - h}
            width="30"
            height={h}
            fill={i % 2 === 0 ? PALETTE.marigold : PALETTE.sage}
            opacity={i % 2 === 0 ? 0.95 : 0.8}
          />
        ))}
      </g>
      {/* reading lamp */}
      <g transform="translate(150,90)">
        <line x1="0" y1="0" x2="0" y2="60" stroke={PALETTE.sage} strokeWidth="2" opacity="0.6" />
        <path d="M -20,-6 L 20,-6 L 10,20 L -10,20 Z" fill={PALETTE.marigold} opacity="0.9" />
      </g>
      {/* second shelf row */}
      <rect x="20" y="290" width="260" height="8" fill={PALETTE.sage} opacity="0.6" />
      <g>
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={30 + i * 48} y={290 - 40} width="36" height="40" fill={PALETTE.forestLight} />
        ))}
      </g>
    </svg>
  );
}

function ScienceLab({ id }) {
  return (
    <svg viewBox="0 0 300 375" className="w-full h-full" role="img" aria-labelledby={id}>
      <title id={id}>Illustration of a science laboratory flask</title>
      <rect width="300" height="375" fill={PALETTE.ink} />
      {/* flask */}
      <g transform="translate(150,180)">
        <path d="M -10,-70 L -10,-20 L -46,60 A 10,10 0 0 0 -36,74 L 36,74 A 10,10 0 0 0 46,60 L 10,-20 L 10,-70 Z"
          fill="none" stroke={PALETTE.sage} strokeWidth="3" opacity="0.85" />
        <path d="M -34,30 A 40,40 0 0 0 34,30 L 46,60 A 10,10 0 0 1 36,74 L -36,74 A 10,10 0 0 1 -46,60 Z"
          fill={PALETTE.marigold} opacity="0.85" />
        <line x1="-18" y1="-70" x2="18" y2="-70" stroke={PALETTE.sage} strokeWidth="3" opacity="0.85" />
        {/* bubbles */}
        <circle cx="-6" cy="20" r="4" fill={PALETTE.sage} opacity="0.7" />
        <circle cx="10" cy="40" r="6" fill={PALETTE.sage} opacity="0.6" />
        <circle cx="0" cy="55" r="3" fill={PALETTE.sage} opacity="0.7" />
      </g>
      {/* molecule accent, top right */}
      <g transform="translate(230,70)" stroke={PALETTE.forestLight} strokeWidth="2" opacity="0.8">
        <line x1="0" y1="0" x2="24" y2="14" />
        <line x1="0" y1="0" x2="-8" y2="26" />
        <circle cx="0" cy="0" r="5" fill={PALETTE.forestLight} stroke="none" />
        <circle cx="24" cy="14" r="4" fill={PALETTE.forestLight} stroke="none" />
        <circle cx="-8" cy="26" r="4" fill={PALETTE.forestLight} stroke="none" />
      </g>
    </svg>
  );
}

function Theatre({ id }) {
  return (
    <svg viewBox="0 0 300 375" className="w-full h-full" role="img" aria-labelledby={id}>
      <title id={id}>Illustration of a theatre stage with curtains and a spotlight</title>
      <rect width="300" height="375" fill={PALETTE.maroonDark} />
      {/* spotlight cone */}
      <path d="M 150,0 L 90,180 L 210,180 Z" fill={PALETTE.marigold} opacity="0.18" />
      {/* stage floor */}
      <rect x="0" y="290" width="300" height="85" fill={PALETTE.inkDark} opacity="0.5" />
      {/* curtains */}
      <g>
        {[0, 1, 2, 3].map((i) => (
          <path
            key={i}
            d={`M ${i * 22},0 Q ${i * 22 + 11},150 ${i * 22},300 L ${i * 22 + 22},300 Q ${i * 22 + 11},150 ${i * 22 + 22},0 Z`}
            fill={PALETTE.maroon}
            opacity={0.9 - i * 0.05}
          />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <path
            key={`r${i}`}
            d={`M ${300 - i * 22},0 Q ${300 - i * 22 - 11},150 ${300 - i * 22},300 L ${300 - i * 22 - 22},300 Q ${300 - i * 22 - 11},150 ${300 - i * 22 - 22},0 Z`}
            fill={PALETTE.maroon}
            opacity={0.9 - i * 0.05}
          />
        ))}
      </g>
      {/* spotlight circle on stage */}
      <ellipse cx="150" cy="240" rx="46" ry="14" fill={PALETTE.marigold} opacity="0.35" />
    </svg>
  );
}

function SportsField({ id }) {
  return (
    <svg viewBox="0 0 300 375" className="w-full h-full" role="img" aria-labelledby={id}>
      <title id={id}>Illustration of a running track and sports field</title>
      <rect width="300" height="375" fill={PALETTE.forestLight} />
      {/* field */}
      <rect x="0" y="60" width="300" height="255" fill={PALETTE.forest} />
      {/* track lanes */}
      <g fill="none" stroke={PALETTE.sage} strokeWidth="2" opacity="0.55">
        <ellipse cx="150" cy="230" rx="120" ry="120" />
        <ellipse cx="150" cy="230" rx="96" ry="96" />
        <ellipse cx="150" cy="230" rx="72" ry="96" opacity="0" />
      </g>
      {/* center field lines */}
      <line x1="30" y1="230" x2="270" y2="230" stroke={PALETTE.sage} strokeWidth="2" opacity="0.4" />
      {/* ball */}
      <circle cx="150" cy="230" r="16" fill={PALETTE.marigold} />
      <path d="M 138,222 L 162,222 L 168,238 L 150,250 L 132,238 Z" fill={PALETTE.inkDark} opacity="0.4" />
    </svg>
  );
}

function Event({ id }) {
  return (
    <svg viewBox="0 0 300 375" className="w-full h-full" role="img" aria-labelledby={id}>
      <title id={id}>Illustration of a school event with flags and a stage</title>
      <rect width="300" height="375" fill={PALETTE.ink} />
      <rect x="0" y="260" width="300" height="115" fill={PALETTE.inkDark} />
      {/* bunting flags */}
      <g stroke={PALETTE.sage} strokeWidth="1.5" opacity="0.6">
        <path d="M 10,50 Q 150,10 290,50" fill="none" />
      </g>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const x = 10 + i * 47;
        const y = 50 - Math.sin((i / 6) * Math.PI) * 40;
        const colors = [PALETTE.marigold, PALETTE.maroon, PALETTE.forestLight, PALETTE.sage];
        return <path key={i} d={`M ${x},${y} L ${x + 12},${y} L ${x + 6},${y + 16} Z`} fill={colors[i % colors.length]} opacity="0.9" />;
      })}
      {/* crowd silhouettes */}
      <g fill={PALETTE.forestLight}>
        {[40, 90, 140, 190, 240].map((x, i) => (
          <circle key={i} cx={x} cy={270} r="14" />
        ))}
      </g>
      {/* stage */}
      <rect x="90" y="200" width="120" height="60" fill={PALETTE.forest} />
      <rect x="90" y="196" width="120" height="8" fill={PALETTE.marigold} />
    </svg>
  );
}

function ArtClass({ id }) {
  return (
    <svg viewBox="0 0 300 375" className="w-full h-full" role="img" aria-labelledby={id}>
      <title id={id}>Illustration of an easel and paint palette from an art class</title>
      <rect width="300" height="375" fill={PALETTE.maroon} />
      {/* easel */}
      <g transform="translate(150,190)" stroke={PALETTE.sage} strokeWidth="4" fill="none" opacity="0.85">
        <line x1="-50" y1="90" x2="0" y2="-90" />
        <line x1="50" y1="90" x2="0" y2="-90" />
        <line x1="-30" y1="90" x2="30" y2="90" />
        <line x1="-34" y1="10" x2="34" y2="10" />
      </g>
      {/* canvas */}
      <rect x="112" y="70" width="76" height="90" fill={PALETTE.sage} opacity="0.95" />
      <path d="M 118,150 L 140,110 L 160,135 L 182,95 L 182,150 Z" fill={PALETTE.marigold} opacity="0.8" />
      {/* palette blobs, bottom */}
      <g transform="translate(150,300)">
        <ellipse cx="0" cy="0" rx="60" ry="26" fill={PALETTE.sage} opacity="0.9" />
        <circle cx="-30" cy="-4" r="8" fill={PALETTE.marigold} />
        <circle cx="-8" cy="6" r="8" fill={PALETTE.forestLight} />
        <circle cx="16" cy="-6" r="8" fill={PALETTE.ink} />
        <circle cx="36" cy="4" r="8" fill={PALETTE.maroonDark} />
      </g>
    </svg>
  );
}

function CampusGrounds({ id }) {
  return (
    <svg viewBox="0 0 300 375" className="w-full h-full" role="img" aria-labelledby={id}>
      <title id={id}>Illustration of campus grounds with trees and pathways</title>
      <rect width="300" height="375" fill={PALETTE.forestLight} />
      <rect y="220" width="300" height="155" fill={PALETTE.forest} />
      {/* pathway */}
      <path d="M 150,375 L 130,220 L 170,220 Z" fill={PALETTE.sage} opacity="0.5" />
      {/* trees */}
      {[[50, 260, 30], [230, 250, 36], [90, 320, 24], [250, 330, 22]].map(([x, y, r], i) => (
        <g key={i} transform={`translate(${x},${y})`}>
          <rect x="-3" y={r * 0.6} width="6" height={r} fill={PALETTE.inkDark} opacity="0.4" />
          <circle cy="0" r={r} fill={i % 2 === 0 ? PALETTE.forest : PALETTE.marigold} opacity={i % 2 === 0 ? 1 : 0.85} />
        </g>
      ))}
      {/* sky birds */}
      <g stroke={PALETTE.sage} strokeWidth="2" fill="none" opacity="0.6">
        <path d="M 40,60 Q 48,52 56,60" />
        <path d="M 60,80 Q 68,72 76,80" />
      </g>
    </svg>
  );
}

export default function FacilityArt({ type, id }) {
  switch (type) {
    case "library":
      return <Library id={id} />;
    case "labs":
      return <ScienceLab id={id} />;
    case "theatre":
      return <Theatre id={id} />;
    case "sports":
      return <SportsField id={id} />;
    case "event":
      return <Event id={id} />;
    case "art":
      return <ArtClass id={id} />;
    case "campus":
      return <CampusGrounds id={id} />;
    default:
      return null;
  }
}
