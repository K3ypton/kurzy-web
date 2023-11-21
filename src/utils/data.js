import { course_images } from "./images";


//lang: ["english", "arabic"],


const courses = [
    {
        //1
        id: "xMHCZl",
        category: "microsoft365/word/excel/ppt",
        image: course_images.microsoft365img,
        course_name: "Microsoft 365 zaklady",
        description: "https://support.microsoft.com/en-us/office/microsoft-365-basics-video-training-396b8d9e-e118-42d0-8a0d-87d1f2f055fb?wt.mc_id=OTC_HOME#",
        creator: "Microsoft",
        lang: "Angličtina/Slovenčina",
    
        what_you_will_learn: [
            "Naučite sa využivať funkcie ",
            "Become an experienced Python Programmer",
            "Parse the Web and Create their own Games"
        ],
        content: [
            "-"
        ]
    },
    {
        //2
        id: "dtfo9e",
        category: "microsoft365/word/excel/ppt",
        image: course_images.wordimg,
        course_name: "Zefektívnenie práce v programe Microsoft Word - najlepšie tipy",
        description: "Learn python and how to use it to analyze,visualize and present data. Includes tons of sample code and hours of video!",
        rating_count: 3059,
        rating_star: 4.3,
        students: 174053,
        creator: "Philip Burton",
        lang: "english",
      
        what_you_will_learn: [
          "Naučte sa rýchlo používať atribúty písma a preskúmajte existujúce písma a odseky.",
          "Aplikujte a upravujte štýly, aby ste zabezpečili konzistentné rozvrhnutie a umožnili rýchle vykonávanie zmien",
          "Identifikujte položky ponuky a pridajte ich na panel nástrojov Rýchly prístup.",
          "Identify what Microsoft want you to learn, and find resources in how to learn it."


        ],
        content: [
            "Format Painter a odhaľovanie formátovania",
            "Štyly ",
            "Číslovanie",
            "Menu a QAT",
            "Bonus - Ako sa naučiť viacej",
            "SQL and Python",
            "Web Scraping with Python"
        ]
    },
    {
        //3
        id: "fLroW6",
        category: "teams",
        image: course_images.msteamsimg,
        course_name: "Uľahčovanie stretnutí a podujatí pomocou služby Microsoft Teams",
        description: "https://learn.microsoft.com/sk-sk/training/modules/facilitate-meetings-events-microsoft-teams/ ",
        creator: "Microsoft",
        lang: "Angličtina/Slovenčina",

       
      
        what_you_will_learn: [
            "Naučte sa používať Microsoft Teams na plánovanie a správu schôdzí, uľahčovanie a účasť na schôdzach a vytváranie živých udalostí, ktoré spájajú ľudí a podporujú spoluprácu.",
        ],
        content: [
            "Vytváranie schôdzok a pripájanie sa k nim",
            "Zdieľanie obsahu počas stretnutí",
            "Účasť na stretnutiach",
            "Správa oddychových miestností pre vaše stretnutie",
            "Plánovanie, plánovanie a moderovanie živých podujatí"
        ]
    },
    {
        //4
        id: "VwkN_o",
        category: "kibernetika",
        image: course_images.kiberimg ,
        course_name: "Popíšte základné kybernetické hrozby, útoky a zmiernenia",
        description: "https://learn.microsoft.com/sk-sk/training/paths/describe-basic-concepts-of-cybersecurity/",
        creator: "Microsoft",
        lang: "Angličtina/Slovenčina",

        what_you_will_learn: [
            "Kybernetické útoky postihujú jednotlivcov a podniky alarmujúcim tempom. Byť informovaný o vyvíjajúcom sa prostredí hrozieb a bežných typoch útokov je kľúčom k tomu, aby ste sa naučili, ako sa chrániť pred útokmi.",
        ],
        content: [
            "Popíšte, čo je kybernetická bezpečnosť",
            "Opíšte oblasť hrozieb",
            "Popíšte malvér",
            "Popíšte základné stratégie zmierňovania",
        ]
    },
    {
        //4
        id: "xJB-WU",
        category: "teams",
        image: course_images.msteamsimg,
        course_name: "Spolupracujte v tímoch a kanáloch s Microsoft Teams",
        description: "https://learn.microsoft.com/sk-sk/training/modules/collaborate-teams-channels-microsoft-teams/",
        creator: "Microsoft",
        lang: "Angličtina/Slovenčina",
 
        what_you_will_learn: [
            "Zistite, ako spolupracovať v Microsoft Teams prostredníctvom konverzácií v kanáloch a četoch, zdieľania súborov a používania Outlooku s Teams. Prispôsobte si prostredie spravovaním nastavení upozornení a usporiadaním svojich tímov, kanálov a rozhovorov."
        ],
        content: [
            "Uverejňujte konverzácie v kanáloch a interagujte s nimi",
            "Zdieľanie medzi Outlookom a Teams",
            "Začnite rozhovory a hovory",
            "Zdieľajte a pracujte na súboroch so spoluhráčmi",
            "Usporiadajte si zoznam tímov, kanály a čety",
            "Spravovať upozornenia"
        ]
    },
    {
        //5
        id: "3pm9Ab",
        category: "teams",
        image: course_images.msteamsimg,
        course_name: "Vytvárajte a spravujte tímy a kanály pomocou Microsoft Teams",
        description: "https://learn.microsoft.com/sk-sk/training/modules/create-manage-teams-channels-microsoft-teams/",
        creator: "Microsoft",
        lang: "Angličtina/Slovenčina",

        what_you_will_learn: [
            "Naučte sa vytvárať tímy a kanály, pridávať aplikácie a nástroje do svojich tímov a spravovať nastavenia tímu ako vlastník tímu v Microsoft Teams."
        ],
        content: [
            "Vytvorte nový tím v Microsoft Teams",
            "Pridajte verejné alebo súkromné kanály do tímu v Microsoft Teams",
            "Spravujte nastavenia tímu a kanála v aplikácii Microsoft Teams",
            "Pridajte členov do tímu a spravujte ich roly",
            "Pridajte aplikácie na použitie v Microsoft Teams",
            "Použite aplikáciu Úlohy v Microsoft Teams"
        ]
    },
    {
        //6
        id: "RuUs0x",
        category: "teams",
        image: course_images.msteamsimg,
        course_name: "Úvod do spolupráce s Microsoft Teams",
        description: "https://learn.microsoft.com/sk-sk/training/modules/introduction-to-collaborating-microsoft-teams/",
        creator: "Microsoft",
        lang: "Angličtina/Slovenčina",

        what_you_will_learn: [
            "Zistite, ako môžete pomocou Microsoft Teams efektívnejšie komunikovať a spolupracovať s ľuďmi, s ktorými pracujete."
        ],
        content: [
            "Popíšte hodnotu používania Microsoft Teams na spoluprácu",
            "Identifikujte základné funkcie Microsoft Teams",
            "Javascript",
            "Identifikujte scenáre vhodné na používanie Microsoft Teams",
        ]
    },
    {
        //7
        id: "e_0hBc",
        category: "web development",
        image: course_images.webdeveimg,
        course_name: "Vytvárajte webové stránky s HTML a CSS pre začiatočníkov",
        description: "https://learn.microsoft.com/en-us/training/paths/build-web-pages-html-css-for-beginners/",
        creator: "Microsoft",
        lang: "Angličtina/Slovenčina",

        
        what_you_will_learn: [
            "Napíšte kód HTML a CSS na vytvorenie prístupnej webovej stránky pomocou verzie Visual Studio Code založenej na prehliadači"
        ],
        content: [
            "Uvod",
            "Pochopte terminológiu",
            "Preskumajte zaklady html",
            "Cvičenie vytvorte Html stránku",
            "Preskúmajte zoznamy odkazov v obrázkoch",
            "Cvičenie: Vypíše odkazy",
            "Getting clients",
            "Building proposals",
            "Managing clients",
            "Best practices"
        ]
    },
    {

        //8
        id: "z9dxdw",
        category: "web development",
        image: course_images.webdeveimg,
        course_name: "Použite štýly CSS na webovej stránke",
        description: "https://learn.microsoft.com/en-us/training/modules/use-css-styles/",
        creator: "Microsoft",
        lang: "Angličtina/Slovenčina",

        what_you_will_learn: [
            "Ukazuje, ako použiť formátovanie na základné HTML pomocou štýlov a kaskádových štýlov."
        ],
        content: [
            "Úvod",
            "Preskúmajte koncepty CSS",
            "Zistite viac o CSS",
            "Cvičenie: Použite koncepty CSS",
            "Skontrolujte voliče",
            "Cvičenie: Selektory"
        ]
    },

    {
        //9
        id: "9Ui0L1",
        category: "microsoft365/word/excel/ppt" ,  
        image: course_images.microsoft365img,
        course_name: "Microsoft Office 365 Kancelárske Balíky ",
        description: "https://www.youtube.com/playlist?list=PLIu_ZdHo7Pk-rY_6wVj108Dmff67eQWRG",
        creator: "IT Academy",
   
  
        what_you_will_learn: [
            "Kancelárske balíky sú pre teba tou správnou voľbou, ak sa chceš naučiť pracovať s Wordom, Excelom, a pripraviť prezentaciu v PoverPointe alebo technickú dokumentáciu. Naučíme ťa správne napísať životopis, vytvoriť faktúru či spracovať multimediálny obsah v dokumentoch. Zostaviť si poznámky, denník či poslať e-mail bude pre teba hračkou. S našou pomocou ušetríš čas pri každodennej administratívnej práci.",
        ],
  
    },
    {
        //10
        id: "TKGumi",
        category: "kibernetika",
        image: course_images.data_science_3,
        course_name: "Cyber Security kurz pre začiatočnikov - Level 01",
        description: "https://www.udemy.com/course/certified-secure-netizen/", 
        creator: "FourthWall Technologies.",
    

        what_you_will_learn: [
            "Študenti pochopia základné pojmy kybernetickej bezpečnosti.",
            "Študenti sa naučia, ako sa chrániť pred predátormi internetu.",
            "Študenti budú môcť prijať preventívne opatrenia, aby zostali v bezpečí online.",
        ],
        content: [
            "Úvod do bezpečnosti a internetova bezpečnosť",
            "Internet Security – konfigurácia nastavení zabezpečenia prehliadača",
            "Krádež identity",
            "Šifrovanie",
            "Sandboxing",
            "Skenovanie vírusov pomocou online nástrojov",
            "Bezpečné nakupovanie online a zabezbečenie vaších e-mailov",
            "Antivirusy"
        ]
    },
    {
        //11
        id: "oETsMx",
        category: "kibernetika",
        image: course_images.data_science_4,
        course_name: "Kybernetickí zločinci chcú vaše informácie: Zastavte ich!",
        description: "https://www.udemy.com/course/not-another-password/",
        creator: " Jeremy OConnell",
      


     
        what_you_will_learn: [
            "Naučte sa, ako bezpečne ukladať svoje používateľské mená a heslá a poraziť tak kyberzločincov!",
            "Naučte sa, ako jednoducho spravovať a organizovať dlhý zoznam používateľských mien a hesiel svojho digitálneho života!"
        ],
        content: [
            "Uvod - Život na internete znamená množstvo používateľských mien a hesiel.",
            "Problém s používaním rovnakých hesiel",
            "Hrozby a masívne úniky údajov:",
            "Dôležitosť jedinečných a silných hesiel:",
            "Výzva sledovania a správy hesiel:"
        ]
    },
  
    {
        //12
        id: "-aWjaj",
        category: "kibernetika",
        image: course_images.data_science_5,
        course_name: "Chráňte sa online, rady od profesionálneho hackera",
        description: "https://www.udemy.com/course/protecting-yourself-online-advice-from-a-professional-hacker/",
        creator: "Terry Cutler",

   
     
        what_you_will_learn: [
            "Vyzdvihnem niektoré z najväčších online hrozieb a ukážem vám, ako o sebe nájsť informácie, o ktorých ste nevedeli.",
            "Dozviete sa, ako odhaliť falošné profily",
            "Dozviete sa, ako na sebe vykonávať pokročilé vyhľadávanie Google",
            "Do 4 minút sa dozviete, ako skontrolovať, či už váš počítač nebol napadnutý",
            "Dozviete sa, ako vám vírusy a malvér môžu obrátiť život hore nohami",
            "Dozviete sa, ako vykonať správnu hĺbkovú kontrolu súkromia na Facebooku"
        ],
        content: [
            "Nebezpečenstvo internetu",
            "Ako zistiť, či ste boli napadnutý hackermi ",
            "Ako uzamknúť súkromie na Facebooku",
            "Ukážka Early Bird",
            "Ako chrániť svoje údaje",
            "„Insider Secrets“ o tom, AKO a PREČO vás hacknú"
        ]
    },
    
    
    {
        //13
        id: "xxxbMD",
        category: "kibernetika",
        image: course_images.aws_1,
        course_name: "Insider Secrets k bezpečnosti na internete",
        description: "https://www.udemy.com/course/insider-secrets-to-internet-safety-2023/",
        creator: "Terry Cutler",

    
        what_you_will_learn: [
            "Získajte hlbšie pochopenie toho, ako vás kyberzločinci prenasledujú. A čo môžete urobiť, aby ste im zabránili, aby sa z vás stali ich ďalšou obeťou",
            "Naučte sa jednoduchý a ľahký proces na vytvorenie výkonnej ochrannej vrstvy, ktorá bude online únoscom trvať storočia, kým sa zlomia.",
            "Odhalené: Najbežnejšia, podceňovaná (často zanedbávaná) online ochrana dostupná vo vašich účtoch. (Pokyny krok za krokom vnútri.)",
            "Navyše som odhalil najlepší antivírus, ktorý vás ochráni pred online útokmi, ktoré ušetrili mojim klientom a mne veľa bolestí hlavy.",
        ],
        content: [
            "Trailer MasterClass",
            "Nebezpečenstvo internetu!",
            "Ako zistiť, či ste boli napadnutý hackermi! (Bez toho, aby ste sa stali expertom na kybernetickú bezpečnosť!)",
            "Máte súkromie? (Prevencia podvodov na sociálnych sieťach!)",
            "Ako mať prehľad o najnovších podvodoch a podvodoch, ktorým každý deň čelíme",
        ]
    },
    {
        //14
        id: "cIdBd2",
        category: "microsoft365/word/excel/ppt",
        image: course_images.aws_2,
        course_name: "Office 365 – základy cloudovej služby spoločnosti Microsoft",
        description: "All you need to master AWS Certified Security Specialty certification.",
        creator: "Robert Mira",

     
        what_you_will_learn: [
            "Zistite, prečo toľkí využívajú Office 365. Zistite, aké sú výhody používania Office 365 a aký to má vplyv na všetky podniky.",
            "Zistite, čo je Office 365",
            "Prečo je Office 365 taký populárny",
            "Výhody používania Office 365"
        ],
        content: [
            "Office 365 ako cesta budúcnosti v oblasti informačných technológií (IT). Kurz ako úvod do cloud computingu a základ pre ďalšie kurzy týkajúce sa Office 365.",
            "Cloud Computing: Základné informácie o princípe cloudovej služby vyvinutej spoločnosťou Microsoft.",
            "Témy kurzu: Vlastnosti Office 365. - Základný dizajn cloudovej služby. - Podnikateľské úspory spojené s používaním Office 365. -Rast a rozvoj tejto technológie. -Prístupnosť a výhody pre používateľov."
           
        ]
    },
    {
        //15
        id: "NkZeqm",
        category: "microsoft365/word/excel/ppt",
        image: course_images.aws_3,
        course_name: "7 Microsoft Word a Excel 2016/365 Tipy na produktivitu",
        description: "https://www.udemy.com/course/7mswetips/",
        rating_count: 1603,
        rating_star: 4.5,
        students: 10933,
        creator: "Chandra Lingam",
        updated_date: "8/2022",
      
        what_you_will_learn: [
            "Zvýšte svoje zručnosti pomocou Wordu a Excelu",
            "Zistite, ako automatizovať bežné textové položky v programe Microsoft Word",
            "Ako rýchlo duplikovať pracovné hárky programu Microsoft Excel",
            "Ako jednoducho kopírovať a prilepiť údaje z programu Microsoft Excel do programu Microsoft Word s malým alebo žiadnym formátovaním",
            "Zistite, ako rýchlo vytvoriť graf v programe Microsoft Excel",
            "Získajte praktické tipy na okamžité zvýšenie produktivity pomocou programov Microsoft Excel a Word"
        ],
        content: [
            "7 Microsoft Word a Excel 2016/365 TIPY na zvýšenie produktivity",
            "Microsoft Word - Ako automaticky vkladať bloky textu a bežny text",
            "Microsoft Excel a Microsoft Word - Ako vložiť pracovný hárok programu Excel do programu Word",
            "Microsoft Excel - Ako rýchlo vytvoriť graf",
            "Microsoft Excel – duplikovanie pracovného hárka, vkladanie textu do stlpcov",
            "Monitoring Resource in Cloud"
        ]
    },
   {
        id: "NkZeqq",
        category: "word",
        image: course_images.design_2,
        course_name: "Naučte sa Microsoft Word 365 za večer",
        description: "https://www.udemy.com/course/microsoft-word-in-the-evening/",
        rating_count: 5066,
        rating_star: 4.9,
        students: 143812,
        creator: "Manfred Werner",
        updated_date: "7/2020",
  
        what_you_will_learn: [
            "Rýchla cesta do programu Microsoft Word",
            "Schopnosť písať a tlačiť",
            "Otvorte a zadajte informácie v programe Microsoft Word",
            "Formát a štýl dokumentu programu Word",
            "Použite tabuľky a grafické nástroje ako Kresliť a tvary + vloženie obrazkov",
            "Pripravte dokumenty na tlač pomocou nástrojov na rozloženie strany"
        ],
        content: [
            "Prostredie Word",
            "Naučte sa písať pomocou programu Microsoft Word",
            "Rozloženie stránky vo Worde",
            "Písma a formátovanie + Nástroje na vkladanie a kreslenie ",
            "Tabuľky",
            "Zakončujte a napíšte hlasom, čo ďalej"
        ]
    },/* 
    {
        id: "bLZepe",
        category: "design",
        image: course_images.design_1,
        course_name: "User Experience (UX): The Ultimate Guide to Usability and UX",
        description: "Get a job in UX and build your user research and UX design skills with this hands-on user experience training course.",
        rating_count: 6250,
        rating_star: 4.4,
        students: 22090,
        creator: "David Travis",
        updated_date: "4/2020",

        what_you_will_learn: [
            "Bake UX into your workflow by following a proven, user centred design framework.",
            "Moderate a usability test and prioritise the observations.",
            "Uncover and describe users’ mental models.",
            "Design and conduct online and offline card sorting sessions.",
            "Develop cheap, throwaway prototypes to get quick and frequent feedback from your users."
        ],
        content: [
            "Going where the action is: Understading users in context",
            "How to get niche quick",
            "UX Design Activities - Build your UX Portfolio",
            "What can a London bus teach us about usability?",
            "Beyong 'easy to use': Measuring the user experience",
            "Site structure and navigation: Finding is the new doing",
            "Interaction design: Simple rules for designing simple screens"
        ]
    },
    {
        id: "RkZecd",
        category: "marketing",
        image: course_images.marketing_1,
        course_name: "Copywriting - Become a Freelance Copywriter, your own boss",
        description: "Build a successful freelance copywriting business - turn basic writing skills into a paycheck.",
        rating_count: 2779,
        rating_star: 4.8,
        students: 32657,
        creator: "Len Smith, Sean Kaye",
        updated_date: "4/2018",
    
        what_you_will_learn: [
            "Part one – everything you need for a fast-track start, including your first article",
            "Part three – the essential skills that mark out a real pro",
            "Part two – the copywriter’s ‘how to’: sales copy, expert copy, and more!",
            "Part four – how to boost your income and turn your new website into a money magnet",
        ],
        content: [
            "Choose projects whre you feel comfortable",
            "Back to basics II",
            "How to boost your copywriting income",
            "More on pricing your work",
            "This and that",
            "Conclusion"
        ]
    },
    {
        id: "NrZ_qd",
        category: "marketing",
        image: course_images.marketing_2,
        course_name: "How to Market Yourself as a Coach or Consultant",
        description: "Learn a Proven, Step-by-Step Process You Can Use to Package, Brand, Market, & Sell Your Coaching or Consulting Services",
        rating_count: 963,
        rating_star: 3.8,
        students: 11848,
        creator: "Debbie LaChusa",
        updated_date: "4/2022",
     
        what_you_will_learn: [
            "Identify who your Ideal Clients are so you know exactly who to market and sell to",
            "Learn how to create a Signature Program so you can stop selling your time or creating spec proposals",
            "Learn how to write Compelling Marketing Copy you can use to attract your ideal clients",
            "Learn how to create a Financially Viable Business and understand exactly what it will take to reach your financial goals",
            "Learn how to easily create your own Wordpress Coaching or Consulting Website"
        ],
        content: [
            "Building Your Business & Marketing Foundation",
            "Packaging Your Services",
            "Branding Yourself & Your Business",
            "Marketing Message Development",
            "Getting clients: Objectives & strategies",
            "Markting Yourself Online: Website Development",
            "Marketing Implementation: Create a 90-Day Marketing Plan",
        ]
    },*/
];

export default courses;