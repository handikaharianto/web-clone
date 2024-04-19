import { ReactNode } from "react";

type TextHighlightProps = {
  children: ReactNode;
};

export default function TextHighlight({ children }: TextHighlightProps) {
  return (
    <div className="bg-[#ffc220] inline rounded-md py-1 px-2">{children}</div>
  );
}
