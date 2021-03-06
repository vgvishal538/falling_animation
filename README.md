# Falling animation

Falling animation for React Native apps.

![done](https://raw.githubusercontent.com/vgvishal538/vgvishal538.github.io/main/demo.gif)

## Installation

```
yarn add react-native-falling-animation
```

## Code

```js
import FallingAnimations from "react-native-falling-animation";

function HomeView(props) {
  return (
    <FallingAnimations
      imageURl={
        "https://raw.githubusercontent.com/vgvishal538/vgvishal538.github.io/main/H1.png"
      }
      numberOfItems={10}
    />
  );
}
export default HomeView;
```

## Default Params

| Params          |   Type    | Description                      | Default                                                                           |
| --------------- | :-------: | -------------------------------- | --------------------------------------------------------------------------------- |
| `imageUrl`      |   `Uri`   | Image value to render.           | `https://raw.githubusercontent.com/vgvishal538/vgvishal538.github.io/main/H1.png` |
| `numberOfItems` | `Integer` | Number of images to be rendered. | `10`                                                                              |
| `sizeOfItems`   | `Integer` | Size (in `px`) of items.         | Dimension divided by 35.                                                          |
