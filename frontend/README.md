# Frontend

Bu klasör, Mobilya projesinin tarayıcıda çalışan arayüzünü içerir. Arayüz TypeScript ve Vite ile hazırlanmıştır; şu an temel başlangıç ekranı bulunmaktadır.

## Gereksinimler

- Node.js 22 veya uyumlu güncel bir LTS sürümü
- npm

## Geliştirme

Proje kök dizininde:

```bash
npm install
npm run dev
```

TypeScript kontrolü ve üretim derlemesi:

```bash
npm run typecheck
npm run build
npm run preview
```

## Dosyalar

- `index.html`: Uygulama HTML kabuğu
- `src/main.ts`: TypeScript giriş dosyası
- `src/style.css`: Başlangıç ekranının stilleri
- `../tsconfig.json`: Katı TypeScript derleyici ayarları

## Yapılan başlangıç işlemleri

- Vite tabanlı, framework bağımsız TypeScript frontend oluşturuldu.
- `typecheck`, `build`, `dev` ve `preview` npm komutları eklendi.
- TypeScript katı kontrolleri üretim derlemesine bağlandı.
- GitHub Pages için derleme taban yolu kök dizindeki GitHub Actions iş akışında ayarlanır.

Arayüz kaynaklarının tamamı bu klasörde tutulur. API/backend bağlantısı eklendiğinde adresler ortama göre yapılandırılmalıdır; GitHub Pages backend sunucusu çalıştırmaz.
