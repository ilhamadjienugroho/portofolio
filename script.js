const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const root=document.documentElement,menu=$('nav ul');
$('#theme').onclick=()=>{const t=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=t;try{localStorage.setItem('t',t)}catch(e){}};
$('#menu').onclick=()=>menu.classList.toggle('open');
$$('nav a').forEach(a=>a.onclick=()=>menu.classList.remove('open'));
$('#yr').textContent=new Date().getFullYear();
addEventListener('scroll',()=>{const h=root.scrollHeight-innerHeight;$('#bar').style.width=(h>0?scrollY/h*100:0)+'%'},{passive:true});
const links=$$('nav a');
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
$$('main section[id]').forEach(s=>so.observe(s));
$$('[data-n]').forEach(el=>{const n=+el.dataset.n,d=+(el.dataset.d||0),s=el.dataset.s||'',t0=performance.now();
 const step=t=>{const p=Math.min((t-t0)/1500,1),v=n*(1-Math.pow(1-p,3));el.textContent=v.toFixed(d)+s;if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)});
const roles=['Network Engineer','IT Support','Technical Network Support','Junior NOC Operations'],r=$('#role');
let i=0,j=0,del=false;
(function type(){const w=roles[i];j+=del?-1:1;r.textContent=w.slice(0,j);let ms=del?35:80;
 if(!del&&j===w.length){del=true;ms=1500}else if(del&&j===0){del=false;i=(i+1)%roles.length;ms=350}
 setTimeout(type,ms)})();
