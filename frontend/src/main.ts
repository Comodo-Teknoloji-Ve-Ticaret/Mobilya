import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Uygulama kapsayıcısı bulunamadı.");
}

app.innerHTML = `
  <main class="welcome">
    <p class="eyebrow">MOBİLYA / WEB</p>
    <h1>Mobilya projesi</h1>
    <p class="intro">TypeScript arayüzü hazır. Uygulama geliştirmesi bu başlangıç noktasından ilerleyecek.</p>
    <div class="status" role="status">
      <span class="status-indicator" aria-hidden="true"></span>
      <span>Arayüz çalışıyor</span>
    </div>
  </main>
`;
