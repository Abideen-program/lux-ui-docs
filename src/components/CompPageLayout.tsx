import { ReactNode } from 'react';

interface CompPageLayoutProps {
  name: string;
  description: string;
  children: ReactNode;
}

export default function CompPageLayout({ name, description, children }: CompPageLayoutProps) {
  return (
    <div className="page-content">
      <div className="comp-page-header">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}
