import { useNavigate } from "react-router-dom";

type Lang = "en" | "ga";

const LangSwitch = ({ current }: { current: Lang }) => {
  const navigate = useNavigate();
  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">Language</span>
      <select
        value={current}
        onChange={(e) => navigate(e.target.value === "ga" ? "/gaeilge" : "/")}
        className="appearance-none rounded-md border border-border bg-card px-2.5 py-1.5 pr-7 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring cursor-pointer"
        aria-label="Choose language"
      >
        <option value="en">EN · English</option>
        <option value="ga">GA · Gaeilge</option>
      </select>
      <svg aria-hidden viewBox="0 0 20 20" className="pointer-events-none absolute right-1.5 h-3 w-3 text-muted-foreground">
        <path fill="currentColor" d="M5 8l5 5 5-5z" />
      </svg>
    </label>
  );
};

export default LangSwitch;
