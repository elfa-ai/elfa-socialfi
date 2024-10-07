import useInitRender from "@/handlers/hooks/layout/useInitRender";
import ElfaTooltip from "../../compound/floating/ElfaTooltip";
import Telegram from "./Telegram";
import XTwitter from "./Twitter";
import Web from "./Web";
import { Button, ButtonProps } from "../../button";

export type SocialProps = {
  link: string;
  type: "twitter" | "telegram" | "web";
  label?: string;
  size?: Extract<ButtonProps["size"], "icon" | "smallIcon">;
};

export type SocialItemProps = Pick<SocialProps, "link" | "size">;

export const CoreSocial = ({ link, type, size }: SocialProps) => {
  const getContent = () => {
    if (type === "twitter") return <XTwitter />;
    if (type === "telegram") return <Telegram />;
    if (type === "web") return <Web />;
    return null;
  };
  return (
    <Button variant="icon" size={size} onClick={() => window.open(link)}>
      {getContent()}
    </Button>
  );
};

export const Social = ({ link, label, type, size = "icon" }: SocialProps) => {
  const initRender = useInitRender();
  if (!initRender) return <CoreSocial link={link} type={type} />;

  return (
    <ElfaTooltip
      align="center"
      title={label ?? `Go to ${type}`}
      contentClassName="w-fit h-fit"
    >
      <CoreSocial link={link} type={type} size={size} />
    </ElfaTooltip>
  );
};
