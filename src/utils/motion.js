import { stagger } from "framer-motion";

export const navVariants = (opacity) => ({
  hidden: {
    opacity: 0,
    y: -50,
    z: 10,
  },
  show: {
    opacity: opacity,
    y: 0,
    z: 10,
    transition: {
      type: "spring",
      stiffness: 120,
      delay: 0.25,
    },
  },
});

export const SlideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    Y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type: type,
      delay: delay,
      duration: duration,
      ease: "easeIn",
    },
  },
});

export const FadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    Y: direction === "top" ? 100 : direction === "bottom" ? 100 : 0,
    opacity: 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const RotateIn = (direction) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    opacity: 0,
    rotate: direction === "left" ? -120 : 120,
  },
  show: {
    opacity: 1,
    rotate: 0,
    x: 0,
    transition: {
      type: "spring",
      duration: 1.2,
      delay: 0.3,
    },
  },
});
