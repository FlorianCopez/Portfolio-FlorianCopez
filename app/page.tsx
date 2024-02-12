/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center space-y-8 md:px-32">
      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold">
          Hello World ! Je suis Florian Copez
        </h1>
        <h2 className="text-xl font-bold text-zinc-500 italic">
          Développeur Web
        </h2>
      </div>
      <p className="text-lg font-semibold">
        Vous voila sur mon portfolio, un endroit qui me permet de m'exercer sur
        des compétences acquises au cours de ma formation réalisée au sein de
        l'école O'clock mais aussi sur ce que j'apprends au quotidien. &#128513;
      </p>
      <Button variant={"linkCustom"}>
        <Link href="/a-propos">En savoir plus</Link>
      </Button>
    </section>
  );
}
