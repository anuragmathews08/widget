export const RangeSlider = ({ sliderVal, sliderChange }) => {
  const handleSliderChange = (val) => {
    sliderChange(val);
  };

  return (
    <div className="mt-20 w-full flex justify-center">
      <input
        type="range"
        aria-label="slider"
        min="0"
        max="10"
        step="1"
        value={sliderVal}
        onChange={(e) => handleSliderChange(e.target.value)}
        className="w-[80%] accent-blue-200"
      />
    </div>
  );
};
