"use client";

export function CMRLotusLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 102"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {/* Lotus Petals */}
      <g transform="translate(100, 45) scale(0.8)">
        {/* Left Bottom Pink */}
        <path d="M-10,-5 C-30,-5 -50,-10 -55,-20 C-50,-30 -25,-25 -5,-10 Z" fill="#F8A5C2" />
        {/* Right Bottom Pink */}
        <path d="M10,-5 C30,-5 50,-10 55,-20 C50,-30 25,-25 5,-10 Z" fill="#F8A5C2" />
        {/* Left Teal */}
        <path d="M-8,-15 C-25,-25 -35,-40 -30,-50 C-15,-50 -5,-35 -3,-15 Z" fill="#0DB6B5" />
        {/* Right Teal */}
        <path d="M8,-15 C25,-25 35,-40 30,-50 C15,-50 5,-35 3,-15 Z" fill="#0DB6B5" />
        {/* Top Pink */}
        <path d="M0,0 C-10,-20 -20,-50 0,-60 C20,-50 10,-20 0,0 Z" fill="#F8A5C2" />
        {/* Center Teal Circle */}
        <circle cx="0" cy="5" r="5" fill="#0DB6B5" />
      </g>

      {/* CMR Text */}
      <text
        x="100"
        y="75"
        textAnchor="middle"
        fontFamily="serif"
        fontSize="34"
        fontWeight="bold"
        fill="#0A2463"
        letterSpacing="2"
      >
        CMR
      </text>

      {/* Group of Schools Text */}
      <text
        x="100"
        y="92"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="12"
        fill="#0A2463"
        letterSpacing="1"
      >
        GROUP OF SCHOOLS
      </text>
    </svg>
  );
}
