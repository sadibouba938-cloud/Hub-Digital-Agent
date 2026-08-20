# Hub Digital Agent

Un projet complet combinant **frontend Hub Digital Site** et **backend Railway** pour déployer un agent digital accessible en ligne.

---

## 🚀 Déploiement

### 1. Backend (Railway)
- Le backend est hébergé sur [Railway](https://railway.app).
- URL publique : `https://welcoming-miracle.up.railway.app`
- Variables d’environnement à configurer :
  - `DATABASE_URL`
  - `API_KEY`
  - autres selon ton projet

Chaque push sur `main` déclenche un déploiement automatique.

---

### 2. Frontend (Hub Digital Site)
- Framework : React (ou HTML/JS simple)
- Configuration API dans `src/config.js` :
```js
export const API_URL = "https://welcoming-miracle.up.railway.app";
