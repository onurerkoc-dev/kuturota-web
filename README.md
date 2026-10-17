# KutuRota

KutuRota, evden eve nakliyat, ofis taşımacılığı ve şehirler arası taşımacılık hizmetleri sunan kurgusal bir nakliyat firmasının portfolyo demosudur. Projenin amacı hizmetleri tanıtmak ve ziyaretçileri teklif almaya yönlendirmektir.

## Teknolojiler

- Next.js 16.4.2 ve React 19
- TypeScript
- Tailwind CSS 4

## Yerel geliştirme

Bağımlılıkları yükleyip geliştirme sunucusunu başlatın:

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

## Mevcut aşama

Ana sayfa, üç hizmet detay sayfası, Hakkımızda ve Teklif Al sayfası tamamlanmıştır. Ortak Header/Footer, mobil navigasyon, yerel WebP görseller ve klavye erişilebilirliği mevcuttur. Marka renkleri `src/app/globals.css` içinde tanımlıdır.

Teklif formu bir arayüz demosudur; gerçek gönderim bilinçli olarak devre dışıdır.

## Cloudflare Pages deployment

Proje Next.js Static Export ile yayınlanır. Cloudflare Pages GitHub kurulumunda şu ayarları kullanın:

| Ayar | Değer |
| --- | --- |
| Framework | Next.js Static HTML Export |
| Build command | `npm run build` |
| Output directory | `out` |
| Production branch | `main` |

`npm run build`, altı sayfanın HTML çıktısını ve CSS, JavaScript, font, ikon ve görsellerini `out/` klasörüne üretir. Cloudflare Pages bu dosyaları Next.js sunucusu olmadan sunar ve projeye ücretsiz bir `pages.dev` adresi verir. [Cloudflare kurulum rehberi](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)

Yerel WebP görseller önceden optimize edildiği için `images.unoptimized: true` kullanılır; çalışma zamanında `/_next/image` servisine ihtiyaç duyulmaz. Bu modda Next.js farklı ekran boyutları için yeni görsel dosyaları üretmez.

`out/` build çıktısıdır ve Git'e eklenmez. GitHub entegrasyonunda Cloudflare bu klasörü build sırasında oluşturur. `npm run start`, static export önizlemesi için kullanılmaz; `out/` bir statik dosya sunucusuyla görüntülenmelidir.

Windows notu: Next.js 16.4.2'nin export işleminde bazı segment ön getirme `.txt` dosyaları, Windows yol ayraçları nedeniyle tarayıcının beklediği dosya adlarıyla eşleşmeyebilir. Yerel statik önizlemede bu dosyalar için 404 görülebilir. Yayın için Windows'ta üretilen `out/` klasörünü doğrudan yüklemek yerine Cloudflare Pages GitHub entegrasyonunun Linux ortamında yeniden oluşturduğu çıktıyı kullanın.
