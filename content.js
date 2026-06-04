// ============================================================
//  THE OFFICIAL GAZETTE — CONTENT
//  Vol. I · No. 23 · Week of 4 June 2026
// ============================================================

const GAZETTE = {

  // ── META ──────────────────────────────────────────────────
  meta: {
    title:        "The Official Gazette",
    motto:        "All the News That's Fit to Suppress",
    subtitle:     "Ministry of Accountability",
    subsubtitle:  "(Post Vacant Since 1947)",
    edition:      "Vol. I · No. 23",
    dateline:     "Thursday, 4 June 2026 · New Delhi",
    price:        "Price: ₹0 (Complimentary) · £0 (Unsolicited) · $0 (Presumptuous)",
    updated:      "Corrections issued upon receipt of court order",
    colophon:     "Published weekly by the Editorial Desk, Ministry of Accountability (Post Vacant). Registered under the Press and Registration of Books Act, 1867, insofar as satire may be registered. ISSN: PENDING (Application No. 84,218 · Status: Forwarded). Printed at: Location Undisclosed for Operational Reasons. All facts herein are accurate. Official statements are reproduced as found.",
    footer:       "This publication is satire. The government, however, is not.",
    footerRight:  "© 2026 — No Rights Reserved (We Couldn't Afford a Lawyer)",
    index: [
      { label: "Official Bulletin",   page: "Page 1" },
      { label: "Case Files",          page: "Page 2" },
      { label: "Upcoming Schemes",    page: "Page 3" },
      { label: "Classified",          page: "Page 4" },
    ],
  },

  // ── TICKER ────────────────────────────────────────────────
  ticker: [
    "JUDICIARY: Chief Justice clarifies 'cockroach' remark — original transcript remains on record and continues to say what it says",
    "ELECTIONS: 47 lakh voters removed from Bihar rolls — Election Commission confirms all were deceased, migrated, or inconveniently located in opposition constituencies",
    "EMPLOYMENT: Youth unemployment at 8.9% — government confirms this is not a problem, it is an opportunity for skill development",
    "PRESS FREEDOM: India ranked 159 of 180 — Ministry of Information notes ranking was compiled by journalists, therefore unreliable",
    "ELECTORAL BONDS: Supreme Court compliance fully achieved — 847 pages of compliance documents clarify why original documents cannot be shared",
    "STATISTICS: GDP growth revised upward for the third consecutive quarter — methodology also revised, upward, for the third consecutive quarter",
    "RTI: Application No. 84,217 — your query has been forwarded to the department responsible for forwarding queries of this nature",
    "JUDICIARY II: Supreme Court technical committee on Pegasus finds no evidence — government confirms it provided no evidence to assist the committee",
    "SCHEMES: Pradhan Mantri Clarification Yojana launch delayed — clarification on delay expected within 18 hours",
  ],

  // ── EDITOR'S NOTICE ───────────────────────────────────────
  notice: {
    heading: "Notice to Readers",
    body: "This publication is committed to accuracy. Where the facts differ from official statements, the official statements have been reproduced verbatim and the facts have been placed immediately afterward. Readers are invited to draw their own conclusions, subject to applicable sedition provisions.",
  },

  // ── HERO BULLETIN ─────────────────────────────────────────
  bulletins: [
    {
      active: true,
      tag: "Official Clarification · May 2026",
      dateline: "New Delhi, 18 May 2026",
      headline: "\"I am pained to read how a section of the media has misquoted my oral observations.\"",
      pullquote: "The transcript, which is publicly available, does not reflect what was said.",
      subtext: `The Chief Justice of India's remarks — delivered on the record, in open court, before a sitting bench — were directed solely at ████████████████████████. The transcript, which is publicly available, does not reflect what was said. Citizens who consulted the transcript are advised to consult the clarification. Citizens who consulted the clarification are advised to feel reassured. The clarification was issued before the persons writing it had read the transcript. The matter is closed.`,
      continuation: "Continued on Page 4 · See also: Clarification of Clarification, forthcoming",
      stamp: "CLARIFIED",
      stampColor: "black",
      attribution: "— Office of the Chief Justice of India, Ministry of Judicial Reassurance",
    },
  ],

  // ── STATS ─────────────────────────────────────────────────
  stats: [
    { label: "Youth Unemployment", value: "8.9%",    note: "Per CJI: excess youth = parasites",  theme: "dark"  },
    { label: "Voters Deleted",     value: "47L",     note: "Bihar SIR — 'cleansed' rolls",       theme: "red"   },
    { label: "Press Freedom",      value: "159/180", note: "RSF Index · 'Vibrant Democracy'",    theme: "light" },
    { label: "Pending Promises",   value: "2,184",   note: "Since 2014 · approx.",               theme: "dark"  },
  ],

  // ── CASE FILES — 6 ───────────────────────────────────────
  files: [
    {
      id: "FILE #2026-CJI-01",
      stamp: "CLARIFIED*",
      stampColor: "black",
      dateline: "New Delhi, 15–18 May 2026",
      title: "The Cockroach Remarks",
      official: "The Chief Justice's observations were directed at individuals entering professions with fraudulent qualifications. The youth of India are the pillars of a Developed India.",
      reality: "Transcript, 15 May 2026: \"There are youngsters like cockroaches, they don't get any employment... Some of them become RTI activists and they start attacking everyone.\" Clarification issued 18 hours later. Transcript unaltered.",
      footnote: "*Clarification does not alter transcript. Transcript remains on record.",
    },
    {
      id: "FILE #2026-ECI-02",
      stamp: "ONGOING",
      stampColor: "red",
      dateline: "Patna–New Delhi, 2025–2026",
      title: "Special Intensive Revision — Bihar",
      official: "A routine cleansing of electoral rolls to remove deceased, migrated, and duplicate voters. A constitutional exercise in democratic integrity, conducted per established procedure.",
      reality: "47 lakh voters removed from Bihar rolls ahead of state elections. Supreme Court ordered the deleted voter list published. Deletion pattern correlated with minority and opposition-leaning constituencies. Bihar elections held October 2025. NDA retained power.",
      footnote: "*Supreme Court order to publish deleted list: complied with after elections concluded.",
    },
    {
      id: "FILE #2024-EB-03",
      stamp: "UNCONSTITUTIONAL",
      stampColor: "red",
      dateline: "New Delhi, 2018–2024",
      title: "Electoral Bonds Scheme",
      official: "An anonymous funding mechanism to cleanse political donations of black money and protect donors from commercial reprisal. A landmark reform in electoral transparency.",
      reality: "Struck down unanimously, Supreme Court, February 2024. ₹16,518 crore raised. 57% to ruling party. Donor purchases correlated with enforcement agency raids being dropped. Data released only by court order.",
      footnote: "*'Transparency reform' required Supreme Court intervention to produce any transparency.",
    },
    {
      id: "FILE #2016-DEMO-04",
      stamp: "HISTORIC",
      stampColor: "black",
      dateline: "New Delhi, 8 November 2016",
      title: "Demonetisation",
      official: "A decisive surgical strike on black money, counterfeit currency, and terror financing. The masterstroke that changed India forever.",
      reality: "99.3% of demonetised notes returned to banks. 154 deaths in queues documented by media. Cash in circulation exceeded pre-2016 levels within two years. Black money: unaffected. Terror financing: unaffected.",
      footnote: "*RBI Annual Report 2018 confirmed 99.3% return rate. Masterstroke status: unrevised.",
    },
    {
      id: "FILE #2021-FARM-05",
      stamp: "WITHDRAWN",
      stampColor: "red",
      dateline: "New Delhi, 2020–2021",
      title: "The Three Farm Laws",
      official: "A progressive framework to liberate agricultural markets, empower marginal farmers, and attract private investment. A generational reform for India's agrarian economy.",
      reality: "Repealed after 13 months. 700+ farmer deaths during protests at Delhi's borders documented. Repeal announced on Guru Nanak Jayanti — four months before UP elections.",
      footnote: "*Coincidence with UP election calendar noted by all parties except one.",
    },
    {
      id: "FILE #2021-PEGASUS-06",
      stamp: "DENIED",
      stampColor: "black",
      dateline: "New Delhi, 2017–2021",
      title: "Pegasus Surveillance Programme",
      official: "All interceptions are lawful and conducted per established legal procedure. No illegal surveillance of any Indian citizen has occurred or is occurring.",
      reality: "Supreme Court technical committee: found no government cooperation. 300+ verified Indian targets including sitting judges, opposition politicians, journalists, and a former Election Commissioner. Government provided no evidence to the court's own panel.",
      footnote: "*Technical committee's inability to find evidence was assisted by government's refusal to provide any.",
    },
  ],

  // ── SCHEMES ───────────────────────────────────────────────
  schemes: [
    {
      code: "SCHEME-2026-JUDICIAL",
      title: "Pradhan Mantri Vaad-Vivaad Samadhan Yojana (Clarification Edition)",
      description: "A streamlined mechanism under which any statement made in open court, on the record, before a sitting bench, may be retrospectively reclassified as 'oral observations not intended for publication.' Applications for reclassification must be submitted within 18 hours of the statement appearing in any newspaper. Transcripts are not accepted as evidence of what was said. The clarification supersedes the record.",
      benefit: "One official clarification per judicial year. Additional clarifications available at ministerial discretion.",
      eligibility: "Constitutional office-holders only. Citizens may not apply. RTI applications regarding this scheme will be forwarded.",
    },
    {
      code: "SCHEME-2026-VOTER",
      title: "Swachh Matdata Suchi Abhiyan (Special Intensive Edition)",
      description: "A comprehensive programme to ensure the integrity of India's electoral rolls by removing voters who are deceased, who have migrated, who reside in opposition-leaning constituencies, or who have not yet been reviewed under this or any prior scheme. Citizens who find their names missing may re-enrol using 13 approved documents at their nearest Booth Level Officer, available between 10am and 12pm on working days, excluding gazetted holidays.",
      benefit: "Cleaner rolls. Fewer voters. Consistently improved democratic outcomes.",
      eligibility: "Citizens whose names remain on the roll following revision.",
    },
    {
      code: "SCHEME-2026-SATIRE",
      title: "Rashtriya Narrative Suraksha Yojana (Digital Edition)",
      description: "An expedited administrative framework to ensure that satirical content operating without proper authorisation does not destabilise democratic institutions or embarrass constitutional office-holders. Platforms hosting such content will receive attention within 8 business days of viral growth. Official clarifications will subsequently confirm that no such attention was received or given. This scheme does not exist and this description has not been written.",
      benefit: "Stable national narrative. Functional democracy. This benefit does not exist.",
      eligibility: "Not applicable. Scheme does not exist. You have not read this.",
    },
  ],

  // ── REDACTED ──────────────────────────────────────────────
  redacted: {
    title: "CLASSIFIED — Section 7(b) · Eyes Only · Do Not Reproduce · You Are Being Watched",
    lines: [
      { redacted: true,  text: "The domain registrar received a written communication from an authority whose designation is exempt under Section 8(1)(a) of the RTI Act, 2005" },
      { redacted: true,  text: "Electoral bond purchases by three infrastructure companies increased 72 hours before CBI raids against those companies were administratively withdrawn" },
      { redacted: false, text: "The clarification was drafted and issued before the persons drafting it had read the transcript they were clarifying." },
      { redacted: true,  text: "The 47 lakh Bihar voter deletions were processed in 11 days — a comparable exercise in any functioning democracy requires 18 months and judicial oversight" },
      { redacted: true,  text: "When asked which authority ordered the website taken down, the ministry confirmed the ministry had no record of being asked" },
      { redacted: true,  text: "The Pegasus technical committee was provided no server logs, no procurement documents, and no cooperation of any kind by the government that appointed it" },
    ],
    footnote: "PARTIALLY DECLASSIFIED UNDER RTI Act, 2005 — File No. RTI/2019/084217 · Original application: 14 March 2019 · Status: Under Consideration · Remaining pages: 2,847 · Estimated clearance: Following retirement of all relevant officers, whichever is later.",
  },

};
