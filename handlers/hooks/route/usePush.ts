import { usePathname, useRouter } from "next/navigation";
import NProgress from "nprogress";

const usePush = () => {
  const { push: routerPush } = useRouter();
  const pathname = usePathname();
  const push = (targetLink: string) => {
    if (pathname.trim() === targetLink.trim()) return;
    NProgress.start();
    routerPush(targetLink);
  };
  return push;
};

export default usePush;
