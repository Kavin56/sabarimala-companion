// Mock datasets for the Ayyappa Yathra prototype (UI only, no backend).
import hero from "@/assets/hero-sabarimala.jpg";
import lamp from "@/assets/lamp-glow.jpg";
import vrathamImg from "@/assets/vratham.jpg";
import prepare from "@/assets/prepare-home.jpg";
import pilgrims from "@/assets/pilgrims-route.jpg";
import returnHome from "@/assets/return-home.jpg";
import templeSabarimala from "@/assets/temple-sabarimala.jpg";
import templePamba from "@/assets/temple-pamba.jpg";
import templeSannidhanam from "@/assets/temple-sannidhanam.jpg";
import templeNearby from "@/assets/temple-nearby.jpg";
import foodImg from "@/assets/food-guide.jpg";
import stayImg from "@/assets/accommodation.jpg";
import roadImg from "@/assets/travel-road.jpg";
import cta from "@/assets/final-cta.jpg";

export const img = {
  hero,
  lamp,
  vratham: vrathamImg,
  prepare,
  pilgrims,
  returnHome,
  templeSabarimala,
  templePamba,
  templeSannidhanam,
  templeNearby,
  food: foodImg,
  stay: stayImg,
  road: roadImg,
  cta,
};

export const user = {
  name: "Ramesh Kumar",
  firstName: "Ramesh",
  mobile: "+91 98407 55210",
  email: "ramesh.kumar@example.com",
  dob: "12 March 1984",
  gender: "Male",
  location: "Chennai, Tamil Nadu",
  emergencyContact: "Lakshmi Kumar — +91 99620 41188",
  language: "Tamil",
  yathraDate: "15 November 2026",
  daysToYathra: 41,
};

export const journeyStages = [
  { key: "home", label: "Home", status: "done", note: "Sankalpam taken at home" },
  { key: "preparation", label: "Preparation", status: "done", note: "Guru Swami guidance received" },
  { key: "vratham", label: "Vratham", status: "done", note: "Day 10 of 41 observed" },
  { key: "packing", label: "Packing", status: "done", note: "18 of 25 items packed" },
  { key: "travel", label: "Travel", status: "current", note: "Chennai → Kerala, 15 Nov" },
  { key: "pamba", label: "Pamba", status: "upcoming", note: "Holy dip & Ganapathi temple" },
  { key: "route", label: "Pilgrimage Route", status: "upcoming", note: "Neelimala — Sharam Kuthi" },
  { key: "sannidhanam", label: "Sannidhanam", status: "upcoming", note: "Pathinettam Padi darshan" },
  { key: "return", label: "Return", status: "upcoming", note: "Sannidhanam → Chennai" },
  { key: "back-home", label: "Home", status: "upcoming", note: "Mala removal ceremony" },
] as const;

export const vratham = {
  day: 10,
  total: 41,
  remaining: 31,
  routine: [
    { key: "morning", label: "Morning", time: "4:30 AM", detail: "Cold bath, Saranam chanting, Ayyappa Suprabhatam", done: true },
    { key: "afternoon", label: "Afternoon", time: "12:30 PM", detail: "Simple sattvic meal, Bhajan listening", done: true },
    { key: "evening", label: "Evening", time: "6:00 PM", detail: "Deepa Aradhana, lamp lighting, Saranam Vili", done: true },
    { key: "night", label: "Night", time: "9:00 PM", detail: "Bhajan, sleeping on mat, Harivarasanam", done: false },
  ],
  dos: [
    "Wear black or blue mundu and the Tulsi/Rudraksha mala at all times",
    "Bathe twice daily before prayers",
    "Address every devotee as Swami",
    "Sleep on a mat on the floor",
    "Speak softly and practise patience",
  ],
  donts: [
    "No non-vegetarian food, alcohol or tobacco",
    "No shaving or hair cutting during Vratham",
    "Avoid anger, gossip and harsh speech",
    "Avoid attending ceremonies of birth or death",
    "Avoid footwear where the tradition asks for bare feet",
  ],
  sections: [
    { title: "How to Start Vratham", text: "Receive the mala from a Guru Swami on an auspicious day, take Sankalpam before the family lamp and begin the 41-day discipline.", image: lamp },
    { title: "Daily Routine", text: "Two baths, two poojas, sattvic food, Saranam chanting and early rest structure each day of the Vratham.", image: vrathamImg },
    { title: "Prayer Guide", text: "Saranam Vili, Ayyappa Ashtothram, Harivarasanam and the daily Deepa Aradhana with a lit lamp.", image: prepare },
    { title: "Mala Guide", text: "Care of the Tulsi or Rudraksha mala, how it is worn, respected during the Vratham and removed after the Yathra.", image: templeSabarimala },
    { title: "Food Guidance", text: "Sattvic vegetarian meals, no onion or garlic for many devotees, plenty of water and fruit while travelling.", image: foodImg },
  ],
};

export const packing = [
  {
    category: "Essential",
    items: [
      { name: "Irumudi kettu", note: "Two-compartment sacred bundle", done: true },
      { name: "Ghee filled coconut", note: "Neyyabhishekam", done: true },
      { name: "Black/blue mundu (3)", note: "", done: true },
      { name: "Tulsi mala", note: "Worn from Sankalpam", done: true },
      { name: "Camphor & incense", note: "", done: true },
    ],
  },
  {
    category: "Travel",
    items: [
      { name: "Train / bus tickets", note: "Printed and digital", done: true },
      { name: "Photo ID proof", note: "Aadhaar / Voter ID", done: true },
      { name: "Cash & UPI-ready phone", note: "Network is weak near Pamba", done: true },
      { name: "Power bank", note: "20000 mAh", done: false },
      { name: "Small backpack", note: "", done: true },
    ],
  },
  {
    category: "Personal",
    items: [
      { name: "Towel (2)", note: "", done: true },
      { name: "Soap & toothpaste", note: "Travel size", done: true },
      { name: "Bedsheet / thin blanket", note: "Sannidhanam nights are cold", done: false },
      { name: "Torch light", note: "For night trek", done: true },
      { name: "Spare slippers", note: "For non-sacred stretches", done: true },
    ],
  },
  {
    category: "Devotional",
    items: [
      { name: "Bhajan booklet", note: "Saranam Vili", done: true },
      { name: "Photo of Ayyappa Swami", note: "", done: true },
      { name: "Pooja items", note: "Kumkum, vibhuti, chandan", done: true },
      { name: "Aval, malar, avil offerings", note: "", done: false },
    ],
  },
  {
    category: "Health & Safety",
    items: [
      { name: "Personal medicines", note: "With prescription", done: true },
      { name: "First aid kit", note: "Band-aid, antiseptic", done: false },
      { name: "Pain relief spray", note: "For the trek", done: false },
      { name: "Water bottle", note: "1 litre reusable", done: true },
      { name: "Emergency contact card", note: "In Irumudi", done: false },
      { name: "Rain poncho", note: "Kerala showers", done: false },
    ],
  },
];

export const buses = [
  { id: "b1", operator: "Sabari Travels", type: "Volvo AC Sleeper (2+1)", depart: "18:30", arrive: "07:45", duration: "13h 15m", boarding: "Koyambedu CMBT", dropping: "Pamba Base", rating: 4.6, reviews: 1284, amenities: ["Charging Point", "Water Bottle", "Blanket", "CCTV", "Live Tracking"], seats: 14, price: 1450, ac: true, sleeper: true },
  { id: "b2", operator: "Guruvayur Lines", type: "AC Seater / Sleeper (2+2)", depart: "20:00", arrive: "09:10", duration: "13h 10m", boarding: "Guindy", dropping: "Nilackal", rating: 4.3, reviews: 892, amenities: ["Charging Point", "Reading Light", "Water Bottle"], seats: 7, price: 1180, ac: true, sleeper: true },
  { id: "b3", operator: "KSRTC Swift", type: "Non-AC Semi Sleeper", depart: "16:45", arrive: "06:55", duration: "14h 10m", boarding: "Tambaram", dropping: "Pamba Base", rating: 4.1, reviews: 2210, amenities: ["Charging Point", "Emergency Exit"], seats: 22, price: 890, ac: false, sleeper: false },
  { id: "b4", operator: "Ayyappa Yathra Coaches", type: "Volvo Multi-Axle AC", depart: "19:15", arrive: "08:05", duration: "12h 50m", boarding: "Koyambedu CMBT", dropping: "Sannidhanam Base", rating: 4.8, reviews: 640, amenities: ["Charging Point", "Water Bottle", "Blanket", "Pooja Room Stop", "Live Tracking"], seats: 5, price: 1720, ac: true, sleeper: true },
  { id: "b5", operator: "Pandalam Express", type: "Non-AC Sleeper", depart: "21:30", arrive: "11:20", duration: "13h 50m", boarding: "Vadapalani", dropping: "Pamba Base", rating: 3.9, reviews: 431, amenities: ["Charging Point"], seats: 30, price: 760, ac: false, sleeper: true },
  { id: "b6", operator: "Kerala Star Travels", type: "AC Seater (2+2)", depart: "06:30", arrive: "20:10", duration: "13h 40m", boarding: "Perungalathur", dropping: "Nilackal", rating: 4.4, reviews: 1105, amenities: ["Charging Point", "Water Bottle", "Snacks"], seats: 18, price: 1320, ac: true, sleeper: false },
];

export const trains = [
  { id: "t1", number: "12695", name: "Chennai – Trivandrum Superfast", from: "MAS Chennai Central", to: "KTYM Kottayam", depart: "14:55", arrive: "05:20", duration: "14h 25m", days: "Daily", classes: [ { code: "SL", price: 520, status: "AVAILABLE 42" }, { code: "3A", price: 1385, status: "RAC 6" }, { code: "2A", price: 1985, status: "WL 12" }, { code: "1A", price: 3410, status: "AVAILABLE 4" } ] },
  { id: "t2", number: "16127", name: "Guruvayur Express", from: "MAS Chennai Egmore", to: "SCT Chengannur", depart: "07:45", arrive: "21:30", duration: "13h 45m", days: "Daily", classes: [ { code: "SL", price: 480, status: "AVAILABLE 128" }, { code: "3A", price: 1290, status: "AVAILABLE 21" }, { code: "2A", price: 1840, status: "RAC 3" }, { code: "CC", price: 960, status: "AVAILABLE 33" } ] },
  { id: "t3", number: "22639", name: "Alleppey Express", from: "MAS Chennai Central", to: "ERS Ernakulam Jn", depart: "20:40", arrive: "08:15", duration: "11h 35m", days: "Daily", classes: [ { code: "SL", price: 445, status: "WL 28" }, { code: "3A", price: 1210, status: "AVAILABLE 9" }, { code: "2A", price: 1725, status: "AVAILABLE 2" } ] },
  { id: "t4", number: "16525", name: "Island Express", from: "SBC Bengaluru", to: "KTYM Kottayam", depart: "19:00", arrive: "10:05", duration: "15h 05m", days: "Daily", classes: [ { code: "SL", price: 505, status: "AVAILABLE 66" }, { code: "3A", price: 1340, status: "RAC 11" }, { code: "2A", price: 1910, status: "WL 5" } ] },
  { id: "t5", number: "17229", name: "Sabari Express", from: "HYB Hyderabad", to: "ERS Ernakulam Jn", depart: "12:30", arrive: "17:50", duration: "29h 20m", days: "Daily", classes: [ { code: "SL", price: 705, status: "AVAILABLE 88" }, { code: "3A", price: 1865, status: "AVAILABLE 14" }, { code: "2A", price: 2680, status: "RAC 4" }, { code: "1A", price: 4520, status: "WL 2" } ] },
];

export const packages = [
  { id: "sabarimala-weekend", name: "Sabarimala Weekend Yathra", duration: "2 Nights / 3 Days", start: "Chennai", transport: "AC Volvo Coach", stay: "Pamba Guest House", price: 6900, rating: 4.7, reviews: 312, image: templeSabarimala, short: "A compact weekend Yathra for working devotees, with guided darshan and return by Sunday night." },
  { id: "chennai-sabarimala", name: "Chennai → Sabarimala Classic Yathra", duration: "3 Nights / 4 Days", start: "Chennai", transport: "Train + Coach", stay: "Kottayam Hotel + Pamba Lodge", price: 9450, rating: 4.8, reviews: 528, image: img.pilgrims, short: "The classic route with a Kottayam night halt, Pamba dip, guided trek and Pathinettam Padi darshan." },
  { id: "family-pilgrimage", name: "Family Pilgrimage Yathra", duration: "4 Nights / 5 Days", start: "Bengaluru", transport: "Tempo Traveller", stay: "Family Rooms", price: 12800, rating: 4.6, reviews: 187, image: img.stay, short: "Comfort-first itinerary with family rooms, slower trek pace and temple visits around Pathanamthitta." },
  { id: "group-yathra", name: "Guru Swami Group Yathra", duration: "5 Nights / 6 Days", start: "Coimbatore", transport: "Two AC Coaches", stay: "Group Dormitory", price: 8200, rating: 4.9, reviews: 764, image: img.lamp, short: "Travel with a 40-member Guru Swami led group, daily bhajans and collective Neyyabhishekam." },
  { id: "custom-yathra", name: "Custom Yathra Planner", duration: "Flexible", start: "Any city", transport: "Your choice", stay: "Your choice", price: 4500, rating: 4.5, reviews: 96, image: img.road, short: "Build your own Yathra — pick departure city, travel mode, stay class and darshan dates." },
];

export const temples = [
  { id: "sabarimala", name: "Sabarimala Ayyappa Temple", location: "Pathanamthitta, Kerala", image: templeSabarimala, short: "The hill shrine of Lord Ayyappa, reached after the sacred 18 steps.", category: "Main" },
  { id: "pamba", name: "Pamba Ganapathi Temple", location: "Pamba, Kerala", image: templePamba, short: "First darshan after the holy dip in the Pamba river.", category: "Main" },
  { id: "sannidhanam", name: "Sannidhanam", location: "Sabarimala Hill", image: templeSannidhanam, short: "The sanctum complex with Pathinettam Padi, Malikappuram and Bhasmakulam.", category: "Main" },
  { id: "erumeli", name: "Erumeli Sastha Temple", location: "Erumeli, Kottayam", image: templeNearby, short: "Where devotees perform Petta Thullal before the traditional forest route.", category: "Important" },
  { id: "pandalam", name: "Pandalam Valiyakoikkal Temple", location: "Pandalam, Pathanamthitta", image: img.lamp, short: "The palace temple of Ayyappa's earthly home, source of the Thiruvabharanam procession.", category: "Important" },
  { id: "malikappuram", name: "Malikappuram Devi Temple", location: "Sannidhanam", image: img.prepare, short: "Adjacent shrine visited immediately after Ayyappa darshan.", category: "Important" },
  { id: "aryankavu", name: "Aryankavu Sastha Temple", location: "Kollam", image: img.cta, short: "One of the five ancient Sastha temples on the pilgrimage circuit.", category: "Nearby" },
  { id: "achankovil", name: "Achankovil Sastha Temple", location: "Kollam", image: templeNearby, short: "Forest shrine known for its Sastha with consort, on the eastern circuit.", category: "Nearby" },
];

export const nearbyTemples = [
  { id: "ayyappa-local", name: "Sri Ayyappa Temple", distance: "2.4 km", area: "Anna Nagar, Chennai", image: templeNearby },
  { id: "shiva-local", name: "Sri Kapaleeshwarar Shiva Temple", distance: "3.8 km", area: "Mylapore, Chennai", image: img.lamp },
  { id: "devi-local", name: "Sri Karumariamman Devi Temple", distance: "5.1 km", area: "Thiruverkadu", image: img.prepare },
  { id: "ganapathy-local", name: "Sri Varasiddhi Vinayagar Temple", distance: "6.2 km", area: "Besant Nagar", image: templePamba },
];

export const checkpoints = [
  { id: "erumeli", name: "Erumeli", distance: "0 km", desc: "Traditional starting point of the forest route where devotees perform Petta Thullal.", facilities: ["Rest Halls", "Drinking Water", "Toilets", "Medical Camp"], safety: "Travel in groups; forest route opens only in season." },
  { id: "nilackal", name: "Nilackal Base Camp", distance: "48 km", desc: "Main vehicle parking base with shuttle services to Pamba.", facilities: ["Parking", "Shuttle Buses", "Canteen", "Police Aid Post"], safety: "Note your parking bay number and shuttle timings." },
  { id: "pamba", name: "Pamba", distance: "62 km", desc: "River bathing ghat, Ganapathi temple and the start of the trek.", facilities: ["Bathing Ghats", "Cloak Room", "Annadanam", "Hospital"], safety: "Stay within marked bathing zones; the current can be strong." },
  { id: "neelimala", name: "Neelimala", distance: "63.5 km", desc: "The steepest early climb from Pamba, with resting sheds along the path.", facilities: ["Rest Sheds", "Oxygen Parlour", "Water Points"], safety: "Climb slowly; elderly devotees should rest every 100 metres." },
  { id: "appachimedu", name: "Appachimedu", distance: "64.8 km", desc: "Level clearing after the first climb, a popular resting point.", facilities: ["Rest Area", "Tea Stalls", "Toilets"], safety: "Keep the path clear for the Irumudi procession." },
  { id: "sharamkuthi", name: "Sharam Kuthi", distance: "66 km", desc: "Where first-time pilgrims place the sacred arrow before the final approach.", facilities: ["Shade", "Water", "Volunteer Help Desk"], safety: "Crowd density is highest here in season." },
  { id: "sannidhanam", name: "Sannidhanam", distance: "67 km", desc: "The temple complex with the sacred 18 steps and Neyyabhishekam counters.", facilities: ["Queue Complex", "Annadanam", "Hospital", "Cloak Room"], safety: "Follow queue marshals; do not carry valuables." },
];

export const accommodations = [
  { id: "pamba-heritage", name: "Pamba Heritage Residency", type: "Hotel", rating: 4.6, reviews: 412, distance: "0.9 km from Pamba", price: 3200, image: stayImg, amenities: ["Hot Water", "Restaurant", "Parking", "Locker", "Doctor on Call"], rooms: ["Deluxe Double", "Family Room", "Executive Suite"] },
  { id: "nilackal-lodge", name: "Nilackal Devotees Lodge", type: "Lodge", rating: 4.1, reviews: 268, distance: "1.4 km from Nilackal", price: 1450, image: img.prepare, amenities: ["Hot Water", "Parking", "Canteen"], rooms: ["Standard Twin", "Four-Bed Room"] },
  { id: "pathanamthitta-guest", name: "Sastha Guest House", type: "Guest House", rating: 4.3, reviews: 155, distance: "12 km from Pamba", price: 1900, image: img.stay, amenities: ["Hot Water", "Breakfast", "Parking", "Prayer Room"], rooms: ["Double Room", "Triple Room"] },
  { id: "sannidhanam-dorm", name: "Sannidhanam Devaswom Dormitory", type: "Dormitory", rating: 3.9, reviews: 980, distance: "0.2 km from Sannidhanam", price: 350, image: img.lamp, amenities: ["Blankets", "Cloak Room", "Common Bath"], rooms: ["Dorm Bed", "Family Dorm Section"] },
  { id: "erumeli-rest", name: "Erumeli Pilgrim Rest Area", type: "Rest Area", rating: 4.0, reviews: 340, distance: "48 km from Pamba", price: 250, image: img.road, amenities: ["Mats", "Drinking Water", "Toilets"], rooms: ["Hall Space"] },
  { id: "kottayam-grand", name: "Kottayam Grand Yathra Hotel", type: "Hotel", rating: 4.7, reviews: 726, distance: "88 km from Pamba", price: 4100, image: img.cta, amenities: ["AC", "Restaurant", "Laundry", "Airport Pickup", "Locker"], rooms: ["Superior Room", "Family Suite"] },
];

export const videos = [
  { id: "vratham-start", title: "How to Begin the 41-Day Vratham", duration: "8:24", category: "Vratham", thumb: vrathamImg, desc: "Guru Swami explains Sankalpam, mala wearing and the discipline of the first week." },
  { id: "daily-routine", title: "A Day in Vratham — Morning to Night", duration: "12:05", category: "Vratham", thumb: lamp, desc: "The complete daily routine with pooja timings, food and Saranam chanting." },
  { id: "travel-guide", title: "Chennai to Pamba — Complete Travel Guide", duration: "15:40", category: "Travel", thumb: roadImg, desc: "Train, bus and car options with boarding points, halts and timings." },
  { id: "pamba-guide", title: "Pamba — Bathing, Ganapathi Pooja & Trek Start", duration: "9:12", category: "Travel", thumb: templePamba, desc: "What to do the moment you reach Pamba, step by step." },
  { id: "temple-darshan", title: "Pathinettam Padi & Darshan Guidance", duration: "11:38", category: "Temple", thumb: templeSannidhanam, desc: "How the 18 steps are climbed with the Irumudi and what follows darshan." },
  { id: "sannidhanam-tour", title: "Inside Sannidhanam — A Visual Tour", duration: "14:02", category: "Temple", thumb: templeSabarimala, desc: "Malikappuram, Bhasmakulam, Neyyabhishekam counters and the queue complex." },
  { id: "harivarasanam", title: "Harivarasanam — Evening Lullaby", duration: "6:18", category: "Devotional", thumb: img.cta, desc: "The closing hymn sung before the sanctum doors are shut each night." },
  { id: "saranam-vili", title: "Saranam Vili — Learn the Chants", duration: "10:44", category: "Devotional", thumb: prepare, desc: "Common Saranam calls with meaning, in Tamil, Malayalam and English." },
  { id: "trek-safety", title: "Trek Safety for Elderly Devotees", duration: "7:56", category: "Safety", thumb: pilgrims, desc: "Pacing, hydration, oxygen parlours and when to seek medical help." },
  { id: "emergency-help", title: "Emergency Help on the Yathra", duration: "5:30", category: "Safety", thumb: returnHome, desc: "Police aid posts, ambulance points and how to reunite with your group." },
];

export const foods = [
  { id: "kanji", name: "Rice Kanji with Payar", category: "Recommended Foods", image: foodImg, desc: "Light rice gruel with green gram — the traditional Vratham staple, easy to digest." },
  { id: "aval", name: "Aval & Malar", category: "Travel Food", image: img.prepare, desc: "Flattened rice and puffed rice with jaggery, carried in the Irumudi and eaten on the trek." },
  { id: "fruits", name: "Seasonal Fruits", category: "Fasting Food", image: img.stay, desc: "Banana, guava and papaya keep energy steady during fasting days." },
  { id: "buttermilk", name: "Sambharam Buttermilk", category: "Hydration", image: img.lamp, desc: "Spiced buttermilk with ginger and curry leaves, ideal in Kerala humidity." },
  { id: "annadanam", name: "Annadanam Sadya", category: "Traditional Guidance", image: img.food, desc: "The free community meal served at Pamba and Sannidhanam — accept it with gratitude." },
  { id: "tender-coconut", name: "Tender Coconut Water", category: "Hydration", image: img.pilgrims, desc: "Available at every rest point on the trek; natural and refreshing." },
  { id: "avoid-nonveg", name: "Non-Vegetarian Food", category: "Foods to Avoid", image: img.road, desc: "Avoided completely through the Vratham period as part of the discipline." },
  { id: "avoid-fried", name: "Heavy Fried & Spicy Food", category: "Foods to Avoid", image: img.returnHome, desc: "Best avoided before the trek — keep meals light on climbing days." },
];

export const notifications = [
  { id: "n1", category: "Reminders", title: "Vratham Day 11 begins tomorrow", body: "Wake before 4:30 AM for the morning bath and Deepa Aradhana.", time: "12 min ago", unread: true },
  { id: "n2", category: "Travel Alerts", title: "Bus departure in 3 days", body: "Sabari Travels, Koyambedu CMBT, 18:30 on 15 November.", time: "1 hour ago", unread: true },
  { id: "n3", category: "Weather Alerts", title: "Rain expected at Pamba", body: "70% chance of showers on 16 November. Carry a poncho.", time: "3 hours ago", unread: true },
  { id: "n4", category: "Voice Alerts", title: "Voice summary ready", body: "Your daily Vratham guidance is available in Tamil.", time: "Yesterday", unread: false },
  { id: "n5", category: "Announcements", title: "Mandala season dates announced", body: "The temple opens for Mandala pooja from 16 November.", time: "2 days ago", unread: false },
  { id: "n6", category: "Alerts", title: "Packing checklist incomplete", body: "7 items still pending in your Yathra checklist.", time: "3 days ago", unread: false },
];

export const communityPosts = [
  { id: "p1", user: "Guru Swami Venkatesan", time: "35 min ago", content: "Our group of 42 devotees completes Day 10 of Vratham today. Bhajan at the Anna Nagar hall this Saturday, 6 PM. Swamiye Saranam Ayyappa.", likes: 128, comments: 24 },
  { id: "p2", user: "Suresh Babu", time: "2 hours ago", content: "First time carrying the Irumudi this year. Any advice on the Neelimala climb for someone with knee pain?", likes: 46, comments: 31 },
  { id: "p3", user: "Karthik Raman", time: "5 hours ago", content: "Booked the Chennai → Kottayam train for 15 Nov. Two seats still free in our group of 8 if anyone is travelling alone.", likes: 72, comments: 12 },
  { id: "p4", user: "Ananth Krishnan", time: "Yesterday", content: "Reached Sannidhanam at 4 AM. Darshan took 40 minutes — early morning is far calmer this week.", likes: 214, comments: 58 },
];

export const groups = [
  { id: "chennai-42", name: "Chennai Ayyappa Sangam", members: 42, desc: "Guru Swami led group from Anna Nagar travelling on 15 November.", journey: "Chennai → Kottayam → Pamba → Sannidhanam" },
  { id: "bengaluru-18", name: "Bengaluru Saranam Group", members: 18, desc: "Software professionals observing Vratham together since 2019.", journey: "Bengaluru → Kottayam → Pamba" },
  { id: "family-yathra", name: "Kumar Family Yathra", members: 6, desc: "Family group sharing live journey status with elders at home.", journey: "Chennai → Nilackal → Pamba" },
];

export const weather = [
  { place: "Home — Chennai", temp: 31, condition: "Partly Cloudy", rain: 20, humidity: 68, wind: 12, warning: "" },
  { place: "Pamba", temp: 26, condition: "Light Showers", rain: 70, humidity: 84, wind: 8, warning: "Slippery paths near the bathing ghats." },
  { place: "Sabarimala", temp: 24, condition: "Clear", rain: 15, humidity: 76, wind: 10, warning: "Night temperature drops to 17°C — carry a blanket." },
];

export const emergencyContacts = [
  { label: "Police Control Room", number: "100", note: "Sabarimala Police Aid Post available 24×7" },
  { label: "Ambulance", number: "108", note: "Free ambulance service across Kerala" },
  { label: "Sannidhanam Hospital", number: "+91 4735 202 016", note: "Government hospital at Sannidhanam" },
  { label: "Fire & Rescue", number: "101", note: "Nilackal and Pamba fire stations" },
  { label: "Devaswom Help Desk", number: "+91 4735 203 022", note: "Lost pilgrims and Irumudi assistance" },
  { label: "Family — Lakshmi Kumar", number: "+91 99620 41188", note: "Primary emergency contact" },
];

export const familyContacts = [
  { name: "Lakshmi Kumar", relation: "Wife", phone: "+91 99620 41188", sharing: true },
  { name: "Arjun Kumar", relation: "Son", phone: "+91 90031 77420", sharing: true },
  { name: "Guru Swami Venkatesan", relation: "Guru Swami", phone: "+91 98842 10093", sharing: true },
  { name: "Meena Raghavan", relation: "Sister", phone: "+91 94441 66512", sharing: false },
];

export const bookings = [
  { id: "AYY123456789", type: "Bus", journey: "Chennai → Pamba", date: "15 Nov 2026, 18:30", amount: 2900, status: "Upcoming", detail: "Sabari Travels · Seats L3, L4" },
  { id: "AYY123455120", type: "Package", journey: "Chennai → Sabarimala Classic Yathra", date: "15–18 Nov 2026", amount: 9450, status: "Upcoming", detail: "2 devotees · Kottayam halt" },
  { id: "AYY123441007", type: "Accommodation", journey: "Pamba Heritage Residency", date: "16–17 Nov 2026", amount: 3200, status: "Upcoming", detail: "Deluxe Double · 1 room" },
  { id: "AYY122998341", type: "Train", journey: "Chennai → Kottayam", date: "18 Dec 2025", amount: 2770, status: "Completed", detail: "12695 · 3A · Berths 21, 22" },
  { id: "AYY122871190", type: "Bus", journey: "Chennai → Nilackal", date: "05 Jan 2025", amount: 1180, status: "Cancelled", detail: "Refund processed" },
];

export const journeyHistory = [
  { year: "2025", title: "Mandala Yathra 2025", route: "Chennai → Erumeli → Pamba → Sannidhanam", days: "4 days", note: "Petta Thullal performed at Erumeli" },
  { year: "2024", title: "Makaravilakku Yathra 2024", route: "Chennai → Nilackal → Pamba → Sannidhanam", days: "5 days", note: "Witnessed Makara Jyothi" },
  { year: "2023", title: "First Yathra", route: "Chennai → Kottayam → Pamba → Sannidhanam", days: "4 days", note: "Kanni Swami — arrow placed at Sharam Kuthi" },
];

export const journeyPlan = [
  { day: "Day 1", title: "Chennai → Kerala", transport: "Sabari Travels AC Sleeper, 18:30 from CMBT", stay: "Overnight in coach", food: "Dinner halt at Villupuram, 21:15", temples: "Sankalpam at home shrine", checkpoints: ["Koyambedu CMBT", "Villupuram Halt", "Salem Bypass"], activities: ["Irumudi kettu final check", "Saranam Vili in coach"] },
  { day: "Day 2", title: "Kerala → Pamba", transport: "Coach to Nilackal, shuttle to Pamba", stay: "Pamba Heritage Residency", food: "Annadanam at Pamba, 13:00", temples: "Pamba Ganapathi Temple", checkpoints: ["Erumeli", "Nilackal Base Camp", "Pamba"], activities: ["Holy dip in Pamba river", "Evening bhajan"] },
  { day: "Day 3", title: "Pamba → Sannidhanam", transport: "Trek 5 km via Neelimala", stay: "Devaswom Dormitory", food: "Light breakfast, Annadanam lunch", temples: "Pathinettam Padi, Malikappuram", checkpoints: ["Neelimala", "Appachimedu", "Sharam Kuthi", "Sannidhanam"], activities: ["Neyyabhishekam", "Harivarasanam at night"] },
  { day: "Day 4", title: "Darshan & Return", transport: "Trek down, coach from Nilackal", stay: "Overnight in coach", food: "Breakfast at Sannidhanam", temples: "Final darshan, Bhasmakulam", checkpoints: ["Sannidhanam", "Pamba", "Nilackal", "Chennai"], activities: ["Prasadam collection", "Mala removal at home"] },
];

export const offlineItems = [
  { name: "Vratham daily routine", size: "2.4 MB", state: "Downloaded" },
  { name: "Yathra packing checklist", size: "0.8 MB", state: "Downloaded" },
  { name: "Chennai → Pamba route map", size: "14.2 MB", state: "Downloaded" },
  { name: "Temple guide — Sabarimala & Pamba", size: "18.6 MB", state: "Downloaded" },
  { name: "Saranam Vili audio pack", size: "26.0 MB", state: "Not Downloaded" },
  { name: "Emergency contacts card", size: "0.3 MB", state: "Downloaded" },
  { name: "Video — Pathinettam Padi guidance", size: "112 MB", state: "Not Downloaded" },
  { name: "Food guidance booklet", size: "3.1 MB", state: "Not Downloaded" },
];

export const passengersSeed = [
  { name: "Ramesh Kumar", age: 42, gender: "Male", mobile: "+91 98407 55210", email: "ramesh.kumar@example.com", idType: "Aadhaar", idNumber: "XXXX XXXX 4410", seat: "Lower Berth" },
  { name: "Arjun Kumar", age: 19, gender: "Male", mobile: "+91 90031 77420", email: "arjun.k@example.com", idType: "Voter ID", idNumber: "TNX2210934", seat: "Upper Berth" },
];

export const searchSuggestions = {
  recent: ["Pamba bathing timings", "Chennai to Kottayam train", "Vratham food", "Sannidhanam dormitory"],
  popular: ["Pathinettam Padi darshan", "Bus from Koyambedu", "Neyyabhishekam", "Nilackal parking", "Weekend Yathra package"],
};
