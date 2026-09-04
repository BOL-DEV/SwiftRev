import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Activity,
  Receipt,
  Pill,
  ShieldCheck,
  BarChart3,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Building2,
  Users,
  CreditCard,
  Layers,
  Clock,
  Warehouse,
  Boxes,
  Lock,
  Workflow
} from 'lucide-react';
import StatusBadge from '../components/shared/StatusBadge';

const modules = [
  {
    num: '01',
    name: 'Cashier & Front Office Agent Desk',
    subtitle: 'Patient Registration, Identity & Multi-Channel Billing',
    icon: Receipt,
    description: 'The front-line administrative and revenue collection engine. Manages patient journeys from entry to verified discharge with complete financial oversight.',
    features: [
      {
        title: 'Patient Identity Management',
        desc: 'Onboards new and returning patients with unique hospital identifiers, demographics, and next-of-kin records.',
      },
      {
        title: 'Service Billing & Invoicing',
        desc: 'Generates detailed bill items for doctor consultations, nursing services, laboratory tests, ward beds, and clinical procedures.',
      },
      {
        title: 'Flexible Multi-Channel Clearance',
        desc: 'Real-time payment settlements via Cash, POS terminals, Bank Transfer, Patient Wallets (with balance top-ups), and HMO/Insurance clearances.',
      },
      {
        title: 'Express & Emergency Encounters',
        desc: 'Facilitates fast-track checkout and immediate care authorization for non-registered or emergency walk-in patients.',
      },
    ],
    screenshotPlaceholder: 'Cashier Terminal & Billing Encounter Screen',
  },
  {
    num: '02',
    name: 'Dual-Tier Pharmacy Ecosystem',
    subtitle: 'Central Store (Warehouse) & Dispensing Pharmacy Points',
    icon: Pill,
    description: 'Enforces strict separation of concerns between central inventory procurement and clinical point-of-care medication dispensing, closing pharmaceutical stock leakages.',
    features: [
      {
        title: 'Central Pharmacy Store (PHARMACY_STORE)',
        desc: 'Maintains master drug catalog, bulk stock receipts from suppliers, batch reserves, purchase costs, and expiration monitoring.',
      },
      {
        title: 'Warehouse Transfer Hub',
        desc: 'Reviews, approves, and dispatches stock restock orders requested by individual outpatient and ward dispensing units.',
      },
      {
        title: 'Dispensing Pharmacy Points (PHARMACY)',
        desc: 'Matches patient invoices to dispense prescribed medications, allowing unit retail pricing and real-time point-of-sale inventory thresholds.',
      },
      {
        title: 'Stock Audit Ledger',
        desc: 'Full chronological ledger tracking every stock shift, dispense event, restock receipt, and batch expiration across all points.',
      },
    ],
    screenshotPlaceholder: 'Dual-Tier Pharmacy Store & Dispensing Point Interface',
  },
  {
    num: '03',
    name: 'Hospital Administration & Governance',
    subtitle: 'Finance Officer (FO), Medical Director (CMD) & RBAC',
    icon: ShieldCheck,
    description: 'Comprehensive administrative oversight governing staff access, department configurations, and facility-wide module controls.',
    features: [
      {
        title: 'Department & Clinic Management',
        desc: 'Configures consultation clinics, specialty departments, outpatient units, hospital wards, and physical bed allocations.',
      },
      {
        title: 'Role-Based Access Control (RBAC)',
        desc: 'Strict staff provisioning across Cashiers, Doctors, Pharmacists, Store Keepers, and Finance Officers/Accountants.',
      },
      {
        title: 'Module Switches & Operational Controls',
        desc: 'Hospital-wide toggles for payment channels, discount thresholds, reprint authorizations, and service tariff pricing.',
      },
    ],
    screenshotPlaceholder: 'Hospital Admin Configuration & Staff Access Console',
  },
  {
    num: '04',
    name: 'Financial Audit & Real-Time Reporting',
    subtitle: 'Closed-Loop Revenue Dashboards & Inventory Valuation',
    icon: BarChart3,
    description: 'Tamper-evident transaction logs and automated executive reporting that empower hospital boards with zero-leakage visibility.',
    features: [
      {
        title: 'Live Revenue Dashboards',
        desc: 'Real-time aggregation of collections segmented by payment channel (Cash, POS, Transfer, Insurance), cashier shifts, and service departments.',
      },
      {
        title: 'Inventory & Stock Valuation',
        desc: 'Quantifies sitting warehouse stock value, cost-of-goods-sold (COGS), point-of-dispense margins, and wastage/expiry alerts.',
      },
      {
        title: 'Shift Reconciliation & Accountability',
        desc: 'Tamper-evident transaction logs for end-of-shift physical cash balancing, supervisor authorizations, and audit compliance.',
      },
    ],
    screenshotPlaceholder: 'Executive Revenue Dashboard & Financial Audit Reports',
  },
];

const patientJourneySteps = [
  {
    step: '01',
    title: 'Arrival & Front Office',
    desc: 'Patient arrives at the Front Office. Front desk registers new patient or retrieves existing medical identifier.',
  },
  {
    step: '02',
    title: 'Consultation & Invoicing',
    desc: 'Services and tests are billed. Cashier desk clears transaction via Cash, POS, Transfer, or HMO and issues verified receipt token.',
  },
  {
    step: '03',
    title: 'Prescription Dispense',
    desc: 'Patient proceeds to Dispensing Pharmacy Point. Pharmacist validates payment token and dispenses medication against point inventory.',
  },
  {
    step: '04',
    title: 'Supply Chain Restock',
    desc: 'When point inventory depletes, Pharmacist requests restock from Central Pharmacy Store. Store approves and dispatches batches.',
  },
  {
    step: '05',
    title: 'Shift Reconciliation',
    desc: 'At end of shift, finance officers balance physical collections against logged revenue, guaranteeing zero leakage.',
  },
];

export default function MedicalFinance() {
  return (
    <div className="pt-24 min-h-screen font-body">
      {/* Back link & Top Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          to="/works"
          className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-pine dark:hover:text-teal-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Our Works</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3">
              <StatusBadge status="live" size="md" />
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">
                Hospital Revenue Management System (HRMS)
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-foreground tracking-tight leading-[1.06]">
              End-to-End Hospital Revenue &amp;{' '}
              <span className="text-pine dark:text-teal-400">Operations Management</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              <strong>HRMS</strong> is SwiftRev's operational flagship — an enterprise healthcare operations and revenue platform designed to automate, streamline, and audit the complete administrative, clinical support, billing, dual-tier pharmacy supply chain, and financial reporting lifecycle of modern hospitals.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-pine text-white text-xs font-heading font-bold hover:bg-pine-hover shadow-xs transition"
              >
                <span>Request Facility Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Journey Flowchart */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-pine dark:text-teal-400">
              Operational Lifecycle
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-foreground mt-1">
              Typical Patient Journey Through HRMS
            </h2>
            <p className="text-xs text-muted-foreground mt-2">
              From arrival to prescription dispensing and treasury reconciliation — every touchpoint is audited.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {patientJourneySteps.map((s, idx) => (
              <div
                key={s.step}
                className="p-5 rounded-2xl bg-background border border-border flex flex-col justify-between space-y-3 relative"
              >
                <div>
                  <span className="text-2xl font-heading font-black text-pine dark:text-teal-400">
                    {s.step}
                  </span>
                  <h3 className="font-heading font-bold text-sm text-foreground mt-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                    {s.desc}
                  </p>
                </div>
                {idx < patientJourneySteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground text-xs">
                      &rarr;
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Modules Breakdown */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-heading font-semibold uppercase tracking-wider text-pine dark:text-teal-400">
            Platform Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground mt-2">
            Core Modules &amp; Subsystems
          </h2>
        </div>

        {modules.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div
              key={m.num}
              className="rounded-3xl p-8 md:p-12 bg-card border border-border shadow-xs space-y-8"
            >
              {/* Module Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-pine dark:text-teal-300 flex items-center justify-center shrink-0 mt-1">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-heading font-bold text-pine dark:text-teal-400 uppercase tracking-wider">
                        Module {m.num}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground">
                      {m.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                      {m.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-3xl">
                {m.description}
              </p>

              {/* Feature Grid */}
              <div className="grid sm:grid-cols-2 gap-5">
                {m.features.map((f) => (
                  <div
                    key={f.title}
                    className="p-5 rounded-2xl bg-muted/40 border border-border/70 space-y-1.5"
                  >
                    <div className="flex items-center gap-2 font-heading font-bold text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-pine dark:text-teal-400 shrink-0" />
                      <span>{f.title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground font-body leading-relaxed pl-6">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Ready Screenshot Area */}
              <div className="rounded-2xl border border-dashed border-border bg-background/60 p-8 text-center">
                <div className="max-w-md mx-auto space-y-2">
                  <p className="text-xs font-heading font-bold text-foreground">
                    {m.screenshotPlaceholder}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    System view showcasing live operational workflow.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA Bottom Box */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <div className="rounded-3xl p-10 md:p-14 bg-pine text-white shadow-xl space-y-4">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight">
            Deploy HRMS in Your Healthcare Facility
          </h2>
          <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto font-body">
            Schedule an on-site assessment with SwiftRev Technology Limited to review your hospital's billing and dual-tier pharmacy workflows.
          </p>
          <div className="pt-4 flex justify-center">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-white text-pine font-heading font-bold text-xs hover:bg-slate-100 transition shadow"
            >
              Contact Healthcare Solutions Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
