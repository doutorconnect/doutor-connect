// Ilustração original (SVG) transmitindo acolhimento — duas figuras em um
// gesto de cuidado, sobre uma forma orgânica suave. Substitui o mockup
// "de vídeo call" anterior por algo mais humano e caloroso, mantendo a
// paleta azul da marca (sem depender de fotos de banco de imagens).
export function HeroIllustration() {
  return (
    <svg viewBox="0 0 480 420" className="w-full max-w-md" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Forma orgânica de fundo */}
      <path
        d="M240 20c90 0 170 55 190 140 18 78-30 160-120 195-95 37-200 5-235-75C40 200 70 110 150 55c26-18 58-35 90-35z"
        fill="#EAF0FF"
      />

      {/* Figura acolhida (paciente) */}
      <circle cx="205" cy="190" r="34" fill="#5B7CFF" />
      <path
        d="M150 300c6-46 32-72 55-72s49 26 55 72"
        stroke="#5B7CFF"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />

      {/* Figura que acolhe (profissional), levemente atrás/ao lado */}
      <circle cx="278" cy="175" r="30" fill="#0B1F3A" />
      <path
        d="M228 292c5-42 30-66 50-66s45 24 50 66"
        stroke="#0B1F3A"
        strokeWidth="13"
        strokeLinecap="round"
        fill="none"
      />

      {/* Coraçãozinho simples, remetendo a cuidado */}
      <path
        d="M240 118c-4-8-14-12-22-8s-12 16-6 24c5 7 20 18 28 22 8-4 23-15 28-22 6-8 2-20-6-24s-18 0-22 8z"
        fill="#2452FF"
      />

      {/* Cartão flutuante */}
      <rect x="60" y="330" width="220" height="60" rx="18" fill="#ffffff" />
      <circle cx="92" cy="360" r="6" fill="#22C55E" />
      <text x="112" y="356" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#0B1F3A">
        Acolhimento que transforma
      </text>
      <text x="112" y="374" fontFamily="Inter, sans-serif" fontSize="11" fill="#5B6472">
        Você não precisa estar bem o tempo todo
      </text>
    </svg>
  );
}
