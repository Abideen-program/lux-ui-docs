import { ConfettiButton } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function ConfettiButtonPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">ConfettiButton</h1>
      <p className="section-sub">Fires a confetti burst from the click position via <code>window.Lux.confetti()</code>.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Basic</h3>
      <PreviewBlock code={`<ConfettiButton tone="success" count={100}>Celebrate 🎉</ConfettiButton>`}>
        <ConfettiButton tone="success" count={100}>Celebrate 🎉</ConfettiButton>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'count', type: 'number', default: '80', description: 'Number of confetti particles.' },
        { name: 'onConfetti', type: '() => void', description: 'Called after confetti fires.' },
      ]} />
    </section>
  );
}
