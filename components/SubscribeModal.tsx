"use client";

import { Button, Input } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

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
    try {
      // Gerçek API çağrısı buraya gelecek
      onClose();
    } catch (error) {
      console.error("Subscription failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-background/50 backdrop-blur-md"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="relative z-10 w-full max-w-md mx-auto bg-background/80 dark:bg-default-100/50 backdrop-blur-md border border-default-200 rounded-large"
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 p-2 rounded-lg hover:bg-default-100 transition-colors"
                onClick={onClose}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </button>

              {/* Header */}
              <div className="flex flex-col gap-2 p-6 pb-4 border-b border-default-200/50">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-violet-100 dark:bg-violet-900/30">
                    <FaEnvelope
                      className="text-violet-600 dark:text-violet-300"
                      size={20}
                    />
                  </div>
                  <h2 className="text-xl font-bold font-space">
                    Stay in the loop
                  </h2>
                </div>
                <p className="text-default-500 text-sm font-normal">
                  Subscribe to get the latest content, resources, and updates
                  straight to your inbox.
                </p>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <Input
                  classNames={{
                    input: "pl-2",
                    inputWrapper: [
                      "bg-default-100/50 dark:bg-default-50/20",
                      "data-[hover=true]:bg-default-200/50 dark:data-[hover=true]:bg-default-50/30",
                      "group-data-[focus=true]:bg-default-100/50 dark:group-data-[focus=true]:bg-default-50/20",
                    ].join(" "),
                  }}
                  label="Email"
                  placeholder="you@example.com"
                  startContent={
                    <FaEnvelope className="text-default-400 flex-shrink-0" />
                  }
                  type="email"
                  variant="bordered"
                />
                <div className="space-y-2">
                  <Button
                    className="w-full font-medium bg-violet-100 hover:bg-violet-200 dark:bg-violet-900/30 dark:hover:bg-violet-900/50 text-violet-600 dark:text-violet-300 transition-colors [&:not(:hover)]:bg-violet-50 dark:[&:not(:hover)]:bg-violet-900/20"
                    isLoading={isLoading}
                    size="lg"
                    onClick={handleSubscribe}
                  >
                    {isLoading ? "Subscribing..." : "Subscribe"}
                  </Button>
                  <div className="text-center space-y-1">
                    <p className="text-default-400 text-xs">
                      No spam, ever. Only valuable content.
                    </p>
                    <p className="text-default-400 text-xs">
                      You can unsubscribe at any time by clicking the link in
                      the footer of our emails.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
