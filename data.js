// Каталог карт и схема данных. Добавляйте подтверждённые раскидки в массив lineups.
const MAPS = [
 {id:"dust2",name:"Dust2",code:"D2",desc:"Классическая карта с длинной, мидом и точками A/B."},
 {id:"mirage",name:"Mirage",code:"MRG",desc:"Контроль мида, коннектора и выходы на A и B."},
 {id:"inferno",name:"Inferno",code:"INF",desc:"Узкие проходы, банан и борьба за контроль карты."},
 {id:"nuke",name:"Nuke",code:"NUK",desc:"Вертикальная карта с верхней и нижней точками."},
 {id:"ancient",name:"Ancient",code:"ANC",desc:"Контроль мида и проходов к точкам."},
 {id:"anubis",name:"Anubis",code:"ANU",desc:"Водные проходы и пространство вокруг мида."},
 {id:"overpass",name:"Overpass",code:"OVP",desc:"Большие дистанции и контроль коннектора."},
 {id:"vertigo",name:"Vertigo",code:"VRT",desc:"Вертикальные уровни и узкие выходы."},
 {id:"train",name:"Train",code:"TRN",desc:"Позиционная борьба между вагонами и точками."}
];
// Не добавляйте непроверенные lineup-данные: точка броска, прицел и результат должны быть подтверждены.
const lineups = [];