import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem" }}>
        <Link href="/">Tool Finder</Link>

        <button>Admin</button>
      </nav>
    </>
  );
}
