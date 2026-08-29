const agroKnowledgeBase = {
  basmati: {
    id: "basmati",
    name: "Basmati Rice (Pusa 1121)",
    category: "Cereal",
    duration: "125 - 135 Days",
    sowingWindow: "July 01 - July 25",
    sellingWindow: "Late Nov (Peak Mandi Premium)",
    bestSeedBuyTime: "Aug 15 - Aug 30",
    bestCultivateTime: "Early July (Puddling & Transplanting)",
    fertilizer: "NPK 120:60:40 kg/ha + 25 kg Zinc Sulphate",
    chartLabels: ['Jun', 'Jul', 'Aug (Current)', 'Sep (Forecast)', 'Oct (Harvest)', 'Nov (Peak Mandi)'],
    mandiSellPrices: [3400, 3550, 3850, 3950, 4100, 4380],
    seedBuyPrices: [950, 920, 850, 890, 930, 960],
    bestSeedShop: {
      name: "Kisan Vikas Beej Kendra",
      location: "GT Road, Amritsar (4.2 km away)",
      price: "₹850 / 10kg",
      savings: "₹120 lower than district avg",
      rating: "4.9 ★",
      contact: "98142-XXXXX"
    },
    bestSellMandi: {
      name: "Bhagtanwala APMC Mandi",
      location: "Amritsar South (8.5 km away)",
      rate: "₹3,850 / Quintal",
      mspNote: "+₹190 above Central MSP",
      badge: "Highest Bid Hub"
    },
    seedVendors: [
      { name: "Kisan Vikas Beej Kendra", loc: "GT Road (4.2 km)", rate: "₹850", stock: "Certified In-Stock", variety: "Pusa 1121 Breeder", highlight: true, phone: "98142-XXXXX" },
      { name: "Punjab State Agro Traders", loc: "Majitha Mandi (14 km)", rate: "₹910", stock: "In-Stock", variety: "Pusa 1718 / 1121", highlight: false, phone: "98721-XXXXX" },
      { name: "IFFCO Kisan e-Bazar", loc: "Rayya Center (24 km)", rate: "₹890", stock: "Limited 15 Bags", variety: "Pusa 1121 Foundation", highlight: false, phone: "98880-XXXXX" }
    ],
    mandis: [
      { name: "Bhagtanwala APMC Mandi", dist: "8.5 km", rate: "₹3,850", demand: "Very High Demand", highlight: true },
      { name: "Tarn Taran Main Grain APMC", dist: "22.0 km", rate: "₹3,810", demand: "High Demand", highlight: false },
      { name: "Jandiala Guru Sub-Mandi", dist: "14.0 km", rate: "₹3,780", demand: "Moderate", highlight: false }
    ],
    tutorials: [
      { step: 1, title: "Seed Inoculation & Nursery", desc: "Treat seeds with Trichoderma (5g/kg) and soak 24h. Prepare raised beds with fine tilth.", timing: "June 05 - June 20" },
      { step: 2, title: "Puddling & Transplanting", desc: "Puddle land 2 times. Transplant 25-day seedlings at 20x15 cm spacing (2 seedlings/hill).", timing: "July 01 - July 20" },
      { step: 3, title: "Nutrient & Water Dosing", desc: "Apply 1/3 N + Full P & K basal. Apply Zinc Sulphate at 25 DAT. Keep 2-3 cm standing water.", timing: "Day 20 & 45 DAT" },
      { step: 4, title: "Harvesting & Mandi Dispatch", desc: "Harvest when 85% panicles turn golden yellow. Sun-dry to 12-14% moisture before Mandi.", timing: "Nov 10 - Nov 25" }
    ]
  },
  moong: {
    id: "moong",
    name: "Green Gram (Moong SML-668)",
    category: "Pulse",
    duration: "65 - 75 Days",
    sowingWindow: "Late Aug - Early Sep",
    sellingWindow: "Late Oct (Diwali Surge)",
    bestSeedBuyTime: "Aug 10 - Aug 25",
    bestCultivateTime: "Late August (Vattar condition)",
    fertilizer: "DAP 100 kg/ha + Rhizobium Seed Culture",
    chartLabels: ['Jun', 'Jul', 'Aug (Current)', 'Sep', 'Oct (Surge)', 'Nov'],
    mandiSellPrices: [6800, 7100, 7550, 7800, 8250, 7900],
    seedBuyPrices: [1400, 1350, 1250, 1300, 1380, 1420],
    bestSeedShop: {
      name: "Guru Nanak Seed Depot",
      location: "Rayya Bypass (11 km away)",
      price: "₹1,250 / 10kg",
      savings: "Govt Certified SML 668",
      rating: "4.9 ★",
      contact: "98760-XXXXX"
    },
    bestSellMandi: {
      name: "Tarn Taran APMC Mandi",
      location: "Tarn Taran (21 km away)",
      rate: "₹7,550 / Quintal",
      mspNote: "+₹350 above State Average",
      badge: "High Pulse Demand"
    },
    seedVendors: [
      { name: "Guru Nanak Seed Depot", loc: "Rayya Bypass (11 km)", rate: "₹1,250", stock: "Certified In-Stock", variety: "SML-668 / MH-421", highlight: true, phone: "98760-XXXXX" },
      { name: "National Seeds Corp Agency", loc: "Amritsar (5 km)", rate: "₹1,320", stock: "In-Stock", variety: "PAU Moong 8", highlight: false, phone: "98150-XXXXX" }
    ],
    mandis: [
      { name: "Tarn Taran APMC", dist: "21.0 km", rate: "₹7,550", demand: "Very High", highlight: true },
      { name: "Bhagtanwala APMC", dist: "8.5 km", rate: "₹7,420", demand: "High", highlight: false }
    ],
    tutorials: [
      { step: 1, title: "Rhizobium Bio-Treatment", desc: "Coat seeds with Rhizobium culture slurry to boost nitrogen fixing root nodules.", timing: "Mid August" },
      { step: 2, title: "Line Sowing with Pora", desc: "Drill seeds at 30 cm row spacing and 4 cm depth with sufficient soil moisture.", timing: "Late August" },
      { step: 3, title: "Irrigation & Weed Control", desc: "First watering at 20-25 days. Hand weeding or herbicide spray within 20 days.", timing: "Sep 15 - 22" },
      { step: 4, title: "Pod Picking & Sale", desc: "Pick mature pods or combine harvest when 85% pods turn brownish black.", timing: "Late October" }
    ]
  },
  cauliflower: {
    id: "cauliflower",
    name: "Cauliflower (Early Rabi Pusa Deepali)",
    category: "Horticulture",
    duration: "60 - 80 Days",
    sowingWindow: "Aug 15 - Sep 15",
    sellingWindow: "Nov - Dec (Winter High)",
    bestSeedBuyTime: "Late July - Early Aug",
    bestCultivateTime: "Mid August (Nursery Sowing)",
    fertilizer: "NPK 150:80:80 + 15 kg Borax / ha",
    chartLabels: ['Jul', 'Aug (Current)', 'Sep', 'Oct', 'Nov (Peak)', 'Dec'],
    mandiSellPrices: [1800, 2200, 2700, 3200, 3650, 2900],
    seedBuyPrices: [1800, 1650, 1750, 1900, 2050, 2100],
    bestSeedShop: {
      name: "Syal Vegetable Seeds",
      location: "Hall Gate, Amritsar (3 km away)",
      price: "₹1,650 / 100g",
      savings: "Hybrid High-Curd Germination",
      rating: "4.8 ★",
      contact: "94170-XXXXX"
    },
    bestSellMandi: {
      name: "Amritsar Vallah Sabzi Mandi",
      location: "Vallah Bypass (6.5 km away)",
      rate: "₹3,650 / Quintal",
      mspNote: "Wholesale High Volume",
      badge: "Peak Veg Demand"
    },
    seedVendors: [
      { name: "Syal Vegetable Seeds", loc: "Hall Gate (3 km)", rate: "₹1,650/100g", stock: "In-Stock", variety: "Pusa Deepali F1", highlight: true, phone: "94170-XXXXX" },
      { name: "Green Gold Agri Agency", loc: "Batala Road (7 km)", rate: "₹1,720/100g", stock: "In-Stock", variety: "Early Snowball", highlight: false, phone: "98144-XXXXX" }
    ],
    mandis: [
      { name: "Vallah Sabzi Mandi", dist: "6.5 km", rate: "₹3,650", demand: "Extremely High", highlight: true },
      { name: "Jalandhar Maqsudan Mandi", dist: "75 km", rate: "₹3,800", demand: "High", highlight: false }
    ],
    tutorials: [
      { step: 1, title: "Raised Nursery Beds", desc: "Prepare 15cm raised beds with vermicompost. Protect seedlings under 50% shade net.", timing: "Early August" },
      { step: 2, title: "Ridge Transplanting", desc: "Transplant 25-day seedlings on ridges (45x45 cm spacing) during evening hours.", timing: "Late Aug - Sep" },
      { step: 3, title: "Boron & Nitrogen Spray", desc: "Foliar spray of Borax (0.2%) to prevent hollow stems and curd browning.", timing: "Day 25 & 40" },
      { step: 4, title: "Blanching & Mandi Auction", desc: "Wrap inner leaves over curd 4 days before harvest to keep snow-white color.", timing: "Nov - Dec" }
    ]
  },
  wheat: {
    id: "wheat",
    name: "Wheat (HD-2967 / PBW-826)",
    category: "Cereal",
    duration: "140 - 150 Days",
    sowingWindow: "Nov 01 - Nov 20",
    sellingWindow: "April - May (Govt MSP Window)",
    bestSeedBuyTime: "Oct 15 - Oct 30",
    bestCultivateTime: "Early November (Zero Tillage)",
    fertilizer: "NPK 120:60:40 + 20 kg Zinc Sulphate",
    chartLabels: ['Oct (Pre)', 'Nov (Sow)', 'Dec', 'Jan', 'Feb', 'Mar (Harvest)'],
    mandiSellPrices: [2250, 2275, 2300, 2350, 2450, 2520],
    seedBuyPrices: [720, 680, 750, 780, 800, 810],
    bestSeedShop: {
      name: "PAU Certified Seed Store",
      location: "Kachehri Road, Amritsar (5 km away)",
      price: "₹680 / 10kg",
      savings: "98% High Germination Certified",
      rating: "5.0 ★",
      contact: "98720-XXXXX"
    },
    bestSellMandi: {
      name: "Majitha Grain Market",
      location: "Majitha (16 km away)",
      rate: "₹2,350 / Quintal",
      mspNote: "Direct FCI MSP Center",
      badge: "Govt MSP Active"
    },
    seedVendors: [
      { name: "PAU Certified Seed Store", loc: "Kachehri Road (5 km)", rate: "₹680", stock: "In-Stock", variety: "HD-2967 Certified", highlight: true, phone: "98720-XXXXX" },
      { name: "IFFCO Kisan Sewa Kendra", loc: "Verka (6 km)", rate: "₹710", stock: "In-Stock", variety: "PBW-826", highlight: false, phone: "98141-XXXXX" }
    ],
    mandis: [
      { name: "Majitha Grain Market", dist: "16.0 km", rate: "₹2,350", demand: "High (MSP)", highlight: true },
      { name: "Bhagtanwala APMC", dist: "8.5 km", rate: "₹2,325", demand: "High (MSP)", highlight: false }
    ],
    tutorials: [
      { step: 1, title: "Residue Management & Sowing", desc: "Use Super Seeder or Happy Seeder directly into paddy stubble without burning.", timing: "Nov 01 - Nov 15" },
      { step: 2, title: "CRI Stage 1st Irrigation", desc: "Apply first watering exactly 21 days after sowing (Crown Root Initiation stage).", timing: "Day 21" },
      { step: 3, title: "Urea Top Dressing", desc: "Broadcast remaining Nitrogen before second irrigation at tillering stage.", timing: "Day 45 - 50" },
      { step: 4, title: "Combine Harvest & Mandi", desc: "Harvest once grain moisture drops below 12%. Direct dispatch to procurement center.", timing: "April" }
    ]
  },
  mustard: {
    id: "mustard",
    name: "Mustard (Pusa Mustard 25 / Giriraj)",
    category: "Oilseed",
    duration: "115 - 125 Days",
    sowingWindow: "Oct 01 - Oct 25",
    sellingWindow: "Feb - March (Oil Mill Peak)",
    bestSeedBuyTime: "Sep 15 - Sep 30",
    bestCultivateTime: "Early October",
    fertilizer: "NPK 80:40:40 + 20 kg Elemental Sulphur",
    chartLabels: ['Sep', 'Oct (Sow)', 'Nov', 'Dec', 'Jan', 'Feb (Peak)'],
    mandiSellPrices: [5100, 5250, 5400, 5600, 5950, 5800],
    seedBuyPrices: [850, 780, 820, 860, 900, 910],
    bestSeedShop: {
      name: "Punjab Agro Seeds Store",
      location: "Rayya Bypass (22 km)",
      price: "₹780 / 5kg",
      savings: "High 42% Oil Content Seed",
      rating: "4.8 ★",
      contact: "98145-XXXXX"
    },
    bestSellMandi: {
      name: "Jandiala Guru Oilseed Mandi",
      location: "Jandiala (14 km away)",
      rate: "₹5,600 / Quintal",
      mspNote: "+₹310 above MSP",
      badge: "High Mill Demand"
    },
    seedVendors: [
      { name: "Punjab Agro Seeds Store", loc: "Rayya (22 km)", rate: "₹780/5kg", stock: "In-Stock", variety: "Giriraj (DRMRIJ-31)", highlight: true, phone: "98145-XXXXX" }
    ],
    mandis: [
      { name: "Jandiala Guru APMC", dist: "14 km", rate: "₹5,600", demand: "Very High", highlight: true }
    ],
    tutorials: [
      { step: 1, title: "Field Prep & Sulphur", desc: "Fine seedbed preparation. Incorporate 20kg/ha Elemental Sulphur to boost oil percentage.", timing: "Late September" },
      { step: 2, title: "Sowing & Thinning", desc: "Drill at 45x15 cm spacing. Thin plants at 15-20 days to ensure robust branching.", timing: "Oct 01 - Oct 15" },
      { step: 3, title: "Aphid Monitoring", desc: "Watch for mustard aphid during flowering. Spray recommended neem oil or bio-agent.", timing: "Dec - Jan" },
      { step: 4, title: "Harvesting at Siliqua Maturity", desc: "Harvest when 75% pods turn golden brown. Thresh and clean.", timing: "Late February" }
    ]
  }
};

// ================= CHART CONTROLLER =================
let chartInstance = null;

function renderPriceChart(cropKey) {
  const crop = agroKnowledgeBase[cropKey] || agroKnowledgeBase.basmati;
  const ctx = document.getElementById('interactivePriceChart').getContext('2d');

  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: crop.chartLabels,
      datasets: [
        {
          label: 'Mandi Selling Rate (₹/Quintal)',
          data: crop.mandiSellPrices,
          borderColor: '#16a34a',
          backgroundColor: 'rgba(22, 163, 74, 0.15)',
          fill: true,
          tension: 0.35,
          borderWidth: 3,
          pointRadius: 5,
          pointBackgroundColor: '#16a34a'
        },
        {
          label: 'Seed Cost Index (₹)',
          data: crop.seedBuyPrices,
          borderColor: '#f59e0b',
          borderDash: [6, 6],
          tension: 0.35,
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: '#f59e0b'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        legend: {
          position: 'bottom',
          labels: { boxWidth: 14, font: { size: 12, weight: 'bold' } }
        },
        tooltip: {
          padding: 12,
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ₹${ctx.parsed.y.toLocaleString('en-IN')}`
          }
        }
      },
      scales: {
        y: {
          grid: { color: '#e2e8f0' },
          ticks: { callback: (v) => '₹' + v, font: { weight: 'bold' } }
        },
        x: {
          grid: { display: false },
          ticks: { font: { weight: 'bold' } }
        }
      }
    }
  });

  document.getElementById('chart-optimal-indicator').innerHTML = `
    <span class="bg-brand-100 text-brand-800 text-xs font-black px-3 py-1.5 rounded-xl border border-brand-200">
      <i class="fa-solid fa-fire text-amber-500 mr-1"></i> Best Selling Peak: ${crop.sellingWindow}
    </span>
  `;
}

// ================= SYNC ALL DYNAMIC VIEWS =================
function syncSelectedCrop(cropKey) {
  const crop = agroKnowledgeBase[cropKey];
  if (!crop) return;

  // 1. Chart Render
  renderPriceChart(cropKey);

  // 2. Spotlight Hubs
  document.getElementById('market-spotlight-cards').innerHTML = `
    <div class="bg-gradient-to-br from-brand-50 to-white border border-brand-200 rounded-2xl p-5 shadow-sm">
      <div class="flex items-center justify-between">
        <span class="text-[11px] font-black uppercase tracking-wider text-brand-700 bg-brand-200/60 px-2.5 py-0.5 rounded-lg">Top Recommended Seed Vendor</span>
        <span class="text-xs font-bold text-amber-600">${crop.bestSeedShop.rating}</span>
      </div>
      <h4 class="font-black text-slate-900 text-lg mt-2">${crop.bestSeedShop.name}</h4>
      <p class="text-xs text-slate-500">${crop.bestSeedShop.location}</p>
      <div class="mt-4 p-3 bg-white rounded-xl border border-brand-100 flex justify-between items-center text-xs">
        <div>Price: <strong class="text-slate-800 text-sm">${crop.bestSeedShop.price}</strong></div>
        <span class="text-emerald-700 font-extrabold">${crop.bestSeedShop.savings}</span>
      </div>
      <div class="mt-3 text-xs text-brand-800 font-semibold flex items-center justify-between">
        <span>Optimal Seed Buying: <strong>${crop.bestSeedBuyTime}</strong></span>
      </div>
    </div>

    <div class="bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-2xl p-5 shadow-sm">
      <div class="flex items-center justify-between">
        <span class="text-[11px] font-black uppercase tracking-wider text-amber-800 bg-amber-200/60 px-2.5 py-0.5 rounded-lg">${crop.bestSellMandi.badge}</span>
        <span class="text-xs font-bold text-emerald-600"><i class="fa-solid fa-arrow-trend-up"></i> Live Surge</span>
      </div>
      <h4 class="font-black text-slate-900 text-lg mt-2">${crop.bestSellMandi.name}</h4>
      <p class="text-xs text-slate-500">${crop.bestSellMandi.location}</p>
      <div class="mt-4 p-3 bg-white rounded-xl border border-amber-100 flex justify-between items-center text-xs">
        <div>Current Mandi Rate: <strong class="text-amber-800 text-sm">${crop.bestSellMandi.rate}</strong></div>
        <span class="text-amber-900 font-extrabold">${crop.bestSellMandi.mspNote}</span>
      </div>
      <div class="mt-3 text-xs text-amber-900 font-semibold flex items-center justify-between">
        <span>Ideal Cultivation Sowing: <strong>${crop.bestCultivateTime}</strong></span>
      </div>
    </div>
  `;

  // 3. Seed Vendor Table
  document.getElementById('seed-table-rows').innerHTML = crop.seedVendors.map(v => `
    <tr class="${v.highlight ? 'bg-brand-50/60 font-semibold' : ''}">
      <td class="p-3 font-bold text-slate-900">${v.name}</td>
      <td class="p-3">${v.loc}</td>
      <td class="p-3 font-black text-brand-700">${v.rate}</td>
      <td class="p-3"><span class="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded text-[11px] font-bold">${v.stock}</span></td>
      <td class="p-3"><button onclick="alert('Calling ${v.name}: ${v.phone}')" class="text-brand-600 hover:text-brand-800 font-bold"><i class="fa-solid fa-phone"></i> Call</button></td>
    </tr>
  `).join('');

  // 4. Mandi Table
  document.getElementById('mandi-table-rows').innerHTML = crop.mandis.map(m => `
    <tr class="${m.highlight ? 'bg-amber-50/60 font-semibold' : ''}">
      <td class="p-3 font-bold text-slate-900">${m.name}</td>
      <td class="p-3">${m.dist}</td>
      <td class="p-3 font-black text-amber-800 text-sm">${m.rate}</td>
      <td class="p-3"><span class="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded text-[11px] font-bold">${m.demand}</span></td>
      <td class="p-3"><button onclick="alert('Opening GPS navigation to ${m.name}')" class="text-brand-600 hover:text-brand-800 font-bold"><i class="fa-solid fa-location-arrow"></i> Map</button></td>
    </tr>
  `).join('');

  // 5. Cultivation Roadmap
  document.getElementById('blueprint-title').innerText = `Full Cultivation Blueprint: ${crop.name}`;
  document.getElementById('blueprint-duration').innerText = `${crop.duration} • ${crop.category}`;
  document.getElementById('blueprint-steps-container').innerHTML = crop.tutorials.map(tut => `
    <div class="border border-slate-200 rounded-2xl p-5 bg-slate-50/60 relative hover:bg-white hover:shadow-lg transition">
      <div class="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center font-black text-sm mb-3">
        ${tut.step}
      </div>
      <h4 class="font-black text-slate-900 text-base mb-1">${tut.title}</h4>
      <p class="text-xs text-slate-600 leading-relaxed">${tut.desc}</p>
      <div class="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-extrabold text-brand-700">
        <i class="fa-regular fa-clock mr-1"></i> Phase: ${tut.timing}
      </div>
    </div>
  `).join('');

  // Sync calculator rate
  const defaultRate = parseInt(crop.bestSellMandi.rate.replace(/[^0-9]/g, '')) || 3850;
  document.getElementById('slider-rate').value = defaultRate;
  document.getElementById('slider-rate-val').innerText = `₹${defaultRate.toLocaleString('en-IN')}`;
  runProfitSimulator();
}

// ================= RENDER CATEGORIZED CROP CARDS =================
function renderCropGrid(filterCategory = 'all') {
  const container = document.getElementById('expanded-crop-grid');
  const cropKeys = Object.keys(agroKnowledgeBase);

  const filtered = cropKeys.filter(k => {
    if (filterCategory === 'all') return true;
    return agroKnowledgeBase[k].category === filterCategory;
  });

  container.innerHTML = filtered.map(key => {
    const crop = agroKnowledgeBase[key];
    return `
      <div class="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition flex flex-col justify-between group">
        <div>
          <div class="flex justify-between items-start mb-3">
            <span class="bg-brand-50 text-brand-800 text-xs font-extrabold px-3 py-1 rounded-full border border-brand-200">${crop.category}</span>
            <span class="text-xs font-bold text-emerald-600"><i class="fa-solid fa-clock"></i> ${crop.duration}</span>
          </div>
          <h3 class="text-xl font-black text-slate-900 group-hover:text-brand-600 transition">${crop.name}</h3>
          
          <div class="mt-5 space-y-2.5 text-xs text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <div class="flex justify-between"><span>Sowing Window:</span> <strong class="text-slate-800">${crop.sowingWindow}</strong></div>
            <div class="flex justify-between"><span>Harvest & Peak Price:</span> <strong class="text-slate-800">${crop.sellingWindow}</strong></div>
            <div class="flex justify-between"><span>Key Fertilizer:</span> <strong class="text-slate-800">${crop.fertilizer}</strong></div>
            <div class="flex justify-between"><span>Best Mandi Rate:</span> <strong class="text-amber-800 font-extrabold">${crop.bestSellMandi.rate}</strong></div>
          </div>
        </div>

        <button onclick="selectAndFocusCrop('${key}')" class="mt-6 w-full bg-brand-600 hover:bg-brand-700 text-white text-xs font-extrabold py-3 rounded-2xl shadow-md transition flex items-center justify-center gap-2">
          <span>Analyze Rates & Blueprint</span> <i class="fa-solid fa-arrow-right text-xs"></i>
        </button>
      </div>
    `;
  }).join('');
}

function filterCropCategory(category) {
  document.querySelectorAll('.category-btn').forEach(btn => {
    if (btn.getAttribute('data-cat') === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderCropGrid(category);
}

function selectAndFocusCrop(cropKey) {
  document.getElementById('main-crop-selector').value = cropKey;
  syncSelectedCrop(cropKey);
  document.getElementById('price-analytics').scrollIntoView({ behavior: 'smooth' });
}

// ================= DYNAMIC PROFIT SIMULATOR =================
function runProfitSimulator() {
  const acres = parseFloat(document.getElementById('slider-acres').value) || 1;
  const yieldPerAcre = parseFloat(document.getElementById('slider-yield').value) || 20;
  const ratePerQtl = parseFloat(document.getElementById('slider-rate').value) || 3500;
  
  const fertCostPerAcre = parseFloat(document.getElementById('inp-fertilizer').value) || 0;
  const laborCostPerAcre = parseFloat(document.getElementById('inp-labor').value) || 0;
  const transportPerQtl = parseFloat(document.getElementById('inp-transport').value) || 0;

  // Update slider labels
  document.getElementById('slider-acres-val').innerText = `${acres} Acres`;
  document.getElementById('slider-yield-val').innerText = `${yieldPerAcre} Qtl / Acre`;
  document.getElementById('slider-rate-val').innerText = `₹${ratePerQtl.toLocaleString('en-IN')}`;

  // Computations
  const totalYield = acres * yieldPerAcre;
  const grossRevenue = totalYield * ratePerQtl;
  
  const totalFertCost = fertCostPerAcre * acres;
  const totalLaborCost = laborCostPerAcre * acres;
  const totalTransportCost = totalYield * transportPerQtl;
  const totalCosts = totalFertCost + totalLaborCost + totalTransportCost;
  
  const netProfit = grossRevenue - totalCosts;
  const roi = totalCosts > 0 ? Math.round((netProfit / totalCosts) * 100) : 0;

  // Update DOM figures
  document.getElementById('sim-net-profit').innerText = `₹${Math.round(netProfit).toLocaleString('en-IN')}`;
  document.getElementById('sim-gross-revenue').innerText = `₹${Math.round(grossRevenue).toLocaleString('en-IN')}`;
  document.getElementById('sim-total-costs').innerText = `₹${Math.round(totalCosts).toLocaleString('en-IN')}`;
  document.getElementById('sim-roi-badge').innerText = `+${roi}% ROI`;

  // Visual Breakdown Bar Percentages
  if (grossRevenue > 0) {
    const profitPct = Math.max(0, Math.min(100, (netProfit / grossRevenue) * 100));
    const fertPct = (totalFertCost / grossRevenue) * 100;
    const laborPct = (totalLaborCost / grossRevenue) * 100;
    const transPct = (totalTransportCost / grossRevenue) * 100;

    document.getElementById('bar-profit').style.width = `${profitPct}%`;
    document.getElementById('bar-input').style.width = `${fertPct}%`;
    document.getElementById('bar-labor').style.width = `${laborPct}%`;
    document.getElementById('bar-transport').style.width = `${transPct}%`;
  }
}

// ================= INTERACTION HANDLERS =================
let isHindiActive = false;
function toggleLanguage() {
  isHindiActive = !isHindiActive;
  document.querySelectorAll('[data-en][data-hi]').forEach(el => {
    el.innerText = isHindiActive ? el.getAttribute('data-hi') : el.getAttribute('data-en');
  });
  document.getElementById('lang-switch-label').innerText = isHindiActive ? "English Version" : "हिन्दी / English";
}

function promptChangeLocation() {
  const newDistrict = prompt("Enter your district / Mandi region:", "Amritsar District, Punjab");
  if (newDistrict) {
    document.getElementById('current-location-text').innerText = newDistrict;
  }
}


function handleSmsSubscription(e) {
  e.preventDefault();
  const phone = document.getElementById('sms-mobile').value;
  const rise = document.getElementById('sms-trigger-rise').value || "Auto (+5%)";
  const fall = document.getElementById('sms-trigger-fall').value || "Auto (-5%)";
  const lang = document.getElementById('sms-language-select').value;

  alert(`SMS Watchdog Activated!\n\nMobile: +91 ${phone}\nPrice Ceiling Alert: ${rise}\nPrice Drop Alert: ${fall}\nLanguage: ${lang}\n\nYou will receive a confirmation SMS in 2 seconds.`);
}

function requestRide(driverName) {
  alert(`Co-loading request sent to ${driverName}!\nDriver will call your mobile number to confirm bag weight and pickup point.`);
}

function openPostVehicleModal() {
  const origin = prompt("Enter pickup village/mandi:", "Rayya");
  const dest = prompt("Enter destination APMC mandi:", "Bhagtanwala APMC");
  const space = prompt("Available space in Quintals:", "40");
  if (origin && dest && space) {
    alert(`Vehicle listed successfully on the community transport pool!\nRoute: ${origin} -> ${dest} (${space} Qtl space)`);
  }
}

function downloadProfitReport() {
  alert("Farm Financial Report PDF generated and downloaded successfully.");
}

// ================= INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('main-crop-selector');
  selector.innerHTML = Object.keys(agroKnowledgeBase).map(k => `
    <option value="${k}">${agroKnowledgeBase[k].name}</option>
  `).join('');

  renderCropGrid('all');
  syncSelectedCrop('basmati');
  runProfitSimulator();
});