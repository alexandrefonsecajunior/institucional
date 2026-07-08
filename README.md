# AFJ Sistemas

Site institucional da **AFJ DESENVOLVIMENTO DE SISTEMAS LTDA**.

Domínio planejado: `https://afjsistemas.com.br`

## Desenvolvimento

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

O deploy é feito por GitHub Actions em `.github/workflows/deploy-pages.yml`.

Configuração esperada no GitHub:

1. Repository Settings > Pages.
2. Source: `GitHub Actions`.
3. Custom domain: `afjsistemas.com.br`.
4. DNS do domínio apontado para GitHub Pages.

O arquivo `public/CNAME` mantém o domínio customizado no artefato publicado.
