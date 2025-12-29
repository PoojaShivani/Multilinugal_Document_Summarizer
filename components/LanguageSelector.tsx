
import React from 'react';
import { Language, LanguageOption } from '../types';

interface LanguageSelectorProps {
  value: Language;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  languages: LanguageOption[];
  disabled: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ value, onChange, languages, disabled }) => {
  return (
    <div>
      <label htmlFor="language-select" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
        Summarize In
      </label>
      <select
        id="language-select"
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full sm:w-auto p-2 pr-8 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {languages.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
