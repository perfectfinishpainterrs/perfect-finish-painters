export interface Review {
  name: string
  rating: number
  text: string
  source: string
}

export const reviews: Review[] = [
  {
    name: "Ryan J.",
    rating: 5,
    text: "Has helped me numerous times with painting. Truly a professional!",
    source: "Facebook",
  },
  {
    name: "Sean P.",
    rating: 5,
    text: "They show up on time, do what they promise, at a fair price.",
    source: "Facebook",
  },
  {
    name: "Audie M.",
    rating: 5,
    text: "They came out quickly and touched up my house.",
    source: "Facebook",
  },
  {
    name: "Mandy D.",
    rating: 5,
    text: "I recommend Perfect Finish Painters! Quality work at an affordable price.",
    source: "Facebook",
  },
  {
    name: "Sean D.",
    rating: 5,
    text: "Brandon came out and touched up painting my house after other painters stopped contacting me.",
    source: "Facebook",
  },
]
