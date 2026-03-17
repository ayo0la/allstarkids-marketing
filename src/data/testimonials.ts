export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  program: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "All Star Kids Academy has been a blessing for our family. My daughter has grown so much in confidence and loves going every single day.",
    author: "Parent, Preschool Program",
    program: "Preschool",
  },
  {
    id: "t2",
    quote:
      "The teachers are incredibly dedicated and communicative. We always know exactly how our son is doing. We couldn't be happier.",
    author: "Parent, Georgia Pre-K",
    program: "Georgia Pre-K",
  },
  {
    id: "t3",
    quote:
      "Summer camp was the highlight of my kids' year. They came home excited every single day. The staff clearly loves what they do.",
    author: "Parent, Summer Camp Eagles",
    program: "Summer Camp",
  },
];
