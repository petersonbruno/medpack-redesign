// app/components/ui/Button.js
export default function Button({ children, variant = "primary", className = "", ...props }) {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-200"
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}