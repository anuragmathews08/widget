import { WidgetBox } from "../hoc/widgetBox";
import { CircleUI, RangeSlider } from "./index";

export const CircleWidget = () => {
  return (
    <WidgetBox>
      <CircleUI />
      <RangeSlider />
    </WidgetBox>
  );
};
