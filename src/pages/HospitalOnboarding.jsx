import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import StepIndicator from '../components/onboarding/StepIndicator';
import Step0TierSelection from '../components/onboarding/Step0TierSelection';
import Step1FacilityDetails from '../components/onboarding/Step1FacilityDetails';
import Step2Documentation from '../components/onboarding/Step2Documentation';
import Step3RevenuePreferences from '../components/onboarding/Step3RevenuePreferences';
import Step4Review from '../components/onboarding/Step4Review';

const TOTAL_STEPS = 5;

const stepTitles = {
  1: { title: 'Choose Your Tier', sub: "Select the service package that matches your facility's needs." },
  2: { title: 'Facility Details', sub: 'Tell us about your hospital or healthcare facility.' },
  3: { title: 'Financial Documentation', sub: 'Upload required documents for verification and compliance.' },
  4: { title: 'Revenue Preferences', sub: 'Configure how you collect and receive revenue.' },
  5: { title: 'Review & Submit', sub: 'Confirm all information before submitting your application.' },
};

export default function HospitalOnboarding() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [selectedTier, setSelectedTier] = useState('');

  const [facilityData, setFacilityData] = useState({
    facilityName: '', facilityType: '', regNumber: '', yearEstablished: '',
    address: '', contactName: '', contactRole: '', email: '', phone: '', revenueRange: '',
  });

  const [docsData, setDocsData] = useState({
    cacCert: null, taxId: null, bankStatement: null,
    auditReport: null, licenseDoc: null, directorId: null,
  });

  const [prefsData, setPrefsData] = useState({
    collectionChannels: [], settlementBank: '', accountNumber: '',
    accountName: '', reportingFrequency: '', specialInstructions: '',
  });

  const canProceed = () => {
    if (step === 1) return !!selectedTier;
    if (step === 2) return facilityData.facilityName && facilityData.facilityType && facilityData.email && facilityData.phone && facilityData.contactName;
    if (step === 3) return docsData.cacCert && docsData.taxId && docsData.bankStatement && docsData.licenseDoc && docsData.directorId;
    if (step === 4) return prefsData.collectionChannels.length > 0 && prefsData.settlementBank && prefsData.accountNumber && prefsData.reportingFrequency;
    return true;
  };

  const tierLabel = { elite: 'Elite', pro: 'Pro', platinum: 'Platinum' }[selectedTier] || '';

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#dce9f3' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl p-12 max-w-md w-full mx-4 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 font-heading mb-3">Application Submitted!</h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-4">
            Thank you, <strong>{facilityData.facilityName}</strong>. Your <strong>{tierLabel} plan</strong> application has been received.
          </p>
          <p className="text-slate-400 text-xs leading-relaxed mb-8">
            Our team will review your application and reach out within <strong>2–3 business days</strong> to confirm onboarding.
          </p>
          <Link
            to="/hospital-login"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            Go to Hospital Login
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex" style={{ background: '#dce9f3' }}>
      {/* Left Panel — Form */}
      <div className="w-full lg:w-3/5 flex items-start justify-center p-6 md:p-12 overflow-y-auto">
        <div className="w-full max-w-xl py-6">
          <Link to="/hospital-login" className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 mb-8 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Login
          </Link>

          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-1">SwiftRev</p>
          <h1 className="text-2xl font-bold text-slate-800 font-heading mb-8">Hospital Onboarding</h1>

          <StepIndicator current={step} total={TOTAL_STEPS} />

          <div className="mb-6">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-500 mb-1">Step {step} of {TOTAL_STEPS}</p>
            <h2 className="text-xl font-bold text-slate-800 font-heading">{stepTitles[step].title}</h2>
            <p className="text-sm text-slate-500 mt-1">{stepTitles[step].sub}</p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl shadow-sm p-6 md:p-8"
            >
              {step === 1 && <Step0TierSelection selected={selectedTier} onSelect={setSelectedTier} />}
              {step === 2 && <Step1FacilityDetails data={facilityData} onChange={setFacilityData} />}
              {step === 3 && <Step2Documentation data={docsData} onChange={setDocsData} />}
              {step === 4 && <Step3RevenuePreferences data={prefsData} onChange={setPrefsData} />}
              {step === 5 && <Step4Review facility={facilityData} docs={docsData} prefs={prefsData} tier={tierLabel} />}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-6">
            <button
              onClick={() => setStep(s => s - 1)}
              disabled={step === 1}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>

            {step < TOTAL_STEPS ? (
              <button
                onClick={() => setStep(s => s + 1)}
                disabled={!canProceed()}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition-colors"
              >
                Submit Application <CheckCircle2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div
        className="hidden lg:flex w-2/5 items-center justify-center relative overflow-hidden sticky top-0 h-screen"
        style={{ background: 'linear-gradient(135deg, #c8dff0 0%, #ddeef8 50%, #e8f4fc 100%)' }}
      >
        <div className="absolute top-12 right-16 w-32 h-32 rounded-full bg-white/30 blur-sm" />
        <div className="absolute bottom-24 left-16 w-20 h-20 rounded-full bg-blue-200/50" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-white/20 blur-xl" />

        <div className="relative z-10 text-center px-10">
          <img
            src="/swiftRev.png"
            alt="SwiftRev Logo"
            className="w-48 mx-auto mb-8 drop-shadow-xl"
          />
          <h3 className="text-slate-700 font-bold text-lg font-heading mb-2">Revenue Management, Simplified.</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">
            Join healthcare facilities across Nigeria using SwiftRev to eliminate revenue leakages and gain full financial control.
          </p>

          <div className="space-y-2">
            {['Choose Your Tier', 'Facility Details', 'Documentation', 'Revenue Preferences', 'Review & Submit'].map((label, i) => (
              <div key={label} className={`flex items-center gap-3 px-4 py-2 rounded-full text-xs font-semibold transition-all ${step === i + 1 ? 'bg-blue-500 text-white shadow-md' : step > i + 1 ? 'bg-white/60 text-slate-500' : 'bg-white/30 text-slate-400'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${step === i + 1 ? 'bg-white text-blue-500' : step > i + 1 ? 'bg-green-400 text-white' : 'bg-white/50 text-slate-400'}`}>
                  {step > i + 1 ? '✓' : i + 1}
                </span>
                {label}
              </div>
            ))}
          </div>

          {selectedTier && (
            <div className="mt-6 px-5 py-3 rounded-2xl bg-white/60 text-left">
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Selected Plan</p>
              <p className="text-slate-700 font-bold text-base font-heading">{tierLabel} Plan</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
