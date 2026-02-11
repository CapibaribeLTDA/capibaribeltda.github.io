"use client";

import Link from "next/link";
import "./tabs_menu.scss";
import { useState } from "react";
import { useOutsideClick } from "@/lib/custom_hooks/useOutsideClick";
import Dropdown from "../dropdown/dropdown";
import { ProductItem, PRODUCTS_LIST } from "@/lib/pt_text";
import ThemeSwitch from "../theme_switch/theme_switch";

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
      <Link className="tab" href="/about" onClick={() => updateMenu(false)}>
        Sobre
      </Link>
      <Dropdown
        label="Serviços"
        options={PRODUCTS_LIST}
        onSelect={(item: ProductItem) => item.path}
      />
      <Link className="tab" href="/contact" onClick={() => updateMenu(false)}>
        Contato
      </Link>
    </div>
  );
};
