import type { DetailPage } from './service-pages';

// English pages keep the Swedish slug as the key, so related services and
// contact form values stay stable. `slug` is the public English URL segment.
export type ServiceEnglish = Omit<DetailPage, 'related'>;

export const serviceCopyEn: Record<string, ServiceEnglish> = {
  'meta-annonsering': {
    slug: 'meta-ads',
    name: 'Meta ads',
    title: 'Meta ads consultant for Facebook and Instagram | Adorable',
    description: 'Help with Facebook and Instagram advertising. Peter Rosdahl reviews accounts, runs campaigns, tests creative and follows up on what happens after the click.',
    intro: 'I help you advertise on Facebook and Instagram. That covers understanding the account, running campaigns and testing the next idea.',
    fit: 'You already advertise and are unsure what to change. Or you need someone to take responsibility for a considered start on Meta.',
    focus: 'More purchases and more enquiries are different jobs. We set the goal from the business and look at both the ad and what happens after the click. A cheap click is not useful if the visitor meets the wrong offer.',
    items: [
      ['Account and measurement', 'A review of campaign structure, conversion events and reporting. You get a prioritised list of actions, including what your developer should check if the tracking is unreliable.'],
      ['Messaging and creative tests', 'A test plan for openings, offers, images and video. I write the brief and read the results. Your team or production partner makes the assets, as agreed.'],
      ['Campaigns and follow-up', 'Setup, ongoing adjustments and budget allocation. We follow the goals we agreed and separate the platform report from what you actually see in sales.']
    ],
    startingPoint: ['Start with what you already have.', 'We look at one existing campaign: offer, ad, landing page and results. You hear what I would keep, change and test first. If you are new to Meta, we use the same chain before anything is published.'],
    preparation: 'Access to the ad account, existing assets and a picture of what a good customer or enquiry looks like for you. You share access, not passwords, and you keep the accounts.',
    faqs: [
      ['Are Facebook ads and Instagram ads the same service?', 'Yes. Both sit inside Meta. I help you choose placements and adapt the assets to where the ads run, without splitting the work into needless separate projects.'],
      ['Can you improve our existing Meta Ads account?', 'Yes. We start with a review of campaigns, measurement and creative. After that you can carry out the recommendations yourselves, or get help with the ongoing work.'],
      ['Is production of ad assets included?', 'Messaging, a test plan and a creative brief can be included. Photography, film and larger production are done by your team or an agreed partner. Responsibility and scope are clear before we start.'],
      ['How do we follow up on results?', 'We agree the goal before we start, for example purchases or qualified enquiries. The report shows the results, what is uncertain in the measurement and which changes I recommend. No level of sales or return is guaranteed.']
    ]
  },
  'linkedin-annonsering': {
    slug: 'linkedin-ads',
    name: 'LinkedIn ads',
    title: 'LinkedIn ads consultant for B2B advertising | Adorable',
    description: 'LinkedIn advertising focused on the right companies, relevant messages and qualified leads. Strategy, campaigns and follow-up with Peter Rosdahl.',
    intro: 'I help B2B companies plan and run advertising on LinkedIn. The focus is who you want to reach, what they need to understand and what happens after the first contact.',
    fit: 'You sell to companies and need to reach job roles or selected accounts. That might be launching an offer, inviting people to a webinar or starting more relevant sales conversations.',
    focus: 'A completed form is not automatically a sales opportunity. I want to know which enquiries the sales team can work with and which ones fall away. Then we can improve the audience, the offer and the follow-up.',
    items: [
      ['Audience and offer', 'We narrow the relevant roles, companies and markets. You get a campaign plan that ties each audience to a clear offer and a reasonable next step.'],
      ['Campaigns and content', 'I set up campaigns and brief ads for a customer problem, a demonstration or an event. You approve the message and the assets before they go live.'],
      ['From lead to sales conversation', 'We decide how enquiries are handled and what counts as quality. The follow-up includes feedback from sales, not only the number of forms.']
    ],
    startingPoint: ['Start from a sales situation.', 'Which problem usually gets your customers to book a first conversation? We use that to choose the audience and the message. Then we test a defined campaign and see whether the right kind of company actually gets in touch.'],
    preparation: 'A description of your best customers, your offer, existing content and a person who can comment on lead quality. A CRM can help, but a simple shared follow-up is enough for a first test.',
    faqs: [
      ['Can you work from a list of target companies?', 'Yes. We can look at an account-based setup for companies you want to reach. It depends on how well the list can be matched and whether the audience is large enough. I do not promise that every decision-maker can be reached.'],
      ['Do we need a report or a webinar?', 'No. We start from what is relevant to the customer. That can be a demonstration, an explanation of your offer or a direct request for a meeting. More content is not always the answer.'],
      ['How do we judge whether LinkedIn is working?', 'We follow reach and response, and also which companies get in touch and how the conversations develop. With a longer sales cycle, marketing and sales need to share feedback over time.'],
      ['Can you help our agency or marketing team?', 'Yes. I can run the campaigns or work as a specialist alongside the team. We agree who writes, produces, approves and follows up.']
    ]
  },
  'tiktok-annonsering': {
    slug: 'tiktok-ads',
    name: 'TikTok ads',
    title: 'TikTok ads consultant for campaigns and creative tests | Adorable',
    description: 'Help with TikTok advertising: whether the channel fits, video briefs, campaigns and creative tests. Work directly with senior consultant Peter Rosdahl.',
    intro: 'I help you test and run advertising on TikTok. We start with the offer and the video, so the campaign has something relevant to say in the feed.',
    fit: 'You want to try TikTok as an ad channel and can produce and refresh video. Or you already have campaigns and need a clearer way to test creative and read the results.',
    focus: 'Reusing a film is not the same as adapting it. We work on the opening, the pace, the demonstration and the next action. The tests should teach us which idea works, not only which single film gets the most views.',
    items: [
      ['A sensible start', 'A judgement of audience, offer and assets. You get a defined test with a goal, responsibilities and a date for the evaluation.'],
      ['Video brief and test plan', 'Concrete suggestions for openings, situations and demonstrations to film. I brief your team or creator and plan which variants we will compare.'],
      ['Setup and learning', 'Campaigns, a check of the measurement and ongoing adjustments. The result becomes the brief for the next production and for the decision to continue, change or stop the test.']
    ],
    startingPoint: ['Test a few clearly different ideas.', 'We can compare a product demonstration with a common customer problem and an answer to an objection. Each idea gets a clear opening and a next step. That is an example of a test, not a required format or a promise of results.'],
    preparation: 'Access to the product or service that will be shown, someone who can produce video and cleared rights for every asset. We also need to decide where the click goes and how the outcome will be measured.',
    faqs: [
      ['Do we need an active organic TikTok account first?', 'We can assess a paid start even without a large organic account. What matters for the work is a clear offer, relevant creative and a way to follow up the campaign.'],
      ['Can we use our existing films?', 'Often as a starting point. We check whether the opening, format, text and pace need to change. Rights for music, people and assets also have to be cleared for advertising.'],
      ['Do you handle creators and video production?', 'I help with the brief, the test plan and feedback on the material. Creator partnerships, contracts and production are scoped separately, so it is clear who is responsible.'],
      ['How do we know whether to continue after the test?', 'We agree the evaluation before we start. We look at the business action you want, how the creative responds and how reliable the measurement is. A lot of views, on their own, are not a reason to raise the budget.']
    ]
  },
  'youtube-annonsering': {
    slug: 'youtube-ads',
    name: 'YouTube ads',
    title: 'YouTube ads consultant for video advertising | Adorable',
    description: 'YouTube advertising with a clear goal, a video brief and follow-up. Peter Rosdahl helps you plan, set up and evaluate video ads.',
    intro: 'I help you with video advertising on YouTube. From the job the film should do, to the campaign setup in Google Ads and a reading of what it actually contributes.',
    fit: 'You want to introduce an offer, explain a product or reach more people with an important message. You have a film, or a team that can produce one from a clear brief.',
    focus: 'Should people recognise you, understand the offer or do something straight away? That choice shapes both the campaign and the film. A view is not a purchase, and the same metric does not fit every job.',
    items: [
      ['Goal, audience and format', 'A plan for what the campaign should achieve and how video fits with your other channels. We choose formats and placements from the goal.'],
      ['A film that works as an ad', 'A brief for the opening, the message, the brand and the ask. We look at which versions you need and what you can reuse. Film production is agreed separately.'],
      ['Campaign and evaluation', 'Setup in Google Ads, a check of links and measurement, and follow-up on delivery and response. We review placements and decide what should change.']
    ],
    startingPoint: ['Give the film one job.', 'If you have a product film, we can start by choosing the single point the customer should understand and the action that follows. I brief the ad version and tie it to a defined campaign goal.'],
    preparation: 'The film or the ability to produce one, access to the relevant Google Ads and YouTube accounts, and an approved landing page. We check rights and which measurement is possible before we start.',
    faqs: [
      ['Are YouTube ads bought through Google Ads?', 'Yes. Video advertising is managed in Google Ads. It is still a different job from search: the film, the message and the evaluation need to be built for video.'],
      ['Can we use an existing brand film?', 'Yes, if it fits the job and you have the right to use it in ads. The opening, length or ending often needs to change. I help you judge what to adapt.'],
      ['Can you help with both reach and conversion?', 'We can plan for different goals, but each part of the campaign gets one clear purpose. Measurable sales also depend on the offer, the website and the quality of the tracking.'],
      ['Is organic YouTube optimisation included?', 'This service is paid advertising. Channel content, ongoing publishing and an organic video strategy are not included unless we explicitly agree that they are.']
    ]
  },
  'snapchat-annonsering': {
    slug: 'snapchat-ads',
    name: 'Snapchat ads',
    title: 'Snapchat ads consultant for campaigns and tests | Adorable',
    description: 'Test Snapchat as an ad channel with Peter Rosdahl. Help with audience, mobile creative, campaigns and a clear follow-up.',
    intro: 'I help you judge and test advertising on Snapchat. A clear offer, creative made for a phone and a considered path from the ad to the next action.',
    fit: 'You want to see whether Snapchat can add something to the advertising you already run. First we need the audience, the offer and the creative to fit. The channel is not worth choosing only because it exists.',
    focus: 'The experience after the ad has to work as well as the film. I look at the whole mobile path: what the visitor meets, how the form or purchase works and which action we can actually follow up.',
    items: [
      ['Channel assessment', 'We go through audience, business goal and the channels you already use. You get a proposal for what a Snapchat test should answer and how it differs from what you already do.'],
      ['Mobile creative brief', 'A brief for vertical image or video with a clear message and ending. I line up the ad requirements with whoever produces the work and review the mobile page it links to.'],
      ['Test and decision', 'Setup, a measurement check and an ongoing review of the campaign. We summarise the result and what it means for creative, channel choice and budget.']
    ],
    startingPoint: ['Start with an offer that can be understood quickly.', 'We pick one product or service and one simple action, such as reading more or making an enquiry. Before the test we check that the landing page makes the same promise and works on a phone.'],
    preparation: 'A defined offer, mobile-ready creative and a working landing page. We also check permitted audiences, age requirements and any limits that apply to your product.',
    faqs: [
      ['Should we choose Snapchat or TikTok?', 'That depends on the audience, the offer, the creative and what you have already learned in other channels. I help you prioritise one meaningful test instead of starting everywhere at once.'],
      ['Will our existing social ads work?', 'They can be a starting point. We check format, readability, pace and the ask, and adapt them to the placements we choose.'],
      ['Are AR lenses included?', 'Not in an ordinary campaign engagement. If a concept needs an AR lens, the production, skills and cost are specified separately.'],
      ['How do we evaluate the channel?', 'We agree a business goal and look at both ad response and what happens on the website. Measurement has limits. A platform report, on its own, is not proof of new sales.']
    ]
  },
  'pinterest-annonsering': {
    slug: 'pinterest-ads',
    name: 'Pinterest ads',
    title: 'Pinterest ads consultant for visual offers | Adorable',
    description: 'Pinterest advertising for companies with a visual offer. Peter Rosdahl helps with channel choice, creative briefs, campaigns and follow-up.',
    intro: 'I help you plan and test advertising on Pinterest. We connect a visual offer to what the customer is looking for inspiration for, and what they want to do next.',
    fit: 'You have products or services that people like to explore visually, for example before a purchase or a project. You need to show use, ideas or context, not only a logo.',
    focus: 'Inspiration and purchase can happen at different times. We plan the creative and the follow-up with that in mind, without counting every save as a sale or claiming that Pinterest fits every category.',
    items: [
      ['The customer’s idea and your offer', 'We choose which needs, products and seasons the campaign should start from. You get a clear role for Pinterest next to search ads and other social channels.'],
      ['Assets and landing pages', 'A brief for images or video that show context and use. We make sure the visitor lands on a page that continues the same idea and makes the next step easy.'],
      ['Campaign and learning', 'Setup, a measurement check and follow-up. We separate inspiration, website traffic and business actions when we decide what to develop.']
    ],
    startingPoint: ['Start from how the product is used.', 'For a home offer, the test might be a situation of use rather than a product shot on its own. We connect the ad to relevant content or a product on your site and follow the customer’s next step.'],
    preparation: 'A library of visual assets, priority products or services and relevant destination pages. If a product catalogue is used, we review what it requires as its own part of the work.',
    faqs: [
      ['Is Pinterest only relevant for ecommerce?', 'No, but there needs to be a natural link between what people look for inspiration for and your offer. We judge that link before proposing a campaign.'],
      ['Can you help with catalogue ads?', 'We can judge whether catalogue ads are suitable and what your account and product data need. Larger work on a product feed or an integration is agreed separately.'],
      ['How is the creative different from Meta?', 'We start from an idea or a situation the customer wants to explore. Existing images can be reused, but the text, format and destination page need to fit the campaign we plan.'],
      ['When should we evaluate the result?', 'We agree a period based on the goal, the season and how much data there is. We look at clicks and business actions separately, and we are clear about what we cannot conclude yet.']
    ]
  },
  'google-ads': {
    slug: 'google-ads',
    name: 'Google Ads',
    title: 'Google Ads consultant for paid search | Adorable',
    description: 'Google Ads with Peter Rosdahl. Help with keywords, ads, campaign structure and measurement, from an account review to ongoing search work.',
    intro: 'I help you with Google Ads when you want to reach people who are searching for what you offer. From keywords and ad text to a relevant landing page and a reading of the business result.',
    fit: 'You want to start search advertising, or get a clearer view of an existing Google Ads account. You need to know which searches you are paying for and whether they lead to the right customers.',
    focus: 'A search can mean someone wants to buy, compare or just get an answer. We separate those intentions and make sure the ad matches what you actually offer. Clicks that can never become the right customer should not be the goal.',
    items: [
      ['Keywords and priorities', 'A review of search intent, search terms and the current account. You get a priority for which offers and searches the campaigns should focus on, and what should be excluded.'],
      ['Ads and landing pages', 'Campaign structure and ad copy that match the page after the click. I point out changes on the website. Larger web production is specified separately.'],
      ['Measurement and ongoing work', 'A check of conversion goals, campaign adjustments and follow-up on the quality of leads or purchases. We separate your brand from other searches so the result is easier to read.']
    ],
    startingPoint: ['See what you are actually paying for.', 'In an existing account we start with search terms, ads, costs and the actions counted as conversions. That shows whether the next move is a different keyword, a better page or a correction of the measurement.'],
    preparation: 'Access to Google Ads, the relevant measurement tools and information about which products or enquiries are valuable. You keep ownership of the accounts and the data.',
    faqs: [
      ['Is Google Ads the same as SEO?', 'No. Google Ads is paid advertising. SEO is visibility in the unpaid search results. This service is advertising. Buying ads does not guarantee a better organic position.'],
      ['Do you only work with search ads?', 'This page focuses on search. I also help with YouTube advertising. Shopping and other campaign types are judged from the offer, the product data and the scope before we decide the setup.'],
      ['Can you take over our current advertising?', 'Yes. I start with a review and document what needs to change. We agree responsibility and approval before I change your campaigns.'],
      ['How do we tell whether the ads are profitable?', 'We need to understand margins, or the value of a qualified enquiry, not only clicks and forms. I help you choose relevant measures and separate what is measured, what is estimated and what is still uncertain.']
    ]
  },
  'ai-workshop': {
    slug: 'ai-workshop',
    name: 'AI workshop',
    title: 'AI workshop and training for companies | Adorable',
    description: 'A practical AI workshop for leadership teams and employees with Peter Rosdahl. Your own tasks, clear instructions and a plan for what to use afterwards.',
    intro: 'A practical AI workshop that starts from your own work. I help leadership teams and employees understand the tools, try them and decide what is worth using.',
    fit: 'The team has mixed experience, too many tools to choose from, or a hard time going from a demonstration to everyday use.',
    focus: 'We practise on tasks that already exist in your work: preparing an analysis, structuring a source or making a first draft. People also practise finding errors and deciding when an AI answer should not be used.',
    items: [
      ['Preparation with your team', 'We check roles, experience, approved tools and the tasks people do. You choose examples that can be used without sensitive information.'],
      ['Guided practice', 'Shared walkthroughs and individual work with feedback. We practise instructions, checking sources and improving a result step by step.'],
      ['Material you keep', 'Instructions and exercises from the session, prioritised use cases and a suggestion for the next test. You name someone to follow up on whether people use it.']
    ],
    startingPoint: ['Different sessions for leadership and teams.', 'A leadership group often needs to prioritise usefulness, risk, responsibility and investment. An operational team needs more time to practise on its own tasks. We adapt the session to who is in the room instead of giving everyone the same presentation.'],
    preparation: 'A contact person, a selection of everyday tasks and a decision on which AI tools you are allowed to use. If you do not have an approved tool yet, we cover that in the preparation and choose a safe way to practise.',
    faqs: [
      ['Do people need to know AI already?', 'No. We adapt the level and can split the exercises by experience. What matters is that people recognise the tasks we practise on.'],
      ['Is it a course in ChatGPT, Claude or Gemini?', 'We choose the tool from your situation. It can be ChatGPT, Claude or Gemini, but the focus is a usable way of working and how the result is checked, not a tour of every feature.'],
      ['Can the workshop be on site or in Swedish?', 'Yes. We can work online or on site, in English or Swedish, as agreed. Participants, length and the practical setup are decided before we start.'],
      ['Is a finished AI solution included?', 'No. The workshop gives training, material and priorities. If you want a workflow or an assistant built, we scope that as a separate pilot with its own deliverables and tests.']
    ]
  },
  'ai-automatisering': {
    slug: 'ai-automation',
    name: 'AI automation',
    title: 'AI automation for companies: workflows and pilots | Adorable',
    description: 'Build and test a defined AI workflow with Peter Rosdahl. From mapping and a prototype to quality checks, responsibility and handover.',
    intro: 'I help you build and test AI workflows for tasks that come back. We start small and check the quality before anything is allowed to affect customers or important decisions.',
    fit: 'You spend time reading material, compiling information or moving it between tools. The task repeats, and someone can judge whether the result is right.',
    focus: 'Not every automation needs AI. Clear rules are better for some steps. I help you separate what can run automatically, what needs a model and what a person should still approve.',
    items: [
      ['Mapping and scope', 'We describe the input, the steps, the result you want and the exceptions. You get a first pilot with a clear owner and criteria for when it is good enough.'],
      ['Prototype and tests', 'I build a defined flow or an assistant and test it on approved examples. We look at wrong answers, missing information, permissions and what happens when a tool does not respond.'],
      ['Handover and a decision', 'Documentation of the way of working, the review and how to undo a result. We summarise the test, the ongoing costs and what is left before you can decide on running it and maintaining it.']
    ],
    startingPoint: ['Approved notes in. A reviewed draft out.', 'One possible pilot is turning approved meeting notes into an internal follow-up draft with clear sources. Someone responsible reviews and approves it before it is used or sent on. That is an example of a defined flow, not a finished product.'],
    preparation: 'A process owner, approved test examples and a decision on which systems and data may be used. Integrations, IT requirements and personal data have to be checked before we connect live systems.',
    faqs: [
      ['Do we have to replace our current tools?', 'Not necessarily. We start from the systems you have and look at access, integrations and limits. I do not promise a connection to a system before it has been checked.'],
      ['How do we know the automation saves time?', 'We compare it with how the task is done today and include review, corrections and maintenance. A faster draft is not a time saving if it creates more work afterwards.'],
      ['Can the flow send messages or change data on its own?', 'Only if that is explicitly included and approved. We normally start with drafts or read-only access. Sending things out and changing data need clear permission, tests and a way to stop the flow.'],
      ['Are operations, legal review and information security included?', 'The technical work on the pilot and its documentation are scoped in the proposal. Running it and maintaining it afterwards are agreed separately. Your people responsible for IT, information security and legal review need to approve the parts that belong to them.']
    ]
  },
  'chatgpt-utbildning': {
    slug: 'chatgpt-training',
    name: 'ChatGPT training',
    title: 'ChatGPT training and adoption for companies | Adorable',
    description: 'Practical ChatGPT training for teams that want to use the tool on their own work. Peter Rosdahl runs the workshop, writes the instructions and follows up on adoption.',
    intro: 'I help leadership teams and employees learn ChatGPT and start using it in the work. We start from your tasks, not from a tour of every feature.',
    fit: 'You want more people to be able to use ChatGPT in a normal week. Or a few people have already tried it, but there is no shared way to work and to check the result.',
    focus: 'People practise instructions, checking sources and seeing when an answer should not be used. If another tool fits the task better, or you already have an approved tool, I say so. ChatGPT is one of the tools I work with, alongside Claude and Gemini.',
    items: [
      ['A workshop on your tasks', 'Shared walkthroughs and individual work with feedback. We practise on tasks from your business and choose examples that can be used without sensitive information.'],
      ['Adoption after the training', 'Instructions, prioritised use cases and a named person who reviews the output. You leave with material to use after the workshop, not a finished AI solution.'],
      ['A check of tools and data', 'We check which tools you may use and which data may be shared. If you need written rules for that, it can continue as a separate AI policy.']
    ],
    startingPoint: ['A team and tasks people recognise.', 'We start with who is taking part, what they do today and which tool is approved. If you have not decided on ChatGPT yet, we cover that in the preparation and choose a safe way to practise.'],
    preparation: 'A contact person, a selection of everyday tasks and a decision on which AI tools you may use. Participants, length and whether we meet online or on site are decided before we start.',
    faqs: [
      ['Is the training only about ChatGPT?', 'It can start from ChatGPT. If Claude, Gemini or a tool you already have fits the task better, we use that instead. The focus is a way of working and how the result is checked.'],
      ['Do people need to know AI already?', 'No. We adapt the level. What matters is that people recognise the tasks we practise on.'],
      ['Is a finished ChatGPT solution included?', 'No. You get training, instructions and prioritised next steps. A workflow, an assistant or a connection to your systems is a separate engagement, with its own tests.'],
      ['Can the training be on site or in Swedish?', 'Yes. We can work online or on site, in English or Swedish. The setup is decided before we start.']
    ]
  },
  'ai-strategi': {
    slug: 'ai-strategy',
    name: 'AI strategy',
    title: 'AI strategy for companies | Adorable',
    description: 'Help prioritising where AI is worth testing. Peter Rosdahl reviews your needs and writes a plan for what to try first.',
    intro: 'I help leadership teams choose where AI is worth testing, and what can wait. The strategy starts from how you work today.',
    fit: 'You have a lot of ideas, or a hard time going from general interest to a first test that can be reviewed.',
    focus: 'We separate what can be tested now, what needs better material and what should not be automated. You get prioritised use cases and a plan for the first test. I do not promise a particular effect.',
    items: [
      ['A review of the need', 'We look at the tasks, the tools you already have and what may be shared. The starting point is your business, not a ready-made list of products.'],
      ['Prioritised use cases', 'A short list of what is worth trying first, and what can wait. Each case has an owner and something to compare the result with.'],
      ['A plan for the first test', 'What will be tried, which data may be used and how the result will be reviewed. A pilot or a workshop can be the next step, if you want that.']
    ],
    startingPoint: ['A question, not a finished solution.', 'You do not need to know what you want to build. We can start with a review of the work and choose a suitable first test together.'],
    preparation: 'A contact person who can describe how you work, which tools are already in use and whether there are limits on data. We bring in more people from leadership or the team when that is needed.',
    faqs: [
      ['Do we need to know what we want to build?', 'No. We can start from your work and choose a first test together.'],
      ['Is the implementation included in the strategy?', 'The strategy points to the next step. A workshop, a workflow or an AI policy are separate engagements with their own deliverables. You get a proposal before any of that starts.'],
      ['Which tools does the strategy assume?', 'The tool is chosen from the task, your requirements for data and what you already have. I work with ChatGPT, Claude and Gemini, among others.'],
      ['Can you promise a particular result?', 'No. No specific time saving, sales figure or return is guaranteed. We decide what will be tried and when it is reasonable to evaluate it.']
    ]
  },
  'ai-policy': {
    slug: 'ai-policy',
    name: 'AI policy',
    title: 'AI policy for companies | Adorable',
    description: 'Practical rules for AI tools, which data may be shared and who reviews the output. Peter Rosdahl adapts the policy to how you work.',
    intro: 'I help you write practical rules for which AI tools you use, which data may be shared and who reviews the output.',
    fit: 'Different people are trying tools on their own. Or you do not have a shared answer to what may be pasted into an AI tool.',
    focus: 'The rules have to be possible to follow on a normal day. We start from your tools, your tasks and who already owns information and decisions. I do not replace your lawyers, IT or information security.',
    items: [
      ['Approved tools', 'Which tools the team may use, and for which tasks. We include what you already have, instead of starting with a ban or a new product.'],
      ['Data that may be shared', 'Practical examples of what can go into a tool and what should stay out. Sensitive information is included only if the people responsible have approved it.'],
      ['Review and responsibility', 'Who reads an AI answer before it is used, sent or becomes the basis for a decision. The policy also says when an answer should not be used.']
    ],
    startingPoint: ['How you work today.', 'We start with which tools are already in use and which tasks are common. Then we write rules an employee can understand without a long policy document.'],
    preparation: 'A contact person and the name of whoever owns IT, information security or legal review. Their approval is needed for the parts that belong to them. I do not give legal advice.',
    faqs: [
      ['Is an AI policy legal advice?', 'No. I help you write practical rules for the work. Legal questions, information security and decisions about personal data need to be approved by the people responsible.'],
      ['Do we have to ban tools?', 'No. The starting point is which tools you may use, which data may be shared and who reviews the output. We adapt the scope to how you work.'],
      ['Is team training included?', 'Not automatically. The policy can stand on its own. If you want the team to practise, we do that as a workshop, with their own tasks and its own setup.'],
      ['Does it fit if we already have guidelines?', 'Yes. We can start from what you have and see what is missing in daily work: tools, data and review. You get a proposal for what should change before anything is rewritten.']
    ]
  }
};
