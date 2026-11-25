(() => {
 const tg = window.Telegram?.WebApp;
 if (tg) { tg.ready(); tg.expand(); try { tg.setHeaderColor("#10151b"); tg.setBackgroundColor("#10151b"); } catch(e) {} }
 const $ = id => document.getElementById(id);
 const state = {type:"all",side:"all",map:"all",favorites:false,selected:null};
 const favorites = new Set(JSON.parse(localStorage.getItem("cs2-favorites") || "[]"));
 const typeNames = {smoke:"СМОК",flash:"ФЛЕШКА",molotov:"МОЛОТОВ",he:"HE"};
 MAPS.forEach(m => $("mapSelect").add(new Option(m.name,m.id)));
 function saveFav(){localStorage.setItem("cs2-favorites",JSON.stringify([...favorites]));}
 function renderMaps(){
   const q=$("search").value.trim().toLowerCase();
   const filtered=MAPS.filter(m=>(state.map==="all"||m.id===state.map)&&(!q||m.name.toLowerCase().includes(q)||m.desc.toLowerCase().includes(q))&&(!state.favorites||favorites.has(m.id)));
   $("mapGrid").innerHTML=filtered.map(m=>`<button class="map-card" data-map="${m.id}"><span class="map-code">${m.code}</span><strong>${m.name}</strong><small>${lineups.filter(x=>x.map===m.id).length} раскидок в базе</small></button>`).join("") || `<div class="empty">Ничего не найдено. Попробуй изменить поиск или фильтр.</div>`;
   $("count").textContent=`${filtered.length} карт`;
   $("mapGrid").querySelectorAll("[data-map]").forEach(b=>b.addEventListener("click",()=>openMap(b.dataset.map)));
 }
 function openMap(id){
   state.selected=id; const m=MAPS.find(x=>x.id===id);
   $("lineupsSection").hidden=false;$("mapGrid").hidden=true;$("filters").hidden=true;$("tabs").hidden=true;$("search").parentElement.hidden=true;
   $("listTitle").textContent="Раскидки";$("detailMapName").textContent=m.name;$("detailMapDesc").textContent=m.desc;
   const positions=[...new Set(lineups.filter(x=>x.map===id).map(x=>x.position))];
   $("positionSelect").innerHTML='<option value="all">Все позиции</option>'+positions.map(p=>`<option>${p}</option>`).join("");
   renderLineups();
 }
 function renderLineups(){
   const q=$("lineupSearch").value.toLowerCase(),pos=$("positionSelect").value;
   const items=lineups.filter(x=>x.map===state.selected&&(state.type==="all"||x.type===state.type)&&(state.side==="all"||x.side===state.side)&&(pos==="all"||x.position===pos)&&(!q||`${x.name} ${x.position} ${x.notes||""}`.toLowerCase().includes(q)));
   $("lineupList").innerHTML=items.length?items.map(x=>`<article class="lineup-card"><h3>${x.name}</h3><div class="chips"><span class="chip">${typeNames[x.type]||x.type}</span><span class="chip">${x.side}</span><span class="chip">${x.position}</span></div><p>${x.notes||"Инструкция будет добавлена после проверки раскидки."}</p></article>`).join(""):`<div class="empty"><b>База раскидок пока не заполнена.</b><br>Каталог карт уже работает. Следующий этап — добавить проверенные точки броска, прицелы, пошаговые инструкции и видео. Непроверенные позиции не показываем как готовые раскидки.</div>`;
 }
 $("backToMaps").addEventListener("click",()=>{state.selected=null;$("lineupsSection").hidden=true;$("mapGrid").hidden=false;$("filters").hidden=false;$("tabs").hidden=false;$("search").parentElement.hidden=false;$("listTitle").textContent="Популярные карты";renderMaps();});
 $("search").addEventListener("input",renderMaps);$("mapSelect").addEventListener("change",e=>{state.map=e.target.value;renderMaps();});
 document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));b.classList.add("active");state.type=b.dataset.type;if(state.selected)renderLineups();}));
 document.querySelectorAll(".side").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".side").forEach(x=>x.classList.remove("active"));b.classList.add("active");state.side=b.dataset.side;if(state.selected)renderLineups();}));
 $("lineupSearch").addEventListener("input",renderLineups);$("positionSelect").addEventListener("change",renderLineups);
 $("favToggle").addEventListener("click",()=>{state.favorites=!state.favorites;$("favToggle").textContent=state.favorites?"★":"☆";renderMaps();});
 renderMaps();
})();