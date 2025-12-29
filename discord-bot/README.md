# Discord Bot - IPJ Los Santos

Bot Discord pentru gestionarea panel-ului și autentificării admin pentru site-ul IPJ Los Santos.

## Setup

1. Instalează dependencies:
```bash
cd discord-bot
npm install
```

2. Creează fișier `.env` (opțional, token-ul este deja în config.js):
```env
BOT_TOKEN=your_bot_token_here
SITE_URL=http://localhost:3000
```

3. Pornește bot-ul:
```bash
npm start
```

## Funcționalități

### Comandă `/panel`
Trimite panel-ul cu butoane în canalul configurat.

### Butoane Panel

1. **Setează** - Setează gradul și numele (one-time use)
   - Modal cu input pentru grad și nume
   - Validare grad (trebuie să fie din lista de grade disponibile)
   - Salvare în `data/discord-users.json`

2. **Accesează Panel Admin** - Generează link pentru accesare admin
   - Verifică dacă utilizatorul are role ID `1179052940351246357`
   - Generează token temporar (expiră în 15 minute)
   - Trimite link în mesaj privat

3. **Actualizează Grad** - Actualizează doar gradul
   - Modal cu input pentru grad nou
   - Păstrează numele existent

## Configurare

- **Bot Token:** Configurat în `config.js`
- **Server ID:** 1162871509275119637
- **Channel ID:** 1455043025817440306
- **Admin Role ID:** 1179052940351246357

## Grade Disponibile

- AGENT
- AGENT-PRINCIPAL
- AGENT-SEF-ADJUNCT
- AGENT-SEF-PRINCIPAL
- INSPECTOR
- INSPECTOR-PRINCIPAL
- SUB-COMISAR
- COMISAR
- COMISAR-SEF

## Fișiere de Date

- `data/discord-users.json` - Stocare utilizatori (grad, nume)
- `data/discord-tokens.json` - Stocare token-uri temporare pentru autentificare

## Note

- Bot-ul trebuie să ruleze separat de Next.js
- Token-urile expiră în 15 minute
- Verificarea role-ului se face la fiecare accesare admin

