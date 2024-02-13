"use client";

import { useState } from "react";
import { Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

function getYear() {
  const today = new Date();
  return today.getFullYear();
}

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(getYear());

  return (
    <footer className="bg-zinc-950 text-zinc-100 px-16 pt-10 pb-6">
      <div className="flex justify-between divide-x-2 mb-8">
        <div className="w-1/2 md:w-3/4 leading-4">
          <h3>Florian Copez</h3>
          <small className="italic">Developpeur Web</small>
        </div>
        <div className="w-1/2 md:w-1/4 flex justify-center items-center pl-8 gap-4">
          <Link
            href="https://www.linkedin.com/in/florian-copez/"
            legacyBehavior
          >
            <a target="_blank" rel="noreferrer">
              <Button variant="social">
                <Linkedin />
              </Button>
            </a>
          </Link>
          <Link href="https://github.com/FlorianCopez" legacyBehavior>
            <a target="_blank" rel="noreferrer">
              <Button variant="social">
                <Github />
              </Button>
            </a>
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <span className="text-sm">©Tous droits réservés {currentYear}</span>
      </div>
    </footer>
  );
}
