"use client";
import React, { ReactNode, useState } from "react";

import { IoCloseSharp } from "react-icons/io5";

function Modal({
  open,
  setOpen,
  children,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}) {
  if (!open) return null;
  return (
    <>
      <div
        className="w-screen h-screen bg-black/50 fixed top-0 left-0 flex items-center justify-center"
        onClick={() => setOpen(false)}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-8 top-8"
        >
          <IoCloseSharp color="white" size={30} />
        </button>
        {children}
      </div>
    </>
  );
}

export default Modal;
