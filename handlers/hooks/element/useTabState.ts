import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export type TabStateOptions = {
  syncParam?: boolean;
  paramKey?: string;
  scrollToTopOnChange?: boolean;
};

const useTabState = <TabKeyType>(
  initialValue: TabKeyType,
  tabStateOptions?: TabStateOptions,
) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const [activeTabKey, setActiveTabKey] = useState(() => {
    if (
      tabStateOptions?.syncParam &&
      tabStateOptions?.paramKey &&
      searchParams.get(tabStateOptions.paramKey)
    ) {
      return searchParams.get(tabStateOptions.paramKey) as TabKeyType;
    }
    return initialValue;
  });

  useEffect(() => {
    if (tabStateOptions?.syncParam && tabStateOptions?.paramKey) {
      const urlSearchParams = new URLSearchParams(searchParams ?? {});
      urlSearchParams.set(tabStateOptions.paramKey, activeTabKey as string);
      replace(`${pathname}?${urlSearchParams.toString()}`, { scroll: false });
    }
  }, [activeTabKey, tabStateOptions?.syncParam]);

  return {
    activeTabKey,
    setActiveTabKey,
  };
};

export default useTabState;
