import { SVGProps } from "react";

export type linkItemType = {
  url: string;
  title: string;
  component: React.FC;
  icon?: React.FC<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  dropdown?: Omit<linkItemType, "icon">[];
};
