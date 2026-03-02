# ⚙️ ZINALDO — Portfolio Web Developer & Designer

> Portfolio steampunk immersif — HTML · CSS · JavaScript pur, zéro framework, zéro dépendance.

![Preview](preview.webp)

---

## 📁 Structure du projet

```
zinaldo-portfolio/
├── index.html       → Structure HTML du portfolio
├── style.css        → Tous les styles, animations et responsive
├── main.js          → Interactions JavaScript (curseur, scroll, parallaxe)
├── preview.webp     → Logo / image hero du portfolio
└── README.md        → Ce fichier
```

---

## 🚀 Lancement rapide

Aucune installation requise. Il suffit d'ouvrir le fichier HTML dans un navigateur :

```bash
# Option 1 — Double-clic sur index.html

# Option 2 — Serveur local (recommandé pour éviter les restrictions CORS)
npx serve .
# ou
python -m http.server 8000
```

Puis ouvrir [http://localhost:8000](http://localhost:8000)

> ⚠️ **Important :** Placer `preview.webp` dans le même dossier que `index.html` pour que le logo s'affiche correctement.

---

## 🎨 Design & Fonctionnalités

### Palette de couleurs
| Variable        | Valeur    | Usage                     |
|-----------------|-----------|---------------------------|
| `--red`         | `#c0160e` | Accents, bordures          |
| `--red-bright`  | `#e8221a` | Hover, tags, highlights    |
| `--gold`        | `#c9922a` | Bordures, icônes           |
| `--gold-bright` | `#f0c050` | Titres, textes principaux  |
| `--cream`       | `#f5e8c8` | Texte courant              |
| `--black`       | `#050505` | Fond principal             |
| `--dark`        | `#0d0804` | Fond sections alternatives |

### Sections
| Section    | Description                                          |
|------------|------------------------------------------------------|
| **Hero**   | Logo animé flottant, stats, CTA                      |
| **Skills** | 6 cartes compétences avec barres de progression      |
| **Projects** | 6 projets avec overlay hover (Live Demo / GitHub)  |
| **Process** | 4 étapes de méthode de travail                      |
| **Contact** | Email cliquable + liens réseaux sociaux             |

### Effets JavaScript
- **Curseur personnalisé** — point doré + anneau rouge avec interpolation lerp
- **Scroll Reveal** — apparition progressive des éléments via `IntersectionObserver`
- **Parallaxe souris** — les engrenages de fond réagissent au mouvement
- **Nav active** — le lien de navigation se met en valeur selon la section visible
- **Barres de compétences** — animation déclenchée à l'entrée dans le viewport

---

## 🛠️ Personnalisation

### Modifier les informations personnelles

Dans `index.html`, rechercher et remplacer :

```html
<!-- Nom -->
<div class="nav-logo">ZIN<span>A</span>LDO</div>

<!-- Titre hero -->
<h1 class="hero-title">ZINALDO <span class="red-text">Portfolio</span></h1>

<!-- Description -->
<p class="hero-desc">Ingénieur du web & architecte visuel...</p>

<!-- Email de contact -->
<a href="mailto:contact@zinaldo.dev" class="contact-email">contact@zinaldo.dev</a>
```

### Modifier les statistiques hero

```html
<div class="stat-num">5<span>+</span></div>
<div class="stat-label">Années d'exp.</div>
```

### Modifier les compétences

Chaque carte suit ce modèle :

```html
<div class="skill-card reveal">
  <span class="skill-icon">🌐</span>
  <div class="skill-name">Frontend</div>
  <div class="skill-desc">Description...</div>
  <div class="skill-bar-wrap">
    <div class="skill-bar" data-pct="0.95"></div>  <!-- 0.0 à 1.0 -->
  </div>
  <div class="skill-pct">95%</div>
</div>
```

### Modifier les projets

```html
<div class="project-card reveal">
  <div class="project-thumb">
    <div class="project-thumb-bg" style="background:linear-gradient(...);">🛒</div>
    <div class="project-overlay">
      <button class="overlay-btn" onclick="window.open('URL_DEMO')">Live Demo</button>
      <button class="overlay-btn" onclick="window.open('URL_GITHUB')">GitHub</button>
    </div>
  </div>
  <div class="project-info">
    <div class="project-tags"><span class="tag">React</span></div>
    <div class="project-name">Nom du projet</div>
    <div class="project-desc">Description...</div>
  </div>
</div>
```

### Modifier les liens sociaux

Dans `index.html`, les liens sociaux ont `href="#"` par défaut. Remplacer par les vraies URLs :

```html
<a href="https://github.com/votre-username" class="social-btn" title="GitHub">
<a href="https://linkedin.com/in/votre-profil" class="social-btn" title="LinkedIn">
```

---

## 📐 Responsive

Le portfolio est adapté pour mobile via un breakpoint à `900px` :

- Navigation compactée
- Hero en colonne unique (le visuel skull est masqué)
- Grilles en colonne unique
- Timeline process sans ligne de connexion

---

## 🔧 Technologies utilisées

- **HTML5** — Structure sémantique
- **CSS3** — Variables CSS, Grid, Flexbox, `clip-path`, animations, `IntersectionObserver`
- **JavaScript ES6+** — Vanilla JS, `requestAnimationFrame`, `IntersectionObserver`
- **Google Fonts** — `Cinzel Decorative` (titres) + `Rajdhani` (corps)

---

## 📄 Licence

Projet personnel — © 2025 ZINALDO. Tous droits réservés.
