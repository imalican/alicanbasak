"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Input,
} from "@nextui-org/react";
import { FaEnvelope } from "react-icons/fa";
import { useState } from "react";

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export function SubscribeModal({
  isOpen,
  onClose,
  className,
}: SubscribeModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    setIsLoading(true);
    // Simüle edilmiş API çağrısı
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={className}
      placement="center"
      backdrop="blur"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        },
      }}
      classNames={{
        backdrop: "bg-background/50 backdrop-blur-md",
        base: "border-default-200 bg-background/80 dark:bg-default-100/50 backdrop-blur-md",
        closeButton: "top-3 right-3",
        wrapper: "overflow-hidden",
      }}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-2 pb-2 border-b border-default-200/50">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-violet-100 dark:bg-violet-900/30">
              <FaEnvelope
                className="text-violet-600 dark:text-violet-300"
                size={20}
              />
            </div>
            <h2 className="text-xl font-bold font-space">Stay in the loop</h2>
          </div>
          <p className="text-default-500 text-sm font-normal">
            Subscribe to get the latest content, resources, and updates straight
            to your inbox.
          </p>
        </ModalHeader>
        <ModalBody className="py-6 space-y-4">
          <Input
            type="email"
            label="Email"
            placeholder="you@example.com"
            variant="bordered"
            startContent={
              <FaEnvelope className="text-default-400 flex-shrink-0" />
            }
            classNames={{
              input: "pl-2",
              inputWrapper: [
                "bg-default-100/50 dark:bg-default-50/20",
                "data-[hover=true]:bg-default-200/50 dark:data-[hover=true]:bg-default-50/30",
                "group-data-[focus=true]:bg-default-100/50 dark:group-data-[focus=true]:bg-default-50/20",
              ].join(" "),
            }}
          />
          <div className="space-y-2">
            <Button
              className="w-full font-medium bg-violet-100 hover:bg-violet-200 dark:bg-violet-900/30 dark:hover:bg-violet-900/50 text-violet-600 dark:text-violet-300 transition-colors [&:not(:hover)]:bg-violet-50 dark:[&:not(:hover)]:bg-violet-900/20"
              size="lg"
              isLoading={isLoading}
              onClick={handleSubscribe}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
            <div className="text-center space-y-1">
              <p className="text-default-400 text-xs">
                No spam, ever. Only valuable content.
              </p>
              <p className="text-default-400 text-xs">
                You can unsubscribe at any time by clicking the link in the
                footer of our emails.
              </p>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
