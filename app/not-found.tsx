import TitlePage from "@/components/title-page";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Image404 from "@/public/error-404.jpg";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={Image404}
        alt="Image erreur 404 - page non trouvée"
        width={500}
        height={500}
        priority
      />
      <TitlePage
        title="Page non trouvée"
        subtitle="La page que vous cherchez n'existe pas..."
      />

      <Link href="/">
        <Button variant="linkCustom">Retour à l&apos;accueil</Button>
      </Link>
    </div>
  );
}
