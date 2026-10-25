import type { Industry } from './industries';

// Possible applications of the services, not a list of client work.
// The key is the Swedish slug. `slug` is the public English URL segment.
export type IndustryEnglish = Omit<Industry, 'related'>;

export const industryCopyEn: Record<string, IndustryEnglish> = {
  'bank-finans': {
    slug: 'banking',
    name: 'Banking and finance',
    title: 'Advertising and AI support for banking and finance | Adorable',
    description: 'Support for marketing teams in banking and finance. Clear campaigns, follow-up and practical AI training, with a defined responsibility.',
    intro: 'I help marketing teams in banking and finance with campaigns, follow-up and practical use of AI. We start from a clear offer and your internal approval process.',
    focus: 'For a financial service, the customer needs to understand both the offer and what applies. I work on the ad message and the path to the relevant information. Your specialists review product terms and regulatory requirements.',
    items: [
      ['Advertising with clear approvals', 'A campaign plan, message and brief for a business service or a product launch. We decide who approves the content and which limits apply before anything is published.'],
      ['Follow-up on enquiries', 'We separate interest, applications and an actual customer relationship. The measurement is designed with the people responsible, without a promise that every step can be tracked.'],
      ['AI for the marketing team', 'Practical training, or a defined test, for example to structure approved material and prepare drafts. A person reviews the result before it is used.']
    ],
    boundary: 'The work is marketing and the team’s way of working, not automated credit decisions, investment advice or decisions about customers. Legal review, information security and access to data are approved by the people responsible.',
    faqs: [
      ['Can you guarantee that our advertising follows every rule?', 'No. I can work inside the limits you have approved and coordinate the campaign, but legal review and product responsibility stay with the people responsible.'],
      ['Do we need to share customer or application data?', 'We start with the smallest amount of information that is needed. Customer data should not be used in an AI test until the processing, the tool and the permissions have been approved.']
    ]
  },
  'byggbranschen': {
    slug: 'construction',
    name: 'Construction',
    title: 'AI for construction companies: training and workflows | Adorable',
    description: 'Practical AI support for construction companies: training, information work and defined workflows. Start with a task that can be reviewed.',
    intro: 'I help construction companies use AI in information and office work. We pick a task that comes back and test whether it can be simpler without losing control of the content.',
    focus: 'A useful first step can be structuring meeting notes, or preparing a status report from approved sources. The result has to be checkable against those sources, and the responsible person has to be able to correct it.',
    items: [
      ['Training on your own tasks', 'A workshop for project management, administration or marketing. We practise on tasks people recognise, and on spotting answers that are wrong or incomplete.'],
      ['Drafts and summaries', 'A pilot that, for example, collects decisions and open questions from a defined set of sources. We test what is missing, who reviews it and how the information stays current.'],
      ['Marketing the offer', 'If the company also needs advertising, we can plan search ads or B2B campaigns tied to relevant enquiries.']
    ],
    boundary: 'I do not offer AI-controlled site safety, structural calculations or machine monitoring. An AI draft does not replace the responsible project manager or a technical specialist.',
    faqs: [
      ['Can we start without connecting the project system?', 'Yes. A first test can use approved documents and anonymised examples. A possible integration is judged and agreed only after we have seen that the workflow is useful.'],
      ['Can AI write our site diaries automatically?', 'We can look at support for structuring a draft from information you provide. Someone still has to check that it is accurate and complete before it becomes project documentation.']
    ]
  },
  'byraer': {
    slug: 'agencies',
    name: 'Agencies',
    title: 'Paid social specialist and AI support for agencies | Adorable',
    description: 'Add Peter Rosdahl to the agency for advertising and AI. Campaign management, creative testing, pitch support and practical workshops.',
    intro: 'I add senior advertising and AI skills to agencies. As a specialist on a client engagement, support in the planning, or an extra pair of hands in the ongoing work.',
    focus: 'You keep the client relationship and your way of working. We decide my role, how the client is involved and who approves what. Creative ideas and campaign results need to be discussable in the same working group.',
    items: [
      ['Campaigns as part of your team', 'Planning, setup and follow-up in the agreed ad channels. You get material you can use in the client conversation, and a clear split of responsibility.'],
      ['Creative brief and feedback', 'I turn what the campaigns are teaching you into concrete questions for the next production: message, opening, format and offer. The agency’s creatives own the production.'],
      ['AI in agency work', 'Workshops and defined tests for research, briefs and internal processes. We check client confidentiality and rights before material is used in the tools.']
    ],
    boundary: 'The collaboration can sit under the agency’s brand if that is agreed and it fits the client contract and the permissions. I do not promise hidden access, or that the client will never need to know I am involved.',
    faqs: [
      ['Can you join a pitch?', 'Yes. I can contribute a channel judgement, a proposed setup and an estimate of the work. We separate hypotheses in the pitch from things that have actually been checked in the client’s accounts.'],
      ['Do you take over the client relationship?', 'Not unless that is agreed. We decide contact paths, meetings and reporting so that I complement your team.']
    ]
  },
  'e-handel': {
    slug: 'ecommerce',
    name: 'Ecommerce',
    title: 'Advertising and AI for ecommerce | Adorable',
    description: 'Ecommerce advertising focused on the offer, the creative and a profitable follow-up. Campaigns, test plans and practical AI support with Peter Rosdahl.',
    intro: 'I help ecommerce companies with advertising, creative tests and follow-up. We start from the range, the margins and what makes a customer choose you.',
    focus: 'A high reported ROAS does not say everything. Returns, discounts, repeat customers and product margins affect the business. We need to separate the ad platform’s numbers from what you actually sell and earn.',
    items: [
      ['Priority products and channels', 'We choose which offers to start with and judge Meta, Google or other relevant channels. Stock, season and landing pages need to fit the campaign plan.'],
      ['Creative tests built on product use', 'A brief for demonstrations, situations of use and common objections. I follow up on what you should produce more of and what needs to change.'],
      ['Measurement and AI support', 'A review of conversion goals and a clear follow-up. A separate AI test can help with drafts of product copy, checked against your product information.']
    ],
    boundary: 'I do not guarantee a sales level or complete attribution. Product feeds, website changes and larger integrations are scoped separately. Product claims and rights need your approval.',
    faqs: [
      ['Do we have to start in several ad channels?', 'No. We prioritise where the offer, the creative and the measurement give you the best chance to learn. More channels also mean more production and more follow-up.'],
      ['Can AI write all of our product copy?', 'We can test drafts for a limited range. Product facts, measurements, terms and claims need to come from approved material and be reviewed before publication.']
    ]
  },
  'fackforbund': {
    slug: 'trade-unions',
    name: 'Trade unions',
    title: 'Advertising and AI support for trade unions | Adorable',
    description: 'Support with member recruitment, campaign follow-up and AI training for trade unions. Clear member value, responsibility and careful handling of data.',
    intro: 'I help trade unions plan advertising for member recruitment and develop how the communications team works with AI. We start from the value of membership and the action you want to make easier.',
    focus: 'A clear answer to why someone should join matters more than more campaign variants. We test how the offer is understood and follow the path from ad to application, with care for which information may be processed.',
    items: [
      ['Recruitment messages and campaigns', 'Planning, a creative brief and campaign management from approved audiences and membership terms. We separate raising interest from a completed application.'],
      ['Follow-up on the application flow', 'We look at where interested people need more information and which steps can be simpler. Technical changes and the processing of personal data are checked with the people responsible.'],
      ['AI training for communications', 'Practice in structuring public material, preparing drafts and reviewing answers. Member cases and sensitive information are not used as open practice material.']
    ],
    boundary: 'Member recruitment is not the same as political advertising. The content of each campaign and the channel rules have to be judged. We do not use member registers or sensitive data as an ad audience without a prior review and approval.',
    faqs: [
      ['Can we advertise every issue the union works on?', 'That cannot be promised. The platforms’ rules and the content of the campaign decide what is allowed. That is checked before a setup is proposed.'],
      ['Can you help an existing communications team?', 'Yes. I can take responsibility for campaigns and follow-up, or support test plans and AI training. You own the message, the membership terms and the approvals.']
    ]
  },
  'fastighetsbolag': {
    slug: 'real-estate',
    name: 'Real estate',
    title: 'Advertising and AI for property companies | Adorable',
    description: 'Campaigns for homes and commercial space, clearer enquiries and practical AI support. Peter Rosdahl helps from planning through to follow-up.',
    intro: 'I help property companies advertise homes, commercial space and projects. We make the offer clear and follow up on which enquiries the leasing or sales team can work with.',
    focus: 'A vacant space and a housing project have different buyers and decision paths. We keep the jobs separate, choose relevant channels and make sure the ad leads to the right property information and the right way to get in touch.',
    items: [
      ['A campaign plan for the property', 'Message, goal and creative needs for a space, a project or an area. Channel choice and audiences are checked against the limits that apply to that advertising.'],
      ['From interest to a conversation', 'We do not only follow forms. We also use feedback from the team: are the enquiries relevant, and do they move on to a viewing or a call?'],
      ['AI in the information work', 'A workshop or a pilot for compiling approved property information and preparing drafts. Availability, areas and terms always need to be reviewed.']
    ],
    boundary: 'I do not promise street-level targeting, or that every audience choice is allowed for housing ads. I also do not promise full occupancy or automatic replies to tenants without approval.',
    faqs: [
      ['Can we advertise locally for a housing project?', 'We assess the geographic options and the rules for the channel and the ad category. The setup has to start from what is actually allowed.'],
      ['Can we follow results all the way to a contract?', 'If you have approved data and a working feedback loop, we can weigh how the enquiries develop. That does not mean every contract can safely be attributed to a specific ad.']
    ]
  },
  'fmcg': {
    slug: 'fmcg',
    name: 'FMCG',
    title: 'Advertising for FMCG and consumer brands | Adorable',
    description: 'Plan campaigns for product launches and seasons with Peter Rosdahl. Channel choice, creative testing and a clear follow-up for consumer brands.',
    intro: 'I help consumer brands with digital advertising for launches, seasons and ongoing communication. We connect the creative to how the product is used and where it can be bought.',
    focus: 'When the sale happens in a shop, not every purchase can be tied to an ad. So we decide what the campaign should achieve, which data exists and which conclusions that data can actually support.',
    items: [
      ['Launch and campaign plan', 'A plan for message, timing and ad channels that fit distribution and availability. A campaign should not create demand for a product the customer cannot find.'],
      ['Creative testing', 'A brief for different situations of use, product benefits and formats. I read the ad response and give feedback to whoever produces the next assets.'],
      ['Follow-up without false precision', 'We report reach, response and the available sales information separately. Effect studies or specialist measurement are judged as separate engagements.']
    ],
    boundary: 'I do not promise a link to in-store purchases through location data, or a finished model of marketing effect. Retail media buying and advanced modelling are not automatically part of a campaign engagement.',
    faqs: [
      ['Can you help with a product launch?', 'Yes, with digital campaign planning, a brief, setup and follow-up. We need to understand where the product is available and which messages are approved.'],
      ['How do we measure whether the advertising drives shop sales?', 'We start from which sales data and which comparison exist. Without a suitable measurement setup, we cannot isolate the ad’s effect from price, distribution and other activity.']
    ]
  },
  'forsakring': {
    slug: 'insurance',
    name: 'Insurance',
    title: 'Advertising and AI support for insurance companies | Adorable',
    description: 'Clearer insurance offers in digital advertising. Campaigns, follow-up and AI training for marketing teams, with a defined responsibility.',
    intro: 'I help marketing teams in insurance make the offer understandable in advertising and follow up on relevant enquiries. Your specialists are responsible for terms and product review.',
    focus: 'The customer needs to understand what the insurance covers, who it is relevant for and where the terms are. The ad and the landing page should hold together, so important conditions do not disappear between the click and the quote.',
    items: [
      ['Message and campaign structure', 'We work with approved product benefits and clear ways to get in touch. The campaign plan separates, for example, a private customer’s need from a business policy.'],
      ['Quality of quote requests', 'We decide what counts as relevant interest and follow up with your team. A cheap enquiry is not a good result if the product does not fit the customer.'],
      ['AI support for internal work', 'Training or a test with approved information. The team can practise drafts and summaries, with a review of the content and the sources.']
    ],
    boundary: 'The work does not include automated claims decisions, risk scoring or insurance advice to customers. Legal review and information security need to be approved by the people responsible.',
    faqs: [
      ['Can you simplify the communication without changing the terms?', 'I can help with message and structure, but product owners and the people legally responsible need to review that the wording is correct before publication.'],
      ['Can AI answer customers’ insurance questions directly?', 'That is not part of an ordinary marketing engagement. Customer-facing answers about cover and terms need a separately decided and reviewed setup. We can start with internal draft support.']
    ]
  },
  'organisationer': {
    slug: 'organisations',
    name: 'Organisations',
    title: 'Advertising and AI for organisations | Adorable',
    description: 'Help with campaigns, sign-ups and AI ways of working for organisations. Clear goals, understandable messages and controlled handling of data.',
    intro: 'I help organisations with digital campaigns and practical ways of working with AI. That can be an event, an offer to members or simpler information work in the office.',
    focus: 'Start with the action that matters: a sign-up, an enquiry or the right people seeing the information. That makes both the campaign message and the follow-up more useful.',
    items: [
      ['A campaign with one clear action', 'Planning and delivery for a defined goal. We review the landing page so it is clear who the offer is for and how the visitor continues.'],
      ['Learning for the communications team', 'Reporting of results and feedback on the creative. You get suggestions you can use in the next mailing, campaign or production.'],
      ['AI for the office and communications', 'Practical exercises with public or approved material. We can test summaries and drafts with clear sources and a human review.']
    ],
    boundary: 'I do not promise paid distribution of political messages. Content and channel rules are checked before a campaign is planned. Member registers and sensitive data need a separate review before they are used.',
    faqs: [
      ['Do you also work with small teams?', 'Yes. We can start with a defined engagement that the team is able to follow up. The scope is set from the need and the capacity to do the work.'],
      ['Is this the same setup as for trade unions?', 'There are shared ways of working, but the goal and the responsibility differ. For a trade union the focus may be member recruitment. For another organisation it may be an event or internal training.']
    ]
  },
  'tillvaxtbolag': {
    slug: 'growth-companies',
    name: 'Growth companies',
    title: 'Advertising and AI for growing companies | Adorable',
    description: 'Senior help with channel choice, campaign tests and AI workflows for growing companies. Clear hypotheses and follow-up with Peter Rosdahl.',
    intro: 'I help growing companies prioritise the advertising and test AI where it can make the work simpler. A clear offer and a test that can be evaluated come before more channels.',
    focus: 'Separate learning whether there is demand from scaling something that already works. Early on, the test needs to teach you about the customer. Later, we need to understand quality and economics as the volume changes.',
    items: [
      ['Channel choice and a first test', 'We choose one offer, one audience and one action. You get a hypothesis, a campaign plan and criteria for whether the test should continue, change or stop.'],
      ['Ongoing specialist support', 'I can be responsible for the advertising and the feedback to marketing or sales. We follow the quality of customers and enquiries, not only the growth in clicks.'],
      ['A defined AI workflow', 'We review a repeating internal task and test whether it can be simpler. A pilot needs an owner, and it is measured including review and maintenance.']
    ],
    boundary: 'I do not guarantee a particular number of customers, or that advertising can prove a sustainable business model on its own. Company-wide CMO responsibility and fundraising are not included automatically.',
    faqs: [
      ['Can you help before we know which channel works?', 'Yes. We start from the offer and the customer you want to reach, and prioritise a defined test. You get a basis for a decision, not a promise that a particular channel will work.'],
      ['When is it reasonable to increase the ad budget?', 'When we understand the quality of the outcome, the measurement and your ability to look after the customers. More budget should be tied to a clear decision and then followed up.']
    ]
  },
  'tillverkningsindustri': {
    slug: 'manufacturing',
    name: 'Manufacturing',
    title: 'B2B advertising and AI for industrial companies | Adorable',
    description: 'B2B campaigns, sales follow-up and AI training for industrial companies. Peter Rosdahl helps marketing and sales teams with practical delivery.',
    intro: 'I help industrial companies with B2B advertising and AI support for marketing and sales. We make a technical offer easier to understand for the people who will evaluate it.',
    focus: 'The sale may involve several roles. We choose which question the campaign should answer and follow up on whether it leads to the right kind of conversation, for example about an application, a demonstration or a project.',
    items: [
      ['Audiences and the technical offer', 'A campaign plan for relevant companies or job roles. Your product specialists review technical claims. I help with the message, the format and the campaign setup.'],
      ['A link to the sales work', 'We decide how enquiries are followed up and which feedback marketing needs. Lead quality and the conversations that continue then become part of the evaluation.'],
      ['AI in the knowledge work', 'A workshop or a pilot for approved product material, meeting preparation and internal summaries. Technical information needs sources and someone responsible for the review.']
    ],
    boundary: 'This is not an offer of AI-controlled production, machine maintenance or automated quality control. Technical calculations and safety decisions stay with your specialists.',
    faqs: [
      ['Can we reach selected industrial companies on LinkedIn?', 'We can assess an account-based campaign and which audiences are possible. Match rate and reach need to be checked. We do not guarantee access to every decision-maker.'],
      ['How do we evaluate a campaign when the sale takes time?', 'We separate early signals from actual business and follow the conversations with sales. A downloaded document is not the same thing as a qualified project.']
    ]
  },
  'utbildning': {
    slug: 'education',
    name: 'Education',
    title: 'AI training for education teams and school staff | Adorable',
    description: 'Practical AI workshops for education organisations. Practise on source material, planning and drafts, with a clear review and careful handling of data.',
    intro: 'I help education organisations understand and try AI in the staff’s work. The focus is practical training, review and clear limits for which tasks are suitable.',
    focus: 'We can work with planning material, administrative drafts and material the staff continue to edit. Exercises need to be possible without sharing pupil or student information in tools that are not approved.',
    items: [
      ['A workshop for staff', 'Practical exercises at a level that fits the people in the room. We go through how instructions change the result and how to check facts and sources.'],
      ['Drafts that can be reviewed', 'We test, for example, structuring public material or making a first draft of information. The responsible teacher or colleague reviews the result and adapts it.'],
      ['Shared ways of working', 'Material for which tasks you want to try, which tools are approved and who follows up. Formal guidelines are set by the organisation.']
    ],
    boundary: 'I do not offer automated grading, admissions decisions or predictive assessment of pupils. Educational responsibility, the legal basis and information security stay with the people responsible.',
    faqs: [
      ['Do we have to use real student work in the exercises?', 'No. We can work with public material and made-up examples. Personal data should not be shared to make an exercise feel more realistic.'],
      ['Does the workshop fit both beginners and experienced users?', 'Yes. The setup is adapted to people’s experience and roles. We can use different levels and focus on shared methods for quality and review.']
    ]
  }
};
