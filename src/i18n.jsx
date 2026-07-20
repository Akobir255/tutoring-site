import { createContext, useContext, useEffect, useState } from 'react'

const STRINGS = {
  en: {
    nav: { learn: 'Video lessons', subjects: 'Subjects', approach: 'Approach', tutor: 'Tutor', results: 'Results', cta: 'Book a trial lesson' },
    hero: {
      eyebrow: 'SAT & Cambridge Math Tutoring',
      line1: 'Every wrong answer',
      line2: 'has a reason.',
      line3: 'We find it.',
      sub: 'One-on-one tutoring for SAT Math and Cambridge IGCSE / A-Level Math — built around how you actually think, not a script.',
      ctaPrimary: 'Book a trial lesson',
      ctaSecondary: 'See subjects',
      trust: '800/800 SAT Math · 500+ students taught',
    },
    tutor: {
      eyebrow: 'Meet your tutor',
      bio: 'Presidential School graduate and full-time SAT & Cambridge math tutor. A perfect 800/800 on SAT Math and an A* in A-Level Math — and two years of online teaching spent helping more than 500 students get to their own best scores.',
      stats: [
        { value: '800/800', label: 'SAT Math score' },
        { value: 'A*', label: 'Cambridge A-Level Math' },
        { value: '500+', label: 'students taught' },
        { value: '2 yrs', label: 'online teaching' },
      ],
      message: 'Message on Telegram',
      book: 'Book a trial lesson',
      follow: 'Follow the channel →',
    },
    subjects: {
      eyebrow: 'What I teach',
      heading: 'Two exams. One way of thinking clearly under pressure.',
      cards: [
        {
          tag: 'SAT',
          title: 'SAT Math',
          desc: 'Digital SAT strategy and content — algebra, advanced math, problem-solving & data analysis, and geometry/trig. Timing drills included.',
          points: ['Full-length practice tests', 'Section-by-section pacing', 'Score-target roadmap'],
        },
        {
          tag: 'Cambridge',
          title: 'Cambridge IGCSE & A-Level Math',
          desc: 'Syllabus-aligned coverage for IGCSE Math (0580/0606) and A-Level Math/Further Math, mapped directly to exam board mark schemes.',
          points: ['Past-paper walkthroughs', 'Mark-scheme precision', 'Pure, Mechanics & Stats tracks'],
        },
      ],
    },
    approach: {
      eyebrow: 'How sessions work',
      heading: 'Not tricks. Understanding that survives a harder question.',
      principles: [
        {
          title: 'Diagnose before drilling',
          text: 'The first session maps exactly where a mistake comes from — a gap, a misread, or a timing problem — so practice targets the real issue.',
        },
        {
          title: 'Work the actual exam',
          text: 'Every session uses real SAT and Cambridge-style questions, marked the way the exam board actually marks them.',
        },
        {
          title: 'Show the reasoning, not just the answer',
          text: 'You learn to explain a step, not just recognize it — that\u2019s what holds up on test day when the question looks slightly different.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'Results',
      heading: 'In their own words',
      quotes: [
        { quote: 'My SAT math score went up 110 points in two months. The sessions felt more like problem-solving than lectures.', name: 'Student, SAT prep' },
        { quote: 'Finally understood how the mark scheme actually awards points — that changed how I write out solutions.', name: 'Student, Cambridge A-Level' },
        { quote: 'Clear, patient, and always explained why an approach worked, not just that it did.', name: 'Parent of student' },
      ],
    },
    booking: {
      heading: 'Start with a trial lesson.',
      sub: '30 minutes, one real problem from your syllabus, no obligation to continue.',
      telegram: 'Message on Telegram',
      email: 'Or email to book',
      note: 'Fastest reply on Telegram: @Nizomiddin_6585',
    },
    footer: { subjects: 'SAT · Cambridge IGCSE · A-Level Math' },
  },

  uz: {
    nav: { learn: 'Video darslar', subjects: 'Fanlar', approach: 'Yondashuv', tutor: 'Repetitor', results: 'Natijalar', cta: 'Sinov darsiga yoziling' },
    hero: {
      eyebrow: 'SAT va Cambridge matematika repetitorligi',
      line1: 'Har bir xatoning',
      line2: 'sababi bor.',
      line3: 'Biz uni topamiz.',
      sub: 'SAT Math va Cambridge IGCSE / A-Level matematikadan yakka tartibdagi darslar — tayyor qolip emas, sizning fikrlashingizga moslab quriladi.',
      ctaPrimary: 'Sinov darsiga yoziling',
      ctaSecondary: 'Fanlarni ko\u2018rish',
      trust: 'SAT Math 800/800 · 500 dan ortiq o\u2018quvchi',
    },
    tutor: {
      eyebrow: 'Repetitor bilan tanishing',
      bio: 'Prezident maktabi bitiruvchisi, SAT va Cambridge matematika bo\u2018yicha repetitor. SAT Math \u2014 800/800, A-Level Math \u2014 A*. Ikki yillik onlayn o\u2018qitish tajribasida 500 dan ortiq o\u2018quvchining o\u2018z eng yaxshi natijasiga erishishiga yordam bergan.',
      stats: [
        { value: '800/800', label: 'SAT Math natijasi' },
        { value: 'A*', label: 'Cambridge A-Level Math' },
        { value: '500+', label: 'o\u2018quvchi' },
        { value: '2 yil', label: 'onlayn o\u2018qitish tajribasi' },
      ],
      message: 'Telegramda yozish',
      book: 'Sinov darsiga yoziling',
      follow: 'Kanalga obuna bo\u2018lish →',
    },
    subjects: {
      eyebrow: 'Nimalarni o\u2018rgatamiz',
      heading: 'Ikki imtihon. Bosim ostida ham aniq fikrlashning bitta yo\u2018li.',
      cards: [
        {
          tag: 'SAT',
          title: 'SAT Math',
          desc: 'Digital SAT strategiyasi va mavzulari — algebra, advanced math, masalalar yechish va ma\u2019lumotlar tahlili, geometriya/trigonometriya. Vaqtga mo\u2018ljallangan mashqlar ham kiradi.',
          points: ['To\u2018liq amaliy testlar', 'Har bo\u2018lim uchun vaqt taqsimoti', 'Maqsadli ballga yo\u2018l xaritasi'],
        },
        {
          tag: 'Cambridge',
          title: 'Cambridge IGCSE va A-Level Math',
          desc: 'IGCSE Math (0580/0606) va A-Level Math/Further Math bo\u2018yicha dasturga mos darslar, bevosita imtihon kengashi mark scheme\u2019lariga bog\u2018langan.',
          points: ['Past-paper tahlillari', 'Mark scheme bo\u2018yicha aniqlik', 'Pure, Mechanics va Stats yo\u2018nalishlari'],
        },
      ],
    },
    approach: {
      eyebrow: 'Darslar qanday o\u2018tadi',
      heading: 'Hiyla emas. Qiyinroq savolda ham ishlaydigan tushuncha.',
      principles: [
        {
          title: 'Avval tashxis, keyin mashq',
          text: 'Birinchi darsda xato aynan qayerdan kelayotgani aniqlanadi — bilim bo\u2018shlig\u2018i, savolni noto\u2018g\u2018ri o\u2018qish yoki vaqt muammosi. Shunda mashqlar haqiqiy muammoga qaratiladi.',
        },
        {
          title: 'Haqiqiy imtihon savollari bilan ishlash',
          text: 'Har bir darsda haqiqiy SAT va Cambridge uslubidagi savollar ishlatiladi va ular imtihon kengashi baholaganidek baholanadi.',
        },
        {
          title: 'Javob emas, fikrlash yo\u2018lini ko\u2018rsatish',
          text: 'Siz qadamni faqat tanib olishni emas, uni tushuntirishni o\u2018rganasiz — imtihon kuni savol biroz boshqacha ko\u2018rinsa ham aynan shu asqotadi.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'Natijalar',
      heading: 'O\u2018quvchilar tilidan',
      quotes: [
        { quote: 'Ikki oyda SAT matematika natijam 110 ballga oshdi. Darslar ma\u2019ruzadan ko\u2018ra ko\u2018proq birga masala yechishga o\u2018xshardi.', name: 'O\u2018quvchi, SAT tayyorgarligi' },
        { quote: 'Mark scheme ballarni qanday berishini nihoyat tushundim — bu yechimlarni yozish uslubimni butunlay o\u2018zgartirdi.', name: 'O\u2018quvchi, Cambridge A-Level' },
        { quote: 'Aniq, sabrli va har doim usul nega ishlashini tushuntirardi, shunchaki ishlashini aytib qo\u2018ymasdi.', name: 'O\u2018quvchi ota-onasi' },
      ],
    },
    booking: {
      heading: 'Sinov darsidan boshlang.',
      sub: '30 daqiqa, dasturingizdan bitta haqiqiy masala, davom etish majburiyati yo\u2018q.',
      telegram: 'Telegramda yozish',
      email: 'Yoki email orqali yozing',
      note: 'Eng tez javob Telegramda: @Nizomiddin_6585',
    },
    footer: { subjects: 'SAT · Cambridge IGCSE · A-Level Math' },
  },
}

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('lang') || 'en'
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const changeLang = (next) => {
    setLang(next)
    try {
      localStorage.setItem('lang', next)
    } catch {
      // ignore
    }
  }

  return (
    <LangContext.Provider value={{ lang, setLang: changeLang, t: STRINGS[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
