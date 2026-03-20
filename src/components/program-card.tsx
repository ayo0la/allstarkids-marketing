import { Card, CardBody } from "@heroui/react";
import { Baby, Palette, BookOpen, School, Bird, Star, type LucideIcon } from "lucide-react";
import Link from "next/link";
import type { Program } from "@/data/programs";

const ICONS: Record<string, LucideIcon> = {
  Baby, Palette, BookOpen, School, Bird, Star,
};

export default function ProgramCard({
  program,
  compact = false,
}: {
  program: Program;
  compact?: boolean;
}) {
  const Icon = ICONS[program.iconName] ?? Star;
  const accent = program.accentColor;

  return (
    <Card
      className="bg-white border-0 shadow-sm hover:-translate-y-1 transition-transform duration-200"
      style={{ borderTop: `4px solid ${accent}` }}
    >
      <CardBody className={compact ? "p-5" : "p-5 flex flex-col gap-3"}>
        {/* Icon badge */}
        <div
          className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-1"
          style={{ background: `${accent}18` }}
        >
          <Icon size={20} style={{ color: accent }} strokeWidth={2} />
        </div>

        {/* Age label + name */}
        <div>
          <p
            className="text-[10px] font-extrabold uppercase tracking-[0.1em] mb-0.5"
            style={{ color: accent }}
          >
            {program.ages}
          </p>
          <p className="font-extrabold text-[#0a1628] text-base leading-snug">
            {program.name}
          </p>
        </div>

        {/* Full description (non-compact only) */}
        {!compact && (
          <>
            <p className="text-sm text-slate-600 leading-relaxed">
              {program.description}
            </p>
            <p className="text-xs text-slate-400 font-medium">{program.schedule}</p>
          </>
        )}

        {/* Learn more link (compact only) */}
        {compact && (
          <Link
            href="/programs"
            className="text-xs font-bold hover:underline mt-1 block"
            style={{ color: accent }}
          >
            Learn more →
          </Link>
        )}
      </CardBody>
    </Card>
  );
}
