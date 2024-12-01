"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useRef, useState } from "react";
import { RxCaretSort } from "react-icons/rx";

interface ISelect<T> {
  value: T;
  values: T[];
  options: string[];
  setValue: React.Dispatch<React.SetStateAction<T>>;
  className?: string;
  itemClassName?: string;
}

function Select<T extends string | number>({
  values,
  options,
  setValue,
  value,
  className,
  itemClassName,
}: ISelect<T>) {
  const [open, setOpen] = useState(false);

  const selectedOption = options[values.findIndex((val) => val === value)];
  const selectRef = useRef<HTMLDivElement>(null);

  const onToggle = () => setOpen((prev) => !prev);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!selectRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", onClickOutside);
    return () => {
      document.removeEventListener("click", onClickOutside);
    };
  }, []);

  return (
    <div
      className={cn(
        `flex relative cursor-pointer select-none min-w-36`,
        className
      )}
      ref={selectRef}
      onClick={onToggle}
    >
      <div className="w-full h-full border text-sm bg-white px-2 py-1 rounded flex gap-2 items-center justify-between">
        <span>{selectedOption}</span>
        <RxCaretSort />
      </div>

      {open && (
        <ul className="absolute top-full translate-y-1 w-full rounded bg-white border p-1 text-sm flex flex-col gap-1">
          {options.map((option, index) => (
            <li
              key={index}
              className={cn(
                "px-2 py-1 hover:bg-neutral-200 rounded",
                itemClassName
              )}
              onClick={(e) => {
                e.stopPropagation();
                setValue(values[index]);
                setOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
