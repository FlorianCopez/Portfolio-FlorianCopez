import { Project } from "@/types";

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "O'potager - API / Back-office",
        synopsis: "Le projet O'potager vise à connecter deux groupes de personnes : ceux qui disposent d'un espace libre pour cultiver un potager et ceux qui souhaitent cultiver un potager mais ne disposent pas de l'espace nécessaire. C'est une plateforme collaborative axée sur l'entraide et la communauté.",
        subtitle:"O'potager a été le premier projet auquel j'ai contribué. Ma responsabilité était de concevoir une API REST et de développer le back-office.",
        description: "La première étape consistait à concevoir une base de données (BDD) pour faciliter la gestion des données. L'API utilisait un ORM pour manipuler ces données et était exclusivement destinée à être utilisée par le front-office. En ce qui concerne le back-office, j'ai puisé inspiration dans divers éléments UI trouvés sur différents sites web pour garantir une expérience simple et intuitive. La sécurité a été une priorité tout au long du processus, incluant la protection contre les injections SQL, les failles XSS, l'authentification avec JWT, le contrôle d'accès, etc.",
        image:"/backoffice-opotager.png",
        url: null,
        urlRepo: "https://github.com/FlorianCopez/project-opotager-api-back",
        slug:"api-back-office-opotager",
        tools: [
            {
                id: 1,
                name: "PHP"
            },
            {
                id: 2,
                name: "Symfony"
            },
            {
                id: 3,
                name: "Bootstrap"
            },
            {
                id: 4,
                name: "Doctrine"
            },
            {
                id: 5,
                name: "Twig"
            },
            {
                id: 5,
                name: "GIT / Github"
            },
            {
                id: 6,
                name: "CSS"
            },
            {
                id: 7,
                name: "MariaDB"
            },
        ]
    },
    {
        id: 2,
        title: "Money Advisor - Module analyse de marché",
        synopsis: "Le logiciel Money Advisor, compatible avec Windows et associé à une application mobile, a été spécialement conçu pour simplifier la gestion des finances personnelles.",
        subtitle:"Durant un stage dans l'entreprise SIGMA VISION. J'avais en charge creer et mettre en place un module d'analyse de marché.",
        description: "Ce module permet à l'utilisateur de comparer les prix de ses produits avec la tendance actuelle du marché sur différentes périodes. Les utilisateurs peuvent également contribuer en fournissant des informations sur les prix. Pour développer cette fonctionnalité, j'ai pris en charge la conception complète de la base de données, la mise en œuvre du traitement des données, la sécurité du module ainsi que la manipulation et la présentation dynamique de ces données sur l'interface utilisateur. Ce module sera intégré à la version 4 du logiciel.",
        image:"/money-advisor.png",
        url:"https://www.money-advisor.fr/",
        urlRepo: null,
        slug:"money-advisor-module-analyse-de-marche",
        tools: [
            {
                id: 1,
                name: "PHP"
            },
            {
                id: 2,
                name: "Bootstrap"
            },
            {
                id: 3,
                name: "Javascript"
            },
            {
                id: 4,
                name: "Jquery"
            },
            {
                id: 5,
                name: "MySQL"
            },
            {
                id: 5,
                name: "Microsoft Azure"
            },
        ]
    },
    {
        id: 3,
        title: "TV Show",
        synopsis: "Ce petit projet a pour objectif de permettre aux utilisateurs de découvrir la série télévisée la plus en vogue du moment, avec un résumé, la note de la série, ainsi que plusieurs propositions de séries similaires.",
        subtitle:"J'ai conçu ce projet dans le cadre de mon apprentissage des bases de React.",
        description: "Le projet TV Show a été entièrement réalisé en utilisant JavaScript et son framework React. L'objectif principal était de renforcer mes connaissances de base en explorant des concepts tels que les hooks, les composants, les props, ainsi que la syntaxe propre à React. Cette expérience a considérablement enrichi ma compréhension approfondie de ce framework. En ce qui concerne les données, j'ai intégré une API open-source, traitant les requêtes de manière asynchrone pour fournir des informations à jour sur les séries télévisées.",
        image:"/tv-show.png",
        url:"https://react-tv-show-two.vercel.app/",
        urlRepo: "https://github.com/FlorianCopez/react-tv-show",
        slug:"tv-show",
        tools: [
            {
                id: 1,
                name: "Javascript"
            },
            {
                id: 2,
                name: "React"
            },
            {
                id: 3,
                name: "CSS"
            },
        ]
    }
]