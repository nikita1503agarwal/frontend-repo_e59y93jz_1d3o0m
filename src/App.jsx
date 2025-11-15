import React from 'react'
import { motion } from 'framer-motion'
import { Mic, Phone, Brain, Zap, Globe, Shield, ArrowRight } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
      {children}
    </span>
  )
}

function Feature({ icon: Icon, title }) {
  return (
    <motion.div
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10 transition-colors"
    >
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/30 to-amber-400/30 text-white/90">
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-white/90 font-medium tracking-tight">{title}</div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-2 ring-fuchsia-400/40 transition-opacity group-hover:opacity-100" />
    </motion.div>
  )
}

function ConversationBubble({ role = 'user', text, delay = 0 }) {
  const isUser = role === 'user'
  return (
    <motion.div
      initial={{ y: 12, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay, duration: 0.5 }}
      className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm ${
        isUser ? 'ml-auto bg-white/10 text-white/90' : 'mr-auto bg-white/5 text-white/80'
      } backdrop-blur border border-white/10`}
    >
      {text}
    </motion.div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#070816] text-white relative overflow-hidden">
      {/* Background gradient auras */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.25),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-40 -left-20 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.2),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-32 -right-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.18),transparent_60%)] blur-2xl" />
      </div>

      {/* Navbar */}
      <div className="relative z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
          <div className="flex h-14 items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur-xl pl-4 pr-2">
            <div className="flex items-center gap-2">
              <motion.span initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }} className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 shadow-lg">
                <Mic className="h-4 w-4 text-white" />
              </motion.span>
              <span className="text-sm sm:text-base font-semibold tracking-tight text-white/90">skoli.ai</span>
              <span className="hidden sm:inline text-white/40 text-xs">• voice agent</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-white/70">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#showcase" className="hover:text-white transition-colors">Live Demo</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            </div>
            <div className="flex items-center gap-2">
              <a href="#start" className="hidden sm:inline-flex rounded-full bg-white text-gray-900 px-4 py-2 text-sm font-medium shadow hover:shadow-lg transition-shadow">Get Started</a>
              <button className="inline-flex md:hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/80">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-8 py-16 md:py-24">
            <div className="order-2 lg:order-1">
              <div className="mb-4 flex items-center gap-2">
                <Pill>
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Realtime • Human-like
                </Pill>
              </div>
              <motion.h1
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight"
              >
                Voice AI that feels alive
              </motion.h1>
              <motion.p
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="mt-4 text-white/70 max-w-xl"
              >
                Calls, chats, and on-site interactions—auto-handled with personality.
              </motion.p>
              <div className="mt-8 flex items-center gap-3">
                <a href="#showcase" className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 py-3 text-sm font-medium shadow hover:shadow-lg transition-shadow">
                  Try a live call
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/90 backdrop-blur hover:bg-white/10">
                  Explore features
                </a>
              </div>

              {/* Quick badges */}
              <div className="mt-8 flex flex-wrap items-center gap-2 text-xs text-white/60">
                <Pill>0.2s latency</Pill>
                <Pill>Natural prosody</Pill>
                <Pill>Multi-lingual</Pill>
                <Pill>Secure by design</Pill>
              </div>
            </div>

            {/* Spline Hero Visual */}
            <div className="order-1 lg:order-2 relative h-[420px] sm:h-[520px]">
              <div className="absolute inset-0 rounded-[28px] border border-white/10 bg-gradient-to-b from-white/5 to-white/0" />
              <div className="absolute inset-0 overflow-hidden rounded-[28px]">
                <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
                {/* gradient overlay for depth without blocking interactions */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070816]" />
              </div>
              {/* subtle ring */}
              <div className="pointer-events-none absolute -inset-2 rounded-[32px] ring-1 ring-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Feature icon={Phone} title="Autonomous calling" />
            <Feature icon={Mic} title="Realtime speech" />
            <Feature icon={Brain} title="Memory + context" />
            <Feature icon={Zap} title="Fast reactions" />
            <Feature icon={Globe} title="Multiple languages" />
            <Feature icon={Shield} title="Enterprise security" />
          </div>
        </div>
      </section>

      {/* Showcase / Live Demo */}
      <section id="showcase" className="relative z-10 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-white/70 text-sm mb-4">Sample conversation</div>
              <div className="space-y-3">
                <ConversationBubble role="user" text="Hey, can you reschedule my appointment to tomorrow morning?" />
                <ConversationBubble role="assistant" delay={0.1} text="Absolutely. I see two slots at 9:30 AM and 10:15 AM. Which works best?" />
                <ConversationBubble role="user" delay={0.2} text="10:15 sounds good." />
                <ConversationBubble role="assistant" delay={0.3} text="Done. You’re booked for 10:15 AM. I’ve sent a confirmation text." />
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs text-white/60">
                <Pill>Interruptions handled</Pill>
                <Pill>Understands intent</Pill>
                <Pill>Executes actions</Pill>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-white/70 text-sm mb-4">Voice feel</div>
              <motion.div initial={{ scale: 0.98, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative h-40 rounded-xl bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-amber-400/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex gap-1">
                    {[...Array(40)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ height: 6 }}
                        animate={{ height: [6, 24 + (i % 5) * 6, 8] }}
                        transition={{ duration: 1.6 + (i % 5) * 0.1, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                        className="w-1 rounded-full bg-white/70"
                        style={{ opacity: 0.5 + ((i % 5) * 0.1) }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
              <div className="mt-5 flex items-center gap-2 text-xs text-white/60">
                <Pill>Natural pauses</Pill>
                <Pill>Emotion + tone</Pill>
                <Pill>Low latency</Pill>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="relative z-10 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-tr from-indigo-600/20 via-fuchsia-600/20 to-amber-500/20 p-8 md:p-10 backdrop-blur">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-2xl md:text-3xl font-semibold">Spin up your AI voice agent</div>
                <div className="text-white/70 text-sm mt-2">Plug into your stack. Go live in minutes.</div>
              </div>
              <div className="flex items-center gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 py-3 text-sm font-medium shadow hover:shadow-lg transition-shadow">
                  Launch Studio
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#pricing" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/90 backdrop-blur hover:bg-white/10">
                  Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10"><Mic className="h-3.5 w-3.5" /></span>
              <span>skoli.ai</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#showcase" className="hover:text-white">Demo</a>
              <a href="#start" className="hover:text-white">Start</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
