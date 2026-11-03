const I={
buds:'<svg viewBox="0 0 100 100"><circle cx="33" cy="36" r="14"/><path d="M33 50v34M67 50v34"/><circle cx="67" cy="36" r="14"/></svg>',
watch:'<svg viewBox="0 0 100 100"><rect x="28" y="30" width="44" height="40" rx="12"/><path d="M36 30l4-18h20l4 18M36 70l4 18h20l4-18M50 42v9l6 4"/></svg>',
laptop:'<svg viewBox="0 0 100 100"><rect x="18" y="24" width="64" height="42" rx="5"/><path d="M8 76h84l-6 8H14z"/></svg>',
speaker:'<svg viewBox="0 0 100 100"><rect x="30" y="12" width="40" height="76" rx="14"/><circle cx="50" cy="38" r="9"/><circle cx="50" cy="66" r="13"/></svg>',
camera:'<svg viewBox="0 0 100 100"><path d="M14 32h20l6-10h20l6 10h20v46H14z"/><circle cx="50" cy="55" r="15"/></svg>',
keyboard:'<svg viewBox="0 0 100 100"><rect x="8" y="30" width="84" height="40" rx="8"/><path d="M20 42h4M32 42h4M44 42h4M56 42h4M68 42h4M80 42h0M22 58h56"/></svg>',
charger:'<svg viewBox="0 0 100 100"><rect x="30" y="26" width="40" height="52" rx="8"/><path d="M40 26V12M60 26V12M52 40l-8 12h12l-8 12"/></svg>',
phone:'<svg viewBox="0 0 100 100"><rect x="30" y="10" width="40" height="80" rx="10"/><path d="M44 20h12"/><circle cx="50" cy="78" r="3"/></svg>',
bulb:'<svg viewBox="0 0 100 100"><path d="M50 12a24 24 0 0 0-14 44c4 4 4 8 4 12h20c0-4 0-8 4-12A24 24 0 0 0 50 12zM40 80h20M44 88h12"/></svg>',
mouse:'<svg viewBox="0 0 100 100"><rect x="30" y="12" width="40" height="76" rx="20"/><path d="M50 12v28M30 40h40"/></svg>'};
const CATS=[
{n:"Audio",i:"buds",d:"Earbuds, speakers & headphones"},
{n:"Wearables",i:"watch",d:"Smartwatches & fitness bands"},
{n:"Computing",i:"laptop",d:"Laptops, tablets & peripherals"},
{n:"Smart Home",i:"bulb",d:"Lighting, cameras & hubs"},
{n:"Accessories",i:"charger",d:"Chargers, cables & cases"}];
const S=(b,c,w,wt)=>({Battery:b,Connectivity:c,Weight:w,Warranty:wt});
const P=[
{id:1,name:"Aura Buds Pro",cat:"Audio",price:12999,old:15999,rating:4.7,rev:2140,color:"#ff5a1f",icon:"buds",tag:"Best seller",desc:"Adaptive noise cancelling earbuds with spatial audio and a 36-hour battery case.",specs:S("36 h","Bluetooth 5.3","5.1 g","1 year")},
{id:2,name:"Pulse Watch S2",cat:"Wearables",price:18499,old:21999,rating:4.6,rev:1320,color:"#3b82f6",icon:"watch",tag:"New",desc:"AMOLED smartwatch with GPS, ECG, sleep tracking and 10-day battery life.",specs:S("10 days","Bluetooth 5.2, GPS","38 g","1 year")},
{id:3,name:"Nimbus Air 14",cat:"Computing",price:84999,old:92999,rating:4.8,rev:860,color:"#8b5cf6",icon:"laptop",tag:"Editor's pick",desc:"Ultra-light 14-inch laptop with a 2.8K display, 16 GB RAM and all-day battery.",specs:S("18 h","Wi-Fi 6E, USB-C","1.2 kg","2 years")},
{id:4,name:"Boom Cube Mini",cat:"Audio",price:6499,old:7999,rating:4.4,rev:3010,color:"#f59e0b",icon:"speaker",desc:"Pocket-sized waterproof speaker with room-filling 360° sound.",specs:S("14 h","Bluetooth 5.3","540 g","1 year")},
{id:5,name:"Lumen Smart Bulb x4",cat:"Smart Home",price:3299,old:3999,rating:4.3,rev:1870,color:"#eab308",icon:"bulb",desc:"Pack of four colour smart bulbs with voice control and scene scheduling.",specs:S("Mains","Wi-Fi, Matter","4 × 60 g","2 years")},
{id:6,name:"Snap Pocket Cam",cat:"Smart Home",price:9999,old:11999,rating:4.5,rev:640,color:"#10b981",icon:"camera",desc:"2K indoor security camera with night vision and on-device person detection.",specs:S("Mains","Wi-Fi 6","110 g","1 year")},
{id:7,name:"Tactile K75 Keyboard",cat:"Computing",price:7999,old:9499,rating:4.7,rev:980,color:"#ec4899",icon:"keyboard",tag:"Popular",desc:"75% hot-swappable mechanical keyboard with gasket mount and wireless mode.",specs:S("120 h","Bluetooth, 2.4 GHz, USB-C","780 g","1 year")},
{id:8,name:"Volt GaN 100W",cat:"Accessories",price:2999,old:3799,rating:4.6,rev:4200,color:"#ef4444",icon:"charger",desc:"Compact 100W GaN charger with three ports, powers a laptop and two phones.",specs:S("—","USB-C ×2, USB-A","145 g","18 months")},
{id:9,name:"Orbit Phone X",cat:"Computing",price:39999,old:44999,rating:4.5,rev:2500,color:"#06b6d4",icon:"phone",tag:"New",desc:"6.7-inch 120 Hz display, 50 MP camera system and 5000 mAh fast-charging battery.",specs:S("2 days","5G, Wi-Fi 6, NFC","192 g","1 year")},
{id:10,name:"Glide Pro Mouse",cat:"Computing",price:4499,old:5299,rating:4.4,rev:1150,color:"#6366f1",icon:"mouse",desc:"Ergonomic wireless mouse with 8K DPI sensor and silent clicks.",specs:S("70 days","Bluetooth, 2.4 GHz","82 g","1 year")},
{id:11,name:"Echo Over-Ear 3",cat:"Audio",price:15999,old:18999,rating:4.8,rev:1760,color:"#14b8a6",icon:"buds",desc:"Studio-tuned wireless headphones with hybrid ANC and multipoint pairing.",specs:S("50 h","Bluetooth 5.3","250 g","2 years")},
{id:12,name:"Pulse Band Lite",cat:"Wearables",price:3499,old:4299,rating:4.2,rev:5200,color:"#84cc16",icon:"watch",desc:"Lightweight fitness band with heart-rate, SpO2 and 14-day battery life.",specs:S("14 days","Bluetooth 5.0","24 g","1 year")},
{id:13,name:"Hub Link Home",cat:"Smart Home",price:5999,old:6999,rating:4.3,rev:720,color:"#a855f7",icon:"bulb",desc:"Matter-ready smart hub that connects and automates all your home devices.",specs:S("Mains","Wi-Fi, Zigbee, Thread","160 g","2 years")},
{id:14,name:"Mag Power 10K",cat:"Accessories",price:3999,old:4799,rating:4.5,rev:2900,color:"#f97316",icon:"charger",desc:"10,000 mAh magnetic wireless power bank with 30W USB-C fast charging.",specs:S("10,000 mAh","USB-C, Qi2","215 g","1 year")},
{id:15,name:"Slate Tab 11",cat:"Computing",price:27999,old:31999,rating:4.6,rev:690,color:"#0ea5e9",icon:"laptop",desc:"11-inch tablet with stylus support, quad speakers and a 120 Hz display.",specs:S("12 h","Wi-Fi 6, 5G optional","470 g","1 year")},
{id:16,name:"Beam Soundbar 2.1",cat:"Audio",price:11999,old:13999,rating:4.5,rev:880,color:"#d946ef",icon:"speaker",desc:"Compact 2.1 soundbar with wireless sub, Dolby Atmos and HDMI eARC.",specs:S("Mains","HDMI eARC, Bluetooth","3.1 kg","2 years")}];
