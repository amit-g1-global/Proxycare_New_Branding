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
import records_top from '../assets/features_bar/records-top.svg';
import records_middle from '../assets/features_bar/records-middle.svg';
import records_bottom from '../assets/features_bar/records-bottom.svg';
import records_tick from '../assets/features_bar/records-tick.svg';
import feature_user from '../assets/features_bar/user.svg';
import feature_heart_add from '../assets/features_bar/heart-add.svg';
import feature_time from '../assets/features_bar/time-04.svg';
import hospital from '../assets/hospital.svg';

// Subscription (How it works)
import sub_records from '../assets/subscription/records.svg';
import sub_badge_check from '../assets/subscription/badge-check.svg';
import sub_user from '../assets/subscription/user.svg';
import sub_plan from '../assets/subscription/plan.svg';
import sub_time from '../assets/subscription/time-04.svg';

import Digitized_Records from '../assets/Digitized_Records.svg';

// Use Cases
import uc_files from '../assets/use_cases/files-02.svg';
import uc_health from '../assets/use_cases/health.svg';
import uc_door from '../assets/use_cases/door.svg';
import uc_give_blood from '../assets/use_cases/give-blood.svg';

// Subscription CTA
import cta_arrow from '../assets/cta/arrow-left-02.svg';

// Other
import StarIcon from '../assets/Star.svg';
import Plus_Icon from '../assets/Plus_Icon.svg';
import Minus_Icon from '../assets/Minus_Icon.svg';
import Ifen from '../assets/Ifen.svg';
import Parvez_Image from '../assets/Parvez.jpg';
import Jagat_Image from '../assets/Jagat.png';

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
              Your Personalised<br className="pc-br-desktop" /> <span className="pc-hero-nowrap">Healthcare Coordination</span><br className="pc-br-desktop" /> Platform
            </h1>
            <p className="pc-hero-desc">
              With a simple subscription you get a dedicated Health Assistant, who is your first point of contact for any healthcare needs, day or night.
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
            {
              icon: (
                <span className="pc-records-icon">
                  <span className="pc-records-layer pc-records-top"><img src={records_top} alt="" /></span>
                  <span className="pc-records-layer pc-records-middle"><img src={records_middle} alt="" /></span>
                  <span className="pc-records-layer pc-records-bottom"><img src={records_bottom} alt="" /></span>
                  <span className="pc-records-tick"><span className="pc-records-tick-mark"><img src={records_tick} alt="" /></span></span>
                </span>
              ),
              title: 'Fully Digitized',
              sub: 'Medical Records',
            },
            { icon: <img src={feature_user} alt="" style={{ width: 32, height: 32 }} />, title: 'Dedicated', sub: 'Health Assistant' },
            { icon: <img src={feature_heart_add} alt="" style={{ width: 32, height: 32 }} />, title: 'Personalised', sub: 'Health Plan' },
            { icon: <img src={feature_time} alt="" style={{ width: 32, height: 32 }} />, title: 'Emergency', sub: 'Care Plan' },
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

/* ── Subscription (How it works) ── */
const subscriptionCards = [
  {
    icon: <img src={sub_records} alt="" width={60} height={60} />,
    badge: 'small',
    title: 'Fully Digitized Medical Records',
    intro: 'We collect your medical history, digitize your reports, prescriptions, and vital signs, and organise them into a clear medical summary. Your records are regularly updated to keep your health information current. It is accessible to you and your doctors with just one click.',
    points: ['Medical history collection', 'Reports digitized in EMR', 'Medical summary created'],
  },
  {
    icon: <img src={sub_user} alt="" width={64} height={64} />,
    title: 'Dedicated Health Assistant',
    intro: 'Your dedicated Health Assistant keeps every aspect of your healthcare connected and organised, including:',
    points: ['Doctor appointments and follow-ups', 'Hospital, diagnostic, and pharmacy coordination', 'Digitised health records and medical summaries', 'Physiotherapy and wellness support'],
  },
  {
    icon: <img src={sub_plan} alt="" width={64} height={64} />,
    badge: 'large',
    title: 'Personalised Health Plan',
    intro: 'Our preventive care experts will work with you to create a personalised health plan tailored to your needs and health goals, including:',
    points: ['Identifying and managing potential health risks', 'A health plan tailored to your personal goals', 'Preventive screenings and follow-ups', 'A health calendar to track upcoming appointments and ensure nothing is missed'],
  },
  {
    icon: <img src={sub_time} alt="" width={64} height={64} />,
    title: 'Emergency Care Plan',
    intro: 'Our expert team creates a personalised emergency plan for you and your loved ones, including:',
    points: ['Pre-identified hospitals and ambulance services', 'Emergency access to your family physician', 'Medical summary shared before arrival', 'Priority support for admission, billing, and insurance coordination'],
  },
] as const;

const Steps = () => (
  <section id="how-it-works" className="pc-sub-section">
    <div className="pc-container">
      <FadeIn>
        <div className="pc-sub-head">
          <h2 className="pc-sub-h2">
            <span className="pc-sub-h2-dark">One Subscription</span>
            <span className="pc-sub-h2-blue">All Your Healthcare Needs, <span style={{ display: 'inline', whiteSpace: 'nowrap' }}>Co-ordinated</span></span>
          </h2>
          <div className="pc-sub-dots" aria-hidden="true">
            {Array.from({ length: 36 }).map((_, i) => <span key={i} />)}
          </div>
        </div>
      </FadeIn>

      <div className="pc-sub-grid">
        {subscriptionCards.map((c, i) => (
          <FadeIn key={c.title} className="pc-sub-card" delay={i * 100}>
            <div className="pc-sub-card-head">
              <div className="pc-sub-icon-bg">
                <div className="pc-sub-icon">
                  {c.icon}
                  {'badge' in c && (
                    <span className={`pc-sub-badge pc-sub-badge-${c.badge}`}>
                      <img src={sub_badge_check} alt="" width={16} height={16} />
                    </span>
                  )}
                </div>
              </div>
              <h3 className="pc-sub-card-title">{c.title}</h3>
            </div>
            <div className="pc-sub-card-body">
              <p>{c.intro}</p>
              <ul>
                {c.points.map(p => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ── Use Cases ── */
const UseCases = () => (
  <section className="pc-uc-section">
    <div className="pc-container">
      <div className="pc-uc-inner">
        <FadeIn>
          <div className="pc-sub-head">
            <h2 className="pc-uc-h2">Does this sound like you?</h2>
            <div className="pc-sub-dots" aria-hidden="true">
              {Array.from({ length: 36 }).map((_, i) => <span key={i} />)}
            </div>
          </div>
        </FadeIn>
        <div className="pc-use-cases-grid">
          {[
            { icon: uc_files, title: 'Your medical records are scattered', desc: 'Reports and prescriptions are spread across providers. We bring them together into one organised medical summary.' },
            { icon: uc_health, title: 'You want to stay ahead of your health', desc: 'We help you plan preventive screenings, and stay on track with follow-ups.' },
            { icon: uc_door, title: "You're not prepared for a medical emergency", desc: 'We help organise essential medical information and emergency contacts into an Emergency Care Plan.' },
            { icon: uc_give_blood, title: 'Your parents need care from a distance', desc: "We coordinate appointments, reports, and follow-ups to help keep your parents healthcare connected." },
          ].map((c, i) => (
            <FadeIn key={c.title} className="pc-use-case-card" delay={i * 150}>
              <div className="pc-use-case-icon"><img src={c.icon} alt="" width={48} height={48} /></div>
              <div className="pc-use-case-text">
                <h3 className="pc-use-case-title">{c.title}</h3>
                <div className="pc-use-case-line" />
                <p className="pc-use-case-desc">{c.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ── Subscription CTA ── */
const SubscriptionCTA = () => (
  <section style={{ background: '#faf6f0', padding: '0 0 80px' }}>
    <div className="pc-container" style={{ padding: '0 24px' }}>
      <FadeIn>
        <div className="pc-cta-card">
          <div className="pc-cta-label">
            <span>Get in touch</span>
            <i className="pc-cta-label-line" />
          </div>
          <h2 className="pc-cta-h2">Our team will be happy to assist you and your family</h2>
          <Link to="/contact" className="pc-cta-btn">
            Get Started
            <img src={cta_arrow} alt="" width={28} height={28} className="pc-cta-btn-arrow" />
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
          <h2 className="pc-section-h2">Built by people <span style={{ color: '#1147a8' }}>who care about care</span></h2>
          <p className="pc-sub" style={{ marginTop: 12 }}>Medical expertise, technology leadership, and a shared belief that healthcare should be personal.</p>
        </div>
      </FadeIn>
      <div className="pc-team-grid">
        {[
          { photo: Parvez_Image, initials: 'PM', name: 'Parvez Mansuri', role: 'Co-Founder', bio: 'Three decades of global technology and operations leadership. Co-founded Proxycare on the belief that healthcare should be personal, seamless, and human.' },
          { photo: Jagat_Image, initials: 'JP', name: 'Dr. Jagat Patel', role: 'Co-Founder', bio: 'Physician with years of clinical experience and a passion for patient advocacy. Co-founded Proxycare to bring compassionate, coordinated care to every family.' },
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
      body: 'Proxycare handles everything I used to stress over - doctor visits, follow-ups, medications. It\'s like having a trusted person on the ground for my parents.',
      author: 'Rahul S.', role: 'IT PROFESSIONAL, Ahmedabad', initial: 'R',
    },
    {
      quote: '"FastTrack made my father\'s hospital visit completely different."',
      body: 'We used to spend hours for a 20-minute consultation. With FastTrack, everything was arranged - registration, tests, even discharge. A completely different experience.',
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
    a: 'Proxycare is an independent healthcare coordination service. We act as your proxy - handling the logistics of healthcare on your behalf. We organize your medical records, coordinate appointments and follow-ups, and support you during hospital visits and emergencies - so you don\'t have to manage it all alone.'
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
      <Steps />
      <UseCases />
      <SubscriptionCTA />
      <Team />
      {/* <Testimonials /> */}
      <FAQ />
      <Footer />
    </div>
  );
}
