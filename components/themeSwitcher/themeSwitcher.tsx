import React, { useState } from 'react';

interface ThemeSwitcherProps {
  themes: string[]; // An array of theme names
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ themes }) => {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  const changeTheme = (themeName: string) => {
    const linkElement = document.getElementById('theme-style') as HTMLLinkElement;

    if (linkElement) {
      linkElement.href = `/styles/themes/${themeName}.css`; // Update the path to your stylesheets
    } else {
      const newLink = document.createElement('link');
      newLink.id = 'theme-style';
      newLink.rel = 'stylesheet';
      newLink.href = `/styles/themes/${themeName}.css`; // Update the path to your stylesheets
      document.head.appendChild(newLink);
    }

    setSelectedTheme(themeName);
  };

  return (
    <div className="theme-switcher">
      <h3>Choose a Theme:</h3>
      <ul>
        {themes.map((theme) => (
          <li key={theme}>
            <button onClick={() => changeTheme(theme)}>{theme}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSwitcher;
