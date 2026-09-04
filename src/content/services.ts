export type ServiceDetail = {
  name: string;
  title: string;
  intro: string;
  fit: string;
  fitText: string;
  items: [string,string][];
  examples: [string,string][];
  faqs: [string,string][];
};

export const services: Record<'sv'|'en', Record<'paid-social'|'ai', ServiceDetail>> = {
  sv: {
    'paid-social': {
      name:'Paid social', title:'Få mer ut av\nannonseringen.',
      intro:'Jag hjälper er att planera, driva och följa upp annonsering på Meta, LinkedIn och andra sociala plattformar. Med fokus på era affärsmål.',
      fit:'När ni behöver en senior hand på annonseringen.',
      fitText:'Ni kanske vill få ordning på befintliga kampanjer, testa en ny marknad eller få löpande hjälp med arbetet. Jag arbetar med både B2B och B2C, direkt med företag och som specialist åt byråer.',
      items:[
        ['Genomgång & prioriteringar','En genomgång av konton, kampanjer och mätning. Ni får en prioriterad lista över vad som behöver ändras och varför.'],
        ['Strategi & uppsättning','Kanalval, kampanjstruktur, målgrupper och budgetfördelning. Ett upplägg som går att genomföra och följa upp.'],
        ['Löpande kampanjhantering','Jag sätter upp kampanjer, följer utvecklingen och justerar annonsering och budget utifrån det vi lär oss.'],
        ['Kreativa tester','En plan för vilka budskap och format vi ska testa. Jag briefar ert team eller er byrå och följer upp hur materialet fungerar.'],
        ['Mätning & nästa beslut','Kontroll av konverteringsspårning och rapportering kopplad till era mål. Ni får resultat, tolkning och tydliga förslag på nästa steg.']
      ],
      examples:[['Genomlysning','För er som redan annonserar och vill veta vad som bör förbättras.'],['Löpande samarbete','För er som behöver någon som ansvarar för kampanjer och uppföljning.'],['Stöd till teamet','För marknadsavdelningar och byråer som vill komplettera med senior specialistkompetens.']],
      faqs:[
        ['Vilka plattformar arbetar du med?','Främst Meta (Facebook och Instagram) och LinkedIn. Vid behov även TikTok, YouTube, Pinterest och Snapchat. Kanalvalet följer målgrupp, affärsmål och förutsättningar.'],
        ['Kan du ta över våra befintliga konton?','Ja. Jag börjar med att förstå kontona och vad som redan fungerar. Ni behåller ägandet och tillgången till konton och data.'],
        ['Producerar du bilder och video?','Jag hjälper till med budskap, testplan, format och brief. Produktion av bilder och video görs av ert team eller er byrå, enligt det upplägg vi kommer överens om.'],
        ['Hur ser samarbetet och kostnaden ut?','Vi kan börja med en avgränsad genomgång eller arbeta löpande. Ni får ett förslag med omfattning, leveranser, tidsplan och kostnad innan start.'],
        ['Hur snabbt ser vi resultat?','Det beror på erbjudandet, mätningen, materialet och hur mycket data kampanjerna ger. Vi bestämmer vad som ska förbättras och när det är rimligt att utvärdera det.']
      ]
    },
    ai: {
      name:'AI-rådgivning', title:'Gör AI användbart\ni vardagen.',
      intro:'Jag hjälper ledningar och team att välja var AI kan göra nytta, lära sig verktygen och få nya arbetssätt på plats.',
      fit:'Från en konkret uppgift till ett fungerande arbetssätt.',
      fitText:'Ni kanske vill utbilda teamet, minska manuellt arbete eller få hjälp att välja verktyg. Vi börjar med hur ni arbetar idag och det ni vill förbättra.',
      items:[
        ['Workshops & utbildning','Praktiska övningar med uppgifter från er verksamhet. Teamet får arbetssätt och instruktioner att använda efter workshopen.'],
        ['Strategi & prioritering','En genomgång av era behov och förutsättningar. Ni får prioriterade användningsfall och en plan för vad ni ska testa först.'],
        ['Verktyg & utvärdering','Hjälp att jämföra verktyg på era arbetsuppgifter. Vi väger kvalitet, kostnad, datahantering och hur lösningen passar era system.'],
        ['Automatisering & implementering','Vi bygger och testar ett avgränsat arbetsflöde, en AI-assistent eller ett internt verktyg. Sedan följer vi upp kvalitet och faktisk användning.'],
        ['AI-policy & ansvar','Praktiska riktlinjer för vilka verktyg ni använder, vilken data som får delas och vem som granskar resultatet. Anpassat till hur ni arbetar.']
      ],
      examples:[['En workshop','För ledning eller team som behöver gemensam förståelse och praktisk träning.'],['En första pilot','För er som har en uppgift att förbättra och vill testa en lösning i liten skala.'],['Löpande rådgivning','För er som vill ha stöd med prioriteringar, införande och teamets användning över tid.']],
      faqs:[
        ['Behöver vi redan veta vad vi vill bygga?','Nej. Vi kan börja med en genomgång av era arbetsuppgifter och välja ett lämpligt första test tillsammans.'],
        ['Vilka AI-verktyg arbetar du med?','Bland annat ChatGPT, Claude och Gemini. Verktygen väljs efter uppgiften, era krav på datahantering och vad som redan finns i organisationen.'],
        ['Kan du hjälpa till med genomförandet?','Ja, med exempelvis interna verktyg, AI-assistenter och automatiserade arbetsflöden. Om ett projekt behöver ytterligare utvecklarkompetens tydliggör vi det i förslaget.'],
        ['Vad får vi efter en workshop?','Praktiska instruktioner, övningar och rekommenderade nästa steg utifrån era uppgifter. Vi kommer överens om omfattningen och materialet före start.'],
        ['Hur ser ett upplägg ut?','Det kan vara en workshop, en pilot eller löpande rådgivning. Ni får ett tydligt förslag på leveranser, tidsplan och kostnad innan vi börjar.']
      ]
    }
  },
  en: {
    'paid-social': {
      name:'Paid social', title:'Get more from\nyour advertising.',
      intro:'I help you plan, run and measure advertising on Meta, LinkedIn and other social platforms, with your business goals guiding the work.',
      fit:'Senior support for your advertising.',
      fitText:'Improve existing campaigns, enter a new market or get ongoing support. I work with B2B and B2C companies, both directly and as a specialist for agencies.',
      items:[['Review & priorities','A review of your accounts, campaigns and measurement. You get a prioritised list of what to change and why.'],['Strategy & setup','Channel selection, campaign structure, audiences and budget allocation. A plan you can execute and evaluate.'],['Campaign management','I set up campaigns, monitor performance and adjust advertising and budgets as we learn.'],['Creative testing','A plan for the messages and formats to test. I brief your team or agency and evaluate how the assets perform.'],['Measurement & decisions','Conversion tracking checks and reporting tied to your goals. Results, interpretation and clear next steps.']],
      examples:[['Account review','For companies already advertising that want to understand what to improve.'],['Ongoing partnership','For companies that need someone to manage campaigns and follow up.'],['Team support','For marketing teams and agencies that need senior specialist expertise.']],
      faqs:[['Which platforms do you work with?','Primarily Meta (Facebook and Instagram) and LinkedIn. TikTok, YouTube, Pinterest and Snapchat when relevant. The choice follows your audience, goals and circumstances.'],['Can you take over existing accounts?','Yes. I start by understanding your accounts and what already works. You retain ownership of your accounts and data.'],['Do you produce images and video?','I help with messaging, test plans, formats and briefs. Your team or agency produces the images and video, as agreed in the scope.'],['How is the engagement priced?','We can start with a defined review or work together over time. You receive a proposal with deliverables, timeline and cost before we begin.'],['How soon can we evaluate results?','It depends on the offer, measurement, creative assets and the data the campaigns generate. We agree what to improve and when it is reasonable to evaluate it.']]
    },
    ai: {
      name:'AI consulting', title:'Put AI to work\nin your business.',
      intro:'I help leadership teams and employees choose where AI can be useful, learn the tools and put new ways of working into practice.',
      fit:'Start with a real task. Build a useful way of working.',
      fitText:'Train the team, reduce manual work or choose the right tools. We start with how you work today and what you want to improve.',
      items:[['Workshops & training','Practical exercises using tasks from your business. Your team gets methods and instructions to use after the session.'],['Strategy & priorities','A review of your needs and circumstances. Prioritised use cases and a plan for what to test first.'],['Tools & evaluation','Compare tools on your own tasks. We consider quality, cost, data handling and how each tool fits your systems.'],['Automation & implementation','Build and test a defined workflow, AI assistant or internal tool. Then evaluate its quality and actual use.'],['AI policy & responsibility','Practical guidance on approved tools, data sharing and who reviews the output. Adapted to how your team works.']],
      examples:[['A workshop','For leadership teams or employees who need shared understanding and practical training.'],['A first pilot','For companies with a task to improve that want to test a solution on a small scale.'],['Ongoing advice','Support for prioritisation, implementation and adoption over time.']],
      faqs:[['Do we need to know what we want to build?','No. We can start by reviewing your work and choose a suitable first test together.'],['Which AI tools do you work with?','Including ChatGPT, Claude and Gemini. The choice follows the task, your data requirements and the tools your organisation already uses.'],['Can you help with implementation?','Yes, including internal tools, AI assistants and automated workflows. If a project requires additional development expertise, we make that clear in the proposal.'],['What do we get after a workshop?','Practical instructions, exercises and recommended next steps based on your work. We agree the scope and material before starting.'],['What does an engagement look like?','A workshop, a pilot or ongoing advice. You receive a clear proposal with deliverables, timeline and cost before we start.']]
    }
  }
};
