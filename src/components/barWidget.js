import { WidgetBox } from "../hoc/widgetBox";
import { BarUI } from "./barUI";
import { useState } from "react";

export const BarWidget = () => {
  const [rangeValue, setRangeValue] = useState(3);

  return (
    <WidgetBox>
      <h3 className="text-white text-xl font-medium">
        {rangeValue >= 1 && rangeValue < 3 ? (
          <>Low</>
        ) : rangeValue >= 3 && rangeValue < 5 ? (
          <>Medium</>
        ) : (
          <>High</>
        )}
      </h3>
      <BarUI selected={rangeValue} handleValue={setRangeValue} />
    </WidgetBox>
  );
};
