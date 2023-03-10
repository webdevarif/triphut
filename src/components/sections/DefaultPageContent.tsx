import React from "react";


interface DefaultPageContentProps {
  children: React.ReactNode;
}
function DefaultPageContent({ children }: DefaultPageContentProps) {
  return <div className="page-content">{children}</div>;
}

export default DefaultPageContent;
