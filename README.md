# Range value widgets application

Version: 1.0

## Overview

The application contains two simple widgets that can be used to work on a range of values and the two widgets have different use cases.

The widgets are designed to provide a great User Experience and the UI clearly indicates the purpose of using them.

The first widget contains a range input slider and a circular UI that changes value as per the slider value. The UI contains a dynamic ring that indicates the portion of the total value we have selected.

The widget can be used in places where we need precise information on the selected range value.

The second widget contains an upside-down triangle that is divided into 5 sections. The top section shows the maximum value whereas the bottom section depicts the lowest value. On selecting a section a rough estimate of value can be seen on top of the widget.

The widget can be used where we don't need precise information on the selected range value.

## Installation instructions

1. Clone the project to your local directory
2. Open a terminal and navigate to the cloned project directory
3. Run the command `npm install`
4. Once installation is finished run the command `npm start` to launch the application on `localhost:3000`

## Components Overview

All the components in the application are to be stored under the `src/components ` directory of the project. However, all the Higher Order Components are kept in the `src/hoc` directory.

**`<BarUI />` component**

It takes two props `selected` and `handleValue` to display the range estimate and change state value on user action respectively.

**`<BarWidget />` component**

It contains the `<BarUI />` component wrapped inside the HOC `<WidgetBox />` which is a responsive box for both widgets.

**`<CircleUI />` component**

It takes one prop `rangeVal` to display the user-selected range value and UI changes for the dynamic ring.

**`<RangeSlider />` component**

It takes two props `sliderVal` and `sliderChange` to set the user value for the range input and to change the state as per the user action respectively.

**`<CircleWidget />` component**

It contains `<CircleUI />` and `<CircleWidget />` components wrapped inside the `<WidgetBox />` HOC to build the range widget.

**`<NavBar />` component**

It contains the links to navigate to the widgets.

**`<App />` component**

It can be considered the root component that renders both widgets inside routes and the navbar to add navigation to the application.

## Test cases

**Bar Widget**
TC-01: It should display value and bars on the screen
TC-02: It should display the default value as medium
TC-03: It should display range value as High for top bar click
TC-04: It should display range value as Low for bottom most bar click

**Circle Widget**
TC-01: It should display range number on screen
TC-02: It should display 5 as default range
TC-03: It should change value on slider change

**_The tests can be found in the `src/components` directory with the same name as the widget component name._**
