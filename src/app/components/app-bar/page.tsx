import { AppBar, Button } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function AppBarPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">AppBar</h1>
      <p className="section-sub">A header bar with left/center/right slots, useful for app navigation.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Basic</h3>
      <PreviewBlock code={`<AppBar
  left={<strong>My App</strong>}
  right={<Button size="sm">Sign in</Button>}
/>`}>
        <div style={{ width: '100%', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
          <AppBar left={<strong>My App</strong>} right={<Button size="sm">Sign in</Button>} sticky={false} />
        </div>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'left', type: 'ReactNode', description: 'Content on the left (logo, title).' },
        { name: 'center', type: 'ReactNode', description: 'Center content (search, nav).' },
        { name: 'right', type: 'ReactNode', description: 'Content on the right (actions, avatar).' },
        { name: 'variant', type: "'solid' | 'glass' | 'transparent'", default: "'glass'", description: 'Background style.' },
        { name: 'sticky', type: 'boolean', default: 'false', description: 'Sticks to the top of the viewport.' },
        { name: 'height', type: 'number', default: '64', description: 'Bar height in px.' },
      ]} />
    </section>
  );
}
