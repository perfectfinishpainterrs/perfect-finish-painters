// Featured "tough jobs" shown in the homepage hero showcase.
// Add a new entry here and it automatically appears (and rotates) in the hero card —
// no component changes needed. Keep the hardest / most impressive jobs first.
export interface ToughJob {
  title: string;
  location: string;
  blurb: string;
  before: string;
  after: string;
  href: string;
}

export const toughJobs: ToughJob[] = [
  {
    title: "Full Ceiling Rebuild",
    location: "Mays Landing, NJ",
    blurb: "Popcorn ceiling torn out to the bare joists, re-drywalled, taped smooth, and re-textured — start to finish.",
    before: "/projects/popcorn-ceiling-removal-before-mays-landing-nj.webp",
    after: "/projects/popcorn-ceiling-removal-after-mays-landing-nj.webp",
    href: "/popcorn-ceiling-removal",
  },
];
