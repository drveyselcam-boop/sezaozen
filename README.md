# Prof. Dr. Seza Özen web sitesi

## GitHub'a yükleme

1. Repository ana sayfasında **Add file → Upload files** seçin.
2. Bu klasördeki `index.html`, `style.css` ve `script.js` dosyalarını yükleyin.
3. Mevcut `index.html` dosyasının üzerine yazılmasına izin verin.
4. Sayfanın altındaki **Commit changes** düğmesine basın.
5. GitHub Pages birkaç dakika içinde siteyi güncelleyecektir.

## Düzenlenecek alanlar

- `index.html` içindeki biyografi metni
- Çalışma alanları
- Seçilmiş yayınlar
- E-posta, adres ve harita bağlantısı
- Profesyonel fotoğraf

Fotoğraf eklemek için resmi `assets/seza-ozen.jpg` adıyla bu klasöre koyun ve
`index.html` içindeki `portrait-placeholder` bölümünü şu satırla değiştirin:

```html
<img class="portrait-image" src="assets/seza-ozen.jpg" alt="Prof. Dr. Seza Özen">
```

Ardından `style.css` dosyasının sonuna şunu ekleyin:

```css
.portrait-image {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
}
```
