# Dot-menu

This is a ReactJS plugin to create a Dot-menu for your pages. It is highly customizable and is still unter constructin (besides the fact that this is my very first npm plugin). **PR are highly welcomed!**

## What is this all about?

![Dot Menu example gif][example]

This plugin creates the menu on the left side (optionally also on the right side).

## Installation

```
// npm upload is coming up!
```

## Example Usage

```javascript
import DotMenu, { DotMenuPage } from "dot-menu";
import React from "react";

const App = () => {
  return (
    <DotMenu right={false}>
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

| Name      | Values      | Default | Description                                                                    |
| --------- | ----------- | ------- | ------------------------------------------------------------------------------ |
| right     | true\|false | false   | Determines if the menu is rendered on the right or left                        |
| pathColor | string      | false   | Determines the color of the propress path. Give it a _normal_ HEX/color string |

**`DotMenuPage` properties**

| Name            | Values           | Default | Description                                                                                                    |
| --------------- | ---------------- | ------- | -------------------------------------------------------------------------------------------------------------- |
| backgroundColor | string\|"RANDOM" | none    | The page background color. Give it a _normal_ HEX/color string or the string _RANDOM_ when you love surprises! |
| title           | string           | none    | The title to be rendered in the mouse over box                                                                 |

## Todo

- Write tests!
- Experiment with mobile

[example]: ./example.gif "Dot Menu  example gif"
