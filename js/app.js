/* ==============================
   THE PITCH - Football Website
   Main Application JavaScript
   ============================== */

// ============ SAMPLE DATA ============

const newsArticles = [
  {
    id: 1,
    title: "Arsenal Clinch Premier League Title with Stunning Victory at Tottenham",
    excerpt: "A dramatic late winner from Bukayo Saka seals Arsenal's first league title in years, sparking wild celebrations across North London.",
    category: "premier-league",
    tag: "Premier League",
    date: "Mar 24, 2026",
    readTime: "5 min read",
    author: "James Walker",
    gradient: "gradient-1",
    body: `<p>In one of the most dramatic finishes to a Premier League season, Arsenal clinched the title with a stunning 2-1 victory at fierce rivals Tottenham Hotspur. Bukayo Saka's curling effort in the 89th minute sent the away end into delirium and confirmed the Gunners as champions.</p>
    <h2>A Season of Resilience</h2>
    <p>Arsenal's journey to the title has been nothing short of remarkable. After falling short in previous campaigns, Mikel Arteta's side showed incredible mental fortitude, recovering from a mid-season dip to storm to the finish line.</p>
    <blockquote>"This is for every single person who believed in this project. We've been building something special, and today we proved it." — Mikel Arteta</blockquote>
    <p>The victory capped off a record-breaking run of 14 consecutive wins to end the season. Martin Ødegaard marshalled the midfield superbly all year, while William Saliba was a colossus at the back.</p>
    <h2>Saka's Moment of Magic</h2>
    <p>With the game poised at 1-1 and both teams pushing for a winner, Saka picked up the ball 25 yards out, cut inside onto his left foot, and unleashed a strike that curled into the far corner past a despairing goalkeeper. It was his 18th league goal of the season — a personal best.</p>
    <p>The North London derby has produced many iconic moments over the years, but few can match the significance of this one. As the final whistle blew, players collapsed to their knees in joy, fans streamed onto the concourse, and a new chapter in Arsenal's storied history was written.</p>`
  },
  {
    id: 2,
    title: "Barcelona Complete Stunning Comeback Against Bayern in UCL Semi-Final",
    excerpt: "Trailing 3-0 from the first leg, Barça produce the greatest Champions League comeback since their own 2017 miracle.",
    category: "champions-league",
    tag: "Champions League",
    date: "Mar 23, 2026",
    readTime: "6 min read",
    author: "Sofia Martinez",
    gradient: "gradient-2",
    body: `<p>Camp Nou witnessed history once again as Barcelona overturned a 3-0 first-leg deficit against Bayern Munich to reach the Champions League final. A hat-trick from Lamine Yamal and a stoppage-time header from Ronald Araujo sent the 98,000 crowd into a frenzy.</p>
    <h2>Yamal's Night of Destiny</h2>
    <p>At just 18 years old, Lamine Yamal delivered one of the greatest individual performances in Champions League history. His pace, trickery, and clinical finishing left Bayern's defence in tatters throughout the evening.</p>
    <blockquote>"I dreamed about this moment since I was a kid watching in the stands. Today was everything." — Lamine Yamal</blockquote>
    <p>Barcelona's success was built on a tactical masterclass from the coaching staff, deploying an aggressive high press that suffocated Bayern's build-up play from the first whistle.</p>`
  },
  {
    id: 3,
    title: "Napoli's Scudetto Defence in Tatters After Fifth Consecutive Defeat",
    excerpt: "The reigning Serie A champions slip to 8th place following another poor result, piling pressure on the manager.",
    category: "serie-a",
    tag: "Serie A",
    date: "Mar 22, 2026",
    readTime: "4 min read",
    author: "Marco Rossi",
    gradient: "gradient-3",
    body: `<p>Napoli's title defence has reached crisis point after a fifth consecutive Serie A defeat, a 2-0 loss at home to Atalanta that leaves them languishing in 8th place. The Stadio Diego Armando Maradona emptied well before the final whistle, a stark contrast to the euphoria of their title celebrations.</p>
    <p>Key player departures in the summer transfer window have taken their toll, with the squad lacking the depth and cohesion that characterised their title-winning campaign.</p>`
  },
  {
    id: 4,
    title: "Leverkusen Continue Unbeaten Run as Wirtz Hits 20-Goal Mark",
    excerpt: "Florian Wirtz reaches another milestone as Bayer Leverkusen extend their remarkable unbeaten record to 40 games.",
    category: "bundesliga",
    tag: "Bundesliga",
    date: "Mar 22, 2026",
    readTime: "4 min read",
    author: "Hans Schmidt",
    gradient: "gradient-4",
    body: `<p>Bayer Leverkusen's extraordinary unbeaten run shows no signs of ending. A 3-1 victory over RB Leipzig extended the streak to 40 Bundesliga matches, with Florian Wirtz netting twice to reach the 20-goal mark for the season.</p>
    <p>Wirtz has been in sensational form, drawing comparisons with some of the greatest players to grace the Bundesliga. At 22, he's the complete midfielder — creative, clinical, and capable of deciding games single-handedly.</p>`
  },
  {
    id: 5,
    title: "Real Madrid Announce Record-Breaking Kit Deal Worth €200M Per Year",
    excerpt: "Los Blancos set a new benchmark in football merchandising with the largest kit sponsorship in history.",
    category: "la-liga",
    tag: "La Liga",
    date: "Mar 21, 2026",
    readTime: "3 min read",
    author: "Carlos Vega",
    gradient: "gradient-5",
    body: `<p>Real Madrid have confirmed a new kit manufacturing deal that shatters all previous records in football. The partnership, reportedly worth €200 million per year, cements Los Blancos' position as the most commercially powerful club in the world.</p>
    <p>The deal reflects the club's unparalleled global reach, with a fanbase estimated at over 600 million people worldwide.</p>`
  },
  {
    id: 6,
    title: "England Squad Announced for World Cup Qualifiers — Surprise Inclusions",
    excerpt: "The manager names a 26-man squad with several new faces earning their first international call-ups.",
    category: "international",
    tag: "International",
    date: "Mar 20, 2026",
    readTime: "4 min read",
    author: "James Walker",
    gradient: "gradient-6",
    body: `<p>England's squad for the upcoming World Cup qualifiers has been announced, featuring several surprise inclusions that point to a fresh direction for the national team. Three uncapped players have earned their maiden call-ups following outstanding domestic form.</p>
    <p>The squad announcement has generated significant debate among fans and pundits, with some notable absentees raising eyebrows across the football community.</p>`
  },
  {
    id: 7,
    title: "Inter Milan Seal Serie A Title After Dominant Derby Victory",
    excerpt: "A commanding performance against AC Milan confirms Inter as champions with four games to spare.",
    category: "serie-a",
    tag: "Serie A",
    date: "Mar 19, 2026",
    readTime: "5 min read",
    author: "Marco Rossi",
    gradient: "gradient-1",
    body: `<p>Inter Milan have been crowned Serie A champions after a dominant 3-0 victory over city rivals AC Milan at the San Siro. Goals in each half put the result beyond doubt early, and the celebrations began well before the final whistle.</p>`
  },
  {
    id: 8,
    title: "Champions League Final Set: Barcelona vs Manchester City in Istanbul",
    excerpt: "The stage is set for a mouthwatering final as two footballing philosophies collide in Istanbul.",
    category: "champions-league",
    tag: "Champions League",
    date: "Mar 19, 2026",
    readTime: "5 min read",
    author: "Sofia Martinez",
    gradient: "gradient-2",
    body: `<p>The Champions League final is set. Barcelona's miraculous comeback against Bayern Munich and Manchester City's clinical dismantling of PSG have set up a dream final in Istanbul. Two clubs built on possession-based football will go head-to-head for Europe's greatest prize.</p>`
  },
  {
    id: 9,
    title: "Liverpool Complete Signing of Bundesliga's Top Scorer",
    excerpt: "A club-record deal brings one of Europe's most prolific strikers to Anfield ahead of next season.",
    category: "premier-league",
    tag: "Premier League",
    date: "Mar 18, 2026",
    readTime: "4 min read",
    author: "James Walker",
    gradient: "gradient-3",
    body: `<p>Liverpool have confirmed the signing of the Bundesliga's top scorer in a deal that breaks the club's transfer record. The striker, who has netted 28 goals this season, will join the Merseyside club at the start of next season.</p>`
  }
];

const transfers = [
  {
    id: 1,
    player: "Jude Bellingham",
    emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    from: "Real Madrid",
    to: "Manchester City",
    fee: "€150M",
    type: "rumour"
  },
  {
    id: 2,
    player: "Viktor Gyökeres",
    emoji: "🇸🇪",
    from: "Sporting CP",
    to: "Arsenal",
    fee: "€100M",
    type: "confirmed"
  },
  {
    id: 3,
    player: "Florian Wirtz",
    emoji: "🇩🇪",
    from: "Bayer Leverkusen",
    to: "Barcelona",
    fee: "€130M",
    type: "rumour"
  },
  {
    id: 4,
    player: "Khvicha Kvaratskhelia",
    emoji: "🇬🇪",
    from: "PSG",
    to: "Liverpool",
    fee: "€85M",
    type: "confirmed"
  },
  {
    id: 5,
    player: "Lamine Yamal",
    emoji: "🇪🇸",
    from: "Barcelona",
    to: "PSG",
    fee: "€200M",
    type: "rumour"
  },
  {
    id: 6,
    player: "Alexander Isak",
    emoji: "🇸🇪",
    from: "Newcastle United",
    to: "Real Madrid",
    fee: "€95M",
    type: "rumour"
  },
  {
    id: 7,
    player: "Jamal Musiala",
    emoji: "🇩🇪",
    from: "Bayern Munich",
    to: "Manchester City",
    fee: "€120M",
    type: "confirmed"
  },
  {
    id: 8,
    player: "Rasmus Højlund",
    emoji: "🇩🇰",
    from: "Manchester United",
    to: "AC Milan",
    fee: "€55M",
    type: "confirmed"
  },
  {
    id: 9,
    player: "Pedri",
    emoji: "🇪🇸",
    from: "Barcelona",
    to: "Bayern Munich",
    fee: "€90M",
    type: "rumour"
  },
  {
    id: 10,
    player: "Aurélien Tchouaméni",
    emoji: "🇫🇷",
    from: "Real Madrid",
    to: "Chelsea",
    fee: "€75M",
    type: "confirmed"
  }
];

const matches = [
  {
    id: 1,
    league: "Premier League",
    leagueFilter: "premier-league",
    homeTeam: "Arsenal",
    homeEmoji: "🔴",
    awayTeam: "Chelsea",
    awayEmoji: "🔵",
    homeScore: 2,
    awayScore: 1,
    status: "live",
    statusText: "72'",
    date: "Mar 25, 2026"
  },
  {
    id: 2,
    league: "La Liga",
    leagueFilter: "la-liga",
    homeTeam: "Barcelona",
    homeEmoji: "🔵🔴",
    awayTeam: "Real Madrid",
    awayEmoji: "⚪",
    homeScore: 0,
    awayScore: 0,
    status: "upcoming",
    statusText: "20:00",
    date: "Mar 26, 2026"
  },
  {
    id: 3,
    league: "Serie A",
    leagueFilter: "serie-a",
    homeTeam: "Inter Milan",
    homeEmoji: "⚫🔵",
    awayTeam: "Juventus",
    awayEmoji: "⚪⚫",
    homeScore: 3,
    awayScore: 0,
    status: "completed",
    statusText: "FT",
    date: "Mar 24, 2026"
  },
  {
    id: 4,
    league: "Champions League",
    leagueFilter: "champions-league",
    homeTeam: "Man City",
    homeEmoji: "🔵",
    awayTeam: "PSG",
    awayEmoji: "🔴🔵",
    homeScore: 4,
    awayScore: 2,
    status: "completed",
    statusText: "FT",
    date: "Mar 23, 2026"
  },
  {
    id: 5,
    league: "Bundesliga",
    leagueFilter: "bundesliga",
    homeTeam: "Bayern Munich",
    homeEmoji: "🔴",
    awayTeam: "Dortmund",
    awayEmoji: "🟡",
    homeScore: 1,
    awayScore: 1,
    status: "live",
    statusText: "55'",
    date: "Mar 25, 2026"
  },
  {
    id: 6,
    league: "Premier League",
    leagueFilter: "premier-league",
    homeTeam: "Liverpool",
    homeEmoji: "🔴",
    awayTeam: "Man United",
    awayEmoji: "🔴⚪",
    homeScore: 0,
    awayScore: 0,
    status: "upcoming",
    statusText: "17:30",
    date: "Mar 27, 2026"
  },
  {
    id: 7,
    league: "La Liga",
    leagueFilter: "la-liga",
    homeTeam: "Atletico Madrid",
    homeEmoji: "🔴⚪",
    awayTeam: "Sevilla",
    awayEmoji: "⚪🔴",
    homeScore: 2,
    awayScore: 2,
    status: "completed",
    statusText: "FT",
    date: "Mar 22, 2026"
  },
  {
    id: 8,
    league: "Champions League",
    leagueFilter: "champions-league",
    homeTeam: "Barcelona",
    homeEmoji: "🔵🔴",
    awayTeam: "Bayern Munich",
    awayEmoji: "🔴",
    homeScore: 4,
    awayScore: 0,
    status: "completed",
    statusText: "FT",
    date: "Mar 23, 2026"
  },
  {
    id: 9,
    league: "Serie A",
    leagueFilter: "serie-a",
    homeTeam: "AC Milan",
    homeEmoji: "🔴⚫",
    awayTeam: "Napoli",
    awayEmoji: "🔵",
    homeScore: 0,
    awayScore: 0,
    status: "upcoming",
    statusText: "21:00",
    date: "Mar 28, 2026"
  }
];

const tickerData = [
  { teams: "Arsenal 2-1 Chelsea", status: "LIVE", minute: "72'" },
  { teams: "Bayern 1-1 Dortmund", status: "LIVE", minute: "55'" },
  { teams: "Inter 3-0 Juventus", status: "FT", minute: "" },
  { teams: "Man City 4-2 PSG", status: "FT", minute: "" },
  { teams: "Barcelona vs Real Madrid", status: "20:00", minute: "" },
  { teams: "Liverpool vs Man United", status: "17:30", minute: "" },
];


// ============ UTILITY FUNCTIONS ============

function getCurrentPage() {
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';
  return page;
}

function createNewsCard(article) {
  return `
    <a href="article.html?id=${article.id}" class="card reveal">
      <div class="card-image ${article.gradient}">
        <span class="card-tag">${article.tag}</span>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span>${article.date}</span>
          <span class="dot"></span>
          <span>${article.readTime}</span>
        </div>
        <h3>${article.title}</h3>
        <p>${article.excerpt}</p>
      </div>
    </a>
  `;
}

function createMatchCard(match) {
  const statusClass = match.status === 'live' ? 'live' : 
                      match.status === 'completed' ? 'ft' : 'upcoming';
  return `
    <div class="match-card reveal" data-status="${match.status}" data-league="${match.leagueFilter}">
      <div class="match-card-header">
        <span class="league-name">${match.league}</span>
        <span>${match.date}</span>
      </div>
      <div class="match-teams">
        <div class="match-team">
          <div class="team-logo">${match.homeEmoji}</div>
          <span class="team-name">${match.homeTeam}</span>
        </div>
        <div class="match-score">
          <span class="score-display">${match.status === 'upcoming' ? 'vs' : match.homeScore + ' - ' + match.awayScore}</span>
          <span class="match-status ${statusClass}">${match.status === 'live' ? '🔴 ' + match.statusText : match.statusText}</span>
        </div>
        <div class="match-team">
          <div class="team-logo">${match.awayEmoji}</div>
          <span class="team-name">${match.awayTeam}</span>
        </div>
      </div>
    </div>
  `;
}

function createTransferCard(transfer) {
  return `
    <div class="transfer-card reveal" data-type="${transfer.type}">
      <div class="transfer-player-avatar">${transfer.emoji}</div>
      <div class="transfer-info">
        <div class="player-name">${transfer.player}</div>
        <div class="transfer-clubs">
          <span>${transfer.from}</span>
          <span class="arrow">→</span>
          <span>${transfer.to}</span>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
        <span class="transfer-fee">${transfer.fee}</span>
        <span class="transfer-type-badge ${transfer.type}">${transfer.type === 'confirmed' ? '✅ Confirmed' : '🔮 Rumour'}</span>
      </div>
    </div>
  `;
}


// ============ PAGE RENDERERS ============

function renderHomePage() {
  // Live Ticker
  const ticker = document.getElementById('ticker');
  if (ticker) {
    const tickerHTML = tickerData.map(item => `
      <div class="ticker-item">
        ${item.status === 'LIVE' ? '<span class="live-badge">LIVE</span>' : ''}
        <span class="score">${item.teams}</span>
        <span>${item.minute || item.status}</span>
      </div>
    `).join('');
    // Duplicate for seamless loop
    ticker.innerHTML = tickerHTML + tickerHTML;
  }

  // Featured Articles (first 3)
  const featuredGrid = document.getElementById('featuredGrid');
  if (featuredGrid) {
    featuredGrid.innerHTML = newsArticles.slice(0, 3).map(createNewsCard).join('');
  }

  // Home Transfers (first 4)
  const homeTransfers = document.getElementById('homeTransfers');
  if (homeTransfers) {
    homeTransfers.innerHTML = transfers.slice(0, 4).map(createTransferCard).join('');
  }

  // Home Matches (first 4)
  const homeMatches = document.getElementById('homeMatches');
  if (homeMatches) {
    homeMatches.innerHTML = matches.slice(0, 4).map(createMatchCard).join('');
  }
}

function renderNewsPage() {
  const newsGrid = document.getElementById('newsGrid');
  if (!newsGrid) return;

  newsGrid.innerHTML = newsArticles.map(createNewsCard).join('');

  // Category filtering
  const filterBtns = document.querySelectorAll('#newsFilters .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      const filtered = filter === 'all' 
        ? newsArticles 
        : newsArticles.filter(a => a.category === filter);
      
      newsGrid.innerHTML = filtered.map(createNewsCard).join('');
      initRevealAnimations();
    });
  });

  // Search
  const searchInput = document.getElementById('newsSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const filtered = newsArticles.filter(a => 
        a.title.toLowerCase().includes(query) || 
        a.excerpt.toLowerCase().includes(query) ||
        a.tag.toLowerCase().includes(query)
      );
      newsGrid.innerHTML = filtered.map(createNewsCard).join('');
      initRevealAnimations();
    });
  }
}

function renderTransfersPage() {
  const transferList = document.getElementById('transferList');
  if (!transferList) return;

  transferList.innerHTML = transfers.map(createTransferCard).join('');

  // Tab filtering
  const tabBtns = document.querySelectorAll('#transferTabs .tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      const filtered = filter === 'all'
        ? transfers
        : transfers.filter(t => t.type === filter);

      transferList.innerHTML = filtered.map(createTransferCard).join('');
      initRevealAnimations();
    });
  });
}

function renderMatchesPage() {
  const matchGrid = document.getElementById('matchGrid');
  if (!matchGrid) return;

  let currentStatusFilter = 'all';
  let currentLeagueFilter = 'all';

  function applyFilters() {
    let filtered = matches;
    
    if (currentStatusFilter !== 'all') {
      filtered = filtered.filter(m => m.status === currentStatusFilter);
    }
    if (currentLeagueFilter !== 'all') {
      filtered = filtered.filter(m => m.leagueFilter === currentLeagueFilter);
    }

    matchGrid.innerHTML = filtered.length > 0 
      ? filtered.map(createMatchCard).join('')
      : '<p style="color: var(--text-muted); text-align: center; padding: 40px; grid-column: 1 / -1;">No matches found for the selected filters.</p>';
    
    initRevealAnimations();
  }

  // Status tabs
  const tabBtns = document.querySelectorAll('#matchTabs .tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentStatusFilter = btn.dataset.filter;
      applyFilters();
    });
  });

  // League filters
  const leagueBtns = document.querySelectorAll('#leagueFilters .filter-btn');
  leagueBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      leagueBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLeagueFilter = btn.dataset.filter;
      applyFilters();
    });
  });

  applyFilters();
}

function renderArticlePage() {
  const articleContent = document.getElementById('articleContent');
  if (!articleContent) return;

  const params = new URLSearchParams(window.location.search);
  const articleId = parseInt(params.get('id'));
  const article = newsArticles.find(a => a.id === articleId);

  if (!article) {
    articleContent.innerHTML = `
      <div style="text-align: center; padding: 60px 0;">
        <h1 style="margin-bottom: 16px;">Article Not Found</h1>
        <p style="color: var(--text-secondary); margin-bottom: 24px;">The article you're looking for doesn't exist.</p>
        <a href="news.html" class="btn btn-primary">← Back to News</a>
      </div>
    `;
    return;
  }

  // Update page title
  document.title = `${article.title} — The Pitch`;
  document.querySelector('meta[name="description"]').content = article.excerpt;

  articleContent.innerHTML = `
    <div class="article-hero ${article.gradient}" style="aspect-ratio: 21/9; border-radius: var(--card-radius); margin-bottom: 32px; display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 4rem; opacity: 0.3;">⚽</span>
    </div>
    <div class="article-meta">
      <div class="author">
        <div class="author-avatar">✍️</div>
        <div class="meta-text">
          <strong>${article.author}</strong><br>
          ${article.date} · ${article.readTime}
        </div>
      </div>
      <span class="filter-btn active" style="cursor: default; font-size: 0.78rem;">${article.tag}</span>
    </div>
    <h1>${article.title}</h1>
    <div class="article-body">
      ${article.body}
    </div>
  `;

  // Related articles
  const relatedGrid = document.getElementById('relatedGrid');
  if (relatedGrid) {
    const related = newsArticles
      .filter(a => a.id !== article.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    relatedGrid.innerHTML = related.map(createNewsCard).join('');
  }
}


// ============ GLOBAL FEATURES ============

// Navbar scroll effect
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }
}

// Scroll reveal animations
function initRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal:not(.visible)');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 80);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}


// ============ INITIALIZATION ============

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();

  const page = getCurrentPage();

  switch (page) {
    case 'index.html':
    case '':
      renderHomePage();
      break;
    case 'news.html':
      renderNewsPage();
      break;
    case 'transfers.html':
      renderTransfersPage();
      break;
    case 'matches.html':
      renderMatchesPage();
      break;
    case 'article.html':
      renderArticlePage();
      break;
  }

  // Init scroll reveals after a short delay to ensure content is rendered
  setTimeout(() => initRevealAnimations(), 100);
});
