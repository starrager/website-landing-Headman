<template>
<div id="app">
    <header class="site-header" :class="{ 'is-scrolled': scrolled }">
        <div class="wrap bar">
            <a href="#top" class="brand" @click="menuOpen=false">
                <span class="brand__logo">HEADMAN</span>
            </a>
            <nav class="nav nav--desktop">
                <a v-for="l in links" :key="l.href" :href="l.href">{{ l.label }}</a>
            </nav>
            <div class="bar__actions">
                <a href="tel:+70000000000" class="phone">+7 (000) 000-00-00</a>
                <a href="#contacts" class="btn btn--small">Записаться</a>
                <button class="burger" :class="{ 'is-open': menuOpen }" @click="menuOpen=!menuOpen" aria-label="Меню"><span></span></button>
            </div>
        </div>
        <transition name="menu">
            <nav v-if="menuOpen" class="nav nav--mobile">
                <a v-for="l in links" :key="l.href" :href="l.href" @click="menuOpen=false">{{ l.label }}</a>
                <a href="tel:+70000000000">+7 (000) 000-00-00</a>
            </nav>
        </transition>
    </header>
    <main>
        <section id="top" class="hero">
            <div class="wrap" :class="{ hero__ready: ready }">
                <p class="eyebrow hero__eyebrow">Сеть мужских парикмахерских</p>
                <h1 class="hero__title">
                    <span class="line"><span>Искусство</span></span>
                    <span class="line"><span>мужского</span></span>
                    <span class="line"><span>стиля</span></span>
                </h1>
                <p class="hero__lede">HEADMAN — это стрижка, уход и бритьё на уровне, который в вашем городе задаёт стандарт. Пять салонов сети, одна школа мастерства и мастера, которым доверяют головы своих клиентов.</p>
                <div class="hero__cta">
                    <a href="#contacts" class="btn">Записаться на стрижку</a>
                    <a href="tel:+70000000000" class="hero__phone">+7 (000) 000-00-00</a>
                </div>
                <div class="hero__gallery">
                    <figure class="hero__figure hero__figure--main">
                        <img src="@/assets/images/barber_03.jpg" alt="Барбер HEADMAN стрижёт клиента" />
                        <figcaption>Точная работа, внимание к деталям и спокойная атмосфера</figcaption>
                    </figure>
                    <figure class="hero__figure hero__figure--portrait">
                        <img src="@/assets/images/barber_01.jpg" alt="Барбер HEADMAN за стрижкой" />
                    </figure>
                    <figure class="hero__figure hero__figure--portrait">
                        <img src="@/assets/images/barber_02.jpg" alt="Уход за бородой в HEADMAN" />
                    </figure>
                    <figure class="hero__figure hero__figure--legacy">
                        <img src="@/assets/images/headman_hero.jpg" alt="Барбер HEADMAN в работе" />
                    </figure>
                </div>
                <dl class="hero__stats">
                    <div class="hero__stat" v-for="s in stats" :key="s.label">
                        <dt>{{ s.value }}</dt>
                        <dd>{{ s.label }}</dd>
                    </div>
                </dl>
            </div>
        </section>
        <div class="marquee">
            <div class="marquee__track">
                <span class="marquee__set" v-for="n in 2" :key="n">
                    <template v-for="a in awards" :key="a">
                        <span class="marquee__item">{{ a }}</span>
                        <span class="marquee__dot" aria-hidden="true">&#9670;</span>
                    </template>
                </span>
            </div>
        </div>
        <section id="services" class="services">
            <div class="wrap">
                <div class="services__head reveal">
                    <p class="eyebrow">Что мы делаем</p>
                    <h2 class="section-title services__title">Услуги</h2>
                </div>
                <ul class="services__list">
                    <li class="services__row reveal" v-for="s in services" :key="s.name">
                        <div class="services__name">
                            <h3>{{ s.name }}</h3>
                            <span v-if="s.tag" class="services__tag">{{ s.tag }}</span>
                        </div>
                        <p class="services__desc">{{ s.desc }}</p>
                        <span class="services__price">{{ s.price || 'по прайсу' }}</span>
                    </li>
                </ul>
            </div>
        </section>
        <section id="about" class="about">
            <div class="wrap about__grid">
                <figure class="about__figure reveal">
                    <img src="@/assets/images/barber_01.jpg" alt="Команда мастеров HEADMAN" />
                </figure>
                <div class="about__content reveal">
                    <p class="eyebrow">О сети</p>
                    <h2 class="section-title about__title">Не парикмахерская.<br />Школа мастерства.</h2>
                    <p class="about__text">HEADMAN начинался с одного зала и команды, которая отказывалась стричь «по накатанной». Сегодня это пять салонов сети — но принцип не изменился: каждый барбер проходит внутреннее обучение и держит планку, за которую сеть трижды признавали лучшим барбершопом города.</p>
                    <ul class="about__list">
                        <li><b>Индивидуальный подход</b> — консультация перед каждой стрижкой, а не шаблон «под одну гребёнку».</li>
                        <li><b>Один стандарт во всех залах</b> — неважно, в какой барбершоп сети вы придёте.</li>
                        <li><b>Инструменты и уход</b> — премиальная косметика и бритьё опасной бритвой для тех, кто в теме.</li>
                    </ul>
                </div>
            </div>
        </section>
        <section id="craft" class="process">
            <div class="wrap process__grid">
                <div class="reveal">
                    <p class="eyebrow">Мастера</p>
                    <p class="process__quote">«Хорошая стрижка не заканчивается на ножницах — она держит форму даже на третьей неделе после визита».</p>
                    <span class="process__cite">— принцип обучения барберов HEADMAN</span>
                </div>
                <figure class="process__figure reveal">
                    <img src="@/assets/images/barber_02.jpg" alt="Барбер HEADMAN за стрижкой" />
                </figure>
            </div>
        </section>
        <section class="promo">
            <div class="wrap">
                <div class="promo__inner reveal">
                    <div>
                        <span class="promo__tag">Новинка</span>
                        <h2 class="promo__title">Мужской гигиенический маникюр уже в HEADMAN</h2>
                        <p class="promo__sub">Приходи и пробуй — запишись вместе со стрижкой или отдельным визитом.</p>
                    </div>
                    <a href="#contacts" class="btn">Записаться</a>
                </div>
            </div>
        </section>
    </main>
    <footer id="contacts" class="footer">
        <div class="wrap footer__grid">
            <div>
                <span class="footer__logo">HEADMAN</span>
                <p class="footer__tag">Стиль · уход · стрижки</p>
            </div>
            <div class="footer__col">
                <h3>Записаться</h3>
                <a href="tel:+70000000000" class="footer__phone">+7 (000) 000-00-00</a>
                <p>Ежедневно, 09:00 — 21:00</p>
            </div>
            <div class="footer__col">
                <h3>Сеть</h3>
                <p>5 барбершопов в городе</p>
                <a href="#">Все адреса и запись онлайн</a>
            </div>
            <div class="footer__col">
                <h3>Мы на связи</h3>
                <a href="#">Telegram</a>
                <a href="#">VK</a>
                <a href="#">2ГИС</a>
            </div>
        </div>
        <div class="wrap footer__bottom">
            <span>&copy; {{ year }} HEADMAN. Все права защищены.</span>
            <span>Мужская парикмахерская</span>
        </div>
    </footer>
</div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrolled=ref(false)
const menuOpen=ref(false)
const ready=ref(false)
const year=new Date().getFullYear()

const links=[
    { href:'#services', label:'Услуги' },
    { href:'#about', label:'О сети' },
    { href:'#craft', label:'Мастера' },
    { href:'#contacts', label:'Контакты' },
]

const stats=[
    { value:'5', label:'барбершопов сети' },
    { value:'4', label:'профессиональные премии' },
    { value:'2019', label:'год первой награды' },
]

const awards=[
    'Лучший барбершоп 2026',
    'Лучший барбершоп 2025',
    'Лучший барбершоп 2023',
    'Победитель премии 2ГИС 2019',
]

const services=[
    { name:'Мужская стрижка', desc:'Классика, фейд, кроп — подбираем форму под лицо и структуру волос.', price:'от 1000 ₽' },
    { name:'Детская стрижка', desc:'Спокойная обстановка и мастера, которые умеют находить общий язык с детьми.', price:'по прайсу' },
    { name:'Мужская химзавивка', desc:'Объём и текстура для причёсок, которым нужен характер, а не укладка каждое утро.', price:'по прайсу' },
    { name:'Гигиенический маникюр', desc:'Аккуратные руки без похода в отдельный салон — прямо в кресле барбера.', tag:'Новинка', price:'по прайсу' },
]

const onScroll=()=>{
    scrolled.value=window.scrollY>24
}

onMounted(()=>{
    window.addEventListener('scroll',onScroll,{ passive:true })
    onScroll()
    requestAnimationFrame(()=>ready.value=true)

    const observer=new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add('is-visible')
                observer.unobserve(entry.target)
            }
        })
    },{ threshold:0.15, rootMargin:'0px 0px -8% 0px' })

    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))
})

onBeforeUnmount(()=>{
    window.removeEventListener('scroll',onScroll)
})
</script>

<style scoped>
html,
body{
    width:100%;
    max-width:100%;
    overflow-x:hidden;
}
#app{
    width:100%;
    max-width:100%;
    overflow-x:hidden;
}
*{
    box-sizing:border-box;
}
:root{
    --ink:#14120e;
    --ink-panel:#1c1913;
    --ink-panel-2:#221e17;
    --paper:#f2ead9;
    --paper-dim:#d3c8b2;
    --paper-faint:rgba(242,234,217,.66);
    --brass:#b6924f;
    --brass-bright:#dcb974;
    --red:#9a3232;
    --line:rgba(242,234,217,.16);
    --line-strong:rgba(242,234,217,.3);
    --font-display:'Big Shoulders Display','Arial Narrow',sans-serif;
    --font-body:'Manrope',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
    --container:1380px;
    --gutter:clamp(18px,3.2vw,42px);
    --ease:cubic-bezier(.16,1,.3,1)
}
*{
    box-sizing:border-box
}
html{
    scroll-behavior:smooth;
    overflow-x:hidden
}
body{
    margin:0;
    min-width:320px;
    max-width:100vw;
    overflow-x:hidden;
    background:var(--ink);
    color:var(--paper);
    font-family:var(--font-body);
    font-size:17px;
    line-height:1.55;
    -webkit-font-smoothing:antialiased
}
img{
    display:block;
    max-width:100%
}
a{
    color:inherit
}
button{
    font-family:inherit
}
h1,h2,h3,h4,p,ul,figure,dl,dd,dt{
    margin:0
}
ul{
    padding:0;
    list-style:none
}
.wrap{
    width:min(100%,var(--container));
    max-width:none;
    margin:0 auto;
    padding:0 var(--gutter)
}
.eyebrow{
    font-weight:800;
    font-size:1rem;
    letter-spacing:.01em;
    color:var(--brass-bright)
}
.section-title{
    font-family:var(--font-display);
    font-weight:700;
    text-transform:uppercase;
    letter-spacing:.005em;
    line-height:.92;
    color:var(--paper)
}
.btn{
    position:relative;
    overflow:hidden;
    display:inline-flex;
    align-items:center;
    gap:10px;
    padding:16px 32px;
    background:var(--brass);
    color:var(--ink);
    font-weight:800;
    font-size:1.02rem;
    border:1px solid var(--brass);
    cursor:pointer;
    text-decoration:none;
    transition:background .25s var(--ease),transform .25s var(--ease),box-shadow .25s var(--ease)
}
.btn::after{
    content:'';
    position:absolute;
    top:-80%;
    left:-35%;
    width:28%;
    height:260%;
    background:rgba(255,255,255,.22);
    transform:rotate(18deg) translateX(-180%);
    transition:transform .65s var(--ease)
}
.btn:hover{
    background:var(--brass-bright);
    transform:translateY(-2px);
    box-shadow:0 10px 28px rgba(182,146,79,.2)
}
.btn:hover::after{
    transform:rotate(18deg) translateX(620%)
}
.btn--small{
    padding:12px 22px;
    font-size:.92rem
}
.site-header{
    position:fixed;
    inset:0 0 auto 0;
    z-index:100;
    background:transparent;
    border-bottom:1px solid transparent;
    transition:background .35s var(--ease),border-color .35s var(--ease)
}
.site-header.is-scrolled{
    background:rgba(20,18,14,.9);
    backdrop-filter:blur(10px);
    border-bottom-color:var(--line)
}
.bar{
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:84px;
    gap:24px
}
.brand{
    display:inline-flex;
    align-items:center;
    text-decoration:none
}
.brand__logo{
    display:inline-flex;
    align-items:center;
    font-family:var(--font-display);
    font-size:2.05rem;
    line-height:1;
    font-weight:800;
    letter-spacing:.055em;
    color:var(--paper);
    text-decoration:none;
    text-transform:uppercase;
    white-space:nowrap
}
.brand__logo::after{
    content:'';
    width:7px;
    height:7px;
    margin:0 0 0 7px;
    background:var(--brass-bright);
    border-radius:50%;
    box-shadow:0 0 18px rgba(220,185,116,.35);
    transition:transform .3s var(--ease),box-shadow .3s var(--ease)
}
.brand__logo:hover{
    color:#fff
}
.brand__logo:hover::after{
    transform:scale(1.35);
    box-shadow:0 0 24px rgba(220,185,116,.6)
}
.nav--desktop{
    display:flex;
    gap:34px
}
.nav--desktop a{
    font-size:1rem;
    font-weight:700;
    text-decoration:none;
    color:var(--paper-dim);
    transition:color .2s var(--ease)
}
.nav--desktop a:hover{
    color:var(--brass-bright)
}
.bar__actions{
    display:flex;
    align-items:center;
    gap:20px
}
.phone{
    font-size:1rem;
    font-weight:700;
    text-decoration:none;
    color:var(--paper);
    white-space:nowrap
}
.burger{
    display:none;
    width:34px;
    height:34px;
    background:none;
    border:none;
    position:relative;
    cursor:pointer
}
.burger span,.burger::before,.burger::after{
    content:'';
    position:absolute;
    left:5px;
    right:5px;
    height:2px;
    background:var(--paper);
    transition:transform .25s var(--ease),opacity .25s var(--ease)
}
.burger::before{
    top:12px
}
.burger span{
    top:16px
}
.burger::after{
    top:20px
}
.burger.is-open::before{
    transform:translateY(4px) rotate(45deg)
}
.burger.is-open span{
    opacity:0
}
.burger.is-open::after{
    transform:translateY(-4px) rotate(-45deg)
}
.nav--mobile{
    display:none
}
.menu-enter-active,.menu-leave-active{
    transition:opacity .2s var(--ease),transform .2s var(--ease)
}
.menu-enter-from,.menu-leave-to{
    opacity:0;
    transform:translateY(-8px)
}
.hero{
    position:relative;
    isolation:isolate;
    padding:150px 0 92px;
    background:radial-gradient(70% 55% at 78% 8%, rgba(182,146,79,.18), transparent 62%), linear-gradient(180deg, #17140f 0%, var(--ink) 72%)
}
.hero::after{
    content:'';
    position:absolute;
    z-index:-1;
    width:420px;
    height:420px;
    right:-180px;
    top:300px;
    border:1px solid rgba(220,185,116,.07);
    border-radius:50%;
    box-shadow:0 0 0 70px rgba(220,185,116,.025), 0 0 0 140px rgba(220,185,116,.012);
    animation:heroPulse 8s ease-in-out infinite
}
@keyframes heroPulse{
    0%,100%{
        transform:scale(.96);
        opacity:.45
    }
    50%{
        transform:scale(1.03);
        opacity:.8
    }
}
.hero__eyebrow{
    opacity:0;
    transform:translateY(10px);
    transition:opacity .6s var(--ease),transform .6s var(--ease)
}
.hero__title{
    font-family:var(--font-display);
    font-weight:700;
    text-transform:uppercase;
    font-size:clamp(3.4rem,8.5vw,7.6rem);
    line-height:.84;
    color:var(--paper);
    margin:14px 0 30px;
    max-width:12ch
}
.hero__title .line{
    display:block;
    overflow:hidden
}
.hero__title .line span{
    display:block;
    transform:translateY(110%);
    transition:transform .75s var(--ease)
}
.hero__title .line:nth-child(2) span{
    transition-delay:.08s
}
.hero__title .line:nth-child(3) span{
    transition-delay:.16s
}
.hero__lede{
    max-width:62ch;
    color:var(--paper-dim);
    font-size:clamp(1.05rem,1.5vw,1.22rem);
    line-height:1.65;
    opacity:0;
    transform:translateY(10px);
    transition:opacity .6s var(--ease) .36s,transform .6s var(--ease) .36s
}
.hero__cta{
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    gap:24px;
    margin-top:36px;
    opacity:0;
    transform:translateY(10px);
    transition:opacity .6s var(--ease) .46s,transform .6s var(--ease) .46s
}
.hero__phone{
    font-weight:800;
    font-size:1.05rem;
    text-decoration:none;
    color:var(--paper);
    border-bottom:1px solid var(--line-strong);
    padding-bottom:2px
}
.hero__gallery{
    display:grid;
    grid-template-columns:minmax(0,1.25fr) minmax(190px,.72fr) minmax(190px,.72fr);
    grid-template-rows:minmax(240px,300px) minmax(180px,220px);
    gap:14px;
    margin-top:52px
}
.hero__figure:nth-child(1){
    grid-column:1;
    grid-row:1/3
}
.hero__figure:nth-child(2){
    grid-column:2;
    grid-row:1
}
.hero__figure:nth-child(3){
    grid-column:3;
    grid-row:1
}
.hero__figure:nth-child(4){
    grid-column:2/4;
    grid-row:2
}
.hero__figure{
    min-width:0;
    margin:0;
    overflow:hidden;
    border:1px solid var(--line);
    background:var(--ink-panel);
    clip-path:inset(0 0 100% 0);
    transition:clip-path .9s var(--ease) .15s,transform .45s var(--ease),border-color .35s var(--ease);
    box-shadow:0 18px 45px rgba(0,0,0,.16)
}
.hero__ready .hero__figure{
    clip-path:inset(0 0 0 0)
}
.hero__figure:nth-child(1){
    transition-delay:.05s
}
.hero__figure:nth-child(2){
    transition-delay:.16s
}
.hero__figure:nth-child(3){
    transition-delay:.27s
}
.hero__figure:nth-child(4){
    transition-delay:.38s
}
.hero__figure:hover{
    transform:translateY(-4px);
    border-color:rgba(220,185,116,.5);
    box-shadow:0 24px 60px rgba(0,0,0,.24)
}
.hero__figure img{
    width:100%;
    height:100%;
    object-fit:cover;
    filter:grayscale(.08) contrast(1.04) saturate(.96);
    transition:transform .7s var(--ease),filter .4s var(--ease)
}
.hero__figure:hover img{
    transform:scale(1.025);
    filter:grayscale(0) contrast(1.04) saturate(1)
}
.hero__figure--main{
    min-height:0;
    position:relative
}
.hero__figure--main img{
    width:100%;
    height:100%;
    object-position:center 38%
}
.hero__figure--portrait{
    min-height:0
}
.hero__figure--portrait img{
    object-position:center 30%
}
.hero__figure--legacy img{
    object-position:center 46%;
    filter:grayscale(.18) contrast(1.02) saturate(.78)
}
.hero__figure figcaption{
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    padding:18px 22px;
    font-size:.9rem;
    color:var(--paper);
    background:linear-gradient(transparent, rgba(20,18,14,.9))
}
.hero__ready .hero__eyebrow,.hero__ready .hero__lede,.hero__ready .hero__cta{
    opacity:1;
    transform:translateY(0)
}
.hero__ready .hero__title .line span{
    transform:translateY(0)
}
.hero__stats{
    display:grid;
    grid-template-columns:repeat(3,minmax(0,1fr));
    gap:clamp(20px,4vw,60px);
    margin-top:42px;
    padding-top:28px;
    border-top:1px solid var(--line);
    max-width:100%;
    opacity:0;
    transform:translateY(10px);
    transition:opacity .6s var(--ease) .56s,transform .6s var(--ease) .56s
}
.hero__ready .hero__stats{
    opacity:1;
    transform:translateY(0)
}
.hero__stat dt{
    font-family:var(--font-display);
    font-size:clamp(1.8rem,3.4vw,2.3rem);
    font-weight:700;
    color:var(--brass-bright)
}
.hero__stat dd{
    margin-top:6px;
    font-size:.92rem;
    color:var(--paper-faint);
    line-height:1.35
}
.marquee{
    width:100%;
    border-top:1px solid var(--line);
    border-bottom:1px solid var(--line);
    background:var(--ink-panel);
    overflow:hidden;
    padding:20px 0
}
.marquee__track{
    display:flex;
    width:max-content;
    animation:scroll 28s linear infinite
}
.marquee:hover .marquee__track{
    animation-play-state:paused
}
.marquee__set{
    display:flex;
    align-items:center;
    flex-shrink:0
}
.marquee__item{
    font-family:var(--font-display);
    font-weight:700;
    text-transform:uppercase;
    font-size:1.3rem;
    letter-spacing:.01em;
    color:var(--paper-dim);
    white-space:nowrap;
    padding:0 30px
}
.marquee__dot{
    color:var(--brass);
    font-size:.55rem;
    flex-shrink:0
}
@keyframes scroll{
    from{
        transform:translateX(0)
    }
    to{
        transform:translateX(-50%)
    }
}
@media(prefers-reduced-motion:reduce){
    .marquee__track{
        animation:none
    }
}
.services{
    padding:128px 0
}
.services__head{
    margin-bottom:48px
}
.services__title{
    font-size:clamp(2.6rem,5.4vw,3.8rem);
    margin-top:10px
}
.services__list{
    border-top:1px solid var(--line)
}
.services__row{
    display:grid;
    grid-template-columns:minmax(260px,360px) minmax(0,1fr) auto;
    align-items:center;
    gap:clamp(28px,5vw,80px);
    padding:34px 0;
    border-bottom:1px solid var(--line);
    transition:border-color .2s var(--ease)
}
.services__row:hover{
    border-color:var(--line-strong)
}
.services__name{
    display:flex;
    align-items:center;
    gap:12px;
    flex-wrap:wrap
}
.services__name h3{
    font-family:var(--font-display);
    font-weight:700;
    text-transform:uppercase;
    font-size:1.6rem;
    color:var(--paper)
}
.services__tag{
    font-size:.78rem;
    font-weight:800;
    background:var(--red);
    color:var(--paper);
    padding:4px 11px;
    letter-spacing:.02em
}
.services__desc{
    color:var(--paper-faint);
    font-size:1.02rem;
    max-width:54ch
}
.services__price{
    font-family:var(--font-display);
    font-weight:700;
    font-size:1.3rem;
    color:var(--brass-bright);
    white-space:nowrap;
    justify-self:end
}
.about{
    padding:128px 0;
    background:var(--ink-panel);
    border-top:1px solid var(--line);
    border-bottom:1px solid var(--line)
}
.about__grid{
    display:grid;
    grid-template-columns:minmax(420px,.9fr) minmax(0,1.1fr);
    gap:clamp(48px,7vw,110px);
    align-items:center
}
.about__figure img{
    width:100%;
    aspect-ratio:4/5;
    object-fit:cover;
    object-position:center 18%;
    filter:grayscale(.08) contrast(1.05);
    border:1px solid var(--line)
}
.about__title{
    font-size:clamp(2.3rem,4.6vw,3.3rem);
    margin:12px 0 24px
}
.about__text{
    color:var(--paper-dim);
    font-size:1.1rem;
    line-height:1.65;
    max-width:54ch
}
.about__list{
    margin-top:34px;
    display:flex;
    flex-direction:column;
    gap:20px
}
.about__list li{
    padding-left:24px;
    position:relative;
    color:var(--paper-faint);
    font-size:1rem;
    line-height:1.55;
    max-width:52ch
}
.about__list li::before{
    content:'';
    position:absolute;
    left:0;
    top:10px;
    width:10px;
    height:2px;
    background:var(--brass)
}
.about__list li b{
    color:var(--paper);
    font-weight:800
}
.process{
    padding:128px 0
}
.process__grid{
    display:grid;
    grid-template-columns:minmax(0,1.1fr) minmax(420px,.9fr);
    gap:clamp(48px,7vw,110px);
    align-items:center
}
.process__quote{
    font-family:var(--font-display);
    font-weight:600;
    font-size:clamp(1.7rem,3.6vw,2.5rem);
    line-height:1.2;
    color:var(--paper);
    margin:14px 0 18px
}
.process__cite{
    font-size:.95rem;
    color:var(--paper-faint)
}
.process__figure img{
    width:100%;
    aspect-ratio:4/5.2;
    object-fit:cover;
    object-position:center 22%;
    filter:grayscale(.15) contrast(1.05);
    border:1px solid var(--line)
}
.promo{
    padding:0 0 128px
}
.promo__inner{
    background:var(--ink-panel-2);
    border:1px solid var(--line-strong);
    padding:clamp(32px,5vw,52px);
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:32px;
    position:relative;
    flex-wrap:wrap
}
.promo__inner::before{
    content:'';
    position:absolute;
    left:0;
    top:0;
    bottom:0;
    width:4px;
    background:var(--red)
}
.promo__tag{
    display:inline-block;
    font-size:.8rem;
    font-weight:800;
    letter-spacing:.02em;
    color:var(--paper);
    background:var(--red);
    padding:5px 12px;
    margin-bottom:16px
}
.promo__title{
    font-family:var(--font-display);
    font-weight:700;
    text-transform:uppercase;
    font-size:clamp(1.6rem,3.2vw,2.3rem);
    line-height:1.1;
    color:var(--paper);
    max-width:22ch
}
.promo__sub{
    margin-top:14px;
    color:var(--paper-faint);
    font-size:1.05rem;
    max-width:42ch
}
.footer{
    background:var(--ink-panel);
    border-top:1px solid var(--line);
    padding:76px 0 0
}
.footer__grid{
    display:grid;
    grid-template-columns:1.3fr 1fr 1fr 1fr;
    gap:32px;
    padding-bottom:56px
}
.footer__logo{
    display:inline-flex;
    align-items:center;
    font-family:var(--font-display);
    font-size:1.85rem;
    line-height:1;
    font-weight:800;
    letter-spacing:.055em;
    color:var(--paper);
    text-decoration:none;
    text-transform:uppercase
}
.footer__logo::after{
    content:'';
    width:6px;
    height:6px;
    margin-left:6px;
    background:var(--brass-bright);
    border-radius:50%
}
.footer__tag{
    margin-top:16px;
    color:var(--paper-faint);
    font-size:1rem
}
.footer__col h3{
    font-family:var(--font-display);
    font-weight:700;
    text-transform:uppercase;
    font-size:1.05rem;
    color:var(--brass-bright);
    margin-bottom:16px
}
.footer__col p,.footer__col a{
    display:block;
    color:var(--paper-dim);
    font-size:1rem;
    text-decoration:none;
    margin-bottom:9px
}
.footer__col a:hover{
    color:var(--paper)
}
.footer__phone{
    font-weight:800;
    color:var(--paper)
}
.footer__bottom{
    display:flex;
    justify-content:space-between;
    padding:22px 0;
    border-top:1px solid var(--line);
    font-size:.88rem;
    color:var(--paper-faint);
    flex-wrap:wrap;
    gap:8px
}
.reveal{
    opacity:0;
    transform:translateY(24px);
    transition:opacity .7s var(--ease),transform .7s var(--ease)
}
.reveal.is-visible{
    opacity:1;
    transform:translateY(0)
}
@media(max-width:980px){
    .hero__gallery{
        grid-template-columns:1.25fr 1fr;
        grid-template-rows:330px 210px 150px
    }
    .hero__figure:nth-child(1){
        grid-column:1;
        grid-row:1/3
    }
    .hero__figure:nth-child(2){
        grid-column:2;
        grid-row:1
    }
    .hero__figure:nth-child(3){
        grid-column:2;
        grid-row:2
    }
    .hero__figure:nth-child(4){
        grid-column:1/3;
        grid-row:3
    }
    .about__grid,.process__grid{
        grid-template-columns:1fr
    }
    .about__figure,.process__figure{
        max-width:720px
    }
}
@media(max-width:860px){
    .nav--desktop,.phone{
        display:none
    }
    .burger{
        display:block
    }
    .nav--mobile{
        display:flex;
        flex-direction:column;
        background:var(--ink-panel);
        border-bottom:1px solid var(--line);
        padding:8px var(--gutter) 24px
    }
    .nav--mobile a{
        padding:15px 0;
        border-bottom:1px solid var(--line);
        text-decoration:none;
        color:var(--paper);
        font-weight:700;
        font-size:1.05rem
    }
    .nav--mobile a:last-child{
        border-bottom:none
    }
}
@media(max-width:760px){
    .hero{
        padding-top:122px
    }
    .hero__gallery{
        grid-template-columns:1fr 1fr;
        grid-template-rows:360px 220px 150px;
        gap:10px;
        margin-top:38px
    }
    .hero__figure:nth-child(1){
        grid-column:1/-1;
        grid-row:1
    }
    .hero__figure:nth-child(2){
        grid-column:1;
        grid-row:2
    }
    .hero__figure:nth-child(3){
        grid-column:2;
        grid-row:2
    }
    .hero__figure:nth-child(4){
        grid-column:1/-1;
        grid-row:3
    }
    .hero__stats{
        grid-template-columns:1fr 1fr 1fr
    }
    .services__row{
        grid-template-columns:1fr;
        gap:12px
    }
    .services__price{
        justify-self:start
    }
    .footer__grid{
        grid-template-columns:1fr 1fr
    }
}
@media(max-width:520px){
    .brand__logo{
        font-size:1.72rem
    }
    .hero__title{
        font-size:clamp(3.1rem,17vw,5rem)
    }
    .hero__gallery{
        grid-template-columns:1fr;
        grid-template-rows:330px 240px 240px 130px
    }
    .hero__figure:nth-child(1),.hero__figure:nth-child(2),.hero__figure:nth-child(3),.hero__figure:nth-child(4){
        grid-column:1
    }
    .hero__figure:nth-child(1){
        grid-row:1
    }
    .hero__figure:nth-child(2){
        grid-row:2
    }
    .hero__figure:nth-child(3){
        grid-row:3
    }
    .hero__figure:nth-child(4){
        grid-row:4
    }
    .hero__stats{
        grid-template-columns:1fr;
        gap:18px
    }
}
@media(max-width:720px){
    .promo__inner{
        flex-direction:column;
        align-items:flex-start
    }
}
</style>