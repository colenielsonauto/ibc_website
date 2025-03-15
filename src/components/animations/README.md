# Animation System

This directory contains reusable animation components that can be used throughout the website to create consistent, smooth animations.

## Components

### AnimatedHeading

A component for animated headings.

```jsx
<AnimatedHeading 
  as="h2" // h1, h2, h3, h4, h5, h6
  className="text-3xl font-bold"
  delay={0.2} // optional delay in seconds
>
  Section Title
</AnimatedHeading>
```

### AnimatedCard

A component for animated cards.

```jsx
<AnimatedCard
  index={index} // for staggered animations
  className="bg-white rounded-lg shadow-md p-6"
  hoverEffect={true} // optional hover effect
>
  Card content
</AnimatedCard>
```

### AnimatedText

A component for animated text elements.

```jsx
<AnimatedText
  as="p" // p, li, div, span
  className="text-gray-600"
  direction="left" // left, right, up, down
  index={index} // for staggered animations
>
  Text content
</AnimatedText>
```

### AnimatedImage

A component for animated images.

```jsx
<AnimatedImage
  src="/path-to-image.jpg"
  alt="Description"
  width={600}
  height={400}
  className="rounded-lg"
  containerClassName="w-full"
  delay={0.3} // optional delay in seconds
  parallaxEffect={true} // optional parallax effect
/>
```

### AnimatedProfile

A component for team/board member profiles.

```jsx
<AnimatedProfile
  index={index} // for staggered animations
  className="bg-white rounded-lg shadow-md"
>
  Profile content
</AnimatedProfile>
```

### AnimatedList

A component for animated lists.

```jsx
<AnimatedList
  items={['Item 1', 'Item 2', 'Item 3']}
  className="space-y-4"
  itemClassName="text-gray-600"
  as="ul" // ul or ol
  direction="left" // left, right, up, down
  staggerDelay={0.15} // delay between items
/>
```

### AnimatedSection

A component for animated sections with staggered children.

```jsx
<AnimatedSection
  className="py-12"
  delay={0.2} // optional delay in seconds
  staggerChildren={true} // whether to stagger children animations
  staggerDelay={0.1} // delay between children
>
  Section content
</AnimatedSection>
```

## Usage Guidelines

- Use consistent animation durations:
  - Section headings: 0.6 to 0.8 seconds
  - Content sections/cards: 0.8 to 1 second
- Use a viewport threshold of 25-30% to trigger animations
- Use staggered animations for related elements
- Keep animations subtle and elegant
- Use `once: true` to prevent animations from repeating

## Performance Considerations

- Avoid animating too many elements simultaneously
- Use simple transforms and opacity changes for better performance
- Test animations on mobile devices to ensure smooth performance
- Consider disabling animations for users who prefer reduced motion 