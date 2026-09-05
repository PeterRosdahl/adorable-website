# Adorable – förhandsvisning, Lighthouse och SEO

Kontrollerat 5 september 2026. Status: klart för Peters granskning, inte publicerat.

Senare designjustering samma dag: startsidans header är helt borttagen och
kontaktsidans header innehåller bara logotypen. Ordmärket har fått en sammanhängande
violett/blå/teal-gradient med samma ändliga introduktion och musrespons. Nya
Lighthouse-mätningar gav 100/100/100/100 på svenska startsidan (mobil och desktop),
engelska startsidan (mobil) samt båda kontaktsidorna (mobil). Se
[senaste startsiderapporten](/tmp/adorable-lighthouse-TPhJ4K/gradient-home-mobile.report.html)
och [desktoprapporten](/tmp/adorable-lighthouse-TPhJ4K/gradient-home-desktop.report.html).
Motsvarande kontakt- och engelska rapporter har också prefixet gradient- i samma
mapp. Bygg-, SEO- och motionstester passerade igen; interna länkar/resurser är nu
518. Övriga mätningar nedan är från den tidigare iterationen. Inget är publicerat.

Förhandsvisning: http://127.0.0.1:4323/

Produktionsversionen är fortfarande dc9ce0a. Ingen push, Vercel-publicering eller ändring av domäninställningar har gjorts i denna iteration.

## Ändringar

- Menyn visar bara möteslänken på startsidorna. Undersidorna behåller även logotypen som länk hem. Den dubblerade Kontakt-länken är borttagen på båda språken.
- Pausknappen är borttagen. Automatisk logotyprörelse slutar efter 4,2 sekunder; avsiktlig pekarrörelse kan fortfarande påverka bokstäverna. Rörelsen stannar när sidan är dold/utanför vyn och respekterar minskad rörelse.
- Bokstäverna animeras med transformationer i fasta layoutpositioner, i stället för att ändra flexbredder varje bildruta. Den godkända formen och färgerna är bevarade.
- Gemensam strukturerad data beskriver företaget, Peter, webbplatsen, sidan och de två tjänsterna. Tjänstesidornas 20 FAQ-svar hämtas från samma innehåll som besökaren läser.
- Canonical, språkpar och sitemap kontrolleras automatiskt. Sidinformationen tillåter stora bildförhandsvisningar och obegränsad textsnuttlängd; detta är tillåtelse, inte ett krav på att söktjänsten visar dem.
- Förberett permanenta omdirigeringar från www till adorable.se samt borttagning av avslutande snedstreck i Vercel. Reglernas konfiguration är testad, men verkliga HTTP-svar kan verifieras först efter publicering.
- Uppdaterat befintliga llms.txt och ai.txt med tjänstelänkar och konsekventa uppgifter. Befintlig robotåtkomst, inklusive OAI-SearchBot, är bevarad.

## Lighthouse-resultat

Lighthouse 13.4.1, Chrome 152, standardinställningar för mobil (412 × 823, simulerad långsammare anslutning och 4× CPU) respektive desktop (1350 × 940). Inga granskningspunkter stängdes av inom de fyra kategorierna. En sekventiell mätning per sida; startsidorna mättes om efter den sista animationsändringen.

Alla 25 indexerbara sidor fick **100 prestanda / 100 tillgänglighet / 100 best practice / 100 SEO** i mobiltestet. Svenska och engelska startsidan samt svenska AI-sidan fick också 100/100/100/100 på desktop. Juridiska sidor och 404 har avsiktligt noindex och ingår inte i detta SEO-poängmål.

Den redan publicerade startsidan, AI-sidan och kontaktsidan fick 100/100/100/100 i baslinjens mobilmätning. Resultatet är alltså bibehållet, inte en uppgång från en långsam produktionssajt.

Ett första desktoptest av förhandsvisningen gav 99 i prestanda och CLS 0,074. Efter ändringen till fasta layoutpositioner fick startsidan 100 och CLS 0,027. Slutligt mobilvärde: LCP 1,2 s, TBT 0 ms, CLS 0,007. Tidigare rapporter finns kvar och har inte ersatts för att dölja resultatet.

### Mobilrapporter per sida

| Sida | Prestanda / Tillgänglighet / Best practice / SEO | LCP | CLS |
| --- | --- | --- | --- |
| [/](/tmp/adorable-lighthouse-TPhJ4K/final-home-mobile.report.html) | 100 / 100 / 100 / 100 | 1.2 s | 0.007 |
| [/ai](/tmp/adorable-lighthouse-TPhJ4K/preview-ai-mobile.report.html) | 100 / 100 / 100 / 100 | 0.8 s | 0.001 |
| [/branscher](/tmp/adorable-lighthouse-TPhJ4K/preview-branscher-mobile.report.html) | 100 / 100 / 100 / 100 | 1.2 s | 0 |
| [/branscher/bank-finans](/tmp/adorable-lighthouse-TPhJ4K/preview-branscher-bank-finans-mobile.report.html) | 100 / 100 / 100 / 100 | 1.1 s | 0.009 |
| [/branscher/byggbranschen](/tmp/adorable-lighthouse-TPhJ4K/preview-branscher-byggbranschen-mobile.report.html) | 100 / 100 / 100 / 100 | 1.4 s | 0 |
| [/branscher/byraer](/tmp/adorable-lighthouse-TPhJ4K/preview-branscher-byraer-mobile.report.html) | 100 / 100 / 100 / 100 | 1.4 s | 0.021 |
| [/branscher/e-handel](/tmp/adorable-lighthouse-TPhJ4K/preview-branscher-e-handel-mobile.report.html) | 100 / 100 / 100 / 100 | 1.4 s | 0.011 |
| [/branscher/fackforbund](/tmp/adorable-lighthouse-TPhJ4K/preview-branscher-fackforbund-mobile.report.html) | 100 / 100 / 100 / 100 | 0.9 s | 0.01 |
| [/branscher/fastighetsbolag](/tmp/adorable-lighthouse-TPhJ4K/preview-branscher-fastighetsbolag-mobile.report.html) | 100 / 100 / 100 / 100 | 1.4 s | 0 |
| [/branscher/fmcg](/tmp/adorable-lighthouse-TPhJ4K/preview-branscher-fmcg-mobile.report.html) | 100 / 100 / 100 / 100 | 1.1 s | 0 |
| [/branscher/forsakring](/tmp/adorable-lighthouse-TPhJ4K/preview-branscher-forsakring-mobile.report.html) | 100 / 100 / 100 / 100 | 1.1 s | 0 |
| [/branscher/organisationer](/tmp/adorable-lighthouse-TPhJ4K/preview-branscher-organisationer-mobile.report.html) | 100 / 100 / 100 / 100 | 1.4 s | 0.009 |
| [/branscher/tillvaxtbolag](/tmp/adorable-lighthouse-TPhJ4K/preview-branscher-tillvaxtbolag-mobile.report.html) | 100 / 100 / 100 / 100 | 1.4 s | 0.024 |
| [/branscher/tillverkningsindustri](/tmp/adorable-lighthouse-TPhJ4K/preview-branscher-tillverkningsindustri-mobile.report.html) | 100 / 100 / 100 / 100 | 0.8 s | 0 |
| [/branscher/utbildning](/tmp/adorable-lighthouse-TPhJ4K/preview-branscher-utbildning-mobile.report.html) | 100 / 100 / 100 / 100 | 1.1 s | 0 |
| [/en](/tmp/adorable-lighthouse-TPhJ4K/final-en-mobile.report.html) | 100 / 100 / 100 / 100 | 1.2 s | 0.007 |
| [/en/about](/tmp/adorable-lighthouse-TPhJ4K/preview-en-about-mobile.report.html) | 100 / 100 / 100 / 100 | 1.2 s | 0.019 |
| [/en/ai](/tmp/adorable-lighthouse-TPhJ4K/preview-en-ai-mobile.report.html) | 100 / 100 / 100 / 100 | 1.2 s | 0.002 |
| [/en/contact](/tmp/adorable-lighthouse-TPhJ4K/preview-en-contact-mobile.report.html) | 100 / 100 / 100 / 100 | 1.2 s | 0.002 |
| [/en/paid-social](/tmp/adorable-lighthouse-TPhJ4K/preview-en-paid-social-mobile.report.html) | 100 / 100 / 100 / 100 | 1.2 s | 0.021 |
| [/en/services](/tmp/adorable-lighthouse-TPhJ4K/preview-en-services-mobile.report.html) | 100 / 100 / 100 / 100 | 1.2 s | 0.001 |
| [/kontakt](/tmp/adorable-lighthouse-TPhJ4K/preview-kontakt-mobile.report.html) | 100 / 100 / 100 / 100 | 0.9 s | 0.002 |
| [/om](/tmp/adorable-lighthouse-TPhJ4K/preview-om-mobile.report.html) | 100 / 100 / 100 / 100 | 1.2 s | 0.019 |
| [/paid-social](/tmp/adorable-lighthouse-TPhJ4K/preview-paid-social-mobile.report.html) | 100 / 100 / 100 / 100 | 1.2 s | 0.001 |
| [/tjanster](/tmp/adorable-lighthouse-TPhJ4K/preview-tjanster-mobile.report.html) | 100 / 100 / 100 / 100 | 1.2 s | 0.001 |

Desktoprapporter: [svensk start](/tmp/adorable-lighthouse-TPhJ4K/final-home-desktop.report.html), [engelsk start](/tmp/adorable-lighthouse-TPhJ4K/final-en-desktop.report.html), [AI](/tmp/adorable-lighthouse-TPhJ4K/preview-ai-desktop.report.html). JSON-versioner ligger bredvid respektive HTML-rapport.

## Övriga kontroller

- Byggd webbplats: 30 offentliga HTML-sidor, 522 interna länkar/resurser, en H1 per sida, beskrivningar och giltig JSON-LD.
- SEO-regressionstest: 29 innehållssidor, 25 sitemap-adresser, 20 synkroniserade FAQ-svar, rätt logotyp per sidtyp, språkpar och crawlerregler.
- Motionstester: ändlig introduktion, pekarrespons som går till vila, ingen animering av layoutbredd, minskad rörelse, dold flik och innehåll utanför vyn. Befintliga tester av sidövergångar/fokus/formulär går också igenom.
- Webbläsare: startsida utan liten logotyp; undersida med logotyp; möteslänk öppnar formuläret; AI-länk förväljer AI; engelsk startsida har rätt språk och meny. Ingen horisontell overflow vid kontrollerade 320, 390 och 804 CSS-pixlar. Inga fel i den kontrollerade webbläsarloggen.
- Ingen verklig formulärförfrågan skickades. E-postleverans, fysisk mobil och OS-inställningar för minskad rörelse har inte testats i denna iteration.

Kör om efter bygg: npm run check:build, node scripts/test-seo.mjs, node scripts/test-motion.mjs, node scripts/test-site-motion.mjs och git diff --check.

## Gränser och nästa steg

Lighthouse är ett laboratorietest. En lokal förhandsvisning inkluderar inte Vercels nätverk, cache eller HTTP-omdirigeringar. Poängen kan variera mellan körningar; [Chrome beskriver varför mätresultaten varierar](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring). Mät produktion igen efter ett separat publiceringsgodkännande.

För Google AI-sök gäller samma grundkrav som vanlig sök: åtkomligt textinnehåll, interna länkar och strukturerad data som överensstämmer med innehållet. Varken särskild AI-schema eller llms.txt krävs. Det här stärker den tekniska grunden, men garanterar inte indexering, placering eller AI-citeringar. Se [Googles AI-vägledning](https://developers.google.com/search/docs/appearance/ai-features).

OpenAI skiljer sökroboten OAI-SearchBot från träningsroboten GPTBot; åtkomst för sök är bevarad utan att ändra befintliga träningsregler. Se [OpenAI om robotarna](https://developers.openai.com/api/docs/bots).

Efter godkänd publicering: verifiera Vercel READY, rätt domäner och www/snedstreck-omdirigeringar inklusive undersidor och frågeparametrar; mät produktion igen. Kontrollera därefter indexeringsstatus i Search Console/Bing Webmaster Tools. Ingen sådan kontoverifiering, indexeringsbegäran eller återkommande bevakning har utförts här.

De befintliga branschsidorna har tekniktestats, inte genomgått en ny källgranskning av samtliga kommersiella påståenden. Inga nya case, kundresultat, artiklar eller guider har skapats.
