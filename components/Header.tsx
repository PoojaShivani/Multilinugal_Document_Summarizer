
import React from 'react';

const TranslateIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m5 12 5 5L20 7"/>
        <path d="M12 12v6"/>
        <path d="M12 6V5a2 2 0 0 1 2-2h3"/>
        <path d="M11 20H8a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/>
    </svg>
);


export const Header: React.FC = () => {
    return (
        <header className="text-center">
          <div className="inline-flex items-center gap-3 bg-slate-200 dark:bg-slate-800 px-4 py-2 rounded-full">
            <TranslateIcon className="w-6 h-6 text-indigo-500"/>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Multilingual Document Summarizer
            </h1>
          </div>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Simplify complex text into clear summaries in your chosen language.
          </p>
        </header>
    );
};
