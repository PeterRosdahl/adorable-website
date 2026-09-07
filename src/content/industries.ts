export type Industry = {
  slug: string; name: string; title: string; description: string;
  intro: string; focus: string; items: [string, string][];
  boundary: string; faqs: [string, string][]; related: string[];
};

// These are proposed applications of the services, not a list of client cases.
export const industries: Industry[] = [
  {
    slug:'bank-finans', name:'Bank och finans', title:'Annonsering & AI-stöd för bank och finans | Adorable',
    description:'Stöd till marknadsteam inom bank och finans. Tydliga kampanjer, uppföljning och praktisk AI-utbildning med avgränsat ansvar.',
    intro:'Jag hjälper marknadsteam inom bank och finans med kampanjer, uppföljning och praktisk användning av AI. Vi börjar med ett tydligt erbjudande och er interna process för godkännande.',
    focus:'För en finansiell tjänst behöver kunden förstå både erbjudandet och vad som gäller. Jag arbetar med annonsbudskap och vägen till relevant information, medan era sakkunniga granskar produktvillkor och regelkrav.',
    items:[['Annonsering med tydliga godkännanden','Kampanjplan, budskap och brief för exempelvis en företagstjänst eller en produktlansering. Vi bestämmer vem som godkänner innehåll och vilka begränsningar som gäller före publicering.'],['Uppföljning av förfrågningar','Vi skiljer på intresse, ansökningar och faktisk kundrelation. Mätningen utformas tillsammans med era ansvariga, utan löften om att varje steg går att spåra.'],['AI för marknadsteamet','Praktisk utbildning eller ett avgränsat test för exempelvis att strukturera godkända underlag och förbereda utkast. En människa granskar innan material används.']],
    boundary:'Uppdraget gäller marknadsföring och teamets arbetssätt, inte automatiserad kreditbedömning, investeringsrådgivning eller beslut om kunder. Juridik, informationssäkerhet och dataåtkomst godkänns av era ansvariga.',
    faqs:[['Kan ni garantera att vår annonsering följer alla regler?','Nej. Jag kan arbeta inom era godkända ramar och samordna kampanjarbetet, men juridisk granskning och produktansvar ligger hos era ansvariga.'],['Behöver vi dela kund- eller ansökningsdata?','Vi börjar med den minsta mängd information som behövs. Kunduppgifter ska inte användas i ett AI-test utan att behandling, verktyg och behörigheter först har godkänts.']],
    related:['linkedin-annonsering','google-ads','ai-workshop']
  },
  {
    slug:'byggbranschen', name:'Byggföretag', title:'AI för byggföretag – utbildning & arbetsflöden | Adorable',
    description:'Praktiskt AI-stöd för byggföretag: utbildning, informationsarbete och avgränsade arbetsflöden. Börja med en uppgift som går att granska.',
    intro:'Jag hjälper byggföretag att använda AI i informations- och kontorsarbete. Vi väljer en återkommande uppgift och testar om den går att förenkla utan att tappa kontroll över innehållet.',
    focus:'Ett användbart första steg kan vara att strukturera mötesanteckningar eller förbereda en statusrapport från godkända underlag. Resultatet ska gå att kontrollera mot källorna och ansvarig person ska kunna rätta det.',
    items:[['Utbildning med egna arbetsuppgifter','En workshop för projektledning, administration eller marknad. Vi övar på uppgifter som deltagarna känner igen och på att upptäcka felaktiga eller ofullständiga svar.'],['Utkast och sammanställningar','En pilot som exempelvis samlar beslut och öppna frågor ur ett avgränsat underlag. Vi testar vad som saknas, vem som granskar och hur informationen hålls aktuell.'],['Marknadsföring av ert erbjudande','För byggföretag som även behöver annonsering kan vi planera sökannonser eller B2B-kampanjer kopplade till relevanta förfrågningar.']],
    boundary:'Jag erbjuder inte AI-styrd arbetsplatssäkerhet, konstruktionsberäkningar eller maskinövervakning. AI-utkast ersätter inte ansvarig projektledare eller tekniskt sakkunnig.',
    faqs:[['Kan vi börja utan att koppla in projektsystemet?','Ja. Ett första test kan använda godkända dokument och anonymiserade exempel. En eventuell integration bedöms och avtalas först efter att vi sett att arbetsflödet är användbart.'],['Kan AI skriva våra byggdagböcker automatiskt?','Vi kan undersöka stöd för att strukturera ett utkast från angivna uppgifter. Någon behöver kontrollera riktighet och fullständighet innan det blir projektdokumentation.']],
    related:['ai-workshop','ai-automatisering','google-ads']
  },
  {
    slug:'byraer', name:'Byråer', title:'Paid social-specialist & AI-stöd för byråer | Adorable',
    description:'Komplettera byrån med Peter Rosdahl inom annonsering och AI. Kampanjhantering, kreativ testning, pitchstöd och praktiska workshops.',
    intro:'Jag kompletterar byråer med senior kompetens inom annonsering och AI. Som specialist i ett kunduppdrag, stöd i planeringen eller en extra hand i det löpande arbetet.',
    focus:'Ni behåller kundrelationen och ert arbetssätt. Vi bestämmer min roll, hur kunden involveras och vem som godkänner vad. Kreativa idéer och kampanjresultat behöver kunna diskuteras i samma arbetsgrupp.',
    items:[['Kampanjer som en del av ert team','Planering, uppsättning och uppföljning i överenskomna annonskanaler. Ni får underlag som går att använda i kunddialogen och en tydlig ansvarsfördelning.'],['Kreativ brief och återkoppling','Jag omsätter kampanjlärdomar till konkreta frågor för nästa produktion: budskap, öppning, format och erbjudande. Byråns kreatörer ansvarar för produktionen.'],['AI i byråarbetet','Workshops och avgränsade tester för research, briefarbete och interna processer. Vi stämmer av kundsekretess och rättigheter innan material används i verktygen.']],
    boundary:'Samarbetet kan ske under byråns varumärke om det är överenskommet och förenligt med kundavtal och behörigheter. Jag utlovar inte dold åtkomst eller att kunden aldrig behöver känna till min medverkan.',
    faqs:[['Kan du vara med redan i en pitch?','Ja. Jag kan bidra med kanalbedömning, upplägg och uppskattad arbetsomfattning. Vi skiljer på hypoteser i pitchen och sådant som faktiskt har verifierats i kundens konton.'],['Tar du över kundrelationen?','Inte om det inte är avtalat. Vi bestämmer kontaktvägar, möten och rapportering så att jag kompletterar ert team.']],
    related:['meta-annonsering','linkedin-annonsering','ai-workshop']
  },
  {
    slug:'e-handel', name:'E-handel', title:'Annonsering & AI för e-handel | Adorable',
    description:'Annonsering för e-handel med fokus på erbjudande, material och lönsam uppföljning. Kampanjer, testplaner och praktiskt AI-stöd med Peter Rosdahl.',
    intro:'Jag hjälper e-handelsföretag med annonsering, kreativa tester och uppföljning. Vi utgår från sortimentet, marginalerna och vad som får kunden att välja er.',
    focus:'En hög rapporterad ROAS säger inte allt. Returer, rabatter, återkommande kunder och produktmarginaler påverkar affären. Vi behöver skilja annonsplattformens siffror från det ni faktiskt säljer och tjänar.',
    items:[['Prioriterade produkter och kanaler','Vi väljer erbjudanden att börja med och bedömer Meta, Google eller andra relevanta kanaler. Lagerläge, säsong och landningssidor behöver passa kampanjplanen.'],['Kreativa tester med produktnytta','En brief för demonstrationer, användningssituationer och vanliga kundinvändningar. Jag följer upp vad ni bör producera mer av och vad som behöver ändras.'],['Mätning och AI-stöd','Genomgång av konverteringsmål och ett tydligt uppföljningsunderlag. Ett separat AI-test kan hjälpa med utkast till produkttexter, med faktagranskning mot ert produktunderlag.']],
    boundary:'Jag garanterar inte försäljningsnivå eller fullständig attribution. Produktfeed, webbändringar och större integrationer avgränsas separat; produktpåståenden och rättigheter behöver godkännas av er.',
    faqs:[['Måste vi börja i flera annonskanaler?','Nej. Vi prioriterar där erbjudande, material och mätning ger bäst förutsättningar att lära. Fler kanaler innebär också mer produktion och uppföljning.'],['Kan AI skriva alla våra produkttexter?','Vi kan testa utkast för ett begränsat sortiment. Produktfakta, mått, villkor och påståenden behöver komma från godkänt underlag och granskas före publicering.']],
    related:['meta-annonsering','google-ads','pinterest-annonsering','tiktok-annonsering']
  },
  {
    slug:'fackforbund', name:'Fackförbund', title:'Annonsering & AI-stöd för fackförbund | Adorable',
    description:'Stöd med medlemsrekrytering, kampanjuppföljning och AI-utbildning för fackförbund. Tydlig medlemsnytta, ansvar och varsam datahantering.',
    intro:'Jag hjälper fackförbund att planera annonsering för medlemsrekrytering och utveckla kommunikationsteamets arbetssätt med AI. Vi börjar i medlemsnyttan och den handling ni vill underlätta.',
    focus:'Ett tydligt svar på varför någon ska gå med är viktigare än fler kampanjvarianter. Vi testar hur erbjudandet förstås och följer vägen från annons till ansökan, med hänsyn till vilken information som får behandlas.',
    items:[['Rekryteringsbudskap och kampanjer','Planering, kreativ brief och kampanjhantering utifrån godkända målgrupper och medlemsvillkor. Vi gör skillnad mellan att väcka intresse och att få en fullföljd ansökan.'],['Uppföljning av ansökningsflödet','Vi granskar var intresserade behöver mer information och vilka moment som kan förenklas. Tekniska förändringar och behandling av personuppgifter stäms av med era ansvariga.'],['AI-träning för kommunikation','Övningar i att strukturera offentliga underlag, förbereda utkast och granska svar. Medlemsärenden och känslig information används inte som öppet övningsmaterial.']],
    boundary:'Medlemsrekrytering är inte samma sak som politisk annonsering. Varje kampanjs innehåll och kanalregler måste bedömas. Vi använder inte medlemsregister eller känsliga uppgifter som annonsmålgrupp utan föregående prövning och godkännande.',
    faqs:[['Kan vi annonsera om alla frågor som förbundet driver?','Det går inte att lova. Plattformarnas regler och den aktuella kampanjens innehåll avgör vad som är tillåtet. Det kontrolleras innan ett upplägg föreslås.'],['Kan du hjälpa ett befintligt kommunikationsteam?','Ja. Jag kan ta ansvar för kampanjer och uppföljning eller stötta med testplaner och AI-utbildning. Ni äger budskap, medlemsvillkor och godkännanden.']],
    related:['meta-annonsering','google-ads','ai-workshop']
  },
  {
    slug:'fastighetsbolag', name:'Fastighetsbolag', title:'Annonsering & AI för fastighetsbolag | Adorable',
    description:'Kampanjer för bostäder och lokaler, tydligare förfrågningar och praktiskt AI-stöd. Peter Rosdahl hjälper från planering till uppföljning.',
    intro:'Jag hjälper fastighetsbolag med annonsering för bostäder, lokaler och projekt. Vi gör erbjudandet tydligt och följer upp vilka förfrågningar uthyrnings- eller säljteamet kan arbeta vidare med.',
    focus:'En ledig lokal och ett bostadsprojekt har olika köpare och beslutsvägar. Vi skiljer på uppdragen, väljer relevanta kanaler och ser till att annonsen leder till rätt objektinformation och kontaktväg.',
    items:[['Kampanjplan för objektet','Budskap, mål och materialbehov för en lokal, ett projekt eller ett område. Kanalval och målgrupper kontrolleras mot gällande begränsningar för den aktuella annonseringen.'],['Från intresse till dialog','Vi följer inte bara formulär, utan också återkoppling från teamet: är förfrågningarna relevanta och går de vidare till visning eller samtal?'],['AI i informationsarbetet','En workshop eller pilot för att sammanställa godkänd objektinformation och ta fram utkast. Uppgifter om tillgänglighet, ytor och villkor behöver alltid granskas.']],
    boundary:'Jag lovar inte gatunivåstyrning eller att alla målgruppsval är tillåtna för bostadsannonser. Inte heller full uthyrning eller automatiska besked till hyresgäster utan godkännande.',
    faqs:[['Kan vi annonsera lokalt för ett bostadsprojekt?','Vi bedömer tillgängliga geografiska val och regler för den aktuella kanalen och annonskategorin. Upplägget måste utgå från vad som faktiskt är tillåtet.'],['Kan vi följa resultat hela vägen till avtal?','Om ni har godkända data och en fungerande återkoppling kan vi väga in hur förfrågningarna utvecklas. Det innebär inte att varje avtal säkert kan tillskrivas en viss annons.']],
    related:['meta-annonsering','google-ads','linkedin-annonsering','ai-automatisering']
  },
  {
    slug:'fmcg', name:'FMCG och konsumentvaror', title:'Annonsering för FMCG & konsumentvarumärken | Adorable',
    description:'Planera kampanjer för produktlanseringar och säsonger med Peter Rosdahl. Kanalval, kreativ testning och tydlig uppföljning för konsumentvarumärken.',
    intro:'Jag hjälper konsumentvarumärken med digital annonsering för lanseringar, säsonger och löpande kommunikation. Vi kopplar materialet till hur produkten används och var den går att köpa.',
    focus:'När försäljningen sker i butik kan inte varje köp kopplas till en annons. Därför bestämmer vi vad kampanjen ska åstadkomma, vilken data som finns och vilka slutsatser den faktiskt räcker till.',
    items:[['Lanserings- och kampanjplan','En plan för budskap, tidpunkter och annonskanaler som passar distribution och tillgänglighet. En kampanj ska inte skapa efterfrågan på en produkt kunden inte kan hitta.'],['Kreativ testning','Brief för olika användningssituationer, produktfördelar och format. Jag analyserar annonsrespons och ger återkoppling till den som producerar nästa material.'],['Uppföljning utan falsk precision','Vi rapporterar räckvidd, respons och tillgänglig försäljningsinformation var för sig. Eventuella effektstudier eller specialistmätningar bedöms som separata uppdrag.']],
    boundary:'Jag lovar inte koppling till butiksköp via platsdata eller en färdig modell för marknadseffekt. Retail media-inköp och avancerad modellering ingår inte automatiskt i ett kampanjuppdrag.',
    faqs:[['Kan du hjälpa med en produktlansering?','Ja, med digital kampanjplanering, brief, uppsättning och uppföljning. Vi behöver förstå produktens tillgänglighet och vilka budskap som är godkända.'],['Hur mäter vi om annonseringen driver butiksköp?','Vi börjar med vilken försäljningsdata och jämförelse som finns. Utan ett lämpligt mätupplägg kan vi inte isolera annonsens effekt från pris, distribution och andra aktiviteter.']],
    related:['meta-annonsering','tiktok-annonsering','youtube-annonsering','snapchat-annonsering']
  },
  {
    slug:'forsakring', name:'Försäkring', title:'Annonsering & AI-stöd för försäkringsbolag | Adorable',
    description:'Tydligare försäkringserbjudanden i digital annonsering. Kampanjer, uppföljning och AI-träning för marknadsteam med avgränsat ansvar.',
    intro:'Jag hjälper marknadsteam inom försäkring att göra erbjudandet begripligt i annonsering och följa upp relevanta förfrågningar. Era sakkunniga ansvarar för villkor och produktgranskning.',
    focus:'Kunden behöver förstå vad försäkringen gäller, för vem den är relevant och var villkoren finns. Annonsen och landningssidan ska hänga ihop så att viktiga förutsättningar inte försvinner mellan klick och offert.',
    items:[['Budskap och kampanjstruktur','Vi arbetar med godkända produktfördelar och tydliga kontaktvägar. Kampanjplanen skiljer exempelvis privatkundens behov från en företagsförsäkring.'],['Kvalitet i offertförfrågningar','Vi bestämmer vad som räknas som relevant intresse och följer upp med ert team. En billig förfrågan är inte ett bra resultat om produkten inte passar kunden.'],['AI-stöd för internt arbete','Utbildning eller test med godkända informationsunderlag. Teamet kan öva på utkast och sammanställningar, med granskning av innehåll och källor.']],
    boundary:'Uppdraget omfattar inte automatiserade skadebeslut, riskbedömning eller försäkringsrådgivning till kunder. Juridik och informationssäkerhet behöver godkännas av era ansvariga.',
    faqs:[['Kan du förenkla kommunikationen utan att ändra villkoren?','Jag kan hjälpa med budskap och struktur, men produktägare och juridiskt ansvariga behöver granska att formuleringarna är korrekta före publicering.'],['Kan AI svara direkt på kundernas försäkringsfrågor?','Det ingår inte i ett vanligt marknadsuppdrag. Kundnära svar om omfattning och villkor kräver ett separat beslutat och granskat upplägg. Vi kan börja med internt utkaststöd.']],
    related:['google-ads','meta-annonsering','ai-workshop']
  },
  {
    slug:'organisationer', name:'Organisationer', title:'Annonsering & AI för organisationer | Adorable',
    description:'Hjälp med kampanjer, anmälningar och AI-arbetssätt för organisationer. Tydliga mål, begripliga budskap och kontrollerad datahantering.',
    intro:'Jag hjälper organisationer med digitala kampanjer och praktiska AI-arbetssätt. Det kan handla om ett event, ett erbjudande till medlemmar eller att förenkla kansliets informationsarbete.',
    focus:'Börja med vilken handling som är viktig: en anmälan, en förfrågan eller att rätt personer tar del av information. Det gör både kampanjbudskapet och uppföljningen mer användbara.',
    items:[['Kampanj med en tydlig handling','Planering och genomförande för ett avgränsat mål. Vi granskar landningssidan så att det är tydligt vem erbjudandet gäller och hur besökaren går vidare.'],['Lärande för kommunikationsteamet','Rapportering av resultat och återkoppling på material. Ni får förslag som går att använda i nästa utskick, kampanj eller produktion.'],['AI för kansli och kommunikation','Praktiska övningar med offentliga eller godkända underlag. Vi kan testa sammanställningar och utkast med tydliga källor och mänsklig granskning.']],
    boundary:'Jag lovar inte betald distribution av politiska budskap. Innehåll och kanalregler kontrolleras innan en kampanj planeras. Medlemsregister och känsliga uppgifter kräver särskild prövning innan de används.',
    faqs:[['Arbetar du även med små kanslier?','Ja. Vi kan börja med ett avgränsat uppdrag som teamet har möjlighet att följa upp. Omfattningen bestäms efter behov och arbetsförmåga.'],['Är det här samma upplägg som för fackförbund?','Det finns gemensamma arbetssätt, men mål och ansvar skiljer sig. För fackförbund kan fokus vara medlemsrekrytering; för en annan organisation kan det vara exempelvis ett event eller intern utbildning.']],
    related:['linkedin-annonsering','meta-annonsering','ai-workshop','ai-automatisering']
  },
  {
    slug:'tillvaxtbolag', name:'Tillväxtbolag', title:'Annonsering & AI för tillväxtbolag | Adorable',
    description:'Senior hjälp med kanalval, kampanjtester och AI-arbetsflöden för växande företag. Tydliga hypoteser och uppföljning med Peter Rosdahl.',
    intro:'Jag hjälper växande företag att prioritera annonseringen och testa AI där det kan förenkla arbetet. Ett tydligt erbjudande och ett test som går att utvärdera kommer före fler kanaler.',
    focus:'Skilj på att undersöka efterfrågan och att skala något som redan fungerar. I ett tidigt skede behöver testet ge kunskap om kunden; i ett senare skede behöver vi förstå kvalitet och ekonomi när volymen förändras.',
    items:[['Kanalval och första test','Vi väljer ett erbjudande, en målgrupp och en handling. Ni får en hypotes, en kampanjplan och kriterier för om testet ska fortsätta, ändras eller stoppas.'],['Löpande specialiststöd','Jag kan ansvara för annonsering och återkoppling till marknad eller sälj. Vi följer kvaliteten på kunder och förfrågningar, inte bara tillväxten i klick.'],['Ett avgränsat AI-arbetsflöde','Vi granskar en återkommande intern uppgift och testar om den kan förenklas. En pilot ska ha en ägare och mätas inklusive granskning och underhåll.']],
    boundary:'Jag garanterar inte ett visst antal kunder eller att annonsering kan bevisa en hållbar affärsmodell på egen hand. Bolagsövergripande CMO-ansvar och kapitalanskaffning ingår inte automatiskt.',
    faqs:[['Kan du hjälpa oss innan vi vet vilken kanal som fungerar?','Ja. Vi börjar med erbjudandet och den kund ni vill nå och prioriterar ett avgränsat test. Ni får ett beslutsunderlag, inte ett löfte om att en viss kanal kommer fungera.'],['När är det rimligt att öka annonsbudgeten?','När vi förstår kvaliteten i utfallet, mätningen och era förutsättningar att ta hand om kunderna. Mer budget ska kopplas till ett tydligt beslut och följas upp.']],
    related:['google-ads','linkedin-annonsering','meta-annonsering','ai-automatisering']
  },
  {
    slug:'tillverkningsindustri', name:'Tillverkande företag', title:'B2B-annonsering & AI för industriföretag | Adorable',
    description:'B2B-kampanjer, säljuppföljning och AI-utbildning för industriföretag. Peter Rosdahl hjälper marknads- och säljteam med konkret genomförande.',
    intro:'Jag hjälper industriföretag med B2B-annonsering och AI-stöd för marknads- och säljarbete. Vi gör ett tekniskt erbjudande lättare att förstå för dem som ska utvärdera det.',
    focus:'Försäljningen kan behöva involvera flera roller. Vi väljer vilken fråga kampanjen ska besvara och följer upp om den leder till rätt sorts dialog, exempelvis om en tillämpning, en demonstration eller ett projekt.',
    items:[['Målgrupper och tekniskt erbjudande','Kampanjplan för relevanta företag eller yrkesroller. Era produktspecialister granskar tekniska påståenden; jag hjälper med budskap, format och kampanjuppsättning.'],['Koppling till säljarbetet','Vi bestämmer hur förfrågningar ska följas upp och vilken återkoppling marknad behöver. Då blir leadkvalitet och fortsatta samtal en del av utvärderingen.'],['AI i kunskapsarbetet','Workshop eller pilot för godkända produktunderlag, mötesförberedelser och interna sammanställningar. Vi kräver källor och granskningsansvar för teknisk information.']],
    boundary:'Det här är inte ett erbjudande om AI-styrd produktion, maskinunderhåll eller automatiserad kvalitetskontroll. Tekniska beräkningar och säkerhetsbeslut ligger hos era sakkunniga.',
    faqs:[['Kan vi nå utvalda industriföretag på LinkedIn?','Vi kan bedöma ett kontobaserat kampanjupplägg och vilka målgrupper som är möjliga. Matchning och räckvidd behöver kontrolleras; vi garanterar inte åtkomst till varje beslutsfattare.'],['Hur utvärderar vi en kampanj när affären tar tid?','Vi skiljer tidiga signaler från faktiska affärer och följer dialogerna tillsammans med sälj. Ett nedladdat dokument är inte samma sak som ett kvalificerat projekt.']],
    related:['linkedin-annonsering','google-ads','youtube-annonsering','ai-workshop']
  },
  {
    slug:'utbildning', name:'Utbildning', title:'AI-utbildning för utbildningsteam & skolpersonal | Adorable',
    description:'Praktiska AI-workshops för utbildningsverksamheter. Träna på underlag, planering och utkast med tydlig granskning och varsam datahantering.',
    intro:'Jag hjälper utbildningsverksamheter att förstå och pröva AI i personalens arbete. Fokus ligger på praktisk träning, granskning och tydliga ramar för vilka uppgifter som lämpar sig.',
    focus:'Vi kan arbeta med planeringsunderlag, administrativa utkast och material som personalen bearbetar vidare. Övningar behöver gå att genomföra utan att elev- eller studentuppgifter delas i verktyg som inte är godkända.',
    items:[['Workshop för personalen','Praktiska övningar på en nivå som passar deltagarna. Vi går igenom hur instruktioner påverkar resultatet och hur man kontrollerar fakta och källor.'],['Utkast som går att granska','Vi testar exempelvis att strukturera offentligt material eller göra ett första utkast till information. Ansvarig pedagog eller medarbetare granskar och anpassar resultatet.'],['Gemensamma arbetssätt','Underlag för vilka uppgifter ni vill pröva, vilka verktyg som är godkända och vem som ansvarar för uppföljning. Formella riktlinjer fastställs av verksamheten.']],
    boundary:'Jag erbjuder inte automatiserad betygssättning, antagningsbeslut eller prediktiv bedömning av elever. Pedagogiskt ansvar, rättslig grund och informationssäkerhet ligger hos verksamhetens ansvariga.',
    faqs:[['Måste vi använda riktiga elevarbeten i övningarna?','Nej. Vi kan arbeta med offentliga underlag och konstruerade exempel. Personuppgifter ska inte delas för att göra övningen mer realistisk.'],['Passar workshopen både nybörjare och vana användare?','Ja, upplägget anpassas efter deltagarnas erfarenhet och roller. Vi kan använda olika övningsnivåer och fokusera på gemensamma metoder för kvalitet och granskning.']],
    related:['ai-workshop','ai-automatisering']
  }
];
