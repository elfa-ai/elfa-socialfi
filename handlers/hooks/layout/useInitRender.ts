import { useEffect, useState } from "react";

export default function useInitRender() {
  const [isInitRender, setIsInitRender] = useState(false);
  useEffect(() => {
    setIsInitRender(true);
  }, []);
  return isInitRender;
}
