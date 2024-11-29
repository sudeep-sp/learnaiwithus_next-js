/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface SidePanelProps {
  response: string | null; // The AI response to display
  isLoading: boolean; // To track loading state of the response
  isVisible: boolean; // Controls visibility of the panel
  close: any
}

const SidePanel: React.FC<SidePanelProps> = ({ response, isLoading, isVisible, close }) => {
  return (
    <div
      className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg p-4 transform z-[100] ${
        isVisible ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-800">AI Response</h3>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={() => {close(false)}} // Close button (or you could implement custom close logic)
        >
          Close
        </button>
      </div>
      <div className="mt-4">
        {isLoading ? (
          <p className="text-gray-500">Loading response...</p>
        ) : response ? (
          <p className="text-gray-700">{response}</p>
        ) : (
          <p className="text-gray-500">No response yet. Ask a question!</p>
        )}
      </div>
    </div>
  );
};

export default SidePanel;
