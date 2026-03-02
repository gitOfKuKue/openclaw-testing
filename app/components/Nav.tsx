import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="border-b border-black/10 px-6 py-4">
      <ul className="mx-auto flex max-w-5xl flex-wrap gap-4 text-sm font-medium">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="rounded px-3 py-2 hover:bg-black/5" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
