export interface Driver {
  id: string;
  name: string;
  photo: string;
  rating: number;
  trips: number;
  carModel: string;
  carColor: string;
  plateNumber: string;
  offerPrice: number;
  eta: number;
  distance: string;
  verified: boolean;
  yearsActive: number;
}

export interface City {
  id: string;
  name: string;
  country: string;
  flag: string;
  drivers: number;
  rides: string;
  image: string;
  active: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  photo: string;
  rating: number;
  text: string;
  city: string;
  date: string;
}

export interface SafetyFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const mockDrivers: Driver[] = [
  {
    id: "d1",
    name: "Marcus Johnson",
    photo: "https://b3387583.smushcdn.com/3387583/wp-content/uploads/2023/05/iStock-1283471963.jpg?lossy=2&strip=1&webp=1",
    rating: 4.9,
    trips: 2847,
    carModel: "Toyota Camry 2022",
    carColor: "Silver",
    plateNumber: "ABC-1234",
    offerPrice: 18,
    eta: 4,
    distance: "0.8 km",
    verified: true,
    yearsActive: 3,
  },
  {
    id: "d2",
    name: "Sofia Martinez",
    photo: "https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2025/01/10/f6b2c297-42c0-4c3c-b460-c6ece84624f9_7aa62871.jpg?itok=Eu8_ev8G&v=1736502707",
    rating: 4.8,
    trips: 1923,
    carModel: "Honda Accord 2021",
    carColor: "Black",
    plateNumber: "XYZ-5678",
    offerPrice: 16,
    eta: 6,
    distance: "1.2 km",
    verified: true,
    yearsActive: 2,
  },
  {
    id: "d3",
    name: "David Chen",
    photo: "https://m.media-amazon.com/images/M/MV5BODYzNTU2MzktZmFjYy00ODc0LWFjYmMtY2Q4OWU1ZmU3ZDRjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 4.7,
    trips: 3412,
    carModel: "Hyundai Sonata 2023",
    carColor: "White",
    plateNumber: "DEF-9012",
    offerPrice: 20,
    eta: 3,
    distance: "0.5 km",
    verified: true,
    yearsActive: 4,
  },
  {
    id: "d4",
    name: "Aisha Patel",
    photo: "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3425302203513553769",
    rating: 4.9,
    trips: 1567,
    carModel: "Kia K5 2022",
    carColor: "Blue",
    plateNumber: "GHI-3456",
    offerPrice: 15,
    eta: 8,
    distance: "1.8 km",
    verified: true,
    yearsActive: 2,
  },
  {
    id: "d5",
    name: "James Wilson",
    photo: "https://mtv-drupal-assets.s3.amazonaws.com/files/resources/justicejameswilson-2.jpg?VersionId=K8vPveMkFXAzA9yOaoKEe_PSR34IrRx2",
    rating: 4.6,
    trips: 4201,
    carModel: "Nissan Altima 2021",
    carColor: "Gray",
    plateNumber: "JKL-7890",
    offerPrice: 17,
    eta: 5,
    distance: "1.0 km",
    verified: false,
    yearsActive: 5,
  },
];

export const mockCities: City[] = [
  { id: "c1", name: "New York", country: "USA", flag: "🇺🇸", drivers: 12400, rides: "2.1M", image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Lights_of_Rockefeller_Center_during_sunset.jpg", active: true },
  { id: "c2", name: "Los Angeles", country: "USA", flag: "🇺🇸", drivers: 9800, rides: "1.8M", image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Lights_of_Rockefeller_Center_during_sunset.jpg", active: true },
  { id: "c3", name: "London", country: "UK", flag: "🇬🇧", drivers: 15200, rides: "3.2M", image: "https://drupal-prod.visitcalifornia.com/sites/default/files/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg", active: true },
  { id: "c4", name: "Dubai", country: "UAE", flag: "🇦🇪", drivers: 8600, rides: "1.5M", image: "https://i.natgeofe.com/n/4def1048-f5e5-4973-ad3a-e188a97d363f/regents-street-london-england.jpg", active: true },
  { id: "c5", name: "Mumbai", country: "India", flag: "🇮🇳", drivers: 22000, rides: "5.4M", image: "https://www.grayline.com/wp-content/uploads/2025/12/shutterstock_151616084-scaled.jpg", active: true },
  { id: "c6", name: "São Paulo", country: "Brazil", flag: "🇧🇷", drivers: 18500, rides: "4.1M", image: "https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg", active: true },
  { id: "c7", name: "Cairo", country: "Egypt", flag: "🇪🇬", drivers: 11200, rides: "2.8M", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Marginal_Pinheiros_e_Jockey_Club.jpg/330px-Marginal_Pinheiros_e_Jockey_Club.jpg", active: true },
  { id: "c8", name: "Lagos", country: "Nigeria", flag: "🇳🇬", drivers: 9400, rides: "1.9M", image: "https://imagedelivery.net/1AkWDvw1F7luzpOSXoOCTw/a7359077-fa31-495d-f1ca-8e4694fc4500/w=1024", active: true },
  { id: "c9", name: "Istanbul", country: "Turkey", flag: "🇹🇷", drivers: 14800, rides: "3.6M", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Tafa_Balewa_Square_%28Onikan%29_in_Lagos._Nigeria.jpg/330px-Tafa_Balewa_Square_%28Onikan%29_in_Lagos._Nigeria.jpg", active: true },
  { id: "c10", name: "Jakarta", country: "Indonesia", flag: "🇮🇩", drivers: 19600, rides: "4.7M", image: "https://media.cntravellerme.com/photos/6867aeba85cc078a3f1e5ad3/1:1/w_2160,h_2160,c_limit/1480863367", active: true },
  { id: "c11", name: "Nairobi", country: "Kenya", flag: "🇰🇪", drivers: 6200, rides: "1.1M", image: "https://discovery.sndimg.com/content/dam/images/discovery/fullset/2021/9/15/GettyImages-510603856.jpg.rend.hgtvcom.1280.1280.suffix/1631722712772.jpeg", active: true },
  { id: "c12", name: "Karachi", country: "Pakistan", flag: "🇵🇰", drivers: 13400, rides: "2.9M", image: "https://cdn.audleytravel.com/4082/2913/79/8003731-nairobi.jpg", active: true },
];

export const mockTestimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Emily Rodriguez",
    role: "Daily Commuter",
    photo: "https://cdn.britannica.com/85/128585-050-5A1BDD02/Karachi-Pakistan.jpg",
    rating: 5,
    text: "InDrive changed how I commute. I set my own price and drivers compete for my ride. Saved over 30% compared to other apps!",
    city: "New York",
    date: "2 days ago",
  },
  {
    id: "t2",
    name: "Kwame Asante",
    role: "Business Traveler",
    photo: "https://kwamedy.com/wp-content/uploads/2020/06/kwame-asante-2.jpg",
    rating: 5,
    text: "The negotiation feature is brilliant. I can see driver ratings and choose who I trust. The transparency is unmatched.",
    city: "Lagos",
    date: "1 week ago",
  },
  {
    id: "t3",
    name: "Priya Sharma",
    role: "Student",
    photo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Priya_Sharma_%28fictional_character%29.jpg/250px-Priya_Sharma_%28fictional_character%29.jpg",
    rating: 4,
    text: "As a student on a budget, being able to propose my own fare is a game changer. Drivers are always professional and on time.",
    city: "Mumbai",
    date: "3 days ago",
  },
  {
    id: "t4",
    name: "Carlos Mendez",
    role: "Freelancer",
    photo: "/images/user-carlos-mendez.jpg",
    rating: 5,
    text: "No surge pricing ever! I love that the price is fair and negotiated. The SOS feature gives me peace of mind on late night rides.",
    city: "São Paulo",
    date: "5 days ago",
  },
  {
    id: "t5",
    name: "Fatima Al-Hassan",
    role: "Healthcare Worker",
    photo: "/images/user-fatima-hassan.jpg",
    rating: 5,
    text: "The verified driver badges and trip sharing feature make me feel safe. I share my ride with family before every trip.",
    city: "Dubai",
    date: "1 day ago",
  },
];

export const driverBenefits = [
  {
    icon: "DollarSign",
    title: "Earn More",
    description: "Keep up to 95% of every fare. No hidden fees, no surge cuts. Your earnings, your rules.",
    stat: "95%",
    statLabel: "Fare Kept",
  },
  {
    icon: "Clock",
    title: "Flexible Hours",
    description: "Drive when you want, where you want. No minimum hours, no schedules imposed on you.",
    stat: "24/7",
    statLabel: "Your Schedule",
  },
  {
    icon: "Shield",
    title: "Full Support",
    description: "24/7 driver support, insurance coverage, and a community of 500K+ drivers worldwide.",
    stat: "500K+",
    statLabel: "Driver Network",
  },
  {
    icon: "TrendingUp",
    title: "Counter Offers",
    description: "Don't like the passenger's price? Counter-offer and negotiate a fair fare for both parties.",
    stat: "3x",
    statLabel: "More Rides",
  },
  {
    icon: "Star",
    title: "Build Reputation",
    description: "High-rated drivers get priority placement and access to premium ride requests.",
    stat: "4.8★",
    statLabel: "Avg Rating",
  },
  {
    icon: "MapPin",
    title: "Local Knowledge",
    description: "Serve your neighborhood. InDrive prioritizes local drivers for community-first rides.",
    stat: "Local",
    statLabel: "First Priority",
  },
];

export const teamMembers = [
  {
    name: "Alex Petrov",
    role: "CEO & Co-Founder",
    photo: "/images/team-alex-petrov.jpg",
    bio: "Former Yandex engineer who believed fair pricing should be a right, not a privilege.",
  },
  {
    name: "Maria Santos",
    role: "CTO",
    photo: "/images/team-maria-santos.jpg",
    bio: "Built scalable systems for 50M+ users. Passionate about tech that empowers communities.",
  },
  {
    name: "Omar Khalid",
    role: "Head of Safety",
    photo: "/images/team-omar-khalid.jpg",
    bio: "15 years in transportation safety. Every feature he builds starts with 'is this safe?'",
  },
  {
    name: "Yuki Tanaka",
    role: "Head of Design",
    photo: "/images/team-yuki-tanaka.jpg",
    bio: "Award-winning UX designer focused on making complex negotiations feel effortless.",
  },
];

export const rideStatuses = [
  { id: "searching", label: "Searching for Drivers", description: "Finding drivers near you...", color: "#F59E0B" },
  { id: "negotiating", label: "Negotiating Fare", description: "Drivers are making offers", color: "#3B82F6" },
  { id: "confirmed", label: "Ride Confirmed", description: "Driver is on the way", color: "#8B5CF6" },
  { id: "enroute", label: "En Route", description: "Driver is heading to destination", color: "#E94560" },
  { id: "arrived", label: "Arrived!", description: "You have reached your destination", color: "#22C55E" },
];
