# pkg-tool

pkg-tool zeigt die Abhängigkeiten zwischen npm Packages als interaktiven Graphen. Man wählt ein Package aus und pkg-tool visualisiert, welche anderen Packages davon abhängen.

Die meisten Tools dafür (zum Beispiel npm ls) geben nur Text im Terminal aus. Bei tiefen oder breiten Abhängigkeitsbäumen wird das schnell unübersichtlich. pkg-tool macht das Ganze stattdessen visuell und interaktiv nachvollziehbar.

## Aufbau

Monorepo mit zwei Apps.

* `apps/api` enthält das Backend, gebaut mit [NestJS](https://nestjs.com)
* `web` enthält das Frontend, gebaut mit [Next.js](https://nextjs.org)

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
- Änderungen per Pull Request nach `main` mergen.
- Merge-Strategie: **Squash merge** — alle Commits eines PRs werden zu einem Commit zusammengefasst, für eine saubere, lineare `main`-Historie.
- Branch nach dem Merge löschen (GitHub macht das automatisch).

**Branch-Namen:** `<type>/<kurzbeschreibung-in-kebab-case>`, gleiche Types wie bei Commits (siehe unten). Beispiel: `feat/add-login`, `docs/add-readme`.

**PR-Titel:** gleiches Format wie Commit Messages (`<type>: <kurzbeschreibung>`) — da Squash-Merge den PR-Titel standardmäßig als finalen Commit-Message-Titel auf `main` übernimmt. Beispiel: `feat: add package list endpoint`.

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
