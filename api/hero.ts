import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const svg = `
<svg
  width="1200"
  height="260"
  viewBox="0 0 1200 260"
  xmlns="http://www.w3.org/2000/svg"
>

  <!-- Background -->
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#020617" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#bg)" />

  <!-- Text (VERTICALLY CENTERED) -->
  <text
    x="420"
    y="130"
    text-anchor="middle"
    dominant-baseline="middle"
    fill="#0EEDC5"
    font-size="22"
    font-family="Fira Code, monospace"
  >
    🎓 R&amp;D | Automation | Control Systems | AI-Augmented Full-Stack Developer
  </text>

  <!-- Robot Image -->
  <image
    href="https://i.pinimg.com/originals/e4/72/25/e472253a42734996da86423960f8ebef.gif"
    x="820"
    y="30"
    width="160"
    height="200"
    preserveAspectRatio="xMidYMid meet"
  />

</svg>
`;

  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.status(200).send(svg);
}
