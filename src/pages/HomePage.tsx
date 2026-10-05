import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SECTION_IDS } from '../context/NavHighlightContext';
import { scrollToSectionId } from '../utils/scrollToSection';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FadeIn } from '../components/FadeIn';

// Import Assets
import Hero_Image from '../assets/Hero_Image_2.png';

// Features Bar
import user_group from '../assets/user-group.svg';
import shield_plus from '../assets/shield-plus.svg';
import Fastrack from '../assets/Fastrack.svg';
import hours_clock from '../assets/24-hours-clock.svg';
// What we do
import Organized_Icon from '../assets/Organized_Icon.svg';
import Appointment from '../assets/Appointment.svg';
import healtcare_Light from '../assets/healtcare_Light.svg';
import hospital from '../assets/hospital.svg';
import Love from '../assets/Love.svg';

// Steps
import Records from '../assets/Records.svg';
import Plan from '../assets/Plan.svg';
import customer_service from '../assets/customer_service.svg';

// Services
import Digitized_Records from '../assets/Digitized_Records.svg';
import Appointment_Co from '../assets/Appointment_Co.svg';
import Digitize_Health from '../assets/Digitize_Health.svg';
import Fastrack_Hospital from '../assets/Fastrack_Hospital.svg';
import ambulance from '../assets/ambulance.svg';

// Use Cases
import health from '../assets/health.svg';
import healtcare_svg from '../assets/healtcare.svg';
import door from '../assets/door.svg';
import Stack from '../assets/Stack.svg';

// Other
import StarIcon from '../assets/Star.svg';
import Plus_Icon from '../assets/Plus_Icon.svg';
import Minus_Icon from '../assets/Minus_Icon.svg';
import Ifen from '../assets/Ifen.svg';
import Parvez_Image from '../assets/Parvez.jpg';

/* ── Hero ── */
const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isVideoOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(console.error);
    } else if (!isVideoOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isVideoOpen]);

  return (
    <section className="pc-hero">
      <div className="pc-hero-slide pc-hero-slide-main" style={{ position: 'relative' }}>
        <div className="pc-hero-bg-blob" />
        <div className="pc-hero-inner">
          <div className="pc-hero-left">
            <h1 className="pc-hero-h1">
              Meet your personal<br className="pc-br-desktop" /> health manager
              <span style={{ display: 'block', fontSize: '0.55em', color: '#1147a8', marginTop: '16px', fontWeight: 600, fontFamily: '"Inter", sans-serif', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Human driven <span style={{ color: '#c8d7ee', margin: '0 8px' }}>|</span> AI Enabled
              </span>
            </h1>
            <p className="pc-hero-desc">
              Proxycare acts as your dedicated healthcare proxy - organizing your medical records, coordinating your doctors and hospitals, and ensuring nothing falls through the cracks. So you can focus on care, not logistics.
            </p>
            <div className="pc-hero-actions">
              <Link to="/contact" className="pc-btn-primary" style={{ textDecoration: 'none' }}>
                Get started
              </Link>
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="pc-btn-secondary" 
                style={{ 
                  background: 'transparent', 
                  border: '1px solid #1147a8', 
                  color: '#1147a8', 
                  padding: '17px 32px', 
                  borderRadius: 12, 
                  fontWeight: 600, 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 16
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                Learn more
              </button>
            </div>
          </div>

          <div className="pc-hero-right">
            <img
              src={Hero_Image}
              alt="Family healthcare"
              className="pc-hero-image-main"
            />
            <div className="pc-float-card card-navy pc-card-top-right">
              <div className="pc-float-card-icon"><img src={user_group} alt="Family" style={{ width: 32, height: 32 }} /></div>
              <div className="pc-float-card-label">Family first</div>
            </div>
            <div className="pc-float-card card-red pc-card-left-mid">
              <div className="pc-float-card-icon" style={{ border: '2px solid rgba(255,255,255,0.6)', borderRadius: 10, padding: 4 }}>
                <img src={shield_plus} alt="Secure" style={{ width: 24, height: 24 }} />
              </div>
              <div className="pc-float-card-label">Secure &amp; private Application</div>
            </div>
            <div className="pc-float-card card-light pc-card-bot-right">
              <div className="pc-float-card-icon"><img src={Digitized_Records} alt="Records" style={{ width: 28, height: 28 }} /></div>
              <div className="pc-float-card-label">All records organized</div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Popup */}
      {isVideoOpen && (
        <div 
          className="pc-video-modal-overlay" 
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="pc-video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="pc-video-modal-close" onClick={() => setIsVideoOpen(false)}>✕</button>
            <video
              ref={videoRef}
              src="/assets/1MIN_30SEC_INTRO_VIDEO.mp4"
              className="pc-hero-video-player"
              controls={true}
              playsInline
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      )}

      <div style={{ padding: '0 24px 24px', position: 'relative', zIndex: 2 }}>
        <div className="pc-features-bar">
          {[
            { icon: <img src={user_group} alt="" style={{ width: 30, height: 30 }} />, title: 'Digitize', sub: 'All your records' },
            { icon: <img src={shield_plus} alt="" style={{ width: 28, height: 28 }} />, title: 'Dedicated', sub: 'Health assistant' },
            { icon: <img src={Fastrack} alt="" style={{ width: 28, height: 28 }} />, title: 'FastTrack', sub: 'At network hospitals' },
            { icon: <img src={hours_clock} alt="" style={{ width: 28, height: 28 }} />, title: '24/7', sub: 'Emergency support' },
          ].map((f, i) => (
            <React.Fragment key={f.title}>
              <div className="pc-feature-item">
                <div className="pc-feature-icon-wrap">{f.icon}</div>
                <div>
                  <div className="pc-feature-title">{f.title}</div>
                  <div className="pc-feature-sub">{f.sub}</div>
                </div>
              </div>
              {i < 3 && <div className="pc-vdivider" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Comparison / What We Do ── */
const WhatWeDo = () => (
  <section id="what-we-do" style={{ background: '#faf6f0', padding: '20px 0 80px' }}>
    <div className="pc-container" style={{ position: 'relative' }}>

      {/* Decorative dot grid at top right behind the card */}
      <div className="pc-comparison-dots">
        {Array.from({ length: 36 }).map((_, i) => <div key={i} className="pc-comparison-dot" />)}
      </div>

      <div className="pc-comparison-card">
        <div className="pc-comparison-inner">
          <div className="pc-comparison-left">
            <div className="pc-comparison-label">WHAT WE DO</div>
            <div className="pc-comparison-label-line" />
            <h2 className="pc-comparison-h2">
              We handle<br className="pc-br-desktop" /> coordination.<br className="pc-br-desktop" /> <span className="pc-comparison-h2-blue">Your doctors<br className="pc-br-desktop" /> handle care.</span>
            </h2>
          </div>

          <div className="pc-comparison-right">
            {[
              { icon: <img src={Organized_Icon} alt="" style={{ width: 24, height: 24 }} />, text: 'Organize and digitize your complete medical records' },
              { icon: <img src={Appointment} alt="" style={{ width: 24, height: 24 }} />, text: 'Coordinate appointments, tests, and follow-ups' },
              { icon: <img src={healtcare_Light} alt="" style={{ width: 24, height: 24 }} />, text: 'Build a personalized care and emergency plan' },
              { icon: <img src={hospital} alt="" style={{ width: 24, height: 24 }} />, text: 'FastTrack access at partner hospitals' },
              { icon: <img src={Love} alt="" style={{ width: 24, height: 24 }} />, text: 'Dedicated health assistant for your family' },
            ].map((item, i) => (
              <div key={i} className="pc-feature-row">
                <div className="pc-feature-row-icon">{item.icon}</div>
                <div className="pc-feature-row-text">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="pc-comparison-disclaimer">
          We work <span style={{ color: '#b9d5ff', fontWeight: 600 }}>alongside</span> your existing doctors - <span style={{ color: '#b9d5ff', fontWeight: 600 }}>not</span> replace them.
        </div>
      </div>
    </div>
  </section>
);

/* ── Steps ── */
const Steps = () => (
  <section id="how-it-works" style={{ background: '#faf6f0', padding: '20px 0 80px' }}>
    <div className="pc-container">
      <FadeIn>
        <div style={{ textAlign: 'center', marginBottom: 12 }}>
          <span className="pc-pill">HOW IT WORKS</span>
        </div>
        <h2 className="pc-h2" style={{ textAlign: 'center', marginTop: 16 }}>Three steps to <span style={{ color: '#1147a8' }}>stress-free healthcare</span></h2>
        <p className="pc-sub" style={{ textAlign: 'center', marginTop: 12 }}>
          We become your healthcare proxy from day one - here's exactly what that looks like.
        </p>
      </FadeIn>

      <div className="pc-steps-grid" style={{ marginTop: 48 }}>
        {/* connector placeholders are inside the grid via absolute overlay */}
        {[
          {
            num: '01', icon: <img src={Records} alt="" style={{ width: 56, height: 56 }} />,
            title: 'Digitized Medical Records',
            desc: 'We collect complete medical history of patients, digitise all the reports, and create a clear health summary ready for any doctor visit or emergency.',
            tags: ['Medical history collection', 'Key vitals recorded', 'Reports digitised in EMR'],
          },
          {
            num: '02', icon: <img src={Plan} alt="" style={{ width: 56, height: 56 }} />,
            title: 'Personalised Health Planning',
            desc: 'We build a personalised care plan for patients so the screenings, check-ups, and health goals never get missed.',
            tags: ['Recommended screenings', 'Emergency care plan', 'Personalised health plan'],
          },
          {
            num: '03', icon: <img src={customer_service} alt="" style={{ width: 56, height: 56 }} />,
            title: 'Ongoing support',
            desc: 'Dedicated Health Assistant coordinates everything from routine visits to specialist connections, so nothing falls through the cracks.',
            tags: ['Doctor visit coordination', 'Hospital follow-ups', 'Billing and insurance coordination'],
          },
        ].map((s, i) => (
          <FadeIn key={s.num} className="pc-step-card" delay={i * 150}>
            <div className="pc-step-num">{s.num}</div>
            <div className="pc-step-icon-bg">{s.icon}</div>
            <div className="pc-step-title">{s.title}</div>
            <div className="pc-step-desc">{s.desc}</div>
            <div className="pc-step-tags">
              {s.tags.map(t => <span key={t} className="pc-tag">{t}</span>)}
            </div>
          </FadeIn>
        ))}

        {/* Step Connectors */}
        <div className="pc-step-connector pc-conn-1">
          <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </div>
        <div className="pc-step-connector pc-conn-2">
          <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </div>
      </div>
    </div>
  </section>
);

/* ── Services ── */
const Services = () => (
  <section style={{ background: '#faf6f0', padding: '20px 0 80px' }}>
    <div className="pc-container">
      <FadeIn>
        <div style={{ textAlign: 'center' }}>
          <span className="pc-pill">OUR SERVICES</span>
          <h2 className="pc-h2" style={{ marginTop: 16 }}>Everything your family's <span style={{ color: '#1147a8' }}>health needs</span></h2>
          <p className="pc-sub" style={{ marginTop: 12 }}>From routine care to emergencies - we coordinate it all on your behalf.</p>
        </div>
      </FadeIn>
      <div className="pc-services-grid">
        {[
          { icon: <img src={Digitized_Records} alt="" style={{ width: 32, height: 32 }} />, title: 'Digitized medical records', desc: 'All reports in one secure place - with a personalized health plan and medical summary, accessible through a simple app whenever you need them.' },
          { icon: <img src={Appointment_Co} alt="" style={{ width: 32, height: 32 }} />, title: 'Appointment coordination', desc: 'Scheduled, tracked, and followed through - no delays, no missed check-ups.' },
          { icon: <img src={Digitize_Health} alt="" style={{ width: 32, height: 32 }} />, title: 'Dedicated health assistant', desc: 'One person who knows your family\'s health and manages all coordination on your behalf.' },
          { icon: <img src={Fastrack_Hospital} alt="" style={{ width: 32, height: 32 }} />, title: 'FastTrack Access', desc: 'Priority access at partner hospitals. Faster appointments, shorter waits, smoother discharge.' },
          { icon: <img src={ambulance} alt="" style={{ width: 32, height: 32 }} />, title: 'Emergency support', desc: 'Updated records and an emergency plan ready - so your family is never caught off guard.' },
          { icon: <img src={customer_service} alt="" style={{ width: 32, height: 32 }} />, title: 'Specialist connect', desc: 'Connections to nutritionists, physiotherapists, and specialists coordinated as needed.' },
        ].map((c, i) => (
          <FadeIn key={c.title} className="pc-service-card" delay={i * 100}>
            <div className="pc-service-icon">{c.icon}</div>
            <div className="pc-service-title">{c.title}</div>
            <div className="pc-service-divider" />
            <div className="pc-service-desc">{c.desc}</div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ── Use Cases ── */
const UseCases = () => (
  <section style={{ background: '#faf6f0', padding: '20px 0 80px' }}>
    <div className="pc-container-sm">
      <FadeIn>
        <div style={{ textAlign: 'center' }}>
          <span className="pc-pill">WHEN PROXYCARE HELPS</span>
          <h2 className="pc-h2" style={{ marginTop: 16 }}>Does this sound <span style={{ color: '#1147a8' }}>like you?</span></h2>
          <p className="pc-sub" style={{ marginTop: 12 }}>Proxycare is especially useful in these situations.</p>
        </div>
      </FadeIn>
      <div className="pc-use-cases-grid">
        {[
          { icon: <img src={health} alt="" style={{ width: 40, height: 40 }} />, title: "You're too busy to manage healthcare", desc: "Work, family, life - healthcare coordination keeps slipping. We take that off your plate entirely." },
          { icon: <img src={healtcare_svg} alt="" style={{ width: 40, height: 40 }} />, title: "Your parents need regular care", desc: "Whether they're nearby or far away, we ensure consistent, coordinated care for them." },
          { icon: <img src={door} alt="" style={{ width: 40, height: 40 }} />, title: "You live away from your family", desc: "We're your on-ground coordinator so distance doesn't mean your family goes without support." },
          { icon: <img src={Stack} alt="" style={{ width: 40, height: 40 }} />, title: "You just want it organized", desc: "Records, plans, providers - all in one structured place. Peace of mind for the whole family." },
        ].map((c, i) => (
          <FadeIn key={c.title} className="pc-use-case-card" delay={i * 150}>
            <div className="pc-use-case-icon">{c.icon}</div>
            <div>
              <div className="pc-use-case-title">{c.title}</div>
              <div className="pc-use-case-line" />
              <div className="pc-use-case-desc">{c.desc}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ── Subscription CTA ── */
const SubscriptionCTA = () => (
  <section style={{ background: '#faf6f0', padding: '0 0 80px' }}>
    <div className="pc-container" style={{ padding: '0 24px' }}>
      <FadeIn>
        <div style={{
          background: 'linear-gradient(to right, #0d2137, #1147a8)',
          borderRadius: 32,
          padding: '56px 40px',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 20
        }}>
          <h2 style={{ fontSize: 36, fontWeight: 600, margin: 0, fontFamily: '"Playfair Display", serif' }}>
            Does this feel like you?
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 760, margin: 0, opacity: 0.9 }}>
            Get the support, structure, and ongoing care coordination your family needs all through one subscription.
            <br /><br />
            Reach out to learn about our subscription plans and find the right fit for your family.
          </p>
          <Link to="/contact" className="pc-btn-primary" style={{ background: '#fff', color: '#0d2137', marginTop: 16 }}>
            CONTACT US
          </Link>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ── Team ── */
const Team = () => (
  <section id="our-team" style={{ background: '#faf6f0', padding: '20px 0 80px' }}>
    <div className="pc-container">
      <FadeIn>
        <div style={{ textAlign: 'center' }}>
          <span className="pc-pill">OUR TEAM</span>
          <h2 className="pc-h2" style={{ marginTop: 16 }}>Built by people <span style={{ color: '#1147a8' }}>who care about care</span></h2>
          <p className="pc-sub" style={{ marginTop: 12 }}>Medical expertise, technology leadership, and a shared belief that healthcare should be personal.</p>
        </div>
      </FadeIn>
      <div className="pc-team-grid">
        {[
          { photo: Parvez_Image, initials: 'PM', name: 'Parvez Mansuri', role: 'Co-Founder', bio: 'Three decades of global technology and operations leadership. Co-founded Proxycare on the belief that healthcare should be personal, seamless, and human.' },
          { photo: undefined, initials: 'JP', name: 'Dr. Jagat Patel', role: 'Co-Founder', bio: 'Physician with years of clinical experience and a passion for patient advocacy. Co-founded Proxycare to bring compassionate, coordinated care to every family.' },
        ].map((m, i) => (
          <FadeIn key={m.name} className="pc-team-card" delay={i * 200}>
            {m.photo ? (
              <img src={m.photo} alt={m.name} className="pc-team-photo" />
            ) : (
              <div className="pc-team-photo">{m.initials}</div>
            )}
            <div className="pc-team-name">{m.name}</div>
            <div className="pc-team-line" />
            <div className="pc-team-role">{m.role}</div>
            <div className="pc-team-bio">{m.bio}</div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ── Testimonials ── */
const Testimonials = () => {
  const testimonials = [
    {
      quote: '"I stopped worrying about my parents\' health from Bangalore."',
      body: 'Proxycare handles everything I used to stress over — doctor visits, follow-ups, medications. It\'s like having a trusted person on the ground for my parents.',
      author: 'Rahul S.', role: 'IT PROFESSIONAL, Ahmedabad', initial: 'R',
    },
    {
      quote: '"FastTrack made my father\'s hospital visit completely different."',
      body: 'We used to spend hours for a 20-minute consultation. With FastTrack, everything was arranged — registration, tests, even discharge. A completely different experience.',
      author: 'Meena K.', role: 'BUSINESS OWNER, Mumbai', initial: 'M',
    },
    {
      quote: '"Having all records in one place saved us from repeated tests."',
      body: 'Every test, specialist note or lab is here now. Now we walk in with a complete summary. It saves time, money, and a lot of frustration.',
      author: 'Suresh P.', role: 'RETIRED PROFESSIONAL, Pune', initial: 'S',
    },
    {
      quote: '"The emergency coordination was incredibly fast and reassuring."',
      body: 'When my mother had a sudden health scare late at night, Proxycare guided us, coordinated with the hospital, and handled the paperwork. We felt completely supported.',
      author: 'Amit V.', role: 'BUSINESS OWNER, Pune', initial: 'A',
    },
    {
      quote: '"Finally, a service that manages all healthcare logistics flawlessly."',
      body: 'No more lost reports or repeating histories to different specialists. Proxycare manages everything flawlessly, saving us hours of stressful phone calls and back-and-forth.',
      author: 'Sneha R.', role: 'HR LEAD, Hyderabad', initial: 'S',
    },
  ];

  // Duplicate the list to create the seamless infinite scroll effect
  const doubleTestimonials = [...testimonials, ...testimonials];

  return (
    <section style={{ background: '#faf6f0', padding: '20px 0 80px', overflow: 'hidden' }}>
      <div className="pc-container">
        <div style={{ textAlign: 'center' }}>
          <span className="pc-pill">WHAT MEMBERS SAY</span>
          <h2 className="pc-h2" style={{ marginTop: 16 }}>Real families. <span style={{ color: '#1147a8' }}>Real experiences.</span></h2>
          <p className="pc-sub" style={{ marginTop: 12 }}>Hear from families who've experienced the Proxycare difference.</p>
        </div>
      </div>

      <div className="pc-testimonials-marquee-container">
        <div className="pc-testimonials-track">
          {doubleTestimonials.map((t, idx) => (
            <div key={`${t.author}-${idx}`} className="pc-testimonial-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className="pc-stars">
                  {[1, 2, 3, 4, 5].map(i => (
                    <img key={i} src={StarIcon} alt="Star" style={{ width: 18, height: 18 }} className="pc-star" />
                  ))}
                </div>
                <img src={Ifen} alt="Quote" className="pc-quote-mark" style={{ width: 34, height: 24 }} />
              </div>
              <div className="pc-testimonial-text">{t.quote}</div>
              <div className="pc-testimonial-body">{t.body}</div>
              <div className="pc-testimonial-author">
                <div className="pc-author-avatar">{t.initial}</div>
                <div>
                  <div className="pc-author-name">{t.author}</div>
                  <div className="pc-author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


/* ── FAQ ── */
const faqs = [
  {
    q: 'What exactly is Proxycare?',
    a: 'Proxycare is an independent healthcare coordination service. We act as your proxy — handling the logistics of healthcare on your behalf. We organize your medical records, coordinate appointments and follow-ups, and support you during hospital visits and emergencies — so you don\'t have to manage it all alone.'
  },
  {
    q: 'Who is a dedicated health assistant?',
    a: 'Your health assistant is a trained coordinator assigned specifically to your family. They manage appointment bookings, coordinate tests and follow-ups, support you during hospital visits, and ensure your care plan is followed consistently - one person handling your entire healthcare journey.'
  },
  {
    q: 'Does Proxycare give medical advice or diagnose conditions?',
    a: 'No. Proxycare handles coordination, not clinical care. We never diagnose, prescribe, or advise on treatment. All medical decisions remain with your doctors. Our role is simply to make sure those decisions are carried out - on time, without gaps.'
  },
  {
    q: 'Will Proxycare replace my existing doctors?',
    a: 'Not at all. We work alongside your existing doctors and hospitals - never independently of them. You keep all your current doctor relationships. Proxycare simply makes sure your care is better organized and followed through.'
  },
  {
    q: 'Can Proxycare help manage my parent\'s healthcare remotely?',
    a: 'Absolutely - this is one of our most common use cases. If you\'re based in another city or abroad, Proxycare acts as your on-ground coordinator for your parents, managing visits, tests, follow-ups, and emergencies, and keeping you informed at every step.'
  },
  {
    q: 'What is FastTrack and which hospitals does it cover?',
    a: 'FastTrack is our priority coordination service available at partner hospitals. It ensures pre-arranged appointments within a ±15-minute window, faster registration, on-ground support during the visit, and a smoother discharge process. Contact us to know which hospitals are currently in our network.'
  },
  {
    q: 'Is Proxycare an insurance or pharmacy service?',
    a: 'No. Proxycare is a membership-based coordination service not an insurance product or pharmacy. We can assist with insurance paperwork, billing coordination, and medication facilitation as part of our support - but we do not provide medical coverage or dispense medication.'
  },
  {
    q: 'Can I use Proxycare alongside my existing insurance?',
    a: 'Yes. Proxycare works independently of your insurance. We coordinate care and can help with insurance-related paperwork and billing, but we are a separate coordination membership not tied to any insurance plan.'
  },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="faq" className="pc-faq-section" style={{ padding: '20px 0 80px' }}>
      <div className="pc-container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="pc-pill pc-faq-pill">FAQ</span>
          <h2 className="pc-faq-title">
            Common <span className="pc-faq-title-italic">questions</span>
          </h2>
          <p className="pc-faq-subtitle">Everything you need to know before getting started.</p>
        </div>
        <div className="pc-accordion">
          {faqs.map((f, i) => (
            <div key={i} className="pc-accordion-item">
              <button className="pc-accordion-header" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                <span className="pc-accordion-q">{f.q}</span>
                <img
                  src={Plus_Icon}
                  alt="toggle"
                  className={`pc-accordion-icon ${openIdx === i ? 'open' : ''}`}
                  style={{ width: 24, height: 24 }}
                />
              </button>
              <div className={`pc-accordion-collapse ${openIdx === i ? 'open' : ''}`}>
                <div className="pc-accordion-body-inner">
                  <div className="pc-accordion-body-content">{f.a}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const raw = location.hash.replace(/^#/, '');
    if (!raw || !(SECTION_IDS as readonly string[]).includes(raw)) return;
    const t = window.setTimeout(() => {
      scrollToSectionId(raw, 'smooth');
    }, 80);
    return () => window.clearTimeout(t);
  }, [location.pathname, location.hash]);

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Steps />
      <Services />
      <UseCases />
      <SubscriptionCTA />
      <Team />
      {/* <Testimonials /> */}
      <FAQ />
      <Footer />
    </div>
  );
}
