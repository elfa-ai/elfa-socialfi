import { FeedType } from "@/handlers/types/feed";
import { SECTION_CARD_HEADER_TOKEN_DATA } from "./token";
import { SECTION_CARD_HEADER_POST_DATA } from "./post";
import { SectionCardFooterProps } from "../section-card/common/footer";
import { SECTION_CARD_HEADER_SIGNAL_DATA } from "./signal";

export type SectionCardTypeDataMap = any;

export type SectionCardMetaInformationType<
  Feed extends FeedType,
  DataType = SectionCardTypeDataMap[Feed],
> = {
  IconDisplayFormatter: (data: DataType) => React.ReactNode;
  RendererComponent: any;
  ModalComponent: any;
  titleTooltip?: string;
  titleFormatter: (data: DataType) => React.ReactNode;
  subtitleFormatter: (data: DataType) => React.ReactNode;
  FooterComponentPropsFormatter: (data: DataType) => SectionCardFooterProps;
};

export type SectionCardTypeCategoryMap = any;

export type SectionCardHeaderMapType = any;

export const SECTION_CARD_HEADER_MAP: SectionCardHeaderMapType = {
  ...SECTION_CARD_HEADER_TOKEN_DATA,
  ...SECTION_CARD_HEADER_POST_DATA,
  ...SECTION_CARD_HEADER_SIGNAL_DATA,
};

export const getSectionCardHeader = (
  type: any,
  category: SectionCardTypeCategoryMap[any],
) => SECTION_CARD_HEADER_MAP[type][category];
