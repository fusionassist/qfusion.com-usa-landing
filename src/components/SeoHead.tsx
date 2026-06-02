import { Helmet } from "react-helmet-async";

type Lang = "en";

type Props = {
  lang?: Lang;
};

const SITE = "https://queuefusion.com";

const TITLE = "QueueFusion – Queue Management for US Hospitals, Banks & Government";
const DESCRIPTION =
  "QueueFusion — queue management and customer flow for US hospitals, banks, credit unions, city & county government and DMV offices. Cut wait times nationwide. Book a demo.";

const SeoHead = (_props: Props) => {
  const url = `${SITE}/`;

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    description: DESCRIPTION,
    url,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "QueueFusion",
      url: SITE,
      publisher: {
        "@type": "Organization",
        name: "QueueFusion",
        url: SITE,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          areaServed: "US",
          availableLanguage: ["English"],
        },
      },
    },
    about: {
      "@type": "SoftwareApplication",
      name: "QFusion",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      areaServed: { "@type": "Country", name: "United States" },
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
        name: "Who uses QueueFusion in the US?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "US hospitals, health systems, clinics, urgent care centers, banks, credit unions, city and county government, DMV offices and federal agencies use QueueFusion to manage queues, appointments, reception check-in and feedback under a single cloud platform.",
        },
      },
      {
        "@type": "Question",
        name: "Is QueueFusion HIPAA and CCPA compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. QueueFusion is HIPAA-ready and CCPA compliant, hosted on US infrastructure, with a US-based support team providing phone, email and on-site assistance.",
        },
      },
      {
        "@type": "Question",
        name: "Can QueueFusion be used across multiple branches or sites?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. QueueFusion is a cloud platform with centralized reporting, so headquarters can manage and compare every location in real time.",
        },
      },
    ],
  };

  return (
    <Helmet htmlAttributes={{ lang: "en-US" }}>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="QueueFusion" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />

      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />

      <script type="application/ld+json">{JSON.stringify(webpageSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
  );
};

export default SeoHead;
