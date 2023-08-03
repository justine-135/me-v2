const Overlay = ({ menu }) => {
  return (
    <div
      className={`${
        menu
          ? "fixed w-full h-screen blur-3xl bg-white/90 dark:bg-darkBg/90 z-40"
          : "hidden"
      }`}
    ></div>
  );
};

export default Overlay;
