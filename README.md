# Emanate — szkic strony statycznej (React + TypeScript)

To jest szkic projektu statycznej strony w React + TypeScript. Konfiguracja jest przygotowana tak, żeby można było użyć Bun do instalacji zależności i uruchamiania lokalnego środowiska deweloperskiego.

Szybkie komendy

```bash
# zainstaluj zależności za pomocą Bun
bun install

# uruchom tryb deweloperski (Vite)
bun run dev

# zbuduj produkcyjnie do katalogu dist
bun run build

# podgląd po zbudowaniu
bun run preview
```

Uwaga: Bun jest zgodny z uruchamianiem skryptów z `package.json`, więc można też użyć `npm`/`pnpm` jeśli wolisz.

Deploy na GitHub Pages

W repo jest przykładowy workflow GitHub Actions (.github/workflows/deploy.yml), który używa `oven-sh/setup-bun` do zainstalowania Bun, buduje projekt i publikuje katalog `dist` na gałęzi `gh-pages`.

Co dalej

- Rozszerz `src/App.tsx` i dodaj komponenty.
- Dodaj style, assets w katalogu `public/` lub importuj je w `src/`.
- Dostosuj workflow CI jeśli chcesz inny sposób publikacji.
