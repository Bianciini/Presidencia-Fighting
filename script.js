// PRESIDÊNCIA FIGHTERS — ARCADE EDITION
// Personagens estilizados em Canvas para evitar dependência de imagens externas.
// As habilidades e atributos abaixo são elementos fictícios do jogo.

const roster=[
{name:"Lula",tag:"PT",color:"#d93648",accent:"#f1d3bd",power:"Discurso Incansável",supreme:"Onda da Esperança",stats:[7,7,6]},
{name:"Flávio Bolsonaro",tag:"PL",color:"#4d78c9",accent:"#d8b293",power:"Defesa Estratégica",supreme:"Impacto Nacional",stats:[7,6,8]},
{name:"Ronaldo Caiado",tag:"PSD",color:"#4b9867",accent:"#d8ae89",power:"Comando Rural",supreme:"Força do Cerrado",stats:[8,6,7]},
{name:"Rui Costa Pimenta",tag:"PCO",color:"#bd3040",accent:"#e1b294",power:"Manifesto",supreme:"Revolução Vermelha",stats:[6,8,8]},
{name:"Samara Martins",tag:"UP",color:"#8d4cbd",accent:"#d6aa8b",power:"Mobilização",supreme:"Força Popular",stats:[7,7,7]},
{name:"Romeu Zema",tag:"NOVO",color:"#20aab1",accent:"#d9ae8e",power:"Gestão Eficiente",supreme:"Plano Econômico",stats:[8,6,7]},
{name:"Hertz Dias",tag:"PSTU",color:"#df4d59",accent:"#d5a786",power:"Resistência",supreme:"Fúria Trabalhadora",stats:[8,7,8]},
{name:"Edmilson Costa",tag:"PCB",color:"#a92d3b",accent:"#d5aa8e",power:"Organização",supreme:"Maré Vermelha",stats:[6,8,8]},
{name:"Renan Santos",tag:"MISSÃO",color:"#df7d31",accent:"#dcb18e",power:"Influência",supreme:"Chamado Nacional",stats:[7,8,7]},
{name:"Wilson Grassi",tag:"DEMOCRATA",color:"#4f78b7",accent:"#d8af90",power:"Proteção",supreme:"Escudo Democrático",stats:[6,6,9]},
{name:"Clariana Barão",tag:"DC",color:"#c1549a",accent:"#d8af91",power:"Determinação",supreme:"Estrela Nacional",stats:[7,7,7]},
{name:"Augusto Cury",tag:"AVANTE",color:"#d8a13b",accent:"#d6ac8c",power:"Mente Estratégica",supreme:"Tempestade Mental",stats:[6,8,9]}
];

const realPhotos={
  "Lula":"https://commons.wikimedia.org/wiki/Special:FilePath/2022%20LULA%20CANDIDATO%20PRESIDENTE%20TSE%20%28280001607829%29.jpg",
  "Flávio Bolsonaro":"https://commons.wikimedia.org/wiki/Special:FilePath/2026%20FLAVIO%20BOLSONARO%20CANDIDATO%20PRESIDENTE%20TSE%20%28280002551544%29.jpg",
  "Ronaldo Caiado":"https://commons.wikimedia.org/wiki/Special:FilePath/2026%20RONALDO%20CAIADO%20CANDIDATO%20PRESIDENTE%20TSE%20%28280002551932%29.jpg",
  "Rui Costa Pimenta":"https://commons.wikimedia.org/wiki/Special:FilePath/2026%20RUI%20COSTA%20PIMENTA%20CANDIDATO%20PRESIDENTE%20TSE%20%28280002552487%29.jpg",
  "Samara Martins":"https://commons.wikimedia.org/wiki/Special:FilePath/2026%20SAMARA%20CANDIDATA%20PRESIDENTE%20TSE%20%28280002538811%29.JPG",
  "Romeu Zema":"https://commons.wikimedia.org/wiki/Special:FilePath/Romeu%20Zema%202025.jpg",
  "Hertz Dias":"https://commons.wikimedia.org/wiki/Special:FilePath/2026%20HERTZ%20DIAS%20CANDIDATO%20PRESIDENTE%20TSE%20%28280002541457%29.jpg",
  "Edmilson Costa":"https://commons.wikimedia.org/wiki/Special:FilePath/2026%20EDMILSON%20COSTA%20CANDIDATO%20PRESIDENTE%20TSE%20%28280002551975%29.jpg",
  "Renan Santos":"https://commons.wikimedia.org/wiki/Special:FilePath/2026%20RENAN%20SANTOS%20CANDIDATO%20PRESIDENTE%20TSE%20%28280002540694%29.jpg",
  "Wilson Grassi":"https://commons.wikimedia.org/wiki/Special:FilePath/2026%20VETERIN%C3%81RIO%20WILSON%20GRASSI%20CANDIDATO%20PRESIDENTE%20TSE%20%28280002548139%29.jpg",
  "Clariana Barão":"https://commons.wikimedia.org/wiki/Special:FilePath/2026%20CLARIANA%20BARAO%20CANDIDATA%20PRESIDENTE%20TSE%20%28280002552484%29.jpg",
  "Augusto Cury":"https://commons.wikimedia.org/wiki/Special:FilePath/2026%20ESCRITOR%20AUGUSTO%20CURY%20CANDIDATO%20PRESIDENTE%20TSE%20%28280002551547%29.jpg"
};

const looks={
 "Lula":{hair:"short",hairColor:"#eee8df",beard:"goatee",glasses:false,face:"round",tie:"#b52d39"},
 "Flávio Bolsonaro":{hair:"short",hairColor:"#392b25",beard:"none",glasses:false,face:"oval",tie:"#263b63"},
 "Ronaldo Caiado":{hair:"short",hairColor:"#77716b",beard:"none",glasses:false,face:"oval",tie:"#315c46"},
 "Rui Costa Pimenta":{hair:"curly",hairColor:"#262329",beard:"full",glasses:true,face:"long",tie:"#8e2635"},
 "Samara Martins":{hair:"long",hairColor:"#241c1d",beard:"none",glasses:false,face:"oval",tie:"#733a98"},
 "Romeu Zema":{hair:"short",hairColor:"#a8a39d",beard:"none",glasses:false,face:"long",tie:"#168b91"},
 "Hertz Dias":{hair:"short",hairColor:"#17181c",beard:"full",glasses:false,face:"oval",tie:"#a42e3b"},
 "Edmilson Costa":{hair:"short",hairColor:"#2b2421",beard:"mustache",glasses:true,face:"oval",tie:"#7d2632"},
 "Renan Santos":{hair:"short",hairColor:"#3a302b",beard:"none",glasses:false,face:"long",tie:"#b35b22"},
 "Wilson Grassi":{hair:"short",hairColor:"#332b29",beard:"none",glasses:true,face:"round",tie:"#31517c"},
 "Clariana Barão":{hair:"long",hairColor:"#201b1e",beard:"none",glasses:false,face:"oval",tie:"#9c3e7b"},
 "Augusto Cury":{hair:"short",hairColor:"#817a73",beard:"none",glasses:true,face:"round",tie:"#b57e21"}
};
roster.forEach(c=>c.look=looks[c.name]||{hair:"short",hairColor:"#262626",beard:"none",glasses:false,face:"oval",tie:"#222"});

const $=id=>document.getElementById(id);
const canvas=$("canvas"),ctx=canvas.getContext("2d");
let mode="arcade",selected=0,selectedP2=1,stage=0,player,cpu,p=null,e=null,keys={},last=0,raf=0,round=1,roundTimer=0,stageTimer=0,gameOver=true,aiTimer=0,selectStep=1,roundWinsP=0,roundWinsE=0,roundTransition=false;

function screen(id){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));$(id).classList.add("active")}
function portrait(c,scale=1){
 const cv=document.createElement("canvas");cv.width=240;cv.height=170;const x=cv.getContext("2d");
 drawChar(x,120,145,1.25,c,{portrait:true});return cv;
}
function drawChar(x,cx,cy,sc,c,opt={}){
 const l=c.look||{}; x.save();x.translate(cx,cy);x.scale(sc,sc);
 // sombra e iluminação de recorte
 x.fillStyle="#0009";x.beginPath();x.ellipse(0,9,42,10,0,0,Math.PI*2);x.fill();
 // pernas
 x.lineWidth=12;x.lineCap="round";x.strokeStyle="#d2d6dc";x.beginPath();x.moveTo(-10,-30);x.lineTo(-19,4);x.moveTo(10,-30);x.lineTo(19,4);x.stroke();
 x.fillStyle="#1d2330";x.fillRect(-29,1,18,7);x.fillRect(11,1,18,7);
 // corpo: paletó, camisa, lapela e gravata
 const coat=x.createLinearGradient(-24,-88,24,-30);coat.addColorStop(0,c.color);coat.addColorStop(1,"#111a2a");x.fillStyle=coat;x.beginPath();x.roundRect(-24,-84,48,54,6);x.fill();
 x.strokeStyle="#070a10";x.lineWidth=3;x.stroke();
 x.fillStyle="#f5f2ea";x.beginPath();x.moveTo(-8,-80);x.lineTo(0,-67);x.lineTo(8,-80);x.lineTo(8,-42);x.lineTo(-8,-42);x.closePath();x.fill();
 x.fillStyle=l.tie||"#222";x.beginPath();x.moveTo(0,-70);x.lineTo(5,-63);x.lineTo(2,-42);x.lineTo(-2,-42);x.lineTo(-5,-63);x.closePath();x.fill();
 // braços
 const a=opt.attack||"idle";x.strokeStyle=c.accent;x.lineWidth=13;
 if(a==="punch"){x.beginPath();x.moveTo(18,-67);x.lineTo(56,-65);x.stroke();x.fillStyle=c.accent;x.beginPath();x.arc(62,-65,9,0,Math.PI*2);x.fill()}
 else if(a==="kick"){x.beginPath();x.moveTo(13,-44);x.lineTo(53,-20);x.stroke();x.fillStyle="#202735";x.fillRect(49,-25,17,9)}
 else if(a==="guard"){x.beginPath();x.moveTo(-15,-66);x.lineTo(-38,-42);x.moveTo(15,-66);x.lineTo(38,-42);x.stroke()}
 else if(a==="supreme"){x.strokeStyle="#f7d75b";x.lineWidth=8;x.beginPath();x.moveTo(-18,-65);x.lineTo(-42,-35);x.moveTo(18,-65);x.lineTo(45,-35);x.stroke()}
 else{x.beginPath();x.moveTo(-18,-66);x.lineTo(-37,-37);x.moveTo(18,-66);x.lineTo(37,-37);x.stroke()}
 // pescoço
 x.fillStyle=c.accent;x.fillRect(-9,-96,18,14);
 // orelhas
 x.fillRect(-25,-114,6,13);x.fillRect(19,-114,6,13);
 // cabeça com gradiente
 const skin=x.createRadialGradient(-7,-120,3,0,-110,25);skin.addColorStop(0,"#f0c8a6");skin.addColorStop(1,c.accent);x.fillStyle=skin;
 x.beginPath();if(l.face==="round")x.ellipse(0,-112,24,27,0,0,Math.PI*2);else if(l.face==="long")x.ellipse(0,-112,21,29,0,0,Math.PI*2);else x.ellipse(0,-112,22,27,0,0,Math.PI*2);x.fill();
 // cabelo detalhado
 x.fillStyle=l.hairColor||"#222";
 if(l.hair==="long"){x.beginPath();x.ellipse(0,-119,27,30,0,0,Math.PI*2);x.fill();x.fillStyle=skin;x.beginPath();x.ellipse(0,-111,20,26,0,0,Math.PI*2);x.fill();x.fillStyle=l.hairColor;x.fillRect(-25,-121,8,37);x.fillRect(17,-121,8,37);x.beginPath();x.arc(0,-126,25,Math.PI,Math.PI*2);x.fill()}
 else if(l.hair==="curly"){x.beginPath();for(let i=0;i<15;i++){const ang=i*Math.PI*2/15;x.arc(Math.cos(ang)*20,-128+Math.sin(ang)*7,7,0,Math.PI*2)}x.fill();x.fillRect(-21,-125,42,12)}
 else{x.beginPath();x.arc(0,-121,24,Math.PI,Math.PI*2);x.fill();x.fillRect(-22,-121,8,13);x.fillRect(14,-121,8,10);}
 // sobrancelhas/olhos
 x.strokeStyle="#3a241c";x.lineWidth=2.5;x.beginPath();x.moveTo(-15,-115);x.lineTo(-5,-117);x.moveTo(5,-117);x.lineTo(15,-115);x.stroke();
 x.fillStyle="#181818";x.beginPath();x.arc(-10,-111,2.5,0,Math.PI*2);x.arc(10,-111,2.5,0,Math.PI*2);x.fill();
 // nariz, bochechas e boca
 x.strokeStyle="#9d6d52";x.lineWidth=1.7;x.beginPath();x.moveTo(0,-111);x.lineTo(-2,-101);x.lineTo(4,-100);x.stroke();
 x.fillStyle="#d99d88";x.globalAlpha=.35;x.beginPath();x.arc(-15,-103,5,0,Math.PI*2);x.arc(15,-103,5,0,Math.PI*2);x.fill();x.globalAlpha=1;
 // barba/bigode
 if(l.beard==="full"){x.fillStyle="#5b463b";x.beginPath();x.arc(0,-99,13,0,Math.PI);x.fill();x.fillRect(-11,-103,22,8)}
 if(l.beard==="goatee"){x.fillStyle="#77716b";x.fillRect(-4,-101,8,8);x.beginPath();x.arc(0,-96,6,0,Math.PI);x.fill()}
 if(l.beard==="mustache"){x.fillStyle="#4b3a31";x.fillRect(-9,-101,18,4)}
 x.strokeStyle="#4a2c25";x.lineWidth=2;x.beginPath();x.moveTo(-6,-96);x.quadraticCurveTo(0,-92,7,-96);x.stroke();
 // óculos
 if(l.glasses){x.strokeStyle="#25252b";x.lineWidth=2;x.fillStyle="#ffffff22";x.beginPath();x.rect(-18,-117,15,11);x.rect(3,-117,15,11);x.fill();x.stroke();x.beginPath();x.moveTo(-3,-112);x.lineTo(3,-112);x.stroke()}
 // pequena identificação visual
 if(!opt.portrait){x.fillStyle="#fff";x.font="bold 10px monospace";x.textAlign="center";x.fillText(c.name.toUpperCase(),0,28)}
 x.restore();
}
function renderRoster(){
 $("roster").innerHTML="";
 roster.forEach((c,i)=>{
  const b=document.createElement("button");b.className="card"+(i===selected?" focus":"");
  const po=document.createElement("div");po.className="portrait realPortrait";
  const img=document.createElement("img");img.src=realPhotos[c.name];img.alt=`Foto de ${c.name}`;img.loading="lazy";img.referrerPolicy="no-referrer";
  img.onerror=()=>{img.style.display="none";po.appendChild(portrait(c));};
  po.appendChild(img);b.appendChild(po);
  b.innerHTML+=`<div class="portraitBadge">1P</div><h3>${c.name}</h3><span class="tag">${c.tag}</span>
  <div class="power"><b>PODER:</b> ${c.power}<br><b>SUPREMO:</b> ${c.supreme}</div>
  <div class="hpSelect"><span>VIDA</span><b>500 HP</b></div>
  <div class="stats">${["ATK","SPD","DEF"].map((k,n)=>`<div class="stat">${k}<b>${c.stats[n]}</b></div>`).join("")}</div>`;
  b.onclick=()=>confirmChar(i);$("roster").appendChild(b);
 });
}
function confirmChar(i){
 selected=i;
 if(mode==="arcade"){
  player=roster[i];stage=0;buildRoute();screen("route");return;
 }
 if(mode==="duel"){
  player=roster[i];stage=0;cpu=roster[(i+1)%roster.length];beginFight();return;
 }
 if(mode==="versus"){
  if(selectStep===1){
   player=roster[i];selectStep=2;selectedP2=(i+1)%roster.length;selected=selectedP2;
   $("selectMode").textContent="VERSUS 2P · JOGADOR 2";
   $("selectHint").textContent="JOGADOR 2: escolha seu lutador e pressione ENTER ou clique no retrato";
   renderRoster();return;
  }
  cpu=roster[i];stage=0;beginFight();
 }
}
function buildRoute(){
 $("routeGrid").innerHTML="";
 // 11 rivais diferentes + um desafio final contra o rival mais distante.
 const order=[];for(let n=1;n<roster.length;n++)order.push((selected+n)%roster.length);order.push((selected+Math.floor(roster.length/2))%roster.length);
 order.forEach((idx,n)=>{
  const d=document.createElement("div");d.className="node"+(n===stage?" current":"")+(n<stage?" done":"")+(n>stage?" locked":"");
  const cv=portrait(roster[idx]);d.innerHTML=`<b>${String(n+1).padStart(2,"0")}</b>`;d.appendChild(cv);d.innerHTML+=`<span>${roster[idx].name}</span>`;
  $("routeGrid").appendChild(d);
 });
 $("startStage").textContent=stage<12?`COMEÇAR FASE ${stage+1} · ENTER`:"ARCADE COMPLETO";
}
function beginFight(){
 if(mode==="arcade"){
  const order=[];for(let n=1;n<roster.length;n++)order.push((selected+n)%roster.length);order.push((selected+Math.floor(roster.length/2))%roster.length);
  cpu=roster[order[stage%order.length]];
 }
 p={x:310,y:470,vx:0,vy:0,hp:500,en:0,guard:false,action:"idle",actionT:0,cool:0,hitFlash:0,ground:true,c:player,combo:0,comboTarget:null,comboTimer:0,stun:0,down:0,launch:0};
 e={x:890,y:470,vx:0,vy:0,hp:500,en:0,guard:false,action:"idle",actionT:0,cool:0,hitFlash:0,ground:true,c:cpu,combo:0,comboTarget:null,comboTimer:0,stun:0,down:0,launch:0};
 $("pName").textContent=player.name;$("pTag").textContent=player.tag;$("cpuName").textContent=cpu.name;$("cpuTag").textContent=cpu.tag;
 $("stageNo").textContent=mode==="arcade"?`STAGE ${stage+1}/12`:"DUEL";
 round=1;roundTimer=0;roundWinsP=0;roundWinsE=0;roundTransition=false;gameOver=false;aiTimer=0;
 screen("fight");banner(`ROUND ${round}`);last=performance.now();cancelAnimationFrame(raf);raf=requestAnimationFrame(loop);
}
function banner(t){$("roundBanner").textContent=t;$("roundBanner").classList.remove("show");void $("roundBanner").offsetWidth;$("roundBanner").classList.add("show")}
function call(t){$("callout").textContent=t;clearTimeout(call.t);call.t=setTimeout(()=>$("callout").textContent="",900)}
function updateHud(){$("pHp").style.width=Math.max(0,Math.min(100,p.hp/500*100))+"%";$("cpuHp").style.width=Math.max(0,Math.min(100,e.hp/500*100))+"%";$("pEn").style.width=p.en+"%";$("cpuEn").style.width=e.en+"%";$("roundNo").textContent=round;$("pRounds").textContent=roundWinsP;$("cpuRounds").textContent=roundWinsE}
function dist(){return Math.abs(p.x-e.x)}
function move(s,dx){
 if(!canAct(s))return;
 const other=s===p?e:p;
 let nx=Math.max(80,Math.min(1120,s.x+dx));
 const minGap=78;
 if(other && other.down<=0 && Math.abs(nx-other.x)<minGap) nx=other.x+(nx>=other.x?minGap:-minGap);
 s.x=Math.max(80,Math.min(1120,nx));
 if(dx)s.vx=dx;
}
function jump(s){if(s.ground){s.vy=-330;s.ground=false}}
function guard(s,on){s.guard=on;if(on)s.action="guard"}
function canAct(s){return !gameOver && s.stun<=0 && s.down<=0 && s.cool<=0}

function knockdown(def,launch=1){
 def.combo=0;def.comboTarget=null;def.comboTimer=0;def.stun=0;def.down=.30;def.launch=launch;def.guard=false;def.action="down";
 def.vy=0;def.y=470;def.ground=true;
}

function attack(att,def,type){
 if(!canAct(att))return;
 if(def.down>0)return;
 const range={punch:112,kick:148,power:185}[type],base={punch:7,kick:10,power:15}[type];
 if(Math.abs(att.x-def.x)>range){call("ERROU!");att.cool=.18;return}
 let dmg=base+att.c.stats[0];
 if(def.guard)dmg=Math.max(1,Math.ceil(dmg*(.55-def.c.stats[2]*.015)));
 def.hp=Math.max(0,def.hp-dmg);def.hitFlash=.18;
 att.en=Math.min(100,att.en+({punch:14,kick:18,power:25}[type]));
 att.action=type;att.actionT=.24;att.cool=type==="power"?.55:.20;

 if(type==="power"){
   att.combo=0;att.comboTarget=null;att.comboTimer=0;
   def.stun=0;
   knockdown(def,1);
   call(att.c.power.toUpperCase()+" · QUEDA!");
 }else{
   if(att.comboTarget!==def || att.comboTimer<=0)att.combo=1;
   else att.combo=Math.min(3,att.combo+1);
   att.comboTarget=def;att.comboTimer=.62;
   def.stun=.48;def.guard=false;def.action="hit";def.actionT=.22;
   call("COMBO "+att.combo+"/3 · "+(type==="punch"?"SOCO!":"CHUTE!"));
   if(att.combo>=3){
     knockdown(def,1);
     call("COMBO FINAL · "+att.c.supreme.toUpperCase()+"!");
   }
 }
 if(def.hp<=0)endRound(att===p);
}
function supreme(att,def){
 if(!canAct(att))return;
 if(att.en<100){call("ENERGIA INSUFICIENTE!");return}
 if(Math.abs(att.x-def.x)>190){call("CHEGUE MAIS PERTO!");return}
 att.en=0;att.combo=0;att.comboTarget=null;att.comboTimer=0;att.action="supreme";att.actionT=.65;att.cool=1.0;
 let dmg=34+att.c.stats[0]*2;if(def.guard)dmg=Math.ceil(dmg*.45);
 def.hp=Math.max(0,def.hp-dmg);def.hitFlash=.3;
 knockdown(def,1.25);
 call("⚡ "+att.c.supreme.toUpperCase()+" · SUPREMO! ⚡");
 if(def.hp<=0)endRound(att===p);
}
function playerInput(k){
 if(gameOver)return;
 if(k==="ArrowLeft")move(p,-18);else if(k==="ArrowRight")move(p,18);else if(k==="ArrowUp")jump(p);
 else if(k==="a")attack(p,e,"punch");else if(k==="s")attack(p,e,"kick");else if(k==="d")attack(p,e,"power");else if(k==="z")guard(p,true);else if(k==="x")supreme(p,e);
}
function player2Input(k){
 if(gameOver||mode!=="versus")return;
 if(k==="j")move(e,-18);else if(k==="l")move(e,18);else if(k==="i")jump(e);
 else if(k==="1")attack(e,p,"punch");else if(k==="2")attack(e,p,"kick");else if(k==="3")attack(e,p,"power");else if(k==="4")guard(e,true);else if(k==="5")supreme(e,p);
}
function ai(){
 if(gameOver)return;if(e.cool>0)return;const d=p.x-e.x,ad=Math.abs(d);
 e.guard=false;
 if(e.en>=100&&ad<185&&Math.random()<.22)return supreme(e,p);
 if(ad>140){move(e,d>0?12:-12);return}
 const r=Math.random();if(r<.18)guard(e,true);else if(r<.52)attack(e,p,"punch");else if(r<.78)attack(e,p,"kick");else attack(e,p,"power");
}
function physics(s,dt){
 if(s.comboTimer>0){
   s.comboTimer=Math.max(0,s.comboTimer-dt);
   if(s.comboTimer===0 && s.combo>0){
     if(s.comboTarget && s.comboTarget.down<=0 && s.comboTarget.hp>0)knockdown(s.comboTarget,1);
     s.combo=0;s.comboTarget=null;
   }
 }
 s.stun=Math.max(0,s.stun-dt);
 s.down=Math.max(0,s.down-dt);
 if(s.down<=0 && s.action==="down"){s.action="idle";s.launch=0}
 if(!s.ground){s.vy+=800*dt;s.y+=s.vy*dt;if(s.y>=470){s.y=470;s.vy=0;s.y=470;s.ground=true}}
 s.actionT=Math.max(0,s.actionT-dt);s.cool=Math.max(0,s.cool-dt);s.hitFlash=Math.max(0,s.hitFlash-dt);
 if(s.actionT<=0&&!s.guard&&s.stun<=0&&s.down<=0)s.action="idle";
}
function resolveFighterSpacing(){
 if(!p||!e)return;
 const minGap=78;
 const dx=e.x-p.x;
 const ad=Math.abs(dx);
 if(ad<minGap){
   const dir=dx===0?1:(dx>0?1:-1);
   const push=(minGap-ad)/2;
   p.x=Math.max(80,Math.min(1120,p.x-dir*push));
   e.x=Math.max(80,Math.min(1120,e.x+dir*push));
 }
}
function update(dt){
 physics(p,dt);physics(e,dt);
 resolveFighterSpacing();
 if(mode!=="versus" && !roundTransition) ai();
 updateHud();
}
function drawBackground(){
 const x=ctx;x.clearRect(0,0,1200,620);
 const g=x.createLinearGradient(0,0,0,620);g.addColorStop(0,"#17243a");g.addColorStop(1,"#070a11");x.fillStyle=g;x.fillRect(0,0,1200,620);
 // detailed arcade city
 for(let i=0;i<16;i++){const bx=i*78,bh=90+(i%5)*35;x.fillStyle=i%2?"#162137":"#10192a";x.fillRect(bx,470-bh,65,bh);
  for(let yy=480-bh;yy<465;yy+=20){x.fillStyle=i%3?"#2b5270":"#6a5631";x.fillRect(bx+9,yy,7,5);x.fillRect(bx+28,yy,7,5);x.fillRect(bx+47,yy,7,5)}
 }
 x.fillStyle="#25334d";x.fillRect(0,470,1200,150);x.strokeStyle="#415474";x.lineWidth=3;
 for(let i=0;i<12;i++){x.beginPath();x.moveTo(i*110,470);x.lineTo(i*110+70,620);x.stroke()}
 x.fillStyle="#ffd447";x.beginPath();x.arc(600,88,38,0,Math.PI*2);x.fill();
 x.fillStyle="#0b1019";x.font="16px monospace";x.textAlign="center";x.fillText("PRAÇA DOS TRÊS PODERES",600,150);
}
function draw(){
 drawBackground();
 function fighter(s,c,flip){
   ctx.save();
   if(flip){ctx.translate(s.x,0);ctx.scale(-1,1);}
   else ctx.translate(s.x,0);
   const yy=s.down>0?492:s.y;
   if(s.down>0){ctx.translate(0,yy);ctx.rotate(flip?Math.PI/2:-Math.PI/2);if(s.hitFlash>0)ctx.globalAlpha=.65;drawChar(ctx,0,0,1.35,c,{attack:"down"});}
   else {if(s.hitFlash>0)ctx.globalAlpha=.65;drawChar(ctx,0,yy,1.35,c,{attack:s.action});}
   ctx.restore();ctx.globalAlpha=1;
 }
 fighter(p,player,false);fighter(e,cpu,true);
 ctx.fillStyle="#ffffff44";ctx.fillRect(0,470,1200,2);
 // indicador de combo
 if(p.combo>0&&p.comboTimer>0){ctx.fillStyle="#ffd447";ctx.font="bold 22px monospace";ctx.textAlign="left";ctx.fillText(`COMBO ${p.combo}/3`,55,110)}
 if(e.combo>0&&e.comboTimer>0){ctx.fillStyle="#ff6d6d";ctx.font="bold 22px monospace";ctx.textAlign="right";ctx.fillText(`COMBO ${e.combo}/3`,1145,110)}
}
function loop(now){const dt=Math.min(.035,(now-last)/1000);last=now;update(dt);draw();if(!gameOver)raf=requestAnimationFrame(loop)}
function endRound(playerWon){
 if(gameOver||roundTransition)return;
 roundTransition=true;
 if(playerWon) roundWinsP++; else roundWinsE++;
 const winnerName=playerWon?player.name:cpu.name;
 banner(`${winnerName.toUpperCase()} VENCEU O ROUND`);
 setTimeout(()=>{
   if(roundWinsP>=2 || roundWinsE>=2){
     gameOver=true;roundTransition=false;cancelAnimationFrame(raf);
     finishMatch(roundWinsP>=2);
     return;
   }
   round++;
   p.x=310;p.y=470;p.vx=0;p.vy=0;p.hp=500;p.en=0;p.guard=false;p.action="idle";p.actionT=0;p.cool=0;p.stun=0;p.down=0;p.combo=0;p.comboTarget=null;p.comboTimer=0;p.ground=true;
   e.x=890;e.y=470;e.vx=0;e.vy=0;e.hp=500;e.en=0;e.guard=false;e.action="idle";e.actionT=0;e.cool=0;e.stun=0;e.down=0;e.combo=0;e.comboTarget=null;e.comboTimer=0;e.ground=true;
   roundTransition=false;banner(`ROUND ${round}`);last=performance.now();
 },900);
}
function finishMatch(playerWon){
 if(!playerWon){showResult("DERROTA",`${cpu.name} venceu a melhor de 3 (${roundWinsE}–${roundWinsP}).`,["TENTAR NOVAMENTE"]);return}
 if(mode==="arcade"&&stage<11){stage++;buildRoute();showResult("FASE CONCLUÍDA",`${player.name} venceu ${cpu.name} por ${roundWinsP}–${roundWinsE}. Próximo adversário liberado.`,["PRÓXIMA LUTA"])}
 else if(mode==="arcade"){showResult("ARCADE CLEAR",`${player.name} completou os 12 desafios.`,["JOGAR NOVAMENTE","MENU"])}
 else showResult("VITÓRIA",`${player.name} venceu ${cpu.name} por ${roundWinsP}–${roundWinsE}.`,["NOVO DUELO","MENU"]);
}
function win(playerWon){endRound(playerWon)}
function showResult(title,text,buttons){
 $("resultTitle").textContent=title;$("resultText").textContent=text;$("resultButtons").innerHTML="";
 buttons.forEach(label=>{const b=document.createElement("button");b.textContent=label;b.onclick=()=>{
  if(label==="PRÓXIMA LUTA"){screen("route");buildRoute();$("startStage").focus()}
  else if(label==="NOVO DUELO"){selectMode("duel")}
  else if(label==="TENTAR NOVAMENTE"){beginFight()}
  else {stage=0;screen("menu")}
 };$("resultButtons").appendChild(b)});
 screen("result");
}
function openModeMenu(){
 gameOver=true;cancelAnimationFrame(raf);roundTransition=false;selectStep=1;stage=0;screen("menu");
 document.querySelectorAll(".mode").forEach(x=>x.classList.toggle("selected",x.dataset.mode===mode));
}

document.querySelectorAll(".mode").forEach(b=>b.onclick=()=>selectMode(b.dataset.mode));
function selectMode(m){
 mode=m;
 document.querySelectorAll(".mode").forEach(x=>x.classList.toggle("selected",x.dataset.mode===m));
 selectStep=1;selected=0;
 if($("selectMode")) $("selectMode").textContent=m==="arcade"?"ARCADE":m==="duel"?"DUELO LIVRE":"VERSUS 2P · JOGADOR 1";
 if($("selectHint")) $("selectHint").textContent=m==="versus"?"JOGADOR 1: escolha seu lutador e pressione ENTER ou clique no retrato":"SETAS · ESCOLHER | ENTER · CONFIRMAR | ESC · VOLTAR";
 screen("select");renderRoster();
}
function backToMenu(){gameOver=true;cancelAnimationFrame(raf);screen("menu");}
function navigateSelect(dx,dy){
 const cols=4, rows=Math.ceil(roster.length/cols);let r=Math.floor(selected/cols),c=selected%cols;
 c=(c+dx+cols)%cols;r=(r+dy+rows)%rows;let next=r*cols+c;if(next>=roster.length)next=roster.length-1;selected=next;renderRoster();
}
document.querySelectorAll(".touch button").forEach(b=>{
 const k=b.dataset.k;
 const release=()=>{b.classList.remove("pressed");if(k==="z" && p) guard(p,false)};
 b.addEventListener("pointerdown",ev=>{
   ev.preventDefault();
   b.classList.add("pressed");
   if(b.setPointerCapture) b.setPointerCapture(ev.pointerId);
   if(k==="z") guard(p,true); else playerInput(k);
 });
 b.addEventListener("pointerup",release);
 b.addEventListener("pointercancel",release);
 b.addEventListener("lostpointercapture",release);
});
$("startStage").onclick=beginFight;
window.addEventListener("keydown",ev=>{
 const k=ev.key.length===1?ev.key.toLowerCase():ev.key;
 if($("menu").classList.contains("active")){
  if(k==="ArrowUp"||k==="ArrowDown"){
   const modes=["arcade","duel","versus"],i=modes.indexOf(mode),ni=k==="ArrowDown"?(i+1)%3:(i+2)%3;selectMode(modes[ni]);ev.preventDefault();return;
  }
  if(k==="Enter"||k==="a"){selectMode(mode);ev.preventDefault();return;}
 }
 if($("select").classList.contains("active")){
  if(k==="Escape"){if(selectStep===2&&mode==="versus"){selectStep=1;selected=roster.indexOf(player);$("selectMode").textContent="VERSUS 2P · JOGADOR 1";$("selectHint").textContent="JOGADOR 1: escolha seu lutador e pressione ENTER ou clique no retrato";renderRoster()}else backToMenu();ev.preventDefault();return;}
  if(k==="ArrowLeft"){navigateSelect(-1,0);ev.preventDefault();return}
  if(k==="ArrowRight"){navigateSelect(1,0);ev.preventDefault();return}
  if(k==="ArrowUp"){navigateSelect(0,-1);ev.preventDefault();return}
  if(k==="ArrowDown"){navigateSelect(0,1);ev.preventDefault();return}
  if(k==="Enter"||k==="a"){confirmChar(selected);ev.preventDefault();return}
 }
 if(k==="Enter"){
  if($("route").classList.contains("active"))beginFight();
  else if($("result").classList.contains("active")){$("resultButtons button")?.click()}
 }
 if(k==="Escape"&&$("route").classList.contains("active")){backToMenu();return}
 if($("fight").classList.contains("active")){
  if(["ArrowLeft","ArrowRight","ArrowUp","a","s","d","z","x"].includes(k)){ev.preventDefault();if(k==="z"&&p)guard(p,true);else playerInput(k)}
  if(mode==="versus"&&["j","l","i","1","2","3","4","5"].includes(k)){ev.preventDefault();if(k==="4"&&e)guard(e,true);else player2Input(k)}
 }
});
window.addEventListener("keyup",ev=>{const k=ev.key.toLowerCase();if(k==="z"&&p)guard(p,false);if(k==="4"&&e)guard(e,false)});
renderRoster();

$("changeModeSelect")?.addEventListener("click",openModeMenu);
$("changeModeRoute")?.addEventListener("click",openModeMenu);
