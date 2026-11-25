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
    "notes": "Встань в угол, наведи прицел на сколотый край стены.",
    "source": "https://www.cs2util.com/ru/dust2/smoke/xbox-smoke-from-nomal-t-spawn",
    "verified": false,
    "start": "T Spawn",
    "throw": "ЛКМ в прыжке",
    "command": "setpos -299.968933 -1163.764160 136.982574;setang -12.228539 90.173004 0.000000",
    "documented": true
  },
  {
    "id": "d2-2",
    "map": "dust2",
    "type": "smoke",
    "side": "T",
    "position": "CT Spawn",
    "name": "CT Spawn",
    "notes": "Оставайся неподвижным; точный прицел смотри в гайде.",
    "source": "https://www.cs2util.com/ru/dust2/smoke/ct-spawn-smoke-for-cross-from-short",
    "verified": false,
    "start": "Short",
    "throw": "ЛКМ стоя",
    "command": "setpos 195.438156 1339.492188 63.767769;setang -15.735346 66.281380 0.000000",
    "documented": true
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
    "notes": "Встань у середины колонны, наведи прицел в просвет крыши.",
    "source": "https://www.cs2util.com/ru/dust2/smoke/b-doors-smoke-from-upper-tunnels",
    "verified": false,
    "start": "Верхняя темка",
    "throw": "ЛКМ стоя",
    "command": "setpos -1783.082520 1034.343994 101.382843;setang -57.756500 68.491074 0.000000",
    "documented": true
  },
  {
    "id": "d2-6",
    "map": "dust2",
    "type": "smoke",
    "side": "T",
    "position": "B Window",
    "name": "B Window",
    "notes": "Не двигайся перед броском; точный прицел смотри в гайде.",
    "source": "https://www.cs2util.com/ru/dust2/smoke/window-smoke-from-upper-tunnels2",
    "verified": false,
    "start": "Верхняя темка",
    "throw": "ЛКМ в прыжке",
    "command": "setpos -1729.437012 1064.032349 95.586044;setang -62.608059 74.675156 0.000000",
    "documented": true
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
[
  [
    "xbox-long", "T", "Long",
    "ЛКМ в прыжке",
    "xbox-smoke-from-long",
    "824.274841 808.032593 110.871246",
    "0.640108 159.957138 0.000000"
  ],
  [
    "xbox-right-mid", "T", "Right Mid",
    "ЛКМ стоя",
    "xbox-smoke-from-right-side-mid",
    "-621.944885 536.474792 72.245239",
    "-12.452237 51.989853 0.000000"
  ],
  [
    "xbox-ct-mid", "CT", "CT Mid",
    "ЛКМ стоя",
    "mid-xbox-smoke-from-ct-mid",
    "-337.030701 2423.886475 -27.578003",
    "-21.000351 -101.632050 0.000000"
  ],
  [
    "xbox-barrels", "T", "Mid Barrels",
    "Два шага бегом + ЛКМ",
    "xbox-smoke-from-mid-barrels",
    "29.621044 308.031616 63.484333",
    "-14.151875 127.986572 0.000000"
  ],
  [
    "xbox-spawn3", "T", "Spawn 3",
    "ЛКМ в прыжке",
    "spawn3-TO-XBOX",
    "-428.000000 -843.000000 156.245865",
    "-12.552456 86.206802 0.000000"
  ]
].forEach(([id,side,start,method,slug,pos,ang]) => {
  if (lineups.some(x => x.id === "d2-" + id)) return;

  lineups.push({
    id: "d2-" + id,
    map: "dust2",
    type: "smoke",
    side: side,
    position: "Xbox",
    name: "Xbox — " + start,
    notes: "Точный прицел смотри в оригинальном гайде.",
    source: "https://www.cs2util.com/ru/dust2/smoke/" + slug,
    verified: false,
    start: start,
    throw: method,
    command: "setpos " + pos + ";setang " + ang,
    documented: true
  });
});
