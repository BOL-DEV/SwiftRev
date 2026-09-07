import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Building2,
  FileBarChart2,
  ShieldAlert,
  Settings as SettingsIcon,
  CreditCard,
  Receipt,
  Activity,
  Users,
  ChevronRight,
  ChevronDown,
  ArrowLeft,
  Sun,
  Moon,
  AlertCircle,
  Clock,
  HelpCircle,
  ExternalLink,
  Search,
  Filter,
  Download,
  CheckCircle2,
  XCircle,
  ArrowUpRight,
  Sparkles,
  Smartphone,
  Server
} from 'lucide-react';
import SwiftRevLogo from '../components/shared/SwiftRevLogo';
import { useTheme } from '../context/ThemeContext';

export default function HRMSDashboardPage() {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [reportsOpen, setReportsOpen] = useState(true);
  const [hoveredMonth, setHoveredMonth] = useState(null);
  const [activeHospitalFilter, setActiveHospitalFilter] = useState('all');

  // Chart data from screenshot
  const trendData = [
    { month: 'Apr 2026', revenue: '₦0.00', num: 0, heightPercent: 2 },
    { month: 'May 2026', revenue: '₦120,000.00', num: 120000, heightPercent: 3 },
    { month: 'Jun 2026', revenue: '₦350,000.00', num: 350000, heightPercent: 5 },
    { month: 'Jul 2026', revenue: '₦8,950,000.00', num: 8950000, heightPercent: 88 },
    { month: 'Aug 2026', revenue: '₦8,920,000.00', num: 8920000, heightPercent: 88 },
    { month: 'Sep 2026', revenue: '₦92,400.00', num: 92400, heightPercent: 3, current: true },
  ];

  return (
    <div className="min-h-screen bg-[#F4F8F6] dark:bg-[#0A1312] text-slate-900 dark:text-slate-100 flex flex-col font-body transition-colors duration-200">
      {/* Top Banner connecting back to corporate portal */}
      <div className="bg-pine text-white px-4 py-2 text-xs flex items-center justify-between border-b border-white/10 shrink-0">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 bg-white/20 text-white font-semibold px-2 py-0.5 rounded-full text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            LIVE OPERATIONAL SYSTEM
          </span>
          <span className="hidden sm:inline text-white/80">
            Interactive HRMS Admin Dashboard Simulation — Hospital Revenue Operations
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/hospital-onboarding"
            className="text-white hover:text-teal-200 underline font-medium text-xs flex items-center gap-1"
          >
            Onboard Your Facility &rarr;
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 rounded text-xs transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to SwiftRev Website
          </Link>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* ===================== SIDEBAR ===================== */}
        <aside className="w-64 bg-white dark:bg-[#0F1E1B] border-r border-[#E5EFEA] dark:border-[#1A332E] flex flex-col justify-between shrink-0 transition-colors">
          <div>
            {/* Logo header */}
            <div className="h-20 px-6 flex items-center justify-between border-b border-[#E5EFEA] dark:border-[#1A332E]">
              <Link to="/">
                <SwiftRevLogo />
              </Link>
              <button
                type="button"
                className="w-7 h-7 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs"
                title="Collapse sidebar"
              >
                &laquo;
              </button>
            </div>

            {/* Nav Menu */}
            <nav className="p-4 space-y-1.5 text-sm font-medium">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-full text-left transition-all ${
                  activeTab === 'dashboard'
                    ? 'bg-pine text-white shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard</span>
              </button>

              <button
                onClick={() => setActiveTab('hospitals')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-full text-left transition-all ${
                  activeTab === 'hospitals'
                    ? 'bg-pine text-white shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Hospitals</span>
                <span className="ml-auto text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-full font-bold">1</span>
              </button>

              <div>
                <button
                  onClick={() => {
                    setActiveTab('reports');
                    setReportsOpen(!reportsOpen);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-full text-left transition-all ${
                    activeTab === 'reports'
                      ? 'bg-pine text-white shadow-sm font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <FileBarChart2 className="w-4 h-4" />
                    <span>Reports</span>
                  </div>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${reportsOpen ? 'rotate-180' : ''}`} />
                </button>

                {reportsOpen && (
                  <div className="pl-11 pr-2 py-1.5 space-y-1 text-xs">
                    <button
                      onClick={() => setActiveTab('reports-daily')}
                      className="block w-full text-left py-1.5 text-slate-500 dark:text-slate-400 hover:text-pine dark:hover:text-teal-300"
                    >
                      Daily Cash Summaries
                    </button>
                    <button
                      onClick={() => setActiveTab('reports-leakage')}
                      className="block w-full text-left py-1.5 text-slate-500 dark:text-slate-400 hover:text-pine dark:hover:text-teal-300"
                    >
                      Leakage Detection
                    </button>
                    <button
                      onClick={() => setActiveTab('reports-settlement')}
                      className="block w-full text-left py-1.5 text-slate-500 dark:text-slate-400 hover:text-pine dark:hover:text-teal-300"
                    >
                      Bank Settlements
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => setActiveTab('logs')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-full text-left transition-all ${
                  activeTab === 'logs'
                    ? 'bg-pine text-white shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <ShieldAlert className="w-4 h-4" />
                <span>System Logs</span>
                <span className="ml-auto text-[11px] bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded-full font-bold">19</span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-full text-left transition-all ${
                  activeTab === 'settings'
                    ? 'bg-pine text-white shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <SettingsIcon className="w-4 h-4" />
                <span>Settings</span>
              </button>
            </nav>
          </div>

          {/* Bottom Sidebar: Theme & Status */}
          <div className="p-4 border-t border-[#E5EFEA] dark:border-[#1A332E] space-y-3">
            <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Theme</span>
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-lg bg-white dark:bg-slate-700 shadow-xs text-slate-700 dark:text-slate-200 hover:text-pine transition-all flex items-center gap-1 text-xs"
              >
                {theme === 'dark' ? (
                  <>
                    <Moon className="w-3.5 h-3.5 text-teal-400" />
                    <span>Dark</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-500" />
                    <span>Light</span>
                  </>
                )}
              </button>
            </div>

            <div className="px-3 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[11px] font-semibold text-emerald-800 dark:text-emerald-300">
                Core Engine 2.4 Active
              </span>
            </div>
          </div>
        </aside>

        {/* ===================== MAIN CONTENT ===================== */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          {/* Top Bar matching screenshot */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                Admin Dashboard
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Compact global snapshot across all hospitals
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Platform Info Pill */}
              <div className="flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-white dark:bg-[#0F1E1B] border border-[#E5EFEA] dark:border-[#1A332E] shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">PLATFORM</p>
                  <p className="text-xs font-heading font-bold text-slate-900 dark:text-slate-100">SwiftRev HQ</p>
                  <p className="text-[10px] text-slate-500">Central operations dashboard</p>
                </div>
              </div>

              {/* Admin Avatar Pill */}
              <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white dark:bg-[#0F1E1B] border border-[#E5EFEA] dark:border-[#1A332E] shadow-xs">
                <span className="text-xs font-heading font-semibold text-slate-800 dark:text-slate-200">Admin</span>
                <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-pine dark:text-teal-400 font-bold text-xs">
                  <Users className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* TAB 1: MAIN DASHBOARD VIEW (From Screenshot) */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Top 4 Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {/* Stat 1 */}
                <div className="bg-white dark:bg-[#0F1E1B] rounded-2xl p-5 border border-[#E5EFEA] dark:border-[#1A332E] shadow-xs flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Monthly Revenue</span>
                    <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-pine dark:text-teal-300 flex items-center justify-center">
                      <CreditCard className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-2xl font-heading font-extrabold text-slate-900 dark:text-slate-100">
                      ₦92,400.00
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">Current-month total revenue</p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="bg-white dark:bg-[#0F1E1B] rounded-2xl p-5 border border-[#E5EFEA] dark:border-[#1A332E] shadow-xs flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Monthly Transactions</span>
                    <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-pine dark:text-teal-300 flex items-center justify-center">
                      <Receipt className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-2xl font-heading font-extrabold text-slate-900 dark:text-slate-100">
                      45
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">Current-month completed transactions</p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="bg-white dark:bg-[#0F1E1B] rounded-2xl p-5 border border-[#E5EFEA] dark:border-[#1A332E] shadow-xs flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Hospitals</span>
                    <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-pine dark:text-teal-300 flex items-center justify-center">
                      <Activity className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-2xl font-heading font-extrabold text-slate-900 dark:text-slate-100">
                      1
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">1 active, 0 suspended</p>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="bg-white dark:bg-[#0F1E1B] rounded-2xl p-5 border border-[#E5EFEA] dark:border-[#1A332E] shadow-xs flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Workforce</span>
                    <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-2xl font-heading font-extrabold text-slate-900 dark:text-slate-100">
                      4 agents
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">5 total agents, 2/2 active FOs</p>
                  </div>
                </div>
              </div>

              {/* Middle Section: Chart + Attention Box */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left 7 cols: Monthly Revenue Trend */}
                <div className="lg:col-span-7 bg-white dark:bg-[#0F1E1B] rounded-2xl p-6 border border-[#E5EFEA] dark:border-[#1A332E] shadow-xs flex flex-col">
                  <div>
                    <h3 className="text-base font-heading font-bold text-slate-900 dark:text-slate-100">
                      Monthly Revenue Trend
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      last 6 months • 1 Apr 2026 to 30 Sept 2026
                    </p>
                  </div>

                  {/* SVG Chart mirroring screenshot */}
                  <div className="relative mt-8 flex-1 min-h-[280px] flex flex-col justify-between">
                    {/* Background Watermark */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 dark:opacity-10">
                      <span className="text-5xl md:text-6xl font-black tracking-widest text-slate-900 dark:text-white select-none">
                        SWIFTREV
                      </span>
                    </div>

                    {/* Y-Axis guide lines */}
                    <div className="w-full h-full flex flex-col justify-between text-[11px] text-slate-400 pb-8">
                      {['10M', '7.5M', '5M', '2.5M', '0'].map((val) => (
                        <div key={val} className="flex items-center gap-3 w-full">
                          <span className="w-8 text-right shrink-0">{val}</span>
                          <div className="w-full h-px border-b border-dashed border-slate-200 dark:border-slate-800"></div>
                        </div>
                      ))}
                    </div>

                    {/* Simulated Authentic SVG Curve */}
                    <div className="absolute inset-x-12 inset-y-2 bottom-8">
                      <svg viewBox="0 0 500 200" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                        <defs>
                          <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#0D5C52" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#0D5C52" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>

                        {/* Fill area */}
                        <path
                          d="M 10 195 L 90 195 L 170 192 L 250 25 L 330 25 L 410 195 L 490 195 L 490 200 L 10 200 Z"
                          fill="url(#curveGradient)"
                        />

                        {/* Main line */}
                        <path
                          d="M 10 195 C 50 195, 120 195, 170 192 C 210 188, 230 25, 260 25 L 340 25 C 370 25, 390 190, 420 195 L 490 195"
                          fill="none"
                          stroke="#0D5C52"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          className="dark:stroke-teal-400"
                        />

                        {/* Anchor points */}
                        <circle cx="10" cy="195" r="4.5" className="fill-[#0D5C52] dark:fill-teal-300 stroke-white stroke-2" />
                        <circle cx="90" cy="195" r="4.5" className="fill-[#0D5C52] dark:fill-teal-300 stroke-white stroke-2" />
                        <circle cx="170" cy="192" r="4.5" className="fill-[#0D5C52] dark:fill-teal-300 stroke-white stroke-2" />
                        <circle cx="260" cy="25" r="5" className="fill-[#0D5C52] dark:fill-teal-300 stroke-white stroke-2" />
                        <circle cx="340" cy="25" r="5" className="fill-[#0D5C52] dark:fill-teal-300 stroke-white stroke-2" />
                        <circle cx="420" cy="195" r="5" className="fill-[#0D5C52] dark:fill-teal-300 stroke-white stroke-2" />
                      </svg>
                    </div>

                    {/* X-axis labels */}
                    <div className="flex justify-between pl-12 pr-4 text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800">
                      {trendData.map((d) => (
                        <div
                          key={d.month}
                          onMouseEnter={() => setHoveredMonth(d)}
                          onMouseLeave={() => setHoveredMonth(null)}
                          className="cursor-pointer text-center group"
                        >
                          <span className={`block font-medium ${d.current ? 'text-pine dark:text-teal-400 font-bold' : ''}`}>
                            {d.month}
                          </span>
                          {hoveredMonth?.month === d.month && (
                            <div className="absolute bottom-12 bg-slate-900 text-white text-[11px] px-2 py-1 rounded shadow-lg">
                              {d.revenue}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right 5 cols: Attention Panel */}
                <div className="lg:col-span-5 bg-white dark:bg-[#0F1E1B] rounded-2xl p-6 border border-[#E5EFEA] dark:border-[#1A332E] shadow-xs flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-heading font-bold text-slate-900 dark:text-slate-100">
                      Attention
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Current-month operational items that need follow-up
                    </p>
                  </div>

                  {/* Operational Follow-up List exactly from screenshot */}
                  <div className="mt-5 space-y-3">
                    {/* Item 1: Pending receipt reprints */}
                    <div className="pill-warning p-3 rounded-xl flex items-center justify-between transition-transform hover:scale-[1.01]">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full border border-amber-400/60 flex items-center justify-center text-amber-600 dark:text-amber-300">
                          <Clock className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-semibold">Pending receipt reprints</span>
                      </div>
                      <span className="text-sm font-heading font-bold">1</span>
                    </div>

                    {/* Item 2: Suspended hospitals */}
                    <div className="pill-neutral p-3 rounded-xl flex items-center justify-between transition-transform hover:scale-[1.01]">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-slate-500">
                          <Building2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-semibold">Suspended hospitals</span>
                      </div>
                      <span className="text-sm font-heading font-bold">0</span>
                    </div>

                    {/* Item 3: Suspended agents */}
                    <div className="pill-danger p-3 rounded-xl flex items-center justify-between transition-transform hover:scale-[1.01]">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full border border-rose-300 flex items-center justify-center text-rose-600 dark:text-rose-300">
                          <AlertCircle className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-semibold">Suspended agents</span>
                      </div>
                      <span className="text-sm font-heading font-bold">1</span>
                    </div>

                    {/* Item 4: Suspended FOs */}
                    <div className="pill-neutral p-3 rounded-xl flex items-center justify-between transition-transform hover:scale-[1.01]">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-slate-500">
                          <Users className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-semibold">Suspended FOs</span>
                      </div>
                      <span className="text-sm font-heading font-bold">0</span>
                    </div>

                    {/* Item 5: Failed system events (7 days) */}
                    <div className="pill-warning p-3 rounded-xl flex items-center justify-between transition-transform hover:scale-[1.01]">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full border border-amber-400/60 flex items-center justify-center text-amber-600 dark:text-amber-300">
                          <ShieldAlert className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-semibold">Failed system events (7 days)</span>
                      </div>
                      <span className="text-sm font-heading font-bold">19</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span>Audit engine automated scan</span>
                    <span className="text-pine dark:text-teal-400 font-semibold cursor-pointer hover:underline">
                      Run Immediate Sweep &rarr;
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Payment Method Breakdown & Hospital Mix */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left 6 cols: Payment Method Breakdown */}
                <div className="lg:col-span-6 bg-white dark:bg-[#0F1E1B] rounded-2xl p-6 border border-[#E5EFEA] dark:border-[#1A332E] shadow-xs">
                  <div>
                    <h3 className="text-base font-heading font-bold text-slate-900 dark:text-slate-100">
                      Payment Method Breakdown
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Current-month revenue and transaction mix
                    </p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {/* Method 1: Cash */}
                    <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-pine dark:text-teal-300 flex items-center justify-center">
                          <Receipt className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">CASH</p>
                          <p className="text-lg font-heading font-extrabold text-slate-900 dark:text-slate-100">
                            ₦61,300.00
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase font-bold text-slate-400">TRANSACTIONS</p>
                        <p className="text-sm font-heading font-bold text-slate-800 dark:text-slate-200">38</p>
                      </div>
                    </div>

                    {/* Method 2: Transfer */}
                    <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-pine dark:text-teal-300 flex items-center justify-center">
                          <Activity className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">BANK TRANSFER</p>
                          <p className="text-lg font-heading font-extrabold text-slate-900 dark:text-slate-100">
                            ₦10,000.00
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase font-bold text-slate-400">TRANSACTIONS</p>
                        <p className="text-sm font-heading font-bold text-slate-800 dark:text-slate-200">3</p>
                      </div>
                    </div>

                    {/* Method 3: POS Terminal */}
                    <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-pine dark:text-teal-300 flex items-center justify-center">
                          <CreditCard className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">POS TERMINAL</p>
                          <p className="text-lg font-heading font-extrabold text-slate-900 dark:text-slate-100">
                            ₦21,100.00
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase font-bold text-slate-400">TRANSACTIONS</p>
                        <p className="text-sm font-heading font-bold text-slate-800 dark:text-slate-200">4</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right 6 cols: Hospital Mix */}
                <div className="lg:col-span-6 bg-white dark:bg-[#0F1E1B] rounded-2xl p-6 border border-[#E5EFEA] dark:border-[#1A332E] shadow-xs flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-heading font-bold text-slate-900 dark:text-slate-100">
                      Hospital Mix
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Revenue processing model across hospitals
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {/* Manual Revenue Card */}
                    <div className="p-5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-800/20">
                      <div className="flex items-center gap-2 text-slate-500 mb-2">
                        <Activity className="w-4 h-4 text-slate-400" />
                        <span className="text-xs font-semibold">Manual Revenue Hospitals</span>
                      </div>
                      <div className="text-3xl font-heading font-black text-pine dark:text-teal-400 mt-3">
                        0
                      </div>
                      <p className="text-[11px] text-slate-400 mt-2">Reconciliation via physical manifests</p>
                    </div>

                    {/* Automatic Revenue Card */}
                    <div className="p-5 rounded-xl border border-teal-100 dark:border-teal-900/40 bg-teal-50/30 dark:bg-teal-950/20">
                      <div className="flex items-center gap-2 text-pine dark:text-teal-300 mb-2">
                        <ArrowUpRight className="w-4 h-4" />
                        <span className="text-xs font-semibold">Automatic Revenue Hospitals</span>
                      </div>
                      <div className="text-3xl font-heading font-black text-pine dark:text-teal-400 mt-3">
                        1
                      </div>
                      <p className="text-[11px] text-slate-400 mt-2">Direct POS &amp; Core Ledger API linked</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                        Onboarded: Sacred Heart General Hospital (Tier 1 Pro)
                      </span>
                    </div>
                    <button
                      onClick={() => setActiveTab('hospitals')}
                      className="text-xs font-semibold text-pine dark:text-teal-300 hover:underline"
                    >
                      View Details &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: HOSPITALS LIST */}
          {activeTab === 'hospitals' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-[#0F1E1B] p-5 rounded-2xl border border-[#E5EFEA] dark:border-[#1A332E]">
                <div>
                  <h2 className="text-lg font-heading font-bold text-slate-900 dark:text-slate-100">Hospital Facilities</h2>
                  <p className="text-xs text-slate-400">All registered and operational healthcare institutions under SwiftRev HRMS.</p>
                </div>
                <Link
                  to="/hospital-onboarding"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-pine text-white text-xs font-heading font-semibold rounded-xl hover:bg-pine-hover transition"
                >
                  + Onboard New Hospital
                </Link>
              </div>

              <div className="bg-white dark:bg-[#0F1E1B] rounded-2xl border border-[#E5EFEA] dark:border-[#1A332E] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 dark:bg-slate-800/60 border-b border-[#E5EFEA] dark:border-[#1A332E] text-slate-500 uppercase tracking-wider font-semibold">
                      <tr>
                        <th className="p-4">Facility Name</th>
                        <th className="p-4">Location</th>
                        <th className="p-4">Tier &amp; Model</th>
                        <th className="p-4">Current Month Rev</th>
                        <th className="p-4">Active Terminals</th>
                        <th className="p-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5EFEA] dark:divide-[#1A332E]">
                      <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition">
                        <td className="p-4 font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-pine" />
                          Sacred Heart Specialist Hospital
                        </td>
                        <td className="p-4 text-slate-600 dark:text-slate-300">Abeokuta, Ogun State</td>
                        <td className="p-4">
                          <span className="px-2 py-0.5 rounded bg-teal-50 text-pine dark:bg-teal-950 dark:text-teal-300 font-medium">
                            Tier 1 (Automatic)
                          </span>
                        </td>
                        <td className="p-4 font-bold text-slate-900 dark:text-slate-100">₦92,400.00</td>
                        <td className="p-4">4 POS Terminals</td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            Active &amp; Collecting
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: REPORTS & AUDIT */}
          {activeTab.startsWith('reports') && (
            <div className="space-y-6">
              <div className="bg-white dark:bg-[#0F1E1B] p-6 rounded-2xl border border-[#E5EFEA] dark:border-[#1A332E]">
                <h2 className="text-lg font-heading font-bold text-slate-900 dark:text-slate-100">Financial Reports &amp; Leakage Audit</h2>
                <p className="text-xs text-slate-400 mt-1">Exportable audit manifests and cashier shift summaries.</p>

                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
                    <p className="text-xs font-semibold text-slate-500">Cashier Reconciliation</p>
                    <p className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-2">100% Balanced</p>
                    <p className="text-[11px] text-emerald-600 mt-1">Zero unaccounted cash variance</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
                    <p className="text-xs font-semibold text-slate-500">Bank Settlement Cycle</p>
                    <p className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-2">T+0 Same Day</p>
                    <p className="text-[11px] text-slate-400 mt-1">Daily settlement into hospital accounts</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
                    <p className="text-xs font-semibold text-slate-500">Receipt Reprint Flags</p>
                    <p className="text-xl font-bold text-amber-600 mt-2">1 Follow-up</p>
                    <p className="text-[11px] text-slate-400 mt-1">Requires supervisor authorization</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SYSTEM LOGS */}
          {activeTab === 'logs' && (
            <div className="space-y-6">
              <div className="bg-white dark:bg-[#0F1E1B] p-6 rounded-2xl border border-[#E5EFEA] dark:border-[#1A332E]">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-heading font-bold text-slate-900 dark:text-slate-100">Live System Event Stream</h2>
                    <p className="text-xs text-slate-400">Detailed tamper-proof audit trail of payments, reprints, and agent activities.</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">
                    Audit Stream: SECURE
                  </span>
                </div>

                <div className="mt-5 space-y-2">
                  {[
                    { time: '16:42:10', type: 'INFO', msg: 'Cashier Agent #02 completed cash transaction ₦4,500.00 for Pharmacy' },
                    { time: '15:10:04', type: 'WARN', msg: 'Pending receipt reprint request initiated at Ward B reception desk' },
                    { time: '14:22:19', type: 'INFO', msg: 'POS Terminal #SH-04 automated batch settlement confirmed with bank' },
                    { time: '11:05:30', type: 'WARN', msg: 'Agent #05 session suspended due to inactivity on cashier station' },
                  ].map((log, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/80 font-mono text-xs flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-slate-400">{log.time}</span>
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                          log.type === 'WARN' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' : 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300'
                        }`}>
                          {log.type}
                        </span>
                        <span className="text-slate-700 dark:text-slate-300">{log.msg}</span>
                      </div>
                      <span className="text-[10px] text-slate-400">Verified</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: SETTINGS */}
          {activeTab === 'settings' && (
            <div className="bg-white dark:bg-[#0F1E1B] p-6 rounded-2xl border border-[#E5EFEA] dark:border-[#1A332E]">
              <h2 className="text-lg font-heading font-bold text-slate-900 dark:text-slate-100">HRMS Workspace Settings</h2>
              <p className="text-xs text-slate-400 mt-1">Configure revenue parameters, bank settlement webhooks, and agent thresholds.</p>

              <div className="mt-6 space-y-4 max-w-xl text-sm">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">HQ Organization</label>
                  <input
                    type="text"
                    readOnly
                    value="SwiftRev And Technology Limited"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">Operational Environment</label>
                  <input
                    type="text"
                    readOnly
                    value="Production Cluster - Nigeria (Central Operations)"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">Default Settlement Schedule</label>
                  <input
                    type="text"
                    readOnly
                    value="Same Day Daily Sweep (T+0)"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs"
                  />
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
