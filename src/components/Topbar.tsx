'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface TopbarProps {
  onMenuOpen: () => void;
}

function getBreadcrumb(pathname: string) {
  if (pathname === '/') return [{ label: 'Introduction' }];
  if (pathname.startsWith('/docs/')) return [{ label: 'Docs' }, { label: pathname.split('/docs/')[1].replace(/-/g, ' ') }];
  if (pathname.startsWith('/components/')) return [{ label: 'Components' }, { label: pathname.split('/components/')[1].replace(/-/g, ' ') }];
  return [];
}

export default function Topbar({ onMenuOpen }: TopbarProps) {
  const pathname = usePathname();
  const crumbs = getBreadcrumb(pathname);

  return (
    <header className="topbar">
      <button className="topbar-hamburger" onClick={onMenuOpen} aria-label="Open menu">
        ☰
      </button>

      <nav className="topbar-breadcrumb">
        <Link href="/" style={{ color: 'var(--fg-3)', transition: 'color 0.12s' }}>
          lux-ui
        </Link>
        {crumbs.map((crumb, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="sep">/</span>
            <span style={{ textTransform: 'capitalize' }}>{crumb.label}</span>
          </span>
        ))}
      </nav>

      <div className="topbar-right">
        <a
          href="https://github.com/Abideen-program/lux-ui"
          target="_blank"
          rel="noopener noreferrer"
          className="topbar-github"
        >
          ★ GitHub
        </a>
      </div>
    </header>
  );
}
