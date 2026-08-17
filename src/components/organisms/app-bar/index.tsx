import { AppBar, Button } from 'lux-ui';
import PreviewBlock from '@/components/atoms/PreviewBlock';
import PropsTable from '@/components/atoms/PropsTable';
import CompPageLayout from '@/components/atoms/CompPageLayout';
import SectionLabel from '@/components/atoms/SectionLabel';
import { AppBarRows } from '@/constant/data';

export default function AppBarPage() {
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
      <PropsTable rows={AppBarRows} />
    </CompPageLayout>
  );
}
