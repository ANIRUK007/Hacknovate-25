import { useEffect, useState } from 'react';
import { Building2, Lightbulb, Zap, Rocket, Layers, Box } from 'lucide-react';

export default function SponsorCarousel() {
  const [position, setPosition] = useState(0);

  const sponsors = [
    { name: 'TechCorp', icon: Building2, color: 'text-[#3b82f6]' },
    { name: 'InnovateLabs', icon: Lightbulb, color: 'text-[#fbbf24]' },
    { name: 'PowerSystems', icon: Zap, color: 'text-[#ef4444]' },
    { name: 'RocketStart', icon: Rocket, color: 'text-[#8b5cf6]' },
    { name: 'LayerStack', icon: Layers, color: 'text-[#22c55e]' },
    { name: 'BoxTech', icon: Box, color: 'text-[#06b6d4]' },
    { name: 'TechCorp', icon: Building2, color: 'text-[#3b82f6]' },
    { name: 'InnovateLabs', icon: Lightbulb, color: 'text-[#fbbf24]' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev - 1) % (sponsors.length * 200));
    }, 30);

    return () => clearInterval(interval);
  }, [sponsors.length]);

  return (
    <div className="relative overflow-hidden pixel-border p-8 bg-[#1e293b]">
      <div
        className="flex gap-8 transition-transform"
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="pixel-border p-8 bg-[#334155] flex-shrink-0 w-48 hover:bg-[#475569] transition-all"
          >
            <sponsor.icon className={`w-16 h-16 mx-auto mb-4 ${sponsor.color}`} />
            <p className="text-xs text-center text-white">{sponsor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
