import { TextField } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="TextField" description="A labeled text input with hint, error states, and left/right addons.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<TextField label="Email" placeholder="you@example.com" />`}>
          <div style={{ width: '100%', maxWidth: 320 }}><TextField label="Email" placeholder="you@example.com" /></div>
        </PreviewBlock>
      </div>
      <div className="comp-section">
        <SectionLabel>States</SectionLabel>
        <PreviewBlock code={`<TextField label="Username" hint="3-20 characters" />\n<TextField label="Password" error="Too short" />`}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: 320 }}>
            <TextField label="Username" hint="3-20 characters" />
            <TextField label="Password" error="Too short" />
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'label', type: 'string', description: 'Field label.' },
        { name: 'hint', type: 'string', description: 'Helper text below the field.' },
        { name: 'error', type: 'string', description: 'Error message — also sets error state.' },
        { name: 'size', type: 'LuxSize', default: "'md'", description: 'Field size.' },
        { name: 'leftAddon', type: 'ReactNode', description: 'Icon or text on the left.' },
        { name: 'rightAddon', type: 'ReactNode', description: 'Icon or text on the right.' },
        { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Stretches to 100% width.' },
      ]} />
    </CompPageLayout>
  );
}
