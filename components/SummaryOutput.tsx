
import React from 'react';

interface SummaryOutputProps {
  summary: string;
  isLoading: boolean;
  hasAttemptedSummarization: boolean;
}

const LoadingSkeleton: React.FC = () => (
  <div className="space-y-4 animate-pulse">
    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/4"></div>
    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
  </div>
);


const SummaryOutput: React.FC<SummaryOutputProps> = ({ summary, isLoading, hasAttemptedSummarization }) => {
  if (!hasAttemptedSummarization) {
    return (
      <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md text-center text-slate-500 dark:text-slate-400">
        Your summary will appear here.
      </div>
    );
  }

  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Summary</h2>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <p className="whitespace-pre-wrap">{summary}</p>
        )}
      </div>
    </div>
  );
};

export default SummaryOutput;
