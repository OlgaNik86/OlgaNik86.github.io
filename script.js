document.querySelectorAll('.leaf').forEach(el=>el.remove());
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id==='#')return;const el=document.querySelector(id);if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}}));
const img=document.querySelector('.photo-arch img');
if(img){img.src='https://raw.githubusercontent.com/OlgaNik86/OlgaNik86.github.io/main/photo.jpg?v=2';img.onerror=()=>{img.style.display='none';};}
const photoStyle=document.createElement('style');
photoStyle.textContent='.photo-arch img{width:100%!important;height:100%!important;aspect-ratio:auto!important;object-fit:cover!important;object-position:center 30%!important}.photo-arch{aspect-ratio:0.70;min-height:620px}@media(max-width:620px){.photo-arch{min-height:540px}}';
document.head.appendChild(photoStyle);