/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface SidePanelProps {
  response: string | null; // The AI response to display
  isLoading: boolean; // To track loading state of the response
  isVisible: boolean; // Controls visibility of the panel
  close: any; // Function to handle closing the panel
  question: string | null; // The question asked to AI
}

const SidePanel: React.FC<SidePanelProps> = ({
  response,
  isLoading,
  isVisible,
  close,
  question,
}) => {
  return (
    <div
      className={`fixed bg-white shadow-lg p-4 transform z-[100] transition-transform duration-300
        w-full md:w-96
        h-[60%] md:h-full 
        bottom-0 md:top-0 md:right-0
        ${isVisible ? "translate-y-0 md:translate-x-0" : "translate-y-full md:translate-x-full"}
        `}
    >
      {/* Panel Header */}
      <div className="flex justify-between items-center border-b pb-2">
        <h3 className="text-xl font-semibold text-gray-800">AI Response</h3>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={() => close(false)}
        >
          Close
        </button>
      </div>

      {/* Question and Response Content */}
      <div className="mt-4">
        {question && (
          <p className="text-gray-700 font-medium mb-4">
            <strong>ASK AI:</strong> {question}
          </p>
        )}

        <div className="overflow-y-auto max-h-[calc(100%-100px)]">
          {isLoading ? (
            <p className="text-gray-500">Loading response...</p>
          ) : response ? (
            <p className="text-gray-700">{response}</p>
          ) : (
            <p className="text-gray-500">No response yet. Ask a question!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
