export const CircleUI = () => {
  return (
    <div
      aria-label="dotted-circle"
      className="w-[12rem] h-[12rem] rounded-full border-2 border-white border-dashed relative"
    >
      <svg className="stroke-2 stroke-white fill-none absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <circle
          cx="150"
          cy="74"
          r="72"
          style={{
            strokeDasharray: "452",
            strokeDashoffset: 452 - (452 * 5 * 10) / 100,
            transformOrigin: "center",
            transform: "rotate(-90deg)",
          }}
        ></circle>
      </svg>
      <div
        aria-label="circular-bar"
        className="w-[9rem] h-[9rem] rounded-full bg-black/20 relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
      >
        <div
          aria-label="value-circle"
          className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex items-center justify-center text-white text-2xl font-bold"
        >
          5
        </div>
      </div>
    </div>
  );
};
