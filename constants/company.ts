import { FileCheck2, ShieldCheck, ClipboardCheck } from "lucide-react";

export const COMPANY_HERO = {
  title: "The Fine Print with a Friendly Twist",
  description:
    "At Zeroteq, we are committed to maintaining the highest standards of transparency and compliance. This section provides detailed information about our terms of use, privacy policy, and compliance practices to ensure our users understand their rights and our obligations.",
};

export const COMPANY_TABS = [
  {
    label: "Terms Of Use",
    href: "/company/terms-of-use",
    icon: FileCheck2,
  },
  {
    label: "Privacy Policy",
    href: "/company/privacy-policy",
    icon: ShieldCheck,
  },
  {
    label: "Compliance",
    href: "/company/compliance",
    icon: ClipboardCheck,
  },
];

export const COMPANY_CTA = {
  title: "Get Started",
  description:
    "Ready to transform your business with Zeroteq? Contact us today to learn more about our solutions and how we can help you achieve your goals.",
  buttonLabel: "Contact Us",
  buttonHref: "/company/about-us",
};

// ─── Terms of Use ───────────────────────────────────────────────────────────────

export const TERMS_OF_USE = {
  title: "Terms of Use",
  intro:
    "By accessing or using our website, you agree to comply with and be bound by the following Terms of Use. Please read these terms carefully.",
  sections: [
    {
      heading: "General Terms",
      content: [
        {
          subheading: "Acceptance of Terms",
          text: "By using our website, you accept these Terms of Use in full. If you disagree with any part of these terms, you must not use our website.",
        },
        {
          subheading: "Modifications",
          text: "Zeroteq reserves the right to modify these Terms of Use at any time. Changes will be posted on this page, and your continued use of the website signifies your acceptance of the updated terms.",
        },
      ],
    },
    {
      heading: "Use of Website",
      content: [
        {
          subheading: "License to Use Website",
          text: "Unless otherwise stated, Zeroteq and/or its licensors own the intellectual property rights in the website and material on the website. You may view, download, and print pages for personal use, subject to the restrictions set out below.",
        },
        {
          subheading: "Prohibited Uses",
          text: "You must not:",
          list: [
            "Republish material from this website",
            "Sell, rent, or sub-license material from the website",
            "Reproduce, duplicate, copy, or otherwise exploit material on this website for commercial purposes",
            "Edit or otherwise modify any material on the website",
            "Redistribute material from this website",
          ],
        },
      ],
    },
    {
      heading: "User Conduct",
      content: [
        {
          subheading: "Prohibited Conduct",
          text: "Users must not use the website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website. Users must not use the website in any way that is unlawful, fraudulent, or harmful.",
        },
      ],
    },
    {
      heading: "Limitation of Liability",
      content: [
        {
          subheading: "Disclaimer of Warranties",
          text: "The website is provided 'as is' without any representations or warranties, express or implied. Zeroteq makes no representations or warranties in relation to the website or the information and materials provided on the website.",
        },
        {
          subheading: "Exclusion of Liability",
          text: "Zeroteq will not be liable to you in relation to the contents of, or use of, or otherwise in connection with, this website for any indirect, special, or consequential loss; or for any business losses, loss of revenue, income, profits, or anticipated savings.",
        },
      ],
    },
    {
      heading: "Governing Law",
      content: [
        {
          subheading: "Jurisdiction",
          text: "These terms will be governed by and construed in accordance with the laws of India, and any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of India.",
        },
      ],
    },
  ],
};

// ─── Privacy Policy ─────────────────────────────────────────────────────────────

export const PRIVACY_POLICY = {
  title: "Privacy Policy",
  intro:
    "Zeroteq is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and protect the information we collect from users ('you' or 'your') of our website, mobile application, SAAS, and other services (collectively, the 'Services').",
  sections: [
    {
      heading: "Types of Information",
      text: "We may collect the following types of personal information from you:",
      items: [
        {
          subheading: "Account Information",
          text: "When you sign up for an account, we may collect your name, email address, phone number, and other contact details.",
        },
        {
          subheading: "Financial Information",
          text: "To facilitate transactions, we may collect information about your bank account, credit card, or other payment methods.",
        },
        {
          subheading: "Usage Data",
          text: "We collect information about how you interact with our Services, such as your browsing activity, device information, IP address, and location data.",
        },
        {
          subheading: "Communications",
          text: "When you contact us or communicate with our support team, we may collect information about your inquiries and interactions with us.",
        },
      ],
    },
    {
      heading: "Purpose of Use",
      text: "We use the information we collect for the following purposes:",
      items: [
        {
          subheading: "Providing Services",
          text: "To deliver the Services you request, process transactions, and provide customer support.",
        },
        {
          subheading: "Personalization",
          text: "To tailor our Services to your preferences and provide personalized content, recommendations, and advertisements.",
        },
        {
          subheading: "Communication",
          text: "To communicate with you about your account, updates to our Services, promotional offers, and other relevant information.",
        },
        {
          subheading: "Analytics",
          text: "To analyze usage trends, monitor the effectiveness of our marketing campaigns, and improve the quality and performance of our Services.",
        },
        {
          subheading: "Compliance",
          text: "To comply with legal and regulatory requirements, including anti-money laundering (AML) and know your customer (KYC) obligations.",
        },
      ],
    },
    {
      heading: "Third-Party Sharing",
      text: "We may share your personal information with third parties in the following circumstances:",
      items: [
        {
          subheading: "Service Providers",
          text: "We may engage third-party service providers to assist with the operation of our Services, such as hosting, payment processing, and analytics.",
        },
        {
          subheading: "Legal Compliance",
          text: "We may disclose your information to comply with applicable laws, regulations, legal processes, or governmental requests.",
        },
        {
          subheading: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of the transaction.",
        },
        {
          subheading: "With Your Consent",
          text: "We may share your information with third parties for other purposes with your consent.",
        },
      ],
    },
    {
      heading: "Rights",
      text: "You have certain rights regarding your personal information, including the right to access, update, or delete your information. You may also have the right to object to certain processing activities or request that we restrict the use of your information. To exercise these rights, please contact us using the information provided below.",
    },
    {
      heading: "Security Measures",
      text: "We take reasonable measures to protect the security and confidentiality of your personal information. However, please be aware that no security measures are foolproof, and we cannot guarantee the absolute security of your information.",
    },
    {
      heading: "Policy Changes",
      text: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.",
    },
  ],
};

// ─── Compliance ─────────────────────────────────────────────────────────────────

export const COMPLIANCE_CONTENT = {
  title: "Compliance",
  intro:
    "At Zeroteq, we understand the importance of trust and transparency in the technology and API management industry. We are dedicated to upholding the highest standards of compliance to ensure the security and satisfaction of our customers.",
  sections: [
    {
      heading: "Compliance Standards",
      text: "Zeroteq operates in accordance with all relevant regulations and guidelines set forth by regulatory bodies such as RBI, NPCI, BANKs, PCI DSS, FIU. Our compliance team diligently monitors regulatory developments and ensures that our operations and practices adhere to the latest legal requirements.",
    },
    {
      heading: "Data Security",
      text: "We prioritize the security and privacy of our customers' information. To safeguard against unauthorized access and data breaches, we employ state-of-the-art security measures, including encryption protocols, multi-factor authentication, and regular security audits.",
    },
    {
      heading: "Policy Overview",
      text: "Our Privacy Policy outlines how we collect, use, and protect your personal information. We are committed to respecting your privacy rights and complying with applicable data protection laws. Our Privacy Policy is easily accessible on our website and provides clear information about the types of data we collect, how we use it, and your rights regarding your personal information.",
    },
    {
      heading: "Investment Risks",
      text: "Investing in financial markets involves inherent risks, and past performance is not indicative of future results. Our Risk Disclosure Statement educates customers about the risks associated with investing through Zeroteq's platform. We encourage our customers to review this statement carefully before engaging in any investment activities.",
    },
    {
      heading: "AML Commitment",
      text: "Zeroteq is committed to preventing the use of our platform for illicit activities. Our Anti-Money Laundering (AML) Policy includes robust customer identification procedures, transaction monitoring, and reporting of suspicious activities to regulatory authorities. By adhering to stringent AML standards, we contribute to the global effort to combat financial crime.",
    },
    {
      heading: "Support Services",
      text: "If you have any questions or concerns regarding our compliance practices or policies, our Customer Support team is available to assist you. We are dedicated to providing timely and helpful assistance to ensure your peace of mind while using our services.",
    },
    {
      heading: "Updates and News",
      text: "We believe in keeping our customers informed about regulatory updates and changes that may impact their activities. Subscribe to our newsletter or follow us on social media to receive updates on relevant news and developments in the industry.",
    },
  ],
};
