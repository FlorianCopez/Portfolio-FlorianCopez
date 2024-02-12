"use client";

import DownloadFile from "@/components/download-file";
import Skills from "@/components/skills";
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/no-unescaped-entities
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
      <section className="md:w-7/12 text-zinc-500">
        <h2 className="text-sky-950 text-4xl font-bold text-center mb-4">
          En découvrir plus sur moi !
        </h2>
        <p className="py-2">
          Mon parcours professionnel a débuté dans le secteur du BTP et de la
          construction, où j'ai acquis une expérience significative au fil des
          années.
        </p>
        <p className="py-2">
          J'ai commencé ma carrière en tant qu'électricien, où j'ai également
          fais des études en tant que métreur. Par la suite, j'ai rejoint une
          grande enseigne de bricolage en tant que conseiller de vente,
          élargissant ainsi mes compétences dans le domaine. Mon parcours a pris
          une nouvelle direction lorsque j'ai découvert le secteur ferroviaire
          et plus précisemment la sécurité des chantiers, et cette expérience
          m'a conduit à évoluer en tant que conducteur de travaux.
        </p>
        <p className="py-2">
          Cependant, après avoir occupé ce poste, j'ai ressenti le besoin de
          changer de cap et de poursuivre ma passion pour l'informatique. Depuis
          ma jeunesse, j'ai toujours été fasciné par les nouvelles technologies
          et les jeux vidéo. Cette passion m'a motivé à entreprendre une
          reconversion dans le développement web en début d'année 2023 et soldé
          par l'obtention du titre professionnel de Développeur Web et Web
          Mobile.
        </p>
        <p className="py-2">
          Avant de me lancer pleinement dans le développement web, j'ai pris le
          temps d'explorer le langage HTML et CSS. Cette première incursion m'a
          permis de confirmer mon intérêt pour ce domaine et de prendre
          conscience que c'était l'évidence pour moi. Chaque jour, j'apprends de
          nouvelles compétences et découvre un univers qui me captive.
        </p>
        <div className="text-center mt-12">
          <DownloadFile
            filePath="/FlorianCopez_CV.pdf"
            fileName="FlorianCopez_CV.pdf"
            textButton="Télécharger mon CV"
          />
        </div>
      </section>
      <section className="md:w-5/12">
        <Skills title="Mes compétences" listSkill={listSkills} />
        <Skills title="En cours d'apprentissage" listSkill={learnedSkills} />
      </section>
    </>
  );
}
