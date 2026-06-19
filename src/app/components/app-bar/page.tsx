import { AppBar, Button } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="AppBar" description="A header bar with left/center/right slots, useful for app navigation.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<AppBar left={<strong>My App</strong>} right={<Button size="sm">Sign in</Button>} />`}>
          <div style={{ width: '100%', border: '1px solid var(--border-2)', borderRadius: 12, overflow: 'hidden' }}>
            <AppBar left={<strong>My App</strong>} right={<Button size="sm">Sign in</Button>} sticky={false} />
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'left', type: 'ReactNode', description: 'Content on the left (logo, title).' },
        { name: 'center', type: 'ReactNode', description: 'Center content (search, nav).' },
        { name: 'right', type: 'ReactNode', description: 'Content on the right (actions, avatar).' },
        { name: 'variant', type: "'solid' | 'glass' | 'transparent'", default: "'glass'", description: 'Background style.' },
        { name: 'sticky', type: 'boolean', default: 'false', description: 'Sticks to the top of the viewport.' },
        { name: 'height', type: 'number', default: '64', description: 'Bar height in px.' },
      ]} />
    </CompPageLayout>
  );
}
