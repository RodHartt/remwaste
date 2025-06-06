"use client";
import { useState } from "react";

export default function ChatBubble() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-xl"
        >
          💬
        </button>
      </div>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-[300px] h-[400px] bg-white dark:bg-zinc-900 rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden">
          <div className="bg-blue-600 text-white px-4 py-2 font-semibold text-sm">
            AI Assistant
            <button onClick={() => setOpen(false)} className="float-right">×</button>
          </div>
          <div className="flex-1 p-4 text-sm overflow-y-auto">
            <p className="text-gray-700 dark:text-gray-200">
              Hi! I’m here to help you choose the right skip.
            </p>
          </div>
          <div className="p-2 border-t dark:border-zinc-700">
            <input
              type="text"
              className="w-full px-2 py-1 border rounded dark:bg-zinc-800 dark:text-white text-sm"
              placeholder="Type a message..."
            />
          </div>
        </div>
      )}
    </>
  );
}
