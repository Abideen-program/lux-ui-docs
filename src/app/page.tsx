import Link from 'next/link';
import { Button, Card, GradientText, Badge, Avatar, AvatarGroup } from 'lux-ui';

const categories = [
  { icon: '⌨️', name: 'Inputs', count: 8, desc: 'Button, TextField, Select, Slider, Rating…' },
  { icon: '🔤', name: 'Data Display', count: 5, desc: 'Typography, Avatar, Badge, Chip, Table' },
  { icon: '🔔', name: 'Feedback', count: 5, desc: 'Alert, Toast, Dialog, Progress, Skeleton' },
  { icon: '🎨', name: 'Surfaces', count: 3, desc: 'Card (glass, neon, aurora), Accordion, AppBar' },
  { icon: '🧭', name: 'Navigation', count: 5, desc: 'Tabs, Breadcrumbs, Pagination, Menu, Stepper' },
  { icon: '🪟', name: 'Overlay', count: 4, desc: 'Modal, Drawer, Popover, Tooltip' },
  { icon: '📐', name: 'Layout', count: 4, desc: 'Box, Container, Grid, Stack' },
  { icon: '✨', name: 'Lux Exclusive', count: 7, desc: 'GradientText, TiltCard, Typewriter, Counter…' },
  { icon: '📊', name: 'Advanced', count: 11, desc: 'DataGrid, DatePicker, Charts, CodeEditor…' },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-inner">
          <div className="hero-badge">✦ Phase 1 + 2 · 73 components</div>
          <h1>
            React components with<br />
            <span className="hero-gradient-word">visual personality</span>
          </h1>
          <p>
            lux-ui gives you typed, production-ready React components with the visual magic of luxcss baked in — glass surfaces, gradient text, magnetic buttons, and motion, out of the box.
          </p>
          <div className="hero-actions">
            <Link href="/docs/installation" className="btn-primary">
              Get Started →
            </Link>
            <Link href="/components/button" className="btn-secondary">
              Browse Components
            </Link>
          </div>
        </div>
      </section>

      <div className="page-content">
        <div className="stat-row">
          <div className="stat-item">
            <div className="stat-num">73</div>
            <div className="stat-label">components</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">100</div>
            <div className="stat-label">named exports</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">9</div>
            <div className="stat-label">categories</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">0</div>
            <div className="stat-label">TS errors</div>
          </div>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>
          Live, not screenshots
        </h2>
        <p style={{ color: 'var(--fg-2)', fontSize: '0.9rem', marginBottom: '1.75rem' }}>
          Every example renders the real lux-ui component — interactive and accurate.
        </p>

        <Card variant="glass" radius="xl" style={{ maxWidth: 400, padding: '1.5rem', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
            <AvatarGroup max={3}>
              <Avatar initials="AB" status="online" />
              <Avatar initials="CD" />
              <Avatar initials="EF" />
            </AvatarGroup>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Team Dashboard</div>
              <GradientText gradient="electric" style={{ fontSize: '0.75rem' }}>3 members online</GradientText>
            </div>
            <Badge tone="success" style={{ marginLeft: 'auto', fontSize: '0.7rem' }}>Live</Badge>
          </div>
          <Button tone="primary" radius="full" fullWidth ripple>
            Open Dashboard →
          </Button>
        </Card>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>
          Browse by category
        </h2>
        <p style={{ color: 'var(--fg-2)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          60 components across 8 categories — fully typed, all production-ready.
        </p>

        <div className="cat-grid">
          {categories.map(cat => (
            <div key={cat.name} className="cat-card">
              <div className="cat-card-icon">{cat.icon}</div>
              <div className="cat-card-name">{cat.name}</div>
              <div className="cat-card-count">{cat.count} components</div>
              <div className="cat-card-desc">{cat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
