import { WidgetBox } from "../hoc/widgetBox";
import { CircleUI, RangeSlider } from "./index";
import { useState } from "react";

export const CircleWidget = () => {
  const [sliderValue, setSliderValue] = useState(5);

  return (
    <WidgetBox>
      <CircleUI rangeVal={sliderValue} />
      <RangeSlider sliderVal={sliderValue} sliderChange={setSliderValue} />
    </WidgetBox>
  );
};
