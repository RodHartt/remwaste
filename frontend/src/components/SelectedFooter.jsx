"use client";
import Button from "./Button";

export default function SelectedFooter({ skip, onBack, onContinue }) {
  if (!skip) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-zinc-900 text-white shadow-md px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-zinc-700 z-55">
      <div className="text-sm text-gray-400 text-center md:text-left w-full md:w-auto">
        Imagery and information shown throughout this website may not reflect the exact shape or size specification,
        colours may vary, options and/or accessories may be featured at additional cost.
      </div>

      <div className="flex flex-col md:flex-row items-center justify-end gap-4 w-full md:w-auto">
        <div className="text-white text-sm text-center md:text-left">
          <strong>{skip.size} Yard Skip</strong>{" "}
          <span className="text-blue-500 font-bold">£{skip.total}</span>{" "}
          <span className="text-gray-400">{skip.hire_period_days} day hire</span>
        </div>

        <div className="flex gap-2">
          <Button variant="secondary" onClick={onBack}>Back</Button>
          <Button onClick={onContinue}>Continue →</Button>
        </div>
      </div>
    </div>
  );
}
