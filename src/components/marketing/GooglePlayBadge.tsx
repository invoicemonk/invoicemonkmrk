interface GooglePlayBadgeProps {
  className?: string;
  height?: number;
  ariaLabel?: string;
}

/**
 * Inline SVG rendition of the "Get it on Google Play" badge.
 * Follows Google's brand guidelines (black rounded pill, Play icon,
 * "GET IT ON" eyebrow, "Google Play" wordmark) so we can render
 * without downloading external assets.
 */
export function GooglePlayBadge({ className, height = 40, ariaLabel = 'Get it on Google Play' }: GooglePlayBadgeProps) {
  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      viewBox="0 0 180 54"
      height={height}
      width={(height * 180) / 54}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="179" height="53" rx="8" fill="#000" stroke="#A6A6A6" />
      {/* Play triangle in Google colors */}
      <g transform="translate(12, 12)">
        <defs>
          <linearGradient id="gp-g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#00A0FF" />
            <stop offset="1" stopColor="#00E2FF" />
          </linearGradient>
        </defs>
        <path d="M0 1.4v27.2c0 .6.3 1.1.8 1.4L15.6 15 .8 0C.3.3 0 .8 0 1.4z" fill="url(#gp-g1)" />
        <path d="M20.3 19.7l-4.7-4.7 4.7-4.7 5.6 3.2c1.6.9 1.6 2.3 0 3.2l-5.6 3z" fill="#FFCE00" />
        <path d="M15.6 15l-14.8 15c.5.5 1.3.6 2.2 0l18.3-10.4L15.6 15z" fill="#FF3A44" />
        <path d="M15.6 15L21.3 9.3 3 -1C2.1 -1.6 1.3 -1.5.8 0L15.6 15z" fill="#00F076" />
      </g>
      {/* Text */}
      <text x="52" y="22" fill="#fff" fontFamily="Roboto, Arial, sans-serif" fontSize="9" letterSpacing="0.5">GET IT ON</text>
      <text x="52" y="40" fill="#fff" fontFamily="Roboto, Arial, sans-serif" fontSize="17" fontWeight="500">Google Play</text>
    </svg>
  );
}
