# pkg-tool

Monorepo mit zwei Apps:

- `apps/api` — Backend ([NestJS](https://nestjs.com))
- `web` — Frontend ([Next.js](https://nextjs.org))

## Getting Started

```bash
# Backend
cd apps/api && npm install && npm run start:dev

# Frontend
cd web && npm install && npm run dev
```

## Contributing

### Branches & Pull Requests

- Kein direkter Push auf `main` für Feature-/Fix-Arbeit.
- Neuer Branch pro Änderung: `feature/<kurzbeschreibung>` bzw. `fix/<kurzbeschreibung>`.
- Änderungen per Pull Request nach `main` mergen.

### Commit Messages

Wir folgen [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <kurze Beschreibung im Imperativ>
```

Gängige Types:

| Type | Bedeutung |
|---|---|
| `feat` | Neue Funktionalität |
| `fix` | Bugfix |
| `chore` | Wartungsarbeiten, Tooling, Config |
| `refactor` | Code-Umbau ohne Verhaltensänderung |
| `docs` | Dokumentation |
| `test` | Tests hinzufügen/anpassen |

Beispiel: `feat: add package list endpoint`
