import { FE_URL } from "@/handlers/constants/route";
import { usePathname } from "next/navigation";

const usePath = () => {
  const pathname = usePathname();

  const isPathActive = (path: string) => {
    if (path === "/" && pathname !== "/") return false;
    if (!pathname) return false;
    if (
      (path === FE_URL.EXPLORE_TOKEN ||
        path === FE_URL.EXPLORE_SMART_ACCOUNT) &&
      (pathname.includes(FE_URL.EXPLORE_SMART_ACCOUNT) ||
        pathname.includes(FE_URL.EXPLORE_TOKEN))
    )
      return true;
    return pathname.includes(path);
  };

  return { isPathActive, isMain: pathname?.trim() === FE_URL.MAIN };
};

export default usePath;
