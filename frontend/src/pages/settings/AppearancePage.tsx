import React from 'react';
import { Check, Laptop, Moon, Sun, type LucideIcon } from 'lucide-react';
import { useTheme, type ThemePreference } from '../../context/ThemeContext';

export default function AppearancePage() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const options: {
    id: ThemePreference;
    title: string;
    description: string;
    icon: LucideIcon;
    badge?: string;
  }[] = [
    {
      id: 'light',
      title: 'Light (Notion / kanna.sh)',
      description: 'Clean warm paper canvas, crisp charcoal typography, and delicate borders. Recommended for clarity.',
      icon: Sun,
      badge: 'Default',
    },
    {
      id: 'dark',
      title: 'Dark (Midnight Slate)',
      description: 'Deep navy and slate tone with gentle contrast for late hours and low-light environments.',
      icon: Moon,
    },
    {
      id: 'system',
      title: 'System default',
      description: 'Automatically adjust the interface according to your operating system preferences.',
      icon: Laptop,
    },
  ];

  return (
    <div className="page-grid">
      <section className="page-hero">
        <div>
          <p className="eyebrow">Settings</p>
          <h1 className="page-title">Appearance</h1>
          <p className="section-copy">
            Customise the visual interface to match your preferred working environment and lighting.
          </p>
        </div>
      </section>

      <section className="section-card">
        <header className="section-card__header">
          <div>
            <h2 className="section-card__title">Interface theme</h2>
            <p className="section-card__copy">
              Choose between light, dark, or automatic system sync.
            </p>
          </div>
          <span className="badge badge--neutral">
            Currently active: {resolvedTheme === 'light' ? 'Light mode' : 'Dark mode'}
          </span>
        </header>

        <div className="theme-options-grid">
          {options.map((opt) => {
            const isSelected = theme === opt.id;
            const Icon = opt.icon;
            return (
              <button
                key={opt.id}
                type="button"
                className={`theme-option-card ${isSelected ? 'theme-option-card--active' : ''}`}
                onClick={() => setTheme(opt.id)}
                aria-pressed={isSelected}
              >
                <div className="theme-option-card__header">
                  <span className="theme-option-card__icon" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <div className="theme-option-card__titles">
                    <div className="theme-option-card__name">
                      {opt.title}
                      {opt.badge && <span className="theme-option-card__badge">{opt.badge}</span>}
                    </div>
                  </div>
                  {isSelected && (
                    <span className="theme-option-card__check" aria-hidden="true">
                      <Check size={16} />
                    </span>
                  )}
                </div>
                <p className="theme-option-card__description">{opt.description}</p>
              </button>
            );
          })}
        </div>
      </section>

      <section className="section-card">
        <header className="section-card__header">
          <div>
            <h2 className="section-card__title">Theme Preview</h2>
            <p className="section-card__copy">
              Live components rendered with your current theme tokens.
            </p>
          </div>
        </header>

        <div className="theme-preview-box">
          <div className="theme-preview-row">
            <div>
              <p className="eyebrow">Invoice INV-2026-0042</p>
              <h3 style={{ margin: '4px 0 8px', fontSize: '1.25rem', fontWeight: 600 }}>Acme Corp Supplies</h3>
              <p className="section-copy" style={{ margin: 0 }}>GSTIN: 27AABCU9603R1ZM · Mumbai, Maharashtra</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span className="badge badge--success">Paid in full</span>
              <p style={{ margin: '8px 0 0', fontSize: '1.4rem', fontWeight: 700 }}>₹1,45,200</p>
            </div>
          </div>

          <div className="theme-preview-row" style={{ marginTop: '16px', gap: '8px', flexWrap: 'wrap' }}>
            <span className="badge badge--neutral">Draft</span>
            <span className="badge badge--info">Sent</span>
            <span className="badge badge--warning">Due Soon</span>
            <span className="badge badge--danger">Overdue</span>
            <span className="badge badge--success">Settled</span>
          </div>

          <div className="theme-preview-row" style={{ marginTop: '20px', gap: '12px', alignItems: 'center' }}>
            <button type="button" className="button button--primary">Primary Action</button>
            <button type="button" className="button button--secondary">Secondary</button>
            <button type="button" className="button button--ghost">Ghost</button>
            <button type="button" className="button button--danger">Danger</button>
          </div>
        </div>
      </section>
    </div>
  );
}
