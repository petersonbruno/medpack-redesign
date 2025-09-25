export default function SectionBanner({ 
  title = "", 
  highlight = "", 
  bgColor = "#0B7CD0", 
  highlightColor = "text-yellow-300"
}) {
  // Split the title into words only if title exists
  const words = title ? title.split(" ") : [];

  return (
    <section
      className="w-full flex items-center justify-center"
      style={{ backgroundColor: bgColor, height: "175px" }}
    >
      <h2 className="font-poppins font-medium text-[40px] leading-[38px] text-center text-white max-w-4xl px-4">
        {words.map((word, idx) =>
          highlight && word.toLowerCase() === highlight.toLowerCase() ? (
            <span key={idx} className={highlightColor}>
              {word}{" "}
            </span>
          ) : (
            <span key={idx}>{word} </span>
          )
        )}
      </h2>
    </section>
  );
}
