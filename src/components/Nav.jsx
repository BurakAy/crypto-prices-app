import Link from "next/link";

const Nav = () => {
  return (
    <header className="p-6 shadow bg-gradient-to-r from-emerald-50 via--emerald-100 to-emerald-200">
      <nav className="flex justify-around text-lg font-medium">
        <Link className="hover:text-stone-600" href="/">
          Home
        </Link>
        <Link className="hover:text-stone-600" href="/crypto">
          Crypto Categories
        </Link>
        <Link className="hover:text-stone-600" href="/about">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
