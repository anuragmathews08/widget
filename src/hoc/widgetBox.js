export const WidgetBox = ({ children }) => {
  return (
    <div
      aria-label="widget-box"
      className="xl:w-[25%] md:w-[50%] w-[80%] h-[80vh] bg-cyan-800 mt-16 flex flex-col items-center rounded-md pt-14 px-2"
    >
      {children}
    </div>
  );
};
