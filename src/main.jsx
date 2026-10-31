import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  Box,
  ChartNoAxesCombined,
  ChevronDown,
  CircleDollarSign,
  Grid2X2,
  LayoutGrid,
  MoreHorizontal,
  Package,
  PieChart,
  Plus,
  Route,
  Search,
  Truck,
  UserRound,
  UsersRound,
} from 'lucide-react'
import './styles.css'
import './polish.css'
import DesignGuide from './DesignGuide.jsx'
import DriverApp from './DriverApp.jsx'

const metrics = [
  { label: 'Total shipments', value: '84,456', change: '+10,508', tone: 'positive', icon: Truck, iconTone: 'sun' },
  { label: 'Total orders', value: '10,105', change: '-4,708', tone: 'negative', icon: Package, iconTone: 'coral' },
  { label: 'Revenue', value: '$59,865', change: '+2,985', tone: 'positive', icon: CircleDollarSign, iconTone: 'violet' },
  { label: 'Delivered', value: '40,423', change: '-16,708', tone: 'negative', icon: Box, iconTone: 'mint' },
]

function MetricCard({ label, value, change, tone, icon: Icon, iconTone }) {
  return (
    <article className="metric-card">
      <div className="metric-card__top">
        <div><p className="metric-label">{label} <span className="info-dot">i</span></p><strong>{value}</strong></div>
        <span className={`metric-icon metric-icon--${iconTone}`}><Icon size={20} strokeWidth={2.4} /></span>
      </div>
      <p className="metric-change"><b className={`change-pill change-pill--${tone}`}>{tone === 'positive' ? '+' : '-'}{tone === 'positive' ? '1.3%' : '2.1%'} <span>{tone === 'positive' ? '↗' : '↘'}</span></b> <span>{change} vs last month</span></p>
    </article>
  )
}

function TrendChart() {
  return (
    <div className="chart-wrap" aria-label="Shipment rate trend from January to June">
      <div className="chart-y"><span>1.0%</span><span>0.8%</span><span>0.4%</span></div>
      <svg className="chart" viewBox="0 0 520 190" role="img">
        <defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#b0ef64" stopOpacity=".5" /><stop offset="100%" stopColor="#b0ef64" stopOpacity="0" /></linearGradient></defs>
        <path d="M30 70 C90 82 112 60 165 77 S235 38 285 55 S350 43 400 49 S455 18 500 27 L500 144 C448 123 406 142 355 125 S290 143 238 123 S176 150 122 130 S74 126 30 110Z" fill="url(#area)" />
        <path d="M30 70 C90 82 112 60 165 77 S235 38 285 55 S350 43 400 49 S455 18 500 27" fill="none" stroke="#9be452" strokeWidth="4" strokeLinecap="round" />
        <path d="M30 110 C74 126 78 111 122 130 S180 110 238 123 S290 143 355 125 S406 142 455 120 S480 106 500 96" fill="none" stroke="#9be452" strokeWidth="4" strokeLinecap="round" />
        <line x1="285" x2="285" y1="49" y2="138" stroke="#277e3a" strokeWidth="2" />
        <circle cx="285" cy="85" r="16" fill="#277e3a" /><text x="285" y="90" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">34%</text>
        <circle cx="285" cy="55" r="5" fill="#277e3a" stroke="white" strokeWidth="2" />
      </svg>
      <div className="chart-x"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span></div>
    </div>
  )
}

function Dashboard({ compact = false }) {
  return (
    <div className={`app-shell ${compact ? 'app-shell--compact' : ''}`}>
      <header className="app-header">
        <button className="brand-mark" aria-label="Open navigation"><Grid2X2 size={22} /></button>
        <div className="search-pill"><Search size={17} /><span>Search</span></div>
        <button className="header-icon" aria-label="Notifications"><Bell size={19} /></button>
        <button className="avatar" aria-label="Profile">D</button>
      </header>
      <main className="dashboard">
        <div className="dashboard-title"><div><p className="eyebrow">OVERVIEW</p><h2>Dashboard</h2></div><button className="button button--primary"><Plus size={18} /> Add new shipment</button></div>
        <div className="metrics-grid">{metrics.map((metric) => <MetricCard key={metric.label} {...metric} />)}</div>
        <section className="analytics-card">
          <div className="analytics-head"><div><p className="eyebrow">PERFORMANCE</p><h3>Shipment analytics</h3></div><div className="analytics-actions"><button className="filter-button">Monthly</button><button className="filter-button">Orders <ChevronDown size={15} /></button><button className="icon-button"><MoreHorizontal size={18} /></button></div></div>
          <div className="analytics-stats"><span>Rate <b>0.78%</b> <em className="positive"><ArrowUpRight size={14} /> 16%</em></span><span>Delivery <b>4,652</b> <em className="negative"><ArrowDownRight size={14} /> 0.6%</em></span></div>
          <TrendChart />
        </section>
      </main>
      <nav className="bottom-nav" aria-label="Primary navigation"><a className="active" href="#dashboard"><LayoutGrid size={18} /><span>Dashboard</span></a><a href="#shipments"><Truck size={18} /><span>Shipments</span></a><a href="#routes"><Route size={18} /><span>Routes</span></a><a href="#team"><UsersRound size={18} /><span>Team</span></a><a href="#reports"><PieChart size={18} /><span>Reports</span></a></nav>
    </div>
  )
}

function App() {
  return (
    <div className="design-system-page">
      <header className="page-header"><div><p className="eyebrow">VIOLET BRIDGE / DESIGN SYSTEM SAMPLE</p><h1>Operational clarity, with a little lift.</h1><p className="page-lede">A polished React/Vite reference built around deep forest surfaces, electric lime accents, generous cards, and Lucide icons.</p></div><div className="token-note"><span className="token-dot token-dot--lime" /><span className="token-dot token-dot--forest" /><span className="token-dot token-dot--cream" /><small>Tokens in use</small></div></header>
      <DesignGuide />
      <section className="reference-section"><div className="section-intro"><p className="eyebrow">RESPONSIVE REFERENCE</p><h2>Same system, two comfortable canvases</h2><p>iPhone keeps the dashboard focused. Tablet opens the layout into a roomy operational workspace.</p></div><div className="device-stage"><div className="device device--phone"><p className="device-label">IPHONE 16</p><Dashboard compact /></div><div className="device device--tablet"><p className="device-label">IPAD AIR</p><Dashboard /></div></div></section>
      <section className="reference-section reference-section--tokens"><div className="section-intro"><p className="eyebrow">VISUAL TOKENS</p><h2>Reference palette and icon language</h2></div><div className="token-grid"><div className="token-card"><span className="swatch swatch--lime" /><div><b>Signal lime</b><small>#B0EF64 · primary accent</small></div></div><div className="token-card"><span className="swatch swatch--forest" /><div><b>Deep forest</b><small>#0B3D20 · anchor surface</small></div></div><div className="token-card"><span className="swatch swatch--cream" /><div><b>Warm cream</b><small>#F3F5E8 · canvas surface</small></div></div><div className="token-card token-card--type"><UserRound size={21} /><div><b>Lucide / 2px</b><small>Rounded, familiar, functional</small></div></div></div></section>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode>{window.location.pathname === '/design-system' ? <App /> : <DriverApp />}</React.StrictMode>)
