import { ComponentProps } from "react";

const SectionTitle = ({ children, ...props }: ComponentProps<"p">) => {
  return (
    <p className="container pb-0 font-bold uppercase" {...props}>
      {children}
    </p>
  );
};

export default SectionTitle;
