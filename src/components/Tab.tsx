import React, {type ReactNode } from 'react';

interface TabProps {
  label: string;
  children: ReactNode;
}

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};