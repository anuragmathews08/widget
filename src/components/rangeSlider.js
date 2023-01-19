export const RangeSlider = () => {
  return (
    <div className="mt-20 w-full flex justify-center">
      <input
        type="range"
        aria-label="slider"
        min="0"
        max="10"
        step="1"
        className="w-[80%] accent-blue-200"
      />
    </div>
  );
};
