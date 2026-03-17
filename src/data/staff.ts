export type StaffMember = {
  id: string;
  name: string;
  title: string;
  initials: string;
  bio: string;
};

export const staff: StaffMember[] = [
  {
    id: "director",
    name: "Academy Director",
    title: "Founder & Director",
    initials: "AD",
    bio: "Passionate early childhood educator with over a decade of experience building nurturing learning environments for children in the Atlanta metro area.",
  },
  {
    id: "staff-1",
    name: "Lead Educator",
    title: "Lead Preschool Teacher",
    initials: "LE",
    bio: "Certified early childhood specialist with a warm, play-based teaching approach that helps every child find their unique path to learning.",
  },
  {
    id: "staff-2",
    name: "Program Coordinator",
    title: "After School & Camp Coordinator",
    initials: "PC",
    bio: "Dedicated to creating enriching after-school experiences that balance academic support with creative freedom and fun.",
  },
  {
    id: "staff-3",
    name: "Pre-K Lead",
    title: "Georgia Pre-K Lead Teacher",
    initials: "PL",
    bio: "Georgia Pre-K certified teacher focused on school readiness and building a strong foundation for kindergarten success.",
  },
];
