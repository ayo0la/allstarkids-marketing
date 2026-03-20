import { redirect } from "next/navigation";

// Redirects to the enrollment portal.
// ENROLL_URL env var controls the target:
//   - Now:  https://allstarkids-platform.vercel.app  (Vercel project URL)
//   - Later: https://enroll.allstarkidsacademyga.com  (once DNS A record is added)
export default function EnrollPage() {
  redirect(process.env.ENROLL_URL ?? "https://allstarkids-platform.vercel.app");
}
