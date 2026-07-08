# 📸 Screenshots dos Projetos

Esta pasta contém os screenshots dos projetos do portfólio. Os arquivos esperados são:

- `da-elite-express.jpg` - Screenshot do site Da Elite Express
- `eg-pisos-epoxi.jpg` - Screenshot do site EG Pisos Epoxi
- `athly.jpg` - Screenshot do site Athly
- `eng-glass.jpg` - Screenshot do site Eng Glass
- `fontec.jpg` - Screenshot do site Fontec Elétricas

## Como obter screenshots de qualidade

### 1. **ScreenshotOne API** (Recomendado)

- Site: https://screenshot-one.com
- Gratuito até 100 screenshots/mês
- Formato de card automático
- Exemplo de uso:

```
https://api.screenshot-one.com/take?access_key=YOUR_KEY&url=https://www.daeliteexpress.com.br/&viewport_width=1200&viewport_height=800&device_scale_factor=1&format=jpg&image_quality=75&block_ads=true&block_cookie_banners=true
```

### 2. **Website Screenshot API**

- Site: https://screenshotapi.net
- Diferentes planos disponíveis
- Alta qualidade e personalização

### 3. **Full Page Screen Capture** (Extensão Chrome)

- Extensão gratuita do Chrome
- Captura a página completa
- Boa para screenshots manuais

### 4. **Puppeteer** (Programático)

```javascript
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800 });
  await page.goto("https://www.daeliteexpress.com.br/");
  await page.screenshot({ path: "da-elite-express.jpg", type: "jpeg", quality: 75 });
  await browser.close();
})();
```

### 5. **Browser DevTools**

1. Abra o site no Chrome
2. F12 para abrir DevTools
3. Ctrl+Shift+P (Cmd+Shift+P no Mac)
4. Digite "screenshot"
5. Escolha "Capture full size screenshot"

## Especificações Recomendadas

- **Resolução**: 1200px de largura máxima
- **Formato**: JPG com qualidade entre 70 e 80
- **Aspecto**: Formato "card" (mais alto que largo)
- **Peso alvo**: até 200 KB por screenshot

## Dicas para melhores screenshots

1. **Remover cookies/popups**: Use ferramentas que bloqueiam banners
2. **Aguardar carregamento**: Certifique-se que a página carregou completamente
3. **Dispositivos móveis**: Considere criar versões mobile também
4. **Otimização**: Comprima as imagens para web (WebP se possível)

## Fallback

Se não houver screenshots, o carousel mostrará um placeholder elegante com informações do projeto.
