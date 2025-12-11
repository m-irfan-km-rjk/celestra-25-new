export interface Event {
  id: number;
  title: string;
  description: string;
  time: string;
  venue: string;
  capacity: number;
  image: string;
  link: string;
  isteamevent: boolean;
  teammebercount: number;
  qrcode: string[];
  amount: number[];
  is_open: boolean;
  Coordinator: [string, number][];
}



const events: Event[] = [
  {
    id: 0,
    title: "EV Dynamics",
    description: "The future belongs to those who believe in the beauty of their dreams.\n\nGet ready for a sparkling experience with our workshop on EV Dynamics conducted under CELESTRA'25, the signature event of IEI TKMCE. Learn how the advanced concepts are shaping the electric vehicle industry and explore the million possibilities it holds for a sustainable future. \n\nDate: 8th February 2025\nVenue: EEE System Software Lab\nTime: 10:00am- 4:00pm\nRegistration fee:\n•IEI members(TKMCE & Non-TKMCE): ₹150\n•Non-IEI members(TKMCE): ₹200\n•Non-IEI members (Non-TKMCE) : ₹250\n\nThe workshop will be conducted by Mr. Kausik Krishna, an engineer at Tata Elxsi and a proud alumnus of TKM College of Engineering, renowned for his expertise in EV technology and innovation.   ",
    time: "8th feb & 10:00am to 4:00pm",
    venue: "EEE System Software Lab",
    capacity: 70,
    image: "/events/EV-Dynamics/EV-Dynamics.jpeg",
    link: "EV-Dynamics",
    isteamevent: false,
    teammebercount: 0,
    qrcode: [
      "/Qr/EV-Dynamics/qr250.png",
      "/Qr/EV-Dynamics/qr200.png",
      "/Qr/EV-Dynamics/qr150.png",
    ],
    amount: [250, 200, 150],
    is_open: false,
    Coordinator: [
      ["Thomas", 9846699248],
      ["Siya", 8301989956],
    ],
  },
  {
    id: 1,
    title: "Primavera",
    description: "Join us for an intensive Primavera Workshop conducted by IEI TKMCE as part of CELESTRA'25. Gain hands-on experience with one of the most powerful project management tools in the civil industry. Whether you’re a beginner or looking to enhance your skills, this workshop will equip you to plan, manage, and execute projects with confidence.\n\nDate: 8th February 2025\nTime: 9:00 AM to 4:00 PM\nVenue: Cad lab(Civil dept)\nReg fee:\n•IEI members(TKMCE & Non-TKMCE): ₹149\n•Non-IEI members(TKMCE): ₹349\n•Non-IEI members (Non-TKMCE) : ₹399",
    time: "9:00 AM to 4:00 PM & 8th Feb",
    venue: "Cad lab(Civil dept)",
    capacity: 36,
    image: "/events/Primavera/Primavera.jpeg",
    link: "Primavera",
    isteamevent: false,
    teammebercount: 1,
    qrcode: [
     "/Qr/Primevera/qr399.png",
     "/Qr/Primevera/qr349.png",
      "/Qr/Primevera/qr149.png",
    ],
    amount: [399, 349, 149],
    is_open: false,
    Coordinator: [
      ["Aayisha Salim", 9778258417],
      ["Ganga S V", 8075661922],
    ],

  },
  {
    id: 2,
    title: "STM32",
    description: "The microcontroller is your canvas, and the code is your brush. Innovate and bring your ideas to life.\n\nThe stage is set, and the boards are ready. Step into the world of STM32 Microcontrollers workshop by IEI TKMCE, part of CELESTRA 25. Get hands-on experience with STM32 and explore embedded systems, unlock IoT potential, and shape the future of automation with expert guidance. \n\nDate: 8th February 2025\nTime: 10am - 4pm\nVenue: CS networking lab\nReg fee:\n•IEI members(TKMCE & Non-TKMCE): 250/-\n•Non-IEI members(TKMCE): 300/-\n•Non-IEI members (Non-TKMCE) : 350/-\n\nLimited seats available!!!_ ",
    time: "10:00 AM to 4:00 PM & 8th Feb",
    venue: "CS networking lab",
    capacity: 41,
    image: "/events/STM32/STM32.jpeg",
    link: "STM32",
    isteamevent: false,
    teammebercount: 1,
    qrcode: [
     "/Qr/STM32/qr350.png",
     "/Qr/STM32/qr300.png",
      "/Qr/STM32/qr250.png",
    ],
    amount: [350, 300, 250],
    is_open: false,
    Coordinator: [
      ["Hadi", 9562439603],
      ["Sanas", 8590348773],
    ],
  },
  {
    id: 3,
    title: "LaTeXplore",
    description: "Join LaTeXplore conducted by IEI TKMCE as part of  CELESTRA'25. Explore LaTeX – the ultimate tool for creating stunning reports and research papers.  The workshop covers basics of LaTeX Software and Introduction to Report Writing \n\n\n🗓 Date: 8th February 2024  \n🕙 Time: 10:00 AM - 4:00 PM  \n📍 Venue: Chemical Software Lab   \n\n💰Registration Fee:  \n* IEI  members(TKMCE &Non-TKMCE):149/-\n- Non-IEI members (TKMCE ):199/-\n- Non-IEI members(Non-TKMCE): 249/-\n\n🔔 Note: Participants are encouraged to bring their laptops for hands-on practice.  \n\n\nContact for Queries\n- Amal Pramod: 95441 58367  \n- Hajira Beegum: 89217 22048  \n- Suneeth: 83010 22519",
    time: "10:00 AM to 4:00 PM & 8th Feb",
    venue: "Chemical Software Lab",
    capacity: 40,
    image: "/events/LaTeXplore/LaTeXplore.jpeg",
    link: "LaTeXplore",
    isteamevent: false,
    teammebercount: 1,
    qrcode: [
     "/Qr/LaTeXplore/qr249.png",
     "/Qr/LaTeXplore/qr199.png",
      "/Qr/LaTeXplore/qr149.png",
    ],
    amount: [249, 199, 149],
    is_open: false,
    Coordinator: [
      ["Amal Pramod",  9544158367],
      ["Hajira Beegum", 8921722048],
    ],
  },
  {
    id: 4,
    title: "Cloud X DevOps Workshop",
    description: "Unlock the synergy of Cloud Computing and DevOps to build scalable, efficient, and future-ready solutions.\n\n\nJoin us for the Cloud X DevOps Workshop, an interactive session organized by IEI TKMCE as part of CELESTRA '25, designed to provide cutting-edge expertise in Cloud Computing and DevOps.\n\nDate: 8th February 2025\nTime: 10 am-4 pm\nVenue: System Software lab(Computer dept) \nReg fee:\n•IEI members(TKMCE & Non-TKMCE):₹170\n•Non-IEI members(TKMCE):₹200\n•Non-IEI members (Non-TKMCE) :₹250\n\nLed by industry professionals, this immersive program covers: Cloud Platforms, DevOps Methodologies, Containerization & Orchestration, and Real-World Applications.",
    time: "10:00 AM to 4:00 PM & 8th Feb",
    venue: "System Software lab(Computer dept)",
    capacity: 70,
    image: "/events/Cloud-X-DevOps/Cloud-X-DevOps.jpeg",
    link: "Cloud-X-DevOps",
    isteamevent: false,
    teammebercount: 1,
    qrcode: [
     "/Qr/Cloud-X-DevOps/qr250.png",
     "/Qr/Cloud-X-DevOps/qr200.png",
      "/Qr/Cloud-X-DevOps/qr170.png",
    ],
    amount: [250, 200, 170],
    is_open: false,
    Coordinator: [
      ["Joel",  9447359118],
      ["Mahmood", 9544499312],
    ],
  },
  {
    id: 5,
    title: "Casablanca",
    description: "📻 “Nostalgia isn’t a memory; it’s a vibe – and this is your night to feel it all!”\nGet ready with IEI TKMCE to turn back time at the cultural night of CELESTRA ’25– Casablanca on February 9, 2025!\n\n💫 Dance to timeless beats, flaunt your retro style, experience mesmerizing music and dance performances, and make unforgettable memories.\nFrom epic grooves to vintage vibes, it’s the ultimate throwback party! 🎊\n\n✨ Calling all retro fashionistas!\nShow off your Casablanca dazzle at our special Ramp Walk\n\n🔗 Register now : https://bit.ly/IEICasablanca",
    time: " February 9, 2025",
    venue: "T K M",
    capacity: 400,
    image: "/events/Casablanca/Casablanca.jpeg",
    link: "Casablanca",
    isteamevent: false,
    teammebercount: 1,
    qrcode: [
     "/Qr/Cloud-X-DevOps/qr250.png",
     "/Qr/Cloud-X-DevOps/qr200.png",
      "/Qr/Cloud-X-DevOps/qr170.png",
    ],
    amount: [0, 0, 0],
    is_open: false,
    Coordinator: [
      ["Jai",   7561074927],
      ["Shalfa", 9995813296],
    ],
  },
];



export default events;
