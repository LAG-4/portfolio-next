// components/TypewriterText.jsx
'use client'; // This directive makes it a Client Component

import { TypeAnimation } from 'react-type-animation';

const TypewriterText = () => {
  return (
    <TypeAnimation
      sequence={[
        'I build Mobile Apps',
        1000,
        'I create AI Solutions',
        2000,
        'I design Experiences',
        1000,
        'I ship Products',
        1000,


        () => {},
      ]}
      wrapper="span" // You can use a span, div, p, etc.
      speed={50} // Typing speed (smaller number = faster)
      repeat={Infinity} // Loop indefinitely
      // You can add styles or classNames directly:
      className="text-2xl font-bold text-[#164955]"
      style={{ display: 'inline-block' }} // Recommended for wrapper="span"
    />
  );
};

export default TypewriterText;