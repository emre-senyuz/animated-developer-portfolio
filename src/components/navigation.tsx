'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';

export function Navigation() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus(); } };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  const toggleTheme = () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch { /* Theme still works when storage is unavailable. */ }
  };
  return <header className="header"><div className="nav-wrap">
    <a className="wordmark" href="#home" aria-label="Alex Morgan home">am<span>.</span></a>
    <nav aria-label="Main navigation" className={open ? 'nav-links is-open' : 'nav-links'} id="main-menu">
      {['About', 'Work', 'Experience', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>)}
    </nav>
    <div className="nav-actions"><button className="icon-button theme-button" onClick={toggleTheme} aria-label="Toggle light and dark theme"><Sun className="sun" size={18}/><Moon className="moon" size={18}/></button><a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={15}/></a><button ref={menuButton} className="icon-button menu-button" aria-controls="main-menu" aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button></div>
  </div></header>;
}
