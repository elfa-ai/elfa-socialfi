import React, { useState } from "react";
import ExploreItemLink, {
  ExploreItemLinkProps,
} from "./components/ExploreItemLink";

import ShareButton from "@/components/layout/skeleton/ShareButton";
import ElfaTooltip from "@/components/ui/compound/floating/ElfaTooltip";
import { Button } from "@/components/ui/button";
import { cn } from "@/handlers/types/ui/common";
import ElfaDialog from "@/components/ui/compound/floating/ElfaDialog";
import ChipTab from "@/components/ui/atomic/tab/ChipTab";
import useTabState from "@/handlers/hooks/element/useTabState";

import ElfaSelect from "@/components/ui/atomic/input/Select";
import useSelect from "@/handlers/hooks/element/form/select";
import { FormOption } from "@/handlers/types/ui/form";
import Image from "next/image";

export type SectionCardFooterProps = {
  exploreLinkProps: ExploreItemLinkProps;
};

const FEED_SETTINGS_TAB_CONTENT = [
  { label: "Swap", key: "swap" as "swap" | "buy" },
  { label: "Buy", key: "buy" as "swap" | "buy" },
];

const searchList = {
  data: {
    tokens: [
      {
        name: "Solana",
        slug: "solana",
        data: {
          rank: 5,
          image:
            "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756",
          ticker: "sol",
        },
      },
      {
        name: "Ethereum",
        slug: "ethereum",
        data: {
          rank: 2,
          image:
            "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
          ticker: "eth",
        },
      },
      {
        name: "Shiba Inu",
        slug: "shiba-inu",
        data: {
          rank: 13,
          image:
            "https://assets.coingecko.com/coins/images/11939/large/shiba.png?1696511800",
          ticker: "shib",
        },
      },
      {
        name: "Wrapped Bitcoin",
        slug: "wrapped-bitcoin",
        data: {
          rank: 14,
          image:
            "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857",
          ticker: "wbtc",
        },
      },
      {
        name: "Polkadot",
        slug: "polkadot",
        data: {
          rank: 16,
          image:
            "https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1696512008",
          ticker: "dot",
        },
      },
      {
        name: "Star Atlas",
        slug: "star-atlas",
        data: {
          rank: 615,
          image:
            "https://assets.coingecko.com/coins/images/17659/large/Icon_Reverse.png?1696517190",
          ticker: "atlas",
        },
      },
      {
        name: "JOE",
        slug: "joe",
        data: {
          rank: 351,
          image:
            "https://assets.coingecko.com/coins/images/17569/large/JoeToken.png?1703732357",
          ticker: "joe",
        },
      },
      {
        name: "Pepe",
        slug: "pepe",
        data: {
          rank: 22,
          image:
            "https://assets.coingecko.com/coins/images/29850/large/pepe-token.jpeg?1696528776",
          ticker: "pepe",
        },
      },
      {
        name: "NEM",
        slug: "nem",
        data: {
          rank: 230,
          image:
            "https://assets.coingecko.com/coins/images/242/large/NEM_WC_Logo_200px.png?1696501595",
          ticker: "xem",
        },
      },
      {
        name: "Merlin Chain",
        slug: "merlin-chain",
        data: {
          rank: 452,
          image:
            "https://coin-images.coingecko.com/coins/images/37118/large/merlin.jpeg?1713352230",
          ticker: "merl",
        },
      },
    ],
  },
};

const tokenList = searchList.data.tokens.toSpliced(10).map((token) => ({
  ...token,
  label: token.data.ticker.toUpperCase(),
  value: token.slug,
  leftIcon: (
    <Image
      src={token.data.image}
      height={28}
      width={28}
      alt={token.name}
      className="rounded-full"
    />
  ),
}));

const ModalContenty = ({ setIsSwapping }: any) => {
  const feedSettingTabState = useTabState<"swap" | "buy">("swap");

  const token1SelectObject = useSelect<"slug">(
    tokenList as FormOption<"slug">[],
    "slug",
    tokenList.find((token) => token.slug === "ethereum")?.slug,
  );
  const [token1Input, setToken1Input] = useState(0.79);

  const token2SelectObject = useSelect<"slug">(
    tokenList as FormOption<"slug">[],
    "slug",
    tokenList.find((token) => token.slug === "joe")?.slug,
  );
  const [token2Input, setToken2Input] = useState(9763);

  return (
    <ElfaDialog
      isOpen
      contentClassName="border-none border-3xl w-full lg:w-fit lg:min-w-[800px] transition no-scrollbar"
      childClassName="max-h-[75dvh] overflow-y-auto"
      title={<div className="text-gray-900 text-xl my-8 h-full ">Trade</div>}
      description={
        <div className="w-full mt-8">
          <ChipTab
            contents={FEED_SETTINGS_TAB_CONTENT}
            {...feedSettingTabState}
          />
        </div>
      }
      handleClose={() => setIsSwapping(false)}
    >
      <div>
        <div className="w-full relative flex flex-col items-center mt-4 gap-4">
          {[
            {
              selectObject: token1SelectObject,
              state: [token1Input, setToken1Input] as any,
              balance: 0.0812,
            },
            {
              selectObject: token2SelectObject,
              state: [token2Input, setToken2Input] as any,
            },
          ].map(({ selectObject, state, balance }) => (
            <div className="bg-gray-100 rounded-lg px-4 py-6 w-full flex items-center justify-between relative">
              <input
                value={state[0]}
                onChange={(e) => state[1](e.target.value)}
                className="border-none outline-none focus:outline-none bg-transparent text-gray-900 text-lg"
              />

              <div>
                <ElfaSelect
                  {...selectObject}
                  hideLabel
                  selectProps={{ className: "py-1 px-2 min-w-20" }}
                />
              </div>

              {balance && (
                <div className="absolute bottom-1 right-4 text-gray-900 text-2xs">
                  <span>Balance: {balance}</span>{" "}
                  <span className="text-purple-200"> Max</span>
                </div>
              )}
            </div>
          ))}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              className="inline-flex items-center justify-center whitespace-nowrap text-sm  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 size-9 md:size-10 rounded p-2 bg-purple-bg border border-gray-300"
              onClick={() => setIsSwapping(true)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={cn("fill-gray-900")}
              >
                <path d="M3.33138 7.49967H14.1647L12.8314 8.49967C12.7438 8.56533 12.6701 8.64759 12.6143 8.74176C12.5586 8.83592 12.5219 8.94015 12.5064 9.04848C12.4909 9.15682 12.497 9.26714 12.5241 9.37315C12.5513 9.47916 12.5991 9.57879 12.6647 9.66634C12.7423 9.76983 12.843 9.85384 12.9587 9.91169C13.0744 9.96955 13.202 9.99967 13.3314 9.99967C13.5117 9.99967 13.6871 9.94119 13.8314 9.833L17.1647 7.333C17.2666 7.25523 17.3492 7.15499 17.4061 7.04009C17.463 6.92518 17.4925 6.79871 17.4925 6.6705C17.4925 6.5423 17.463 6.41582 17.4061 6.30092C17.3492 6.18601 17.2666 6.08577 17.1647 6.008L13.948 3.508C13.7734 3.37208 13.552 3.31108 13.3324 3.33843C13.1129 3.36578 12.9131 3.47924 12.7772 3.65384C12.6413 3.82844 12.5803 4.04988 12.6076 4.26946C12.635 4.48903 12.7484 4.68875 12.923 4.82467L14.2314 5.833H3.33138C3.11037 5.833 2.8984 5.9208 2.74212 6.07708C2.58584 6.23336 2.49805 6.44532 2.49805 6.66634C2.49805 6.88735 2.58584 7.09931 2.74212 7.25559C2.8984 7.41187 3.11037 7.49967 3.33138 7.49967ZM16.6647 13.333H5.83138L7.16471 12.333C7.34152 12.2004 7.45842 12.003 7.48967 11.7842C7.52093 11.5654 7.46399 11.3431 7.33138 11.1663C7.19877 10.9895 7.00136 10.8726 6.78256 10.8414C6.56377 10.8101 6.34152 10.8671 6.16471 10.9997L2.83138 13.4997C2.72946 13.5774 2.64685 13.6777 2.58999 13.7926C2.53314 13.9075 2.50355 14.034 2.50355 14.1622C2.50355 14.2904 2.53314 14.4168 2.58999 14.5318C2.64685 14.6467 2.72946 14.7469 2.83138 14.8247L6.04805 17.3247C6.19351 17.4376 6.37226 17.4991 6.55638 17.4997C6.68365 17.4994 6.80915 17.4699 6.92327 17.4136C7.03738 17.3572 7.13708 17.2755 7.21471 17.1747C7.35004 17.0009 7.4111 16.7807 7.38456 16.5621C7.35801 16.3435 7.24602 16.1443 7.07305 16.008L5.76471 14.9997H16.6647C16.8857 14.9997 17.0977 14.9119 17.254 14.7556C17.4102 14.5993 17.498 14.3873 17.498 14.1663C17.498 13.9453 17.4102 13.7334 17.254 13.5771C17.0977 13.4208 16.8857 13.333 16.6647 13.333Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="text-gray-900 bg-gray-100 rounded-full my-6 py-2 w-full flex items-center justify-center relative">
          <span>You get {token2Input} </span>
          <span className="capitalize mx-1"> {token2SelectObject.value}</span>
          <span> for {token1Input} </span>
          <span className="capitalize ml-1"> {token1SelectObject.value}</span>
        </div>
        <div className="text-gray-900 my-4 text-sm">
          Quote updates in 5 secs
        </div>

        <div className="my-6">
          <Button className="w-full" variant="primary" size="lg">
            Swap
          </Button>
        </div>
      </div>
    </ElfaDialog>
  );
};

export const SectionCardFooter = ({
  exploreLinkProps,
}: SectionCardFooterProps) => {
  const [isSwapping, setIsSwapping] = useState(false);
  return (
    <>
      {isSwapping && <ModalContenty setIsSwapping={setIsSwapping} />}
      <hr className="my-1" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div>
            <ElfaTooltip
              align="center"
              title={"Swap"}
              contentClassName="w-fit h-fit"
            >
              <Button
                variant="icon"
                size="icon"
                className="group hover:bg-green-500 hover:bg-opacity-10"
                onClick={() => setIsSwapping(true)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn("group-hover:fill-green-500 fill-gray-900", {
                    // 'fill-green-500': true
                  })}
                >
                  <path d="M3.33138 7.49967H14.1647L12.8314 8.49967C12.7438 8.56533 12.6701 8.64759 12.6143 8.74176C12.5586 8.83592 12.5219 8.94015 12.5064 9.04848C12.4909 9.15682 12.497 9.26714 12.5241 9.37315C12.5513 9.47916 12.5991 9.57879 12.6647 9.66634C12.7423 9.76983 12.843 9.85384 12.9587 9.91169C13.0744 9.96955 13.202 9.99967 13.3314 9.99967C13.5117 9.99967 13.6871 9.94119 13.8314 9.833L17.1647 7.333C17.2666 7.25523 17.3492 7.15499 17.4061 7.04009C17.463 6.92518 17.4925 6.79871 17.4925 6.6705C17.4925 6.5423 17.463 6.41582 17.4061 6.30092C17.3492 6.18601 17.2666 6.08577 17.1647 6.008L13.948 3.508C13.7734 3.37208 13.552 3.31108 13.3324 3.33843C13.1129 3.36578 12.9131 3.47924 12.7772 3.65384C12.6413 3.82844 12.5803 4.04988 12.6076 4.26946C12.635 4.48903 12.7484 4.68875 12.923 4.82467L14.2314 5.833H3.33138C3.11037 5.833 2.8984 5.9208 2.74212 6.07708C2.58584 6.23336 2.49805 6.44532 2.49805 6.66634C2.49805 6.88735 2.58584 7.09931 2.74212 7.25559C2.8984 7.41187 3.11037 7.49967 3.33138 7.49967ZM16.6647 13.333H5.83138L7.16471 12.333C7.34152 12.2004 7.45842 12.003 7.48967 11.7842C7.52093 11.5654 7.46399 11.3431 7.33138 11.1663C7.19877 10.9895 7.00136 10.8726 6.78256 10.8414C6.56377 10.8101 6.34152 10.8671 6.16471 10.9997L2.83138 13.4997C2.72946 13.5774 2.64685 13.6777 2.58999 13.7926C2.53314 13.9075 2.50355 14.034 2.50355 14.1622C2.50355 14.2904 2.53314 14.4168 2.58999 14.5318C2.64685 14.6467 2.72946 14.7469 2.83138 14.8247L6.04805 17.3247C6.19351 17.4376 6.37226 17.4991 6.55638 17.4997C6.68365 17.4994 6.80915 17.4699 6.92327 17.4136C7.03738 17.3572 7.13708 17.2755 7.21471 17.1747C7.35004 17.0009 7.4111 16.7807 7.38456 16.5621C7.35801 16.3435 7.24602 16.1443 7.07305 16.008L5.76471 14.9997H16.6647C16.8857 14.9997 17.0977 14.9119 17.254 14.7556C17.4102 14.5993 17.498 14.3873 17.498 14.1663C17.498 13.9453 17.4102 13.7334 17.254 13.5771C17.0977 13.4208 16.8857 13.333 16.6647 13.333Z" />
                </svg>
              </Button>
            </ElfaTooltip>
          </div>
          <div>
            <ShareButton
              isActive={false}
              onClick={() => {
                console.log("fw");
              }}
            />
          </div>
        </div>
        <div>
          <ExploreItemLink {...exploreLinkProps} />
        </div>
      </div>
    </>
  );
};
