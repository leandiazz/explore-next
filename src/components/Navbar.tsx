import Link from "next/link";

const pages = [
  { title: "Image Optimization", href: "/image-optimization" },
  { title: "Theme Toggle", href: "/theme-toggle" },
];

const Navbar = () => {
  return (
    <nav className="bg-red-50 text-black flex items-center justify-center gap-20 p-2">
      <Link href="/">Home</Link>

      <ul className="flex gap-5">
        {pages.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
