declare module "framer-motion";

declare module "react-hook-form" {
  export type Resolver<T = any> = any;
  export function useForm<T = any>(options?: any): any;
}

declare module "@hookform/resolvers/zod" {
  export function zodResolver(schema: any, options?: any): any;
}

declare module "lucide-react" {
  import * as React from "react";

  export type LucideProps = Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    size?: string | number;
    color?: string;
    strokeWidth?: number;
    [key: string]: any;
  };

  export type LucideComponent = React.ForwardRefExoticComponent<
    LucideProps & React.RefAttributes<SVGSVGElement>
  >;

  const icons: { [key: string]: LucideComponent };

  export const Loader2: LucideComponent;
  export const Lock: LucideComponent;
  export const CheckCircle2: LucideComponent;
  export const Menu: LucideComponent;
  export const Users: LucideComponent;
  export const ListChecks: LucideComponent;
  export const FileText: LucideComponent;
  export const Settings: LucideComponent;
  export const LogOut: LucideComponent;
  export const X: LucideComponent;
  export const Printer: LucideComponent;

  export default icons;
}
