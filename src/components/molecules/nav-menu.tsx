import { nav_links } from "@/data";
import { NavLink } from "@/components/molecules/nav-link";

export function NavMenu() {
  return (
    <ul className="hidden md:flex gap-x-7">
      {nav_links.map((item) => (
        <li key={item.label}>
          <NavLink href={item.path} label={item.label} />
        </li>
      ))}
    </ul>
  );
}
