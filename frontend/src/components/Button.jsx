"use client";
export default function Button({ children, onClick , className = "" , type = "button" , disabled = false }) {
    return (
      <button
        type = {type}
        className={`rounded-3xl border border-solid flex items-center hover:bg-blue-400 dark:hover:bg-blue-700 transition duration-300 justify-center sm:text-base h-10 sm:h-12 px-4 py-2 ${className}`}
        onClick={onClick}
        disabled={disabled}>
        {children}
      </button>
    );
  }
  