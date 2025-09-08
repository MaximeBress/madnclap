export const Loader = ({ label = 'chargement' }: { label?: string }) => {
  return (
    <div className="w-full h-48 flex items-center justify-center" role="status" aria-live="polite" aria-label={label}>
      <div className="flex items-center gap-3 text-muted-foreground">
        <svg
          className="animate-spin h-6 w-6 text-primary"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
        <span className="text-sm uppercase tracking-wide">{label}</span>
      </div>
    </div>
  );
};
