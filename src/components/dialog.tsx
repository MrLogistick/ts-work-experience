import { type ReactNode, useEffect } from "react";
import { DoorOpen } from "lucide-react";

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  ariaLabel?: string;
  className?: string;
};

export const Dialog = ({
  isOpen,
  onClose,
  children,
  ariaLabel = "Dialog",
  className,
}: DialogProps) => {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        aria-label="Close dialog"
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
        type="button"
      />
      <div
        aria-label={ariaLabel}
        aria-modal="true"
        className={`relative min-h-80 w-full rounded-lg border-2 bg-white p-6 shadow-xl ${className ?? ""}`}
        role="dialog"
      >
        <button
          aria-label="Back"
          className="absolute left-4 top-4 flex h-10 items-center justify-center rounded-sm border-2 px-2 text-sm font-medium hover:cursor-pointer"
          onClick={onClose}
          type="button"
        >
          <DoorOpen className="mr-1 h-6 w-6" />
          Back
        </button>
        {children}
      </div>
    </div>
  );
};
