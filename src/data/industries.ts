import { Stethoscope, ShoppingBag, Landmark, Building2, Banknote, type LucideIcon } from "lucide-react";
import healthcareImg from "@/assets/industry-healthcare.jpg";
import retailImg from "@/assets/industry-retail.jpg";
import publicSectorImg from "@/assets/industry-public-sector.jpg";
import financeImg from "@/assets/industry-finance.jpg";
import corporateImg from "@/assets/industry-corporate.jpg";

export type Industry = {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  intro: string;
  image?: string;
  challenges: { t: string; d: string }[];
  solutions: { t: string; d: string }[];
  outcomes: string[];
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: Stethoscope,
    tagline: "Calmer waiting rooms, faster patient flow.",
    image: healthcareImg,
    intro:
      "From hospitals and HSE facilities to GP clinics and outpatient departments, QFusion organises every patient interaction — from arrival to consultation to follow-up — so staff can focus on care, not crowd control.",
    challenges: [
      { t: "Overcrowded waiting rooms", d: "Patients clustered around reception with no clear order." },
      { t: "Missed appointments", d: "No-shows and double bookings disrupt clinical schedules." },
      { t: "Anxious patients", d: "Uncertainty about wait times increases stress and complaints." },
      { t: "Manual triage", d: "Staff spend time directing patients instead of treating them." },
    ],
    solutions: [
      { t: "Virtual waiting rooms", d: "Patients receive a digital ticket on arrival and wait wherever they're comfortable, with SMS call-forward." },
      { t: "Departmental routing", d: "Automatically route patients between reception, triage, consultation and pharmacy." },
      { t: "Appointment integration", d: "Pre-booked appointments flow directly into the live queue." },
      { t: "Live displays", d: "Branded calling screens guide patients to the right room or counter." },
    ],
    outcomes: [
      "Up to 40% reduction in perceived wait time",
      "Fewer no-shows with SMS reminders",
      "Better infection control with virtual queueing",
      "Real-time KPIs for clinic managers",
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    icon: ShoppingBag,
    tagline: "Turn queues into a better shopping experience.",
    image: retailImg,
    intro:
      "Whether it's click-and-collect, service desks, fitting rooms or in-store consultations, QFusion lets retailers manage walk-in demand without losing customers to long lines.",
    challenges: [
      { t: "Abandoned queues", d: "Customers leave when lines look too long." },
      { t: "Idle staff at peak", d: "No visibility into where help is needed most." },
      { t: "Click-and-collect chaos", d: "Online orders pile up at the service desk." },
      { t: "No customer data", d: "Walk-in traffic goes unmeasured and untargeted." },
    ],
    solutions: [
      { t: "Mobile ticketing", d: "Customers join the queue from a QR code and continue shopping until called." },
      { t: "Service desk routing", d: "Automatically split returns, collections and enquiries to the right counter." },
      { t: "Footfall counting", d: "Measure visitor numbers and conversion across every store." },
      { t: "Feedback at exit", d: "Capture in-store satisfaction at the moment of truth." },
    ],
    outcomes: [
      "Higher basket size — customers shop while they wait",
      "Reduced walk-aways at peak times",
      "Smarter staff scheduling based on real demand",
      "Group-wide reporting across every branch",
    ],
  },
  {
    slug: "public-sector",
    name: "Public Sector",
    icon: Landmark,
    tagline: "Better public service, less bureaucracy.",
    image: publicSectorImg,
    intro:
      "Government offices, councils, motor tax, immigration and social welfare centres handle huge daily footfall. QFusion brings order, transparency and accountability to every citizen interaction.",
    challenges: [
      { t: "Long, unpredictable queues", d: "Citizens arrive early and wait hours for routine services." },
      { t: "Multiple service types", d: "Different departments share one waiting area." },
      { t: "Staff overload", d: "Counters get hit unevenly with no live load balancing." },
      { t: "No service KPIs", d: "Hard to prove service standards to government bodies." },
    ],
    solutions: [
      { t: "Online appointments", d: "Citizens pre-book a slot and skip the queue entirely." },
      { t: "Multi-service tickets", d: "One kiosk handles every department with clear category routing." },
      { t: "Multi-language UI", d: "Accessible to every citizen, including hearing or visual support." },
      { t: "Service-level reporting", d: "Prove wait times, served volumes and SLAs across every office." },
    ],
    outcomes: [
      "Improved citizen satisfaction scores",
      "Reduced complaints and walk-outs",
      "Transparent reporting for government oversight",
      "Inclusive, accessible service for all",
    ],
  },
  {
    slug: "finance",
    name: "Finance",
    icon: Banknote,
    tagline: "Premium service in every branch.",
    image: financeImg,
    intro:
      "Banks, credit unions, insurance and wealth management branches use QFusion to deliver a calm, premium customer experience — pairing walk-ins with the right specialist, every time.",
    challenges: [
      { t: "Specialist matching", d: "Customers wait for an advisor who isn't available." },
      { t: "Branded experience", d: "Generic queue tickets undermine the brand." },
      { t: "Compliance & audit", d: "No record of service times or customer journeys." },
      { t: "Branch consolidation", d: "Fewer branches mean higher per-branch demand." },
    ],
    solutions: [
      { t: "Skill-based routing", d: "Automatically match customers to mortgage, FX or business advisors." },
      { t: "Appointment-first", d: "Pre-book complex services and let walk-ins fill the gaps." },
      { t: "Branded kiosks & displays", d: "Fully white-labelled to match your bank's identity." },
      { t: "Audit-ready reporting", d: "Full audit trail of every customer interaction and wait time." },
    ],
    outcomes: [
      "Higher conversion on advisory products",
      "Premium, on-brand customer experience",
      "Audit-ready service data",
      "Centralised oversight across the branch network",
    ],
  },
  {
    slug: "corporate",
    name: "Corporate",
    icon: Building2,
    tagline: "Modern reception for modern offices.",
    image: corporateImg,
    intro:
      "From HQ reception to multi-tenant buildings and campus environments, QFusion replaces the visitor book with a secure, branded, fully digital welcome experience.",
    challenges: [
      { t: "Paper visitor books", d: "Insecure, GDPR-risky and slow." },
      { t: "Reception bottlenecks", d: "One receptionist can't handle peak arrivals." },
      { t: "Host notifications", d: "Visitors wait while reception finds their host." },
      { t: "Health & safety", d: "No live record of who is on-site in an emergency." },
    ],
    solutions: [
      { t: "Self-service check-in", d: "Visitors check themselves in via kiosk or QR code in seconds." },
      { t: "Instant host alerts", d: "Hosts get an SMS, email or Teams notification the moment a visitor arrives." },
      { t: "Pre-registration", d: "Send invites in advance with QR codes for fast-track entry." },
      { t: "Evacuation reports", d: "One-tap on-site visitor list for fire wardens." },
    ],
    outcomes: [
      "Professional, branded first impression",
      "GDPR-compliant visitor records",
      "Faster reception throughput",
      "Improved on-site safety and compliance",
    ],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
