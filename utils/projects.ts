import { Project } from "@/types";

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "O'potager - API / Back-office",
        synopsis: "O'potager est un projet de site web visant à rassembler deux types de personnes : celles disposant d'un espace libre pour cultiver un potager, et d'autres personnes désirant cultiver un potager mais qui ne disposent pas de l'espace nécessaire pour le faire. Il s'agit d'un site d'entraide et communautaire.",
        subtitle:"O'potager a été le premier projet auquel j'ai participé. J'ai dû réaliser une API REST ainsi que le back-office.",
        description: "Pour la réalisation de ce projet, il était important de concevoir une base de données (BDD) afin de faciliter la gestion des données. Cette base de données a permis de manipuler les données grâce à l'API qui utilise un ORM. L'API est destinée uniquement à être utilisée par le front-office. Pour la réalisation du back-office, je me suis inspiré de différents éléments UI trouvés sur différents site web afin que cela reste simple et intuitif. Bien évidemment, la sécurité a été prise en compte, notamment contre les injections SQL, les failles XSS, l'authentification avec JWT, le contrôle d'accès,ect.",
        image:"/backoffice_opotager.png",
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
        synopsis: "Money Advisor est un logiciel compatible sous windows et lié à une application mobile. Il a été conçu pour aider à gérer efficacement les finances personnelles.",
        subtitle:"J'ai participé sur la création et la mise en place d'un module d'analyse de marché durant un stage de 3 mois.",
        description: "Ce module offre à l'utilisateur la possibilité de comparer les prix de ses produits avec la tendance actuelle du marché sur différentes périodes. Les prix sont aussi renseigner par les utilisateurs. Pour développer ce module, j'ai pris en charge la conception complète de la base de données, la mise en œuvre du traitement des données, la sécurité des données et du modue, ainsi que la manipulation et la présentation dynamique de ces données sur l'interface utilisateur. Il sera disponible sur la v4",
        image:"/money_advisor.png",
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
        synopsis: "Ce petit projet permet de pouvoir voir la série la plus tendance du moment avec un résumé, la note de la série mais aussi d'avoir plusieurs propositions de série suivant la série sur laquelle on est.",
        subtitle:"J'ai réalisé ce projet dans le cadre de mon apprentissage des bases de react.",
        description: "Le projet TV Show a été réalisé exclusivement en utilisant JavaScript et son framework React. L'objectif principal était de consolider les bases, en explorant les concepts tels que les hooks, les composants, les props, ainsi que la syntaxe de React. Cette expérience a grandement contribué à ma compréhension approfondie de ce framework. En ce qui concerne les données,j'ai utilisé une API open-source et traitant les requêtes de manière asynchrone.",
        image:"/tv_show.png",
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