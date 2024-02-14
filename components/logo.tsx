import Image from "next/image";
import LogoSite from "@/public/logo_florian.png";

/**
 * Logo component displaying the site logo along with the site name.
 * @returns {JSX.Element} Logo component.
 */
export default function Logo() {
  return (
    <div className="flex items-center gap-x-4">
      <Image
        src={LogoSite}
        alt="Logo du site"
        width={80}
        height={80}
        priority
      />
      <span>Florian Copez</span>
    </div>
  );
}
