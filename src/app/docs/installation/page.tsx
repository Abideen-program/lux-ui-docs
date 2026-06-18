export default function InstallationPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Installation</h1>
      <p className="section-sub">Get lux-ui running in your React or Next.js project.</p>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>1. Install the packages</h3>
      <pre className="preview-code" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
npm install lux-ui luxcss
      </pre>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>2. Set up luxcss (Next.js App Router)</h3>
      <p style={{ color: 'var(--fg-muted)', fontSize: '0.88rem' }}>
        Create a small Client Component to load Lux's JS runtime, since <code>app/layout.tsx</code> is a Server Component by default.
      </p>
      <pre className="preview-code" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
{`// src/components/LuxLoader.tsx
'use client';
import 'luxcss/dist/lux.js';
export default function LuxLoader() {
  return null;
}`}
      </pre>
      <pre className="preview-code" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', marginTop: '0.75rem' }}>
{`// app/layout.tsx
import 'luxcss/dist/lux.css';
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
}`}
      </pre>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>3. Use any component</h3>
      <pre className="preview-code" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
{`import { Button } from 'lux-ui';

export default function Page() {
  return <Button tone="primary">Click me</Button>;
}`}
      </pre>
      <p style={{ color: 'var(--fg-muted)', fontSize: '0.88rem' }}>
        No extra setup needed — every lux-ui component ships with <code>&apos;use client&apos;</code> already
        applied internally, so it works seamlessly inside Server Components.
      </p>
    </section>
  );
}
