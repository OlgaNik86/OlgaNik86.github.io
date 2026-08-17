document.querySelectorAll('.leaf').forEach(el=>el.remove());
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id==='#')return;const el=document.querySelector(id);if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}}));

const siteStyle=document.createElement('style');
siteStyle.textContent='.brand{font-size:28px!important}.section-title>span,.process-step>b,.benefit-grid>div>b{display:none!important}@media(max-width:620px){.brand{font-size:24px!important}}';
document.head.appendChild(siteStyle);

const valueIcons=['♡','⏳','☀','✓','◯'];
document.querySelectorAll('.value-grid article>div').forEach((el,i)=>{if(valueIcons[i]) el.textContent=valueIcons[i];});
