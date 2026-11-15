export type CourseLevel = "Débutant" | "Intermédiaire" | "Avancé";

export type CourseCategory =
  | "Essentials"
  | "Installation"
  | "Performance"
  | "Advanced";

export type Course = {
  slug: string;
  title: string;
  category: CourseCategory;
  level: CourseLevel;
  summary: string;
  description: string;
  audience: string;
  problem: string;
  prerequisites: string;
  objectives: string[];
  modules: { title: string; lessons: string[] }[];
  duration: string;
  language: string;
  format: string;
  priceLabel: string;
  faqs: { question: string; answer: string }[];
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
};

export const SITE = {
  name: "PLAYLAB",
  tagline: "Ton PC, ton terrain de jeu.",
  badge: "PC Gaming Academy",
  description:
    "Apprends à maîtriser ton PC, installer tes jeux et améliorer tes performances gaming.",
} as const;

export const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/formations", label: "Formations" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
] as const;

export const COURSES: Course[] = [
  {
    slug: "pc-gaming-starter",
    title: "PC Gaming Starter",
    category: "Essentials",
    level: "Débutant",
    summary:
      "Comprendre les bases du PC gaming et le fonctionnement de ton ordinateur.",
    description:
      "Une formation structurée pour démarrer sereinement sur PC : composants, performances, et bonnes pratiques pour jouer sans se perdre dans le jargon.",
    audience:
      "Débutants et joueurs qui veulent enfin comprendre leur machine.",
    problem:
      "Trop d’informations dispersées empêchent de savoir ce que ton PC peut réellement faire.",
    prerequisites: "Aucun prérequis technique. Un PC Windows suffit.",
    objectives: [
      "Identifier les composants essentiels d’un PC gaming",
      "Lire et comprendre une configuration",
      "Relier specs et expérience de jeu",
      "Préparer un environnement propre pour jouer",
    ],
    modules: [
      {
        title: "Introduction au PC Gaming",
        lessons: ["Pourquoi le PC gaming", "Parcours débutant", "Objectifs de la formation"],
      },
      {
        title: "Comprendre les composants",
        lessons: ["CPU, GPU, RAM", "Stockage et alimentation", "Écran et périphériques"],
      },
      {
        title: "Comprendre les performances",
        lessons: ["FPS et résolution", "Bottlenecks", "Réglages graphiques de base"],
      },
      {
        title: "Préparer son environnement",
        lessons: ["Mises à jour utiles", "Organisation des dossiers", "Checklist de démarrage"],
      },
    ],
    duration: "À confirmer",
    language: "Français",
    format: "Vidéos préenregistrées",
    priceLabel: "Prix à venir",
    faqs: [
      {
        question: "Est-ce adapté aux vrais débutants ?",
        answer:
          "Oui. La formation part des bases et évite le jargon inutile.",
      },
      {
        question: "Faut-il un PC haut de gamme ?",
        answer:
          "Non. L’objectif est de comprendre et d’exploiter la machine que tu as déjà.",
      },
    ],
  },
  {
    slug: "game-installation-masterclass",
    title: "Game Installation Masterclass",
    category: "Installation",
    level: "Débutant",
    summary:
      "Installer et configurer tes jeux correctement depuis des sources légitimes.",
    description:
      "Une méthode claire pour télécharger, installer, lancer et configurer tes jeux sans stress ni mauvaises surprises.",
    audience:
      "Joueurs qui bloquent souvent à l’installation ou à la première configuration.",
    problem:
      "Une installation mal faite gaspille du temps et crée des bugs inutiles.",
    prerequisites: "Notions de base Windows. Compte plateforme (Steam, etc.) recommandé.",
    objectives: [
      "Installer un jeu depuis une source officielle",
      "Configurer les lancements et mises à jour",
      "Éviter les erreurs classiques d’installation",
      "Organiser une bibliothèque de jeux propre",
    ],
    modules: [
      {
        title: "Sources et plateformes",
        lessons: ["Stores officiels", "Comptes et licences", "Bonnes pratiques"],
      },
      {
        title: "Installation pas à pas",
        lessons: ["Téléchargement", "Dossiers et disques", "Premier lancement"],
      },
      {
        title: "Configuration initiale",
        lessons: ["Paramètres graphiques", "Contrôles", "Mises à jour"],
      },
      {
        title: "Dépannage courant",
        lessons: ["Jeux qui ne démarrent pas", "Fichiers manquants", "Quand demander de l’aide"],
      },
    ],
    duration: "À confirmer",
    language: "Français",
    format: "Vidéos préenregistrées",
    priceLabel: "Prix à venir",
    faqs: [
      {
        question: "Couvrez-vous les téléchargements illégaux ?",
        answer:
          "Non. PLAYLAB se concentre uniquement sur des sources légitimes.",
      },
    ],
  },
  {
    slug: "pc-performance-boost",
    title: "PC Performance Boost",
    category: "Performance",
    level: "Intermédiaire",
    summary:
      "Améliorer les performances de ton PC pour une expérience gaming plus fluide.",
    description:
      "Apprends à mesurer, comprendre et optimiser les performances : réglages système, graphiques et priorités utiles.",
    audience:
      "Joueurs qui veulent plus de fluidité sans forcément changer de machine.",
    problem:
      "Beaucoup de réglages existent ; peu sont réellement utiles selon ton PC et ton jeu.",
    prerequisites: "Avoir déjà joué sur PC et connaître les bases de Windows.",
    objectives: [
      "Mesurer les performances correctement",
      "Identifier les goulots d’étranglement",
      "Optimiser Windows pour le jeu",
      "Régler les options graphiques avec méthode",
    ],
    modules: [
      {
        title: "Mesurer avant d’optimiser",
        lessons: ["Outils utiles", "Lire les métriques", "Scénarios de test"],
      },
      {
        title: "Optimisations système",
        lessons: ["Processus en arrière-plan", "Alimentation", "Stockage"],
      },
      {
        title: "Réglages in-game",
        lessons: ["Qualité vs fluidité", "Upscaling", "Cas par cas"],
      },
      {
        title: "Maintenir les gains",
        lessons: ["Routine simple", "Quand upgrader", "Limites réalistes"],
      },
    ],
    duration: "À confirmer",
    language: "Français",
    format: "Vidéos préenregistrées",
    priceLabel: "Prix à venir",
    faqs: [
      {
        question: "Cela remplace-t-il un upgrade hardware ?",
        answer:
          "Non. On maximise d’abord ce que tu as, puis on décide si un upgrade a du sens.",
      },
    ],
  },
];

export const CATEGORIES: CourseCategory[] = [
  "Essentials",
  "Installation",
  "Performance",
  "Advanced",
];

export const SERVICES: Service[] = [
  {
    slug: "installation-jeux",
    title: "Installation de jeux",
    summary: "Installer et configurer des jeux depuis des sources légitimes.",
    description:
      "Accompagnement pour installer, lancer et configurer tes jeux correctement.",
  },
  {
    slug: "optimisation-pc",
    title: "Optimisation PC",
    summary: "Améliorer paramètres et performances pour plus de fluidité.",
    description:
      "Diagnostic léger et réglages ciblés pour tirer le meilleur de ta machine.",
  },
  {
    slug: "configuration-gaming",
    title: "Configuration gaming",
    summary: "Paramétrer un environnement PC prêt à jouer.",
    description:
      "Mise en place d’un setup clair : dossiers, plateformes, réglages de base.",
  },
  {
    slug: "assistance-technique",
    title: "Assistance technique",
    summary: "Aide ciblée quand tu bloques sur un problème concret.",
    description:
      "Accompagnement pour comprendre le problème et avancer avec une méthode claire.",
  },
];

export const HOME_FAQ = [
  {
    question: "À qui s’adressent les formations ?",
    answer:
      "Aux débutants et joueurs intermédiaires qui veulent mieux comprendre et exploiter leur PC.",
  },
  {
    question: "Les formations sont-elles accessibles aux débutants ?",
    answer:
      "Oui. PC Gaming Starter et Game Installation Masterclass sont conçues pour démarrer sans jargon.",
  },
  {
    question: "Comment fonctionnent les formations vidéo ?",
    answer:
      "Des parcours structurés en modules et leçons préenregistrées, à suivre à ton rythme.",
  },
  {
    question: "Quels types de services propose PLAYLAB ?",
    answer:
      "Installation, optimisation, configuration gaming et assistance technique sur demande.",
  },
  {
    question: "Puis-je suivre les formations à mon rythme ?",
    answer:
      "Oui. L’accès permanent aux formations achetées est prévu dès la phase e-commerce.",
  },
];

export const PILLARS = [
  {
    title: "Apprendre",
    text: "Comprendre ton PC et les bases du gaming sur ordinateur.",
  },
  {
    title: "Installer",
    text: "Mettre en place tes jeux proprement, sans perte de temps.",
  },
  {
    title: "Optimiser",
    text: "Améliorer fluidité et confort avec une méthode claire.",
  },
] as const;

export const VALUES = [
  {
    title: "Accompagnement",
    text: "On t’aide à comprendre, pas seulement à cliquer.",
  },
  {
    title: "Qualité",
    text: "Des contenus organisés, pratiques et actionnables.",
  },
  {
    title: "Fiabilité",
    text: "Des méthodes sérieuses, sources légitimes uniquement.",
  },
  {
    title: "Efficacité",
    text: "Aller à l’essentiel pour des résultats concrets.",
  },
] as const;

export function getCourse(slug: string) {
  return COURSES.find((course) => course.slug === slug);
}
