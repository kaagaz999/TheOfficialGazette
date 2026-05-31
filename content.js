// ============================================================
//  THE OFFICIAL GAZETTE — CONTENT
//  Vol. I · No. 22 · Week of 31 May 2026
// ============================================================

const GAZETTE = {

  // ── META ──────────────────────────────────────────────────
  meta: {
    title:       "The Official Gazette",
    subtitle:    "Ministry of Accountability",
    subsubtitle: "(Post Vacant Since 1947)",
    edition:     "Vol. I · No. 22",
    price:       "Price: One RTI Application (Processing Time: Indefinite)",
    updated:     "Updated: Upon Receipt of Court Order",
    footer:      "This site is satire. The government, however, is not.",
    footerRight: "© 2026 — No Rights Reserved (We Couldn't Afford A Lawyer)",
  },

  // ── TICKER ────────────────────────────────────────────────
  ticker: [
    "JUDICIARY: Chief Justice clarifies 'cockroach' remark — original transcript remains on record",
    "ELECTIONS: 47 lakh voters removed from Bihar rolls — Election Commission confirms all were dead, migrated, or inconvenient",
    "SATIRE: Cockroach Janta Party website taken down — government denies involvement — website confirms involvement",
    "EMPLOYMENT: Youth unemployment at 8.9% — Chief Justice confirms unemployed youth are parasites — Ministry of Labour confirms no contradiction",
    "PRESS FREEDOM: India ranked 159/180 — officials note ranking compiled by journalists, therefore unreliable",
    "ELECTORAL BONDS: Supreme Court order fully complied with — 847 pages of compliance documents currently under review",
    "STATISTICS: GDP methodology revised for the fourth time this year — revised figure: satisfactory",
    "RTI: Application No. 84,217 update — your query has been forwarded to the department that handles forwarding",
  ],

  // ── HERO BULLETIN ─────────────────────────────────────────
  bulletins: [
    {
      active: true,
      tag: "Official Clarification · May 2026",
      headline: "\"I am pained to read how a section of the media has misquoted my oral observations.\"",
      subtext: `The Chief Justice of India's remarks — delivered on the record, in open court, before a sitting bench — were directed solely at ████████████████████████. The transcript, which is publicly available, does not reflect what was said. Citizens who consulted the transcript are advised to consult the clarification. Citizens who consulted the clarification are advised to feel reassured. The matter is closed.`,
      stamp: "CLARIFIED",
      stampColor: "black",
      attribution: "— Office of the Chief Justice of India, Ministry of Judicial Reassurance",
    },
  ],

  // ── STATS ─────────────────────────────────────────────────
  stats: [
    { label: "Youth Unemployment", value: "8.9%",    note: "Per CJI: excess youth = parasites",  theme: "dark"  },
    { label: "Voters Deleted",     value: "47L",     note: "Bihar SIR — 'cleansed' rolls",       theme: "red"   },
    { label: "Press Freedom",      value: "159/180", note: "RSF 2024 · 'Vibrant Democracy'",     theme: "light" },
    { label: "Pending Promises",   value: "2,184",   note: "Since 2014 (approx.)",               theme: "dark"  },
  ],

  // ── CASE FILES — 6 ───────────────────────────────────────
  files: [
    {
      id: "FILE #2026-CJI-01",
      stamp: "CLARIFIED*",
      stampColor: "black",
      title: "The Cockroach Remarks",
      official: "The Chief Justice's observations were directed at individuals entering professions with fraudulent qualifications. The youth of India are the pillars of a Developed India.",
      reality: "Transcript, 15 May 2026: \"There are youngsters like cockroaches, they don't get any employment... Some of them become RTI activists and they start attacking everyone.\" Clarification issued 18 hours later.",
      footnote: "*Transcript remains on record. Clarification does not alter it.",
    },
    {
      id: "FILE #2026-ECI-02",
      stamp: "ONGOING",
      stampColor: "red",
      title: "Special Intensive Revision — Bihar",
      official: "A routine cleansing of electoral rolls to remove deceased, migrated, and duplicate voters. A constitutional exercise in democratic integrity.",
      reality: "47 lakh voters removed from Bihar rolls ahead of elections. Supreme Court ordered deleted voter list published. Deletion pattern correlated with minority and opposition-leaning constituencies.",
      footnote: "*Bihar elections: October 2025. Revised rolls used. Result: NDA retained power.",
    },
    {
      id: "FILE #2024-EB-03",
      stamp: "UNCONSTITUTIONAL",
      stampColor: "red",
      title: "Electoral Bonds Scheme",
      official: "An anonymous funding mechanism to cleanse political donations of unaccounted cash and protect donor privacy from commercial reprisal.",
      reality: "Struck down unanimously by the Supreme Court, February 2024. ₹16,518 crore raised. 57% to the ruling party. Donor purchases correlated with enforcement raids being dropped against the same companies.",
      footnote: "*Donor data released only after Supreme Court order. Government did not volunteer it.",
    },
    {
      id: "FILE #2016-DEMO-04",
      stamp: "HISTORIC",
      stampColor: "black",
      title: "Demonetisation",
      official: "A decisive intervention to permanently eliminate counterfeit currency, extinguish black money, and terminate terror financing. A masterstroke.",
      reality: "99.3% of demonetised notes returned to banks. 154 deaths in queues documented. Cash in circulation exceeded pre-2016 levels within two years. Black money holdings: unaffected.",
      footnote: "*'Masterstroke' confirmed by sources present at the announcement.",
    },
    {
      id: "FILE #2021-FARM-05",
      stamp: "WITHDRAWN",
      stampColor: "red",
      title: "The Three Farm Laws",
      official: "A progressive regulatory framework to liberate agricultural markets, empower marginal farmers, and encourage private capital investment in Indian agriculture.",
      reality: "Repealed after 13 months and 700+ documented farmer deaths during protests at Delhi's borders. Announced on Guru Nanak Jayanti — four months before UP elections.",
      footnote: "*Coincidence with election calendar noted by all parties except one.",
    },
    {
      id: "FILE #2021-PEGASUS-06",
      stamp: "DENIED",
      stampColor: "black",
      title: "Pegasus Surveillance Programme",
      official: "All interceptions are lawful and conducted per due process. No illegal surveillance of Indian citizens has occurred.",
      reality: "Supreme Court-appointed technical committee found no cooperation from the government. 300+ verified Indian targets: journalists, opposition politicians, sitting judges, and a former Election Commissioner.",
      footnote: "*Government declined to place evidence before the Supreme Court's own panel.",
    },
  ],

  // ── SCHEMES ───────────────────────────────────────────────
  schemes: [
    {
      code: "SCHEME-2026-JUDICIAL",
      title: "Pradhan Mantri Vaad-Vivaad Samadhan Yojana (Clarification Edition)",
      description: "A streamlined mechanism under which any statement made in open court, on the record, before a sitting bench, may be retrospectively reclassified as 'oral observations not intended for publication.' Applications for reclassification must be submitted within 18 hours of the statement appearing in a newspaper. Transcripts are not accepted as evidence of what was said.",
      benefit: "One official clarification per judicial year",
      eligibility: "Available to constitutional office-holders only. Citizens may not apply.",
    },
    {
      code: "SCHEME-2026-VOTER",
      title: "Swachh Matdata Suchi Abhiyan (Special Intensive Edition)",
      description: "A comprehensive programme to ensure the integrity of India's electoral rolls by removing voters who are deceased, who have migrated, who live in opposition-leaning constituencies, or who have not yet been reviewed under this scheme. Citizens who find their names missing are invited to re-enrol using 13 approved documents at their nearest Booth Level Officer between 10am and 12pm on working days.",
      benefit: "Cleaner rolls. Fewer voters. Improved democratic outcomes.",
      eligibility: "Citizens whose names remain on the list after revision.",
    },
    {
      code: "SCHEME-2026-SATIRE",
      title: "Rashtriya Narrative Suraksha Yojana (Digital Edition)",
      description: "An expedited framework to ensure that satirical content operating without proper authorisation does not undermine the stability of democratic institutions. Platforms hosting such content will receive administrative attention within 8 days of viral growth. Clarifications will be issued confirming that no attention was received. This scheme does not exist.",
      benefit: "Stable national narrative. Functional democracy.",
      eligibility: "Not applicable. Scheme does not exist.",
    },
  ],

  // ── REDACTED ──────────────────────────────────────────────
  redacted: {
    title: "CLASSIFIED — Section 7(b) · Eyes Only · Do Not Reproduce",
    lines: [
      { redacted: true,  text: "The domain registrar received a written request from an authority whose name is redacted under Section 8(1)(a) of the RTI Act" },
      { redacted: true,  text: "Electoral bond purchases by three infrastructure companies spiked 72 hours before CBI raid notices against them were quietly withdrawn" },
      { redacted: false, text: "The clarification was issued before the transcript was read by the people writing the clarification." },
      { redacted: true,  text: "47 lakh deletions from Bihar rolls were processed in 11 days — the same exercise in a comparable democracy takes 18 months" },
      { redacted: true,  text: "When asked who authorised the website takedown, the ministry said the ministry had no record of the ministry being asked" },
    ],
    footnote: "DECLASSIFIED UNDER RTI — [Remaining 2,847 pages: Pending Since 2019 · File No. RTI/2019/084217 · Estimated clearance: after relevant persons retire or the matter becomes historical]",
  },

};
