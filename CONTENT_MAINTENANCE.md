# Innehållsrutin för adorable.se

Syftet är att hålla sajten aktuell utan att skapa konstgjorda publiceringsdatum eller generiska artiklar.

## Varje månad

- Kontrollera kontaktformuläret och att bekräftelsen visas efter lyckad sändning.
- Kontrollera startsida, tjänster och Om-sida mot aktuellt erbjudande, team och kontaktvägar.
- Kör `npm run content:audit` och hantera nya blockerande fel.
- Kontrollera brutna interna och externa länkar i den byggda sajten.

## Varje kvartal

- Faktagranska artiklar som innehåller produktnamn, plattformsregler, lagstiftning, priser eller numeriska tumregler.
- Prioritera verkliga kundfrågor, nya arbetssätt och egna observationer framför breda sammanfattningar.
- Lägg till primärkällor nära tidskänsliga påståenden.
- Sätt `dateModified` endast när artikelns huvudinnehåll faktiskt har granskats eller ändrats.
- Uppdatera artikelns synliga datum, strukturerade data och sitemap samtidigt.

## Publiceringskontroll

1. En tydlig fråga och ett användbart svar.
2. Peter Rosdahl anges som författare.
3. Publiceringsdatum finns; uppdateringsdatum används bara efter verklig granskning.
4. Tidskänsliga påståenden stöds av aktuella primärkällor.
5. Inga publika priser eller generella minsta annonsbudgetar presenteras som Adorables villkor.
6. Interna länkar leder vidare till relevant tjänst, artikel eller kontakt.
7. `npm run build` är godkänd före preview eller publicering.

## Ansvar

Peter äger sakfrågor, erbjudande och publiceringsbeslut. Den som gör en teknisk uppdatering ansvarar för build, länk- och metadata-kontroll. Produktion publiceras först efter godkänd preview.
