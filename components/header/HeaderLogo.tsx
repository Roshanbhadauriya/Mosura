import Image from "next/image";
import logo from "@/assets/Mosura13.png";
import { useRouter } from "next/navigation";



type HeaderLogoProps = {
  onClick?: () => void;
};


const HeaderLogo = ({ onClick }: HeaderLogoProps) => {
   const router = useRouter();

  const handleClick = () => {
    onClick?.();          // keep your custom logic if passed
    router.push("/");     // navigate to home
  };
  return (
    <button type="button" onClick={handleClick} className="cursor-pointer">
      <span>
        <Image src={logo} alt="Mosura" height={50} width={150} />
      </span>
    </button>
  );
};

export { HeaderLogo };
