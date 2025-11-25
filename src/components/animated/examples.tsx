// Examples of using reusable animated components throughout your application

import { 
  FadeIn, 
  SlideUp, 
  SlideDown, 
  StaggerContainer,
  HoverLift,
  HoverScale,
  AnimatedCard 
} from '.';

// Example 1: Simple fade-in text
const ExampleFadeIn = () => (
  <FadeIn delay={0.2}>
    <h1>This text fades in smoothly</h1>
  </FadeIn>
);

// Example 2: Staggered list animation
const ExampleStaggeredList = () => (
  <StaggerContainer staggerChildren={0.1}>
    <SlideUp><div>Item 1</div></SlideUp>
    <SlideUp><div>Item 2</div></SlideUp>
    <SlideUp><div>Item 3</div></SlideUp>
    <SlideUp><div>Item 4</div></SlideUp>
  </StaggerContainer>
);

// Example 3: Card with hover effects
const ExampleCard = () => (
  <AnimatedCard
    animationType="slideUp"
    hoverEffect={true}
    hoverScale={1.05}
    hoverY={-10}
    className="p-6 bg-white rounded-lg shadow-md"
  >
    <h3>Card Title</h3>
    <p>Card content that animates in and has hover effects</p>
  </AnimatedCard>
);

// Example 4: Button with hover animation
const ExampleButton = () => (
  <HoverScale hoverScale={1.1} tapScale={0.95}>
    <button className="px-6 py-3 bg-blue-500 text-white rounded-lg">
      Animated Button
    </button>
  </HoverScale>
);

// Example 5: Hero section with multiple animations
const ExampleHeroSection = () => (
  <StaggerContainer className="text-center py-20">
    <SlideDown delay={0}>
      <h1 className="text-4xl font-bold">Welcome to Our Site</h1>
    </SlideDown>
    <FadeIn delay={0.2}>
      <p className="text-lg text-gray-600 mt-4">
        This is an example of animated components
      </p>
    </FadeIn>
    <SlideUp delay={0.4}>
      <HoverLift className="mt-8">
        <button className="px-8 py-4 bg-blue-600 text-white rounded-lg">
          Get Started
        </button>
      </HoverLift>
    </SlideUp>
  </StaggerContainer>
);

// Example 6: Feature cards grid
const ExampleFeatureGrid = () => (
  <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[1, 2, 3].map((item, index) => (
      <AnimatedCard
        key={item}
        animationType="slideUp"
        delay={index * 0.1}
        className="p-6 bg-white rounded-lg shadow-md"
        hoverEffect={true}
      >
        <h3>Feature {item}</h3>
        <p>Description of feature {item}</p>
      </AnimatedCard>
    ))}
  </StaggerContainer>
);

export {
  ExampleFadeIn,
  ExampleStaggeredList,
  ExampleCard,
  ExampleButton,
  ExampleHeroSection,
  ExampleFeatureGrid
};