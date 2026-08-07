/** Static seed content for design-only client demo (no CMS / API). */

export interface ContactPageContent {
  bannerImage: string;
  heroEyebrow: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroTitleHighlight: string;
  heroDescription: string;
  detailsEyebrow: string;
  detailsTitle: string;
  detailsTitleHighlight: string;
  detailsDescription: string;
  formEyebrow: string;
  formTitle: string;
  formDescription: string;
}

export const seedContactPage: ContactPageContent = {
  bannerImage: "",
  heroEyebrow: "Get In Touch",
  heroTitleLine1: "Let's Build",
  heroTitleLine2: "Something",
  heroTitleHighlight: "Remarkable.",
  heroDescription:
    "Share your vision for corporate interiors, civil structures, or turnkey projects — our team responds within 24 hours.",
  detailsEyebrow: "Reach Us",
  detailsTitle: "Company Details &",
  detailsTitleHighlight: "Inquiry Form",
  detailsDescription:
    "Find our studios on the map or send us a message — tell us what your project is regarding and we'll guide you from there.",
  formEyebrow: "Send an Inquiry",
  formTitle: "Tell us about your project",
  formDescription: "Fields marked with your details help us respond faster.",
};

export type ContactOfficeItem = {
  id: number;
  label: string;
  heading: string;
  studioTitle: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapEmbed: string;
};

const sharedOfficeAddress =
  "14, 16A, Golf Club Rd, Rajendra Prasad Colony, Tollygunge, Kolkata, West Bengal 700033, India";
const sharedMapEmbed =
  "https://maps.google.com/maps?q=14%2C%2016A%2C%20Golf%20Club%20Rd%2C%20Rajendra%20Prasad%20Colony%2C%20Tollygunge%2C%20Kolkata%2C%20West%20Bengal%20700033%2C%20India&t=&z=16&ie=UTF8&iwloc=&output=embed";

export const seedContactOffices: ContactOfficeItem[] = [
  {
    id: 1,
    label: "Kolkata",
    heading: "Kolkata Address",
    studioTitle: "Visit Our Kolkata Studio",
    address: sharedOfficeAddress,
    phone: "8167028450",
    email: "info@3gdecorative.com",
    hours: "Mon – Sat, 9:00 AM – 7:00 PM",
    mapEmbed: sharedMapEmbed,
  },
  {
    id: 2,
    label: "Bangalore",
    heading: "Bangalore Address",
    studioTitle: "Visit Our Bangalore Studio",
    address: sharedOfficeAddress,
    phone: "8167028450",
    email: "info@3gdecorative.com",
    hours: "Mon – Sat, 9:00 AM – 7:00 PM",
    mapEmbed: sharedMapEmbed,
  },
  {
    id: 3,
    label: "Goa",
    heading: "Goa Address",
    studioTitle: "Visit Our Goa Studio",
    address: sharedOfficeAddress,
    phone: "8167028450",
    email: "info@3gdecorative.com",
    hours: "Mon – Sat, 9:00 AM – 7:00 PM",
    mapEmbed: sharedMapEmbed,
  },
];
