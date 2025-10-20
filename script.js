// Système de traduction
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
    'japanese-name': 'リエウアン・フランク・アルノー',
    'im': 'I\'m',
    'ai-engineer': 'AI Engineer / AI のエンジニア',
    
    // About
    'about-me': 'About Me',
    'about-description': 'My name is Franck-Arnaud LIEHOUAN, from Côte d\'Ivoire. I hold a Bachelor\'s degree in Mathematics and Computer Science and am currently pursuing a Master\'s in Applied Mathematics, specializing in Probability and Statistics. I work primarily with Python and R, focusing on data analysis, statistical modeling, and AI applications. I am passionate about using artificial intelligence and data science to address real-world challenges in health, education, environment, and technology. I thrive in multidisciplinary teams, enjoy exploring innovative approaches, and continuously seek to expand my knowledge. My goal is to harness AI and mathematics to create inclusive, impactful, and sustainable solutions that enhance quality of life, especially in developing regions.',
    'personal-info': 'Personal Information',
    'birthday': 'Birthday:',
    'birthday-date': '1991 Nov 01',
    'city': 'City:',
    'city-location': 'Nagoya, Japan',
    'programming': 'Programming Language:',
    'programming-languages': 'Python, Html, CSS, Javascripts',
    'degree': 'Degree:',
    'degree-details': 'Bachelor Degree in Mathematics and Computer Science',
    'email': 'Email:',
    'languages': 'Languages:',
    'language-list': 'English, French, Japanese',
    
    // Resume
    'resume-title': 'Resume',
    'summary': 'Summary',
    'summary-description': 'I am a Mathematics and Computer Science graduate, I am deeply passionate about leveraging mathematics and technology, particularly Artificial Intelligence, to develop innovative solutions with significant social impact. Through my professional experience in community-based projects, I have gained direct insight into the real-world challenges faced by populations, which inspires my research and applied work.',
    'education': 'Education',
    'masters-degree': 'Master\'s Degree in Mathematics & Computer Science',
    'university-1': 'Université Jean Lorougnon Guédé, Côte d\'Ivoire',
    'masters-date': '2023 – 2024 (Ongoing)',
    'masters-specialization': 'Specialization in Probability & Statistics.',
    'masters-thesis': 'Thesis on Extreme Value Theory & Hellinger Distance.',
    'bachelors-honors': 'Bachelor\'s Degree (Honors) in Mathematics & Computer Science',
    'university-2': 'Université Jean Lorougnon Guédé, Côte d\'Ivoire',
    'bachelors-honors-date': '2022 – 2023',
    'bachelors-degree': 'Bachelor\'s Degree in Mathematics & Computer Science',
    'university-3': 'Université Jean Lorougnon Guédé, Côte d\'Ivoire',
    'bachelors-date': '2020 – 2021',
    'experience': 'Professional Experience',
    'job-1-title': 'Community Development Consultant',
    'job-1-company': 'Generation Women of the Third Millennium (Cocoa Life Project)',
    'job-1-date': '2024',
    'job-1-description': 'Facilitated participatory diagnostics for local community needs.',
    'job-2-title': 'Field Supervisor',
    'job-2-company': 'Alliance Côte d\'Ivoire (PMNDPE Project)',
    'job-2-date': '2022 – 2023',
    'job-2-description': 'Implemented community health and nutrition activities.',
    'job-3-title': 'Field Investigator',
    'job-3-company': 'CARE International Côte d\'Ivoire',
    'job-3-date': '2020 – 2021',
    'job-3-description': 'Collected data using Kobocollect and evaluated health committees.',
    'job-4-title': 'Training Consultant',
    'job-4-company': 'REACH Project (Stanford Univ. & CARE Partnership)',
    'job-4-date': '2019 – 2020',
    'job-4-description': 'Trained community health committees (COGES) and drafted reports.',
    'publications': 'Publications',
    'year-2024': '2024',
    'publication-1': '',
    'year-2023': '2023',
    'publication-2': '',
    'publication-3': '',
    
    // Skills
    'skills-title': 'Skills',
    'skills-description': 'My technical expertise and areas of specialization.',
    'skill-1-title': 'Deep Learning',
    'skill-1-description': 'Advanced knowledge in neural networks, convolutional networks, and recurrent networks for various AI applications.',
    'skill-2-title': 'Computer Vision',
    'skill-2-description': 'Expertise in image recognition, object detection, and visual data analysis using modern AI techniques.',
    'skill-3-title': 'Natural Language Processing',
    'skill-3-description': 'Experience with text analysis, sentiment analysis, and language modeling using state-of-the-art NLP techniques.',
    'skill-4-title': 'Python Programming',
    'skill-4-description': 'Proficient in Python with extensive experience in data science libraries and AI frameworks.',
    'skill-5-title': 'Internet of Things',
    'skill-5-description': 'Knowledge of IoT systems, sensor networks, and embedded systems for smart applications.',
    'skill-6-title': 'AI Research',
    'skill-6-description': 'Active research in AI applications for social impact, particularly in developing regions.',
    
    // Projects
    'projects-title': 'My Projects',
    'projects-description': 'Here are some completed and ongoing projects.',
    'project-1-title': 'Census Platform',
    'project-1-date': 'March 2025',
    'project-2-title': 'AI Malnutrition Detection',
    'project-2-date': 'April 2025',
    'project-3-title': 'Artisans Website',
    'project-3-date': 'February 2025',
    'project-4-title': 'Personal Portfolio',
    'project-4-date': 'January 2025',
    'project-5-title': 'Malnutrition Detection',
    'project-5-date': '2025',
    'project-5-description': 'Supervised classification of children\'s nutritional status (normal, moderate, severe) using Python and Random Forest.',
    'date': 'Date:',
    'completed': 'Completed',
    'in-progress': 'In progress',
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
    'japanese-name': 'リエウアン・フランク・アルノー',
    'im': '私は',
    'ai-engineer': 'AIエンジニア',
    
    // About
    'about-me': '私について',
    'about-description': '私はコートジボワール出身のフランク・アルノー・リエウアンです。数学と情報科学の学士号を取得しており、現在は確率論と統計学を専門とする応用数学の修士号を取得中です。主にPythonとRを使用して、データ分析、統計モデリング、AIアプリケーションに焦点を当てています。私は、人工知能とデータサイエンスを活用して、健康、教育、環境、技術における現実世界の課題に取り組むことに情熱を持っています。多分野のチームで活躍し、革新的なアプローチを探求し、知識を絶えず拡大することを楽しんでいます。私の目標は、特に発展途上地域において、生活の質を向上させる包括的で影響力のある持続可能なソリューションを作り出すために、AIと数学を活用することです。',
    'personal-info': '個人情報',
    'birthday': '誕生日：',
    'birthday-date': '1991年11月1日',
    'city': '都市：',
    'city-location': '名古屋、日本',
    'programming': 'プログラミング言語：',
    'programming-languages': 'Python、Html、CSS、Javascripts',
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
    'masters-degree': '数学と情報科学の修士号',
    'university-1': 'ジャン・ロルグノン・ゲデ大学、コートジボワール',
    'masters-date': '2023年〜2024年（進行中）',
    'masters-specialization': '確率論と統計学を専門とする。',
    'masters-thesis': '極値理論とヘリンガー距離に関する論文。',
    'bachelors-honors': '数学と情報科学の学士号（優等）',
    'university-2': 'ジャン・ロルグノン・ゲデ大学、コートジボワール',
    'bachelors-honors-date': '2022年〜2023年',
    'bachelors-degree': '数学と情報科学の学士号',
    'university-3': 'ジャン・ロルグノン・ゲデ大学、コートジボワール',
    'bachelors-date': '2020年〜2021年',
    'experience': '職務経験',
    'job-1-title': 'コミュニティ開発コンサルタント',
    'job-1-company': '第3千年紀の女性世代（ココアライフプロジェクト）',
    'job-1-date': '2024年',
    'job-1-description': '地域コミュニティのニーズに対する参加型診断を促進しました。',
    'job-2-title': 'フィールドスーパーバイザー',
    'job-2-company': 'アライアンス・コートジボワール（PMNDPEプロジェクト）',
    'job-2-date': '2022年〜2023年',
    'job-2-description': '地域の健康と栄養活動を実施しました。',
    'job-3-title': 'フィールド調査員',
    'job-3-company': 'CAREインターナショナル・コートジボワール',
    'job-3-date': '2020年〜2021年',
    'job-3-description': 'Kobocollectを使用してデータを収集し、健康委員会を評価しました。',
    'job-4-title': 'トレーニングコンサルタント',
    'job-4-company': 'REACHプロジェクト（スタンフォード大学＆CAREパートナーシップ）',
    'job-4-date': '2019年〜2020年',
    'job-4-description': '地域保健委員会（COGES）を訓練し、報告書を作成しました。',
    'publications': '出版物',
    'year-2024': '2024年',
    'publication-1': '',
    'year-2023': '2023年',
    'publication-2': '',
    'publication-3': '',
    
    // Skills
    'skills-title': 'スキル',
    'skills-description': '私の技術的専門知識と専門分野。',
    'skill-1-title': 'ディープラーニング',
    'skill-1-description': '様々なAIアプリケーションのためのニューラルネットワーク、畳み込みネットワーク、リカレントネットワークに関する高度な知識。',
    'skill-2-title': 'コンピュータビジョン',
    'skill-2-description': '現代のAI技術を使用した画像認識、物体検出、視覚データ分析の専門知識。',
    'skill-3-title': '自然言語処理',
    'skill-3-description': '最先端のNLP技術を使用したテキスト分析、感情分析、言語モデリングの経験。',
    'skill-4-title': 'Pythonプログラミング',
    'skill-4-description': 'データサイエンスライブラリとAIフレームワークでの豊富な経験を持つPythonの熟練者。',
    'skill-5-title': 'モノのインターネット',
    'skill-5-description': 'スマートアプリケーションのためのIoTシステム、センサーネットワーク、組み込みシステムの知識。',
    'skill-6-title': 'AI研究',
    'skill-6-description': '特に発展途上地域における社会的影響のためのAIアプリケーションの積極的な研究。',
    
    // Projects
    'projects-title': '私のプロジェクト',
    'projects-description': '完了したプロジェクトと進行中のプロジェクトをいくつか紹介します。',
    'project-1-title': '国勢調査プラットフォーム',
    'project-1-date': '2025年3月',
    'project-2-title': 'AI栄養失調検出',
    'project-2-date': '2025年4月',
    'project-3-title': '職人ウェブサイト',
    'project-3-date': '2025年2月',
    'project-4-title': '個人ポートフォリオ',
    'project-4-date': '2025年1月',
    'project-5-title': '栄養失調検出',
    'project-5-date': '2025年',
    'project-5-description': 'PythonとRandom Forestを使用した子供の栄養状態（正常、中等度、重度）の教師あり分類。',
    'date': '日付：',
    'completed': '完了',
    'in-progress': '進行中',
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
    'japanese-name': 'リエウアン・フランク・アルノー',
    'im': 'Je suis',
    'ai-engineer': 'Ingénieur IA / AI Engineer',
    
    // About
    'about-me': 'À Propos de Moi',
    'about-description': 'Je m\'appelle Franck-Arnaud LIEHOUAN, je suis originaire de Côte d\'Ivoire. Je détiens une licence en Mathématiques et Informatique et je poursuis actuellement un master en Mathématiques Appliquées, spécialisé en Probabilités et Statistiques. Je travaille principalement avec Python et R, en me concentrant sur l\'analyse de données, la modélisation statistique et les applications d\'IA. Je suis passionné par l\'utilisation de l\'intelligence artificielle et de la science des données pour relever les défis du monde réel dans les domaines de la santé, de l\'éducation, de l\'environnement et de la technologie. Je m\'épanouis dans des équipes multidisciplinaires, j\'aime explorer des approches innovantes et je cherche continuellement à élargir mes connaissances. Mon objectif est d\'utiliser l\'IA et les mathématiques pour créer des solutions inclusives, impactantes et durables qui améliorent la qualité de vie, en particulier dans les régions en développement.',
    'personal-info': 'Informations Personnelles',
    'birthday': 'Date de naissance :',
    'birthday-date': '1 Nov 1991',
    'city': 'Ville :',
    'city-location': 'Nagoya, Japon',
    'programming': 'Langages de programmation :',
    'programming-languages': 'Python, Html, CSS, Javascripts',
    'degree': 'Diplôme :',
    'degree-details': 'Licence en Mathématiques et Informatique',
    'email': 'Email :',
    'languages': 'Langues :',
    'language-list': 'Anglais, Français, Japonais',
    
    // Resume
    'resume-title': 'CV',
    'summary': 'Résumé',
    'summary-description': 'Je suis diplômé en Mathématiques et Informatique, je suis profondément passionné par l\'utilisation des mathématiques et de la technologie, en particulier l\'Intelligence Artificielle, pour développer des solutions innovantes ayant un impact social significatif. Grâce à mon expérience professionnelle dans des projets communautaires, j\'ai acquis une vision directe des défis réels auxquels sont confrontées les populations, ce qui inspire mes recherches et mon travail appliqué.',
    'education': 'Formation',
    'masters-degree': 'Master en Mathématiques et Informatique',
    'university-1': 'Université Jean Lorougnon Guédé, Côte d\'Ivoire',
    'masters-date': '2023 – 2024 (En cours)',
    'masters-specialization': 'Spécialisation en Probabilités et Statistiques.',
    'masters-thesis': 'Thèse sur la théorie des valeurs extrêmes et la distance de Hellinger.',
    'bachelors-honors': 'Licence (avec mention) en Mathématiques et Informatique',
    'university-2': 'Université Jean Lorougnon Guédé, Côte d\'Ivoire',
    'bachelors-honors-date': '2022 – 2023',
    'bachelors-degree': 'Licence en Mathématiques et Informatique',
    'university-3': 'Université Jean Lorougnon Guédé, Côte d\'Ivoire',
    'bachelors-date': '2020 – 2021',
    'experience': 'Expérience Professionnelle',
    'job-1-title': 'Consultant en Développement Communautaire',
    'job-1-company': 'Génération Femmes du Troisième Millénaire (Projet Cocoa Life)',
    'job-1-date': '2024',
    'job-1-description': 'Facilité les diagnostics participatifs pour les besoins de la communauté locale.',
    'job-2-title': 'Superviseur de Terrain',
    'job-2-company': 'Alliance Côte d\'Ivoire (Projet PMNDPE)',
    'job-2-date': '2022 – 2023',
    'job-2-description': 'Mis en œuvre des activités de santé et de nutrition communautaires.',
    'job-3-title': 'Enquêteur de Terrain',
    'job-3-company': 'CARE International Côte d\'Ivoire',
    'job-3-date': '2020 – 2021',
    'job-3-description': 'Collecté des données à l\'aide de Kobocollect et évalué les comités de santé.',
    'job-4-title': 'Consultant en Formation',
    'job-4-company': 'Projet REACH (Partenariat Université de Stanford & CARE)',
    'job-4-date': '2019 – 2020',
    'job-4-description': 'Formé les comités de santé communautaires (COGES) et rédigé des rapports.',
    'publications': 'Publications',
    'year-2024': '2024',
    'publication-1': '',
    'year-2023': '2023',
    'publication-2': '',
    'publication-3': '',
    
    // Skills
    'skills-title': 'Compétences',
    'skills-description': 'Mon expertise technique et mes domaines de spécialisation.',
    'skill-1-title': 'Apprentissage Profond',
    'skill-1-description': 'Connaissances avancées en réseaux de neurones, réseaux convolutifs et réseaux récurrents pour diverses applications d\'IA.',
    'skill-2-title': 'Vision par Ordinateur',
    'skill-2-description': 'Expertise en reconnaissance d\'images, détection d\'objets et analyse de données visuelles utilisant des techniques modernes d\'IA.',
    'skill-3-title': 'Traitement du Langage Naturel',
    'skill-3-description': 'Expérience en analyse de texte, analyse des sentiments et modélisation du langage utilisant des techniques NLP de pointe.',
    'skill-4-title': 'Programmation Python',
    'skill-4-description': 'Compétent en Python avec une vaste expérience des bibliothèques de science des données et des frameworks d\'IA.',
    'skill-5-title': 'Internet des Objets',
    'skill-5-description': 'Connaissance des systèmes IoT, des réseaux de capteurs et des systèmes embarqués pour des applications intelligentes.',
    'skill-6-title': 'Recherche en IA',
    'skill-6-description': 'Recherche active sur les applications de l\'IA pour l\'impact social, en particulier dans les régions en développement.',
    
    // Projects
    'projects-title': 'Mes Projets',
    'projects-description': 'Voici quelques projets terminés et en cours.',
    'project-1-title': 'Plateforme de Recensement',
    'project-1-date': 'Mars 2025',
    'project-2-title': 'Détection IA de la Malnutrition',
    'project-2-date': 'Avril 2025',
    'project-3-title': 'Site Web Artisans',
    'project-3-date': 'Février 2025',
    'project-4-title': 'Portfolio Personnel',
    'project-4-date': 'Janvier 2025',
    'project-5-title': 'Détection de la Malnutrition',
    'project-5-date': '2025',
    'project-5-description': 'Classification supervisée des enfants en état nutritionnel (normal, modéré, sévère) en utilisant Python et Random Forest.',
    'date': 'Date :',
    'completed': 'Terminé',
    'in-progress': 'En cours',
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
    'footer-description': 'Passionné par la création de nouvelles technologies au service de l’impact social et du développement durable.',
    'rights': 'Tous droits réservés.'
  }
};

// Variable pour stocker la langue actuelle
let currentLanguage = 'en';

// Fonction pour changer la langue
function changeLanguage(lang) {
  currentLanguage = lang;
  
  // Mettre à jour le texte du bouton de langue
  document.getElementById('current-language').textContent = 
    lang === 'en' ? 'ENG' : lang === 'jp' ? 'JP' : 'FR';
  
  // Traduire tous les éléments avec l'attribut data-translate
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Stocker la langue dans le localStorage
  localStorage.setItem('language', lang);
  
  // Redémarrer l'effet de frappe avec la nouvelle langue
  startTypingEffect(lang);
}

// Initialiser la langue au chargement
function initLanguage() {
  // Vérifier si une langue est stockée dans le localStorage
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage && translations[savedLanguage]) {
    currentLanguage = savedLanguage;
  }
  
  // Appliquer la langue
  changeLanguage(currentLanguage);
}

// Textes pour l'effet de frappe par langue
const typingTexts = {
  en: [
    'a Student in Applied Mathematics',
    'an Aspiring Student in AI Engineering'
  ],
  jp: [
    '応用数学の学生',
    'AIエンジニアを志す学生'
  ],
  fr: [
    'un étudiant en Mathématiques Appliquées',
    'un étudiant aspirant à être Ingénieur IA'
  ]
};

// Mobile Navigation Toggle
document.querySelector('.mobile-nav-toggle').addEventListener('click', function() {
  document.querySelector('.nav-menu ul').classList.toggle('active');
  this.querySelector('i').classList.toggle('fa-bars');
  this.querySelector('i').classList.toggle('fa-times');
});

// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const backToTop = document.querySelector('.back-to-top');
  
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
    backToTop.classList.add('active');
  } else {
    header.classList.remove('scrolled');
    backToTop.classList.remove('active');
  }
});

// Back to top functionality
document.querySelector('.back-to-top').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Smooth scrolling for navigation links
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
      
      // Close mobile menu if open
      document.querySelector('.nav-menu ul').classList.remove('active');
      document.querySelector('.mobile-nav-toggle i').classList.remove('fa-times');
      document.querySelector('.mobile-nav-toggle i').classList.add('fa-bars');
    }
  });
});

// Active navigation link highlighting
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

// Variables pour l'effet de frappe
let textArray = [];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout;

// Fonction pour l'effet de frappe
function type() {
  const currentText = textArray[textIndex];
  const typedTextSpan = document.querySelector('.typed-text span');
  
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

// Fonction pour démarrer l'effet de frappe
function startTypingEffect(lang) {
  // Arrêter l'effet en cours
  clearTimeout(typingTimeout);
  
  // Mettre à jour les textes
  textArray = typingTexts[lang];
  textIndex = 0;
  charIndex = 0;
  isDeleting = false;
  
  // Redémarrer l'effet
  type();
}

// Animation on scroll for elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.resume-summary, .timeline-item, .service-card, .about-content, .contact-item, .project-card').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Language selector functionality - CORRIGÉ
document.querySelectorAll('.language-option').forEach(option => {
  option.addEventListener('click', function(e) {
    e.stopPropagation(); // Empêche la propagation de l'événement
    const lang = this.getAttribute('data-lang');
    changeLanguage(lang);
    
    // Ne pas fermer le dropdown ici - laisser le comportement CSS naturel
  });
});

// Gestionnaire pour fermer le dropdown quand on clique ailleurs
document.addEventListener('click', function() {
  const dropdown = document.getElementById('language-dropdown');
  dropdown.style.opacity = 0;
  dropdown.style.visibility = 'hidden';
});

// Empêcher la fermeture quand on clique dans le sélecteur
document.querySelector('.language-selector').addEventListener('click', function(e) {
  e.stopPropagation();
});

// Initialiser le site au chargement
window.addEventListener('load', () => {
  initLanguage();
  setTimeout(() => startTypingEffect(currentLanguage), 1000);
});