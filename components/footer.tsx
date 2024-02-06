"use client";

import { useState } from "react";
import { Linkedin, Github } from "lucide-react";

function getYear() {
  const today = new Date();
  const year = today.getFullYear();
  return year;
}

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(getYear());
  return (
    <footer className="bg-sky-950 text-white">
      <div>
        <h3>
          Florian Copez <small>Developpeur Web</small>
        </h3>
      </div>
      <div>
        <Linkedin />
        <Github />
      </div>
      <span>© copyright {currentYear} | Florian Copez</span>
    </footer>
  );
}
