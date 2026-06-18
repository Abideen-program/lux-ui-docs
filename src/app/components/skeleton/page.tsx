import { Skeleton } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function SkeletonPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Skeleton</h1>
      <p className="section-sub">Placeholder loading states for text, circles, and rectangles.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Variants</h3>
      <PreviewBlock code={`<Skeleton variant="circular" width={48} height={48} />
<Skeleton variant="text" width={160} />
<Skeleton variant="rounded" width={120} height={60} />`}>
        <Skeleton variant="circular" width={48} height={48} />
        <Skeleton variant="text" width={160} />
        <Skeleton variant="rounded" width={120} height={60} />
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'variant', type: "'text' | 'circular' | 'rectangular' | 'rounded'", default: "'text'", description: 'Shape of the skeleton.' },
        { name: 'width', type: 'number | string', description: 'Width override.' },
        { name: 'height', type: 'number | string', description: 'Height override.' },
        { name: 'animation', type: "'pulse' | 'wave' | 'none'", default: "'pulse'", description: 'Animation style.' },
      ]} />
    </section>
  );
}
