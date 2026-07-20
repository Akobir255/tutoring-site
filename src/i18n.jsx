import { createContext, useContext, useEffect, useState } from 'react'

const STRINGS = {
  en: {
    nav: {
      learn: 'Video lessons',
      courses: 'Courses',
      why: 'Why me',
      process: 'How it works',
      results: 'Results',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Book a Free Trial',
    },

    hero: {
      eyebrow: 'One-on-one online tutoring',
      headline1: 'Master SAT & IGCSE Math',
      headline2: 'with Expert Online Tutoring',
      sub: 'Personalized one-on-one lessons for the Digital SAT and Cambridge IGCSE / A-Level Math — taught by an 800/800 tutor who finds the reason behind every wrong answer.',
      ctaPrimary: 'Book a Free Trial',
      ctaSecondary: 'Contact Me',
      trust: '800/800 SAT Math · 500+ students taught',
      chip1: '+110 pts in 2 months',
      chip2: '800/800 SAT Math',
    },

    why: {
      eyebrow: 'Why choose me',
      heading: 'Tutoring built around how you actually think',
      sub: 'Not a script, not a big group class — a plan made for one student: you.',
      items: [
        {
          icon: 'target',
          title: 'Personalized lessons',
          text: 'The first session maps exactly where mistakes come from — a gap, a misread, or timing — so every lesson targets your real weak points.',
        },
        {
          icon: 'strategy',
          title: 'Proven exam strategies',
          text: 'Pacing plans, answer-elimination tactics, and mark-scheme precision drawn from real SAT and Cambridge papers.',
        },
        {
          icon: 'calendar',
          title: 'Flexible online scheduling',
          text: 'Lessons fit around school and time zones. Reschedule easily when life happens — no lost lessons.',
        },
        {
          icon: 'paper',
          title: 'Practice exams',
          text: 'Full-length, timed SAT and IGCSE mock exams, marked the way the exam board actually marks them.',
        },
        {
          icon: 'chart',
          title: 'Progress tracking',
          text: 'Score reports after every mock, so you and your parents always know exactly where you stand and what comes next.',
        },
        {
          icon: 'person',
          title: 'One-on-one instruction',
          text: '100% of every session is about you. Ask anything, go slower or faster — the lesson adapts in real time.',
        },
      ],
      cta: 'See it for yourself — book a free trial',
    },

    courses: {
      eyebrow: 'Courses',
      heading: 'Two exams. One way of thinking clearly under pressure.',
      featured: [
        {
          tag: 'SAT',
          title: 'SAT Math',
          desc: 'Digital SAT strategy and content — algebra, advanced math, problem-solving & data analysis, and geometry/trig. Timing drills included.',
          points: ['Full-length practice tests', 'Section-by-section pacing', 'Score-target roadmap'],
        },
        {
          tag: 'Cambridge',
          title: 'IGCSE Mathematics',
          desc: 'Syllabus-aligned coverage for IGCSE Math (0580/0606) and A-Level Math / Further Math, mapped directly to exam-board mark schemes.',
          points: ['Past-paper walkthroughs', 'Mark-scheme precision', 'Pure, Mechanics & Stats tracks'],
        },
      ],
      extras: [
        {
          title: 'Exam preparation',
          text: 'Structured countdown plans for test day — content review, mocks, and pacing in the final weeks.',
        },
        {
          title: 'Homework help',
          text: 'Stuck on school assignments? Work through them together and actually understand each step.',
        },
        {
          title: 'Intensive revision',
          text: 'Short, high-frequency sprint courses before exam season to close gaps fast.',
        },
      ],
      cta: 'Not sure which fits? Start with a free trial',
    },

    process: {
      eyebrow: 'How it works',
      heading: 'From first message to target score in four steps',
      steps: [
        {
          title: 'Free consultation',
          text: 'A 30-minute call to talk goals, exam dates, and current level. No obligation to continue.',
        },
        {
          title: 'Assessment',
          text: 'A short diagnostic test shows exactly which topics need work — and which ones don\u2019t.',
        },
        {
          title: 'Weekly lessons',
          text: 'One-on-one sessions with targeted homework and regular timed practice in between.',
        },
        {
          title: 'Achieve your target score',
          text: 'Mock-exam scores are tracked until you walk into the real exam already knowing you can do it.',
        },
      ],
      cta: 'Take step one today — it\u2019s free',
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
      book: 'Book a Free Trial',
      follow: 'Follow the channel →',
    },

    testimonials: {
      eyebrow: 'Student testimonials',
      heading: 'In their own words',
      quotes: [
        {
          quote: 'My SAT math score went up 110 points in two months. The sessions felt more like problem-solving than lectures.',
          name: 'Student',
          role: 'SAT prep',
        },
        {
          quote: 'Finally understood how the mark scheme actually awards points — that changed how I write out solutions.',
          name: 'Student',
          role: 'Cambridge A-Level',
        },
        {
          quote: 'Clear, patient, and always explained why an approach worked, not just that it did.',
          name: 'Parent',
          role: 'of an IGCSE student',
        },
      ],
    },

    results: {
      eyebrow: 'Results',
      heading: 'Numbers that speak for themselves',
      stats: [
        { value: 500, suffix: '+', label: 'students taught' },
        { value: 800, suffix: '/800', label: 'tutor\u2019s own SAT Math score' },
        { value: 2, suffix: '+ yrs', label: 'of online teaching' },
        { value: null, display: 'A*', label: 'Cambridge A-Level Math' },
      ],
      cta: 'Your score could be next',
    },

    faq: {
      eyebrow: 'FAQ',
      heading: 'Common questions',
      items: [
        {
          q: 'How do online lessons work?',
          a: 'Lessons run over video call with a shared digital whiteboard, so we solve problems together in real time. You\u2019ll get notes and homework after each session, and you can rewatch worked examples on the video-lessons page any time.',
        },
        {
          q: 'How long is a lesson, and how often should we meet?',
          a: 'A standard lesson is 60 minutes. Most students meet twice a week, plus timed practice between sessions. Before an exam, many switch to an intensive schedule — we\u2019ll pick the rhythm that fits your dates.',
        },
        {
          q: 'How much do lessons cost?',
          a: 'Pricing depends on the course and how many lessons per week you choose. Book the free consultation and you\u2019ll get a clear plan with exact pricing — no surprises, no pressure.',
        },
        {
          q: 'Is the trial lesson really free?',
          a: 'Yes — 30 minutes, one real problem from your syllabus, and honest feedback on where you stand. There\u2019s no obligation to continue.',
        },
        {
          q: 'What does my child need for classes?',
          a: 'Just a laptop or tablet with a stable internet connection, and paper for working. Everything else — problems, whiteboard, practice tests — is provided.',
        },
        {
          q: 'How quickly will scores improve?',
          a: 'It depends on the starting point and practice consistency. With two lessons a week plus homework, students typically see clear mock-score improvement within the first month, and larger jumps over two to three months.',
        },
      ],
      cta: 'Still have a question? Ask it in a free consultation',
    },

    contact: {
      eyebrow: 'Contact',
      heading: 'Start with a free trial lesson',
      sub: '30 minutes, one real problem from your syllabus, no obligation to continue. Message me on any channel — or send the form and I\u2019ll reply within a day.',
      form: {
        name: 'Your name',
        namePh: 'e.g. Aziz',
        contact: 'Email or phone',
        contactPh: 'So I can reply to you',
        exam: 'Which exam?',
        examOptions: ['SAT Math', 'IGCSE Mathematics', 'A-Level Math', 'Not sure yet'],
        message: 'Message',
        messagePh: 'Current level, target score, exam date\u2026',
        submit: 'Send message',
        note: 'The form opens your email app with everything pre-filled.',
      },
      channels: {
        heading: 'Or reach me directly',
        whatsapp: 'WhatsApp',
        telegram: 'Telegram',
        email: 'Email',
        calendar: 'Book a time on the calendar',
      },
    },

    footer: {
      blurb: 'One-on-one online tutoring for SAT Math and Cambridge IGCSE / A-Level Mathematics.',
      navHeading: 'Site',
      contactHeading: 'Contact',
      followHeading: 'Follow',
      home: 'Home',
      subjects: 'SAT · Cambridge IGCSE · A-Level Math',
    },
  },

  uz: {
    nav: {
      learn: 'Video darslar',
      courses: 'Kurslar',
      why: 'Nega aynan men',
      process: 'Qanday ishlaydi',
      results: 'Natijalar',
      faq: 'Savol-javob',
      contact: 'Bog\u2018lanish',
      cta: 'Bepul sinov darsi',
    },

    hero: {
      eyebrow: 'Yakka tartibdagi onlayn darslar',
      headline1: 'SAT va IGCSE matematikani',
      headline2: 'tajribali repetitor bilan o\u2018zlashtiring',
      sub: 'Digital SAT va Cambridge IGCSE / A-Level matematikadan yakka tartibdagi darslar — har bir xatoning sababini topadigan, 800/800 natijali repetitor bilan.',
      ctaPrimary: 'Bepul sinov darsi',
      ctaSecondary: 'Bog\u2018lanish',
      trust: 'SAT Math 800/800 · 500 dan ortiq o\u2018quvchi',
      chip1: '2 oyda +110 ball',
      chip2: 'SAT Math 800/800',
    },

    why: {
      eyebrow: 'Nega aynan men',
      heading: 'Sizning fikrlashingizga moslangan darslar',
      sub: 'Tayyor qolip ham, katta guruh ham emas — bitta o\u2018quvchi uchun tuzilgan reja: siz uchun.',
      items: [
        {
          icon: 'target',
          title: 'Shaxsiy yondashuv',
          text: 'Birinchi darsda xatolar aynan qayerdan kelayotgani aniqlanadi — bilim bo\u2018shlig\u2018i, savolni noto\u2018g\u2018ri o\u2018qish yoki vaqt. Har bir dars aynan shu zaif nuqtalarga qaratiladi.',
        },
        {
          icon: 'strategy',
          title: 'Isbotlangan imtihon strategiyalari',
          text: 'Vaqt taqsimoti, javoblarni saralash usullari va mark scheme aniqligiga asoslangan yondashuv — haqiqiy SAT va Cambridge savollari asosida.',
        },
        {
          icon: 'calendar',
          title: 'Moslashuvchan jadval',
          text: 'Darslar maktab jadvali va vaqt mintaqangizga moslashadi. Kerak bo\u2018lsa darsni bemalol boshqa kunga ko\u2018chirish mumkin.',
        },
        {
          icon: 'paper',
          title: 'Amaliy imtihonlar',
          text: 'To\u2018liq hajmdagi, vaqt bilan o\u2018tkaziladigan SAT va IGCSE sinov imtihonlari — imtihon kengashi baholaganidek baholanadi.',
        },
        {
          icon: 'chart',
          title: 'Natijalar monitoringi',
          text: 'Har bir sinov imtihonidan keyin natijalar hisoboti — siz ham, ota-onangiz ham qayerda turganingizni doim aniq bilasiz.',
        },
        {
          icon: 'person',
          title: 'Yakka tartibdagi ta\u2019lim',
          text: 'Darsning 100 foizi faqat siz uchun. Istalgan savolni bering, tezroq yoki sekinroq boring — dars sizga moslashadi.',
        },
      ],
      cta: 'O\u2018zingiz ko\u2018ring — bepul sinov darsiga yoziling',
    },

    courses: {
      eyebrow: 'Kurslar',
      heading: 'Ikki imtihon. Bosim ostida ham aniq fikrlashning bitta yo\u2018li.',
      featured: [
        {
          tag: 'SAT',
          title: 'SAT Math',
          desc: 'Digital SAT strategiyasi va mavzulari — algebra, advanced math, masalalar yechish va ma\u2019lumotlar tahlili, geometriya/trigonometriya. Vaqtga mo\u2018ljallangan mashqlar ham kiradi.',
          points: ['To\u2018liq amaliy testlar', 'Har bo\u2018lim uchun vaqt taqsimoti', 'Maqsadli ballga yo\u2018l xaritasi'],
        },
        {
          tag: 'Cambridge',
          title: 'IGCSE Matematika',
          desc: 'IGCSE Math (0580/0606) va A-Level Math / Further Math bo\u2018yicha dasturga mos darslar, bevosita imtihon kengashi mark scheme\u2019lariga bog\u2018langan.',
          points: ['Past-paper tahlillari', 'Mark scheme bo\u2018yicha aniqlik', 'Pure, Mechanics va Stats yo\u2018nalishlari'],
        },
      ],
      extras: [
        {
          title: 'Imtihonga tayyorgarlik',
          text: 'Imtihon kunigacha aniq reja — so\u2018nggi haftalarda mavzularni takrorlash, sinov imtihonlari va vaqt mashqlari.',
        },
        {
          title: 'Uy vazifalariga yordam',
          text: 'Maktab topshirig\u2018ida qiynalyapsizmi? Birga yechamiz va har bir qadamni chinakam tushunib olasiz.',
        },
        {
          title: 'Jadal takrorlash',
          text: 'Imtihon mavsumi oldidan qisqa va tez-tez o\u2018tkaziladigan intensiv kurslar — bo\u2018shliqlarni tez yopish uchun.',
        },
      ],
      cta: 'Qaysi biri mos kelishini bilmaysizmi? Bepul sinov darsidan boshlang',
    },

    process: {
      eyebrow: 'Qanday ishlaydi',
      heading: 'Birinchi xabardan maqsadli ballgacha — to\u2018rt qadam',
      steps: [
        {
          title: 'Bepul maslahat',
          text: '30 daqiqalik suhbat: maqsadlar, imtihon sanalari va hozirgi daraja haqida. Davom etish majburiyati yo\u2018q.',
        },
        {
          title: 'Bilimni baholash',
          text: 'Qisqa diagnostik test qaysi mavzular ustida ishlash kerakligini — va qaysilari kerak emasligini aniq ko\u2018rsatadi.',
        },
        {
          title: 'Haftalik darslar',
          text: 'Yakka tartibdagi darslar, maqsadli uy vazifalari va oralig\u2018ida vaqt bilan mashqlar.',
        },
        {
          title: 'Maqsadli ballga erishish',
          text: 'Sinov imtihonlari natijalari kuzatib boriladi — haqiqiy imtihonga o\u2018zingizga to\u2018la ishonch bilan kirasiz.',
        },
      ],
      cta: 'Birinchi qadamni bugun tashlang — bu bepul',
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
      book: 'Bepul sinov darsi',
      follow: 'Kanalga obuna bo\u2018lish →',
    },

    testimonials: {
      eyebrow: 'O\u2018quvchilar fikri',
      heading: 'O\u2018quvchilar tilidan',
      quotes: [
        {
          quote: 'Ikki oyda SAT matematika natijam 110 ballga oshdi. Darslar ma\u2019ruzadan ko\u2018ra ko\u2018proq birga masala yechishga o\u2018xshardi.',
          name: 'O\u2018quvchi',
          role: 'SAT tayyorgarligi',
        },
        {
          quote: 'Mark scheme ballarni qanday berishini nihoyat tushundim — bu yechimlarni yozish uslubimni butunlay o\u2018zgartirdi.',
          name: 'O\u2018quvchi',
          role: 'Cambridge A-Level',
        },
        {
          quote: 'Aniq, sabrli va har doim usul nega ishlashini tushuntirardi, shunchaki ishlashini aytib qo\u2018ymasdi.',
          name: 'Ota-ona',
          role: 'IGCSE o\u2018quvchisining otasi',
        },
      ],
    },

    results: {
      eyebrow: 'Natijalar',
      heading: 'O\u2018zi uchun gapiradigan raqamlar',
      stats: [
        { value: 500, suffix: '+', label: 'o\u2018quvchi' },
        { value: 800, suffix: '/800', label: 'repetitorning SAT Math natijasi' },
        { value: 2, suffix: '+ yil', label: 'onlayn o\u2018qitish tajribasi' },
        { value: null, display: 'A*', label: 'Cambridge A-Level Math' },
      ],
      cta: 'Keyingi natija sizniki bo\u2018lishi mumkin',
    },

    faq: {
      eyebrow: 'Savol-javob',
      heading: 'Ko\u2018p beriladigan savollar',
      items: [
        {
          q: 'Onlayn darslar qanday o\u2018tadi?',
          a: 'Darslar videoqo\u2018ng\u2018iroq orqali, umumiy raqamli doskada o\u2018tadi — masalalarni real vaqtda birga yechamiz. Har darsdan keyin konspekt va uy vazifasi beriladi, ishlangan misollarni video darslar sahifasida istalgan vaqtda qayta ko\u2018rish mumkin.',
        },
        {
          q: 'Bir dars qancha davom etadi va haftasiga necha marta o\u2018tiladi?',
          a: 'Standart dars 60 daqiqa. Ko\u2018pchilik o\u2018quvchilar haftasiga ikki marta shug\u2018ullanadi, oralig\u2018ida esa vaqt bilan mashq qilinadi. Imtihon oldidan ko\u2018plar jadal jadvalga o\u2018tadi — sanalaringizga mos ritmni birga tanlaymiz.',
        },
        {
          q: 'Darslar qancha turadi?',
          a: 'Narx tanlangan kurs va haftasiga necha dars bo\u2018lishiga bog\u2018liq. Bepul maslahatga yoziling — aniq reja va aniq narxni olasiz. Kutilmagan qo\u2018shimchalar yo\u2018q, majburlash yo\u2018q.',
        },
        {
          q: 'Sinov darsi chindan ham bepulmi?',
          a: 'Ha — 30 daqiqa, dasturingizdan bitta haqiqiy masala va hozirgi darajangiz haqida halol fikr. Davom etish majburiyati yo\u2018q.',
        },
        {
          q: 'Darslar uchun nima kerak?',
          a: 'Barqaror internetli noutbuk yoki planshet va yozish uchun qog\u2018oz kifoya. Qolgan hammasi — masalalar, doska, amaliy testlar — biz tomondan beriladi.',
        },
        {
          q: 'Natijalar qanchalik tez o\u2018sadi?',
          a: 'Bu boshlang\u2018ich darajaga va mashqlarning muntazamligiga bog\u2018liq. Haftasiga ikki dars va uy vazifalari bilan o\u2018quvchilar odatda birinchi oydayoq sinov imtihonlarida aniq o\u2018sishni, ikki-uch oyda esa kattaroq sakrashni ko\u2018radi.',
        },
      ],
      cta: 'Savolingiz qoldimi? Bepul maslahatda so\u2018rang',
    },

    contact: {
      eyebrow: 'Bog\u2018lanish',
      heading: 'Bepul sinov darsidan boshlang',
      sub: '30 daqiqa, dasturingizdan bitta haqiqiy masala, davom etish majburiyati yo\u2018q. Istalgan kanal orqali yozing — yoki formani yuboring, bir kun ichida javob beraman.',
      form: {
        name: 'Ismingiz',
        namePh: 'Masalan: Aziz',
        contact: 'Email yoki telefon',
        contactPh: 'Javob berishim uchun',
        exam: 'Qaysi imtihon?',
        examOptions: ['SAT Math', 'IGCSE Matematika', 'A-Level Math', 'Hali aniq emas'],
        message: 'Xabar',
        messagePh: 'Hozirgi daraja, maqsadli ball, imtihon sanasi\u2026',
        submit: 'Xabar yuborish',
        note: 'Forma email ilovangizni tayyor matn bilan ochadi.',
      },
      channels: {
        heading: 'Yoki to\u2018g\u2018ridan-to\u2018g\u2018ri yozing',
        whatsapp: 'WhatsApp',
        telegram: 'Telegram',
        email: 'Email',
        calendar: 'Kalendardan vaqt tanlash',
      },
    },

    footer: {
      blurb: 'SAT Math va Cambridge IGCSE / A-Level matematikadan yakka tartibdagi onlayn darslar.',
      navHeading: 'Sahifalar',
      contactHeading: 'Bog\u2018lanish',
      followHeading: 'Ijtimoiy tarmoqlar',
      home: 'Bosh sahifa',
      subjects: 'SAT · Cambridge IGCSE · A-Level Math',
    },
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
