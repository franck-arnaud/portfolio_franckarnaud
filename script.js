// =============================================
// SYSTÈME DE TRADUCTION STABILISÉ
// =============================================

const translations = {
  en: {
    // Navigation
    'home': 'Home',
    'about': 'About Me',
    'resume': 'Resume',
    'skills': 'Skills',
    'projects': 'Projects',
    'contact': 'Contact',
    
    // Langues
    'english': 'English',
    'japanese': 'Japanese',
    'french': 'French',
    
    // Hero
    'name': 'LIEHOUAN FRANCK ARNAUD',
    'slogan': 'AI Research for Global Challenges',
    'im': 'I\'m',
    
    // About
    'about-me': 'About Me',
    'about-description': 'My name is Franck-Arnaud LIEHOUAN, from Côte d\'Ivoire. I hold a Bachelor\'s degree in Mathematics and Computer Science and I study Applied Mathematics, focusing on Probability and Statistics. I work primarily with Python and R, focusing on data analysis, statistical modeling, and AI applications. I am passionate about using artificial intelligence and data science to address real-world challenges in health, education, environment, and technology. I thrive in multidisciplinary teams, enjoy exploring innovative approaches, and continuously seek to expand my knowledge. My goal is to harness AI and mathematics to create inclusive, impactful, and sustainable solutions that enhance quality of life, especially in developing regions.',
    'personal-info': 'Personal Information',
    'birthday': 'Birthday:',
    'birthday-date': '1991 Nov 01',
    'city': 'City:',
    'city-location': 'Nagoya, Japan',
    'programming': 'Programming:',
    'programming-languages': 'Python, Html, CSS, Javascripts',
    'hobbies': 'Hobbies:',
    'hobbies-list': 'Reading, Football, Listening to music, Swimming',
    'degree': 'Degree:',
    'degree-details': 'Bachelor in Math & CS',
    'email': 'Email:',
    'languages': 'Languages:',
    'language-list': 'English, French, Japanese',
    
    // Resume
    'resume-title': 'Resume',
    'summary': 'Summary',
    'summary-description': 'I am a Mathematics and Computer Science graduate, I am deeply passionate about leveraging mathematics and technology, particularly Artificial Intelligence, to develop innovative solutions with significant social impact. Through my professional experience in community-based projects, I have gained direct insight into the real-world challenges faced by populations, which inspires my research and applied work.',
    'education': 'Education',
    'masters-degree': 'Master\'s Degree in Applied Mathematics',
    'university-1': 'Université Jean Lorougnon Guédé, Côte d\'Ivoire',
    'masters-specialization': 'Option: Probability & Statistics.',
    'bachelors-degree': 'Bachelor\'s Degree in Mathematics & Computer Science',
    'university-3': 'Université Jean Lorougnon Guédé, Côte d\'Ivoire',
    'experience': 'Professional Experience',
    'job-1-title': 'Community Development Consultant',
    'job-1-company': 'Generation Women of the Third Millennium (Cocoa Life Project)',
    'job-1-date': '2024',
    'job-1-description': 'Facilitated participatory diagnostics for local community needs.',
    'job-2-title': 'Field Supervisor',
    'job-2-company': 'Alliance Côte d\'Ivoire (PMNDPE Project)',
    'job-2-date': '2022 – 2023',
    'job-2-description': 'Implemented community health and nutrition activities.',
    'job-3-title': 'Field Investigator & Supervisor',
    'job-3-company': 'CARE International Côte d\'Ivoire',
    'job-3-date': '2020 – 2021',
    'job-3-description': 'Collected field data, supervised nutrition activities, and evaluated health committees using Kobocollect.',
    'job-4-title': 'Training Consultant',
    'job-4-company': 'REACH Project (Stanford Univ. & CARE Partnership)',
    'job-4-date': '2019 – 2020',
    'job-4-description': 'Trained community health committees (COGES) and drafted reports.',
    
    // Research
    'research': 'Research',
    'research-1': 'Robustness of minimum Hellinger Distance, case of extreme value law',
    'research-2': 'Developing an AI-Driven application for precise malnutrition detection in Côte d\'Ivoire',
    
    // Publications
    'publications': 'Publications',
    'publications-description': 'Currently preparing research papers for publication. Focused on developing impactful contributions to the fields of Applied Mathematics and AI-driven solutions for social challenges.',
    
    // Skills
    'skills-title': 'Skills',
    'skills-description': 'My technical expertise and areas of specialization.',
    'python-programming': 'Python Programming',
    'r-scripting': 'R Scripting',
    'statistical-modeling': 'Statistical Modeling',
    'latex-typesetting': 'LaTeX Typesetting',
    'academic-research-methods': 'Academic Research Methods',
    
    // Projects
    'projects-title': 'My Projects',
    'projects-description': 'Here are some completed and ongoing projects.',
    'malnutrition-detection': 'AI Malnutrition Detection',
    'date': 'Date:',
    'sept-2025': 'Sept 2025',
    'malnutrition-description': 'Development of an AI system for detecting malnutrition cases using computer vision and machine learning techniques.',
    'ongoing': '(Ongoing)',
    'in-progress': 'In progress',
    'completed': 'Completed',
    'public': 'Public',
    'private': 'Private',
    'not-available': 'Not available',
    
    // Contact
    'contact-title': 'Contact',
    'contact-description': 'Get in touch with me for collaborations or inquiries.',
    'location': 'Location',
    'location-details': 'Nagoya, Japan',
    'email-title': 'Email',
    'call': 'Call',
    'call-details': 'Available upon request',
    
    // Footer
    'footer-description': 'Passionate about creating new technologies for social impact and sustainable development.',
    'rights': 'All rights reserved.'
  },
  jp: {
    // Navigation
    'home': 'ホーム',
    'about': '私について',
    'resume': '履歴書',
    'skills': 'スキル',
    'projects': 'プロジェクト',
    'contact': '連絡先',
    
    // Langues
    'english': '英語',
    'japanese': '日本語',
    'french': 'フランス語',
    
    // Hero
    'name': 'リエウアン・フランク・アルノー',
    'slogan': '世界的課題のためのAI研究',
    'im': '私は',
    
    // About
    'about-me': '私について',
    'about-description': '私はコートジボワール出身のフランク・アルノー・リエウアンです。数学と情報科学の学士号を取得しており、確率論と統計学を専攻とする応用数学を学んでいます。主にPythonとRを使用して、データ分析、統計モデリング、AIアプリケーションに焦点を当てています。私は、人工知能とデータサイエンスを活用して、健康、教育、環境、技術における現実世界の課題に取り組むことに情熱を持っています。多分野のチームで活躍し、革新的なアプローチを探求し、知識を絶えず拡大することを楽しんでいます。私の目標は、特に発展途上地域において、生活の質を向上させる包括的で影響力のある持続可能なソリューションを作り出すために、AIと数学を活用することです。',
    'personal-info': '個人情報',
    'birthday': '誕生日：',
    'birthday-date': '1991年11月1日',
    'city': '都市：',
    'city-location': '名古屋、日本',
    'programming': 'プログラミング：',
    'programming-languages': 'Python、Html、CSS、Javascripts',
    'hobbies': '趣味：',
    'hobbies-list': '読書、サッカー、音楽鑑賞、水泳',
    'degree': '学位：',
    'degree-details': '数学と情報科学の学士号',
    'email': 'メール：',
    'languages': '言語：',
    'language-list': '英語、フランス語、日本語',
    
    // Resume
    'resume-title': '履歴書',
    'summary': '概要',
    'summary-description': '私は数学と情報科学の卒業生であり、特に人工知能を活用して社会的影響の大きい革新的なソリューションを開発することに深い情熱を持っています。コミュニティベースのプロジェクトでの専門的な経験を通じて、人々が直面する現実世界の課題について直接的な洞察を得ており、これが私の研究と応用作業にインスピレーションを与えています。',
    'education': '学歴',
    'masters-degree': '応用数学の修士号',
    'university-1': 'ジャン・ロルグノン・ゲデ大学、コートジボワール',
    'masters-specialization': '専攻：確率論と統計学',
    'bachelors-degree': '数学と情報科学の学士号',
    'university-3': 'ジャン・ロルグノン・ゲデ大学、コートジボワール',
    'experience': '職務経験',
    'job-1-title': 'コミュニティ開発コンサルタント',
    'job-1-company': '第3千年紀の女性世代（ココアライフプロジェクト）',
    'job-1-date': '2024年',
    'job-1-description': '地域コミュニティのニーズに対する参加型診断を促進しました。',
    'job-2-title': 'フィールドスーパーバイザー',
    'job-2-company': 'アライアンス・コートジボワール（PMNDPEプロジェクト）',
    'job-2-date': '2022年〜2023年',
    'job-2-description': '地域の健康と栄養活動を実施しました。',
    'job-3-title': 'フィールド調査員兼スーパーバイザー',
    'job-3-company': 'CAREインターナショナル・コートジボワール',
    'job-3-date': '2020年〜2021年',
    'job-3-description': 'Kobocollectを使用してフィールドデータを収集し、栄養活動を監督し、健康委員会を評価しました。',
    'job-4-title': 'トレーニングコンサルタント',
    'job-4-company': 'REACHプロジェクト（スタンフォード大学＆CAREパートナーシップ）',
    'job-4-date': '2019年〜2020年',
    'job-4-description': '地域保健委員会（COGES）を訓練し、報告書を作成しました。',
    
    // Research
    'research': '研究',
    'research-1': '最小ヘリンジャー距離の頑健性、極値分布の場合',
    'research-2': 'コートジボワールにおける精密な栄養失調検出のためのAI駆動アプリケーションの開発',
    
    // Publications
    'publications': '出版物',
    'publications-description': '現在、研究論文を出版に向けて準備中です。応用数学と社会的課題に対するAI駆動ソリューションの分野への影響力のある貢献の開発に焦点を当てています。',
    
    // Skills
    'skills-title': 'スキル',
    'skills-description': '私の技術的専門知識と専門分野。',
    'python-programming': 'Pythonプログラミング',
    'r-scripting': 'Rスクリプティング',
    'statistical-modeling': '統計モデリング',
    'latex-typesetting': 'LaTeX組版',
    'academic-research-methods': '学術研究方法',
    
    // Projects
    'projects-title': '私のプロジェクト',
    'projects-description': '完了したプロジェクトと進行中のプロジェクトをいくつか紹介します。',
    'malnutrition-detection': 'AI栄養失調検出',
    'date': '日付：',
    'sept-2025': '2025年9月',
    'malnutrition-description': 'コンピュータビジョンと機械学習技術を使用して栄養失調症例を検出するAIシステムの開発。',
    'ongoing': '(進行中)',
    'in-progress': '進行中',
    'completed': '完了',
    'public': '公開',
    'private': '非公開',
    'not-available': '利用不可',
    
    // Contact
    'contact-title': '連絡先',
    'contact-description': '協力やお問い合わせはこちらからご連絡ください。',
    'location': '所在地',
    'location-details': '名古屋、日本',
    'email-title': 'メール',
    'call': '電話',
    'call-details': 'リクエストに応じて',
    
    // Footer
    'footer-description': '社会的影響と持続可能な開発のために新しい技術を創造することに情熱を持っています。',
    'rights': '全著作権所有。'
  },
  fr: {
    // Navigation
    'home': 'Accueil',
    'about': 'À Propos',
    'resume': 'CV',
    'skills': 'Compétences',
    'projects': 'Projets',
    'contact': 'Contact',
    
    // Langues
    'english': 'Anglais',
    'japanese': 'Japonais',
    'french': 'Français',
    
    // Hero
    'name': 'LIEHOUAN FRANCK ARNAUD',
    'slogan': 'Recherche en IA pour les Défis Mondiaux',
    'im': 'Je suis',
    
    // About
    'about-me': 'À Propos de Moi',
    'about-description': 'Je m\'appelle Franck-Arnaud LIEHOUAN, je suis originaire de Côte d\'Ivoire. Je détiens une licence en Mathématiques et Informatique et j\'étudie les Mathématiques Appliquées, en me concentrant sur les Probabilités et les Statistiques. Je travaille principalement avec Python et R, en me concentrant sur l\'analyse de données, la modélisation statistique et les applications d\'IA. Je suis passionné par l\'utilisation de l\'intelligence artificielle et de la science des données pour relever les défis du monde réel dans les domaines de la santé, de l\'éducation, de l\'environnement et de la technologie. Je m\'épanouis dans des équipes multidisciplinaires, j\'aime explorer des approches innovantes et je cherche continuellement à élargir mes connaissances. Mon objectif est d\'utiliser l\'IA et les mathématiques pour créer des solutions inclusives, impactantes et durables qui améliorent la qualité de life, en particulier dans les régions en développement.',
    'personal-info': 'Informations Personnelles',
    'birthday': 'Date de naissance :',
    'birthday-date': '1 Nov 1991',
    'city': 'Ville :',
    'city-location': 'Nagoya, Japon',
    'programming': 'Programmation :',
    'programming-languages': 'Python, Html, CSS, Javascripts',
    'hobbies': 'Loisirs :',
    'hobbies-list': 'Lecture, Football, Écouter de la musique, Natation',
    'degree': 'Diplôme :',
    'degree-details': 'Licence en Math & Info',
    'email': 'Email :',
    'languages': 'Langues :',
    'language-list': 'Anglais, Français, Japonais',
    
    // Resume
    'resume-title': 'CV',
    'summary': 'Résumé',
    'summary-description': 'Je suis diplômé en Mathématiques et Informatique, je suis profondément passionné par l\'utilisation des mathématiques et de la technologie, en particulier l\'Intelligence Artificielle, pour développer des solutions innovantes ayant un impact social significatif. Grâce à mon expérience professionnelle dans des projets communautaires, j\'ai acquis une vision directe des défis réels auxquels sont confrontées les populations, ce qui inspire mes recherches et mon travail appliqué.',
    'education': 'Formation',
    'masters-degree': 'Master en Mathématiques Appliquées',
    'university-1': 'Université Jean Lorougnon Guédé, Côte d\'Ivoire',
    'masters-specialization': 'Option : Probabilités et Statistiques',
    'bachelors-degree': 'Licence en Mathématiques et Informatique',
    'university-3': 'Université Jean Lorougnon Guédé, Côte d\'Ivoire',
    'experience': 'Expérience Professionnelle',
    'job-1-title': 'Consultant en Développement Communautaire',
    'job-1-company': 'Génération Femmes du Troisième Millénaire (Projet Cocoa Life)',
    'job-1-date': '2024',
    'job-1-description': 'Facilité les diagnostics participatifs pour les besoins de la communauté locale.',
    'job-2-title': 'Superviseur de Terrain',
    'job-2-company': 'Alliance Côte d\'Ivoire (Projet PMNDPE)',
    'job-2-date': '2022 – 2023',
    'job-2-description': 'Mis en œuvre des activités de santé et de nutrition communautaires.',
    'job-3-title': 'Enquêteur et Superviseur de Terrain',
    'job-3-company': 'CARE International Côte d\'Ivoire',
    'job-3-date': '2020 – 2021',
    'job-3-description': 'Collecté des données de terrain, supervisé des activités de nutrition et évalué les comités de santé en utilisant Kobocollect.',
    'job-4-title': 'Consultant en Formation',
    'job-4-company': 'Projet REACH (Partenariat Université de Stanford & CARE)',
    'job-4-date': '2019 – 2020',
    'job-4-description': 'Formé les comités de santé communautaires (COGES) et rédigé des rapports.',
    
    // Research
    'research': 'Recherche',
    'research-1': 'Robustesse de la distance de Hellinger minimale, cas de la loi des valeurs extrêmes',
    'research-2': 'Développement d\'une application pilotée par l\'IA pour la détection précise de la malnutrition en Côte d\'Ivoire',
    
    // Publications
    'publications': 'Publications',
    'publications-description': 'Actuellement en préparation d\'articles de recherche pour publication. Concentré sur le développement de contributions impactantes dans les domaines des Mathématiques Appliquées et des solutions basées sur l\'IA pour les défis sociaux.',
    
    // Skills
    'skills-title': 'Compétences',
    'skills-description': 'Mon expertise technique et mes domaines de spécialisation.',
    'python-programming': 'Programmation Python',
    'r-scripting': 'Scripting R',
    'statistical-modeling': 'Modélisation Statistique',
    'latex-typesetting': 'Composition LaTeX',
    'academic-research-methods': 'Méthodes de Recherche Académique',
    
    // Projects
    'projects-title': 'Mes Projets',
    'projects-description': 'Voici quelques projets terminés et en cours.',
    'malnutrition-detection': 'Détection IA de la Malnutrition',
    'date': 'Date :',
    'sept-2025': 'Sept 2025',
    'malnutrition-description': 'Développement d\'un système d\'IA pour détecter les cas de malnutrition en utilisant la vision par ordinateur et les techniques d\'apprentissage automatique.',
    'ongoing': '(En cours)',
    'in-progress': 'En cours',
    'completed': 'Terminé',
    'public': 'Public',
    'private': 'Privé',
    'not-available': 'Non consultable',
    
    // Contact
    'contact-title': 'Contact',
    'contact-description': 'Contactez-moi pour des collaborations ou des demandes.',
    'location': 'Localisation',
    'location-details': 'Nagoya, Japon',
    'email-title': 'Email',
    'call': 'Appel',
    'call-details': 'Disponible sur demande',
    
    // Footer
    'footer-description': 'Passionné par la création de nouvelles technologies au service de l\'impact social et du développement durable.',
    'rights': 'Tous droits réservés.'
  }
};

// =============================================
// VARIABLES GLOBALES
// =============================================

let currentLanguage = 'en';
let isTranslating = false;

// Textes pour l'effet de frappe par langue
const typingTexts = {
  en: [
    'a Student in Applied Mathematics',
    'a Research Student in AI'
  ],
  jp: [
    '応用数学の学生',
    'AI研究の学生'
  ],
  fr: [
    'un étudiant en Mathématiques Appliquées',
    'un étudiant chercheur en IA'
  ]
};

// Variables pour l'effet de frappe
let textArray = [];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout;

// =============================================
// FONCTIONS PRINCIPALES STABILISÉES
// =============================================

/**
 * Fonction pour l'effet de frappe
 */
function type() {
  const currentText = textArray[textIndex];
  const typedTextSpan = document.getElementById('typed-target');
  
  if (!typedTextSpan) return;
  
  if (isDeleting) {
    typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedTextSpan.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }
  
  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    typingTimeout = setTimeout(type, 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length;
    typingTimeout = setTimeout(type, 500);
  } else {
    typingTimeout = setTimeout(type, isDeleting ? 50 : 100);
  }
}

/**
 * Démarre l'effet de frappe avec la langue spécifiée
 * @param {string} lang - La langue à utiliser
 */
function startTypingEffect(lang) {
  clearTimeout(typingTimeout);
  
  if (!typingTexts[lang]) return;
  
  textArray = typingTexts[lang];
  textIndex = 0;
  charIndex = 0;
  isDeleting = false;
  
  const typedTextSpan = document.getElementById('typed-target');
  if (typedTextSpan) {
    typedTextSpan.textContent = '';
  }
  
  type();
}

/**
 * Change la langue du site de manière synchrone et stable
 */
function changeLanguage(lang) {
  if (isTranslating || !translations[lang]) return;
  
  isTranslating = true;
  
  try {
    // Mettre à jour le bouton de langue
    const currentLanguageElement = document.getElementById('current-language');
    if (currentLanguageElement) {
      currentLanguageElement.textContent = 
        lang === 'en' ? 'ENG' : lang === 'jp' ? 'JP' : 'FR';
    }
    
    currentLanguage = lang;
    
    // Traduire tous les éléments de manière synchrone
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
        
        // Gérer les attributs spéciaux comme placeholder, title, etc.
        if (element.hasAttribute('placeholder')) {
          element.setAttribute('placeholder', translations[lang][key]);
        }
        
        if (element.hasAttribute('title')) {
          element.setAttribute('title', translations[lang][key]);
        }
      }
    });
    
    // Sauvegarder la langue
    localStorage.setItem('language', lang);
    
    // Redémarrer l'effet de frappe
    startTypingEffect(lang);
    
  } catch (error) {
    console.error('Erreur lors de la traduction:', error);
  } finally {
    isTranslating = false;
  }
}

/**
 * Initialise la langue du site
 */
function initLanguage() {
  // Vérifier d'abord la langue sauvegardée
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage && translations[savedLanguage]) {
    currentLanguage = savedLanguage;
    changeLanguage(currentLanguage);
    return;
  }
  
  // Sinon, déterminer la langue par défaut basée sur le navigateur
  const browserLang = navigator.language || navigator.userLanguage || '';
  if (browserLang.startsWith('ja')) {
    currentLanguage = 'jp';
  } else if (browserLang.startsWith('fr')) {
    currentLanguage = 'fr';
  } else {
    currentLanguage = 'en';
  }
  
  changeLanguage(currentLanguage);
}

// =============================================
// GESTIONNAIRES D'ÉVÉNEMENTS STABILISÉS
// =============================================

// Navigation mobile
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu ul');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      const icon = this.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });
  }
  
  // Initialiser la langue une fois le DOM chargé
  initLanguage();
});

// Changement d'apparence du header au défilement
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const backToTop = document.querySelector('.back-to-top');
  
  if (header && backToTop) {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
      backToTop.classList.add('active');
    } else {
      header.classList.remove('scrolled');
      backToTop.classList.remove('active');
    }
  }
});

// Bouton retour en haut
const backToTopBtn = document.querySelector('.back-to-top');
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Navigation par ancres
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      
      // Fermer le menu mobile si ouvert
      const navMenu = document.querySelector('.nav-menu ul');
      const mobileIcon = document.querySelector('.mobile-nav-toggle i');
      
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (mobileIcon) {
          mobileIcon.classList.remove('fa-times');
          mobileIcon.classList.add('fa-bars');
        }
      }
    }
  });
});

// Mise en surbrillance de la navigation active
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// Sélecteur de langue - Gestion améliorée
document.querySelectorAll('.language-option').forEach(option => {
  option.addEventListener('click', function(e) {
    e.stopPropagation();
    const lang = this.getAttribute('data-lang');
    
    if (!isTranslating && translations[lang]) {
      changeLanguage(lang);
    }
    
    // Fermer le dropdown après sélection
    const dropdown = document.getElementById('language-dropdown');
    if (dropdown) {
      dropdown.style.opacity = '0';
      dropdown.style.visibility = 'hidden';
      dropdown.style.transform = 'translateY(10px)';
    }
  });
});

// Gestion du dropdown de langue
const languageBtn = document.querySelector('.language-btn');
const languageDropdown = document.getElementById('language-dropdown');

if (languageBtn && languageDropdown) {
  let dropdownCooldown = false;
  
  languageBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (!dropdownCooldown) {
      const isVisible = languageDropdown.style.opacity === '1';
      
      languageDropdown.style.opacity = isVisible ? '0' : '1';
      languageDropdown.style.visibility = isVisible ? 'hidden' : 'visible';
      languageDropdown.style.transform = isVisible ? 'translateY(10px)' : 'translateY(0)';
      
      dropdownCooldown = true;
      setTimeout(() => {
        dropdownCooldown = false;
      }, 300);
    }
  });
}

// Fermer le dropdown en cliquant ailleurs
document.addEventListener('click', function() {
  const dropdown = document.getElementById('language-dropdown');
  if (dropdown) {
    dropdown.style.opacity = '0';
    dropdown.style.visibility = 'hidden';
    dropdown.style.transform = 'translateY(10px)';
  }
});