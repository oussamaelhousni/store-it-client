"use client";
import { cn } from "@/utils/cn";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
  createContext,
} from "react";

type PopoverType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onClickOutside: (e: MouseEvent) => void;
  /*  onScroll: () => void; */
};

const PopoverContext = createContext<PopoverType>({
  open: false,
  setOpen: () => {},
  onClickOutside: (e: MouseEvent) => {},
  /* onScroll: () => {}, */
});

const Popover = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onClickOutside = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      <PopoverContext.Provider value={{ open, setOpen, onClickOutside }}>
        {children}
      </PopoverContext.Provider>
    </div>
  );
};

const PopoverBtn: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const context = useContext(PopoverContext);

  if (!context) {
    throw new Error("PopoverBtn must be used within a Popover");
  }

  const { setOpen } = context;

  // Ref to the button element
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    document.addEventListener("click", context.onClickOutside);

    return () => {
      document.removeEventListener("click", context.onClickOutside);
    };
  }, [setOpen]);

  return (
    <button
      className={cn("relative", className)}
      onClick={() => setOpen((prev) => !prev)}
      ref={btnRef}
    >
      {children}
    </button>
  );
};

const PopoverContent: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const context = useContext(PopoverContext);

  if (!context) {
    throw new Error("PopoverBtn must be used within a Popover");
  }

  const { open } = context;
  return (
    <>
      {open && (
        <ul
          className={cn(
            "w-40 bg-white rounded-lg absolute top-[110%] shadow-md left-0 -translate-x-1/2 p-1 flex flex-col gap-1 z-50",
            className
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </ul>
      )}
    </>
  );
};

const PopoverItem: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <li
      className={cn(
        "px-3 py-1 rounded-lg hover:bg-light-gray cursor-pointer",
        className
      )}
    >
      {children}
    </li>
  );
};
Popover.PopoverBtn = PopoverBtn;
Popover.PopoverContent = PopoverContent;
Popover.PopoverItem = PopoverItem;

export default Popover;
