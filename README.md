# Falling_animation

Falling_animation for React Native apps.

## Instalation

```
yarn add react-native-falling-animation
```

## Usage

```js
import FallingAnimations from "react-native-falling-animation";

function HomeView(props) {
  return (
    <FallingAnimations
      imageURl={
        "https://png.pngtree.com/png-clipart/20210117/ourmid/pngtree-red-3d-heart-2-png-image_2760695.jpg"
      }
      numberOfItems={10}
    />
  );
}
export default HomeView;
```

## Params

| Params          |   Type    | Description                      | Default                  |
| --------------- | :-------: | -------------------------------- | ------------------------ |
| `numberOfItems` | `Integer` | Number of images to be rendered. | `10`                     |
| `sizeOfItems`   | `Integer` | Size (in `px`) of items.         | Dimension divided by 35. |
