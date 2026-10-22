# Mobilya

Mobilya projesi, frontend ve backend parçalarından oluşacak bir web uygulamasıdır. Frontend TypeScript ile geliştirilir. Bu depo şu anda frontend başlangıç iskeletini ve yayın otomasyonunu içerir; backend klasörü henüz boştur.

## Proje akışı

1. Kullanıcı tarayıcıdan frontend'i açar.
2. Frontend, ürün ve diğer uygulama verilerini gerektiğinde backend API'sinden ister.
3. Backend istekleri işler ve veritabanı gibi kalıcı depolama bileşenleriyle iletişim kurar.
4. Backend yanıtı frontend'e döner; arayüz veriyi kullanıcıya gösterir.
5. Üretimde statik frontend GitHub Pages üzerinde yayınlanır. Backend ayrı bir sunucu/servis üzerinde barındırılmalı ve frontend'e erişilebilir bir API adresi sağlanmalıdır.

Şu an 2-4. adımlar için uygulama kodu henüz eklenmemiştir.

## Yerel geliştirme

Gereksinim: Node.js 22 veya uyumlu güncel bir LTS sürümü ve npm.

```bash
npm install
npm run dev
```

Kontroller ve üretim derlemesi:

```bash
npm run typecheck
npm run build
npm run preview
```

Frontend kaynakları, komutlar ve yapılan başlangıç işlemleri için [frontend/README.md](frontend/README.md) dosyasına bakın.

## GitHub Pages yayını

`.github/workflows/deploy.yml` iş akışı `main` dalına gönderim yapıldığında veya GitHub Actions üzerinden elle başlatıldığında frontend'i derleyip Pages'e yükler.

İlk yayın öncesinde GitHub deposunda **Settings > Pages > Build and deployment > Source** alanını **GitHub Actions** olarak seçin. Yayın tamamlandığında sayfa `https://<kullanıcı>.github.io/<depo>/` adresinde açılır.

GitHub Pages yalnızca statik frontend dosyalarını sunar; backend'i veya veritabanını çalıştırmaz. Backend yayınlanınca API CORS izinleri ve frontend'in API adresi ayrıca yapılandırılmalıdır.
