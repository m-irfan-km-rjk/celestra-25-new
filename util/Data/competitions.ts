export interface Competition {
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
  amount:number[];
  is_open:boolean,
  Coordinator:[string, number][]
}

const competitions: Competition[] = [
  {
    id: 0,
    title: "Civicon",
    description: "Sometimes reality feels far from fiction, and engineers bridge the gap between the two. \n\nIEI TKMCE presents CIVICON , the ultimate poster presentation competition for civil engineering enthusiasts, as part of CELESTRA'25. Get ready to analyze thought-provoking research, craft a poster that commands attention, and present your vision to a distinguished panel of judges eager to witness brilliance. \n\nCompete, captivate, and claim your moment in the spotlight!\n\nDate: 9th Feb 2025\nTime: 10:00 AM\nReg Fee(per team): \n•₹100 - TKMCE students\n•₹150 - non-TKMCE students \nTeam Composition: Max 4 members  \nPrize Pool: ₹4,000  \n\nRegister now and let your ingenuity dazzle at Civicon!✨[ ]",
    time: '9th feb & 10:00 am',
    venue: 'TKM',
    capacity: 30,
    link: 'Civicon',
    image: "/events/Civicon/civicon.jpeg",
    isteamevent: true,
    teammebercount: 3,
    qrcode: [
      "/Qr/Civicon/qr1.jpeg",
      "/Qr/Civicon/qr2.jpeg",
      "/Qr/Civicon/qr2.jpeg"
    ],
    amount:[150,100,100],
    is_open:false,
    Coordinator: [
      ["Sreeparvathy", 8594084953],
      ["Reshma", 9567576544],
    ],
  },
  {
    id: 1,
    title: "CELESTRAL VALO CUP",
    description: "In a world of duelists, controllers, sentinels, and initiators, your choices shape the battlefield.\n\n\nThe spike is planted, the clock is ticking, and the stage is yours. IEI TKMCE presents CELESTRAL VALO CUP, a high-stakes gaming showdown as part of CELESTRA'25. Assemble your squad, lock in your agents, and prepare to take on fierce competition where every frag, clutch, and ultimate counts.\nIt’s time to outsmart, outplay, and outgun your opponents in the ultimate test of strategy, skill, and teamwork.\n\nMode: Online\nDate: 6th-9th Feb 2025\nPrize pool: 3k\nReg fee: 100rs per team\nTeam Composition: 5+1(if any)\n\n\nAre you ready to plant your name among the legends of Valorant? The spike awaits. The battlefield calls. 🎯",
    time: '6-9th feb',
    venue: 'online',
    capacity: 15,
    link: 'VALORANT',
    image: "/events/Valorant/Valorant.jpeg",
    isteamevent: true,
    teammebercount: 5,
    qrcode: [
      "/Qr/Valorant/qr1.jpg",
      "/Qr/Valorant/qr1.jpg",
      "/Qr/Valorant/qr1.jpg"
    ],
    amount:[100,100,100],
    is_open:false,
    Coordinator: [
      ["Sathyajith", 8547404185],
      ["Kishan", 8129469583],
    ],
  },
  {
    id: 2,
    title: "Perfect Murder II",
    description: "In the realm of deception, only the sharpest minds can weave or unravel the perfect crime.\n\nIEI TKMCE presents Perfect Murder II, a thrilling competition where creativity meets investigation, featured in CELESTRA'25. Craft your perfect crime story, interrogate suspects, and solve the mystery. \n\n\nDate: 9th February 2025\nVenue: Chemical Seminar Hall\nTime: 9:30am to 4:30pm\nPrize pool: 2k\nReg Fee: \nTKMCE students: 100rs\nnon-TKMCE students: 150rs\n\nWill you uncover the truth or create the perfect plot? The mystery awaits!\n\n  Team member - 5\n",
    time: '9:30am to 4:30pm & 9th feb',
    venue: 'Chemical Seminar Hall',
    capacity: 7,
    link: 'Perfect-Murder-II',
    image: "/events/Perfect-Murder-II/posterr.jpeg",
    isteamevent: true,
    teammebercount: 4,
    qrcode: [
      "/Qr/Perfect-Murder-II/qr150.png",
      "/Qr/Perfect-Murder-II/qr100.png",
      "/Qr/Perfect-Murder-II/qr100.png"
    ],
    amount:[150,100,100],
    is_open:true,
    Coordinator: [
      ["Aman", 6238493083],
      ["Fardeen", 773605543],
    ],
  },
  {
    id: 3,
    title: "The Arcade Vault",
    description: "Experience the thrill of The Arcade Vault, where excitement meets gaming mastery through a variety of arcade challenges designed to ignite your competitive spirit.\n\nHosted by IEI TKMCE as part of CELESTRA 25, The Arcade Vault is more than an event—it’s a celebration of gaming, creativity, and pure entertainment. Are you ready to claim your spot on the leaderboard and make history? The Arcade Vault awaits! \n\nPlay. Compete. Conquer.\n\nDate: 9th February \nTime: 10am- 4pm\nReg Fee:₹100\nVenue: Civil Block\n\n\nFor further queries, contact:\nAdhil Noufal : 8137074224\nAdithyan Prasad: 6238179177",
    time: '10:00am to 4:30pm & 9th feb',
    venue: 'Civil Block',
    capacity: 25,
    link: 'The-Arcade-Vault',
    image: "/events/The-Arcade-Vault/The-Arcade-Vault.jpeg",
    isteamevent: false,
    teammebercount: 3,
    qrcode: [
      "/Qr/The-Arcade-Vault/qr100.png",
      "/Qr/The-Arcade-Vault/qr100.png",
      "/Qr/The-Arcade-Vault/qr100.png"
    ],
    amount:[100,100,100],
    is_open:false,
    Coordinator: [
      ["Adhil Noufal", 8137074224],
      ["Adithyan Prasad", 6238179177],
    ],
  },
  {
    id: 4,
    title: "BGMI Tournament",
    description: "Gear up, squad up, and drop in! The battleground is set, and only the sharpest shooters and smartest strategists will survive. IEI TKMCE presenting BGMI Tournament as a part of CELESTRA'25! . \n\nWhether you're a lone wolf or a squad of four, it's time to prove your mettle in the ultimate BGMI showdown.\n\nPrize Pool: ₹1,000  \nReg Fee: ₹50 per team  \nTeam Size: Max 4 members  \nDate: 9th February 2025  \n\nDo you have what it takes to be the last team standing? Secure your slot, dominate the battlefield, and claim your victory!  \n\nLock. Load. Conquer. The fight begins soon!\n\nFor further queries, contact:\nAromal: 95627 17654  \nVrindha: 99469 71920",
    time: '9th feb',
    venue: 'online',
    capacity: 25,
    link: 'BGMI-Tournament',
    image: "/events/BGMI-Tournament/BGMI-Tournament.jpeg",
    isteamevent: true,
    teammebercount: 3,
    qrcode: [
      "/Qr/BGMI-Tournament/qr50.png",
      "/Qr/BGMI-Tournament/qr50.png",
      "/Qr/BGMI-Tournament/qr50.png"
    ],
    amount:[50,50,50],
    is_open:false,
    Coordinator: [
      ["Aromal", 9562717654],
      ["Vrindha", 9946971920],
    ],
  },
];

export default competitions;
