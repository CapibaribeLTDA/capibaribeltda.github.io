import React, { useState, useRef, useEffect } from 'react';
import './dropdown.scss';
import { ProductItem } from '@/lib/pt_text';

interface DropdownProps {
  label: string;
  options: ProductItem[];
  onSelect: (option: ProductItem) => string;
}

export default function Dropdown({ label, options, onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <a
              key={option.name}
              className="dropdown-item"
              href={onSelect(option)}
            >
              {option.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};