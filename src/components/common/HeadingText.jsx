const SectionHeading1 = ({ children, heading, link }) => {
  if (link)
    return (
      <a
        className={`font-semibold text-${heading} dark:text-darkH text-center sm:text-left hover:underline`}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  return (
    <div
      className={`font-extrabold text-black text-${heading} dark:text-darkH text-center sm:text-left`}
    >
      {children}
    </div>
  );
};

export default SectionHeading1;
