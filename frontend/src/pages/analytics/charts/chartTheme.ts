import type { CSSProperties } from 'react';

/**
 * Chart palette.
 *
 * Dynamically binds to the active theme via CSS custom properties with
 * fallbacks for light and dark environments.
 */
export const chartColors = {
  sales: 'var(--chart-sales, #2383e2)',
  secondary: 'var(--chart-secondary, #d97706)',
  revenue: 'var(--chart-revenue, #0f8a5f)',
  profit: 'var(--chart-profit, #0f8a5f)',
  loss: 'var(--chart-loss, #e03e3e)',
  grid: 'var(--chart-grid, #ebebea)',
  axis: 'var(--chart-axis, #9b9a97)',
};

export const tooltipStyle: CSSProperties = {
  background: 'var(--tooltip-bg, #ffffff)',
  border: '1px solid var(--line, #e9e9e7)',
  borderRadius: '8px',
  color: 'var(--text, #37352f)',
  fontSize: '0.8rem',
  boxShadow: 'var(--shadow, 0 4px 14px rgba(15, 15, 15, 0.08))',
};
