# Innehållsrutin för adorable.se

Syftet är att hålla sajten aktuell utan att skapa konstgjorda publiceringsdatum eller generiska artiklar.

## Varje månad

- Kontrollera kontaktformuläret och att bekräftelsen visas efter lyckad sändning.
- Kontrollera startsida, tjänster och Om-sida mot aktuellt erbjudande, team och kontaktvägar.
- Kör `npm run content:audit` och hantera nya blockerande fel.
- Kontrollera brutna interna och externa länkar i den byggda sajten.
- Kör `npm run check:build` efter bygget för interna länkar, resurser, huvudrubriker och metadata.
- Kontrollera språkväxling, möteslänkar och de två lägena i kontaktformuläret på mobil och dator.
- Kontrollera ordmärkets rörelse, pausknappen och inställningen för reducerad rörelse.

## Sökuppföljning efter den nya versionen

- Efter godkänd publicering: verifiera att produktionen är READY, öppna de nya sidorna och kontrollera att sitemap innehåller 34 indexerbara adresser. Antalet är 25 befintliga plus nio nya, inte ett påstående om Googles index.
- Search Console är redan verifierat för `https://adorable.se/`. Både `/sitemap-index.xml` och `/sitemap-0.xml` skickades in 7 september 2026 och visade Lyckades. Skapa inte en ny egendom eller ytterligare verifiering utan behov.
- Kontrollera efter publicering att Google har läst den uppdaterade sitemapen. Inspektera prioriterade sidor som `/google-ads`, `/meta-annonsering` och `/ai-workshop`. Begär indexering där det behövs; upprepade begäranden garanterar inte snabbare indexering.
- Följ upp efter två veckor: vilka nya adresser har upptäckts, indexerats eller fått en konkret uteslutningsorsak? Inspektera Google-vald canonical och senast genomsökta version innan kod ändras.
- Följ upp efter fyra och åtta veckor: visningar, klick, CTR och sökfrågor per tjänstesida. Jämför likvärdiga perioder och skilj varumärkessökningar från tjänstesökningar. Små datamängder ska inte övervärderas.
- Gruppera tjänstesökningar: Meta/Facebook/Instagram, LinkedIn, TikTok, YouTube, Snapchat, Pinterest, Google Ads/sökannonsering, AI-rådgivning, AI-workshop/utbildning och AI-automatisering. Stavningsvarianter hör till samma grupp, inte nya dubblettsidor.
- Utvärdera kontaktklick och bekräftade mötesförfrågningar tillsammans med söktrafiken. Umami behålls men begränsas till adorable.se och www.adorable.se så att framtida previewbesök inte blandas med produktionsstatistiken. Kopplingen mellan en enskild sökfråga och en affär ska inte antas finnas.
- Uppdatera en sida när data eller kundfrågor visar ett tydligt behov. Lägg till ett verkligt, godkänt exempel med problem, Peters insats och verifierat utfall när det finns. Starta inte om blogg eller guider för att skapa aktivitet.
- Gamla artikel- och ordlisteadresser ligger kvar som 404 när ingen relevant ersättare finns. De ska inte återföras till sitemap eller massomdirigeras till startsidan. Att en borttagen adress fortfarande finns i en äldre Google-rapport betyder inte att den ska återpubliceras.

Denna rutin är dokumenterad, inte en aktiverad automation. Publicering och framtida uppföljningar kräver sina vanliga godkännanden.

## Mötesförfrågan och Google Kalender

- Nuvarande flöde skickar en mötesförfrågan via det befintliga Web3Forms-kontot. Det bokar inte automatiskt en tid och skapar inget kalender-event.
- Namn och e-post krävs. Intresse, tidsförslag och meddelande är valfria. Kunden får tydlig information om att tiden måste bekräftas.
- Skapa en publik bokningssida i Google Kalender när direktbokning ska aktiveras. Använd inte en privat kalenderlänk.
- Lägg den publika länken i `PUBLIC_BOOKING_URL` i Vercel och bygg en ny preview. Tillåtna värdar är `calendar.google.com` och `calendar.app.google` via HTTPS.
- När en giltig länk finns visas en knapp till Google Kalender över formuläret. Besökaren kan fortfarande skicka en fråga.
- Verifiera bokningssidan utloggad och på mobil före publicering. Uppdatera integritetspolicyn för kalenderflödet då.
- Ett verkligt testmeddelande ska följas hela vägen till inkorgen. Webbläsarvalidering och ett godkänt bygge bevisar inte e-postleverans.

## Varje kvartal

- Stäm av tjänster, verktyg och arbetssätt med Peter. Ändra bara sådant som faktiskt har förändrats.
- Håll erfarenhet, kontaktuppgifter, villkor och integritetspolicy aktuella.
- Inga nya artiklar, guider, insiktsflöden eller ordlistor. Dessa togs bort enligt Peters beslut 2026-09-04.
- Eventuella framtida kundexempel måste vara verkliga, godkända för publicering och tillföra konkret bevis för arbetet.
- Uppdatera metadata och sitemap när huvudinnehållet faktiskt förändras, inte för att skapa artificiell aktivitet.

## Publiceringskontroll

1. Erbjudandet är lätt att förstå och kontaktvägen är tydlig.
2. Inga onödiga mellanrubriker, slagord eller utfyllnad.
3. Vitt, svart och accentblått. Inget beige eller rött.
4. Sakuppgifter är kontrollerade med Peter; tidskänsliga påståenden har aktuella primärkällor.
5. Inga publika priser eller generella minsta annonsbudgetar presenteras som Adorables villkor.
6. Interna länkar leder till relevant tjänst eller kontakt. Borttagna artiklar och guider ska inte byggas eller länkas.
7. `npm run build` är godkänd före preview eller publicering.
8. Kör `npm run check:build`, `node scripts/test-seo.mjs`, `node scripts/test-contact.mjs`, `node scripts/test-motion.mjs` och `node scripts/test-site-motion.mjs`. Formulärtestet använder simulerade svar och skickar inget mejl.

## Ansvar

Peter äger sakfrågor, erbjudande och publiceringsbeslut. Den som gör en teknisk uppdatering ansvarar för build, länk- och metadata-kontroll. Produktion publiceras först efter godkänd preview.
