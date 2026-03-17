export type Program = {
  id: string;
  name: string;
  ages: string;
  description: string;
  schedule: string;
  color: string;       // Tailwind bg class for card accent
  iconEmoji: string;
};

export const programs: Program[] = [
  {
    id: "infant-toddler",
    name: "Infant & Toddler",
    ages: "Ages 1–2",
    description:
      "A nurturing, sensory-rich environment where our youngest learners develop foundational social and motor skills through play, music, and guided exploration.",
    schedule: "Mon–Fri, Hours: TBD",
    color: "bg-rose-50 border-rose-200",
    iconEmoji: "🍼",
  },
  {
    id: "preschool",
    name: "Preschool",
    ages: "Ages 3–4",
    description:
      "Structured creative play, early literacy, and social development. Children build confidence and curiosity in a warm, supportive classroom.",
    schedule: "Mon–Fri, Hours: TBD",
    color: "bg-orange-50 border-orange-200",
    iconEmoji: "🎨",
  },
  {
    id: "pre-k",
    name: "Georgia Pre-K",
    ages: "Ages 4–5",
    description:
      "State-funded Georgia Pre-K program. School-readiness focus: letters, numbers, social skills, and hands-on learning to prepare children for kindergarten.",
    schedule: "Mon–Fri, Hours: TBD",
    color: "bg-blue-50 border-blue-200",
    iconEmoji: "📚",
  },
  {
    id: "after-school",
    name: "After School",
    ages: "Ages 5–12",
    description:
      "Safe, structured after-school care with homework help, enrichment activities, and supervised free play. Pickup from local elementary schools available.",
    schedule: "Mon–Fri, Hours: TBD",
    color: "bg-purple-50 border-purple-200",
    iconEmoji: "🏫",
  },
  {
    id: "summer-eaglets",
    name: "Summer Camp Eaglets",
    ages: "Ages 5–7",
    description:
      "A fun-filled summer of themed weeks, field trips, arts & crafts, sports, and STEM activities. Perfect for younger campers ready for adventure.",
    schedule: "Summer seasonal, Hours: TBD",
    color: "bg-yellow-50 border-yellow-200",
    iconEmoji: "🦅",
  },
  {
    id: "summer-eagles",
    name: "Summer Camp Eagles",
    ages: "Ages 8–12",
    description:
      "Leadership, teamwork, and exploration for older campers. Includes tech projects, athletics, excursions, and community service activities.",
    schedule: "Summer seasonal, Hours: TBD",
    color: "bg-green-50 border-green-200",
    iconEmoji: "⭐",
  },
];
