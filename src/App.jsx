import React, { useState, useEffect, useRef } from "react";
import {
  Menu, X, Github, Linkedin, Mail, ArrowLeft, ArrowUpRight,
  GraduationCap, Award, Briefcase, ChevronRight, Code2, ExternalLink
} from "lucide-react";

/* ============================================================
   DATA — edit names, links, bullet points, and image labels here
   ============================================================ */

const SKILLS = [
  { group: "Programming", items: ["Python", "SQL"] },
  { group: "Databases", items: ["PostgreSQL", "SQL Server", "Azure SQL Database"] },
  { group: "Business Intelligence", items: ["Power BI", "DAX", "Microsoft Excel", "Grafana"] },
  { group: "Cloud", items: ["Azure Blob Storage"] },
  { group: "Python Libraries", items: ["Pandas", "NumPy", "Faker", "SQLAlchemy"] },
  { group: "Data Analytics:", items: ["ETL", "Data Warehousing", "Star Schema Modeling", "Data Modeling", "Data Cleaning", "Exploratory Data Analysis"] },
  { group: "Tools:", items: ["Git", "GitHub", "SQL Server Management Studio (SSMS)", "Docker", "Docker Compose", "VS Code", "Jupyter Notebook", "LaTeX"] },
];

const CERTIFICATES = [
  { name: "Microsoft Power BI", issuer: "SkillCourse" },
  { name: "Microsoft Excel with AI Masterclass", issuer: "SkillCourse" },
  { name: "Business Analysis & Process Management", issuer: "Coursera" },
  { name: "Python Programming & Data Handling", issuer: "IIITDM Jabalpur" },
  { name: "Artificial Intelligence & Robotics", issuer: "Ensino Research" },
];

const INTERNSHIPS = [
  {
    company: "Mahindra & Mahindra",
    role: "Production Department",
    points: [
      "Analyzed production data using Excel to identify efficiency improvements.",
      "Assisted in documentation and evaluation of production performance metrics.",
      "Worked with ERP systems for data tracking and process automation.",
      "Collaborated with teams to improve workflow efficiency.",
    ],
  },
  {
    company: "BHEL",
    role: "Hospital Management Systems",
    points: [
      "Worked with documentation and data management.",
      "Supported patient data management, appointment scheduling, and electronic record systems.",
      "Learned healthcare database management and data security protocols.",
    ],
  },
];

const FEATURED_PROJECTS = [
  {
    id: "nexatech",
    index: "01",
    name: "NexaTech Order-to-Cash Reporting System",
    tagline: "Enterprise-scale BI platform simulating a complete Order-to-Cash lifecycle.",
    description:
      "An end-to-end Order-to-Cash reporting solution built on Azure — from raw ERP transactions to executive dashboards. Covers data generation, ETL, cloud storage, relational modeling, and business intelligence reporting, modeling how a real enterprise converts operational data into decision-ready insight.",
    tech: ["Python", "SQL", "Azure Blob Storage", "Azure SQL Database", "Power BI", "ETL"],
    highlights: [     
"Designed and implemented an end-to-end Order-to-Cash (O2C) reporting solution that simulates enterprise ERP workflows, covering data generation, ETL, cloud storage, relational modeling, and business intelligence reporting",
"Generated over 388,000 realistic ERP records using Python and Faker, modeling customers, orders, inventory, shipments, invoices, payments, returns, and discounts with business-driven relationships",
"Designed a scalable 16-table ERP relational schema in Azure SQL Database using normalized data modeling, primary and foreign key constraints, and referential integrity to support enterprise reporting workloads",
"Build a modular ETL framework for data validation, transformation, logging, and automated quality reporting before loading data into the reporting database",
"Developed 8 interactive Power BI dashboards covering Home, Executive, Sales, Finance, Customer, Inventory, Logistics, and Returns analytics, enabling KPI monitoring and operational decision-making",
"Integrated Azure Blob Storage into the data ingestion workflow, simulating a cloud-based reporting architecture from raw operational data to interactive dashboards",
    ],
    shots: [{
title:"Home Dashboard",
image:"/images/nexatech/Home Dashboard.png"
},

{
title:"Executive Dashboard",
image:"/images/nexatech/Executive Dashboard.png"
},

{
title:"Finance Dashboard",
image:"/images/nexatech/Finance Dashboard.png"
},

{
title:"Customer Dashboard",
image:"/images/nexatech/Customer Dashboard.png"
},

{
title:"Inventory Dashboard",
image:"/images/nexatech/Inventory Dashboard.png"
},

{
title:"Logistics Dashboard",
image:"/images/nexatech/Logistics Dashboard.png"
},

{
title:"Returns Dashboard",
image:"/images/nexatech/Returns Dashboard.png"
},
           {
title:"Azure Data Loaded",
image:"/images/nexatech/Data_Loaded.png.png"
},
            {
title:"Schema",
image:"/images/nexatech/powerbi_schema.png"
}
],
    github: "https://github.com/anusshkaydv/NexaTech-Order-to-Cash-Reporting-System",
  },
  {
    id: "retail",
    index: "02",
    name: "Retail Intelligence Analytics Platform",
    tagline: "End-to-end retail analytics for sales, inventory, and executive reporting.",
    description:
      "A retail analytics platform processing transactions across customers, products, and stores — built on a Star Schema warehouse and analyzed with advanced SQL to surface regional performance, customer segments, and margin trends.",
    tech: ["Python", "PostgreSQL", "SQL", "Power BI", "Grafana", "Docker"],
    highlights: [
       "Designed an end-to-end retail analytics platform using Python ETL pipelines, PostgreSQL data warehousing, and Star Schema modeling to process 10,000+ transactions across 500 customers, 200 products, and 10 stores",
"Developed analytical SQL queries using CTEs, window functions, joins, and RFM segmentation to evaluate customer behavior,sales performance, and regional revenue trends",
"Identified high-value customer segments and regional sales patterns, revealing the West region as the highest revenue contributor with approximately 30% of total sales",
"Built interactive Power BI and Grafana dashboards to monitor revenue, profit margin, sales trends, customer segmentation, inventory performance, and executive KPIs through dynamic visualizations",
         ],
    shots: [{
title:"Power BI Dashboard",
image:"/images/retail/RETAIL_ANALYTICS_POWERBI.png"
},

{
title:"Grafana Monitoring",
image:"/images/retail/GRAFANA_DASHBOARD.png"
},

{
title:"ER DIAGRAM",
image:"/images/retail/ER_DIAGRAM.png"
},

{
title:"Style Dashboard",
image:"/images/retail/powerbi_style_dashboard.png"
}],
    github: "https://github.com/anusshkaydv/Retail-Intelligence-Analytics-Platform",
  },
  {
    id: "stocks",
    index: "03",
    name: "Real-Time Stock Market Dashboard",
    tagline: "A live-refreshing financial dashboard built on Excel and the Alpha Vantage API.",
    description:
      "An automated financial reporting workflow — a Python script pulls live prices from the Alpha Vantage API, Power Query cleans and loads the data inside Excel, and a single VBA-triggered macro refreshes every Pivot Table, chart, and KPI card in one click.",
    tech: ["Python", "Advanced Excel", "Power Query", "VBA", "Alpha Vantage API"],
    highlights: [
     "Automated real-time stock market data collection using Python and the Alpha Vantage API, generating structured datasets for financial reporting and analysis",
"Developed an automated reporting pipeline using Power Query and VBA macros, enabling one-click data refresh and dashboard updates with minimal manual effort",
"Built an interactive Microsoft Excel dashboard featuring PivotTables, PivotCharts, slicers, KPI cards, conditional formatting, and advanced formulas for dynamic financial reporting",
"Analyzed stock price movements, trading volume, market trends, and top gainers/losers through interactive visualizations to support data-driven investment analysis",
    ],
    shots: [{
title:"Dashboard",
image:"/images/real_time/real_time.png"
},

{
title:"Updated Dashboard",
image:"/images/real_time/updated.png"
}],
    github: "https://github.com/anusshkaydv/Real-Time-Stock-Market-Dashboard",
  },
  {
    id: "ola",
    index: "04",
    name: "Ola Ride Analytics Dashboard",
    tagline: "Diagnosing ride cancellations and revenue patterns across 20,000+ bookings.",
    description:
      "A SQL and Power BI deep-dive into ride-booking behavior — uncovering where cancellations actually come from, how payment methods split, and which vehicle types drive revenue, across a 5-page interactive dashboard.",
    tech: ["SQL", "Power BI", "DAX", "Excel"],
    highlights: [
      "Analyzed over 20,000 ride-booking records using SQL to evaluate booking trends, ride cancellations, payment methods, vehicle performance, and customer behavior",
"Developed 9 DAX measures and KPI indicators that identified a 38% driver-side cancellation rate while revealing Cash and UPI accounted for nearly 96% of completed payments",
"Designed a 5-page interactive Power BI dashboard featuring drill-through analysis, slicers, and dynamic visualizations to support operational reporting and business decision-making",
    ],
    shots: [{
title:"Overview Dashboard",
image:"/images/ola/overview.png"
},

{
title:"Vechile Type Dashboard",
image:"/images/ola/vechile_type.png"
},

{
title:"Revenue Dashboard",
image:"/images/ola/revenue.png"
},
           {
title:"Cancellation Dashboard",
image:"/images/ola/cancellation.png"
},
            {
title:"Rating Dashboard",
image:"/images/ola/ratings.png"
}],
    github: "https://github.com/anusshkaydv/Ola-Ride-Analytics-Dashboard",
  },
];

const ANALYTICS_PROJECTS = [
  { id: "mobile-sales", name: "Mobile Sales Analysis Dashboard", tagline: "Brand & model-level sales performance across cities.", tech: ["Power BI", "DAX", "Excel"], github: "https://github.com/anusshkaydv/Mobile-Sales-Analysis-Dashboard-.git" },
  { id: "shopping-behaviour", name: "Customer Shopping Behaviour Analysis", tagline: "Segmenting spend, discount sensitivity, and subscription behavior.", tech: ["Python", "SQL", "PostgreSQL", "Power BI"], github: "https://github.com/anusshkaydv/customer-shopping-behavior-analysis.git" },
  { id: "call-center", name: "Call Center Performance Dashboard", tagline: "Agent performance, call volume, and resolution-time tracking.", tech: ["Power BI", "Excel"], github: "https://github.com/anusshkaydv/call-center-dashboard-excel.git" },
];

const OTHER_PROJECTS = [
  { id: "hospital", name: "Hospital Management System", tagline: "Patient records, appointments, and admin workflow.", github: "https://github.com/anusshkaydv/Hospital-Management-System.git" },
  { id: "employee", name: "Employee Management System", tagline: "Employee records and department administration.", github: "https://github.com/anusshkaydv/MERN-Stack-Employee-Management-System.git" },
  { id: "chatbot", name: "AI Chatbot", tagline: "Conversational assistant built as a standalone app.", github: "https://github.com/anusshkaydv/AI-ChatBot.git" },
  { id: "netflix-clone", name: "Netflix Clone", tagline: "Front-end recreation of a streaming platform UI.", github: "https://github.com/anusshkaydv/Netflixclone.git" },
  { id: "product-website", name: "Product Website", tagline: "Marketing site for a product concept.", github: "https://github.com/anusshkaydv/productwebsite.git" },
  { id: "expense-tracker", name: "Expense Tracker", tagline: "Personal finance tracking application.", github: "https://github.com/anusshkaydv/Expense-Tracker.git" },
];

/* ============================================================
   THEME TOKENS
   ============================================================ */
const C = {
  paper: "#F3F4F0",
  paperRaise: "#FFFFFF",
  ink: "#101C2C",
  inkSoft: "#2A3849",
  slate: "#5B6472",
  teal: "#0F7A72",
  tealDeep: "#0B5A54",
  amber: "#E1972E",
  line: "#DBDCD4",
  lineStrong: "#C3C5BB",
};

/* ============================================================
   SMALL HELPERS
   ============================================================ */
function Eyebrow({ children }) {
  return (
    <div
      className="uppercase tracking-widest text-xs font-semibold mb-3"
      style={{ fontFamily: "'JetBrains Mono', monospace", color: C.teal, letterSpacing: "0.14em" }}
    >
      {children}
    </div>
  );
}

function LedgerRow({ label, children }) {
  return (
    <div className="flex items-baseline gap-3 py-3 border-b" style={{ borderColor: C.line }}>
      <div
        className="w-40 shrink-0 text-sm"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: C.slate }}
      >
        {label}
      </div>
      <div className="flex-1 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({ children, tone = "default" }) {
  const styles =
    tone === "solid"
      ? { background: C.ink, color: C.paper, borderColor: C.ink }
      : { background: "transparent", color: C.inkSoft, borderColor: C.lineStrong };
  return (
    <span
      className="inline-block px-2.5 py-1 text-xs rounded-full border"
      style={{ fontFamily: "'JetBrains Mono', monospace", ...styles }}
    >
      {children}
    </span>
  );
}

function ImagePlaceholder({ label }) {
  return (
    <div
      className="aspect-video rounded-md border flex flex-col items-center justify-center gap-2 px-4 text-center"
      style={{ borderColor: C.lineStrong, borderStyle: "dashed", background: "#FAFAF7" }}
    >
      <Code2 size={20} style={{ color: C.slate }} />
      <span className="text-xs" style={{ fontFamily: "'JetBrains Mono', monospace", color: C.slate }}>
        {label}
        <br />
        <span style={{ opacity: 0.6 }}>replace with screenshot</span>
      </span>
    </div>
  );
}

/* ============================================================
   NAV
   ============================================================ */
function Nav({ view, goHome, goSection, goProjects, mobileOpen, setMobileOpen }) {
  const links = [
    { label: "Home", action: goHome },
    { label: "Skills", action: () => goSection("skills") },
    { label: "Certificates", action: () => goSection("certificates") },
    { label: "Contact", action: () => goSection("contact") },
  ];
  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur"
      style={{ borderColor: C.line, background: "rgba(243,244,240,0.9)" }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button
          onClick={goHome}
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 rounded"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold"
            style={{ background: C.ink, color: C.paper }}
          >
            AY
          </span>
          <span className="hidden sm:block text-base font-medium" style={{ color: C.ink }}>
            Anushka Yadav
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={l.action}
              className="text-sm font-medium focus:outline-none focus-visible:ring-2 rounded"
              style={{ color: C.inkSoft }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={goProjects}
            className="text-sm font-semibold px-4 py-2 rounded-full focus:outline-none focus-visible:ring-2"
            style={{
              background: view === "projects" || view === "detail" ? C.tealDeep : C.teal,
              color: "#fff",
            }}
          >
            Projects
          </button>
        </nav>

        <button
          className="md:hidden p-2 focus:outline-none focus-visible:ring-2 rounded"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t px-5 py-4 flex flex-col gap-4" style={{ borderColor: C.line }}>
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => {
                l.action();
                setMobileOpen(false);
              }}
              className="text-left text-sm font-medium"
              style={{ color: C.inkSoft }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => {
              goProjects();
              setMobileOpen(false);
            }}
            className="text-left text-sm font-semibold px-4 py-2 rounded-full w-fit"
            style={{ background: C.teal, color: "#fff" }}
          >
            Projects
          </button>
        </div>
      )}
    </header>
  );
}

/* ============================================================
   HOME VIEW
   ============================================================ */
function Home({ goProjects, openProject }) {
  return (
    <>
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-20">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-8"
          style={{ borderColor: C.lineStrong, fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.teal }} />
          <span className="text-xs tracking-wide" style={{ color: C.slate }}>
            DATA ANALYST — PORTFOLIO REPORT
          </span>
        </div>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl leading-[0.98] mb-6"
          style={{ fontFamily: "'Fraunces', serif", color: C.ink, fontWeight: 600 }}
        >
          Hi, I&rsquo;m
          <br />
          Anushka Yadav.
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed mb-10" style={{ color: C.inkSoft }}>
          I&rsquo;m a Data Analyst who turns raw business data into decisions —
          building ETL pipelines, data models, interactive dashboards, and KPI
          reporting with SQL, Python, Power BI, Advanced Excel, and Azure.
        </p>

        <div className="flex flex-wrap gap-3 mb-14">
          <button
            onClick={goProjects}
            className="px-5 py-3 rounded-full text-sm font-semibold flex items-center gap-2 focus:outline-none focus-visible:ring-2"
            style={{ background: C.ink, color: C.paper }}
          >
            View Projects <ArrowUpRight size={16} />
          </button>
          <a
            href="mailto:anushka51203@gmail.com"
            className="px-5 py-3 rounded-full text-sm font-semibold flex items-center gap-2 border focus:outline-none focus-visible:ring-2"
            style={{ borderColor: C.lineStrong, color: C.inkSoft }}
          >
            <Mail size={16} /> Get in touch
          </a>
        </div>

        {/* ledger stat strip — signature motif */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 pt-8 border-t" style={{ borderColor: C.line }}>
          {[
            ["388K+", "ERP records modeled"],
            ["16", "Tables, one normalized schema"],
            ["8", "Power BI dashboards, one platform"],
            ["4", "Featured case studies"],
          ].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", color: C.teal }} className="text-2xl font-semibold">
                {num}
              </div>
              <div className="text-xs mt-1" style={{ color: C.slate }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT + EDUCATION */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3">
          <Eyebrow>About</Eyebrow>
          <p className="text-base leading-relaxed" style={{ color: C.inkSoft }}>
            My work focuses on transforming raw business data into actionable
            insight through ETL pipelines, data modeling, interactive
            dashboards, and KPI reporting. I enjoy solving real business
            problems by combining analytics, visualization, and automation —
            from a 388,000-record Azure ERP platform to a live-refreshing
            Excel dashboard.
          </p>
        </div>
        <div className="md:col-span-2">
          <Eyebrow>Education</Eyebrow>
          <div className="p-5 rounded-lg border" style={{ borderColor: C.line, background: C.paperRaise }}>
            <div className="flex items-start gap-3">
              <GraduationCap size={20} style={{ color: C.teal }} className="mt-0.5 shrink-0" />
              <div>
                <div className="font-medium" style={{ color: C.ink }}>
                  B.Tech — Computer Science &amp; Engineering (AI &amp; ML)
                </div>
                <div className="text-sm mt-1" style={{ color: C.slate }}>
                  Govind Ballabh Pant Institute of Engineering &amp; Technology (GBPIET)
                </div>
                <div
                  className="text-xs mt-2"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: C.teal }}
                >
                  2021 – 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 scroll-mt-20">
        <Eyebrow>Skills</Eyebrow>
        <h2 className="text-3xl mb-8" style={{ fontFamily: "'Fraunces', serif", color: C.ink }}>
          What I work with
        </h2>
        <div className="rounded-lg border px-5" style={{ borderColor: C.line, background: C.paperRaise }}>
          {SKILLS.map((s) => (
            <LedgerRow key={s.group} label={s.group}>
              {s.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </LedgerRow>
          ))}
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 scroll-mt-20">
        <Eyebrow>Certificates</Eyebrow>
        <h2 className="text-3xl mb-8" style={{ fontFamily: "'Fraunces', serif", color: C.ink }}>
          Certifications
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {CERTIFICATES.map((c) => (
            <div
              key={c.name}
              className="p-4 rounded-lg border flex items-start gap-3"
              style={{ borderColor: C.line, background: C.paperRaise }}
            >
              <Award size={18} style={{ color: C.amber }} className="mt-0.5 shrink-0" />
              <div>
                <div className="text-sm font-medium" style={{ color: C.ink }}>
                  {c.name}
                </div>
                <div className="text-xs mt-0.5" style={{ color: C.slate }}>
                  {c.issuer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERNSHIPS */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <Eyebrow>Experience</Eyebrow>
        <h2 className="text-3xl mb-8" style={{ fontFamily: "'Fraunces', serif", color: C.ink }}>
          Internships
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {INTERNSHIPS.map((i) => (
            <div key={i.company} className="p-5 rounded-lg border" style={{ borderColor: C.line, background: C.paperRaise }}>
              <div className="flex items-center gap-2 mb-3">
                <Briefcase size={16} style={{ color: C.teal }} />
                <span className="font-medium" style={{ color: C.ink }}>
                  {i.company}
                </span>
              </div>
              <div className="text-xs mb-3" style={{ fontFamily: "'JetBrains Mono', monospace", color: C.slate }}>
                {i.role}
              </div>
              <ul className="space-y-2">
                {i.points.map((p, idx) => (
                  <li key={idx} className="text-sm flex gap-2" style={{ color: C.inkSoft }}>
                    <ChevronRight size={14} className="mt-1 shrink-0" style={{ color: C.amber }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PREVIEW STRIP */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className="text-3xl" style={{ fontFamily: "'Fraunces', serif", color: C.ink }}>
              Featured projects
            </h2>
          </div>
          <button
            onClick={goProjects}
            className="hidden sm:flex items-center gap-1 text-sm font-medium focus:outline-none focus-visible:ring-2"
            style={{ color: C.teal }}
          >
            View all <ArrowUpRight size={15} />
          </button>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {FEATURED_PROJECTS.slice(0, 4).map((p) => (
            <button
              key={p.id}
              onClick={() => openProject(p, "featured")}
              className="text-left p-5 rounded-lg border transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2"
              style={{ borderColor: C.line, background: C.paperRaise }}
            >
              <div
                className="text-xs mb-2"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: C.amber }}
              >
                {p.index}
              </div>
              <div className="font-medium mb-1" style={{ color: C.ink }}>
                {p.name}
              </div>
              <div className="text-sm" style={{ color: C.slate }}>
                {p.tagline}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 scroll-mt-20">
        <Eyebrow>Get in touch</Eyebrow>
        <h2 className="text-3xl mb-8" style={{ fontFamily: "'Fraunces', serif", color: C.ink }}>
          Let&rsquo;s connect
        </h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/in/anushka-yadav-6154492b8"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full border text-sm font-medium focus:outline-none focus-visible:ring-2"
            style={{ borderColor: C.lineStrong, color: C.inkSoft }}
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com/anusshkaydv"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full border text-sm font-medium focus:outline-none focus-visible:ring-2"
            style={{ borderColor: C.lineStrong, color: C.inkSoft }}
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="mailto:anushka51203@gmail.com"
            className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium focus:outline-none focus-visible:ring-2"
            style={{ background: C.ink, color: C.paper }}
          >
            <Mail size={16} /> anushka51203@gmail.com
          </a>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   PROJECTS LIST VIEW
   ============================================================ */
function ProjectsList({ openProject }) {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
      <Eyebrow>Index</Eyebrow>
      <h1 className="text-4xl sm:text-5xl mb-4" style={{ fontFamily: "'Fraunces', serif", color: C.ink }}>
        Projects
      </h1>
      <p className="max-w-xl mb-14 text-base" style={{ color: C.slate }}>
        Four featured case studies, plus additional analytics and applied
        development work. Click any project to open the full write-up.
      </p>

      {/* FEATURED */}
      <div className="mb-16">
        <h2
          className="text-sm uppercase tracking-widest mb-6 pb-3 border-b"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: C.ink, borderColor: C.line, letterSpacing: "0.1em" }}
        >
          Featured Projects
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {FEATURED_PROJECTS.map((p) => (
            <button
              key={p.id}
              onClick={() => openProject(p, "featured")}
              className="text-left p-6 rounded-lg border transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2"
              style={{ borderColor: C.line, background: C.paperRaise }}
            >
              <div className="flex items-center justify-between mb-3">
                <span style={{ fontFamily: "'JetBrains Mono', monospace", color: C.amber }} className="text-xs">
                  {p.index}
                </span>
                <ArrowUpRight size={16} style={{ color: C.slate }} />
              </div>
              <div className="font-medium mb-2" style={{ color: C.ink, fontSize: "1.05rem" }}>
                {p.name}
              </div>
              <div className="text-sm mb-4" style={{ color: C.slate }}>
                {p.tagline}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.slice(0, 4).map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* DATA ANALYTICS PROJECTS */}
      <div className="mb-16">
        <h2
          className="text-sm uppercase tracking-widest mb-6 pb-3 border-b"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: C.ink, borderColor: C.line, letterSpacing: "0.1em" }}
        >
          Data Analytics Projects
        </h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {ANALYTICS_PROJECTS.map((p) => (
            <button
              key={p.id}
              onClick={() => openProject(p, "analytics")}
              className="text-left p-5 rounded-lg border transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2"
              style={{ borderColor: C.line, background: C.paperRaise }}
            >
              <div className="font-medium mb-2" style={{ color: C.ink }}>
                {p.name}
              </div>
              <div className="text-sm mb-4" style={{ color: C.slate }}>
                {p.tagline}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* OTHER PROJECTS */}
      <div>
        <h2
          className="text-sm uppercase tracking-widest mb-6 pb-3 border-b"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: C.ink, borderColor: C.line, letterSpacing: "0.1em" }}
        >
          Other Projects
        </h2>
        <div className="rounded-lg border divide-y" style={{ borderColor: C.line, background: C.paperRaise }}>
          {OTHER_PROJECTS.map((p) => (
            <button
              key={p.id}
              onClick={() => openProject(p, "other")}
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2"
              style={{ borderColor: C.line }}
            >
              <div>
                <div className="font-medium text-sm" style={{ color: C.ink }}>
                  {p.name}
                </div>
                <div className="text-xs mt-0.5" style={{ color: C.slate }}>
                  {p.tagline}
                </div>
              </div>
              <ArrowUpRight size={16} className="shrink-0" style={{ color: C.slate }} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROJECT DETAIL VIEW
   ============================================================ */
function ProjectDetail({ project, kind, goBack }) {
  if (!project) return null;
  const isFeatured = kind === "featured";

  return (
    <section className="max-w-4xl mx-auto px-5 sm:px-8 py-16">
      <button
        onClick={goBack}
        className="flex items-center gap-2 text-sm font-medium mb-10 focus:outline-none focus-visible:ring-2"
        style={{ color: C.slate }}
      >
        <ArrowLeft size={16} /> Back to projects
      </button>

      {isFeatured && (
        <div style={{ fontFamily: "'JetBrains Mono', monospace", color: C.amber }} className="text-sm mb-3">
          {project.index}
        </div>
      )}

      <h1 className="text-3xl sm:text-4xl mb-4" style={{ fontFamily: "'Fraunces', serif", color: C.ink }}>
        {project.name}
      </h1>
      <p className="text-base mb-6" style={{ color: C.slate }}>
        {project.tagline}
      </p>

      <div className="flex flex-wrap gap-2 mb-10">
        {(project.tech || []).map((t) => (
          <Chip key={t} tone="solid">
            {t}
          </Chip>
        ))}
      </div>

      {project.shots && (
  <div className="grid sm:grid-cols-2 gap-6 mb-10">
    {project.shots.map((s) => (
      <div
        key={s.title}
        className="rounded-lg overflow-hidden border"
        style={{
          borderColor: C.line,
          background: C.paperRaise,
        }}
      >
        <img
          src={s.image}
          alt={s.title}
          className="w-full aspect-video object-cover"
        />

        <div
          className="p-3 text-sm font-medium"
          style={{ color: C.ink }}
        >
          {s.title}
        </div>
      </div>
    ))}
  </div>
)}

      {project.description && (
        <p className="text-base leading-relaxed mb-8" style={{ color: C.inkSoft }}>
          {project.description}
        </p>
      )}

      {project.highlights && (
        <div className="mb-10">
          <h2
            className="text-sm uppercase tracking-widest mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: C.ink, letterSpacing: "0.1em" }}
          >
            Highlights
          </h2>
          <ul className="space-y-3">
            {project.highlights.map((h, idx) => (
              <li key={idx} className="flex gap-3 text-sm" style={{ color: C.inkSoft }}>
                <ChevronRight size={15} className="mt-0.5 shrink-0" style={{ color: C.teal }} />
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold focus:outline-none focus-visible:ring-2"
        style={{ background: C.ink, color: C.paper }}
      >
        <Github size={16} /> View on GitHub <ExternalLink size={14} />
      </a>
    </section>
  );
}

/* ============================================================
   ROOT
   ============================================================ */
export default function Portfolio() {
  const [view, setView] = useState("home"); // home | projects | detail
  const [selected, setSelected] = useState(null);
  const [selectedKind, setSelectedKind] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pendingScroll, setPendingScroll] = useState(null);

  useEffect(() => {
    if (view === "home" && pendingScroll) {
      requestAnimationFrame(() => {
        document.getElementById(pendingScroll)?.scrollIntoView({ behavior: "smooth" });
        setPendingScroll(null);
      });
    }
  }, [view, pendingScroll]);

  const goHome = () => {
    setView("home");
    window.scrollTo(0, 0);
  };
  const goSection = (id) => {
    if (view !== "home") {
      setView("home");
      setPendingScroll(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  const goProjects = () => {
    setView("projects");
    window.scrollTo(0, 0);
  };
  const openProject = (p, kind) => {
    setSelected(p);
    setSelectedKind(kind);
    setView("detail");
    window.scrollTo(0, 0);
  };
  const goBackToProjects = () => {
    setView("projects");
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ background: C.paper, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');
        * { font-family: 'Inter', sans-serif; }
        html { scroll-behavior: smooth; }
        button { cursor: pointer; }
        ::selection { background: ${C.teal}; color: white; }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
        }
      `}</style>

      <Nav
        view={view}
        goHome={goHome}
        goSection={goSection}
        goProjects={goProjects}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {view === "home" && <Home goProjects={goProjects} openProject={openProject} />}
      {view === "projects" && <ProjectsList openProject={openProject} />}
      {view === "detail" && (
        <ProjectDetail project={selected} kind={selectedKind} goBack={goBackToProjects} />
      )}

      <footer className="border-t py-10 mt-10" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row justify-between gap-4 items-center">
          <span className="text-xs" style={{ fontFamily: "'JetBrains Mono', monospace", color: C.slate }}>
            © 2026 Anushka Yadav — Built with intent, one dashboard at a time.
          </span>
          <div className="flex gap-4">
            <a href="https://github.com/anusshkaydv" target="_blank" rel="noreferrer" style={{ color: C.slate }}>
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/anushka-yadav-6154492b8" target="_blank" rel="noreferrer" style={{ color: C.slate }}>
              <Linkedin size={16} />
            </a>
            <a href="mailto:anushka51203@gmail.com" style={{ color: C.slate }}>
              <Mail size={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
