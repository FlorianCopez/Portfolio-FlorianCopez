import Image from "next/image";
import LogoHeader from "./../app/assets/images/logo.png";

export default function Logo() {
  return (
    <div className="flex items-center gap-x-4">
      <Image src={LogoHeader} alt="Logo du site" width={80} height={80} />
      <span>Florian Copez</span>
    </div>
  );
}
