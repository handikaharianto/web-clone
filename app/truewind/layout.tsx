import React, { ReactNode } from "react";
import { inter, archivo } from "@/fonts/truewind";

type TruewindLayoutProps = {
  children: ReactNode;
};

export default function TruewindLayout({ children }: TruewindLayoutProps) {
  return (
    <div className={`${inter.variable} ${archivo.variable} font-inter`}>
      {children}
    </div>
  );
}
