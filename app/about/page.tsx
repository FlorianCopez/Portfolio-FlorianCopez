/**
 * @fileOverview About component to display information about the developer.
 * @module About
 */

"use client";

import DownloadFile from "@/components/download-file";
import SkillList from "@/components/skill-list";
import TitlePage from "@/components/title-page";
import { Skill } from "@/types";
import { SKILLS } from "@/utils/skills";
import { useEffect, useState } from "react";

/**
 * Functional component representing the About page.
 * @returns {JSX.Element} JSX element containing information about the developer.
 */
export default function About() {
  /**
   * State to store acquired skills.
   * @type {Skill[]}
   */
  const [acquiredSkills, setAcquiredSkills] = useState<Skill[]>([]);

  /**
   * State to store skills currently being learned.
   * @type {Skill[]}
   */
  const [learningSkills, setLearningSkills] = useState<Skill[]>([]);

  /**
   * Filter acquired skills and update the state.
   */
  function filterAcquiredSkills() {
    const skillsAcquired: Skill[] = SKILLS.filter((skill: Skill) => {
      return skill.learn === false;
    });
    setAcquiredSkills(skillsAcquired);
  }

  /**
   * Filter skills currently being learned and update the state.
   */
  function filterLearningSkills() {
    const skillsLearning: Skill[] = SKILLS.filter((skill: Skill) => {
      return skill.learn === true;
    });
    setLearningSkills(skillsLearning);
  }

  useEffect(() => {
    // Call the filtering and state updating functions on component mount.
    filterAcquiredSkills();
    filterLearningSkills();
  }, []);

  /**
   * JSX structure for rendering the About section.
   * @returns {JSX.Element} JSX structure for the About section.
   */

  return (
    <>
      <section>
        {/* Title and subtitle section */}
        <TitlePage
          title="A propos de moi"
          subtitle="L'endroit qui me permet de me présenter, de voir mes compétences, où
            encore de télécharger mon CV."
        />
        {/* Main content section */}
        <div className="flex flex-col lg:flex-row lg:gap-16">
          <div className="text-zinc-500 lg:w-7/12 mb-8">
            <p className="py-2">
              Mon parcours professionnel a débuté dans le secteur du BTP et de
              la construction, où j&apos;ai acquis une expérience significative
              au fil des années.
            </p>
            <p className="py-2">
              J&apos;ai commencé ma carrière en tant qu&apos;électricien, où
              j&apos;ai également fait des études en tant que métreur. Par la
              suite, j&apos;ai rejoint une grande enseigne de bricolage en tant
              que conseiller de vente, élargissant ainsi mes compétences dans le
              domaine. Mon parcours a pris une nouvelle direction lorsque
              j&apos;ai découvert le secteur ferroviaire, plus précisément la
              sécurité des chantiers, et cette expérience m&apos;a conduit à
              évoluer en tant que conducteur de travaux.
            </p>
            <p className="py-2">
              Cependant, après avoir occupé ce poste, j&apos;ai ressenti le
              besoin de changer de cap et de poursuivre ma passion pour
              l&apos;informatique. Depuis ma jeunesse, j&apos;ai toujours été
              fasciné par les nouvelles technologies et les jeux vidéo. Cette
              passion m&apos;a motivé à entreprendre une reconversion dans le
              développement web.
            </p>
            <p className="py-2">
              Avant de me lancer pleinement dans le développement web, j&apos;ai
              pris le temps d&apos;explorer le langage HTML et CSS. Cette
              première incursion m&apos;a permis de confirmer mon intérêt pour
              ce domaine et de prendre conscience que c&apos;était
              l&apos;évidence pour moi. Chaque jour, j&apos;apprends de
              nouvelles compétences et découvre un univers qui me captive.
            </p>
            <p className="py-2">
              Pour finir, en 2023, j&apos;ai entrepris une formation intensive
              de développeur Web et Web Mobile afin d&apos;acquérir des bases
              solides. Cette formation s&apos;est conclue par l&apos;obtention
              du titre professionnel de Développeur Web et Web Mobile au début
              de l&apos;année 2024.
            </p>

            {/* Download CV button */}
            <div className="my-8 text-center">
              <DownloadFile
                filePath="/FlorianCopez_CV.pdf"
                fileName="FlorianCopez_CV.pdf"
                textButton="Télécharger mon CV"
              />
            </div>
          </div>
          {/* List of skills in progress */}
          <div className="md:flex lg:flex-col md:gap-8 lg:w-5/12">
            <div className="md:w-1/2 lg:w-full">
              <SkillList title="Mes compétences" listSkill={acquiredSkills} />
            </div>
            <div className="md:w-1/2 lg:w-full">
              <SkillList
                title="En cours d'apprentissage"
                listSkill={learningSkills}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
