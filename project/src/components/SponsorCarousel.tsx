import { useEffect, useState } from 'react';
import sponsor1 from '../pictures/devnovate.jpg';
import sponsor2 from '../pictures/HWI.jpg';
import sponsor3 from '../pictures/knowationlearning.png';

export default function SponsorCarousel() {
  const baseSponsors = [
    { name: 'TechCorp', image: sponsor1 },
    { name: 'InnovateLabs', image: sponsor2 },
    { name: 'PowerSystems', image: sponsor3 },
  ];

  // duplicate list to make seamless looping
  const sponsors = [...baseSponsors, ...baseSponsors];

  const [position, setPosition] = useState(0);

  useEffect(() => {
    const itemWidth = 224; // w-56 = 14rem = 224px
    const gap = 48; // gap-12 = 3rem = 48px
    const totalItemWidth = itemWidth + gap;

    // Total width of half (one set of sponsors)
    const totalWidth = baseSponsors.length * totalItemWidth;

    // Start centered
    const initialPosition = window.innerWidth / 2 - totalItemWidth / 2;
    setPosition(initialPosition);

    const interval = setInterval(() => {
      setPosition((prev) => {
        // move left continuously
        const newPos = prev - 1;
        // when scrolled one full set, reset seamlessly
        return newPos <= -totalWidth ? initialPosition : newPos;
      });
    }, 20); // adjust speed if needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#1e293b] py-8">
      <div
        className="flex gap-12 items-center transition-transform"
        style={{
          transform: `translateX(${position}px)`,
          willChange: 'transform',
        }}
      >
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col items-center w-56"
          >
            <img
              src={sponsor.image}
              alt={sponsor.name}
              className="w-48 h-48 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
