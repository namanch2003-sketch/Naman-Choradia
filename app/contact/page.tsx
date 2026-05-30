import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Naman Choradia — CA | CFA L1 | Equity Analyst",
  description:
    "Get in touch with Naman Choradia for collaboration, CA guidance, market discussions, or general enquiries. Based in Bengaluru, India.",
  openGraph: {
    title: "Contact | Naman Choradia",
    description:
      "Get in touch — collaboration, CA guidance, market discussions, or just say hello.",
    url: "https://namanrch.in/contact",
    siteName: "Naman Choradia",
    type: "website",
  },
};

const ContactContent = dynamic(
  () => import("@/components/pages/ContactContent"),
  { ssr: false }
);

export default function ContactPage() {
  return <ContactContent />;
}
