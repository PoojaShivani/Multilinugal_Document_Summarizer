
import React from 'react';

interface DocumentInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled: boolean;
}

const DocumentInput: React.FC<DocumentInputProps> = ({ value, onChange, disabled }) => {
  return (
    <div>
      <label htmlFor="document-input" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
        Enter Document Text
      </label>
      <textarea
        id="document-input"
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder="Paste your document here..."
        className="w-full h-48 p-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
      />
    </div>
  );
};

export default DocumentInput;
