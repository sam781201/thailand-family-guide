function mapLink(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function renderDays() {
  const root = document.getElementById('itinerary');
  root.innerHTML = days.map((d, idx) => `
    <article class="day-card" id="${d.id}">
      <div class="day-card__head">
        <div>
          <span class="date-chip">${d.date}</span>
          <h2>${d.title}</h2>
        </div>
        <span class="day-num">DAY ${idx + 1}</span>
      </div>
      <div class="meta-grid">
        <div><span>住宿</span><strong>${d.stay}</strong></div>
        <div><span>主軸</span><strong>${d.vibe}</strong></div>
        <div><span>交通</span><strong>${d.transport}</strong></div>
      </div>
      <div class="content-grid">
        <section class="mini-panel">
          <h3>今日時間表</h3>
          <ol>${d.route.map(x => `<li>${x}</li>`).join('')}</ol>
        </section>
        <section class="mini-panel accent">
          <h3>現場重點</h3>
          <ul>${d.highlights.map(x => `<li>${x}</li>`).join('')}</ul>
        </section>
      </div>
      <div class="note-row">
        <div class="note"><b>🧒 親子提醒</b><p>${d.kid}</p></div>
        <div class="note"><b>🌧 備案</b><p>${d.backup}</p></div>
        <div class="note"><b>💰 預算</b><p>${d.budget}</p></div>
      </div>
      <details class="tools">
        <summary>打開常用地圖搜尋</summary>
        <div class="map-links">
          ${d.highlights.slice(0,4).map(h => {
            const clean = h.replace(/方案 [ABC]：/g, '').split('：')[0].split('｜')[0].split('➜')[0].trim();
            return `<a target="_blank" rel="noreferrer" href="${mapLink(clean + ' Thailand')}">${clean}</a>`;
          }).join('')}
        </div>
      </details>
    </article>
  `).join('');
}

function renderSpa() {
  document.getElementById('spaGrid').innerHTML = spas.map(s => `
    <article class="info-card">
      <h3>${s.area}</h3>
      <ul>${s.items.map(i => `<li>${i}</li>`).join('')}</ul>
    </article>
  `).join('');
}

function renderExtras() {
  document.getElementById('extraGrid').innerHTML = extras.map(e => `
    <article class="info-card soft">
      <h3>${e.title}</h3>
      <p>${e.text}</p>
    </article>
  `).join('');
}

renderDays();
renderSpa();
renderExtras();
