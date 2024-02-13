"use client";

import DownloadFile from "@/components/download-file";
import SkillList from "@/components/skill-list";
import TitlePage from "@/components/title-page";
import { Skill } from "@/types";
import { SKILLS } from "@/utils/skills";
import { useEffect, useState } from "react";

export default function About() {
  const [learnedSkills, setLearnedSkills] = useState<Skill[]>([]);
  const [listSkills, setListSkills] = useState<Skill[]>([]);

  function filteredSkills() {
    const skillsLearn: Skill[] = SKILLS.filter((skill: Skill) => {
      return skill.learn === true;
    });
    setLearnedSkills(skillsLearn);
  }

  function setSkills() {
    const skills: Skill[] = SKILLS.filter((skill: Skill) => {
      return skill.learn === false;
    });
    setListSkills(skills);
  }

  useEffect(() => {
    filteredSkills();
    setSkills();
  }, []);

  return (
    <>
      <section>
        <TitlePage
          title="A propos de moi"
          subtitle="L'endroit qui me permet de me présenter, de voir mes compétences, où
            encore de télécharger mon CV."
        />
        <div className="flex flex-col lg:flex-row lg:gap-16">
          <div className="text-zinc-500 lg:w-7/12 mb-8">
            <p className="py-2">
              Mon parcours professionnel a débuté dans le secteur du BTP et de
              la construction, où j'ai acquis une expérience significative au
              fil des années.
            </p>
            <p className="py-2">
              J'ai commencé ma carrière en tant qu'électricien, où j'ai
              également fais des études en tant que métreur. Par la suite, j'ai
              rejoint une grande enseigne de bricolage en tant que conseiller de
              vente, élargissant ainsi mes compétences dans le domaine. Mon
              parcours a pris une nouvelle direction lorsque j'ai découvert le
              secteur ferroviaire et plus précisemment la sécurité des
              chantiers, et cette expérience m'a conduit à évoluer en tant que
              conducteur de travaux.
            </p>
            <p className="py-2">
              Cependant, après avoir occupé ce poste, j'ai ressenti le besoin de
              changer de cap et de poursuivre ma passion pour l'informatique.
              Depuis ma jeunesse, j'ai toujours été fasciné par les nouvelles
              technologies et les jeux vidéo. Cette passion m'a motivé à
              entreprendre une reconversion dans le développement web.
            </p>
            <p className="py-2">
              Avant de me lancer pleinement dans le développement web, j'ai pris
              le temps d'explorer le langage HTML et CSS. Cette première
              incursion m'a permis de confirmer mon intérêt pour ce domaine et
              de prendre conscience que c'était l'évidence pour moi. Chaque
              jour, j'apprends de nouvelles compétences et découvre un univers
              qui me captive.
            </p>
            <p className="py-2">
              Pour finir j'ai commencé 2024 l'obtention du titre professionnel
              de Développeur Web et Web Mobile.
            </p>

            <div className="my-8 text-center">
              <DownloadFile
                filePath="/FlorianCopez_CV.pdf"
                fileName="FlorianCopez_CV.pdf"
                textButton="Télécharger mon CV"
              />
            </div>
          </div>
          <div className="md:flex lg:flex-col md:gap-8 lg:w-5/12">
            <div className="md:w-1/2 lg:w-full">
              <SkillList title="Mes compétences" listSkill={listSkills} />
            </div>
            <div className="md:w-1/2 lg:w-full">
              <SkillList
                title="En cours d'apprentissage"
                listSkill={learnedSkills}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
