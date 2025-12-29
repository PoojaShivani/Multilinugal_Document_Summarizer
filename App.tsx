
import React, { useState, useCallback } from 'react';
import { Language } from './types';
import { SUPPORTED_LANGUAGES, SYSTEM_INSTRUCTION } from './constants';
import { summarizeDocument } from './services/geminiService';
import LanguageSelector from './components/LanguageSelector';
import DocumentInput from './components/DocumentInput';
import SummaryOutput from './components/SummaryOutput';
import { Header } from './components/Header';
import { SummarizeButton } from './components/SummarizeButton';

const App: React.FC = () => {
  const [documentText, setDocumentText] = useState<string>('');
  const [targetLanguage, setTargetLanguage] = useState<Language>(Language.English);
  const [summary, setSummary] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSummarize = useCallback(async () => {
    if (!documentText.trim()) {
      setError('Please enter some text to summarize.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSummary('');

    try {
      const result = await summarizeDocument(documentText, targetLanguage, SYSTEM_INSTRUCTION);
      if (result) {
        setSummary(result);
      } else {
        setError('Failed to get a summary. The result was empty.');
      }
    } catch (e) {
      console.error(e);
      setError('An error occurred while summarizing the document. Please check your API key and try again.');
    } finally {
      setIsLoading(false);
    }
  }, [documentText, targetLanguage]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header />

        <main className="mt-8 space-y-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md space-y-4">
            <DocumentInput
              value={documentText}
              onChange={(e) => setDocumentText(e.target.value)}
              disabled={isLoading}
            />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <LanguageSelector
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value as Language)}
                languages={SUPPORTED_LANGUAGES}
                disabled={isLoading}
              />
              <SummarizeButton
                onClick={handleSummarize}
                isLoading={isLoading}
              />
            </div>
          </div>
          
          {error && (
             <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 rounded-lg">
                <p className="font-semibold">Error</p>
                <p>{error}</p>
             </div>
          )}

          <SummaryOutput
            summary={summary}
            isLoading={isLoading}
            hasAttemptedSummarization={summary !== '' || isLoading || error !== null}
          />
        </main>
      </div>
    </div>
  );
};

export default App;
