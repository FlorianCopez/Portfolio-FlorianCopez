import { Button } from "@/components/ui/button";
import Link from "next/link";

/**
 * Home component representing the main content of the home page.
 * @returns {JSX.Element} JSX element representing the Home page.
 */
export default function Home() {
  return (
    <section className="text-center space-y-8">
      <div className="space-y-2">
        {/* Title */}
        <h1 className="text-4xl font-extrabold">
          Hello World ! Je suis Florian Copez
        </h1>
        {/* Subtitle */}
        <h2 className="text-xl font-bold text-zinc-500 italic">
          Développeur Web
        </h2>
      </div>
      {/* Introduction paragraph */}
      <p className="text-lg font-semibold">
        Bienvenue sur mon portfolio, un espace dédié à la mise en pratique des
        compétences acquises au cours de ma formation à l&apos;école
        O&apos;clock, ainsi qu&apos;à l&apos;apprentissage continu au quotidien.
        <span className="rocket"> &#128640;</span>
      </p>
      {/* Button linking to the About page */}
      <Button variant={"linkCustom"}>
        <Link href="/a-propos">En savoir plus</Link>
      </Button>
    </section>
  );
}
