import { TextField } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function TextFieldPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">TextField</h1>
      <p className="section-sub">A labeled text input with hint, error states, and left/right addons.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Basic</h3>
      <PreviewBlock code={`<TextField label="Email" placeholder="you@example.com" />`}>
        <TextField label="Email" placeholder="you@example.com" />
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>States</h3>
      <PreviewBlock code={`<TextField label="Username" hint="3-20 characters" />
<TextField label="Password" error="Too short" />`}>
        <TextField label="Username" hint="3-20 characters" />
        <TextField label="Password" error="Too short" />
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'label', type: 'string', description: 'Field label.' },
        { name: 'hint', type: 'string', description: 'Helper text below the field.' },
        { name: 'error', type: 'string', description: 'Error message — also sets error state.' },
        { name: 'size', type: 'LuxSize', default: "'md'", description: 'Field size.' },
        { name: 'leftAddon', type: 'ReactNode', description: 'Icon or text on the left.' },
        { name: 'rightAddon', type: 'ReactNode', description: 'Icon or text on the right.' },
        { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Stretches to 100% width.' },
      ]} />
    </section>
  );
}
