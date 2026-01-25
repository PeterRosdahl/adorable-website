# Deployment Guide - Adorable Website

## ✅ Ändringar gjorda:

1. ✅ Tog bort kontaktformulär (bara länkar kvar)
2. ✅ Tog bort nyhetsbrev-signup
3. ✅ Lade till Substack-länk i footer
4. ✅ Umami analytics förberedd (behöver website ID)

## 🚀 Steg-för-steg deployment:

### 1. Deploy till Vercel

1. Gå till https://vercel.com
2. Klicka "Add New" → "Project"
3. Import från GitHub: `PeterRosdahl/adorable-website`
4. Deploy! (tar ~1 min)

**Du får en URL typ:** `adorable-website.vercel.app`

---

### 2. Lägg till Umami Analytics

1. Gå till https://cloud.umami.is
2. Logga in
3. Settings → Websites → "Add website"
4. Namn: "Adorable"
5. Domain: "adorable.se"
6. Kopiera **Website ID** (typ `123abc-456def-...`)

7. Öppna projektet i Vercel:
   - Settings → Environment Variables
   - Lägg till: `UMAMI_WEBSITE_ID` = `[ditt website ID]`
   - Redeploy projektet

**ELLER** uppdatera manuellt i GitHub:
- Redigera `src/layouts/BaseLayout.astro`
- Byt `REPLACE_WITH_UMAMI_WEBSITE_ID` mot ditt riktiga ID
- Commit & push

---

### 3. Peka om domänen adorable.se

⚠️ **VIKTIGT:** Behåll alla MX-records för Google Apps!

#### I Loopia:

1. Logga in på https://customerzone.loopia.se
2. Välj domän: **adorable.se**
3. DNS-hantering

**Lägg TILL (behåll befintliga MX-records!):**

```
Type: A
Name: @
TTL: 3600
Data: 76.76.21.21
```

```
Type: CNAME
Name: www
TTL: 3600
Data: cname.vercel-dns.com
```

4. Spara ändringar

#### I Vercel:

1. Projektet → Settings → Domains
2. Lägg till domän: `adorable.se`
3. Lägg till: `www.adorable.se`
4. Vercel guidar dig (kanske redan klart om DNS är uppdaterat!)

**DNS propagering:** Kan ta 5 min - 24h (oftast <1h)

---

### 4. Aktivera CMS (valfritt)

Om du vill redigera innehåll via `/admin`:

1. Gå till https://netlify.com
2. "Add new site" → Import från GitHub
3. Välj `adorable-website`
4. Deploy (bara för Git Gateway, inte hosten sajten)
5. Site settings → Identity → Enable Git Gateway
6. Bjud in dig själv: peter@adorable.se

Nu funkar https://adorable.se/admin för innehållshantering! 🎨

---

### 5. Testa allt

- ✅ https://adorable.se laddas
- ✅ Ingen 404 på undersidor
- ✅ Kontaktlänkar (email/telefon) funkar
- ✅ Substack-länk i footer funkar
- ✅ Sociala länkar funkar
- ✅ Umami tracking syns i Umami dashboard

---

## 🔧 Felsökning

**DNS funkar inte:**
- Vänta 1-24h
- Kolla `nslookup adorable.se` i terminal

**Vercel deployment failar:**
- Check build logs i Vercel dashboard
- Kontakta mig!

**CMS funkar inte:**
- Säkerställ Git Gateway är aktiverat i Netlify
- Kolla att du bjöd in rätt e-post

---

## 📞 Behöver hjälp?

Ping Puck! 🧚
