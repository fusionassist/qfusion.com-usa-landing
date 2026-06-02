import { Helmet } from "react-helmet-async";

type Lang = "en" | "ga";

type Props = {
  lang: Lang;
};

const SITE = "https://qfusion.ie";

const META: Record<Lang, {
  title: string;
  description: string;
  path: string;
  ogLocale: string;
  htmlLang: string;
}> = {
  en: {
    title: "QFusion Ireland – Queue Management for Hospitals, Banks & Councils",
    description:
      "QFusion Ireland is the bilingual customer flow and queue management platform for Irish hospitals, healthcare, banks, county councils and public services. Cut wait times across Ireland — book a demo.",
    path: "/",
    ogLocale: "en_IE",
    htmlLang: "en-IE",
  },
  ga: {
    title: "QFusion Éire – Bainistíocht Scuaine d'Ospidéil, Bainc & Comhairlí",
    description:
      "QFusion Éire — an t-ardán sreabhadh custaiméirí dátheangach (Gaeilge / Béarla) d'ospidéil, cúram sláinte, bainc, comhairlí contae agus seirbhísí poiblí na hÉireann. Cuir taispeántas in áirithe.",
    path: "/gaeilge",
    ogLocale: "ga_IE",
    htmlLang: "ga-IE",
  },
};

const SeoHead = ({ lang }: Props) => {
  const m = META[lang];
  const url = `${SITE}${m.path}`;

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: m.title,
    description: m.description,
    url,
    inLanguage: m.htmlLang,
    isPartOf: {
      "@type": "WebSite",
      name: "QFusion Ireland",
      url: SITE,
      publisher: {
        "@type": "Organization",
        name: "QFusion Ireland",
        telephone: "+353-44-967-2855",
        email: "hello@qfusion.ie",
        url: SITE,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+353-44-967-2855",
          email: "hello@qfusion.ie",
          contactType: "sales",
          areaServed: "IE",
          availableLanguage: ["English", "Irish"],
        },
      },
    },

    about: {
      "@type": "SoftwareApplication",
      name: "QFusion",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      areaServed: { "@type": "Country", name: "Ireland" },
      featureList: [
        "Queue Management",
        "Online Appointments",
        "Digital Ticketing",
        "Reception & Check-In",
        "Customer Feedback",
        "Live Displays",
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who uses QFusion in Ireland?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Irish hospitals, healthcare clinics, banks, county councils and public services use QFusion to manage queues, appointments, reception check-in and feedback under a single cloud platform.",
        },
      },
      {
        "@type": "Question",
        name: "Is QFusion available in Irish (Gaeilge)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. QFusion supports bilingual English and Gaeilge interfaces, displays and audio call-outs, suitable for Gaeltacht regions and Irish public services.",
        },
      },
      {
        "@type": "Question",
        name: "Is QFusion GDPR compliant and hosted in the EU?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. QFusion is GDPR-compliant and hosted on EU infrastructure, with a local Irish support team providing phone, email and on-site assistance.",
        },
      },
    ],
  };

  return (
    <Helmet htmlAttributes={{ lang: m.htmlLang }}>
      <title>{m.title}</title>
      <meta name="description" content={m.description} />
      <link rel="canonical" href={url} />

      <link rel="alternate" hrefLang="en-IE" href={`${SITE}/`} />
      <link rel="alternate" hrefLang="ga-IE" href={`${SITE}/gaeilge`} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE}/`} />

      <meta property="og:title" content={m.title} />
      <meta property="og:description" content={m.description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={m.ogLocale} />
      <meta property="og:locale:alternate" content={lang === "en" ? "ga_IE" : "en_IE"} />
      <meta property="og:site_name" content="QFusion Ireland" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={m.title} />
      <meta name="twitter:description" content={m.description} />

      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="geo.region" content="IE" />
      <meta name="geo.placename" content="Ireland" />

      <script type="application/ld+json">{JSON.stringify(webpageSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
  );
};

export default SeoHead;
