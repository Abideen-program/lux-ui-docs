import Link from 'next/link';
import { Button, Card, GradientText, Badge, Avatar } from 'lux-ui';

const categories = [
  { name: 'Inputs', count: 8, desc: 'Button, TextField, Select, Slider, Rating and more' },
  { name: 'Data Display', count: 5, desc: 'Typography, Avatar, Badge, Chip, Table' },
  { name: 'Feedback', count: 5, desc: 'Alert, Toast, Dialog, Progress, Skeleton' },
  { name: 'Surfaces', count: 3, desc: 'Card, Accordion, AppBar' },
  { name: 'Navigation', count: 5, desc: 'Tabs, Breadcrumbs, Pagination, Menu, Stepper' },
  { name: 'Overlay', count: 4, desc: 'Modal, Drawer, Popover, Tooltip' },
  { name: 'Layout', count: 4, desc: 'Box, Container, Grid, Stack' },
  { name: 'Lux Exclusive', count: 7, desc: 'GradientText, TiltCard, Typewriter, Counter' },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-mesh" />
        <div className="hero-content">
          <span className="hero-eyebrow">✦ 60 components · Phase 1</span>
          <h1>Beautiful React components,<br />built on luxcss.</h1>
          <p>
            lux-ui gives you typed, accessible React components with the visual
            personality of Lux baked in — glass surfaces, gradient text, magnetic
            buttons, and motion, out of the box.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link href="/docs/installation">
              <Button tone="primary" radius="full" size="lg" ripple magnetic>
                Get Started
              </Button>
            </Link>
            <Link href="/components/button">
              <Button variant="ghost" tone="neutral" radius="full" size="lg">
                Browse Components →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-heading">Live, not screenshots</h2>
        <p className="section-sub">Every example on this site renders the real lux-ui component.</p>

        <Card variant="glass" radius="xl" style={{ maxWidth: 420, padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <Avatar initials="AB" status="online" />
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Abideen</div>
              <GradientText gradient="electric" style={{ fontSize: '0.78rem' }}>Pro Plan</GradientText>
            </div>
            <Badge tone="success" style={{ marginLeft: 'auto' }}>Active</Badge>
          </div>
          <Button tone="primary" radius="full" fullWidth ripple>
            View Dashboard
          </Button>
        </Card>
      </section>

      <section className="content-section">
        <h2 className="section-heading">Browse by category</h2>
        <p className="section-sub">60 components across 8 categories — fully typed, all production-ready.</p>

        <div className="comp-grid">
          {categories.map(cat => (
            <div key={cat.name} className="comp-card">
              <div className="comp-card-name">{cat.name} <span style={{ color: 'var(--fg-dim)', fontWeight: 400 }}>· {cat.count}</span></div>
              <div className="comp-card-desc">{cat.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
