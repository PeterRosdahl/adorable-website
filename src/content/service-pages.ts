export type DetailPage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  fit: string;
  focus: string;
  items: [string, string][];
  startingPoint: [string, string];
  preparation: string;
  faqs: [string, string][];
  related: string[];
};

// One page per buying intent. Facebook and Instagram belong on the Meta page;
// YouTube explains video, while Google Ads explains paid search.
export const servicePages: DetailPage[] = [
  {
    slug: 'meta-annonsering', name: 'Meta-annonsering',
    title: 'Meta Ads-konsult för Facebook & Instagram | Adorable',
    description: 'Få hjälp med annonsering på Facebook och Instagram. Peter Rosdahl arbetar med kontogenomgång, kampanjer, kreativa tester och uppföljning.',
    intro: 'Jag hjälper er med annonsering på Facebook och Instagram. Från att förstå vad som händer i kontot till att driva kampanjer och testa nästa idé.',
    fit: 'Ni annonserar redan men vet inte vad ni ska ändra. Eller så behöver ni någon som tar ansvar för att få en genomtänkt start på Meta.',
    focus: 'Fler köp och fler förfrågningar är olika uppgifter. Vi väljer mål efter affären och granskar både annonsen och det som händer efter klicket. En låg klickkostnad räcker inte om besökaren möts av fel erbjudande.',
    items: [
      ['Konto och mätning', 'Genomgång av kampanjstruktur, konverteringshändelser och rapportering. Ni får prioriterade åtgärder, inklusive vad er utvecklare behöver kontrollera om mätningen brister.'],
      ['Budskap och kreativa tester', 'En testplan för öppningar, erbjudanden, bilder och video. Jag skriver briefen och analyserar utfallet. Ert team eller produktionspartner tar fram materialet enligt överenskommelse.'],
      ['Kampanjer och uppföljning', 'Uppsättning, löpande justering och budgetfördelning. Vi följer överenskomna mål och skiljer på plattformens rapportering och det ni faktiskt ser i försäljningen.']
    ],
    startingPoint: ['Börja med det som redan finns.', 'Vi går igenom en befintlig kampanj: erbjudande, annons, landningssida och resultat. Ni får veta vad jag skulle behålla, ändra och testa först. Om ni är nya på Meta börjar vi med samma kedja innan något publiceras.'],
    preparation: 'Tillgång till annonskonto, befintligt material och en bild av vad en bra kund eller förfrågan är för er. Ni delar behörighet, inte lösenord, och behåller era konton.',
    faqs: [
      ['Är Facebook-annonsering och Instagram-annonsering samma tjänst?', 'Ja. Båda hanteras inom Meta. Jag hjälper er att välja placeringar och anpassa materialet efter var annonserna ska visas, utan att dela upp arbetet i onödiga separata uppdrag.'],
      ['Kan du förbättra vårt befintliga Meta Ads-konto?', 'Ja. Vi börjar med en genomgång av kampanjer, mätning och material. Därefter kan ni genomföra rekommendationerna själva eller ta hjälp med det löpande arbetet.'],
      ['Ingår produktion av annonsmaterial?', 'Budskap, testplan och kreativ brief kan ingå. Foto, film och större produktion görs av ert team eller en överenskommen partner. Ansvar och omfattning är tydliga före start.'],
      ['Hur följer vi upp resultat?', 'Vi bestämmer målet före start, exempelvis köp eller kvalificerade förfrågningar. Rapporten visar resultat, vad som är osäkert i mätningen och vilka ändringar jag rekommenderar. Ingen viss försäljning eller avkastning garanteras.']
    ], related: ['tiktok-annonsering', 'google-ads', 'pinterest-annonsering']
  },
  {
    slug: 'linkedin-annonsering', name: 'LinkedIn-annonsering',
    title: 'LinkedIn Ads-konsult för B2B-annonsering | Adorable',
    description: 'LinkedIn-annonsering med fokus på rätt företag, relevanta budskap och kvalificerade leads. Strategi, kampanjer och uppföljning med Peter Rosdahl.',
    intro: 'Jag hjälper B2B-företag att planera och driva annonsering på LinkedIn. Med fokus på vilka ni vill nå, vad de behöver förstå och vad som händer efter första kontakten.',
    fit: 'Ni säljer till företag och behöver nå yrkesroller eller utvalda bolag. Det kan handla om att lansera ett erbjudande, bjuda in till ett webinar eller få fler relevanta kunddialoger.',
    focus: 'Ett ifyllt formulär är inte automatiskt en affärsmöjlighet. Jag vill veta vilka förfrågningar säljteamet kan arbeta vidare med och vilka som faller bort. Då kan vi förbättra både målgrupp, erbjudande och uppföljning.',
    items: [
      ['Målgrupp och erbjudande', 'Vi avgränsar relevanta roller, företag och marknader. Ni får ett kampanjupplägg som kopplar varje målgrupp till ett begripligt erbjudande och en rimlig handling.'],
      ['Kampanjer och innehåll', 'Jag sätter upp kampanjer och briefar annonser för exempelvis ett kundproblem, en demonstration eller ett event. Ni godkänner budskap och material innan publicering.'],
      ['Från lead till säljsamtal', 'Vi bestämmer hur förfrågningar ska tas om hand och vad som räknas som kvalitet. Uppföljningen väger in säljteamets återkoppling, inte bara antalet formulär.']
    ],
    startingPoint: ['Utgå från en säljsituation.', 'Vilket problem brukar få era kunder att boka ett första samtal? Vi använder det för att välja målgrupp och annonsbudskap. Sedan testar vi en avgränsad kampanj och följer upp om rätt sorts företag faktiskt hör av sig.'],
    preparation: 'En beskrivning av era bästa kunder, ert erbjudande, befintligt innehåll och en person som kan återkoppla på leadkvaliteten. Ett CRM kan hjälpa, men en enkel gemensam uppföljning kan räcka för ett första test.',
    faqs: [
      ['Kan du arbeta mot en lista med målföretag?', 'Ja, vi kan undersöka ett kontobaserat upplägg med företag ni vill nå. Möjligheten beror på hur väl listan kan matchas och om målgruppen är tillräcklig. Jag lovar inte att varje beslutsfattare går att nå.'],
      ['Måste vi ha en rapport eller ett webinar?', 'Nej. Vi utgår från vad som är relevant för kunden. Det kan vara en demonstration, en förklaring av ert erbjudande eller en direkt mötesförfrågan. Mer innehåll är inte alltid lösningen.'],
      ['Hur bedömer vi om LinkedIn fungerar?', 'Vi följer räckvidd och respons, men också vilka företag som hör av sig och hur dialogerna utvecklas. Vid längre säljcykler behöver marknad och sälj dela återkoppling över tid.'],
      ['Kan du hjälpa vår byrå eller vårt marknadsteam?', 'Ja. Jag kan ansvara för kampanjerna eller fungera som specialist åt teamet. Vi kommer överens om vem som skriver, producerar, godkänner och följer upp.']
    ], related: ['google-ads', 'youtube-annonsering', 'meta-annonsering']
  },
  {
    slug: 'tiktok-annonsering', name: 'TikTok-annonsering',
    title: 'TikTok Ads-konsult – kampanjer & kreativa tester | Adorable',
    description: 'Hjälp med annonsering på TikTok: kanalbedömning, videobrief, kampanjer och kreativa tester. Arbeta direkt med seniorkonsult Peter Rosdahl.',
    intro: 'Jag hjälper er att testa och driva annonsering på TikTok. Vi börjar med erbjudandet och videomaterialet, så att kampanjen har något relevant att säga i flödet.',
    fit: 'Ni vill pröva TikTok som annonskanal och har möjlighet att ta fram och förnya video. Eller så har ni redan kampanjer men behöver ett tydligare sätt att testa material och följa upp resultat.',
    focus: 'Att återanvända en film är inte samma sak som att anpassa den. Vi arbetar med öppning, tempo, demonstration och nästa handling. Testerna ska lära oss vilken idé som fungerar, inte bara vilken enskild film som får flest visningar.',
    items: [
      ['En rimlig kanalstart', 'Bedömning av målgrupp, erbjudande och material. Ni får ett avgränsat test med mål, ansvar och en tidpunkt för utvärdering.'],
      ['Videobrief och testplan', 'Konkreta förslag på öppningar, situationer och demonstrationer att filma. Jag briefar ert team eller er kreatör och planerar vilka varianter vi ska jämföra.'],
      ['Uppsättning och lärande', 'Kampanjer, kontroll av mätning och löpande justering. Resultatet blir underlag för nästa produktion och för beslutet att fortsätta, ändra eller avsluta testet.']
    ],
    startingPoint: ['Testa några tydligt olika idéer.', 'Vi kan jämföra en produktdemonstration med ett vanligt kundproblem och ett svar på en invändning. Varje idé får en tydlig öppning och handling. Det är ett exempel på testupplägg, inte ett krav på ett visst format eller en utfästelse om resultat.'],
    preparation: 'Tillgång till produkten eller tjänsten som ska visas, någon som kan producera video och godkända rättigheter till allt material. Vi behöver också bestämma vart klicket leder och hur utfallet ska mätas.',
    faqs: [
      ['Behöver vi vara aktiva organiskt på TikTok först?', 'Vi kan bedöma en annonsstart även utan ett stort organiskt konto. Det viktiga för uppdraget är ett tydligt erbjudande, relevant material och förutsättningar att följa upp kampanjen.'],
      ['Kan vi använda våra befintliga filmer?', 'Ofta som utgångspunkt. Vi granskar om öppning, bildformat, text och tempo behöver ändras. Rättigheter till musik, personer och material måste också vara klara för annonsering.'],
      ['Tar du hand om kreatörer och filmproduktion?', 'Jag hjälper med brief, testplan och återkoppling på materialet. Kreatörssamarbeten, avtal och produktion avgränsar vi separat så att det är tydligt vem som ansvarar.'],
      ['Hur vet vi om vi ska fortsätta efter testet?', 'Vi bestämmer utvärderingen före start. Vi tittar på den affärshandling ni vill få, materialets respons och hur tillförlitlig mätningen är. Många visningar ensamt är inget skäl att öka budgeten.']
    ], related: ['snapchat-annonsering', 'meta-annonsering', 'youtube-annonsering']
  },
  {
    slug: 'youtube-annonsering', name: 'YouTube-annonsering',
    title: 'YouTube Ads-konsult – strategi & videoannonsering | Adorable',
    description: 'Annonsering på YouTube med tydligt mål, videobrief och uppföljning. Peter Rosdahl hjälper er planera, sätta upp och utvärdera videoannonser.',
    intro: 'Jag hjälper er med videoannonsering på YouTube. Från vilken roll filmen ska spela till kampanjuppsättning i Google Ads och uppföljning av vad den faktiskt bidrar med.',
    fit: 'Ni vill introducera ett erbjudande, förklara en produkt eller nå fler med ett viktigt budskap. Ni har en film eller ett team som kan producera material efter en tydlig brief.',
    focus: 'Ska människor känna igen er, förstå erbjudandet eller göra något direkt? Det valet påverkar både kampanjen och filmen. En visning är inte ett köp, och samma mått passar inte alla uppdrag.',
    items: [
      ['Mål, målgrupp och format', 'Ett upplägg för vad kampanjen ska åstadkomma och hur video passar in tillsammans med era andra kanaler. Vi väljer format och placeringar utifrån målet.'],
      ['Film som fungerar som annons', 'Brief för öppning, budskap, varumärke och uppmaning. Vi ser över vilka versioner av filmen som behövs och vad ni kan återanvända. Filmproduktion avtalas separat.'],
      ['Kampanj och utvärdering', 'Uppsättning i Google Ads, kontroll av länkar och mätning samt uppföljning av leverans och respons. Vi granskar placeringar och bestämmer vad som bör justeras.']
    ],
    startingPoint: ['Ge filmen en tydlig uppgift.', 'Har ni en produktfilm kan vi börja med att välja en enda poäng kunden ska förstå och en handling efteråt. Jag briefar annonsversionen och kopplar den till ett avgränsat kampanjmål.'],
    preparation: 'Filmen eller produktionsmöjligheten, tillgång till relevanta Google Ads- och YouTube-konton samt en godkänd landningssida. Vi stämmer av rättigheter och vilken mätning som är möjlig före start.',
    faqs: [
      ['Köps YouTube-annonser via Google Ads?', 'Ja. Videoannonseringen hanteras i Google Ads. Det är ändå ett annat upplägg än sökannonsering: film, budskap och utvärdering behöver utformas för video.'],
      ['Kan vi använda en befintlig varumärkesfilm?', 'Ja, om den fungerar för uppgiften och ni har rätt att använda den i annonser. Ofta behöver öppning, längd eller avslut anpassas. Jag hjälper er att bedöma vad som behöver ändras.'],
      ['Får vi hjälp med både räckvidd och konvertering?', 'Vi kan planera utifrån olika mål, men bestämmer ett tydligt syfte för varje del av kampanjen. Mätbar försäljning beror också på erbjudandet, webbplatsen och kvaliteten i spårningen.'],
      ['Ingår organisk YouTube-optimering?', 'Den här tjänsten gäller betald annonsering. Kanalinnehåll, löpande publicering och organisk videostrategi ingår inte om vi inte särskilt kommer överens om det.']
    ], related: ['google-ads', 'tiktok-annonsering', 'linkedin-annonsering']
  },
  {
    slug: 'snapchat-annonsering', name: 'Snapchat-annonsering',
    title: 'Snapchat Ads-konsult – annonsering & kampanjer | Adorable',
    description: 'Pröva Snapchat som annonskanal med Peter Rosdahl. Hjälp med målgrupp, mobilanpassat material, kampanjer och tydlig uppföljning.',
    intro: 'Jag hjälper er att bedöma och testa annonsering på Snapchat. Ett tydligt erbjudande, mobilanpassat material och en genomtänkt väg från annons till nästa handling.',
    fit: 'Ni vill undersöka om Snapchat kan komplettera er nuvarande annonsering. Först behöver vi se att målgruppen, erbjudandet och materialet passar — inte välja kanalen bara för att den finns.',
    focus: 'Upplevelsen efter annonsen behöver fungera lika bra som filmen. Jag ser över hela den mobila vägen: vad besökaren möter, hur formuläret eller köpet fungerar och vilken handling vi faktiskt kan följa upp.',
    items: [
      ['Kanalbedömning', 'Vi går igenom målgrupp, affärsmål och befintliga kanaler. Ni får ett förslag på vad ett Snapchat-test ska besvara och hur det skiljer sig från det ni redan gör.'],
      ['Mobil kreativ brief', 'Brief för stående bild eller video med tydligt budskap och avslut. Jag samordnar annonskraven med den som producerar och ser över den länkade mobilupplevelsen.'],
      ['Test och beslut', 'Uppsättning, mätkontroll och löpande granskning av kampanjen. Vi sammanfattar resultatet och vad det betyder för fortsatt material, kanalval och budgetfördelning.']
    ],
    startingPoint: ['Börja med ett erbjudande som går att förstå snabbt.', 'Vi väljer en produkt eller tjänst och en enkel handling, till exempel att läsa mer eller göra en förfrågan. Innan testet kontrollerar vi att samma löfte finns på landningssidan och att den fungerar på telefon.'],
    preparation: 'Ett avgränsat erbjudande, mobilanpassat material och en fungerande landningssida. Vi stämmer också av tillåtna målgrupper, ålderskrav och eventuella begränsningar för er produkt.',
    faqs: [
      ['Ska vi välja Snapchat eller TikTok?', 'Det avgörs av målgrupp, erbjudande, material och vad ni redan har lärt er i andra kanaler. Jag hjälper er att prioritera ett meningsfullt test i stället för att starta överallt samtidigt.'],
      ['Fungerar våra befintliga sociala annonser?', 'De kan vara en utgångspunkt. Vi kontrollerar bildformat, läsbarhet, tempo och uppmaning samt anpassar efter de placeringar vi väljer.'],
      ['Ingår AR-linser?', 'Inte i ett vanligt kampanjuppdrag. Om ett koncept kräver en AR-lins behöver produktion, kompetens och kostnad specificeras separat.'],
      ['Hur utvärderar vi kanalen?', 'Vi bestämmer ett affärsmål och granskar både annonsrespons och vad som händer på webbplatsen. Mätningen har begränsningar; plattformsrapporter ska inte ensamma behandlas som bevis för ny försäljning.']
    ], related: ['tiktok-annonsering', 'meta-annonsering', 'pinterest-annonsering']
  },
  {
    slug: 'pinterest-annonsering', name: 'Pinterest-annonsering',
    title: 'Pinterest Ads-konsult – annonsering & strategi | Adorable',
    description: 'Pinterest-annonsering för företag med ett visuellt erbjudande. Peter Rosdahl hjälper med kanalval, kreativ brief, kampanjer och uppföljning.',
    intro: 'Jag hjälper er att planera och testa annonsering på Pinterest. Vi kopplar ett visuellt erbjudande till det kunden letar inspiration till och vill göra härnäst.',
    fit: 'Ni har produkter eller tjänster som människor gärna utforskar visuellt, exempelvis inför ett köp eller projekt. Ni behöver kunna visa användning, idéer eller sammanhang — inte bara en logotyp.',
    focus: 'Inspiration och köp kan ske vid olika tillfällen. Vi planerar material och uppföljning med det i åtanke, utan att räkna varje sparning som försäljning eller lova att Pinterest passar alla kategorier.',
    items: [
      ['Kundens idé och ert erbjudande', 'Vi väljer vilka behov, produkter och säsonger kampanjen ska utgå från. Ni får en tydlig roll för Pinterest i relation till sökannonser och andra sociala kanaler.'],
      ['Material och landningssidor', 'Brief för bilder eller video som visar sammanhang och nytta. Vi ser till att besökaren kommer till en sida som fortsätter på samma idé och gör det lätt att gå vidare.'],
      ['Kampanj och lärande', 'Uppsättning, kontroll av mätning och uppföljning. Vi skiljer mellan inspiration, webbtrafik och affärshandlingar när vi bestämmer vilka delar som ska utvecklas.']
    ],
    startingPoint: ['Utgå från hur produkten används.', 'För ett inredningserbjudande kan testet exempelvis handla om en användningssituation i stället för en lös produktbild. Vi kopplar annonsen till relevant innehåll eller produkt på er webbplats och följer kundens fortsatta steg.'],
    preparation: 'Ett visuellt materialbibliotek, prioriterade produkter eller tjänster och relevanta destinationssidor. Om produktkatalog används granskar vi förutsättningarna för den som en egen del av uppdraget.',
    faqs: [
      ['Är Pinterest bara relevant för e-handel?', 'Nej, men det behöver finnas en naturlig koppling mellan människors inspiration och ert erbjudande. Vi bedömer den kopplingen innan vi föreslår en kampanj.'],
      ['Kan du hjälpa med katalogannonser?', 'Vi kan bedöma om katalogannonser är lämpliga och vad som krävs i ert konto och produktunderlag. Större arbete med produktfeed eller integration avtalas separat.'],
      ['Hur skiljer sig materialet från Meta?', 'Vi börjar i en idé eller användningssituation som kunden vill utforska. Befintliga bilder kan återanvändas, men text, format och destinationssida behöver passa den kampanj vi planerar.'],
      ['När ska vi utvärdera resultatet?', 'Vi kommer överens om en period utifrån målet, säsongen och mängden data. Vi granskar klick och affärshandlingar var för sig och är tydliga med vad som inte går att dra slutsatser om ännu.']
    ], related: ['meta-annonsering', 'google-ads', 'tiktok-annonsering']
  },
  {
    slug: 'google-ads', name: 'Google-annonsering',
    title: 'Google Ads-konsult – sökannonsering för företag | Adorable',
    description: 'Google-annonsering med Peter Rosdahl. Hjälp med sökord, annonser, kampanjstruktur och mätning. Från kontogenomgång till löpande Google Ads-arbete.',
    intro: 'Jag hjälper er med Google Ads när ni vill nå människor som söker efter det ni erbjuder. Från sökord och annonstext till en relevant landningssida och uppföljning av affären.',
    fit: 'Ni vill starta sökannonsering eller få bättre ordning på ett befintligt Google Ads-konto. Ni behöver veta vilka sökningar ni betalar för och om de leder till relevanta kunder.',
    focus: 'En sökning kan betyda att någon vill köpa, jämföra eller bara få ett svar. Vi skiljer på de avsikterna och ser till att annonsen motsvarar vad ni faktiskt erbjuder. Klick som aldrig kan bli rätt kund ska inte vara målet.',
    items: [
      ['Sökord och prioriteringar', 'Genomgång av sökintention, söktermer och nuvarande konto. Ni får en prioritering av vilka erbjudanden och sökningar kampanjerna ska fokusera på, och vad som ska uteslutas.'],
      ['Annonser och landningssidor', 'Kampanjstruktur och annonstexter som hänger ihop med innehållet efter klicket. Jag pekar ut förändringar på webbplatsen; större webbproduktion specificeras separat.'],
      ['Mätning och löpande arbete', 'Kontroll av konverteringsmål, justering av kampanjer och uppföljning av lead- eller köpkvalitet. Vi skiljer på ert varumärke och andra sökningar för en tydligare bild av resultatet.']
    ],
    startingPoint: ['Se vad ni faktiskt betalar för.', 'I ett befintligt konto börjar vi med söktermer, annonser, kostnader och de handlingar som räknas som konverteringar. Det visar om nästa åtgärd är ett annat sökord, en bättre sida eller en korrigering av mätningen.'],
    preparation: 'Tillgång till Google Ads, relevanta mätverktyg och information om vilka produkter eller förfrågningar som är värdefulla. Konton och data ska fortsätta ägas av er.',
    faqs: [
      ['Är Google Ads samma sak som SEO?', 'Nej. Google Ads är betalda annonser. SEO handlar om synlighet i de obetalda sökresultaten. Den här tjänsten gäller annonsering; annonsköp ger ingen garanti för bättre organisk placering.'],
      ['Arbetar du bara med sökannonser?', 'Den här sidan fokuserar på sökannonsering. Jag hjälper även med YouTube-annonsering. Shopping och andra kampanjtyper bedömer vi utifrån erbjudande, produktdata och omfattning innan vi bestämmer upplägget.'],
      ['Kan du ta över vår nuvarande annonsering?', 'Ja. Jag börjar med en genomgång och dokumenterar vad som behöver ändras. Vi kommer överens om ansvar och godkännande innan jag gör förändringar i era kampanjer.'],
      ['Hur avgör vi om annonserna är lönsamma?', 'Vi behöver förstå marginaler eller värdet av kvalificerade förfrågningar, inte bara klick och formulär. Jag hjälper er att välja relevanta mått och skilja på det som är mätt, uppskattat och fortfarande osäkert.']
    ], related: ['youtube-annonsering', 'meta-annonsering', 'linkedin-annonsering']
  },
  {
    slug: 'ai-workshop', name: 'AI-workshop för företag',
    title: 'AI-workshop & AI-utbildning för företag | Adorable',
    description: 'Praktisk AI-workshop för ledningsgrupper och team med Peter Rosdahl. Egna arbetsuppgifter, tydliga instruktioner och en plan att använda efteråt.',
    intro: 'En praktisk AI-workshop med era arbetsuppgifter som utgångspunkt. Jag hjälper ledningsgrupper och team att förstå verktygen, pröva dem och välja vad som är värt att använda.',
    fit: 'Ni har olika kunskapsnivåer i teamet, många verktyg att välja mellan eller svårt att gå från en demonstration till användning i vardagen.',
    focus: 'Vi tränar på uppgifter som finns i ert arbete: exempelvis att förbereda en analys, strukturera ett underlag eller ta fram ett första utkast. Deltagarna övar också på att hitta fel och avgöra när ett AI-svar inte ska användas.',
    items: [
      ['Förberedelse med ert team', 'Vi stämmer av deltagarnas roller, kunskapsnivå, godkända verktyg och arbetsuppgifter. Ni väljer exempel som går att använda utan känsliga uppgifter.'],
      ['Övningar med handledning', 'Gemensamma genomgångar och eget arbete med återkoppling. Vi övar på instruktioner, källkontroll och att förbättra ett resultat steg för steg.'],
      ['Material som följer med hem', 'Instruktioner och övningar från tillfället, prioriterade användningsfall och förslag på nästa test. Vi utser en ansvarig hos er för att följa upp användningen.']
    ],
    startingPoint: ['Olika upplägg för ledning och team.', 'En ledningsgrupp behöver ofta prioritera nytta, risk, ansvar och investeringar. Ett operativt team behöver mer tid att öva på sina uppgifter. Vi anpassar upplägget efter vilka som deltar i stället för att köra samma presentation för alla.'],
    preparation: 'En kontaktperson, ett urval vardagsuppgifter och besked om vilka AI-verktyg ni får använda. Om ni ännu saknar godkända verktyg tar vi upp det i förberedelsen och väljer ett säkert övningsupplägg.',
    faqs: [
      ['Behöver deltagarna kunna AI sedan tidigare?', 'Nej. Vi anpassar nivån och kan dela upp övningarna efter erfarenhet. Det viktigaste är att deltagarna känner igen arbetsuppgifterna vi tränar på.'],
      ['Är det en utbildning i ChatGPT, Claude eller Gemini?', 'Vi väljer verktyg efter era förutsättningar. Det kan vara ChatGPT, Claude eller Gemini, men fokus är ett användbart arbetssätt och hur resultatet granskas — inte att visa varje funktion.'],
      ['Kan workshopen hållas på plats eller på engelska?', 'Ja, vi kan arbeta digitalt eller på plats enligt överenskommelse, på svenska eller engelska. Deltagare, längd och praktiska förutsättningar bestämmer vi innan start.'],
      ['Ingår en färdig AI-lösning?', 'Nej. Workshopen ger träning, underlag och prioriteringar. Om ni vill bygga ett arbetsflöde eller en assistent avgränsar vi det som ett separat pilotprojekt med egna leveranser och tester.']
    ], related: ['ai-automatisering']
  },
  {
    slug: 'ai-automatisering', name: 'AI-automatisering',
    title: 'AI-automatisering för företag – arbetsflöden & piloter | Adorable',
    description: 'Bygg och testa ett avgränsat AI-arbetsflöde med Peter Rosdahl. Från kartläggning och prototyp till kvalitetskontroll, ansvar och överlämning.',
    intro: 'Jag hjälper er att bygga och testa AI-arbetsflöden för återkommande uppgifter. Vi börjar i liten skala och kontrollerar kvaliteten innan något får påverka kunder eller viktiga beslut.',
    fit: 'Ni lägger tid på att läsa underlag, sammanställa information eller flytta den mellan verktyg. Uppgiften återkommer och det finns någon som kan bedöma om resultatet är rätt.',
    focus: 'All automatisering behöver inte AI. Tydliga regler kan vara bättre för vissa steg. Jag hjälper er att skilja mellan det som kan köras automatiskt, det som behöver en AI-modell och det som en människa fortfarande ska godkänna.',
    items: [
      ['Kartläggning och avgränsning', 'Vi beskriver indata, arbetssteg, önskat resultat och undantag. Ni får en första pilot med tydlig ägare och kriterier för när den fungerar tillräckligt bra.'],
      ['Prototyp och tester', 'Jag bygger ett avgränsat flöde eller en assistent och testar på godkända exempel. Vi granskar felaktiga svar, saknad information, behörigheter och vad som händer när ett verktyg inte svarar.'],
      ['Överlämning och beslut', 'Dokumentation av arbetssätt, granskning och återställning. Vi sammanfattar testresultat, löpande kostnader och vad som återstår innan ni kan besluta om drift och förvaltning.']
    ],
    startingPoint: ['Ett underlag in. Ett granskat utkast ut.', 'Ett möjligt pilotprojekt är att sammanställa godkända mötesanteckningar till ett internt uppföljningsutkast med tydliga källor. En ansvarig granskar och godkänner innan det används eller skickas vidare. Det är ett exempel på ett avgränsat flöde, inte en färdig standardprodukt.'],
    preparation: 'En processägare, godkända testexempel och besked om vilka system och uppgifter som får användas. Integrationer, IT-krav och personuppgifter måste stämmas av innan vi kopplar ihop skarpa system.',
    faqs: [
      ['Måste vi byta våra befintliga verktyg?', 'Inte nödvändigtvis. Vi börjar med era befintliga system och undersöker åtkomst, integrationer och begränsningar. Jag lovar inte en koppling till ett system innan den har kontrollerats.'],
      ['Hur vet vi att automatiseringen sparar tid?', 'Vi jämför med hur uppgiften görs idag och räknar även in granskning, korrigeringar och underhåll. Ett snabbare utkast är inte en tidsvinst om det kräver mer efterarbete.'],
      ['Kan flödet skicka meddelanden eller ändra data själv?', 'Bara om det uttryckligen ingår och har godkänts. Vi börjar normalt med utkast eller läsbehörighet. Externa utskick och ändringar behöver tydliga tillstånd, tester och en väg att stoppa flödet.'],
      ['Ingår drift, juridik och informationssäkerhet?', 'Pilotens tekniska arbete och dokumentation avgränsas i förslaget. Drift och fortsatt förvaltning avtalas separat. Era ansvariga för IT, informationssäkerhet och juridik behöver godkänna de delar som berör deras områden.']
    ], related: ['ai-workshop']
  }
];

export const findServicePage = (slug: string) => servicePages.find(page => page.slug === slug);
export const isAIPage = (slug: string) => slug.startsWith('ai-');
