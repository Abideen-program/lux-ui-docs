'use client';
import { SpeedDial } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';
import SampleDataBlock from '@/components/SampleDataBlock';

export default function Page() {
  return (
    <CompPageLayout name="SpeedDial" description="An expanding floating action button with multiple quick actions.">
      <div className="comp-section">
        <SectionLabel>Data shape</SectionLabel>
        <SampleDataBlock title="SpeedDialAction[]" code={`interface SpeedDialAction {\n  icon: ReactNode;\n  label: string;\n  onClick: () => void;\n}\n\nconst actions: SpeedDialAction[] = [\n  { icon: '📝', label: 'Note', onClick: () => {} },\n  { icon: '📷', label: 'Photo', onClick: () => {} },\n  { icon: '📎', label: 'Attach', onClick: () => {} },\n];`} />
      </div>
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <p style={{ fontSize: '0.8rem', color: 'var(--fg-3)', marginBottom: '0.75rem' }}>SpeedDial uses fixed positioning in real apps — shown here inline for the preview.</p>
        <PreviewBlock code={`<SpeedDial icon="+" actions={actions} />`}>
          <div style={{ width: '100%', position: 'relative', height: 160 }}>
            <SpeedDial
              icon="+"
              actions={[{ icon: '📝', label: 'Note', onClick: () => {} }, { icon: '📷', label: 'Photo', onClick: () => {} }]}
              style={{ position: 'absolute', bottom: 0, right: 0 }}
            />
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'icon', type: 'ReactNode', description: 'Main FAB icon.' },
        { name: 'openIcon', type: 'ReactNode', default: "'✕'", description: 'Icon shown when expanded.' },
        { name: 'actions', type: 'SpeedDialAction[]', description: 'Array of { icon, label, onClick }.' },
        { name: 'direction', type: "'up' | 'down' | 'left' | 'right'", default: "'up'", description: 'Direction actions expand toward.' },
        { name: 'position', type: "'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'", default: "'bottom-right'", description: 'Fixed screen position.' },
      ]} />
    </CompPageLayout>
  );
}
