import blogImg1 from '../assets/Blog_1_Img.png';
import blogImg2 from '../assets/Blog_2_Img.png';
import blogImg3 from '../assets/Blog_3_Img.png';
import blogImg4 from '../assets/Blog_4_Img.png';
import blogImg5 from '../assets/Blog_5_Img.png';

export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  intro: string[];
  sections: BlogSection[];
  closingTitle?: string;
  closingParagraphs?: string[];
};

export const blogPosts: BlogPost[] = [
  /*
  {
    slug: 'preventive-care-tips',
    image: blogImg1,
    category: 'Health Care',
    title: 'Preventive Care Tips: How High–Net–Worth Families Stay Ahead of Health Risks',
    excerpt: 'Discover how high-net-worth families stay ahead of health risks with preventive care and personalized wellness plans.',
    date: '05 Oct 2025',
    readTime: '7 min read',
    intro: [
      'In today’s fast-paced world, maintaining good health often takes a backseat – especially for affluent, busy, demanding lifestyles. Preventive medicine is working harder than ever with high-net-worth families to keep them healthy, with changes that build into routine and habit – not stress.',
      'Here’s what preventive care can mean. It isn’t just about check-ups or tests; it’s about making proactive choices tailored for your family. Here are five high-impact changes that could bring that next-level approach to health.'
    ],
    sections: [
      {
        heading: '1. Make Preventive Care a Lifestyle Habit',
        paragraphs: [
          'Build preventive schedules into the routine—regular screenings, wellness checks, and real-world consultations throughout the year.'
        ]
      },
      {
        heading: '2. Personalized Health Plans for Each Family Member',
        paragraphs: [
          'Medical needs, genetics, and goals differ. Leading families rely on personalized, physician-created plans—proactive testing, AI-driven recommendations, and digital check-ins.'
        ]
      },
      {
        heading: '3. Use Modern Data to Stay Ahead',
        paragraphs: [
          'Digital devices, genetic profiles, and secure health records put actionable insights in the hands of the family and their care team. Tech = health leverage.'
        ]
      },
      {
        heading: '4. Don’t Overlook Mental Wellness',
        paragraphs: [
          'Physical and mental well-being are connected. Top families invest in emotional intelligence, digital detox breaks, and stress reduction as core healthcare tactics.'
        ]
      },
      {
        heading: '5. Build a Long-Term Relationship with Trusted Care Providers',
        paragraphs: [
          'The greatest driver of effective preventive health is continuity. Having a doctor who truly knows your needs, and a health assistant available to answer questions or coordinate action, gives your family unmatched peace of mind.'
        ]
      }
    ],
    closingTitle: 'Staying Ahead is the Best Kind of Care',
    closingParagraphs: [
      'For families who value time, privacy, and health, preventive care is not a luxury. It’s lifestyle choice – made easier with Proxycare.'
    ]
  },
  */
  {
    slug: 'emergency-plan-matters',
    image: blogImg2,
    category: 'Health Care',
    title: 'What Is an Emergency Plan & Why It Matters',
    excerpt: 'Learn why every family needs an emergency health care plan and how preparation can improve response time, reduce confusion, and protect loved ones in a crisis.',
    date: '05 Oct 2025',
    readTime: '7 min read',
    intro: [
      'When life is running smoothly, few of us stop to think about emergencies - until they happen. But for families who value preparedness and peace of mind, having a well-structured emergency medical plan isn’t just smart - it’s essential.',
      'In healthcare, time is everything. When a crisis strikes - whether it’s a sudden allergic reaction, a cardiac event, or an accident - knowing what to do, who to call, and where to go can save precious minutes and, in some cases, lives.'
    ],
    sections: [
      {
        heading: '1. Understanding an Emergency Plan',
        paragraphs: [
          'An emergency plan is a proactive approach that outlines the critical steps to take when urgent medical care is needed. It’s more than just a list of hospitals or emergency numbers — it’s a well-orchestrated system that ensures your family receives the right care, at the right time, with zero confusion.',
          'For high-net-worth families who travel often or manage multiple residences, having a personalized plan brings structure and reliability. It ensures continuity of care — whether you’re at home, on vacation, or abroad.'
        ]
      },
      {
        heading: '2. Why Every Family Needs One',
        paragraphs: [
          'Even the most advanced medical systems can feel overwhelming during a crisis. Having a plan in place helps you:',
          '• Avoid panic and delay – When everyone knows what to do, response time improves dramatically.',
          '• Get the right help faster – Pre-identified hospitals, specialists, and care teams save crucial minutes.',
          '• Stay organized – With updated medical histories and insurance details ready, treatment begins sooner.',
          '• Ensure family coordination – Everyone, from parents to caregivers, understands their role in an emergency.',
          '• It’s not about fearing the worst — it’s about being ready for anything.',
          '• Avoid panic and delay – When everyone knows what to do, response time improves dramatically.'
        ]
      },
      {
        heading: '3. What an Effective Emergency Plan Includes',
        paragraphs: [
          'A strong plan covers several layers of preparedness:',
          '1. Personalized Medical Records: Digital access to health history, allergies, and prescriptions ensures doctors make quick, informed decisions.',
          '2. Preferred Healthcare Facilities: Pre-select hospitals or concierge medical providers that align with your family’s standards of care.',
          '3. Dedicated Emergency Contacts: Include family members, private doctors, and health assistants who can coordinate instantly.',
          '4. Travel and Remote Care Protocols: For families who split time between cities or countries, add details for teleconsultations and cross-location support.',
          '5. Travel and Remote Care Protocols: For families who split time between cities or countries, add details for teleconsultations and cross-location support.'
        ]
      },
      {
        heading: '4. Preparedness Is the New Luxury',
        paragraphs: [
          'True peace of mind doesn’t come from avoiding emergencies - it comes from knowing you’re ready to handle them. Families who invest in personalized, concierge-style healthcare don’t just react when things go wrong; they plan, prepare, and stay one step ahead.',
          'This shift from reactive to proactive care reflects a growing understanding: health security is an integral part of overall wellbeing and lifestyle quality.'
        ]
      },
      {
        heading: '5. Building Confidence Through Proactive Care',
        paragraphs: [
          'An emergency plan works best when integrated with ongoing preventive care - regular health assessments, virtual consultations, and coordinated follow-ups. It’s this blend of preparedness and prevention that keeps families confident, calm, and protected no matter what life brings.',
          'Be prepared for the unexpected. Experience peace of mind knowing your family’s healthcare is organized, responsive, and always within reach.'
        ]
      }
    ]
  },
  {
    slug: 'home-vs-hospital-care',
    image: blogImg3,
    category: 'Health Care',
    title: 'Home vs Hospital: Making the Right Decision in Urgent Situations',
    excerpt: 'Learn when a health issue can be managed at home versus the hospital, and how concierge medical care helps you make safer, more informed decisions.',
    date: '05 Oct 2025',
    readTime: '7 min read',
    intro: [
      'When a sudden health concern arises – whether it’s a high fever, chest discomfort, or an unexpected illness – one question often causes confusion for families: Should we go to the hospital, or can this be managed at home?',
      'Making the right decision in those moments can mean the difference between unnecessary stress and timely, effective care.'
    ],
    sections: [
      {
        heading: 'Understanding the Difference',
        paragraphs: [
          'Hospitals are designed for complex medical cases and emergencies that require specialized equipment, immediate interventions, or inpatient care. Home care, on the other hand, focuses on providing timely medical attention for non-life-threatening conditions—often with the comfort and familiarity of your own space. Concierge medical services bridge these two worlds. With dedicated primary care providers and on-call health assistants, families can receive expert assessments and treatment at home, reducing the need for frequent hospital visits.'
        ]
      },
      {
        heading: 'When Home Care Is Enough',
        paragraphs: [
          'Not every symptom requires a trip to the emergency room. Conditions often manageable at home include:',
          '• Mild to moderate fever',
          '• Minor injuries or sprains',
          '• Routine infections such as colds, coughs, or ear infections',
          '• Medication management and follow-ups',
          '• Preventive health consultations',
          'For many high-net-worth families, accessing professional medical guidance without stepping into a hospital provides comfort and minimizes exposure to crowded healthcare settings.'
        ]
      },
      {
        heading: 'When the Hospital Is Essential',
        paragraphs: [
          'Immediate hospital attention is necessary if you experience:',
          '• Severe chest pain or breathing difficulty',
          '• Signs of stroke (numbness, confusion, slurred speech)',
          '• Uncontrolled bleeding',
          '• Sudden loss of consciousness',
          '• Complications from chronic conditions like diabetes or heart disease',
          'In these situations, calling emergency services or heading straight to the nearest hospital is the right decision.'
        ]
      },
      {
        heading: 'The Power of Preparedness',
        paragraphs: [
          'Families with concierge medical support have an added advantage: expert guidance during uncertainty.',
          'Instead of making rushed decisions, they can instantly connect with a trusted physician who assesses symptoms, offers immediate recommendations, and coordinates care if a hospital visit is required.'
        ]
      }
    ],
    closingTitle: 'Peace of Mind Through Connected Care',
    closingParagraphs: [
      'Health isn’t just about treatment—it’s about confidence and control.',
      'Knowing when to seek hospital care versus when to rely on home support gives families peace of mind and ensures health decisions remain informed, proactive, and precise.',
      'Concierge medicine empowers families to stay prepared, connected, and confident in every health situation.',
      'Connect with a trusted care team that helps you make the right health decisions—anytime, anywhere.'
    ]
  },
  {
    slug: 'managing-diabetes-home',
    image: blogImg4,
    category: 'Health Care',
    title: 'Managing Diabetes at Home: Tools, Habits, and Care Support',
    excerpt: 'Learn how to manage diabetes at home with the right habits, monitoring tools, nutrition, activity routines, and concierge care support for better daily health.',
    date: '05 Oct 2025',
    readTime: '7 min read',
    intro: [
      'Living with diabetes means staying mindful every day — but it doesn’t have to feel overwhelming. Managing diabetes at home can bring both comfort and control when supported with the right habits, tools, and care. With proper guidance and routine, keeping blood sugar levels in check becomes a natural part of a healthy, confident life.',
      'Diabetes care extends far beyond checking glucose levels or taking medication. It’s about understanding how your lifestyle, diet, activity, and stress impact your body’s rhythm. Each person’s diabetes journey is unique, which makes individualized care — often available through concierge-style medical services — especially valuable.',
      'At its core, successful management involves monitoring, nutrition, physical activity, medication adherence, and emotional balance. But managing these elements at home requires structure and ongoing support.'
    ],
    sections: [
      {
        heading: '1. Building a Routine Around Blood Sugar Monitoring',
        paragraphs: [
          'Consistent glucose monitoring is the foundation of home-based diabetes management. Digital glucose meters and CGM devices make it easier to track trends in real time.',
          'Keeping a daily log — manually or through apps — helps identify patterns linked to meals, exercise, or stress. Concierge medical providers often review this data remotely, providing early adjustments to prevent fluctuations before they turn into complications.'
        ]
      },
      {
        heading: '2. Nutrition: Eating with Awareness, Not Restriction',
        paragraphs: [
          'A balanced diet doesn’t mean giving up favorite foods — it means learning the right proportions and timing. Prioritize fiber-rich vegetables, whole grains, lean proteins, and healthy fats while moderating simple carbs.',
          'Working with a nutritionist or a personalized care team ensures your meal plan fits your lifestyle. For busy families, having a dedicated care assistant who supports diet planning or home-chef coordination can be a game changer.',
          'It’s about empowerment through education, not restriction.'
        ]
      },
      {
        heading: '3. Staying Active and Mindful',
        paragraphs: [
          'Exercise is one of the most effective ways to regulate blood sugar naturally. Activities like walking, yoga, swimming, or light strength training enhance insulin sensitivity.',
          'Overexertion or skipping meals can cause sugar dips — that’s why personalized activity guidance is essential. Concierge programs often pair clients with wellness coaches or physiotherapists for safe, sustainable routines.'
        ]
      },
      {
        heading: '4. Medication and Regular Check-ins',
        paragraphs: [
          'Even with consistent home routines, medical oversight remains crucial. Concierge healthcare models simplify this with virtual consultations, medication reminders, and home lab sample collection for routine tests like HbA1c, cholesterol, and kidney function.',
          'These proactive measures ensure small deviations are caught early — before they become serious concerns.'
        ]
      },
      {
        heading: '5. Emotional Wellbeing and Family Involvement',
        paragraphs: [
          'Managing diabetes can feel isolating, especially with work and family responsibilities. Emotional stress can also raise blood sugar levels.',
          'A care model that includes mental health support and family education creates a supportive environment. Loved ones who understand early signs of low or high sugar can play a key role in maintaining balance.'
        ]
      },
      {
        heading: 'The Role of Concierge Care in Diabetes Management',
        paragraphs: [
          'Concierge or home-based healthcare brings convenience and consistency to diabetes care. It transforms the traditional clinic visit into a continuous care experience supported by professionals who know your medical history, lifestyle, and preferences.',
          'Whether it’s routine monitoring, at-home consultations, or coordinated specialist care, concierge models make preventive and chronic disease management more seamless. For individuals managing diabetes, this means fewer disruptions — and more time focusing on overall wellbeing.'
        ]
      }
    ],
    closingTitle: 'Conclusion',
    closingParagraphs: [
      'Managing diabetes at home isn’t just about discipline — it’s about designing a care system that adapts to your life. With personalized attention, structured monitoring, and compassionate support, individuals can live confidently without constantly worrying about fluctuating health.',
      'Experience healthcare designed around you.',
      'Connect with a dedicated team that supports your wellness right from your home.'
    ]
  },
  /*
  {
    slug: 'understanding-concierge-healthcare',
    image: blogImg5,
    category: 'Health Care',
    title: 'Understanding Concierge in Healthcare: How Proxycare Is Different',
    excerpt: 'Discover how concierge services in healthcare can enhance your medical experience. Learn about personalized care and support with Proxycare today.',
    date: '05 Oct 2025',
    readTime: '7 min read',
    intro: [
      'In today’s complex healthcare world, families often struggle with fragmented systems, long wait times, and a lack of personal connection. Concierge healthcare offers a better way — one built on continuity, accessibility, and personalized medical attention. For families who value trusted relationships and convenience, this approach redefines what quality care truly means.'
    ],
    sections: [
      {
        heading: 'What Is Concierge in Healthcare?',
        paragraphs: [
          'Concierge healthcare is a modern model that provides direct, continuous access to a dedicated care team — typically a Health Assistant and Family Physician — who manage all aspects of a family’s health within a coordinated system. Instead of navigating multiple hospitals and specialists who rarely communicate, families receive streamlined, preventive, and proactive care.'
        ]
      },
      {
        heading: 'Why Traditional Healthcare Feels Fragmented',
        paragraphs: [
          'Most traditional systems are reactive. Families face:',
          '• Multiple appointments across hospitals and labs',
          '• Limited follow-up after diagnosis or discharge',
          '• Repetition of tests and conflicting medical advice',
          '• Lack of ongoing support for chronic conditions',
          'This disconnect leads to frustration and missed opportunities for early intervention. Concierge healthcare bridges these gaps with continuity and personalized oversight.'
        ]
      },
      {
        heading: '1. Dedicated Care Team',
        paragraphs: [
          'Every family is supported by a Health Assistant and Family Physician who coordinate appointments, maintain records, and monitor ongoing conditions — ensuring no health detail is overlooked.'
        ]
      },
      {
        heading: '2. Preventive & Continuous Care',
        paragraphs: [
          'From annual check-ups and nutrition guidance to lifestyle management and chronic care follow-ups, Proxycare focuses on prevention, not reaction — keeping families healthy through consistent attention.'
        ]
      },
      {
        heading: '3. Hybrid Care Model',
        paragraphs: [
          'Care is available virtually or through in-home visits, offering comfort and convenience while maintaining high medical standards.'
        ]
      },
      {
        heading: '4. Care Management System',
        paragraphs: [
          'Proxycare’s smart ecosystem includes:',
          '• Centralized Electronic Medical Record (EMR)',
          '• Appointment and follow-up tracking',
          '• Emergency response coordination',
          '• Expert panel reviews for complex cases'
        ]
      },
      {
        heading: '5. Independent, Unbiased Care',
        paragraphs: [
          'Proxycare operates as an independent concierge medical service, unaffiliated with hospitals or pharmaceutical institutions. All recommendations are made solely in the patient’s best interest.'
        ]
      },
      {
        heading: 'Why It Matters for Families',
        paragraphs: [
          'For families seeking trustworthy, proactive, and comprehensive care, Proxycare bridges the gap between traditional healthcare and true personalized service. Whether it\'s preventive wellness, chronic condition management, or rapid emergency support, Proxycare ensures peace of mind and consistency that’s hard to find elsewhere.',
          'Choose healthcare that guides you all the way. Experience truly connected, compassionate, and continuous care — right from the comfort of your home.'
        ]
      }
    ]
  }
  */
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 4): BlogPost[] {
  return blogPosts.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
