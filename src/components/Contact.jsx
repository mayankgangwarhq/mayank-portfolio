import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { contactInfo, whatsappBusiness } from '../data/portfolioData';
import {
  Mail,
  Copy,
  Check,
  Send,
  MessageSquare,
  MapPin,
  ExternalLink,
  ArrowUpRight,
  Loader2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, XIcon, WhatsAppIcon } from './ProjectLogos';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Discussion: Jivexa Health & Digital Healthcare');
  const [subject, setSubject] = useState('Discussion: Jivexa Health & Digital Healthcare');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [botcheck, setBotcheck] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error' | 'fallback'
  const [statusMessage, setStatusMessage] = useState('');

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const prefillSubjects = [
    'Discussion: Jivexa Health & Digital Healthcare',
    'AgriTech / AgriNext Brainstorming',
    'Startup Exploration & Project Collaboration',
    'Mentorship, Feedback & Advice',
    'General Hello & Networking'
  ];

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
    setSubject(topic);
  };

  // Generates honest mailto URL with prefilled user inputs
  const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    subject || 'Connecting with Mayank Gangwar'
  )}&body=${encodeURIComponent(
    `Hello Mayank,\n\n${message || 'I came across your portfolio and wanted to reach out regarding...'}\n\nBest regards,\n${senderName || 'A fellow builder'}${senderEmail ? `\nSender Email: ${senderEmail}` : ''}`
  )}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Spam Protection: silent abort if honeypot was filled
    if (botcheck) {
      return;
    }

    if (!senderName.trim() || !senderEmail.trim() || !message.trim()) {
      setFormStatus('error');
      setStatusMessage('Please fill in your name, email, and message.');
      return;
    }

    const key = contactInfo.web3formsAccessKey || contactInfo.web3formsKey;
    if (!key || key === 'PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE' || key === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
      window.location.href = mailtoUrl;
      setFormStatus('fallback');
      setStatusMessage('Opened your default mail app with the prefilled message. To enable silent in-browser sending, paste your Web3Forms Access Key in portfolioData.js.');
      return;
    }

    setFormStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: key,
          name: senderName.trim(),
          email: senderEmail.trim(),
          subject: subject.trim() || `Inquiry: ${selectedTopic}`,
          topic: selectedTopic,
          message: message.trim(),
          from_name: `${senderName.trim()} via Portfolio`,
          replyto: senderEmail.trim(),
          botcheck: ''
        })
      });

      const data = await response.json();

      // Strict validation: do not claim success unless the API explicitly confirms submission
      if (data && data.success === true) {
        setFormStatus('success');
        setStatusMessage('Your message has been sent successfully! Mayank will reply to your email soon.');
        setSenderName('');
        setSenderEmail('');
        setMessage('');
      } else {
        setFormStatus('error');
        setStatusMessage(data?.message || 'Submission failed. Please verify your access key or launch the mail app below.');
      }
    } catch (err) {
      setFormStatus('error');
      setStatusMessage('Network request failed. Please check your internet connection or use your email client.');
    }
  };

  const getSocialIcon = (icon) => {
    switch (icon) {
      case 'WhatsApp':
        return <WhatsAppIcon className="w-5 h-5 text-[#10B981]" />;
      case 'Github':
        return <GithubIcon className="w-5 h-5" />;
      case 'Linkedin':
        return <LinkedinIcon className="w-5 h-5" />;
      case 'X':
      case 'Twitter':
        return <XIcon className="w-5 h-5" />;
      case 'Mail':
        return <Mail className="w-5 h-5" />;
      case 'Instagram':
        return <InstagramIcon className="w-5 h-5" />;
      default:
        return <ArrowUpRight className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#F5F3FF]/40 via-[#EFF6FF]/50 to-white border-t border-[#E2E8F0]">
      {/* Background Pastel Ambience */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[350px] bg-[#EFF6FF] rounded-full blur-[140px] pointer-events-none -z-10 opacity-70"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-[#F5F3FF] rounded-full blur-[140px] pointer-events-none -z-10 opacity-60"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DDD6FE] text-xs font-mono text-[#7C3AED] shadow-xs">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Open Communications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] font-heading tracking-tight">
            Have an Idea? <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">Let's Connect.</span>
          </h2>
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {contactInfo.description}
          </p>
        </motion.div>

        {/* Contact Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Founder Channels */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Dedicated WhatsApp Business Contact Card (Futuristic Dark Theme with Elegant Green Accents) */}
            <motion.div
              whileHover={{ y: -3 }}
              className="rounded-3xl p-6 sm:p-7 border border-[#1E293B] bg-gradient-to-br from-[#0F172A] via-[#0B132B] to-[#020617] text-white shadow-xl relative overflow-hidden group hover:border-[#10B981]/60 transition-all duration-300"
            >
              {/* Subtle Green & Blue Background Glow */}
              <div className="absolute -top-16 -right-16 w-44 h-44 bg-[#10B981]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#10B981]/25 transition-all duration-500" />
              <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

              {/* Status & Business Badge */}
              <div className="flex items-center justify-between gap-2 mb-3.5 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 text-[11px] font-mono text-[#34D399]">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="font-semibold tracking-wide">WhatsApp Business</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">Direct Founder Channel</span>
              </div>

              <h3 className="text-xl font-heading font-bold text-white mb-1 tracking-tight relative z-10">
                Instant Business Chat
              </h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed relative z-10">
                Connect directly on WhatsApp Business for partnership inquiries, startup collaboration, and project discussions.
              </p>

              {/* Business Contact Number Pill */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-between gap-3 mb-3 relative z-10">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="p-2 rounded-xl bg-[#10B981]/20 text-[#34D399] shrink-0 border border-[#10B981]/30">
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-mono text-slate-400 block tracking-wider">Business Number</span>
                    <a
                      href={whatsappBusiness.chatUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-mono font-semibold text-white hover:text-[#34D399] transition-colors truncate block"
                    >
                      {whatsappBusiness.displayNumber}
                    </a>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#10B981]/20 text-[#34D399] border border-[#10B981]/30 shrink-0">
                  Online
                </span>
              </div>

              {/* Prefilled Inquiry Message Preview */}
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-[11px] font-mono mb-4 relative z-10">
                <span className="text-slate-400 block mb-1 text-[10px] uppercase tracking-wider font-sans">Prefilled Message:</span>
                <span className="text-slate-200 italic">"{whatsappBusiness.prefilledMessage}"</span>
              </div>

              {/* Direct WhatsApp Chat Action Button */}
              <motion.a
                href={whatsappBusiness.chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#10B981] to-[#059669] text-white hover:from-[#059669] hover:to-[#047857] shadow-lg shadow-[#10B981]/25 hover:shadow-[#10B981]/40 transition-all active:scale-95 relative z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
                aria-label="Start chat on WhatsApp Business (+91 9105539049)"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Start WhatsApp Business Chat</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </motion.div>

            {/* Quick Email Card */}
            <motion.div
              whileHover={{ y: -3 }}
              className="rounded-3xl p-6 sm:p-7 border border-[#E2E8F0] bg-white shadow-md relative overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <span className="text-xs font-mono uppercase text-[#2563EB] tracking-wider block mb-2 font-semibold">
                Primary Channel
              </span>
              <h3 className="text-xl font-heading font-bold text-[#0F172A] mb-1">Direct Email</h3>
              <p className="text-xs text-[#475569] mb-4 leading-relaxed">
                The fastest way to reach me for inquiries, partnerships, or project feedback.
              </p>

              {/* Email Pill with Copy Button */}
              <div className="p-3 rounded-2xl bg-[#EFF6FF]/60 border border-[#BFDBFE] flex items-center justify-between gap-3 mb-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-xs font-mono text-[#2563EB] hover:text-[#1D4ED8] truncate transition-colors font-semibold"
                >
                  {contactInfo.email}
                </a>
                <motion.button
                  type="button"
                  onClick={copyEmailToClipboard}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-xl bg-white hover:bg-[#2563EB] text-[#475569] hover:text-white border border-[#E2E8F0] transition-all shrink-0 focus:outline-none shadow-2xs"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-[#0D9488]" /> : <Copy className="w-4 h-4" />}
                </motion.button>
              </div>

              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-[11px] font-mono text-[#0D9488] flex items-center gap-1.5 font-semibold mb-3"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Email address copied to clipboard!</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Direct Mailto CTA */}
              <motion.a
                href={`mailto:${contactInfo.email}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white hover:opacity-95 transition-all shadow-md shadow-[#2563EB]/20 active:scale-95 btn-shimmer"
              >
                <Mail className="w-4 h-4" />
                <span>Open Mail App</span>
              </motion.a>
            </motion.div>

            {/* Social Channels List with Spring Hover */}
            <div className="rounded-3xl p-6 border border-[#E2E8F0] bg-white shadow-md space-y-3">
              <span className="text-xs font-mono uppercase text-[#64748B] tracking-wider block mb-2 font-semibold">
                Verified Social Profiles
              </span>

              {contactInfo.socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:bg-[#F8FAFC] transition-all text-[#475569] hover:text-[#0F172A] group shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] group-hover:scale-110 transition-transform shadow-2xs">
                      {getSocialIcon(social.icon)}
                    </div>
                    <div>
                      <div className="text-xs font-semibold flex items-center gap-2 text-[#0F172A]">
                        <span>{social.name}</span>
                        {social.isPlaceholder && (
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#EFF6FF] text-[#2563EB] font-medium">
                            Placeholder
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-[#64748B] font-mono">
                        {social.handle}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#2563EB] transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Location Pill */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-3 text-xs text-[#475569] font-mono"
            >
              <MapPin className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Based in {contactInfo.location} • Available Remotely</span>
            </motion.div>

          </motion.div>

          {/* Right Column: In-Browser Direct Message Composer */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] bg-white shadow-md relative">
              <div className="mb-6 space-y-1">
                <span className="text-xs font-mono text-[#2563EB] uppercase tracking-wider block font-semibold">
                  Direct In-Browser Dispatch
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#0F172A] tracking-tight">
                  Compose & Send Message
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Send a message directly from your browser to Mayank's inbox. No external mail client required.
                </p>
              </div>

              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] text-center space-y-4"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#10B981]/15 text-[#0D9488] flex items-center justify-center shadow-xs">
                    <CheckCircle2 className="w-7 h-7 text-[#0D9488]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-[#0F172A]">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-[#0F766E] max-w-md mx-auto mt-1 leading-relaxed">
                      {statusMessage}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setFormStatus('idle');
                      setStatusMessage('');
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-white text-[#0D9488] border border-[#A7F3D0] hover:bg-[#ECFDF5] transition-all shadow-2xs"
                  >
                    <span>Send Another Message</span>
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot Spam Protection (Invisible to humans, catches automated bots) */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                    checked={botcheck}
                    onChange={(e) => setBotcheck(e.target.checked)}
                  />

                  {/* Dynamic Topic Selection */}
                  <div>
                    <label className="text-xs font-mono text-[#475569] block mb-2 font-medium">
                      Select a Topic or Project:
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {prefillSubjects.map((item, idx) => (
                        <motion.button
                          key={idx}
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleSelectTopic(item)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all text-left ${
                            selectedTopic === item
                              ? 'bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] font-semibold shadow-xs'
                              : 'bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0] hover:text-[#0F172A] hover:bg-white'
                          }`}
                        >
                          {item}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Sender Name & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="sender-name" className="text-xs font-mono text-[#475569] block mb-1.5 font-medium">
                        Your Name: <span className="text-[#2563EB]">*</span>
                      </label>
                      <input
                        id="sender-name"
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="e.g. Alex Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="sender-email" className="text-xs font-mono text-[#475569] block mb-1.5 font-medium">
                        Your Email: <span className="text-[#2563EB]">*</span>
                      </label>
                      <input
                        id="sender-email"
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="e.g. alex@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Custom Subject */}
                  <div>
                    <label htmlFor="email-subject" className="text-xs font-mono text-[#475569] block mb-1.5 font-medium">
                      Subject Line:
                    </label>
                    <input
                      id="email-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 font-mono text-xs transition-all"
                    />
                  </div>

                  {/* Message Body */}
                  <div>
                    <label htmlFor="email-body" className="text-xs font-mono text-[#475569] block mb-1.5 font-medium">
                      Your Message / Idea / Feedback: <span className="text-[#2563EB]">*</span>
                    </label>
                    <textarea
                      id="email-body"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your thoughts, questions, or ideas here..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 resize-y transition-all"
                    />
                  </div>

                  {/* Status Banner (if error or fallback) */}
                  <AnimatePresence>
                    {statusMessage && formStatus !== 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className={`p-3 rounded-xl border flex items-start gap-2.5 text-xs ${
                          formStatus === 'error'
                            ? 'bg-[#FFF1E8] border-[#FED7AA] text-[#C2410C]'
                            : 'bg-[#EFF6FF] border-[#BFDBFE] text-[#1E40AF]'
                        }`}
                      >
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{statusMessage}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit CTA Button */}
                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      whileHover={{ scale: formStatus === 'submitting' ? 1 : 1.02 }}
                      whileTap={{ scale: formStatus === 'submitting' ? 1 : 0.97 }}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white hover:opacity-95 transition-all shadow-md shadow-[#2563EB]/25 active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed btn-shimmer"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message Direct</span>
                        </>
                      )}
                    </motion.button>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2.5 text-[11px] font-mono text-[#64748B]">
                      <span>Direct in-browser submission via Web3Forms</span>
                      <a
                        href={mailtoUrl}
                        className="inline-flex items-center gap-1 text-[#2563EB] hover:underline"
                      >
                        <span>Open in default email app</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
