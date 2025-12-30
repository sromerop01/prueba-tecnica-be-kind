import type { ReactNode } from "react";

interface TabsProps {
  children: ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  return (
    <div className="flex border-b border-gray-200">
      {children}
    </div>
  );
}