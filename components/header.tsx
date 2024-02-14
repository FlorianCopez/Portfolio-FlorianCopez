import Navbar from "./navbar";

/**
 * Header component containing the navigation bar.
 * @returns {JSX.Element} Header component.
 */
export default function Header() {
  return (
    <header className="border-b shadow-lg">
      <Navbar />
    </header>
  );
}
