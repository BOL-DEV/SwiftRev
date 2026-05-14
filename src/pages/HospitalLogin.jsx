import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Timer } from 'lucide-react';

export default function HospitalLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen flex" style={{ background: '#dce9f3' }}>
      {/* Left Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-3">Hospital Operations</p>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-slate-300 flex items-center justify-center mt-0.5 flex-shrink-0">
                <Timer className="w-5 h-5 text-slate-500" />
              </div>
              <h1 className="text-2xl font-bold text-slate-800 leading-tight font-heading">
                Hospital Revenue Management System
              </h1>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              A focused access point for admins, finance teams, and payment agents working across hospital revenue operations.
            </p>
          </div>

          {/* Login Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-500 mb-2">Secure Access</p>
            <h2 className="text-xl font-bold text-slate-800 mb-6 font-heading">Login to your workspace</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@hospital.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-700 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-4 py-2.5 pr-10 rounded-lg border border-slate-200 text-sm text-slate-700 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                {submitted ? 'Logging in…' : 'Login →'}
              </button>

              {submitted && (
                <p className="text-center text-xs text-blue-500">Authenticating your credentials…</p>
              )}
            </form>

            <p className="text-center text-xs text-slate-400 mt-6">
              New facility?{' '}
              <Link to="/hospital-onboarding" className="text-blue-500 font-semibold hover:underline">
                Register your hospital →
              </Link>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Panel */}
      <div
        className="hidden lg:flex w-1/2 items-center justify-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #c8dff0 0%, #ddeef8 50%, #e8f4fc 100%)' }}
      >
        {/* Decorative circles */}
        <div className="absolute top-12 right-16 w-32 h-32 rounded-full bg-white/30 blur-sm" />
        <div className="absolute top-20 right-28 w-16 h-16 rounded-full bg-slate-300/40" />
        <div className="absolute bottom-24 left-16 w-20 h-20 rounded-full bg-blue-200/50" />
        <div className="absolute top-8 left-1/2 w-48 h-3 rounded-full bg-slate-300/60" />
        <div className="absolute top-16 left-1/2 w-36 h-2 rounded-full bg-slate-300/40" />

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10"
        >
          <img
            src="/swiftRev.png"
            alt="SwiftRev Logo"
            className="w-64 drop-shadow-xl"
          />
        </motion.div>
      </div>
    </div>
  );
}
