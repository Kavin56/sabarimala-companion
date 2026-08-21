import templeSabarimala from "@/assets/temple-sabarimala.jpg";
import templePamba from "@/assets/temple-pamba.jpg";
import templeSannidhanam from "@/assets/temple-sannidhanam.jpg";
import templeNearby from "@/assets/temple-nearby.jpg";
import foodGuide from "@/assets/food-guide.jpg";
import accommodationImg from "@/assets/accommodation.jpg";
import travelRoad from "@/assets/travel-road.jpg";
import vrathamImg from "@/assets/vratham.jpg";
import lampGlow from "@/assets/lamp-glow.jpg";
import pilgrimsRoute from "@/assets/pilgrims-route.jpg";
import prepareHome from "@/assets/prepare-home.jpg";
import returnHome from "@/assets/return-home.jpg";
import heroSabarimala from "@/assets/hero-sabarimala.jpg";

export const images = {
  templeSabarimala,
  templePamba,
  templeSannidhanam,
  templeNearby,
  foodGuide,
  accommodationImg,
  travelRoad,
  vrathamImg,
  lampGlow,
  pilgrimsRoute,
  prepareHome,
  returnHome,
  heroSabarimala,
};

export const mockUser = {
  name: "Ramesh",
  fullName: "Ramesh Kumar",
  mobile: "+91 98765 43210",
  email: "ramesh@example.com",
  language: "English",
  yathraDate: "15 November 2026",
  daysUntil: 41,
};

export const mockVratham = {
  day: 10,
  total: 41,
  remaining: 31,
  slots: [
    { label: "Morning", done: true },
    { label: "Afternoon", done: true },
    { label: "Evening", done: true },
    { label: "Night", done: false },
  ],
  quickLinks: [
    { title: "How to Start Vratham", text: "Mala dharanam, sankalpam and first-day guidance." },
    { title: "Daily Routine", text: "Bathing, prayers, pooja and discipline for each day." },
    { title: "Do's & Don'ts", text: "Conduct, dress, speech and habits during Vratham." },
    { title: "Day Tracker", text: "Mark each day and follow your 41-day progress." },
    { title: "Prayer Guide", text: "Sharanam chants, ashtothram and daily bhajans." },
    { title: "Food Guidance", text: "Simple sattvic meals suggested during Vratham." },
    { title: "Mala Guide", text: "Care, meaning and removal of the sacred mala." },
  ],
};

export const journeyStages = [
  { name: "Home", status: "done" },
  { name: "Preparation", status: "done" },
  { name: "Vratham", status: "current" },
  { name: "Packing", status: "upcoming" },
  { name: "Travel", status: "upcoming" },
  { name: "Pamba", status: "upcoming" },
  { name: "Pilgrimage Route", status: "upcoming" },
  { name: "Sannidhanam", status: "upcoming" },
  { name: "Return", status: "upcoming" },
  { name: "Home", status: "upcoming" },
] as const;

export const mockJourney = {
  progress: 60,
  steps: [
    { name: "Preparation", state: "Completed" },
    { name: "Vratham", state: "Completed" },
    { name: "Packing", state: "Completed" },
    { name: "Travel", state: "In Progress" },
    { name: "Pamba", state: "Upcoming" },
    { name: "Temple Darshan", state: "Pending" },
    { name: "Return", state: "Pending" },
  ],
};

export const mockJourneyPlan = [
  {
    day: "Day 1",
    title: "Chennai → Kerala",
    stops: [
      { time: "05:00", text: "Depart Chennai after morning prayers" },
      { time: "12:30", text: "Lunch halt at Salem" },
      { time: "20:00", text: "Overnight rest near Palakkad" },
    ],
  },
  {
    day: "Day 2",
    title: "Kerala → Pamba",
    stops: [
      { time: "06:00", text: "Travel via Kottayam" },
      { time: "14:00", text: "Reach Erumeli, Petta Thullal" },
      { time: "19:00", text: "Arrive Pamba, rest and Pamba snanam" },
    ],
  },
  {
    day: "Day 3",
    title: "Pamba → Sannidhanam",
    stops: [
      { time: "04:30", text: "Irumudi kettu and begin trek" },
      { time: "08:00", text: "Neelimala and Appachimedu" },
      { time: "12:00", text: "Reach Sannidhanam" },
    ],
  },
  {
    day: "Day 4",
    title: "Darshan & Return",
    stops: [
      { time: "04:00", text: "Nirmalya darshanam" },
      { time: "09:00", text: "Aravana prasadam, descend to Pamba" },
      { time: "18:00", text: "Begin safe return home" },
    ],
  },
];

export const trekRoute = [
  { name: "Pamba", km: "0.0 km", note: "Holy river bath and irumudi kettu" },
  { name: "Neelimala", km: "1.5 km", note: "Steep first climb" },
  { name: "Appachimedu", km: "4.2 km", note: "Rest point with water" },
  { name: "Sabaripeedam", km: "9.8 km", note: "Sacred halt of Sabari" },
  { name: "Sannidhanam", km: "16.6 km", note: "Pathinettam padi darshan" },
];

export const mockTemples = [
  {
    name: "Sabarimala",
    location: "Pathanamthitta, Kerala",
    image: templeSabarimala,
    text: "The hill shrine of Lord Ayyappa, reached after the sacred forest trek.",
    darshan: "Daily 4:00 AM – 11:00 PM (Mandala season)",
    guidelines: "Irumudi kettu required, black or blue dress, 41-day Vratham advised.",
  },
  {
    name: "Pamba",
    location: "Pamba River, Kerala",
    image: templePamba,
    text: "Pilgrims take the holy bath and start the trek from Pamba.",
    darshan: "Open all day",
    guidelines: "Keep the ghats clean, avoid deep water, mind your belongings.",
  },
  {
    name: "Sannidhanam",
    location: "Sabarimala Hill Top",
    image: templeSannidhanam,
    text: "The temple complex with the eighteen holy steps and flag mast.",
    darshan: "Nirmalya darshanam 4:00 AM, Harivarasanam 11:00 PM",
    guidelines: "Follow queue discipline, no photography inside the sanctum.",
  },
  {
    name: "Important Places",
    location: "Erumeli, Nilackal, Sabaripeedam",
    image: templeNearby,
    text: "Sacred halts along the traditional route to the hill shrine.",
    darshan: "Varies by shrine",
    guidelines: "Respect local customs and rituals at each halt.",
  },
];

export const mockNearbyTemples = [
  { name: "Ayyappa Temple", distance: "2.4 km", place: "Pamba Road" },
  { name: "Shiva Temple", distance: "3.8 km", place: "Ranni" },
  { name: "Devi Temple", distance: "5.1 km", place: "Nilackal" },
  { name: "Ganapathy Temple", distance: "6.2 km", place: "Erumeli" },
];

export const mockFood = [
  { title: "Recommended Foods", text: "Simple sattvic rice, vegetables, fruits and buttermilk.", image: foodGuide },
  { title: "Foods to Avoid", text: "Onion, garlic, non-vegetarian food and intoxicants during Vratham.", image: vrathamImg },
  { title: "Travel Food", text: "Easy-to-carry items that stay fresh on the long journey.", image: travelRoad },
  { title: "Fasting Food", text: "Light meals and fluids that suit fasting days.", image: lampGlow },
  { title: "Tips & Guidance", text: "Eat on time, stay hydrated and keep meals light before the trek.", image: prepareHome },
];

export const mockAccommodation = [
  { name: "Hotel Sannidhanam", distance: "2.3 km", type: "Hotel", place: "Sannidhanam", image: accommodationImg },
  { name: "Pamba Lodge", distance: "1.8 km", type: "Lodge", place: "Pamba", image: templePamba },
  { name: "Devaswom Dormitory", distance: "0.5 km", type: "Dormitory", place: "Nilackal", image: returnHome },
  { name: "Rest House", distance: "3.6 km", type: "Rest House", place: "Erumeli", image: prepareHome },
];

export const videoCategories = ["All", "Vratham", "Travel", "Temple", "Devotional", "Safety"] as const;

export const mockVideos = [
  { title: "Vratham Preparation Guide", category: "Vratham", duration: "7:50", image: vrathamImg },
  { title: "Mala Dharanam Explained", category: "Vratham", duration: "5:12", image: lampGlow },
  { title: "Chennai to Sabarimala Route", category: "Travel", duration: "12:04", image: travelRoad },
  { title: "Pamba to Sannidhanam Trek", category: "Travel", duration: "15:30", image: pilgrimsRoute },
  { title: "Inside Sannidhanam", category: "Temple", duration: "9:41", image: templeSannidhanam },
  { title: "Pathinettam Padi Darshan", category: "Temple", duration: "6:18", image: templeSabarimala },
  { title: "Harivarasanam Full Chant", category: "Devotional", duration: "8:22", image: heroSabarimala },
  { title: "Sharanam Bhajans", category: "Devotional", duration: "22:10", image: templePamba },
  { title: "Trek Safety for Elders", category: "Safety", duration: "4:35", image: returnHome },
  { title: "Emergency Help on the Route", category: "Safety", duration: "3:58", image: templeNearby },
];

export const mockNotifications = [
  { icon: "reminder", title: "Vratham Day Reminder", text: "Complete your evening routine.", time: "2 hours ago", category: "Reminders" },
  { icon: "alert", title: "Travel Alert", text: "Your planned departure is approaching.", time: "Yesterday", category: "Alerts" },
  { icon: "voice", title: "Voice Guidance Ready", text: "Today's guidance is available in Tamil.", time: "Yesterday", category: "Voice Alerts" },
  { icon: "announcement", title: "Special Pooja", text: "Padi Pooja at Sannidhanam this Saturday.", time: "2 days ago", category: "Announcements" },
  { icon: "reminder", title: "Packing Checklist", text: "Prepare your irumudi kettu items.", time: "3 days ago", category: "Reminders" },
  { icon: "alert", title: "Weather Warning", text: "Heavy rain expected near Pamba.", time: "4 days ago", category: "Alerts" },
];

export const mockCommunityGroups = [
  { name: "Chennai Ayyappa Sangam", members: 128, note: "Departing 15 Nov" },
  { name: "Guruswamy Guidance", members: 64, note: "Vratham doubts" },
  { name: "Kerala Trek Group", members: 212, note: "Pamba meetup" },
];

export const mockCommunityPosts = [
  { author: "Guruswamy Mohan", time: "1 h", text: "Mala dharanam for our group is at 6 AM tomorrow. Swamiye Saranam Ayyappa.", tag: "Announcement" },
  { author: "Suresh K", time: "3 h", text: "Completed Vratham day 10 today. Feeling blessed and light.", tag: "Journey update" },
  { author: "Anitha R", time: "6 h", text: "Sharing the Harivarasanam lyrics for our evening bhajan.", tag: "Devotional" },
];

export const mockChat = [
  { from: "Guruswamy", text: "Reach Pamba before 6 PM.", mine: false },
  { from: "You", text: "Swamiye Saranam Ayyappa. We will start at 5 AM.", mine: true },
  { from: "Suresh", text: "Our bus is booked for 12 pilgrims.", mine: false },
  { from: "You", text: "Please carry raincoats for the trek.", mine: true },
];

export const mockWeather = [
  { place: "Home", temp: 31, condition: "Sunny", rain: 10, humidity: 62, wind: 8, warning: "" },
  { place: "Pamba", temp: 26, condition: "Light Showers", rain: 65, humidity: 84, wind: 12, warning: "Slippery ghats — walk carefully near the river." },
  { place: "Sabarimala", temp: 24, condition: "Misty", rain: 45, humidity: 88, wind: 15, warning: "Cold nights at Sannidhanam — carry warm cloth." },
];

export const mockEmergencyServices = [
  { name: "Police", number: "100" },
  { name: "Ambulance", number: "108" },
  { name: "Fire", number: "101" },
  { name: "Hospital", number: "Nearest Hospital" },
];

export const mockEmergencyContacts = [
  { name: "Lakshmi (Wife)", number: "+91 98765 11111" },
  { name: "Karthik (Son)", number: "+91 98765 22222" },
  { name: "Guruswamy Mohan", number: "+91 98765 33333" },
];

export const mockAdminStats = [
  { label: "Total Users", value: "12,458" },
  { label: "Active Users", value: "8,632" },
  { label: "Total Yatras", value: "14,275" },
  { label: "Total Journeys", value: "3,245" },
];

export const mockAdminActivity = [
  { month: "Jun", value: 42 },
  { month: "Jul", value: 55 },
  { month: "Aug", value: 61 },
  { month: "Sep", value: 74 },
  { month: "Oct", value: 88 },
  { month: "Nov", value: 96 },
];

export const mockUsers = [
  { name: "Ramesh Kumar", mobile: "+91 98765 43210", email: "ramesh@example.com", status: "Active" },
  { name: "Suresh Babu", mobile: "+91 98765 43211", email: "suresh@example.com", status: "Active" },
  { name: "Anitha R", mobile: "+91 98765 43212", email: "anitha@example.com", status: "Blocked" },
  { name: "Mohan Guruswamy", mobile: "+91 98765 43213", email: "mohan@example.com", status: "Active" },
  { name: "Vijay Anand", mobile: "+91 98765 43214", email: "vijay@example.com", status: "Active" },
  { name: "Priya S", mobile: "+91 98765 43215", email: "priya@example.com", status: "Blocked" },
];

export const mockAdminTemples = [
  { name: "Sabarimala", location: "Pathanamthitta", status: "Active", image: templeSabarimala },
  { name: "Pamba", location: "Pamba River", status: "Active", image: templePamba },
  { name: "Neelimala", location: "Trek Route", status: "Active", image: pilgrimsRoute },
  { name: "Appachimedu", location: "Trek Route", status: "Draft", image: templeNearby },
];

export const mockAdminRoutes = [
  { name: "Chennai to Sabarimala", distance: "742 km", status: "Active" },
  { name: "Bangalore to Sabarimala", distance: "628 km", status: "Active" },
  { name: "Thiruvananthapuram to Sabarimala", distance: "175 km", status: "Active" },
  { name: "Kochi to Sabarimala", distance: "158 km", status: "Draft" },
];

export const mockAdminNotifications = [
  { title: "Vratham Day Reminder", type: "Reminder", status: "Sent" },
  { title: "Departure Alert", type: "Alert", status: "Scheduled" },
  { title: "Padi Pooja Announcement", type: "Announcement", status: "Sent" },
  { title: "Heavy Rain at Pamba", type: "Weather Alert", status: "Draft" },
  { title: "Makaravilakku Special Pooja", type: "Special Pooja", status: "Scheduled" },
];

export const popularTemples = [
  { name: "Sannidhanam", visits: "9,842" },
  { name: "Pamba", visits: "8,120" },
  { name: "Erumeli", visits: "5,466" },
  { name: "Nilackal", visits: "3,908" },
];

export const languages = ["தமிழ்", "മലയാളം", "English"];
