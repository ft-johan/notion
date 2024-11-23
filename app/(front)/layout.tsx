
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="px-8 py-8">
     
      {children}
    </div>
  );
}
