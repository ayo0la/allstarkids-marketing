export type Program = {
  id: string;
  name: string;
  ages: string;
  description: string;
  schedule: string;
  iconName: string;
  accentColor: string;
};

export const programs: Program[] = [
  {
    id: "infant-toddler",
    name: "Infant & Toddler",
    ages: "Ages 1–2",
    description:
      "A nurturing, sensory-rich environment where our youngest learners develop foundational social and motor skills through play, music, and guided exploration.",
    schedule: "Mon–Fri, Hours: TBD",
    iconName: "Baby",
    accentColor: "#f43f5e",
  },
  {
    id: "preschool",
    name: "Preschool",
    ages: "Ages 3–4",
    description:
      "Structured creative play, early literacy, and social development. Children build confidence and curiosity in a warm, supportive classroom.",
    schedule: "Mon–Fri, Hours: TBD",
    iconName: "Palette",
    accentColor: "#f97316",
  },
  {
    id: "pre-k",
    name: "Georgia Pre-K",
    ages: "Ages 4–5",
    description:
      "State-funded Georgia Pre-K program. School-readiness focus: letters, numbers, social skills, and hands-on learning to prepare children for kindergarten.",
    schedule: "Mon–Fri, Hours: TBD",
    iconName: "BookOpen",
    accentColor: "#6366f1",
  },
  {
    id: "after-school",
    name: "After School",
    ages: "Ages 5–12",
    description:
      "Safe, structured after-school care with homework help, enrichment activities, and supervised free play. Pickup from local elementary schools available.",
    schedule: "Mon–Fri, Hours: TBD",
    iconName: "School",
    accentColor: "#8b5cf6",
  },
  {
    id: "summer-eaglets",
    name: "Summer Camp Eaglets",
    ages: "Ages 5–7",
    description:
      "A fun-filled summer of themed weeks, field trips, arts & crafts, sports, and STEM activities. Perfect for younger campers ready for adventure.",
    schedule: "Summer seasonal, Hours: TBD",
    iconName: "Bird",
    accentColor: "#eab308",
  },
  {
    id: "summer-eagles",
    name: "Summer Camp Eagles",
    ages: "Ages 8–12",
    description:
      "Leadership, teamwork, and exploration for older campers. Includes tech projects, athletics, excursions, and community service activities.",
    schedule: "Summer seasonal, Hours: TBD",
    iconName: "Star",
    accentColor: "#22c55e",
  },
];
