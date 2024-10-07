import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft";
import { cn } from "@/handlers/types/ui/common";
import { Button } from "../../button";
import useEvent from "@/handlers/hooks/element/useEvent";
import { motion } from "framer-motion";
// import { useWindowsResize } from '@/handlers/hooks/layout/useWindowResize';

type ElfaDialogProps = {
  children: React.ReactNode;
  trigger?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  closeButton?: { icon: "back" | "close"; className?: string };
  contentClassName?: string;
  childClassName?: string;
  isOpen?: boolean;
  handleClose?: () => void;
};

export const getCloseButtonIcon = (
  closeButton: ElfaDialogProps["closeButton"],
) => {
  if (!closeButton) return null;
  if (closeButton.icon === "close")
    return <IoClose className="size-4 md:size-8" />;
  if (closeButton.icon === "back")
    return <FaArrowLeft className="size-4 md:size-4" />;
  return null;
};

const ElfaDialog = ({
  closeButton,
  title,
  description,
  children,
  trigger,
  isOpen = false,
  contentClassName = "",
  childClassName = "",
  handleClose = () => {},
}: ElfaDialogProps) => {
  useEvent(
    typeof window !== "undefined" ? window : undefined,
    "keydown",
    ({ key }: KeyboardEvent) => key === "Escape" && handleClose(),
  );

  // const { isMobile } = useWindowsResize();

  return (
    // <AnimatePresence>
    <Dialog.Root open={isOpen}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <Dialog.Portal>
        <Dialog.Overlay
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{
          //   delay: 0.2
          // }}
          className="bg-black/50 z-[100] fixed inset-0"
          onClick={handleClose}
        />

        <Dialog.Content>
          <div
            className={cn(
              "z-[101] fixed bottom-0 md:bottom-[50%] md:translate-y-[50%] left-[50%] translate-x-[-50%]",
              contentClassName,
            )}
          >
            <motion.div
              transition={{
                type: "spring",
                damping: 14,
                //   stiffness: 20,
                duration: 0.2,
              }}
              // initial={
              //   isMobile ? { translateY: '100dvh' } : { y: 0, scale: 0.7 }
              // }
              // animate={isMobile ? { translateY: 0 } : { y: 0, scale: 1 }}
              animate={
                // { opacity: 0 }
                { translateY: 0 }
              }
              // animate={{ opacity: 1 }}
              initial={{ translateY: "100dvh" }}
              exit={{ translateY: "100dvh" }}
            >
              <div className="relative rounded-lg bg-purple-bg p-4 shadow-2xl border-gray-300 focus:outline-none">
                {!!closeButton && (
                  <Button
                    aria-label="close"
                    size="icon"
                    variant="icon"
                    onClick={handleClose}
                    className={cn(
                      "absolute left-4 top-4 text-gray-700 mb-2",
                      closeButton.className,
                    )}
                  >
                    {getCloseButtonIcon(closeButton)}
                    {/* {closeButton.icon} */}
                    {/* <IoClose className="size-8" /> */}
                  </Button>
                )}
                {title && (
                  <Dialog.Title className="h-10 mb-2">{title}</Dialog.Title>
                )}
                {description && (
                  <Dialog.Description>{description}</Dialog.Description>
                )}

                <div className={childClassName}>{children}</div>

                {/* <div>
            <Dialog.Close asChild>
              <button className="Button green">Save changes</button>
            </Dialog.Close>
          </div> */}
              </div>
            </motion.div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
    // </AnimatePresence>
  );
};

export default ElfaDialog;

// if (false) {
//   return (
//     <Drawer.Root open={true}>
//       <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>
//       <Drawer.Portal>
//         <Drawer.Overlay className="blur-[50rem] bg-black z-[100] data-[state=open]:animate-overlayShow fixed inset-0" />
//         <Drawer.Content
//           className={cn(
//             'z-[101] data-[state=open]:animate-contentShow fixed bottom-0 rounded-t-2xl md:rounded-xl bg-white p-[25px] shadow-md focus:outline-none',
//             contentClassName
//           )}
//         >
//           {/* <Drawer.Handle /> */}
//           {title && <Drawer.Title>{title}</Drawer.Title>}
//           {description && (
//             <Drawer.Description>{description}</Drawer.Description>
//           )}

//           {children}

//           {/* <div>
//           <Dialog.Close asChild>
//             <button className="Button green">Save changes</button>
//           </Dialog.Close>
//         </div> */}

//           {shouldDisplayCloseButton && (
//             <Drawer.Close asChild>
//               <button aria-label="close">
//                 <IoClose className="size-8" />
//               </button>
//             </Drawer.Close>
//           )}
//         </Drawer.Content>
//       </Drawer.Portal>
//     </Drawer.Root>
//     // <Drawer open={open} onOpenChange={setOpen}>
//     //   <DrawerTrigger asChild>
//     //     <Button variant="outline">Edit Profile</Button>
//     //   </DrawerTrigger>
//     //   <DrawerContent>
//     //     <DrawerHeader className="text-left">
//     //       <DrawerTitle>Edit profile</DrawerTitle>
//     //       <DrawerDescription>
//     //         Make changes to your profile here. Click save when you're done.
//     //       </DrawerDescription>
//     //     </DrawerHeader>
//     //     <ProfileForm className="px-4" />
//     //     <DrawerFooter className="pt-2">
//     //       <DrawerClose asChild>
//     //         <Button variant="outline">Cancel</Button>
//     //       </DrawerClose>
//     //     </DrawerFooter>
//     //   </DrawerContent>
//     // </Drawer>
//   );
// }
