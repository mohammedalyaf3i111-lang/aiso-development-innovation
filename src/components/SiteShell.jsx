"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight, ArrowLeft, Menu, X, FlaskConical, Microscope, ShieldCheck,
  Factory, Gauge, Layers3, Droplets, Gem, Pickaxe, Wrench, Zap, Car,
  Wind, Building2, Search, CheckCircle2, Upload, LockKeyhole, Database,
  FileText, Handshake, ChevronDown
} from "lucide-react";
import { getContent, legal } from "@/src/data/content";

const iconSet = [FlaskConical, Microscope, Gauge, ShieldCheck, Layers3, Wrench];
const sectorIcons = [Droplets, Pickaxe, Layers3, Wrench, Zap, Droplets, Wind, Car, Gem, Building2, Factory];

const routeFor = (locale, slug="") => `/${locale}/${slug ? slug + "/" : ""}`;

function Brand({locale}){
  return <Link className="brand" href={routeFor(locale)} aria-label={locale==="ar"?"الرئيسية":"Home"}>
    <span className="brand-symbol"><i/><i/><i/></span>
    <span><b>AISO</b><small>{locale==="ar"?"التطوير والابتكار":"DEVELOPMENT & INNOVATION"}</small></span>
  </Link>;
}

function Header({locale,t}){
  const [open,setOpen]=useState(false);
  const other=locale==="en"?"ar":"en";
  const links=[
    ["capabilities",t.nav.capabilities],["sectors",t.nav.sectors],["technology-portfolio",t.nav.portfolio],
    ["industrial-partnerships",t.nav.partnerships],["about",t.nav.about],["knowledge",t.nav.knowledge],["contact",t.nav.contact]
  ];
  return <header className="site-header">
    <div className="nav-wrap">
      <Brand locale={locale}/>
      <nav className={open?"nav-links open":"nav-links"} aria-label={t.menu}>
        {links.map(([slug,label])=><Link key={slug} onClick={()=>setOpen(false)} href={routeFor(locale,slug)}>{label}</Link>)}
        <Link className="lang" href={routeFor(other)}>{t.language}</Link>
        <Link className="button primary compact" href={routeFor(locale,"start-project")}>{t.start}</Link>
      </nav>
      <button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label={open?t.close:t.menu}>{open?<X/>:<Menu/>}</button>
    </div>
  </header>;
}

function Footer({locale,t}){
  const groups=[
    [locale==="ar"?"الخدمات":"Services",[["product-development",locale==="ar"?"تطوير المنتجات":"Product development"],["formulation-development",locale==="ar"?"تطوير التركيبات":"Formulation development"],["industrial-problem-solving",locale==="ar"?"حل المشكلات الصناعية":"Industrial problem solving"],["technology-transfer",locale==="ar"?"نقل التقنية":"Technology transfer"]]],
    [locale==="ar"?"الشركة":"Company",[["sectors",t.nav.sectors],["technology-portfolio",t.nav.portfolio],["industrial-partnerships",t.nav.partnerships],["about",t.nav.about],["knowledge",t.nav.knowledge],["contact",t.nav.contact]]],
    [locale==="ar"?"السياسات":"Policies",[["privacy",locale==="ar"?"سياسة الخصوصية":"Privacy"],["terms",locale==="ar"?"الشروط والأحكام":"Terms"],["cookies",locale==="ar"?"ملفات الارتباط":"Cookies"],["disclaimer",locale==="ar"?"إخلاء المسؤولية":"Disclaimer"],["confidential-information",locale==="ar"?"المعلومات الفنية السرية":"Confidential information"]]]
  ];
  return <footer>
    <div className="footer-grid">
      <div><Brand locale={locale}/><p>{locale==="ar"?"شركة تطوير تقني تبدأ من المشكلة، تطوّر الحل، وتنقل التقنية إلى شركاء صناعيين مرخصين.":"A technical development company that starts with the problem, develops the solution and transfers technology to licensed industrial partners."}</p><p className="location">{locale==="ar"?"المملكة العربية السعودية":"Saudi Arabia"}</p></div>
      {groups.map(([title,items])=><div key={title}><h3>{title}</h3>{items.map(([slug,label])=><Link key={slug} href={routeFor(locale,slug)}>{label}</Link>)}</div>)}
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {t.footer}</span><Link href={routeFor(locale==="en"?"ar":"en")}>{t.language}</Link></div>
  </footer>;
}

function CTA({locale,t}){
  return <section className="cta-band"><div><span className="kicker">{locale==="ar"?"ابدأ من التحدي":"Start with the challenge"}</span><h2>{locale==="ar"?"لنبني حلًا قابلًا للتطبيق، لا مجرد فكرة.":"Let’s build an applicable solution—not just an idea."}</h2></div><div className="actions"><Link className="button light" href={routeFor(locale,"start-project")}>{t.start}</Link><Link className="button outline-light" href={routeFor(locale,"industrial-partnerships")}>{t.partner}</Link></div></section>
}

function Process({t}){
  return <section className="section process-section"><div className="section-heading"><span>01 — 06</span><h2>{t.processTitle}</h2><p>{t.processIntro}</p></div><div className="process-grid">{t.process.map((item,i)=><div className="process-card" key={item}><b>{String(i+1).padStart(2,"0")}</b><span>{item}</span>{i<t.process.length-1&&<i/>}</div>)}</div></section>;
}

function Home({locale,t}){
  const Arrow=locale==="ar"?ArrowLeft:ArrowRight;
  return <>
    <section className="hero">
      <div className="hero-grid-bg"/>
      <div className="hero-orbit"><span/><span/><span/></div>
      <div className="hero-copy">
        <span className="kicker"><i/>{t.eyebrow}</span>
        <h1>{t.heroTitle}</h1>
        <p>{t.heroText}</p>
        <div className="actions"><Link className="button primary" href={routeFor(locale,"start-project")}>{t.start}<Arrow/></Link><Link className="button secondary" href={routeFor(locale,"capabilities")}>{t.explore}</Link></div>
      </div>
      <div className="hero-model" aria-hidden="true">
        <div className="model-core"><FlaskConical/><b>{locale==="ar"?"تطوير تطبيقي":"APPLIED R&D"}</b></div>
        <div className="model-node n1"><Microscope/></div><div className="model-node n2"><Gauge/></div><div className="model-node n3"><ShieldCheck/></div>
      </div>
      <div className="hero-proof"><span>{locale==="ar"?"نبدأ من":"WE START WITH"}</span><strong>{locale==="ar"?"المشكلة الصناعية":"THE INDUSTRIAL PROBLEM"}</strong></div>
    </section>
    <Process t={t}/>
    <section className="section contrast"><div className="split-head"><div><span className="kicker">{locale==="ar"?"ما الذي نفعله":"WHAT WE DO"}</span><h2>{locale==="ar"?"قدرات تطوير مترابطة":"Connected development capabilities"}</h2></div><Link href={routeFor(locale,"capabilities")}>{t.explore}<Arrow/></Link></div><div className="capability-preview">{t.capabilities.slice(0,6).map((x,i)=>{const Icon=iconSet[i];return <article key={x}><Icon/><b>{x}</b><span>{String(i+1).padStart(2,"0")}</span></article>})}</div></section>
    <section className="section"><div className="split-head"><div><span className="kicker">{locale==="ar"?"القطاعات":"SECTORS"}</span><h2>{t.sectorLine}</h2></div><Link href={routeFor(locale,"sectors")}>{locale==="ar"?"كل القطاعات":"All sectors"}<Arrow/></Link></div><div className="sector-preview">{t.sectors.slice(0,6).map((x,i)=>{const Icon=sectorIcons[i];return <article key={x}><Icon/><b>{x}</b></article>})}</div></section>
    <section className="section knowledge-strip"><div><LockKeyhole/><span className="kicker">{locale==="ar"?"الملكية الفنية":"TECHNICAL OWNERSHIP"}</span><h2>{t.confidential}</h2><p>{t.confidentialityText}</p></div><div className="technical-lines"/></section>
    <CTA locale={locale} t={t}/>
  </>;
}

function PageHero({title,lead,locale,index="01"}){
  return <section className="page-hero"><div className="page-hero-grid"/><span>{index} / AISO</span><h1>{title}</h1><p>{lead}</p><div className="page-signal"><i/><i/><i/></div></section>;
}

function Cards({items,type="capability"}){
  return <div className={type==="sector"?"sector-cards":"cards"}>{items.map((item,i)=>{const Icon=type==="sector"?sectorIcons[i%sectorIcons.length]:iconSet[i%iconSet.length];return <article key={item}><div className="card-icon"><Icon/></div><span>{String(i+1).padStart(2,"0")}</span><h3>{item}</h3></article>})}</div>;
}

function Steps({items}){
  return <div className="steps">{items.map((item,i)=><article key={item}><b>{String(i+1).padStart(2,"0")}</b><div><h3>{item}</h3><span/></div></article>)}</div>;
}

const fieldSets={
  problem:{
    en:["Company name","Sector","Responsible person","Email","Contact number","Problem description","Material or surface","Operating conditions","Current solution","Required result","Upload images or files","Is the problem urgent?","Is a sample available?"],
    ar:["اسم الشركة","القطاع","اسم الشخص المسؤول","البريد الإلكتروني","رقم التواصل","وصف المشكلة","المادة أو السطح","ظروف التشغيل","الحل المستخدم حاليًا","النتيجة المطلوبة","رفع صور أو ملفات","هل المشكلة عاجلة؟","هل توجد عينة متاحة؟"]
  },
  partner:{
    en:["Company name","City","Factory type","Sectors","Mixing capabilities","Filling capabilities","Permitted materials","Certificates","Production capacity","Contact details"],
    ar:["اسم الشركة","المدينة","نوع المصنع","القطاعات","قدرات الخلط","قدرات التعبئة","المواد المسموح التعامل معها","الشهادات","طاقة الإنتاج","بيانات التواصل"]
  },
  contact:{en:["Name","Company","Email","Contact number","Enquiry type","Message"],ar:["الاسم","الشركة","البريد الإلكتروني","رقم التواصل","نوع الاستفسار","الرسالة"]},
  licence:{en:["Company name","Sector","Territory","Technology of interest","Intended use","Contact details"],ar:["اسم الشركة","القطاع","المنطقة المستهدفة","التقنية محل الاهتمام","الاستخدام المقترح","بيانات التواصل"]}
};

function SmartForm({locale,type,title}){
  const [done,setDone]=useState(false);
  const fields=fieldSets[type][locale];
  const isLong=(x,i)=>/description|conditions|solution|result|message|capabilities|materials|التواصل|الوصف|ظروف|الحل|النتيجة|قدرات|المواد/.test(x.toLowerCase())||i===fields.length-1;
  function submit(e){e.preventDefault();setDone(true);e.currentTarget.reset();}
  if(done)return <div className="success"><CheckCircle2/><h3>{getContent(locale).success}</h3><button onClick={()=>setDone(false)}>{locale==="ar"?"إرسال طلب آخر":"Send another request"}</button></div>;
  return <form className="smart-form" onSubmit={submit}><div className="form-head"><span>{locale==="ar"?"نموذج آمن مبدئي":"INITIAL SECURE INTAKE"}</span><h2>{title}</h2><p>{locale==="ar"?"لا تشارك تفاصيل تركيبة سرية قبل استكمال اتفاق السرية.":"Do not disclose confidential formulation details before completing a confidentiality agreement."}</p></div><div className="form-grid">{fields.map((field,i)=>field.includes("Upload")||field.includes("رفع")?<label className="upload-field" key={field}><Upload/><span>{field}</span><input type="file" multiple/></label>:isLong(field,i)?<label className="wide" key={field}><span>{field}</span><textarea required rows="4"/></label>:<label key={field}><span>{field}</span><input required type={field.includes("Email")||field.includes("البريد")?"email":"text"}/></label>)}</div><button className="button primary" type="submit">{type==="problem"?(locale==="ar"?"إرسال التحدي الفني":"Submit technical challenge"):getContent(locale).submit}</button><small><ShieldCheck/>{locale==="ar"?"تُرسل البيانات إلى قناة المراجعة بعد ربط قاعدة البيانات الآمنة.":"Submissions route to the review channel after the secure database is connected."}</small></form>;
}

function ProjectWizard({locale,t}){
  const [step,setStep]=useState(1); const [done,setDone]=useState(false);
  const labels=locale==="ar"?["بيانات الشركة","نوع المشروع","وصف المشكلة","الهدف التجاري","رفع الملفات","اتفاق السرية"]:["Company details","Project type","Problem description","Commercial objective","Files","Confidentiality"];
  const types=locale==="ar"?["تطوير منتج جديد","تحسين منتج","حل مشكلة صناعية","تطوير بديل محلي","تحسين التكلفة","تحسين الأداء","نقل تقنية","تطوير مشترك"]:["New product development","Product improvement","Industrial problem solving","Local alternative","Cost optimisation","Performance improvement","Technology transfer","Joint development"];
  if(done)return <div className="success"><CheckCircle2/><h2>{t.success}</h2></div>;
  return <div className="wizard"><div className="wizard-progress">{labels.map((x,i)=><button className={step===i+1?"active":step>i+1?"done":""} onClick={()=>setStep(i+1)} key={x}><b>{i+1}</b><span>{x}</span></button>)}</div><form onSubmit={e=>{e.preventDefault();step<6?setStep(step+1):setDone(true)}}><span className="kicker">{String(step).padStart(2,"0")} / 06</span><h2>{labels[step-1]}</h2>{step===1&&<div className="form-grid"><label><span>{locale==="ar"?"اسم الشركة":"Company name"}</span><input required/></label><label><span>{locale==="ar"?"اسم المسؤول":"Contact person"}</span><input required/></label><label><span>{locale==="ar"?"البريد الإلكتروني":"Email"}</span><input type="email" required/></label><label><span>{locale==="ar"?"رقم التواصل":"Contact number"}</span><input required/></label></div>}{step===2&&<div className="choice-grid">{types.map(x=><label key={x}><input type="radio" name="type" required/><span>{x}</span></label>)}</div>}{(step===3||step===4)&&<label className="wide"><span>{labels[step-1]}</span><textarea required rows="8"/></label>}{step===5&&<label className="upload-field large"><Upload/><b>{locale==="ar"?"اسحب الملفات أو اخترها":"Drop or choose files"}</b><span>{locale==="ar"?"الصور والمستندات الفنية غير الحساسة فقط":"Non-sensitive images and technical documents only"}</span><input type="file" multiple/></label>}{step===6&&<label className="consent"><input type="checkbox" required/><span>{locale==="ar"?"أفهم أن هذا النموذج لا يمثل اتفاقية عدم إفصاح، ولن أشارك معلومات حساسة حتى يتم توقيع اتفاقية سرية منفصلة.":"I understand this form is not an NDA and I will not disclose sensitive information until a separate confidentiality agreement is executed."}</span></label>}<div className="wizard-actions">{step>1&&<button type="button" className="button secondary" onClick={()=>setStep(step-1)}>{locale==="ar"?"السابق":"Back"}</button>}<button className="button primary" type="submit">{step===6?(locale==="ar"?"إرسال المشروع":"Submit project"):(locale==="ar"?"التالي":"Continue")}</button></div></form></div>;
}

function Portfolio({locale,t}){
  const [filter,setFilter]=useState("all"); const options=[locale==="ar"?"الكل":"All",...t.sectors.slice(0,5)];
  return <><div className="filters">{options.map((x,i)=><button className={filter===String(i)?"active":""} onClick={()=>setFilter(String(i))} key={x}>{x}</button>)}</div><div className="portfolio-grid">{[0,1,2].map(i=><article key={i}><div className="portfolio-visual"><Layers3/><span>{t.soon}</span></div><div><span>{locale==="ar"?"تقنية قادمة":"UPCOMING TECHNOLOGY"}</span><h3>{locale==="ar"?"سيُضاف اسم التقنية بعد اعتمادها":"Technology name added after approval"}</h3><p>{locale==="ar"?"لن تُعرض أي تقنية أو ادعاء قبل التحقق من حالتها وحقوق نشرها.":"No technology or claim is published before its status and disclosure rights are verified."}</p><b>{locale==="ar"?"الحالة: قريبًا":"Status: Coming soon"}</b></div></article>)}</div></>;
}

function Knowledge({locale,t}){
  return <div className="knowledge-page"><div className="category-list">{t.categories.map(x=><button key={x}>{x}</button>)}</div><div className="empty-editorial"><FileText/><h2>{locale==="ar"?"المقالات قيد الإعداد":"Articles in preparation"}</h2><p>{locale==="ar"?"ستُنشر المواد بعد مراجعتها فنيًا واعتماد النسختين العربية والإنجليزية.":"Materials will be published after technical review and approval of both language versions."}</p></div></div>;
}

function Admin({locale}){
  const modules=locale==="ar"?["التقنيات","القطاعات","المقالات","الخدمات","طلبات التطوير","طلبات الشراكات","الملفات","النصوص ثنائية اللغة","بيانات التواصل"]:["Technologies","Sectors","Articles","Services","Development requests","Partnership requests","Files","Bilingual content","Contact data"];
  return <div className="admin-shell"><aside><Database/><b>{locale==="ar"?"لوحة الإدارة":"ADMIN CONSOLE"}</b>{modules.map((x,i)=><button className={i===0?"active":""} key={x}>{x}</button>)}</aside><main><div className="admin-top"><div><span>{locale==="ar"?"حالة النظام":"SYSTEM STATUS"}</span><h2>{locale==="ar"?"إدارة محفظة التقنيات":"Technology portfolio management"}</h2></div><span className="status"><i/>{locale==="ar"?"بانتظار ربط الدخول وقاعدة البيانات":"Awaiting authentication and database connection"}</span></div><div className="admin-placeholder"><LockKeyhole/><h3>{locale==="ar"?"منطقة محمية":"Protected area"}</h3><p>{locale==="ar"?"تم إعداد الواجهة وبنية البيانات، ولن تُفتح الإدارة العامة قبل تفعيل المصادقة والصلاحيات.":"The interface and data model are prepared. Public administration remains disabled until authentication and roles are configured."}</p></div></main></div>;
}

function AboutBody({locale,t}){
  return <><div className="mission-grid"><article><span>{locale==="ar"?"الرؤية":"VISION"}</span><h2>{locale==="ar"?"بناء محفظة سعودية من التقنيات والمنتجات المتخصصة القابلة للتطبيق محليًا وعالميًا.":"Build a Saudi portfolio of specialised technologies and products applicable locally and globally."}</h2></article><article><span>{locale==="ar"?"الرسالة":"MISSION"}</span><h2>{locale==="ar"?"ربط المشكلات الصناعية بالبحث التطبيقي وتحويل المعرفة إلى منتجات ذات قيمة اقتصادية.":"Connect industrial problems with applied research and turn knowledge into products of economic value."}</h2></article></div><Cards items={t.values}/></>;
}

function LegalPage({locale,slug,t}){
 const titles={privacy:["Privacy policy","سياسة الخصوصية"],terms:["Terms & conditions","الشروط والأحكام"],cookies:["Cookie policy","سياسة ملفات الارتباط"],disclaimer:["Disclaimer","إخلاء المسؤولية"],"development-terms":["Development project terms","شروط تقديم مشروع تطوير"],"confidential-information":["Confidential technical information policy","سياسة التعامل مع المعلومات الفنية السرية"]};
 const title=titles[slug][locale==="ar"?1:0];
 return <><PageHero title={title} lead={t.draft} locale={locale}/><section className="section legal-copy">{legal[locale][slug].map((p,i)=><article key={p}><b>{String(i+1).padStart(2,"0")}</b><p>{p}</p></article>)}</section></>;
}

function ContactPage({locale,t}){
 const choices=[[Handshake,locale==="ar"?"مشروع تطوير":"Development project","start-project"],[Factory,locale==="ar"?"شريك تصنيع":"Manufacturing partner","industrial-partnerships"],[Layers3,locale==="ar"?"طلب ترخيص تقنية":"Technology licence","technology-licensing"]];
 return <><div className="contact-choices">{choices.map(([Icon,label,slug])=><Link href={routeFor(locale,slug)} key={slug}><Icon/><b>{label}</b><span>{locale==="ar"?"ابدأ الطلب":"Begin enquiry"}</span></Link>)}</div><SmartForm locale={locale} type="contact" title={locale==="ar"?"تواصل عام":"General enquiry"}/></>;
}

function GenericPage({locale,slug,t}){
 const page=t.pages[slug]; if(!page)return <Home locale={locale} t={t}/>;
 const index=String(Object.keys(t.pages).indexOf(slug)+1).padStart(2,"0");
 let body=null;
 if(slug==="capabilities")body=<Cards items={t.capabilities}/>;
 if(slug==="sectors")body=<><p className="statement">{t.sectorLine}</p><Cards items={t.sectors} type="sector"/></>;
 if(slug==="product-development")body=<Steps items={t.productSteps}/>;
 if(slug==="formulation-development")body=<><div className="notice"><ShieldCheck/><b>{page.notice}</b></div><Cards items={t.formulation}/></>;
 if(slug==="industrial-problem-solving")body=<SmartForm locale={locale} type="problem" title={locale==="ar"?"إرسال التحدي الفني":"Submit a technical challenge"}/>;
 if(slug==="product-improvement")body=<Cards items={locale==="ar"?["تحسين الأداء","خفض تكلفة المواد","زيادة الاستقرار","تحسين تجربة الاستخدام","تقليل المخاطر","تهيئة التصنيع"]:["Performance uplift","Material-cost reduction","Stability improvement","User-experience improvement","Risk reduction","Manufacturing readiness"]}/>;
 if(slug==="technology-transfer")body=<Steps items={t.transfer}/>;
 if(slug==="technology-licensing")body=<><Cards items={t.licensing}/><SmartForm locale={locale} type="licence" title={locale==="ar"?"طلب ترخيص تقنية":"Technology licensing enquiry"}/></>;
 if(slug==="industrial-partnerships")body=<><Cards items={t.partnerships}/><SmartForm locale={locale} type="partner" title={locale==="ar"?"كن شريك تصنيع":"Become a manufacturing partner"}/></>;
 if(slug==="technology-portfolio")body=<Portfolio locale={locale} t={t}/>;
 if(slug==="about")body=<AboutBody locale={locale} t={t}/>;
 if(slug==="knowledge")body=<Knowledge locale={locale} t={t}/>;
 if(slug==="contact")body=<ContactPage locale={locale} t={t}/>;
 if(slug==="start-project")body=<ProjectWizard locale={locale} t={t}/>;
 if(slug==="admin")body=<Admin locale={locale}/>;
 return <><PageHero title={page.title} lead={page.lead} locale={locale} index={index}/><section className={slug==="admin"?"section wide-section":"section"}>{body}</section>{!["admin","contact","start-project","industrial-problem-solving"].includes(slug)&&<CTA locale={locale} t={t}/>}</>;
}

export default function SiteShell({locale,slug}){
  const t=useMemo(()=>getContent(locale),[locale]);
  const legalSlugs=["privacy","terms","cookies","disclaimer","development-terms","confidential-information"];
  return <div dir={locale==="ar"?"rtl":"ltr"} lang={locale} className="site-shell"><Header locale={locale} t={t}/><main>{legalSlugs.includes(slug)?<LegalPage locale={locale} slug={slug} t={t}/>:slug?<GenericPage locale={locale} slug={slug} t={t}/>:<Home locale={locale} t={t}/>}</main><Footer locale={locale} t={t}/></div>;
}
