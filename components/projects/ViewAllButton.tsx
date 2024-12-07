import Link from "next/link";

export const ViewAllButton = () => {
  return (
    <div className="hidden md:block">
      <Link
        href="/projects"
        className="group flex items-center gap-2 whitespace-nowrap font-medium"
      >
        View All
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
};
