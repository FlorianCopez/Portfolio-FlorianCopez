/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/no-unescaped-entities
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="">
      <h1 className="text-2xl font-extrabold">
        Hello World ! Je suis Florian Copez
      </h1>
      <h2 className="text-xl font-bold">Développeur Web</h2>
      <p className="text-lg font-semibold">
        Vous voila sur mon portfolio, un endroit qui me permet de m'exercer sur
        des compétences acquises au cours de ma formation réalisée au sein de
        l'école O'clock mais aussi sur ce que j'apprends au quotidien. &#128513;
      </p>
      <Button>En savoir plus</Button>
    </section>
  );
}
