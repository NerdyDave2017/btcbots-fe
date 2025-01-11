import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import { ModalProps } from "@/src/types";

const sizes: Record<"xl" | "lg" | "md" | "sm", string> = {
  xl: "max-w-[600px]",
  lg: "max-w-xl",
  md: "max-w-lg",
  sm: "max-w-[480px]",
};

function Modal({
  isOpen,
  onOpen,
  onToggle,
  closeModal,
  children,
  size = "xl",
}: ModalProps) {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={closeModal}
          onToggle={onToggle}
        >
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </TransitionChild>
          <div className="flex items-center justify-end fixed inset-0 overflow-y-auto ">
            <div className="flex items-center justify-center w-full lg:w-[calc(100%_-_17.1875rem)]">
              <div
                className={`flex w-full justify-center h-full  items-center text-center px-5 md:px-0`}
              >
                <TransitionChild
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <DialogPanel
                    className={`relative bg-[#eaf0f6] w-auto ${sizes[size]} rounded-2xl  transform overflow-hidden shadow-md transition-all`}
                  >
                    {children}
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
export default Modal;
