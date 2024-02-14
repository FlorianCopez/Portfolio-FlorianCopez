import TitlePage from "@/components/title-page";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="flex flex-col items-center">
        <TitlePage
          title="404 - Page non trouvée"
          subtitle="Désolé, la page que vous recherchez semble introuvable. Il est
          possible qu'elle ait été déplacée, renommée ou supprimée.
          Veuillez vérifier l'URL ou retourner à la page d'accueil. Si
          le problème persiste, n'hésitez pas à nous contacter pour obtenir
          de l'aide."
        />
        <Link href="/">
          <Button variant="linkCustom">Accueil</Button>
        </Link>
      </section>
    </>
  );
}
