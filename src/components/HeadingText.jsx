import BlurText from "./BlurText";

const HeadingText = ({ text }) => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <BlurText
      text={text}
      delay={650}
      animateBy='words'
      direction='top'
      onAnimationComplete={handleAnimationComplete}
      className='text-2xl mb-8'
    />
  );
};
export default HeadingText;
