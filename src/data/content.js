export const routes = [
  "", "capabilities", "sectors", "product-development", "formulation-development",
  "industrial-problem-solving", "product-improvement", "technology-transfer",
  "technology-licensing", "industrial-partnerships", "technology-portfolio",
  "about", "knowledge", "contact", "start-project", "privacy", "terms", "cookies",
  "disclaimer", "development-terms", "confidential-information", "admin"
];

const shared = {
  en: {
    brand: "AISO Development & Innovation",
    eyebrow: "Applied industrial development",
    heroTitle: "We turn industrial challenges into commercially viable products and technologies.",
    heroText: "We research, develop, validate and translate industrial problems and technical ideas into specialised solutions—then work with licensed industrial partners to transfer, manufacture and bring them to market.",
    start: "Start a development project", partner: "Become a manufacturing partner", explore: "Explore our capabilities",
    menu: "Menu", close: "Close", language: "العربية", home: "Home",
    nav: { capabilities:"Capabilities", sectors:"Sectors", portfolio:"Technology portfolio", partnerships:"Industrial partnerships", about:"About AISO", knowledge:"Knowledge Centre", contact:"Contact" },
    processTitle: "From problem to market-ready product",
    processIntro: "A disciplined applied-development path with clear technical and commercial gates.",
    process: ["Challenge","Research","Development","Validation","Industrial scale-up","Licensing & technology transfer"],
    sectorLine: "We develop specialised solutions around the real constraints of each sector.",
    confidential: "Knowledge protected before it becomes a product.",
    confidentialityText: "Projects can be governed by non-disclosure agreements, controlled access to technical information, defined ownership, technology-transfer contracts and explicit exploitation rights. Website content is not legal advice.",
    soon: "Coming soon", submit: "Submit", success: "Thank you. Your request has been recorded for review.",
    required: "Required field", draft: "General draft — subject to legal review.",
    footer: "AISO Development & Innovation · Saudi Arabia",
  },
  ar: {
    brand: "أيزو للتطوير والابتكار",
    eyebrow: "تطوير صناعي تطبيقي",
    heroTitle: "نحوّل التحديات الصناعية إلى منتجات وتقنيات قابلة للتطبيق التجاري.",
    heroText: "نبحث، نطوّر، نتحقق ونحوّل المشكلات الصناعية والأفكار التقنية إلى حلول ومنتجات متخصصة، ثم نعمل مع شركاء صناعيين مرخصين لنقل التقنية والتصنيع وإدخالها إلى السوق.",
    start: "ابدأ مشروع تطوير", partner: "كن شريك تصنيع", explore: "اكتشف قدراتنا",
    menu: "القائمة", close: "إغلاق", language: "English", home: "الرئيسية",
    nav: { capabilities:"قدراتنا", sectors:"القطاعات", portfolio:"محفظة التقنيات", partnerships:"الشراكات الصناعية", about:"عن أيزو", knowledge:"مركز المعرفة", contact:"تواصل معنا" },
    processTitle: "من المشكلة إلى منتج جاهز للسوق",
    processIntro: "مسار تطوير تطبيقي منضبط، بمحطات فنية وتجارية واضحة.",
    process: ["التحدي","البحث","التطوير","التحقق","التوسع الصناعي","الترخيص ونقل التقنية"],
    sectorLine: "نطوّر حلولًا متخصصة وفق تحديات كل قطاع.",
    confidential: "نحمي المعرفة قبل أن نحولها إلى منتج.",
    confidentialityText: "يمكن إخضاع المشاريع لاتفاقيات عدم الإفصاح، وتقييد الوصول للمعلومات الفنية، وتحديد الملكية وحقوق التصنيع والاستغلال، وعقود نقل التقنية وحماية التطوير المشترك. محتوى الموقع ليس استشارة قانونية.",
    soon: "قريبًا", submit: "إرسال", success: "شكرًا. تم تسجيل طلبك للمراجعة.",
    required: "حقل مطلوب", draft: "مسودة عامة قابلة للمراجعة القانونية.",
    footer: "أيزو للتطوير والابتكار · المملكة العربية السعودية",
  }
};

const capabilities = {
  en:["Product development","Formulation development","Industrial problem solving","Product improvement","Cost and performance optimisation","Imported-product alternatives","Raw-material evaluation","Stability and shelf-life improvement","Preparation-method design","Quality-procedure development","Factory technology transfer","Lab-to-production scale-up support","Technical know-how licensing","Exclusive product development","Development project management","Performance verification","External test coordination"],
  ar:["تطوير المنتجات","تطوير التركيبات","حل المشكلات الصناعية","تحسين المنتجات","تحسين التكلفة والأداء","تطوير بدائل للمنتجات المستوردة","تقييم المواد الخام","تحسين الاستقرار والعمر التخزيني","تصميم طرق التحضير","تطوير إجراءات الجودة","نقل التقنية إلى المصنع","دعم التوسع من المختبر إلى الإنتاج","ترخيص المعرفة الفنية","تطوير منتجات حصرية للشركات","إدارة مشاريع التطوير","التحقق من الأداء","تنسيق الاختبارات الخارجية"]
};

const sectors = {
  en:["Oil & gas","Mining","Metals & surface treatment","Industrial maintenance","Energy & electrical","Water treatment","Cooling & HVAC","Automotive & heavy equipment","Jewellery & precious metals","Glass & aluminium","General industry"],
  ar:["النفط والغاز","التعدين","معالجة المعادن والأسطح","الصيانة الصناعية","الطاقة والكهرباء","معالجة المياه","التبريد والتكييف","السيارات والمعدات الثقيلة","المجوهرات والمعادن الثمينة","الزجاج والألمنيوم","الصناعة العامة"]
};

const productSteps = {
  en:["Define the problem","Review existing solutions","Set performance requirements","Select materials and technologies","Prepare a prototype","Run initial testing","Optimise the formulation","Verify performance","Scale for industrial production","Prepare the technology-transfer file"],
  ar:["تحديد المشكلة","دراسة الحلول الحالية","تحديد متطلبات الأداء","اختيار المواد والتقنيات","إعداد نموذج أولي","إجراء اختبارات أولية","تحسين التركيبة","التحقق من الأداء","التوسع الصناعي","إعداد ملف نقل التقنية"]
};

const formulation = {
  en:["Develop new formulations","Improve existing formulations","Increase performance","Reduce cost","Improve stability","Improve safety","Reduce odour","Improve manufacturability","Change raw-material sources","Adapt to locally available materials","Develop application-specific versions"],
  ar:["تطوير تركيبات جديدة","تحسين تركيبات موجودة","رفع الأداء","خفض التكلفة","تحسين الاستقرار","تحسين السلامة","تقليل الرائحة","تحسين قابلية التصنيع","تغيير مصادر المواد الخام","التكيف مع المواد المتاحة محليًا","تطوير نسخ مخصصة لتطبيقات محددة"]
};

const transfer = {
  en:["Development by AISO","Trials and validation","Manufacturing instructions","Material specifications","Technology-transfer file","Pilot batch","Production approval","Post-transfer support"],
  ar:["التطوير لدى أيزو","التجارب والتحقق","إعداد تعليمات التصنيع","تحديد المواد والمواصفات","تسليم ملف نقل التقنية","تشغيل دفعة تجريبية","اعتماد الإنتاج","دعم ما بعد النقل"]
};

const licensing = {
  en:["Exclusive licence","Non-exclusive licence","Territory-based licence","Sector-based licence","Joint development","Exclusive development for one company","Fixed-fee licence","Sales-percentage licence","Per-unit licence"],
  ar:["ترخيص حصري","ترخيص غير حصري","ترخيص حسب المنطقة","ترخيص حسب القطاع","تطوير مشترك","تطوير حصري لشركة واحدة","ترخيص مقابل رسوم ثابتة","ترخيص مقابل نسبة من المبيعات","ترخيص مقابل مبلغ لكل وحدة مباعة"]
};

const partnerships = {
  en:["Manufacture AISO technologies","Develop new products for your facility","Develop products under your brand","Exclusive product development","Commercial licensing","Industrial scale-up","Improve current products"],
  ar:["تصنيع تقنيات أيزو","تطوير منتجات جديدة للمصنع","تطوير منتجات بعلامة المصنع","تطوير منتجات حصرية","الترخيص التجاري","التوسع الصناعي","تحسين المنتجات الحالية"]
};

const values = {
  en:["Innovation","Confidentiality","Validation","Practical value","Intellectual property","Technical independence","Quality"],
  ar:["الابتكار","السرية","التحقق","القيمة العملية","الملكية الفكرية","الاستقلالية التقنية","الجودة"]
};

const categories = {
  en:["Product development","Industrial innovation","Advanced materials","Oil & gas","Mining","Corrosion","Surface treatment","Technology transfer","Contract manufacturing","Intellectual property","Technical studies"],
  ar:["تطوير المنتجات","الابتكار الصناعي","المواد المتقدمة","النفط والغاز","التعدين","التآكل","معالجة الأسطح","نقل التقنية","التصنيع التعاقدي","الملكية الفكرية","دراسات تقنية"]
};

const pageCopy = {
  en:{
    capabilities:{title:"Capabilities built around the problem",lead:"AISO combines applied research, formulation engineering, validation planning and industrial transfer. Each engagement is shaped by the required outcome—not a catalogue."},
    sectors:{title:"Industrial focus, application-led thinking",lead:"We develop specialised solutions around the real constraints of each sector."},
    "product-development":{title:"Product development",lead:"We translate a defined industrial problem or market opportunity into a commercially viable product, without disclosing confidential formulation details."},
    "formulation-development":{title:"Formulation development",lead:"New and improved formulations engineered around performance, safety, stability, cost and manufacturability.",notice:"All development projects are subject to confidentiality agreements and protection of technical ownership."},
    "industrial-problem-solving":{title:"Have an industrial problem? The solution may not be an existing product.",lead:"We start with the problem—not the catalogue."},
    "product-improvement":{title:"Make an existing product work harder",lead:"We assess the performance gap, material choices, process constraints and commercial target to improve value without losing manufacturability."},
    "technology-transfer":{title:"From verified knowledge to repeatable production",lead:"Commercial manufacturing can take place through licensed industrial partners under a defined technology-transfer package."},
    "technology-licensing":{title:"Technologies and products available for industrial licensing.",lead:"AISO may develop or own technical know-how and grant selected partners manufacturing or commercial exploitation rights under defined agreements."},
    "industrial-partnerships":{title:"Have a factory? We develop the products you can manufacture and sell.",lead:"A structured partnership connects development capability with licensed production capacity and market access."},
    "technology-portfolio":{title:"Technology portfolio",lead:"A governed portfolio for technologies as they move from development to testing, industrial trial and licensing."},
    about:{title:"About AISO",lead:"AISO Development & Innovation focuses on specialised technical solutions and products, translating industrial problems into scalable commercial outcomes through applied research, formulation development, technology transfer and industrial partnerships."},
    knowledge:{title:"Knowledge Centre",lead:"Bilingual perspectives on applied product development, specialised materials, industrial innovation and technology transfer."},
    contact:{title:"Start the right conversation",lead:"Choose the route that best matches your technical or industrial objective."},
    "start-project":{title:"Start a development project",lead:"Share only non-sensitive context at this stage. A confidentiality process can be completed before detailed technical disclosure."},
    admin:{title:"Content & requests console",lead:"A protected administration interface prepared for database connection. Production access requires configured authentication."}
  },
  ar:{
    capabilities:{title:"قدرات تبدأ من المشكلة",lead:"تجمع أيزو بين البحث التطبيقي وهندسة التركيبات وتخطيط التحقق والنقل الصناعي. يُبنى كل مشروع حول النتيجة المطلوبة، لا حول كتالوج جاهز."},
    sectors:{title:"تركيز صناعي وتفكير تطبيقي",lead:"نطوّر حلولًا متخصصة وفق تحديات كل قطاع."},
    "product-development":{title:"تطوير المنتجات",lead:"نحوّل المشكلة الصناعية المحددة أو الفرصة السوقية إلى منتج قابل للتطبيق التجاري، دون كشف تفاصيل سرية عن التركيبات."},
    "formulation-development":{title:"تطوير التركيبات",lead:"تركيبات جديدة ومحسّنة تُهندس وفق الأداء والسلامة والاستقرار والتكلفة وقابلية التصنيع.",notice:"جميع مشاريع التطوير تخضع لاتفاقيات سرية وحماية للملكية الفنية."},
    "industrial-problem-solving":{title:"لديك مشكلة صناعية؟ قد لا يكون الحل منتجًا موجودًا بالفعل.",lead:"نبدأ من المشكلة، وليس من الكتالوج."},
    "product-improvement":{title:"اجعل المنتج الحالي أكثر كفاءة",lead:"نقيّم فجوة الأداء واختيارات المواد وقيود العملية والهدف التجاري لتحسين القيمة مع الحفاظ على قابلية التصنيع."},
    "technology-transfer":{title:"من معرفة متحققة إلى إنتاج قابل للتكرار",lead:"يمكن أن يتم التصنيع التجاري لدى شركاء صناعيين مرخصين ضمن حزمة واضحة لنقل التقنية."},
    "technology-licensing":{title:"تقنيات ومنتجات قابلة للترخيص الصناعي.",lead:"يمكن لأيزو تطوير أو امتلاك معرفة فنية ومنح شركاء مختارين حقوق التصنيع أو الاستغلال التجاري وفق اتفاقيات محددة."},
    "industrial-partnerships":{title:"لديك مصنع؟ نحن نطوّر المنتجات التي يمكنك تصنيعها وبيعها.",lead:"تربط الشراكة المنظمة بين قدرات التطوير والطاقة الإنتاجية المرخصة والوصول إلى السوق."},
    "technology-portfolio":{title:"محفظة التقنيات",lead:"محفظة منظمة للتقنيات أثناء انتقالها من التطوير إلى الاختبار والتجربة الصناعية والترخيص."},
    about:{title:"عن أيزو",lead:"أيزو للتطوير والابتكار شركة تركز على تطوير الحلول والمنتجات التقنية المتخصصة، وتحويل المشكلات الصناعية إلى حلول قابلة للتطبيق والتوسع التجاري من خلال البحث التطبيقي وتطوير التركيبات ونقل التقنية والشراكات الصناعية."},
    knowledge:{title:"مركز المعرفة",lead:"رؤى عربية وإنجليزية حول تطوير المنتجات التطبيقي والمواد المتخصصة والابتكار الصناعي ونقل التقنية."},
    contact:{title:"ابدأ الحوار الصحيح",lead:"اختر المسار الأقرب لهدفك الفني أو الصناعي."},
    "start-project":{title:"ابدأ مشروع تطوير",lead:"شارك في هذه المرحلة المعلومات غير الحساسة فقط. يمكن استكمال إجراءات السرية قبل الإفصاح الفني التفصيلي."},
    admin:{title:"لوحة المحتوى والطلبات",lead:"واجهة إدارة محمية ومهيأة للربط بقاعدة البيانات. يتطلب تشغيلها الفعلي إعداد نظام الدخول."}
  }
};

export function getContent(locale){
  return { ...shared[locale], capabilities:capabilities[locale], sectors:sectors[locale], productSteps:productSteps[locale], formulation:formulation[locale], transfer:transfer[locale], licensing:licensing[locale], partnerships:partnerships[locale], values:values[locale], categories:categories[locale], pages:pageCopy[locale] };
}

export const legal = {
  en:{
    privacy:["We collect only information needed to review enquiries, development requests, partnership applications and licensing requests.","Submitted technical information is handled according to the applicable confidentiality process. Do not submit highly sensitive information before a confidentiality agreement is in place.","Retention, processors, hosting region and data-subject procedures must be confirmed before public launch."],
    terms:["Website information is general and does not form a binding technical, commercial or legal offer.","A project starts only after written scope, responsibilities, commercial terms and confidentiality requirements are agreed.","Content, methods and brand assets remain subject to their respective ownership rights."],
    cookies:["The initial website is designed to operate with essential functions only. Any analytics or marketing cookies added later must be disclosed and controlled through an appropriate consent mechanism."],
    disclaimer:["Technical content is educational and preliminary. It is not a product specification, safety approval, regulatory decision or legal advice.","Performance claims require project-specific testing and verification before commercial use."],
    "development-terms":["Each project requires an agreed brief, acceptance criteria, schedule, commercial model and change-control process.","Testing, regulatory review, third-party validation, industrial trials and manufacturing responsibilities are defined per project.","Sensitive information should be exchanged only through approved protected channels."],
    "confidential-information":["Access to technical information may be restricted by role and project need.","Formulations, methods, samples, results and transfer files are governed by the applicable written agreement.","Ownership and manufacturing or exploitation rights are defined separately and should not be assumed from disclosure."]
  },
  ar:{
    privacy:["نجمع فقط المعلومات اللازمة لمراجعة الاستفسارات وطلبات التطوير والشراكة والترخيص.","تُعامل المعلومات الفنية المرسلة وفق إجراءات السرية المعتمدة. لا ترسل معلومات شديدة الحساسية قبل توقيع اتفاقية سرية.","يجب اعتماد مدد الاحتفاظ ومعالجي البيانات وموقع الاستضافة وإجراءات أصحاب البيانات قبل الإطلاق العام."],
    terms:["معلومات الموقع عامة ولا تشكل عرضًا فنيًا أو تجاريًا أو قانونيًا ملزمًا.","لا يبدأ المشروع إلا بعد الاتفاق كتابيًا على النطاق والمسؤوليات والشروط التجارية ومتطلبات السرية.","يبقى المحتوى والأساليب وأصول العلامة خاضعة لحقوق أصحابها."],
    cookies:["صُممت النسخة الأولية للعمل بالوظائف الضرورية فقط. يجب الإفصاح عن أي ملفات تحليل أو تسويق تُضاف لاحقًا وإدارتها بآلية موافقة مناسبة."],
    disclaimer:["المحتوى الفني تعليمي وأولي، ولا يُعد مواصفة منتج أو اعتماد سلامة أو قرارًا تنظيميًا أو استشارة قانونية.","تتطلب ادعاءات الأداء اختبارًا وتحققًا خاصين بالمشروع قبل الاستخدام التجاري."],
    "development-terms":["يتطلب كل مشروع موجزًا متفقًا عليه ومعايير قبول وجدولًا ونموذجًا تجاريًا وآلية لإدارة التغييرات.","تُحدد مسؤوليات الاختبارات والمراجعة التنظيمية والتحقق الخارجي والتجارب الصناعية والتصنيع لكل مشروع.","يجب تبادل المعلومات الحساسة عبر قنوات محمية ومعتمدة فقط."],
    "confidential-information":["يمكن تقييد الوصول للمعلومات الفنية بحسب الدور والحاجة داخل المشروع.","تخضع التركيبات والطرق والعينات والنتائج وملفات النقل للاتفاقية المكتوبة المعمول بها.","تُحدد الملكية وحقوق التصنيع أو الاستغلال بصورة منفصلة ولا تُفترض بمجرد الإفصاح."]
  }
};
