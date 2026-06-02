import { Helmet } from "react-helmet-async";

type Lang = "en";

type Props = {
  lang?: Lang;
};

const SITE = "https://qfusion.co.uk";

const TITLE = "QFusion UK – Queue Management for NHS, Banks & Councils";
const DESCRIPTION =
  "QFusion UK — queue management and customer flow for NHS trusts, banks and UK councils. Cut wait times across the United Kingdom. Book a demo.";

const SeoHead = (_props: Props) => {
  const url = `${SITE}/`;

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    description: DESCRIPTION,
    url,
    inLanguage: "en-GB",
    isPartOf: {
      "@type": "WebSite",
      name: "QFusion UK",
      url: SITE,
      publisher: {
        "@type": "Organization",
        name: "QFusion UK",
        telephone: "+44-203-3186379",
        email: "sales@interactivedisplaysuk.com",
        url: SITE,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+44-203-3186379",
          email: "sales@interactivedisplaysuk.com",
          contactType: "sales",
          areaServed: "GB",
          availableLanguage: ["English"],
        },
      },
    },
    about: {
      "@type": "SoftwareApplication",
      name: "QFusion",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
      areaServed: { "@type": "Country", name: "United Kingdom" },
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
        name: "Who uses QFusion in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "UK hospitals, NHS trusts, GP surgeries, banks, local councils and public services use QFusion to manage queues, appointments, reception check-in and feedback under a single cloud platform.",
        },
      },
      {
        "@type": "Question",
        name: "Is QFusion GDPR compliant and hosted in the UK / EU?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. QFusion is UK GDPR compliant and hosted on UK/EU infrastructure, with a dedicated UK support team providing phone, email and on-site assistance.",
        },
      },
      {
        "@type": "Question",
        name: "Can QFusion be used across multiple branches or sites?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. QFusion is a cloud platform with centralised reporting, so head office can manage and compare every location in real time.",
        },
      },
    ],
  };

  return (
    <Helmet htmlAttributes={{ lang: "en-GB" }}>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content="QFusion UK" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />

      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="geo.region" content="GB" />
      <meta name="geo.placename" content="United Kingdom" />

      <script type="application/ld+json">{JSON.stringify(webpageSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
  );
};

export default SeoHead;
