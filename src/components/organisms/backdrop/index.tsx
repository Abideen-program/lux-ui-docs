import PropsTable from '@/components/atoms/PropsTable';
import CompPageLayout from '@/components/atoms/CompPageLayout';
import SectionLabel from '@/components/atoms/SectionLabel';
import { BackdropRows } from '@/constant/data';

export default function BackdropPage() {
  return (
    <CompPageLayout name="Backdrop" description="A full-screen dimmed overlay — the building block behind Modal and Drawer.">
      <div className="comp-section">
        <SectionLabel>Usage</SectionLabel>
        <p style={{ fontSize: '0.85rem', color: 'var(--fg-2)', marginBottom: '1rem' }}>
          Backdrop is rarely used directly — Modal and Drawer already wrap it. Use it standalone only when building a fully custom overlay.
        </p>
        <div className="code-block">
          <div className="code-block-header">usage</div>
          <pre className="code-block-inner">{`<Backdrop open={open} onClick={() => setOpen(false)}>\n  <YourCustomPanel />\n</Backdrop>`}</pre>
        </div>
      </div>
      <PropsTable rows={BackdropRows} />
    </CompPageLayout>
  );
}
