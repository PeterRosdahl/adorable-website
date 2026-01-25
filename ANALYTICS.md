# Analytics Setup

## Umami Cloud

Webbplatsen använder Umami Cloud för privacy-first analytics (inga cookies, GDPR-compliant).

### Setup (behöver göras av Peter):

1. Gå till [Umami Cloud](https://cloud.umami.is)
2. Logga in
3. Lägg till ny website:
   - Name: Adorable
   - Domain: adorable.se
4. Kopiera Website ID
5. Uppdatera i `src/layouts/Layout.astro`:
   - Byt ut `UMAMI_WEBSITE_ID_PLACEHOLDER` med det riktiga Website ID:t

### Spara Website ID lokalt:

```bash
echo "ADORABLE_UMAMI_WEBSITE_ID=ditt-website-id" >> ~/.env.umami
```

### Se statistik:

När Website ID är konfigurerat kan du se stats via:
- Umami Cloud dashboard
- Skill: `python3 ~/clawd/skills/umami/umami.py stats 7d`

## Alternativ: Google Analytics

Om du vill använda Google Analytics istället, lägg till tracking code i `src/layouts/Layout.astro`.

**Rekommendation:** Använd Umami - privacy-first, inga cookies, GDPR-compliant, snabbare.
