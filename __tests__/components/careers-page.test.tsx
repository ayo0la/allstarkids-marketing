import { render, screen } from "@testing-library/react";
import CareersPage from "@/app/careers/page";

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

jest.mock("lucide-react", () => ({
  Users: () => <svg data-testid="icon-users" />,
  Heart: () => <svg data-testid="icon-heart" />,
  Bus: () => <svg data-testid="icon-bus" />,
  Star: () => <svg data-testid="icon-star" />,
  BookOpen: () => <svg data-testid="icon-bookopen" />,
  Clock: () => <svg data-testid="icon-clock" />,
}));

const mockOpenings = [
  { id: "1", title: "Teacher (1 Year Olds)", description: "Teach 1-year-olds.", icon: "Heart", accentColor: "#f43f5e" },
  { id: "2", title: "Teacher (2 Year Olds)", description: "Teach 2-year-olds.", icon: "Users", accentColor: "#6366f1" },
  { id: "3", title: "Bus Driver", description: "Drive the school bus.", icon: "Bus", accentColor: "#eab308" },
];

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => mockOpenings,
  } as unknown as Response);
});

afterEach(() => {
  jest.resetAllMocks();
});

describe("CareersPage", () => {
  it("renders the page heading", async () => {
    render(await CareersPage());
    expect(screen.getByRole("heading", { name: /careers|hiring|join/i })).toBeInTheDocument();
  });

  it("renders job openings fetched from the platform API", async () => {
    render(await CareersPage());
    expect(screen.getByText(/Teacher.*1 Year/i)).toBeInTheDocument();
    expect(screen.getByText(/Teacher.*2 Year/i)).toBeInTheDocument();
    expect(screen.getByText(/Bus Driver/i)).toBeInTheDocument();
  });

  it("renders Apply Now links for each opening", async () => {
    render(await CareersPage());
    const applyLinks = screen.getAllByRole("link", { name: /apply now/i });
    expect(applyLinks).toHaveLength(3);
  });

  it("shows empty state when no openings are returned", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    } as unknown as Response);
    render(await CareersPage());
    expect(screen.getByText(/no open positions/i)).toBeInTheDocument();
  });

  it("shows empty state when fetch fails", async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error("Network error"));
    render(await CareersPage());
    expect(screen.getByText(/no open positions/i)).toBeInTheDocument();
  });
});
