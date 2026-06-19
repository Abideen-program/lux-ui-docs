'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const nav = [
  {
    group: 'Get Started',
    items: [
      { label: 'Introduction', href: '/' },
      { label: 'Installation', href: '/docs/installation' },
    ],
  },
  {
    group: 'Inputs',
    items: [
      { label: 'Button', href: '/components/button' },
      { label: 'IconButton', href: '/components/icon-button' },
      { label: 'TextField', href: '/components/text-field' },
      { label: 'Select', href: '/components/select' },
      { label: 'Checkbox', href: '/components/checkbox' },
      { label: 'Switch', href: '/components/switch' },
      { label: 'Slider', href: '/components/slider' },
      { label: 'Rating', href: '/components/rating' },
    ],
  },
  {
    group: 'Data Display',
    items: [
      { label: 'Typography', href: '/components/typography' },
      { label: 'Avatar', href: '/components/avatar' },
      { label: 'Badge', href: '/components/badge' },
      { label: 'Chip', href: '/components/chip' },
      { label: 'Table', href: '/components/table' },
    ],
  },
  {
    group: 'Feedback',
    items: [
      { label: 'Alert', href: '/components/alert' },
      { label: 'Toast', href: '/components/toast' },
      { label: 'Dialog', href: '/components/dialog' },
      { label: 'Progress', href: '/components/progress' },
      { label: 'Skeleton', href: '/components/skeleton' },
    ],
  },
  {
    group: 'Surfaces',
    items: [
      { label: 'Card', href: '/components/card' },
      { label: 'Accordion', href: '/components/accordion' },
      { label: 'AppBar', href: '/components/app-bar' },
    ],
  },
  {
    group: 'Navigation',
    items: [
      { label: 'Tabs', href: '/components/tabs' },
      { label: 'Breadcrumbs', href: '/components/breadcrumbs' },
      { label: 'Pagination', href: '/components/pagination' },
      { label: 'Menu', href: '/components/menu' },
      { label: 'Stepper', href: '/components/stepper' },
    ],
  },
  {
    group: 'Overlay',
    items: [
      { label: 'Modal', href: '/components/modal' },
      { label: 'Drawer', href: '/components/drawer' },
      { label: 'Popover', href: '/components/popover' },
      { label: 'Tooltip', href: '/components/tooltip' },
    ],
  },
  {
    group: 'Lux Exclusive',
    items: [
      { label: 'GradientText', href: '/components/gradient-text' },
      { label: 'MagneticButton', href: '/components/magnetic-button' },
      { label: 'ConfettiButton', href: '/components/confetti-button' },
      { label: 'TiltCard', href: '/components/tilt-card' },
      { label: 'Typewriter', href: '/components/typewriter' },
      { label: 'Counter', href: '/components/counter' },
      { label: 'Timeline', href: '/components/timeline' },
    ],
  },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();

  useEffect(() => { onClose(); }, [pathname]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <>
      <div className={`sidebar-overlay ${open ? 'open' : ''}`} onClick={onClose} />
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1 }}>
            <div className="sidebar-logo-mark">✦</div>
            <span className="sidebar-logo-name">lux-ui</span>
          </Link>
          <span className="sidebar-logo-version">v0.1</span>
        </div>
        <nav className="sidebar-nav">
          {nav.map(section => (
            <div key={section.group} className="nav-group">
              <span className="nav-group-label">{section.group}</span>
              {section.items.map(item => (
                <Link key={item.href} href={item.href} className={`nav-link ${pathname === item.href ? 'active' : ''}`}>
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
