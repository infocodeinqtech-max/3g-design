export const DEMO_COUNTS = {
  enquiries: 12,
  projects: 24,
  services: 8,
  contactOffices: 3,
  users: 2,
};

export const DEMO_RECENT_ENQUIRIES = [
  {
    id: "1",
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    service: "Interior Design",
    status: "New",
  },
  {
    id: "2",
    name: "Rahul Mehta",
    email: "rahul.m@email.com",
    service: "Turnkey Fit-out",
    status: "New",
  },
  {
    id: "3",
    name: "Ananya Iyer",
    email: "ananya.iyer@email.com",
    service: "Consultation",
    status: "Contacted",
  },
  {
    id: "4",
    name: "Vikram Patel",
    email: "vikram.p@email.com",
    service: "Renovation",
    status: "New",
  },
];

export const DEMO_TABLE_ROWS: Record<
  string,
  { col1: string; col2: string; col3: string }[]
> = {
  enquiries: [
    { col1: "Priya Sharma", col2: "Interior Design", col3: "New" },
    { col1: "Rahul Mehta", col2: "Turnkey Fit-out", col3: "New" },
    { col1: "Ananya Iyer", col2: "Consultation", col3: "Contacted" },
    { col1: "Vikram Patel", col2: "Renovation", col3: "Closed" },
  ],
  projects: [
    { col1: "Skyline Residence", col2: "Residential", col3: "Published" },
    { col1: "Orchid Office", col2: "Commercial", col3: "Published" },
    { col1: "Lakeview Villa", col2: "Residential", col3: "Draft" },
  ],
  services: [
    { col1: "Interior Design", col2: "Core", col3: "Active" },
    { col1: "Turnkey Solutions", col2: "Core", col3: "Active" },
    { col1: "Project Management", col2: "Support", col3: "Active" },
  ],
  "contact-offices": [
    { col1: "Head Office — Mumbai", col2: "+91 98765 43210", col3: "Active" },
    { col1: "Delhi Studio", col2: "+91 98765 43211", col3: "Active" },
    { col1: "Bangalore Hub", col2: "+91 98765 43212", col3: "Active" },
  ],
  users: [
    { col1: "Demo Admin", col2: "admin@3gdeco.com", col3: "Super Admin" },
    { col1: "Content Editor", col2: "editor@3gdeco.com", col3: "Admin" },
  ],
  default: [
    { col1: "Sample Item 1", col2: "Demo section", col3: "Active" },
    { col1: "Sample Item 2", col2: "Demo section", col3: "Active" },
    { col1: "Sample Item 3", col2: "Demo section", col3: "Draft" },
  ],
};
