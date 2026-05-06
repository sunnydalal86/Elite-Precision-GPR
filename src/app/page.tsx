"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Target,
  FileText,
  HardHat,
  Radar,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Users,
  Layers,
  ScanLine,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navLinkClass =
  "shrink-0 text-sm text-gray-300 transition-colors hover:text-white whitespace-nowrap";

const navItems = [
  { href: "#about", label: "About Us" },
  { href: "#safety", label: "Safety First" },
  { href: "#our-work", label: "Our Work" },
  { href: "#process", label: "Process" },
] as const;

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 h-16 md:h-20">
          <a
            href="#"
            className="flex shrink-0 items-center gap-2 sm:gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] md:min-w-0"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#ff6b35] to-[#ff8c5a] rounded-lg flex items-center justify-center shrink-0">
              <Radar className="w-6 h-6 text-white" />
            </div>
            <div className="hidden min-[380px]:block">
              <span className="text-lg font-bold tracking-tight">
                Elite Precision
              </span>
              <span className="text-[#ff6b35] font-bold ml-1">GPR</span>
            </div>
          </a>

          <div className="flex min-w-0 flex-1 items-center justify-end gap-2 md:gap-4">
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className={navLinkClass}>
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-5 py-2.5 bg-[#ff6b35] hover:bg-[#ff8c5a] text-white text-sm font-semibold rounded-lg transition-all duration-200"
              >
                Request a Quote
              </a>
            </div>

            <div
              className="flex md:hidden max-w-[100%] items-center gap-2 overflow-x-auto py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="shrink-0 text-xs text-gray-300 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <span className="shrink-0 text-gray-600" aria-hidden>
                |
              </span>
              <a
                href="#contact"
                className="shrink-0 text-xs font-semibold text-[#ff6b35] hover:text-[#ff8c5a]"
              >
                Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[#0a0a0a]/78">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-transparent to-[#0a0a0a]/90" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff6b35]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#ff6b35]/3 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff6b35]/10 border border-[#ff6b35]/20 rounded-full mb-8"
          >
            <AlertTriangle className="w-4 h-4 text-[#ff6b35]" />
            <span className="text-sm text-[#ff6b35] font-medium">
              Prevent costly utility strikes before they happen
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="gradient-text">Precision Utility Locating</span>
            <br />
            <span className="text-white">&amp; GPR Services</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed"
          >
            Accurate underground scanning, concrete imaging, and subsurface
            investigation for contractors, engineers, environmental firms, and
            project managers.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="#contact"
              className="group px-8 py-4 bg-[#ff6b35] hover:bg-[#ff8c5a] text-white font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 glow-orange"
            >
              Request a Quote
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200"
            >
              View Services
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-6 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#ff6b35]" />
              <span>Safety-focused</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ff6b35]" />
              <span>Field-tested</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#ff6b35]" />
              <span>Fast turnaround</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}

function GoogleWordmark() {
  return (
    <span
      className="inline-flex items-baseline font-semibold tracking-tight text-2xl md:text-3xl whitespace-nowrap select-none leading-none"
      style={{ fontFamily: "system-ui, 'Segoe UI', Roboto, sans-serif" }}
      aria-label="Google"
    >
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>
  );
}

function TrustStrip() {
  const defaultSlot =
    "relative flex h-12 w-[160px] shrink-0 items-center justify-center md:h-[50px] md:w-[174px]";

  const companies: (
    | {
        name: string;
        kind: "image";
        src: string;
        slotClassName?: string;
        sizes?: string;
      }
    | { name: string; kind: "google"; slotClassName?: string }
  )[] = [
    { name: "Tesla", kind: "image", src: "/logos/tesla.png?v=4" },
    { name: "Google", kind: "google" },
    {
      name: "Roto-Rooter",
      kind: "image",
      src: "/logos/roto-rooter.png",
      slotClassName:
        "relative flex h-16 w-[228px] shrink-0 items-center justify-center md:h-[72px] md:w-[248px]",
      sizes: "(max-width: 768px) 228px, 248px",
    },
    {
      name: "Partner Engineering",
      kind: "image",
      src: "/logos/partner-engineering.png",
      slotClassName:
        "relative flex h-10 w-[136px] shrink-0 items-center justify-center md:h-[42px] md:w-[148px]",
      sizes: "(max-width: 768px) 136px, 148px",
    },
    {
      name: "811 Call Before You Dig",
      kind: "image",
      src: "/logos/811.png",
      slotClassName:
        "relative flex h-16 w-[196px] shrink-0 items-center justify-center md:h-[64px] md:w-[212px]",
      sizes: "(max-width: 768px) 196px, 212px",
    },
  ];

  return (
    <section className="py-12 md:py-16 border-y border-white/5 bg-[#0d0d0d]/94 backdrop-blur-[1px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 mb-8 tracking-wide uppercase">
            Trusted by teams working with companies like
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {companies.map((company) => (
              <div
                key={company.name}
                className={company.slotClassName ?? defaultSlot}
              >
                {company.kind === "google" ? (
                  <GoogleWordmark />
                ) : (
                  <Image
                    src={company.src}
                    alt={company.name}
                    fill
                    sizes={
                      company.sizes ??
                      "(max-width: 768px) 160px, 174px"
                    }
                    className="object-contain"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  const features = [
    {
      icon: Target,
      title: "Pinpoint Accuracy",
      description: "Advanced GPR technology for precise utility detection",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Fast scheduling and same-day reporting available",
    },
    {
      icon: Shield,
      title: "Risk Reduction",
      description: "Prevent costly strikes and project delays",
    },
    {
      icon: Users,
      title: "Field Experience",
      description: "Construction and public works expertise",
    },
  ];

  return (
    <section
      id="about"
      className="relative scroll-mt-24 py-20 md:scroll-mt-28 md:py-32"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-[#ff6b35]/10 border border-[#ff6b35]/20 rounded-full text-sm text-[#ff6b35] font-medium mb-6">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Reduce Risk.
              <br />
              <span className="text-gray-400">Build with Confidence.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Elite Precision GPR helps contractors, engineers, and project
              managers prevent costly utility strikes and support safe project
              execution. With hands-on field experience and deep understanding
              of construction and public works requirements, we deliver
              accurate, reliable results with the quick turnaround your projects
              demand.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 p-4 bg-white/[0.02] rounded-lg border border-white/5"
                >
                  <feature.icon className="w-5 h-5 text-[#ff6b35] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-white/10 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Radar className="w-20 h-20 text-[#ff6b35]/30 mx-auto mb-4" />
                  <p className="text-gray-600 text-sm">Field Work Image</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/60 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#ff6b35]/20 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-[#ff6b35]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Industry Certified
                    </p>
                    <p className="text-xs text-gray-400">
                      Professional GPR technicians
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: MapPin,
      title: "Private/Public Utility Locating",
      description:
        "Comprehensive underground utility detection for both private properties and public infrastructure. Reduce dig-in risks and avoid project delays with accurate locate services.",
    },
    {
      icon: Radar,
      title: "GPR Scanning",
      description:
        "Non-destructive ground penetrating radar surveys to map subsurface conditions, locate utilities, and identify potential hazards before excavation begins.",
    },
    {
      icon: Layers,
      title: "Concrete Scanning",
      description:
        "Locate rebar, post-tension cables, conduits, and voids within concrete structures before cutting or coring. Prevent structural damage and protect crews.",
    },
    {
      icon: FileText,
      title: "CAD Mapping & Documentation",
      description:
        "Professional documentation of all located utilities and subsurface features. Deliverables include detailed CAD drawings for project planning and compliance.",
    },
    {
      icon: HardHat,
      title: "Jobsite Safety Support",
      description:
        "On-site support for active construction projects requiring real-time utility locating and safety consultation during excavation work.",
    },
    {
      icon: Shield,
      title: "Damage Prevention",
      description:
        "Proactive utility damage prevention services including pre-construction surveys, risk assessments, and safe dig planning for high-risk projects.",
    },
  ];

  return (
    <section
      id="services"
      className="scroll-mt-24 bg-[#0d0d0d]/94 py-20 backdrop-blur-[1px] md:scroll-mt-28 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-[#ff6b35]/10 border border-[#ff6b35]/20 rounded-full text-sm text-[#ff6b35] font-medium mb-6">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Subsurface Solutions
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            From utility locating to damage prevention, we provide the accurate
            data you need to build safely and confidently.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="group p-6 bg-[#1a1a1a]/50 rounded-xl border border-white/5 hover:border-[#ff6b35]/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#ff6b35]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#ff6b35]/20 transition-colors">
                <service.icon className="w-6 h-6 text-[#ff6b35]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SafetySection() {
  const benefits = [
    { text: "Avoid utility strikes", icon: Shield },
    { text: "Reduce project delays", icon: Clock },
    { text: "Protect your crews", icon: Users },
    { text: "Support compliance", icon: CheckCircle2 },
    { text: "Improve jobsite planning", icon: Target },
    { text: "Quick turnaround for active projects", icon: AlertTriangle },
  ];

  return (
    <section
      id="safety"
      className="relative scroll-mt-24 overflow-hidden py-20 md:scroll-mt-28 md:py-32"
    >
      {/* Calm base so the global grid doesn&apos;t compete with orange accents */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]/90" />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#ff6b35]/2.5 to-transparent" />
      <div className="absolute top-0 right-0 z-0 w-[600px] h-[600px] bg-[#ff6b35]/2.5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-[#ff6b35]/10 border border-[#ff6b35]/20 rounded-full text-sm text-[#ff6b35] font-medium mb-6">
              Safety First
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Locate Before You Dig.
              <br />
              <span className="text-[#ff6b35]">Build with Confidence.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Every excavation carries risk. Unmarked utilities, outdated
              records, and subsurface unknowns can lead to costly strikes,
              project delays, and safety incidents. Our precision locating
              services give you the accurate data you need to dig safely and
              keep projects on track.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.text}
                  className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-lg border border-white/5"
                >
                  <benefit.icon className="w-5 h-5 text-[#ff6b35] flex-shrink-0" />
                  <span className="text-gray-300 font-medium">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-lg mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/20 to-transparent rounded-full blur-[60px]" />
              <div className="relative w-full h-full bg-[#1a1a1a] rounded-2xl border border-white/10 p-8 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-black/40 rounded-xl border border-white/5">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">$50K+</p>
                      <p className="text-sm text-gray-500">
                        Average cost per utility strike
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-black/40 rounded-xl border border-white/5">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">14+ Days</p>
                      <p className="text-sm text-gray-500">
                        Average project delay per incident
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-black/40 rounded-xl border border-[#ff6b35]/20">
                    <div className="w-12 h-12 bg-[#ff6b35]/20 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-[#ff6b35]" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">99.9%</p>
                      <p className="text-sm text-gray-500">
                        Accuracy with professional locating
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const galleryItems = [
    { title: "Utility Locating", category: "Field Work" },
    { title: "Concrete Scanning", category: "Imaging" },
    { title: "GPR Field Scan", category: "Survey" },
    { title: "CAD Documentation", category: "Deliverables" },
    { title: "Public Works Support", category: "Infrastructure" },
    { title: "Jobsite Safety", category: "Consultation" },
  ];

  return (
    <section
      id="our-work"
      className="scroll-mt-24 bg-[#0d0d0d]/94 py-20 backdrop-blur-[1px] md:scroll-mt-28 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-[#ff6b35]/10 border border-[#ff6b35]/20 rounded-full text-sm text-[#ff6b35] font-medium mb-6">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Field Work Gallery
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Professional utility locating and GPR services across diverse
            project types and environments.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="group relative aspect-[4/3] bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 hover:border-[#ff6b35]/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <ScanLine className="w-16 h-16 text-[#ff6b35]/20 group-hover:text-[#ff6b35]/30 transition-colors" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-xs text-[#ff6b35] font-medium uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-lg font-semibold text-white mt-1">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Request a Scan",
      description:
        "Tell us about your project, location, and timeline. We'll provide a clear scope and quote.",
      icon: FileText,
    },
    {
      number: "02",
      title: "Locate & Document",
      description:
        "Our technicians conduct thorough scans and mark all utilities. You receive detailed CAD documentation.",
      icon: Radar,
    },
    {
      number: "03",
      title: "Build Safely",
      description:
        "With accurate utility data in hand, your team can dig confidently and avoid costly incidents.",
      icon: HardHat,
    },
  ];

  return (
    <section
      id="process"
      className="relative scroll-mt-24 py-20 md:scroll-mt-28 md:py-32"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-[#ff6b35]/10 border border-[#ff6b35]/20 rounded-full text-sm text-[#ff6b35] font-medium mb-6">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Simple. Precise. Reliable.
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Get from project planning to safe excavation in three straightforward steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-transparent via-[#ff6b35]/30 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1a1a1a] border-2 border-[#ff6b35]/30 rounded-2xl mb-6 relative z-10">
                <step.icon className="w-7 h-7 text-[#ff6b35]" />
              </div>
              <div className="text-sm text-[#ff6b35] font-mono font-bold mb-2">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "",
    service: "",
    details: "",
    timeline: "",
  });

  const services = [
    "Private/Public Utility Locating",
    "GPR Scanning",
    "Concrete Scanning",
    "CAD Mapping & Documentation",
    "Jobsite Safety Support",
    "Damage Prevention",
    "Multiple Services",
  ];

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 bg-[#0d0d0d]/94 py-20 backdrop-blur-[1px] md:scroll-mt-28 md:py-32"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-[#ff6b35]/10 border border-[#ff6b35]/20 rounded-full text-sm text-[#ff6b35] font-medium mb-6">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Request a Quote
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Need utility locating or GPR scanning for an upcoming project?
              Send a few details and we&apos;ll help you plan the next step.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white/[0.02] rounded-xl border border-white/5">
                <div className="w-12 h-12 bg-[#ff6b35]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#ff6b35]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-white font-semibold">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/[0.02] rounded-xl border border-white/5">
                <div className="w-12 h-12 bg-[#ff6b35]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#ff6b35]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-white font-semibold">
                    info@eliteprecisiongpr.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="p-6 md:p-8 bg-[#1a1a1a]/80 rounded-2xl border border-white/10">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35]/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35]/20 transition-all"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35]/20 transition-all"
                    placeholder="email@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35]/20 transition-all"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Project Location
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35]/20 transition-all"
                  placeholder="City, State or Address"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Service Needed
                  </label>
                  <select className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35]/20 transition-all appearance-none cursor-pointer">
                    <option value="" className="bg-[#1a1a1a]">
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-[#1a1a1a]">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Preferred Timeline
                  </label>
                  <select className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35]/20 transition-all appearance-none cursor-pointer">
                    <option value="" className="bg-[#1a1a1a]">
                      Select timeline
                    </option>
                    <option value="urgent" className="bg-[#1a1a1a]">
                      Urgent (1-2 days)
                    </option>
                    <option value="soon" className="bg-[#1a1a1a]">
                      Soon (this week)
                    </option>
                    <option value="scheduled" className="bg-[#1a1a1a]">
                      Scheduled (2+ weeks)
                    </option>
                    <option value="flexible" className="bg-[#1a1a1a]">
                      Flexible
                    </option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35]/20 transition-all resize-none"
                  placeholder="Tell us about your project, scope of work, or any specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#ff6b35] hover:bg-[#ff8c5a] text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 glow-orange"
              >
                Request a Quote
                <ChevronRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#0a0a0a]/96 backdrop-blur-[1px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#ff6b35] to-[#ff8c5a] rounded-lg flex items-center justify-center">
              <Radar className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight">
                Elite Precision
              </span>
              <span className="text-[#ff6b35] font-bold ml-1">GPR</span>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">
              Utility Locating • GPR Scanning • Concrete Scanning • CAD Mapping
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a
              href="tel:5551234567"
              className="hover:text-white transition-colors"
            >
              (555) 123-4567
            </a>
            <a
              href="mailto:info@eliteprecisiongpr.com"
              className="hover:text-white transition-colors"
            >
              info@eliteprecisiongpr.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Elite Precision GPR. All rights
            reserved.
          </p>
          <p className="text-sm text-gray-600">
            Website by{" "}
            <a href="#" className="text-[#ff6b35] hover:text-[#ff8c5a] transition-colors">
              Dizzle Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <AboutSection />
      <ServicesSection />
      <SafetySection />
      <GallerySection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
