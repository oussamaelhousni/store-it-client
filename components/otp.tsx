import React from "react";

import { OTPInput, SlotProps } from "input-otp";
import { cn } from "@/utils/cn";

function Slot(props: SlotProps) {
  return (
    <div
      className={cn(
        "relative w-8 sm:w-10 h-10 sm:h-14 text-[1.2rem] sm:text-[2rem]",
        "flex items-center justify-center",
        "transition-all duration-300",
        "border-border border-y border-r first:border-l first:rounded-l-md last:rounded-r-md",
        "group-hover:border-accent-foreground/20 group-focus-within:border-primary-light/20",
        "outline outline-0 outline-primary-light/20",
        { "outline-4 outline-primary-light": props.isActive }
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
      {props.hasFakeCaret && <FakeCaret />}
    </div>
  );
}

// You can emulate a fake textbox caret!
function FakeCaret() {
  return (
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center animate-caret-blink">
      <div className="w-px h-8 bg-white" />
    </div>
  );
}

// Inspired by Stripe's MFA input.
function FakeDash() {
  return (
    <div className="flex w-10 justify-center items-center">
      <div className="w-3 h-1 rounded-full bg-border" />
    </div>
  );
}

function Otp({ otp, setOtp }: any) {
  return (
    <OTPInput
      value={otp}
      onChange={(otp) => setOtp(otp)}
      maxLength={6}
      containerClassName="group flex items-center has-[:disabled]:opacity-30 mx-auto"
      render={({ slots }) => (
        <>
          <div className="flex">
            {slots.slice(0, 3).map((slot, idx) => (
              <Slot key={idx} {...slot} />
            ))}
          </div>

          <FakeDash />

          <div className="flex">
            {slots.slice(3).map((slot, idx) => (
              <Slot key={idx} {...slot} />
            ))}
          </div>
        </>
      )}
    />
  );
}

export default Otp;
