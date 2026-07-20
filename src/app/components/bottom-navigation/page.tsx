'use client';
import { useState } from 'react';
import { BottomNavigation } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';
import SampleDataBlock from '@/components/SampleDataBlock';

export default function Page() {
  const [nav, setNav] = useState('home');

  return (
    <CompPageLayout name="BottomNavigation" description="A mobile-style fixed tab bar, with optional badges per item.">
      <div className="comp-section">
        <SectionLabel>Data shape</SectionLabel>
        <SampleDataBlock title="BottomNavItem[]" code={`interface BottomNavItem {\n  label: string;\n  icon: ReactNode;\n  value: string;\n  badge?: number;\n}\n\nconst items: BottomNavItem[] = [\n  { label: 'Home', icon: '🏠', value: 'home' },\n  { label: 'Search', icon: '🔍', value: 'search' },\n  { label: 'Inbox', icon: '📥', value: 'inbox', badge: 3 },\n];`} />
      </div>
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <p style={{ fontSize: '0.8rem', color: 'var(--fg-3)', marginBottom: '0.75rem' }}>BottomNavigation uses fixed positioning in real apps — shown here inline for the preview.</p>
        <PreviewBlock code={`<BottomNavigation value={nav} onChange={setNav} items={items} />`}>
          <div style={{ width: '100%', position: 'relative', height: 60 }}>
            <BottomNavigation value={nav} onChange={setNav} items={[
              { label: 'Home', icon: '🏠', value: 'home' },
              { label: 'Search', icon: '🔍', value: 'search' },
              { label: 'Inbox', icon: '📥', value: 'inbox', badge: 3 },
            ]} style={{ position: 'absolute' }} />
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'items', type: 'BottomNavItem[]', description: 'Array of { label, icon, value, badge? }.' },
        { name: 'value', type: 'string', description: 'Currently active item value.' },
        { name: 'onChange', type: '(value: string) => void', description: 'Change handler.' },
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Active item color.' },
      ]} />
    </CompPageLayout>
  );
}
