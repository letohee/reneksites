import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const STORAGE_KEY = "reneksites_lang";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        work: "Work",
        services: "Services",
        process: "Process",
        about: "About",
        contact: "Contact",
      },
      header: {
        ctaBgButton: "Call (BG line)",
        bgLabel: "BG: +359 876 877 095",
        ukLabel: "UK: +44 7908 894226",
      },
      languageSwitcher: {
        label: "Change language",
      },
      hero: {
        badge: "Launch in weeks, not months",
        titleSegments: [
          { text: "Websites that feel ", className: "" },
          {
            text: "premium",
            className: "bg-gradient-to-r from-emerald-300 to-white bg-clip-text text-transparent",
          },
          { text: " and convert.", className: "" },
        ],
        intro:
          "I’m Tony — a Computing graduate and freelance web developer. I build fast, modern websites with crisp motion and clear messaging.",
        subtext:
          "I also work in Bulgarian — translating content, forms, and offers so you can sell confidently to UK and BG clients.",
        primaryCta: "Get a quote",
        secondaryCta: "See work",
        badges: ["React + Tailwind", "Framer Motion", "Vercel deploy", "English & Bulgarian support"],
      },
      work: {
        eyebrow: "Selected Work",
        title: "Clean, fast, conversion-ready",
        subtitle: "Launches for UK & Bulgarian teams focused on bookings and sales.",
        description:
          "Every project ships with localized messaging, embedded commerce/booking flows, and analytics so visitors know exactly how to work with you.",
        projects: {
          asap: {
            title: "ASAP Mobile Car Battery Replacement",
            description:
              "24/7 emergency booking site with Bulgarian-friendly copy, instant quote flows, and CRM handoff for dispatch.",
            result: "Result: +42% quote completions in 30 days",
          },
          ios: {
            title: "Battery Lookup iOS App",
            description:
              "Native SwiftUI experience wired into a JSON REST API hosted on a hardened Tomcat server for real-time battery availability and quoting.",
            result: "Result: Cut manual lookups by 60% for techs",
            extraLabel: "Read the FYP report",
          },
          santaloca: {
            title: "Santa Loca Events",
            description:
              "Immersive nightlife website with embedded ticket checkout, Printful-powered merch store, and bilingual sales copy so Nottingham & BG club goers can buy in seconds.",
            result: "Result: 300 tickets sold out within 48h",
          },
        },
      },
      services: {
        eyebrow: "Services",
        title: "Everything you need to launch or level-up",
        subtitle: "Design → Build → Ship. Simple, transparent pricing.",
        localizationNote:
          "I work in English and Bulgarian—translating key sections, forms, and offers so conversions hold up across both markets.",
        cards: {
          sites: {
            title: "High-impact sites",
            desc: "Single or multi-section sites built for clarity and conversions. Responsive, accessible, fast.",
            points: ["Tailored UX & copy guidance", "Performance budget", "SEO essentials"],
          },
          motion: {
            title: "Interactions & motion",
            desc: "Tasteful micro-interactions, parallax, and particle effects that feel alive—never gimmicky.",
            points: ["Framer Motion", "Scroll reveals", "Magnetic buttons"],
          },
          integrations: {
            title: "Integrations",
            desc: "Forms, analytics, CMS, email capture, booking, payments—done right and instrumented.",
            points: ["Stripe/Checkout", "Calendly", "Netlify/Vercel"],
          },
        },
      },
      pricing: {
        eyebrow: "Pricing",
        title: "Clear, upfront pricing",
        subtitle: "Simple packages tailored to your needs. No hidden fees.",
        planOrder: ["starter", "business", "premium"],
        plans: {
          starter: {
            name: "Starter",
            price: "from £450",
            desc: "For individuals or small brands that need a credible site live quickly.",
            features: ["1–3 sections (landing page)", "Mobile responsive", "Basic SEO setup", "Deployed to Vercel"],
          },
          business: {
            name: "Business",
            price: "from £950",
            desc: "The sweet spot for small businesses that want more leads and credibility.",
            features: [
              "Up to 5 pages to showcase services",
              "Custom design with crisp animations",
              "Contact form / booking",
              "SEO essentials + analytics",
            ],
            highlight: true,
          },
          premium: {
            name: "Premium",
            price: "from £1,800",
            desc: "For brands ready to level-up with integrations, CMS, and advanced motion.",
            features: [
              "5+ pages or custom sections",
              "Advanced animations & interactions",
              "CMS / blog / integrations",
              "Priority support",
            ],
          },
        },
        maintenance: {
          title: "Maintenance & care",
          body: "Optional retainer for Bulgarian builds — 20–60 лв / month covering content edits, security updates, and priority tweaks. Skip it if you don’t expect changes.",
        },
      },
      process: {
        eyebrow: "Process",
        title: "A smooth 4-step flow",
        subtitle: "No fluff. Clear comms, quick iterations, on-time delivery.",
        steps: [
          { title: "Discover", copy: "Quick intro call, goals, scope, timeline." },
          { title: "Design", copy: "Wireframe → polished UI in your brand colors." },
          { title: "Build", copy: "Production-ready React + Tailwind, responsive and fast." },
          { title: "Ship", copy: "Deploy to Vercel with analytics + handover video." },
        ],
      },
      aboutSection: {
        eyebrow: "About Tony",
        title: "Computing grad & freelance web dev",
        subtitle: "I build clean, modern sites that convert.",
      },
      aboutBlock: {
        title: "Hi, I’m Tony — let’s build something that sells.",
        body:
          "Computing graduate (NTU) and freelance developer. I combine crisp visuals with purposeful motion to make your message land.",
        stats: {
          locationLabel: "Based in",
          locationValue: "London, UK, Sofia, BG",
          degreeLabel: "Degree",
          degreeValue: "BSc (Hons) Computing",
          specialtyLabel: "Specialty",
          specialtyValue: "Web & Motion",
          availabilityLabel: "Freelance",
          availabilityValue: "Available now",
        },
        buttons: {
          email: "Email me",
          call: "Call",
        },
      },
      trust: {
        eyebrow: "Why RenekSites",
        title: "People like working with me",
        subtitle: "Clear comms, high craft, reliable delivery.",
        bullets: ["Snappy turnarounds", "Pixel-perfect execution", "Detailed handover & docs"],
        paragraph:
          "From scoping to launch, you get crisp updates, bilingual check-ins, and a site that feels premium on every screen.",
      },
      contact: {
        heading: "Let’s build something your UK & BG clients trust",
        subheading: "Email or call either line — I reply within 24 hours in English or Bulgarian.",
        toastSuccess: "Message sent! I’ll get back to you soon.",
        toastError: "Something went wrong. Please try again.",
        errors: {
          network: "Network error. Please try again.",
        },
        form: {
          nameLabel: "Name",
          emailLabel: "Email",
          detailsLabel: "Project details",
          namePlaceholder: "Your name",
          emailPlaceholder: "you@example.com",
          detailsPlaceholder: "What are you trying to build? Any links, deadlines, or budget ranges help.",
          send: "Send message",
          sending: "Sending...",
          calendly: "Book a slot (Calendly)",
        },
      },
      stickyCall: {
        label: "Call",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Questions people ask",
        description: "If you don’t see your question here, email tonkatabachev@gmail.com. I can reply in Bulgarian too.",
        items: [
          {
            q: "How long does a typical website take?",
            a: "Starter landing pages are usually 1–2 weeks. Business sites (3–5 pages) are 2–4 weeks depending on content and feedback speed.",
          },
          {
            q: "What does your pricing include?",
            a: "Design + build in React/Tailwind, responsive layouts, performance pass, basic SEO setup, deploy to Vercel, and a short handover video.",
          },
          {
            q: "Do you offer revisions?",
            a: "Yes—every package includes a feedback round per milestone (design and build). Extra rounds are possible if needed.",
          },
          {
            q: "Do I need to provide copy and images?",
            a: "You can provide them, or I can help refine copy and source/licence images. Clear, simple copy converts best.",
          },
          {
            q: "Who hosts the site?",
            a: "I deploy to Vercel (fast, reliable, global CDN). You can keep ownership and billing on your own Vercel account if you prefer.",
          },
          {
            q: "Do I own the site after launch?",
            a: "Yes—100%. You’ll receive the GitHub repo and full deployment access.",
          },
          {
            q: "How do we start?",
            a: "Email me at tonkatabachev@gmail.com or call +44 7908 894226 (UK) / +359 876 877 095 (BG). We’ll do a 15-minute intro to scope goals and timelines.",
          },
          {
            q: "Do you offer support in Bulgarian?",
            a: "Yes — all key materials, copy, and trainings can be in Bulgarian. We’ll meet in GMT or EET, and I provide ready-to-publish translations for critical sections.",
          },
        ],
      },
    },
  },
  bg: {
    translation: {
      nav: {
        home: "Начало",
        work: "Проекти",
        services: "Услуги",
        process: "Процес",
        about: "За мен",
        contact: "Контакт",
      },
      header: {
        ctaBgButton: "Обади се (BG)",
        bgLabel: "BG: +359 876 877 095",
        ukLabel: "UK: +44 7908 894226",
      },
      languageSwitcher: {
        label: "Смени езика",
      },
      hero: {
        badge: "Стартирам за седмици, не за месеци",
        titleSegments: [
          { text: "Сайтове, които изглеждат ", className: "" },
          {
            text: "премиум",
            className: "bg-gradient-to-r from-emerald-300 to-white bg-clip-text text-transparent",
          },
          { text: " и продават.", className: "" },
        ],
        intro:
          "Аз съм Тони — компютърен инженер и фрийланс уеб разработчик. Правя бързи, модерни сайтове с ясни послания и гладко движение.",
        subtext:
          "Работя и на български — локализирам съдържание, форми и оферти, за да продавате уверено на клиенти в UK и България.",
        primaryCta: "Вземи оферта",
        secondaryCta: "Виж проекти",
        badges: ["React + Tailwind", "Framer Motion", "Vercel deploy", "Поддръжка на EN & BG"],
      },
      work: {
        eyebrow: "Проекти",
        title: "Чисти, бързи, готови за продажби",
        subtitle: "Лансирания за екипи в UK и BG, фокусирани върху резервации и продажби.",
        description:
          "Всяка изработка идва с локализирани послания, интегрирани резервации и аналитика, за да знаят посетителите как да работят с вас.",
        projects: {
          asap: {
            title: "ASAP Mobile Car Battery Replacement",
            description:
              "Сайт за спешни смени на батерии с copy на български, мигновени заявки и връзка към CRM за диспечерски екип.",
            result: "Резултат: +42% завършени заявки за 30 дни",
          },
          ios: {
            title: "Battery Lookup iOS App",
            description:
              "SwiftUI приложение, свързано с JSON REST API на защитен Tomcat сървър за наличности и оферти в реално време.",
            result: "Резултат: -60% ръчни справки за техниците",
            extraLabel: "Прочети дипломния проект",
          },
          santaloca: {
            title: "Santa Loca Events",
            description:
              "Имърсив сайт за нощни партита с вграден тикетинг, Printful мерч и двуезично copy за посетители от Нотингам и България.",
            result: "Резултат: 300 билета разпродадени за 48 часа",
          },
        },
      },
      services: {
        eyebrow: "Услуги",
        title: "Всичко нужно за старт или ръст",
        subtitle: "Design → Build → Ship. Прозрачни пакети без изненади.",
        localizationNote:
          "Работя на английски и български — превеждам ключови секции, форми и оферти, за да държим конверсиите високи на двата пазара.",
        cards: {
          sites: {
            title: "Сайтове с ударен ефект",
            desc: "Едностранични или мултисекционни сайтове за яснота и продажби. Responsive, достъпни и бързи.",
            points: ["UX и копирайтинг насоки", "Перформанс бюджет", "SEO основи"],
          },
          motion: {
            title: "Интеракции и motion",
            desc: "Фини микро-анимации, паралакс и частици, които оживяват преживяването без да са кич.",
            points: ["Framer Motion", "Scroll анимации", "Магнитни бутони"],
          },
          integrations: {
            title: "Интеграции",
            desc: "Форми, аналитика, CMS, имейл, резервации, плащания — изградени правилно и измерими.",
            points: ["Stripe/Checkout", "Calendly", "Netlify/Vercel"],
          },
        },
      },
      pricing: {
        eyebrow: "Цени",
        title: "Ясни и директни пакети",
        subtitle: "Без скрити такси. Избираме пакет според нуждите ти.",
        planOrder: ["starter", "business", "premium"],
        plans: {
          starter: {
            name: "Старт",
            price: "от 350 EUR",
            desc: "За лични брандове или малки екипи, които искат сайт бързо.",
            features: ["1–3 секции (landing страница)", "Мобилно-оптимизиран", "Базово SEO", "Деплой във Vercel"],
          },
          business: {
            name: "Бизнес",
            price: "от 450 EUR",
            desc: "Най-търсеният пакет за повече заявки и доверие.",
            features: [
              "До 5 страници за услуги",
              "Къстъм дизайн с motion",
              "Форми / резервации",
              "SEO основи + аналитика",
            ],
            highlight: true,
          },
          premium: {
            name: "Премиум",
            price: "от 700 EUR",
            desc: "За марки, които искат интеграции, CMS и advanced motion.",
            features: [
              "5+ страници или персонализирани секции",
              "Разширени анимации",
              "CMS / блог / интеграции",
              "Приоритетна поддръжка",
            ],
          },
        },
        maintenance: {
          title: "Поддръжка",
          body: "Опция за месечен retainer 20–60 лв за съдържание, ъпдейти и бързи корекции. Не е задължителен, ако не очакваш промени.",
        },
      },
      process: {
        eyebrow: "Процес",
        title: "Изчистен 4-стъпков поток",
        subtitle: "Без излишно. Ясна комуникация, бързи итерации, навременна доставка.",
        steps: [
          { title: "Discover", copy: "Кратък call, цели, обхват и тайминг." },
          { title: "Design", copy: "Wireframe → финален UI в твоите цветове." },
          { title: "Build", copy: "Производствен React + Tailwind, responsive и бърз." },
          { title: "Ship", copy: "Деплой във Vercel с аналитика и видео хендовър." },
        ],
      },
      aboutSection: {
        eyebrow: "За Тони",
        title: "Компютърен инженер & фрийланс уеб дев",
        subtitle: "Правя модерни сайтове, които конвертират.",
      },
      aboutBlock: {
        title: "Здравей, аз съм Тони — да направим сайт, който продава.",
        body:
          "Завършил Computing (NTU) и фрийланс разработчик. Комбинирам чист визуален стил и целенасочено motion, за да тежи посланието.",
        stats: {
          locationLabel: "Локация",
          locationValue: "Лондон, UK / София, BG",
          degreeLabel: "Образование",
          degreeValue: "BSc (Hons) Computing",
          specialtyLabel: "Специализация",
          specialtyValue: "Web & Motion",
          availabilityLabel: "Свободен",
          availabilityValue: "Приемам проекти",
        },
        buttons: {
          email: "Пиши ми",
          call: "Обади се",
        },
      },
      trust: {
        eyebrow: "Защо RenekSites",
        title: "Хората обичат да работят с мен",
        subtitle: "Ясна комуникация, високо качество, надеждна доставка.",
        bullets: ["Бързи срокове", "Пиксел-перфектно изпълнение", "Детайлен хендовър и документация"],
        paragraph:
          "От обсъждането до лансирането получаваш регулярни ъпдейти, срещи на български/английски и сайт, който изглежда премиум на всеки екран.",
      },
      contact: {
        heading: "Да изградим сайт, на който UK & BG клиенти вярват",
        subheading: "Пиши или звънни — отговарям до 24 часа на английски или български.",
        toastSuccess: "Съобщението е изпратено! Ще ти пиша скоро.",
        toastError: "Нещо се обърка. Опитай отново.",
        errors: {
          network: "Мрежова грешка. Опитай отново.",
        },
        form: {
          nameLabel: "Име",
          emailLabel: "Имейл",
          detailsLabel: "Детайли за проекта",
          namePlaceholder: "Твоето име",
          emailPlaceholder: "ti@example.com",
          detailsPlaceholder: "Какво искаш да изградим? Сподели линкове, срокове или бюджет.",
          send: "Изпрати",
          sending: "Изпращам...",
          calendly: "Резервирай слот (Calendly)",
        },
      },
      stickyCall: {
        label: "Обади се",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Често задавани въпроси",
        description:
          "Ако не виждаш своя въпрос, пиши на tonkatabachev@gmail.com. Мога да отговоря и на български.",
        items: [
          {
            q: "Колко време отнема един сайт?",
            a: "Landing страници са готови за 1–2 седмици. По-големи сайтове (3–5 страници) — за 2–4 седмици според съдържанието и обратната връзка.",
          },
          {
            q: "Какво включва цената?",
            a: "Дизайн + изработка в React/Tailwind, responsive layout, performance проверка, базово SEO, деплой във Vercel и видео хендовър.",
          },
          {
            q: "Има ли ревизии?",
            a: "Да — всеки пакет включва рунд обратна връзка за дизайн и за разработка. Можем да добавим още при нужда.",
          },
          {
            q: "Трябва ли аз да осигуря текста и снимките?",
            a: "Можеш да ги дадеш, а аз да ги редактирам. Мога и аз да подготвя copy и да намеря лицензирани визуализации.",
          },
          {
            q: "Къде се хоства сайтът?",
            a: "Деплойвам във Vercel (бърз CDN). Може да държиш проекта в твой Vercel акаунт.",
          },
          {
            q: "Притежавам ли сайта след пускането?",
            a: "Да — получаваш GitHub репо и пълен достъп до деплоймент.",
          },
          {
            q: "Как започваме?",
            a: "Пиши на tonkatabachev@gmail.com или звънни на +44 7908 894226 (UK) / +359 876 877 095 (BG). Ще направим 15-минутен call за цели и срокове.",
          },
          {
            q: "Предлагаш ли поддръжка на български?",
            a: "Да — всички материали и обучения могат да са на български. Срещаме се в GMT или EET и получаваш готови преводи за ключови секции.",
          },
        ],
      },
    },
  },
};

const defaultLang =
  (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) ||
  (typeof window !== "undefined" && window.navigator.language?.startsWith("bg")
    ? "bg"
    : "en");

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLang || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

if (typeof window !== "undefined") {
  i18n.on("languageChanged", (lng) => {
    localStorage.setItem(STORAGE_KEY, lng);
  });
}

export const LANG_OPTIONS = [
  { code: "en", label: "EN" },
  { code: "bg", label: "BG" },
];

export default i18n;

