import Link from "next/link";

const Nav = () => {
  return (
    <header className="p-6">
      <nav className="flex justify-around text-lg">
        <Link href="/">Home</Link>
        <Link href="/crypto">Crypto Categories</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Nav;
