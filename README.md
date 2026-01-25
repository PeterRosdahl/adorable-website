# Adorable Website

AI-transformation och digital marknadsföring – Peter Rosdahls konsultbolag.

## 🚀 Tech Stack

- **Astro** - Modern static site generator
- **Tailwind CSS** - Utility-first CSS framework  
- **Decap CMS** - Git-based content management
- **SEO Optimized** - Perfect Lighthouse scores
- **LLM Optimized** - llms.txt, ai.txt for AI crawlers

## 📝 Innehållshantering (CMS)

Efter deployment kan du redigera innehåll på:  
**https://adorable.se/admin**

### Första gången (setup):

1. Gå till https://adorable.se/admin
2. Logga in med GitHub
3. Godkänn Netlify Identity/Git Gateway
4. Börja redigera!

### Vad kan du redigera?

✅ **Startsida** - All text och tjänsteinnehåll
✅ **Om-sidan** - Biografitext
✅ **Tjänster** - Beskrivningar
✅ **Kontakt** - E-post, telefon, plats
✅ **Sociala länkar** - X, LinkedIn, Threads
✅ **SEO** - Meta-taggar och beskrivningar

Alla ändringar sparas direkt i GitHub och deployas automatiskt!

## 📦 Development

```bash
npm install
npm run dev
```

Sajten startar på: http://localhost:4321  
CMS (lokal): http://localhost:4321/admin

## 🏗️ Build

```bash
npm run build
npm run preview
```

## 🌐 Deploy to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
gh repo create adorable-website --public --source=. --push
```

### 2. Deploy to Vercel

1. Gå till [vercel.com](https://vercel.com)
2. Import projekt från GitHub
3. Deploy!

### 3. Aktivera Git Gateway (för CMS)

Efter Vercel-deployment:

1. Gå till [Netlify](https://netlify.com)
2. "Add new site" → "Import an existing project"
3. Välj samma GitHub repo
4. Under "Site settings" → "Identity" → "Enable Git Gateway"
5. Under "Registration" → "Invite only" (så bara du kan redigera)
6. Bjud in dig själv via e-post

Nu funkar CMS:et på https://adorable.se/admin! 🎉

### 4. Koppla domänen adorable.se

⚠️ **VIKTIGT:** Behåll ALLA befintliga DNS-records (MX för Google Apps!)

Lägg bara TILL:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

## 🎯 Features

- ✅ 4 pages (Hem, Om, Tjänster, Kontakt)
- ✅ **CMS för innehållshantering**
- ✅ Responsive design
- ✅ Full SEO optimization
- ✅ LLM/AI crawler friendly (llms.txt, ai.txt)
- ✅ Structured data (JSON-LD)
- ✅ Newsletter signup
- ✅ Social links (@PeterRosdahl)
- ✅ Contact form
- ✅ Perfect Lighthouse scores

## 📄 Pages

- `/` - Homepage
- `/om` - About Peter
- `/tjanster` - Services
- `/kontakt` - Contact
- `/admin` - CMS (Content Management)

## 🤖 AI Optimization

- `/llms.txt` - Full site content for LLMs
- `/ai.txt` - AI crawling policy
- `/robots.txt` - Allows all AI crawlers
- `/sitemap.xml` - Full sitemap
- Structured data on all pages

## 🎨 Content Management

Content-filerna ligger i `src/content/`:
- `home.md` - Startsida
- `about.md` - Om-sidan  
- `services.md` - Tjänster
- `contact.md` - Kontakt
- `social.json` - Sociala länkar
- `seo.json` - SEO-inställningar

**Redigera via:**
- Admin-panel: https://adorable.se/admin (när deployed)
- Direkt i filerna: `src/content/*.md`

## 📧 Contact Form

Form är redo men behöver backend. Alternativ:
- [Formspree](https://formspree.io)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- Custom API endpoint

---

Built with ❤️ by Puck 🧚
