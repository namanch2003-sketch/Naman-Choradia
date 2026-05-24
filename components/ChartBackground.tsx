export default function ChartBackground() {
  // Candlestick data: [x, open, high, low, close, bullish]
  const candles = [
    [60, 155, 175, 140, 170, true],
    [110, 170, 185, 162, 165, false],
    [160, 165, 192, 158, 188, true],
    [210, 188, 205, 180, 195, true],
    [260, 195, 210, 178, 182, false],
    [310, 182, 215, 176, 210, true],
    [360, 210, 228, 200, 220, true],
    [410, 220, 238, 208, 215, false],
    [460, 215, 242, 210, 238, true],
    [510, 238, 255, 228, 248, true],
  ];

  // Smooth upward line overlay
  const linePoints = "60,170 110,175 160,185 210,195 260,190 310,205 360,218 410,222 460,235 510,245";

  return (
    <div className="absolute inset-y-0 right-0 w-full lg:w-3/5 pointer-events-none select-none overflow-hidden">
      <svg
        viewBox="0 600 600 300"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          {/* Fade gradient from right edge */}
          <linearGradient id="fadeLR" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="30%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          {/* Fade gradient from bottom */}
          <linearGradient id="fadeTB" x1="0" y1="0" x2="0" y2="1">
            <stop offset="60%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>

          <mask id="maskLR">
            <rect width="600" height="600" fill="url(#fadeLR)" />
          </mask>
          <mask id="maskTB">
            <rect width="600" height="600" fill="url(#fadeTB)" />
          </mask>
        </defs>

        <g opacity="0.09" mask="url(#maskLR)">
          {/* Horizontal grid lines */}
          {[140, 170, 200, 230, 260].map((y) => (
            <line
              key={y}
              x1="40"
              y1={y}
              x2="560"
              y2={y}
              stroke="#1E63FF"
              strokeWidth="0.5"
              strokeDasharray="4 6"
            />
          ))}

          {/* Candlestick bars */}
          {candles.map(([x, open, high, low, close, bullish], i) => {
            const color = bullish ? "#1E63FF" : "#001B4D";
            const bodyTop = Math.min(open as number, close as number);
            const bodyHeight = Math.abs((close as number) - (open as number));
            return (
              <g key={i}>
                {/* Wick */}
                <line
                  x1={x as number}
                  y1={high as number}
                  x2={x as number}
                  y2={low as number}
                  stroke={color}
                  strokeWidth="1.5"
                />
                {/* Body */}
                <rect
                  x={(x as number) - 10}
                  y={bodyTop}
                  width="20"
                  height={Math.max(bodyHeight, 2)}
                  fill={color}
                  rx="1"
                />
              </g>
            );
          })}

          {/* Trend line — smooth polyline */}
          <polyline
            points={linePoints}
            fill="none"
            stroke="#1E63FF"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Dots on line */}
          {[
            [60, 170],
            [160, 185],
            [260, 190],
            [360, 218],
            [460, 235],
            [510, 245],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="3" fill="#1E63FF" />
          ))}
        </g>

        {/* Fade overlay from bottom */}
        <rect
          width="600"
          height="600"
          fill="url(#fadeTB)"
          pointerEvents="none"
        />
      </svg>
    </div>
  );
}
