"use client";

import Link from "next/link";
import Image from "next/image";
import "./tabs_menu.scss";
import { useState } from "react";

export const TabsMenu = () => {
  const [menuOpen, updateMenu] = useState<boolean>(false);

  return (
    <div
      className={`tabs ${menuOpen ? "open" : null}`}
      onBlur={(e) =>
        menuOpen &&
        !e.currentTarget.contains(e.relatedTarget) &&
        updateMenu(false)
      }
    >
      <button onFocus={() => updateMenu(true)}/>
      <Link className="tab" href="/" onClick={() => updateMenu(false)}>
        Início
      </Link>
      <Link className="tab" href="/about" onClick={() => updateMenu(false)}>
        Sobre
      </Link>
      <Link className="tab" href="/services" onClick={() => updateMenu(false)}>
        Serviços
      </Link>
      <Link className="tab" href="/contact" onClick={() => updateMenu(false)}>
        Contato
      </Link>
    </div>
  );
};
