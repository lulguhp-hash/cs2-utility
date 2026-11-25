const MAPS = [
  {
    "id": "dust2",
    "name": "Dust2",
    "code": "D2",
    "desc": "Карта CS2"
  },
  {
    "id": "mirage",
    "name": "Mirage",
    "code": "MRG",
    "desc": "Карта CS2"
  },
  {
    "id": "inferno",
    "name": "Inferno",
    "code": "INF",
    "desc": "Карта CS2"
  },
  {
    "id": "nuke",
    "name": "Nuke",
    "code": "NUK",
    "desc": "Карта CS2"
  },
  {
    "id": "ancient",
    "name": "Ancient",
    "code": "ANC",
    "desc": "Карта CS2"
  },
  {
    "id": "anubis",
    "name": "Anubis",
    "code": "ANU",
    "desc": "Карта CS2"
  },
  {
    "id": "overpass",
    "name": "Overpass",
    "code": "OVP",
    "desc": "Карта CS2"
  },
  {
    "id": "vertigo",
    "name": "Vertigo",
    "code": "VRT",
    "desc": "Карта CS2"
  },
  {
    "id": "train",
    "name": "Train",
    "code": "TRN",
    "desc": "Карта CS2"
  }
];
const lineups = [
  {
    "id": "d2-1",
    "map": "dust2",
    "type": "smoke",
    "side": "T",
    "position": "Xbox",
    "name": "Xbox",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "https://www.cs2util.com/ru/dust2/smoke",
    "verified": false
  },
  {
    "id": "d2-2",
    "map": "dust2",
    "type": "smoke",
    "side": "T",
    "position": "CT Spawn",
    "name": "CT Spawn",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "https://www.cs2util.com/ru/dust2/smoke",
    "verified": false
  },
  {
    "id": "d2-3",
    "map": "dust2",
    "type": "smoke",
    "side": "T",
    "position": "Long Cross",
    "name": "Long Cross",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "https://www.cs2util.com/ru/dust2/smoke",
    "verified": false
  },
  {
    "id": "d2-4",
    "map": "dust2",
    "type": "smoke",
    "side": "T",
    "position": "Short",
    "name": "Short",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "https://www.cs2util.com/ru/dust2/smoke",
    "verified": false
  },
  {
    "id": "d2-5",
    "map": "dust2",
    "type": "smoke",
    "side": "T",
    "position": "B Doors",
    "name": "B Doors",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "https://www.cs2util.com/ru/dust2/smoke",
    "verified": false
  },
  {
    "id": "d2-6",
    "map": "dust2",
    "type": "smoke",
    "side": "T",
    "position": "B Window",
    "name": "B Window",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "https://www.cs2util.com/ru/dust2/smoke",
    "verified": false
  },
  {
    "id": "d2-7",
    "map": "dust2",
    "type": "smoke",
    "side": "T",
    "position": "Mid Doors",
    "name": "Mid Doors",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "https://www.cs2util.com/ru/dust2/smoke",
    "verified": false
  },
  {
    "id": "d2-8",
    "map": "dust2",
    "type": "smoke",
    "side": "T",
    "position": "A Site",
    "name": "A Site",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "https://www.cs2util.com/ru/dust2/smoke",
    "verified": false
  },
  {
    "id": "d2-9",
    "map": "dust2",
    "type": "smoke",
    "side": "CT",
    "position": "Long Doors",
    "name": "Long Doors",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "https://www.cs2util.com/ru/dust2/smoke",
    "verified": false
  },
  {
    "id": "d2-10",
    "map": "dust2",
    "type": "smoke",
    "side": "CT",
    "position": "Upper Tunnels",
    "name": "Upper Tunnels",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "https://www.cs2util.com/ru/dust2/smoke",
    "verified": false
  },
  {
    "id": "d2-11",
    "map": "dust2",
    "type": "smoke",
    "side": "CT",
    "position": "Short",
    "name": "Short",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "https://www.cs2util.com/ru/dust2/smoke",
    "verified": false
  },
  {
    "id": "d2-12",
    "map": "dust2",
    "type": "smoke",
    "side": "CT",
    "position": "Mid Doors",
    "name": "Mid Doors",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "https://www.cs2util.com/ru/dust2/smoke",
    "verified": false
  },
  {
    "id": "d2-13",
    "map": "dust2",
    "type": "flash",
    "side": "T",
    "position": "Long",
    "name": "Long",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "",
    "verified": false
  },
  {
    "id": "d2-14",
    "map": "dust2",
    "type": "flash",
    "side": "T",
    "position": "Short",
    "name": "Short",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "",
    "verified": false
  },
  {
    "id": "d2-15",
    "map": "dust2",
    "type": "flash",
    "side": "T",
    "position": "B Site",
    "name": "B Site",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "",
    "verified": false
  },
  {
    "id": "d2-16",
    "map": "dust2",
    "type": "flash",
    "side": "T",
    "position": "Mid",
    "name": "Mid",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "",
    "verified": false
  },
  {
    "id": "d2-17",
    "map": "dust2",
    "type": "flash",
    "side": "CT",
    "position": "Long",
    "name": "Long",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "",
    "verified": false
  },
  {
    "id": "d2-18",
    "map": "dust2",
    "type": "flash",
    "side": "CT",
    "position": "B Tunnels",
    "name": "B Tunnels",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "",
    "verified": false
  },
  {
    "id": "d2-19",
    "map": "dust2",
    "type": "molotov",
    "side": "T",
    "position": "Car A",
    "name": "Car A",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "",
    "verified": false
  },
  {
    "id": "d2-20",
    "map": "dust2",
    "type": "molotov",
    "side": "T",
    "position": "Goose",
    "name": "Goose",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "",
    "verified": false
  },
  {
    "id": "d2-21",
    "map": "dust2",
    "type": "molotov",
    "side": "T",
    "position": "B Car",
    "name": "B Car",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "",
    "verified": false
  },
  {
    "id": "d2-22",
    "map": "dust2",
    "type": "molotov",
    "side": "T",
    "position": "Back Plat",
    "name": "Back Plat",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "",
    "verified": false
  },
  {
    "id": "d2-23",
    "map": "dust2",
    "type": "molotov",
    "side": "CT",
    "position": "Long Doors",
    "name": "Long Doors",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "",
    "verified": false
  },
  {
    "id": "d2-24",
    "map": "dust2",
    "type": "molotov",
    "side": "CT",
    "position": "Upper Tunnels",
    "name": "Upper Tunnels",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "",
    "verified": false
  },
  {
    "id": "d2-25",
    "map": "dust2",
    "type": "he",
    "side": "CT",
    "position": "Long Doors",
    "name": "Long Doors",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "",
    "verified": false
  },
  {
    "id": "d2-26",
    "map": "dust2",
    "type": "he",
    "side": "CT",
    "position": "Upper Tunnels",
    "name": "Upper Tunnels",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "",
    "verified": false
  },
  {
    "id": "d2-27",
    "map": "dust2",
    "type": "he",
    "side": "T",
    "position": "Goose",
    "name": "Goose",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "",
    "verified": false
  },
  {
    "id": "d2-28",
    "map": "dust2",
    "type": "he",
    "side": "T",
    "position": "B Car",
    "name": "B Car",
    "notes": "Тактическая цель для будущей раскидки. Техника броска требует проверки в игре.",
    "source": "",
    "verified": false
  }
];
