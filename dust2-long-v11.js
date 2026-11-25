(() => {
  const base = "https://www.cs2util.com/ru/dust2/smoke/";
  const assets = "https://assets.cs2util.com/dust2/smoke/";

  const rows = [
    [
      "cross-corner", "T", "Long Cross", "Long Corner",
      "Один шаг бегом + ЛКМ",
      "a-site-cross-smoke-from-long-corner",
      "A-Cross-Smoke/A-Site-Cross-Smoke-From-LongCorner/A-Site-Cross-Smoke-From-LongCorner",
      "1093.952881 1041.454712 61.466431",
      "-24.856819 43.524269 0.000000"
    ],
    [
      "cross-outside", "T", "Long Cross", "Outside Long",
      "ЛКМ в прыжке",
      "a-site-cross-smoke-from-outside-long",
      "A-Cross-Smoke/a-site-cross-smoke-from-outside-long",
      "148.031631 182.845901 71.871246",
      "-36.960411 66.727745 0.000000"
    ],
    [
      "doors-boost", "CT", "Long Doors", "Boost",
      "ЛКМ в прыжке",
      "a-doors-smoke-from-boost",
      "a-doors/a-doors-smoke-from-boost",
      "769.603699 2379.968750 23.974022",
      "-53.063427 -91.740768 0.000000"
    ],
    [
      "doors-cross", "CT", "Long Doors", "Cross",
      "ЛКМ в прыжке",
      "a-door-smoke-from-cross",
      "a-doors/a-door-smoke-from-cross",
      "1004.968750 2379.968750 85.677078",
      "-24.779676 -102.116707 0.000000"
    ],
    [
      "long-short", "T/CT", "Long", "A Short",
      "ЛКМ стоя",
      "a-long-smoke-from-a-plat1",
      "long/a-long-smoke-from-a-plat1",
      "499.968109 2319.597412 160.918091",
      "-20.882591 -33.603992 0.000000"
    ],
    [
      "long-boost", "T/CT", "Long", "Boost",
      "ЛКМ стоя",
      "a-long-smoke-from-boost",
      "long/a-long-smoke-from-boost",
      "654.290100 2314.969727 23.222164",
      "-30.303974 -39.561829 0.000000"
    ],
    [
      "long-plat3", "T/CT", "Long", "A Plat 3",
      "ЛКМ в прыжке",
      "a-long-smoke-from-a-plat3",
      "long/a-long-smoke-from-a-plat3",
      "828.688660 2751.885742 160.270111",
      "4.936623 -58.280846 0.000000"
    ],
    [
      "long-spawn1", "T", "Long", "T Spawn 1",
      "ЛКМ в прыжке",
      "a-long-smoke-from-t-spwan1",
      "long/a-long-smoke-from-t-spwan1",
      "-510.250977 -662.343689 185.233673",
      "-19.921957 46.132618 0.000000"
    ],
    [
      "cross-mid", "T", "Long Cross", "Right Mid",
      "Присесть + бросок ЛКМ в прыжке",
      "a-site-cross-smoke-from-rs-mid",
      "A-Cross-Smoke/a-site-cross-smoke-from-rs-mid",
      "-633.968750 556.032166 72.725800",
      "-37.152508 43.922619 0.000000"
    ],
    [
      "long-plat2", "T/CT", "Long", "A Plat 2",
      "ЛКМ присев",
      "a-long-smoke-from-a-plat2",
      "long/a-long-smoke-from-a-plat2",
      "987.968750 2444.031494 160.468201",
      "-13.203747 -51.884232 0.000000"
    ],
    [
      "long-protection", "T", "Long", "По гайду",
      "ЛКМ в прыжке",
      "long-take-protection-smoke",
      "long/long-take-protection-smoke",
      "-191.827759 -660.059326 111.370132",
      "-28.318327 54.490341 0.000000"
    ],
    [
      "long-protection-spawn1", "T", "Long", "T Spawn 1",
      "ЛКМ в прыжке",
      "long-take-protection-smoke-from-t-spawn1",
      "long/long-take-protection-smoke-from-t-spawn1",
      "-332.000000 -754.000000 138.169220",
      "-21.779976 52.009945 0.000000"
    ],
    [
      "cross-blue", "T", "Long Cross", "Blue Box",
      "ЛКМ стоя",
      "a-site-cross-smoke-from-blue-box",
      "A-Cross-Smoke/a-site-cross-smoke-from-blue-box",
      "897.483826 1070.968506 64.584160",
      "-55.395741 78.540443 0.000000"
    ],
    [
      "long-cutoff", "CT", "Long", "По гайду",
      "ЛКМ стоя",
      "ct-long-cut-off-smoke",
      "long/ct-long-cut-off-smoke",
      "1004.970398 2304.832031 81.214508",
      "-12.890932 -49.095245 0.000000"
    ]
  ];

  window.GRANDE_MEDIA = window.GRANDE_MEDIA || {};

  rows.forEach(([key,side,position,start,method,slug,video,pos,ang]) => {
    const id = "d2-" + key;

    if (!lineups.some(x => x.id === id)) {
      lineups.push({
        id,
        map: "dust2",
        type: "smoke",
        side,
        position,
        name: position + " — " + start +
          (key.includes("protection") ? " (Protection)" :
           key === "long-cutoff" ? " (Cut-off)" : ""),
        notes: "Точный прицел смотри в видео или оригинальном гайде.",
        source: base + slug,
        verified: false,
        start,
        throw: method,
        command: "setpos " + pos + ";setang " + ang,
        documented: true
      });
    }

    window.GRANDE_MEDIA[id] = {
      video: assets + video + ".webm"
    };
  });
})();
