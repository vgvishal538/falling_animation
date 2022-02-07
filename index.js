import React, { useState, useEffect } from "react";
import { Animated, View, Dimensions, Easing } from "react-native";

const FallingAnimation = (props) => {
  const { width, height } = Dimensions.get("window");
  let x = Math.round(Math.random() * width);
  const [xAnim] = useState(new Animated.Value(x));
  const [yAnim] = useState(new Animated.Value(0));

  const lifeTime = 20000;
  const horizontalMoveDuringLifeTime = 6;
  const animationDelay = (lifeTime / props.total) * props.index;

  // Set of animations for horizontal items bouncing
  const animations = [];
  const maxHorizontalMove = width / 10;
  for (let i = 0; i < horizontalMoveDuringLifeTime; i++) {
    const horizontalMove = Math.round(Math.random() * maxHorizontalMove);
    x += i % 2 === 0 ? horizontalMove : -horizontalMove;
    animations.push(
      Animated.timing(xAnim, {
        toValue: x,
        duration: lifeTime / horizontalMoveDuringLifeTime,
        delay: i === 0 ? animationDelay : 0,
        useNativeDriver: true,
      })
    );
  }

  useEffect(() => {
    Animated.loop(
      Animated.timing(yAnim, {
        toValue: height + props.size * 2,
        duration: 20000,
        easing: Easing.linear,
        delay: animationDelay,
        useNativeDriver: true,
      })
    ).start();

    Animated.loop(Animated.sequence(animations)).start();
  }, []);

  return (
    <Animated.Image
      style={{
        ...props.style,
        position: "absolute",
        transform: [{ translateX: xAnim }, { translateY: yAnim }],
        height: props.size,
        width: props.size,
        opacity: 0.6,
      }}
      source={{
        uri: props.imageURl,
      }}
      resizeMode="cover"
    ></Animated.Image>
  );
};

const FallingAnimations = (props) => {
  const { width, height } = Dimensions.get("window");
  const sizeOfItems = props.sizeOfItems || Math.max(width, height) / 35;
  const numberOfItems = props.numberOfItems || 10;
  return (
    <View
      pointerEvents="none"
      style={{
        flex: 1,
        position: "absolute",
        width: "100%",
        top: -sizeOfItems,
        height: height + sizeOfItems,
      }}
    >
      {[...Array(numberOfItems)].map((e, i) => (
        <FallingAnimation
          key={i}
          index={i}
          total={numberOfItems}
          size={sizeOfItems}
          imageUrl={props.imageURl}
        />
      ))}
    </View>
  );
};

export default FallingAnimations;
