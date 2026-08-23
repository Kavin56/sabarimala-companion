export interface Temple {
  id: string;
  name: string;
  location: string;
  distance: string;
  image: string;
  description: string;
  timings: string;
  services: string[];
  facilities: string[];
  directions: string;
  category: "sabarimala" | "pamba" | "sannidhanam" | "nearby";
  isFavorite?: boolean;
}

export interface BusItem {
  id: string;
  operator: string;
  type: string;
  departure: string;
  arrival: string;
  duration: string;
  from: string;
  to: string;
  boarding: string;
  dropping: string;
  rating: number;
  amenities: string[];
  seatsAvailable: number;
  price: number;
}

export interface TrainItem {
  id: string;
  number: string;
  name: string;
  departure: string;
  arrival: string;
  duration: string;
  from: string;
  to: string;
  classes: {
    code: string;
    name: string;
    price: number;
    availability: string;
    status: "AVAILABLE" | "RAC" | "WL";
  }[];
}

export interface PackageItem {
  id: string;
  name: string;
  subtitle: string;
  duration: string;
  startingPoint: string;
  transport: string;
  accommodation: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  itinerary: { day: number; title: string; desc: string }[];
  inclusions: string[];
  exclusions: string[];
}

export interface FoodItem {
  id: string;
  name: string;
  category: "recommended" | "travel" | "fasting" | "hydration" | "avoid";
  description: string;
  image: string;
  benefits: string[];
}

export interface AccommodationItem {
  id: string;
  name: string;
  type: "hotel" | "lodge" | "guesthouse" | "dormitory" | "rest_area";
  location: string;
  distance: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  amenities: string[];
  rooms: { type: string; price: number; capacity: string; available: boolean }[];
}

export interface VideoItem {
  id: string;
  title: string;
  category: "vratham" | "travel" | "temple" | "devotional" | "safety";
  duration: string;
  thumbnail: string;
  description: string;
  summary: string;
}

export interface CheckpointItem {
  id: string;
  name: string;
  distance: string;
  elevation: string;
  description: string;
  facilities: string[];
  safetyTips: string[];
  image: string;
}

export interface CommunityPost {
  id: string;
  author: string;
  avatar: string;
  time: string;
  group?: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "reminder" | "alert" | "weather" | "travel" | "announcement";
  read: boolean;
}

// ----------------------------------------------------
// MOCK DATASETS
// ----------------------------------------------------

export const MOCK_USER = {
  name: "Ramesh Kumar",
  title: "Ayyappa Bhakthan",
  mobile: "+91 98765 43210",
  email: "ramesh.k@example.com",
  dob: "1988-06-15",
  gender: "Male",
  location: "Chennai, Tamil Nadu",
  emergencyContact: "+91 94440 12345 (Wife - Lakshmi)",
  language: "Tamil",
  guruswamy: "Sri Sri Shabharish Guruji",
  vrathamStart: "2026-10-05",
  yathraDate: "2026-11-15",
  daysCompleted: 10,
  totalVrathamDays: 41,
  progressPercentage: 60,
};

export const MOCK_TEMPLES: Temple[] = [
  {
    id: "sabarimala-main",
    name: "Sabarimala Sree Dharma Sastha Temple",
    location: "Periyar Tiger Reserve, Pathanamthitta, Kerala",
    distance: "0 km (Destination)",
    image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80",
    description: "The ancient hilltop shrine dedicated to Lord Ayyappa, situated amidst 18 hills of the Western Ghats. Millions of devotees undertake the sacred 41-day Vratham to offer prayers at the 18 Holy Steps (Pathinettam Padi).",
    timings: "3:00 AM - 1:00 PM | 3:00 PM - 11:00 PM",
    services: ["Padi Pooja", "Neyyabhishekam", "Udayasthamana Pooja", "Appam & Payasam Prasadam"],
    facilities: ["Queue Complex", "Drinking Water Points", "Medical Centers", "Emergency Evacuation"],
    directions: "Ascend via Neeli Mala or Swami Ayyappan Road from Pamba.",
    category: "sannidhanam",
    isFavorite: true,
  },
  {
    id: "pamba-ganapathy",
    name: "Pamba Sree Maha Ganapathy Temple",
    location: "Pamba Foothills, Pathanamthitta",
    distance: "5 km from Sannidhanam",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    description: "Situated on the banks of the holy Pamba River. Pilgrims perform holy immersion in Pamba River, offer prayers here, and prepare their Irumudi Kettu before starting the trek.",
    timings: "4:00 AM - 10:00 PM",
    services: ["Ganapathy Homan", "Kettunira Assistance", "Pamba Pooja"],
    facilities: ["Bathing Ghats", "Cloak Rooms", "Kettunira Mandapam", "Safety Guards"],
    directions: "Accessible directly via vehicle parking at Pamba or Nilakkal bus service.",
    category: "pamba",
    isFavorite: true,
  },
  {
    id: "erumely-dharma-sastha",
    name: "Erumely Sree Dharma Sastha Temple & Vavar Mosque",
    location: "Erumely, Kottayam District",
    distance: "48 km from Pamba",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    description: "Famous for the historic Petta Thullal sacred dance ritual symbolizing the victory of Lord Ayyappa over Mahishi, celebrating communal harmony at Vavar Juma Masjid.",
    timings: "4:30 AM - 12:00 PM | 5:00 PM - 8:30 PM",
    services: ["Petta Thullal Guidance", "Chandanakkudam Ritual"],
    facilities: ["Resting Halls", "Parking", "Prasadam Stalls"],
    directions: "Located on the traditional Perur Thodu forest route.",
    category: "nearby",
  },
  {
    id: "chengannur-mahadeva",
    name: "Chengannur Mahadeva Temple",
    location: "Chengannur, Alappuzha District",
    distance: "90 km from Pamba",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "A major transit temple dedicated to Lord Shiva and Goddess Parvati, visited by train travelers alighting at Chengannur Station.",
    timings: "3:30 AM - 11:30 AM | 5:00 PM - 8:00 PM",
    services: ["Special Annadhanam", "Ayyappa Pilgrim Rest"],
    facilities: ["Pilgrim Lodge", "Free Meal Hall", "Bathing Tanks"],
    directions: "2 km from Chengannur Railway Station.",
    category: "nearby",
  },
];

export const MOCK_BUSES: BusItem[] = [
  {
    id: "bus-1",
    operator: "KSRTC Swift Super Fast",
    type: "AC Multi-Axle Volvo Sleeper",
    departure: "20:30 (Day 1)",
    arrival: "06:00 (Day 2)",
    duration: "9h 30m",
    from: "Chennai Koyambedu",
    to: "Pamba / Nilakkal",
    boarding: "Koyambedu BS (20:30), Tambaram (21:15)",
    dropping: "Nilakkal KSRTC Bus Station (06:00)",
    rating: 4.8,
    amenities: ["Water Bottle", "Blanket", "Charging Point", "Live Tracking", "Emergency SOS"],
    seatsAvailable: 14,
    price: 1250,
  },
  {
    id: "bus-2",
    operator: "KSRTC Ayyappa Special Express",
    type: "Non-AC Push Back Seater",
    departure: "21:15 (Day 1)",
    arrival: "07:30 (Day 2)",
    duration: "10h 15m",
    from: "Chennai Koyambedu",
    to: "Pamba",
    boarding: "Koyambedu (21:15)",
    dropping: "Pamba Bus Stand (07:30)",
    rating: 4.5,
    amenities: ["Charging Point", "Reading Light", "Devotional Audio"],
    seatsAvailable: 22,
    price: 780,
  },
  {
    id: "bus-3",
    operator: "Sabari Travels Deluxe",
    type: "AC Seater / Sleeper 2+1",
    departure: "19:00 (Day 1)",
    arrival: "05:15 (Day 2)",
    duration: "10h 15m",
    from: "Bangalore Majestic",
    to: "Pamba",
    boarding: "Majestic (19:00), Electronic City (19:45)",
    dropping: "Pamba Stand (05:15)",
    rating: 4.7,
    amenities: ["Air Suspension", "Pillow", "Clean Linens", "GPS"],
    seatsAvailable: 8,
    price: 1450,
  },
];

export const MOCK_TRAINS: TrainItem[] = [
  {
    id: "train-1",
    number: "12695",
    name: "Chennai Central - Trivandrum SF Express",
    departure: "15:20 (MAS)",
    arrival: "03:15 (CNGR - Chengannur)",
    duration: "11h 55m",
    from: "Chennai Central (MAS)",
    to: "Chengannur (CNGR)",
    classes: [
      { code: "SL", name: "Sleeper", price: 415, availability: "AVAILABLE - 42", status: "AVAILABLE" },
      { code: "3A", name: "3 Tier AC", price: 1110, availability: "AVAILABLE - 18", status: "AVAILABLE" },
      { code: "2A", name: "2 Tier AC", price: 1580, availability: "RAC 4", status: "RAC" },
      { code: "1A", name: "1st AC Class", price: 2650, availability: "WL 2", status: "WL" },
    ],
  },
  {
    id: "train-2",
    number: "16344",
    name: "Amrita Express",
    departure: "19:15 (SBC)",
    arrival: "06:40 (KTYM - Kottayam)",
    duration: "11h 25m",
    from: "Bangalore (SBC)",
    to: "Kottayam (KTYM)",
    classes: [
      { code: "SL", name: "Sleeper", price: 395, availability: "AVAILABLE - 65", status: "AVAILABLE" },
      { code: "3A", name: "3 Tier AC", price: 1040, availability: "AVAILABLE - 12", status: "AVAILABLE" },
      { code: "2A", name: "2 Tier AC", price: 1490, availability: "AVAILABLE - 04", status: "AVAILABLE" },
    ],
  },
];

export const MOCK_PACKAGES: PackageItem[] = [
  {
    id: "pkg-1",
    name: "Sabarimala Weekend Sacred Yathra",
    subtitle: "Complete Guided Pilgrimage with Guruswamy Support",
    duration: "3 Days / 2 Nights",
    startingPoint: "Chennai / Bangalore / Kochi",
    transport: "AC Bus Transit + Nilakkal Shuttle",
    accommodation: "Pre-booked Cottage at Pamba & Sannidhanam",
    price: 4999,
    rating: 4.9,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    description: "Hassle-free Sabarimala pilgrimage designed for devotees. Includes Kettunira assistance, VIP queue pass arrangement guidance, clean vegetarian meals, and experienced Guruswamy escort.",
    itinerary: [
      { day: 1, title: "Departure & Journey", desc: "Night bus departure from origin city with devotional songs and Satsang onboard." },
      { day: 2, title: "Pamba Immersions & Trek", desc: "Arrive at Pamba, holy dip in river, Kettunira ritual, ascend Neeli Mala to Sannidhanam." },
      { day: 3, title: "Sannidhanam Darshan & Return", desc: "18 Holy Steps ascent, Neyyabhishekam, return descent to Pamba and evening return journey." },
    ],
    inclusions: ["All AC Transport", "2 Night Stay", "Satvik Pure Veg Meals", "Guruswamy Guide", "Emergency Medical Shield"],
    exclusions: ["Personal offerings", "Special pooja tickets"],
  },
  {
    id: "pkg-2",
    name: "Erumely Traditional Forest Path Yathra",
    subtitle: "Sacred Foot Trek along Perur Thodu & Karimala",
    duration: "5 Days / 4 Nights",
    startingPoint: "Kottayam / Erumely",
    transport: "Dedicated Tempo Traveller / SUV",
    accommodation: "Traditional Forest Rest Houses & Campsites",
    price: 7499,
    rating: 4.95,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    description: "Experience the traditional long forest trek (Periya Pathai) passing through Erumely, Kalaketty, Azhutha, Karimala, and Pamba. Ideal for spiritual purification.",
    itinerary: [
      { day: 1, title: "Erumely Petta Thullal", desc: "Gather at Erumely, sacred Petta dance, worship at Vavar Mosque & Sastha Temple." },
      { day: 2, title: "Azhutha River Crossing", desc: "Trek through lush evergreen forests, stone collection at Azhutha river." },
      { day: 3, title: "Karimala Ascent", desc: "Conquer the steep Karimala hill, reach Valiyanavattom camp." },
      { day: 4, title: "Pamba & Sannidhanam", desc: "Holy dip at Pamba, climb Pathinettam Padi for Divine Darshan." },
      { day: 5, title: "Return Journey", desc: "Descent and comfortable return transport." },
    ],
    inclusions: ["Forest Guide & Porters", "Satvik Food & Beverages", "First Aid Support", "Luggage Transit"],
    exclusions: ["Personal items"],
  },
];

export const MOCK_FOOD: FoodItem[] = [
  {
    id: "food-1",
    name: "Sacred Sabarimala Aravana Prasadam",
    category: "recommended",
    description: "Traditional sweet jaggery and rice dish infused with ghee, cardamom, and coconut chips. Rich in instant energy during steep hill climbs.",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
    benefits: ["High Energy", "Traditional Blessing", "Digestive Spices"],
  },
  {
    id: "food-2",
    name: "Pure Satvik Rice & Kanji (Gruel)",
    category: "fasting",
    description: "Steamed Kerala red rice porridge served with warm salted green gram (Cherupayar) and coconut chutney. Standard fasting diet during Vratham.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Easy to Digest", "Low Fat", "Keeps Body Light"],
  },
  {
    id: "food-3",
    name: "Herbal Chukku Water (Dry Ginger Water)",
    category: "hydration",
    description: "Boiled warm water infused with dry ginger, tulsi, and cumin. Hydrates the body, prevents cold in high altitude mountain mist, and cleanses digestion.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    benefits: ["Warmth in Altitude", "Immunity Boost", "Zero Contamination"],
  },
  {
    id: "food-4",
    name: "Heavy Fried Oils & Non-Veg Foods",
    category: "avoid",
    description: "Strictly prohibited during the 41-day Vratham. Causes lethargy, indigestion during hill treks, and breaks devotional purity.",
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80",
    benefits: ["Strict Prohibition", "Avoid Indigestion"],
  },
];

export const MOCK_ACCOMMODATION: AccommodationItem[] = [
  {
    id: "acc-1",
    name: "Sabari Pilgrims Haven & Cottages",
    type: "hotel",
    location: "Nilakkal Base Camp",
    distance: "18 km from Pamba",
    rating: 4.8,
    reviews: 210,
    price: 1800,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    amenities: ["Hot Water", "24/7 Satvik Canteen", "Parking Area", "Spacious Bathrooms", "Pilgrim Locker"],
    rooms: [
      { type: "Deluxe Twin Room", price: 1800, capacity: "2 Pilgrims", available: true },
      { type: "Family Suite (4 Bed)", price: 3200, capacity: "4-5 Pilgrims", available: true },
    ],
  },
  {
    id: "acc-2",
    name: "Pamba Devaswom Rest House",
    type: "guesthouse",
    location: "Pamba River Bank",
    distance: "0.2 km from Pamba Temple",
    rating: 4.6,
    reviews: 145,
    price: 950,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    amenities: ["Immediate River Access", "Clean Mats", "Drinking Water", "Security"],
    rooms: [
      { type: "Standard Room", price: 950, capacity: "3 Pilgrims", available: true },
      { type: "Common Dormitory Bed", price: 250, capacity: "1 Pilgrim", available: true },
    ],
  },
];

export const MOCK_VIDEOS: VideoItem[] = [
  {
    id: "vid-1",
    title: "Complete 41-Day Vratham Rules & Rituals Explained",
    category: "vratham",
    duration: "18:45",
    thumbnail: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80",
    description: "Detailed step-by-step video guide by Guruswamy on wear of Mala, diet discipline, daily prayers, and mental purity required for Sabarimala Yathra.",
    summary: "This video covers the sacred discipline of wearing the Tulsi/Rudraksha Mala, strict vegetarian diet, twice-daily bath rituals, brahmacharya, and chanting Swamiye Saranam Ayyappa.",
  },
  {
    id: "vid-2",
    title: "Neeli Mala & Appachi Medu Steep Trek Walkthrough",
    category: "travel",
    duration: "12:10",
    thumbnail: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    description: "Visual guide showing the terrain, rest points, water stations, and breathing techniques while ascending Neeli Mala hill.",
    summary: "Key safety instructions for steep ascents: walk slowly, take rhythmic breaths, stay hydrated with Chukku water, and utilize rest benches at Appachi Medu.",
  },
  {
    id: "vid-3",
    title: "The Sanctity of 18 Holy Steps (Pathinettam Padi)",
    category: "temple",
    duration: "15:20",
    thumbnail: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    description: "Discover the spiritual significance of each of the 18 steps leading to Sannidhanam and the sacred rules for climbing with Irumudi Kettu.",
    summary: "Explains how the 18 steps represent 5 Indriyas, 8 Ragas, 3 Gunas, Vidya, and Avidya. Only devotees carrying the Irumudi are permitted to climb.",
  },
];

export const MOCK_NOTIFICATIONS: NotificationItem[] = [
  {
    id: "notif-1",
    title: "Vratham Day 10 Reminder",
    message: "Remember your evening lamp prayer and devotional chanting at 6:30 PM today.",
    time: "10 mins ago",
    type: "reminder",
    read: false,
  },
  {
    id: "notif-2",
    title: "Weather Alert for Pamba Trek",
    message: "Mild mountain rain expected around Sabarimala in the evening. Keep rain gear ready.",
    time: "2 hours ago",
    type: "weather",
    read: false,
  },
  {
    id: "notif-3",
    title: "Travel Ticket Confirmed",
    message: "Your KSRTC AC Sleeper Bus booking (AYY123456) for Nov 15 is confirmed.",
    time: "1 day ago",
    type: "travel",
    read: true,
  },
];

export const MOCK_COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: "post-1",
    author: "Guruswamy Subramanian",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    time: "3 hours ago",
    group: "Chennai Sabari Group 2026",
    content: "Swamiye Saranam Ayyappa! All 25 members in our group have successfully started Day 10 of Vratham today. We held a grand Bhajan last night. Sharing blessings to all Ayyappas!",
    image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80",
    likes: 48,
    comments: 12,
  },
  {
    id: "post-2",
    author: "Karthik Raja",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    time: "6 hours ago",
    content: "Seeking advice on train booking from Bangalore to Chengannur. Has anyone tried the 16344 Amrita Express recently? How are the cleanliness and rest stops?",
    likes: 19,
    comments: 8,
  },
];

export const MOCK_CHECKPOINTS: CheckpointItem[] = [
  {
    id: "chk-1",
    name: "Pamba Base & River Ghat",
    distance: "0 km (Start of Ascent)",
    elevation: "80 meters above sea level",
    description: "The holy immersion point where devotees take a dip in Pamba River and seek blessings at Maha Ganapathy Temple before climbing.",
    facilities: ["Bathing Ghats", "First Aid Post", "Kettunira Sheds", "Purified Drinking Water"],
    safetyTips: ["Hold guard rails near river", "Do not litter sacred waters", "Keep Irumudi elevated"],
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "chk-2",
    name: "Neeli Mala Hill Peak",
    distance: "1.8 km from Pamba",
    elevation: "420 meters",
    description: "The initial steep uphill climbing track. Challenging climb requiring slow steady steps.",
    facilities: ["Resting Benches", "Oxygen Parlour", "Medical Attendants", "Glucose & Tea Stalls"],
    safetyTips: ["Climb at steady pace", "Rest if experiencing shortness of breath", "Drink Chukku water"],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "chk-3",
    name: "Appachi Medu & Ippachi Medu",
    distance: "2.5 km from Pamba",
    elevation: "550 meters",
    description: "Flanked by two deep ravines. Devotees traditionally toss rice balls (Rice Pindam) to appease hill deities.",
    facilities: ["Police Control Room", "Drinking Water", "Cardiac Emergency Center"],
    safetyTips: ["Stay inside barricaded tracks", "Do not lean over ravine barriers"],
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "chk-4",
    name: "Sannidhanam & Pathinettam Padi",
    distance: "4.5 km from Pamba (Destination)",
    elevation: "914 meters",
    description: "The divine culmination of the pilgrimage. Ascend the 18 Gold-Clad Steps for holy Darshan of Lord Ayyappa.",
    facilities: ["Queue Complex", "Neyyabhishekam Counters", "Prasadam Counters", "Annadhanam Hall"],
    safetyTips: ["Follow police officer instructions on steps", "Keep Irumudi securely on head"],
    image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80",
  },
];
