(function(){
'use strict';
// Set your payment/checkout link here (Gumroad, Stripe, Lemon Squeezy, etc.)
var CHECKOUT_URL='#pricing';

var modules=[
['Module 1 · Crypto Foundations 2027','How blockchains, wallets, coins and exchanges actually work, in plain English.'],
['Module 2 · Wallet Security Mastery','Protect keys and recovery phrases, harden accounts and avoid careless approvals.'],
['Module 3 · AI-Powered Scam Detection','The S.T.O.P. framework plus rug pull and phishing warning signs.'],
['Module 4 · Crypto Research Frameworks','Utility, team and tokenomics evaluation with checklists and a scorecard.'],
['Module 5 · AI-Powered Crypto Research','Turn AI into a research assistant while keeping verification in your hands.'],
['Module 6 · Crypto News Intelligence','A daily routine for reading news without being swept up in narratives.'],
['Module 7 · Portfolio Planning & Risk','Position limits, risk registers and decision memos.'],
['Module 8 · Learning Roadmap','A day-by-day 30/60/90-day plan that turns everything into action.'],
['Module 9 · 225+ Structured AI Prompts','14 categories from beginner learning to DeFi, NFTs, scams and content creation.'],
['Module 10 · Templates & Checklists','Worksheets, templates, bonuses, a quick-reference pack and a 7-day start plan.']];
var cases=[
['Bitcoin Research','Apply the framework to a widely documented asset.'],
['Ethereum Research','Evaluate design features and real usage, step by step.'],
['Altcoin Research','An illustrative project that shows how to spot warning signs.'],
['Scam Detection','Walk through a scam pattern and see where S.T.O.P. catches it.'],
['Portfolio Review','Review holdings for concentration and risk, with a decision memo.']];
var scams=[
['Deepfake videos','Verify on official channels you typed yourself.'],
['Voice cloning','Call back on a known number; use a code word.'],
['Fake influencers','Never act on a social call to buy.'],
['Fake support','Real support never DMs first.'],
['Fake airdrops','Ignore unsolicited tokens and claim sites.'],
['Wallet drainers','Read prompts; use a low-value wallet for new apps.'],
['Social engineering','Never send money to someone met online.'],
['AI phishing','Bookmarks, password managers, passkeys.']];
var faq=[
['Do I need prior crypto knowledge?','No. Start with Module 1 and the roadmap; the system builds in order.'],
['Can I use free AI tools?','Yes. Every prompt works on free or paid assistants, though features like web search and file upload vary.'],
['Is this financial advice?','No. Everything is educational. Do your own research and speak with a licensed professional about your situation.'],
['Will this predict prices or guarantee profit?','No. It is a research and protection framework. Crypto is volatile and you can lose money.'],
['How do I receive it?','It is a digital PDF (136 pages) delivered as an instant download after purchase.'],
['Which prompts should I start with?','Beginner Learning prompts first, then the Command Center station prompts.'],
['How often should I use the system?','Daily for a 10-minute news routine, weekly for a 30-minute review, monthly for a portfolio and security check.'],
['What if the AI gives a wrong answer?','That is expected. Log it in the AI Output Audit Sheet and use the hallucination tests and Two-Model Rule.'],
['I think I have been scammed. What now?','Stop and follow the Emergency Response Procedure in the Deepfake & AI Scam Guide.']];
function $(s){return document.querySelector(s)}
function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;')}
function det(a){return a.map(function(x,i){return '<details><summary>'+esc(x[0])+'</summary><p>'+esc(x[1])+'</p></details>'}).join('')}
function cards(a){return a.map(function(x){return '<div class="glass"><h3>'+esc(x[0])+'</h3><p>'+esc(x[1])+'</p></div>'}).join('')}
$('#modules').innerHTML=det(modules);
$('#faqlist').innerHTML=det(faq);
$('#caselist').innerHTML=cards(cases);
$('#scamlist').innerHTML=cards(scams);

// single-open accordion
document.querySelectorAll('.acc').forEach(function(acc){
acc.addEventListener('toggle',function(e){if(e.target.open)acc.querySelectorAll('details').forEach(function(d){if(d!==e.target)d.open=false})},true)});

// checkout links
document.querySelectorAll('[data-buy]').forEach(function(a){
if(CHECKOUT_URL!=='#pricing'&&(a.closest('#pricing')||a.closest('.final')||a.id==='sticky'||a.closest('.hero'))){a.href=CHECKOUT_URL}
else if(a.closest('#pricing')||a.closest('.final')){a.href='#pricing'}});

// mobile menu
var burger=$('#burger'),menu=$('#menu');
burger.addEventListener('click',function(){var o=menu.classList.toggle('open');burger.classList.toggle('open',o);burger.setAttribute('aria-expanded',o)});
menu.addEventListener('click',function(e){if(e.target.tagName==='A'){menu.classList.remove('open');burger.classList.remove('open')}});

// scroll: progress, sticky CTA, back-to-top
var bar=$('#progress'),sticky=$('#sticky'),topBtn=$('#top-btn'),pricing=$('#pricing');
function onScroll(){
var y=window.scrollY,h=document.documentElement.scrollHeight-window.innerHeight;
bar.style.width=(h>0?y/h*100:0)+'%';
var pr=pricing.getBoundingClientRect();
var atPricing=pr.top<window.innerHeight&&pr.bottom>0;
sticky.classList.toggle('show',y>650&&!atPricing);
topBtn.classList.toggle('show',y>900)}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
topBtn.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});

// reveal + counters
function count(el){
var t=+el.dataset.n,s=el.dataset.s||'',st=null;
function f(ts){st=st||ts;var p=Math.min((ts-st)/1400,1);el.textContent=Math.round(t*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(f)}
requestAnimationFrame(f)}
if('IntersectionObserver' in window){
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
var co=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){count(e.target);co.unobserve(e.target)}})},{threshold:.6});
document.querySelectorAll('[data-n]').forEach(function(el){co.observe(el)});
}else{
document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});
document.querySelectorAll('[data-n]').forEach(function(el){el.textContent=el.dataset.n+(el.dataset.s||'')})}
})();
