# Dot-menu

This is a ReactJS plugin to create a Dot-menu for your pages. It is highly customizable and tries to expose as many options as possible.

**It is still under construction (besides the fact that this is my very first npm plugin). So PRs and feedback are highly welcomed!**

## What is this all about?

![Dot Menu example gif][example]

This plugin creates the menu on the left side (optionally also on the right side). The pages content you create will be window filling (`100vw` width and `100vh` heigth).

## Installation

```
npm install @mjoellnier/dot-menu --save
```

## Example Usage

```javascript
import DotMenu, { DotMenuPage } from "dot-menu";
import React from "react";

const App = () => {
  return (
    <DotMenu>
      <DotMenuPage backgroundColor={"RANDOM"} title={"Page 1"}>
        Hello 1
      </DotMenuPage>
      <DotMenuPage backgroundColor={"RANDOM"} title={"Page 2"}>
        Hello 2
      </DotMenuPage>
      <DotMenuPage backgroundColor={"RANDOM"} title={"Page 3"}>
        Hello 3
      </DotMenuPage>
      <DotMenuPage backgroundColor={"RANDOM"} title={"Page 4"}>
        Hello 4
      </DotMenuPage>
    </DotMenu>
  );
};

export default App;
```

The above example code creates the example which can be seen in the gif.

## Properties

**`DotMenu` properties**

| Name       | Values      | Default  | Description                                                                       |
| ---------- | ----------- | -------- | --------------------------------------------------------------------------------- |
| right      | true\|false | false    | Determines if the menu is rendered on the right or left                           |
| dotFilling | string      | darkgray | Determines the color of the nav dots filling. Give it a _normal_ HEX/color string |
| dotBorder  | string      | gray     | Determines the color of the nav dots border. Give it a _normal_ HEX/color string  |
| pathColor  | string      | black    | Determines the color of the propress path. Give it a _normal_ HEX/color string    |
| pathWidth  | string      | "2"      | Determines the width of the progress path. Give it an integer wrapped as string   |

**`DotMenuPage` properties**

| Name            | Values           | Default | Description                                                                                                    |
| --------------- | ---------------- | ------- | -------------------------------------------------------------------------------------------------------------- |
| backgroundColor | string\|"RANDOM" | none    | The page background color. Give it a _normal_ HEX/color string or the string _RANDOM_ when you love surprises! |
| title           | string           | none    | The title to be rendered in the mouse over box                                                                 |

## Changelog

| Version | Changes                                          |
| ------- | ------------------------------------------------ |
| 1.0.0   | Initial Release                                  |
| 1.0.1   | Adding smooth scrolling to page on nav dot click |

## Todo

- Write tests!
- ~~Implement scrolling when pressing on a nav dot~~
- Experiment with mobile

[example]: ./example.gif "Dot Menu  example gif"
