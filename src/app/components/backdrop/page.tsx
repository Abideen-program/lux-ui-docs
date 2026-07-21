import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
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
      <PropsTable rows={[
        { name: 'open', type: 'boolean', default: 'true', description: 'Whether the backdrop is visible.' },
        { name: 'blur', type: 'number', default: '4', description: 'Backdrop blur amount in px.' },
        { name: 'opacity', type: 'number', default: '0.55', description: 'Background dim opacity (0-1).' },
        { name: 'onClick', type: '() => void', description: 'Click handler — typically closes the overlay.' },
        { name: 'zIndex', type: 'number', default: '1000', description: 'Stack order.' },
      ]} />
    </CompPageLayout>
  );
}
