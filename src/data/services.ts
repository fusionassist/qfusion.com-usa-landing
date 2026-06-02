import { Users, Star, Building2, CalendarCheck, Ticket, type LucideIcon } from "lucide-react";
import customerCountingImg from "@/assets/service-customer-counting.jpg";
import satisfactionSurveyImg from "@/assets/service-satisfaction-survey.jpg";
import corporateReceptionImg from "@/assets/service-corporate-reception.jpg";
import onlineAppointmentsImg from "@/assets/service-online-appointments.jpg";

export type Service = {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  intro: string;
  image?: string;
  features: { t: string; d: string }[];
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "queue-management",
    name: "Queue Management",
    icon: Ticket,
    tagline: "The all-in-one customer flow platform.",
    intro:
      "QFusion is our flagship queue management system — combining walk-in tickets, virtual queues, appointments, kiosks, live displays and reporting into a single cloud platform.",
    features: [
      { t: "Walk-in & virtual queues", d: "Issue physical or digital tickets and let customers wait wherever they want with live SMS updates." },
      { t: "Multi-service routing", d: "Route customers to the right counter, department or specialist automatically." },
      { t: "Live displays & call-outs", d: "Branded calling screens with audio announcements guide every visitor in real time." },
      { t: "Real-time dashboards", d: "Track wait times, service speed and KPIs across every location from one place." },
    ],
    benefits: [
      "Up to 40% reduction in wait times",
      "Higher customer satisfaction scores",
      "Smarter staff allocation at peak",
      "One platform across every branch",
    ],
  },
  {
    slug: "customer-counting",
    name: "Customer Counting",
    icon: Users,
    tagline: "Real-time control of footfall and capacity.",
    image: customerCountingImg,
    intro:
      "Define your physical capacity and monitor space occupancy in real time — manually or automatically — so you always know how many people are inside and how many are expected next.",
    features: [
      { t: "Manual or automatic counting", d: "Count via entrance staff with a smartphone web app, or automatically with counting mats and sensors." },
      { t: "Live capacity gauge", d: "Red gauge means full, green gauge means walk-ins welcome — visible at a glance." },
      { t: "Appointment-aware", d: "See how many booked visitors are expected in the next minutes, and let walk-ins fill the gaps." },
      { t: "QR-based controller", d: "Door staff scan a QR code to open the controller on any phone — no install needed." },
    ],
    benefits: [
      "Ensure customer safety and comfort",
      "Manage peak crowds without bottlenecks",
      "Optimise walk-in vs appointment mix",
      "Cost-effective and quick to deploy",
    ],
  },
  {
    slug: "satisfaction-survey",
    name: "Satisfaction Survey",
    icon: Star,
    tagline: "Hear every customer, improve every visit.",
    image: satisfactionSurveyImg,
    intro:
      "Capture the voice of your customer at the moment of truth. Run unlimited multilingual surveys on touchscreens or mobile, and turn raw feedback into actionable insight.",
    features: [
      { t: "Touchscreen & mobile surveys", d: "Customers answer in private on a dedicated screen or their own phone for maximum response rate." },
      { t: "NPS and custom surveys", d: "Run Net Promoter Score, CSAT or fully custom question sets, edited in real time." },
      { t: "Unlimited & multilingual", d: "Run as many surveys as you need, in every language your customers speak." },
      { t: "Export & analyse", d: "Export to PDF or CSV and feed insights into your reporting and improvement plans." },
    ],
    benefits: [
      "Understand what customers really think",
      "Spot service gaps before they hurt loyalty",
      "Prove service quality with hard data",
      "Drive continuous service improvement",
    ],
  },
  {
    slug: "corporate-reception",
    name: "Corporate Reception",
    icon: Building2,
    tagline: "A secure, branded welcome for every visitor.",
    image: corporateReceptionImg,
    intro:
      "Replace the paper visitor book with a fully digital reception. Visitors check in at a self-service kiosk, hosts are notified instantly, and badges with photo are printed on the spot.",
    features: [
      { t: "Self-service check-in", d: "22-inch SmartKiosk lets visitors check themselves in, select their host and confirm appointment details." },
      { t: "Instant host notification", d: "Hosts get an SMS, email or Teams alert the moment their visitor arrives at reception." },
      { t: "Photo badge printing", d: "Print a branded access badge with photo automatically at check-in." },
      { t: "Pre-registration & video", d: "Send invites in advance with QR codes, and start a videoconference with a visitor straight from reception." },
    ],
    benefits: [
      "Professional, on-brand first impression",
      "GDPR-compliant visitor records",
      "Faster reception throughput",
      "Live on-site visitor list for safety & evacuation",
    ],
  },
  {
    slug: "online-appointments",
    name: "Online Appointments",
    icon: CalendarCheck,
    tagline: "24/7 booking, verified check-in.",
    image: onlineAppointmentsImg,
    intro:
      "Let customers book, reschedule, cancel and check in to appointments from anywhere — with secure API verification against your organisation's database to confirm identity at arrival.",
    features: [
      { t: "Book from your website", d: "Embed appointment booking directly on your site — your calendar syncs automatically and customers self-serve 24/7." },
      { t: "Identity verification", d: "API integration with your organisation's database looks up name, date of birth and reference to verify check-in." },
      { t: "Smart routing", d: "Intelligent appointment routing matches each customer to the right service, advisor or department." },
      { t: "Reminders & video", d: "Automated SMS and email reminders cut no-shows; built-in videoconferencing for remote appointments." },
    ],
    benefits: [
      "Cut no-shows with automated reminders",
      "Reduce wait times — appointments skip the queue",
      "Verified identity at check-in",
      "Omnichannel: web, kiosk, mobile or video",
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
