import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function InstallationPage() {
  return (
    <CompPageLayout name="Installation" description="Get lux-ui running in your React or Next.js project in three steps.">
      <div className="comp-section">
        <SectionLabel>1. Install the packages</SectionLabel>
        <div className="code-block">
          <div className="code-block-header">terminal</div>
          <pre className="code-block-inner">npm install lux-ui luxcss</pre>
        </div>
      </div>

      <div className="comp-section">
        <SectionLabel>2. Set up luxcss (Next.js App Router)</SectionLabel>
        <p style={{ color: 'var(--fg-2)', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: 1.6 }}>
          Create a small Client Component to load Lux&apos;s JS runtime, since <code style={{ color: 'var(--cyan)' }}>app/layout.tsx</code> is a Server Component by default.
        </p>
        <div className="code-block">
          <div className="code-block-header">src/components/LuxLoader.tsx</div>
          <pre className="code-block-inner">{`'use client';
import 'luxcss/dist/lux.js';
export default function LuxLoader() {
  return null;
}`}</pre>
        </div>
        <div className="code-block">
          <div className="code-block-header">app/layout.tsx</div>
          <pre className="code-block-inner">{`import 'luxcss/dist/lux.css';
import LuxLoader from '@/components/LuxLoader';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LuxLoader />
        {children}
      </body>
    </html>
  );
}`}</pre>
        </div>
      </div>

      <div className="comp-section">
        <SectionLabel>3. Use any component</SectionLabel>
        <div className="code-block">
          <div className="code-block-header">app/page.tsx</div>
          <pre className="code-block-inner">{`import { Button } from 'lux-ui';

export default function Page() {
  return <Button tone="primary">Click me</Button>;
}`}</pre>
        </div>
        <p style={{ color: 'var(--fg-2)', fontSize: '0.875rem', lineHeight: 1.6 }}>
          No extra setup needed — every lux-ui component ships with <code style={{ color: 'var(--cyan)' }}>&apos;use client&apos;</code> already applied internally, so it works seamlessly inside Server Components.
        </p>
      </div>
    </CompPageLayout>
  );
}
