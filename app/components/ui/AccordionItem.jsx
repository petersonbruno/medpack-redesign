// app/components/ui/AccordionItem.js
export default function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        className="flex justify-between items-center w-full p-6 text-left font-semibold text-lg"
        onClick={onToggle}
      >
        <span>{question}</span>
        <svg 
          className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  )
}