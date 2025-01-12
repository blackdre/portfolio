import BlurText from "./BlurText";

const HeadingText = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <BlurText
      text="Hi, I'm Blesssing"
      delay={650}
      animateBy='words'
      direction='top'
      onAnimationComplete={handleAnimationComplete}
      className='text-2xl mb-8'
    />
  );
};
export default HeadingText;
