"use client";

import Link from "next/link";
import "./tabs_menu.scss";
import { useState } from "react";
import { useOutsideClick } from "@/lib/custom_hooks/useOutsideClick";

export const TabsMenu = () => {
  const [menuOpen, updateMenu] = useState<boolean>(false);

  const ref = useOutsideClick(() => {
    updateMenu(false);
  })

  return (
    <div
      className={`tabs ${menuOpen ? "open" : null}`}
      ref={ref}
    >
      <button onClick={() => updateMenu(!menuOpen)}/>
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
