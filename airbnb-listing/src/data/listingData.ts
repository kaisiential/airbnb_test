export interface Review {
  id: number;
  author: string;
  avatar: string;
  date: string;
  rating: number;
  text: string;
  location?: string;
}

export interface ListingData {
  // Basic info
  title: string;
  subtitle: string;
  location: string;
  locationDetail: string;
  propertyType: string;

  // Stats
  rating: number;
  reviewCount: number;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;

  // Host
  hostName: string;
  hostAvatar: string;
  hostYears: number;
  hostIsSuperhost: boolean;
  hostReviewCount: number;
  hostResponseRate: string;
  hostResponseTime: string;
  hostDescription: string;

  // Photos
  photos: string[];

  // Highlights
  highlights: {
    icon: string;
    title: string;
    description: string;
  }[];

  // Description
  description: string;

  // Sleeping arrangements
  sleepingArrangements: {
    room: string;
    details: string;
    icon: string;
  }[];

  // Amenities
  amenities: {
    icon: string;
    name: string;
    available: boolean;
  }[];
  totalAmenities: number;

  // Pricing
  pricePerNight: number;
  cleaningFee: number;
  serviceFee: number;
  currency: string;
  currencySymbol: string;

  // House rules
  checkIn: string;
  checkOut: string;
  maxGuests: number;
  houseRules: string[];

  // Cancellation
  cancellationPolicy: string;
  cancellationDetail: string;

  // Reviews
  reviews: Review[];
  ratingCategories: {
    name: string;
    score: number;
  }[];

  // Location
  mapCenter: { lat: number; lng: number };
  neighborhood: string;
}

export const originalListing: ListingData = {
  title: "Stylish Flat in Heart of London",
  subtitle: "Entire rental unit in London, England",
  location: "London, England, United Kingdom",
  locationDetail: "Greater London, England, United Kingdom",
  propertyType: "Entire rental unit",

  rating: 4.88,
  reviewCount: 67,
  guests: 2,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,

  hostName: "Alex",
  hostAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  hostYears: 5,
  hostIsSuperhost: true,
  hostReviewCount: 312,
  hostResponseRate: "100%",
  hostResponseTime: "within an hour",
  hostDescription: "Hi, I'm Alex! I've been hosting on Airbnb for over 5 years. I love sharing my home with guests from around the world. I'm always available to help make your stay perfect.",

  photos: [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1560185127-6a3c65a1b6c8?w=600&h=400&fit=crop",
  ],

  highlights: [
    {
      icon: "door",
      title: "Self check-in",
      description: "Check yourself in with the lockbox.",
    },
    {
      icon: "star",
      title: "Alex is a Superhost",
      description: "Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
    },
    {
      icon: "calendar",
      title: "Free cancellation before check-in",
      description: "Get a full refund if you change your mind.",
    },
  ],

  description: `Welcome to this beautifully designed flat right in the heart of London! Perfect for couples or solo travellers looking for a stylish base to explore the city.

The space has been thoughtfully renovated with modern furnishings while keeping its charming character. You'll find everything you need for a comfortable stay — a fully equipped kitchen, fast WiFi, a cosy living area, and a luxurious bathroom.

Located on a quiet street yet just minutes from amazing restaurants, shops, and transport links. The nearest tube station is just a 3-minute walk away, giving you easy access to all of London's top attractions.

Whether you're here for business or pleasure, this flat offers the perfect blend of comfort and convenience.`,

  sleepingArrangements: [
    {
      room: "Bedroom",
      details: "1 double bed",
      icon: "bed",
    },
  ],

  amenities: [
    { icon: "wifi", name: "Wifi", available: true },
    { icon: "tv", name: "TV", available: true },
    { icon: "kitchen", name: "Kitchen", available: true },
    { icon: "washer", name: "Washing machine", available: true },
    { icon: "dryer", name: "Dryer", available: true },
    { icon: "heating", name: "Central heating", available: true },
    { icon: "workspace", name: "Dedicated workspace", available: true },
    { icon: "iron", name: "Iron", available: true },
    { icon: "hair-dryer", name: "Hair dryer", available: true },
    { icon: "hangers", name: "Hangers", available: true },
    { icon: "smoke-alarm", name: "Smoke alarm", available: true },
    { icon: "carbon-monoxide", name: "Carbon monoxide alarm", available: true },
    { icon: "fire-extinguisher", name: "Fire extinguisher", available: true },
    { icon: "first-aid", name: "First aid kit", available: true },
  ],
  totalAmenities: 14,

  pricePerNight: 85,
  cleaningFee: 30,
  serviceFee: 48,
  currency: "GBP",
  currencySymbol: "£",

  checkIn: "3:00 PM - 10:00 PM",
  checkOut: "11:00 AM",
  maxGuests: 2,
  houseRules: [
    "No smoking",
    "No pets",
    "No parties or events",
    "Quiet hours: 10:00 PM - 8:00 AM",
  ],

  cancellationPolicy: "Flexible",
  cancellationDetail: "Free cancellation for 48 hours. Cancel before check-in on the day of arrival for a partial refund.",

  reviews: [
    {
      id: 1,
      author: "Sarah",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      date: "January 2026",
      rating: 5,
      text: "Absolutely lovely flat! Beautifully decorated and in the perfect location. Alex was an amazing host — super responsive and helpful with restaurant recommendations. Would definitely stay again!",
      location: "Manchester, UK",
    },
    {
      id: 2,
      author: "Marco",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      date: "December 2025",
      rating: 5,
      text: "Great place, exactly as described. The tube station is literally around the corner which was perfect for getting around London. The flat is clean, modern and has everything you need.",
      location: "Rome, Italy",
    },
    {
      id: 3,
      author: "Emma",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      date: "November 2025",
      rating: 5,
      text: "Such a stylish space! Loved the décor and the neighbourhood. Plenty of great cafés and shops nearby. Alex was a brilliant host. Highly recommend!",
      location: "Edinburgh, UK",
    },
    {
      id: 4,
      author: "James",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "October 2025",
      rating: 4,
      text: "Really nice flat in a great location. Only minor thing was the shower pressure could have been better, but everything else was perfect. Would come back.",
      location: "Dublin, Ireland",
    },
    {
      id: 5,
      author: "Yuki",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      date: "September 2025",
      rating: 5,
      text: "Perfect stay in London! The flat was immaculately clean and had everything we needed. Alex provided excellent check-in instructions. The location couldn't be better!",
      location: "Tokyo, Japan",
    },
    {
      id: 6,
      author: "David",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      date: "August 2025",
      rating: 5,
      text: "Wonderful flat — tastefully decorated and very comfortable. Great restaurants and pubs within walking distance. Alex was very accommodating with our late check-in. Top notch!",
      location: "Sydney, Australia",
    },
  ],

  ratingCategories: [
    { name: "Cleanliness", score: 4.9 },
    { name: "Accuracy", score: 5.0 },
    { name: "Check-in", score: 5.0 },
    { name: "Communication", score: 5.0 },
    { name: "Location", score: 4.8 },
    { name: "Value", score: 4.7 },
  ],

  mapCenter: { lat: 51.5074, lng: -0.1278 },
  neighborhood: "The flat is located in one of London's most vibrant neighbourhoods. You'll be within walking distance of world-class restaurants, trendy cafés, boutique shops, and beautiful parks. The area is well-connected with excellent transport links — the nearest tube station is just a 3-minute walk.",
};

export const optimizedListing: ListingData = {
  title: "Award-Winning Designer Flat — 3min to Tube | Heart of London",
  subtitle: "Entire rental unit in London, England",
  location: "London, England, United Kingdom",
  locationDetail: "Greater London, England, United Kingdom",
  propertyType: "Entire rental unit",

  rating: 4.88,
  reviewCount: 67,
  guests: 2,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,

  hostName: "Alex",
  hostAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  hostYears: 5,
  hostIsSuperhost: true,
  hostReviewCount: 312,
  hostResponseRate: "100%",
  hostResponseTime: "within an hour",
  hostDescription: "Hi there! I'm Alex, a London local and proud Superhost with 5+ years of hosting experience and over 300 five-star reviews. I'm passionate about creating memorable stays and I'm always available to share insider tips about the best hidden gems in the neighbourhood. From the perfect coffee spot to the best sunset views — I've got you covered!",

  photos: [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1560185127-6a3c65a1b6c8?w=600&h=400&fit=crop",
  ],

  highlights: [
    {
      icon: "door",
      title: "Self check-in",
      description: "Check yourself in with the smart lockbox — hassle-free arrival at any time.",
    },
    {
      icon: "star",
      title: "Superhost with 300+ reviews",
      description: "Alex is one of the top-rated hosts in London with a proven track record of exceptional stays.",
    },
    {
      icon: "location",
      title: "Unbeatable location — 3 min to tube",
      description: "Walk to the tube in 3 minutes. Central London attractions, restaurants, and shops are all at your doorstep.",
    },
  ],

  description: `**Your Perfect London Home Base — Designed for Unforgettable Stays** ✨

Step into this beautifully curated designer flat in the beating heart of London. Every detail has been thoughtfully chosen to give you the ultimate blend of style, comfort, and convenience.

**🏠 The Space**
• Stunning open-plan living with floor-to-ceiling windows flooding the space with natural light
• Fully equipped kitchen with premium appliances — perfect for cooking or your morning coffee ritual
• Luxurious bathroom with rainfall shower and premium toiletries
• Ultra-fast WiFi (100Mbps+) — ideal for remote workers and digital nomads
• Dedicated workspace with ergonomic setup

**📍 The Location**
• 3-minute walk to the nearest tube station (Zone 1)
• Surrounded by Michelin-starred restaurants, artisan cafés, and independent boutiques
• 10 minutes to the West End, Covent Garden, and the British Museum
• Quiet, tree-lined residential street — the best of both worlds

**💡 What Sets This Flat Apart**
• Professionally designed interiors featured in local design magazines
• Hotel-quality linens and towels
• Welcome pack with local artisan treats
• Comprehensive London guidebook curated by your host

Whether you're exploring London's world-famous landmarks, here for business, or simply seeking a stylish retreat — this is the flat that guests return to again and again.`,

  sleepingArrangements: [
    {
      room: "Bedroom",
      details: "1 premium double bed with hotel-quality linens",
      icon: "bed",
    },
  ],

  amenities: [
    { icon: "wifi", name: "High-speed Wifi (100Mbps+)", available: true },
    { icon: "tv", name: "55\" Smart TV with Netflix", available: true },
    { icon: "kitchen", name: "Fully equipped kitchen", available: true },
    { icon: "washer", name: "Washing machine", available: true },
    { icon: "dryer", name: "Dryer", available: true },
    { icon: "heating", name: "Central heating", available: true },
    { icon: "workspace", name: "Dedicated workspace", available: true },
    { icon: "iron", name: "Iron & ironing board", available: true },
    { icon: "hair-dryer", name: "Professional hair dryer", available: true },
    { icon: "hangers", name: "Hangers", available: true },
    { icon: "smoke-alarm", name: "Smoke alarm", available: true },
    { icon: "carbon-monoxide", name: "Carbon monoxide alarm", available: true },
    { icon: "fire-extinguisher", name: "Fire extinguisher", available: true },
    { icon: "first-aid", name: "First aid kit", available: true },
  ],
  totalAmenities: 14,

  pricePerNight: 85,
  cleaningFee: 30,
  serviceFee: 48,
  currency: "GBP",
  currencySymbol: "£",

  checkIn: "3:00 PM - 10:00 PM",
  checkOut: "11:00 AM",
  maxGuests: 2,
  houseRules: [
    "No smoking",
    "No pets",
    "No parties or events",
    "Quiet hours: 10:00 PM - 8:00 AM",
  ],

  cancellationPolicy: "Flexible",
  cancellationDetail: "Free cancellation for 48 hours. Cancel before check-in on the day of arrival for a partial refund.",

  reviews: [
    {
      id: 1,
      author: "Sarah",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      date: "January 2026",
      rating: 5,
      text: "Absolutely lovely flat! Beautifully decorated and in the perfect location. Alex was an amazing host — super responsive and helpful with restaurant recommendations. Would definitely stay again!",
      location: "Manchester, UK",
    },
    {
      id: 2,
      author: "Marco",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      date: "December 2025",
      rating: 5,
      text: "Great place, exactly as described. The tube station is literally around the corner which was perfect for getting around London. The flat is clean, modern and has everything you need.",
      location: "Rome, Italy",
    },
    {
      id: 3,
      author: "Emma",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      date: "November 2025",
      rating: 5,
      text: "Such a stylish space! Loved the décor and the neighbourhood. Plenty of great cafés and shops nearby. Alex was a brilliant host. Highly recommend!",
      location: "Edinburgh, UK",
    },
    {
      id: 4,
      author: "James",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "October 2025",
      rating: 4,
      text: "Really nice flat in a great location. Only minor thing was the shower pressure could have been better, but everything else was perfect. Would come back.",
      location: "Dublin, Ireland",
    },
    {
      id: 5,
      author: "Yuki",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      date: "September 2025",
      rating: 5,
      text: "Perfect stay in London! The flat was immaculately clean and had everything we needed. Alex provided excellent check-in instructions. The location couldn't be better!",
      location: "Tokyo, Japan",
    },
    {
      id: 6,
      author: "David",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      date: "August 2025",
      rating: 5,
      text: "Wonderful flat — tastefully decorated and very comfortable. Great restaurants and pubs within walking distance. Alex was very accommodating with our late check-in. Top notch!",
      location: "Sydney, Australia",
    },
  ],

  ratingCategories: [
    { name: "Cleanliness", score: 4.9 },
    { name: "Accuracy", score: 5.0 },
    { name: "Check-in", score: 5.0 },
    { name: "Communication", score: 5.0 },
    { name: "Location", score: 4.8 },
    { name: "Value", score: 4.7 },
  ],

  mapCenter: { lat: 51.5074, lng: -0.1278 },
  neighborhood: "Welcome to one of London's most sought-after neighbourhoods! Your flat sits on a charming, tree-lined residential street that perfectly balances tranquility with accessibility. Step outside and you're surrounded by award-winning restaurants, artisan coffee shops, independent boutiques, and beautiful green spaces. The nearest tube station is just a 3-minute walk, putting all of London's iconic attractions within easy reach. From the West End theatres to Borough Market, the South Bank to Notting Hill — your London adventure starts right at your doorstep.",
};
