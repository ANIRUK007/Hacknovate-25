import { Calendar, MapPin, Users, Trophy, Code, Cpu, Heart, Wrench, ChevronDown } from 'lucide-react';
import Timeline from './Timeline';
import SponsorCarousel from './SponsorCarousel';
import eventLogo from '../pictures/1000166232-removebg-preview.png';

interface LandingPageProps {
  onNavigate: () => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const themes = [
    { icon: Cpu, title: 'Agentic AI', color: 'text-[#3b82f6]' },
    { icon: Wrench, title: 'Clean & Sustainable Tech', color: 'text-[#22c55e]' },
    { icon: Heart, title: 'Health Tech', color: 'text-[#ef4444]' },
    { icon: Code, title: 'Software Innovation', color: 'text-[#8b5cf6]' }
  ];

  return (
    <div className="min-h-screen bg-[#1e293b] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-[#334155] to-[#1e293b]">
        {/* Pixel Stars Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white animate-blink"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Logo */}
<img
  src={eventLogo}
  alt="Event Logo"
  className="w-64 h-64 object-contain mx-auto"
/>

        {/* Title */}
        <h1 className="relative z-10 text-4xl md:text-6xl lg:text-7xl text-center mb-6 text-[#3b82f6] pixel-border px-8 py-6 bg-[#1e293b]">
          HACKNOVATE
        </h1>

        <p className="relative z-10 text-sm md:text-base text-center mb-4 max-w-2xl leading-relaxed px-4">
          24 Hours of Creativity, Coding & Collaboration
        </p>

        {/* Event Details */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl w-full px-4">
          <div className="pixel-border p-4 bg-[#334155] text-center">
            <Calendar className="w-8 h-8 mx-auto mb-2 text-[#3b82f6]" />
            <p className="text-xs mb-1">Date</p>
            <p className="text-xs text-[#94a3b8]">03-04 Nov 2025</p>
          </div>
          <div className="pixel-border p-4 bg-[#334155] text-center">
            <MapPin className="w-8 h-8 mx-auto mb-2 text-[#ef4444]" />
            <p className="text-xs mb-1">Location</p>
            <p className="text-xs text-[#94a3b8]">Methodist College of Engineering and Technology</p>
          </div>
          <div className="pixel-border p-4 bg-[#334155] text-center">
            <Users className="w-8 h-8 mx-auto mb-2 text-[#22c55e]" />
            <p className="text-xs mb-1">Team Size</p>
            <p className="text-xs text-[#94a3b8]">4-6 Members</p>
          </div>
        </div>

        {/* CTA Button */}
        <a
  href="https://forms.gle/okyBZiYGTjetrrMc7"
  target="_blank"
  rel="noopener noreferrer"
  className="relative z-10 pixel-button bg-[#dc2626] text-white px-8 py-4 text-sm md:text-base hover:bg-[#b91c1c] mb-16"
>
  REGISTER NOW
</a>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#3b82f6]" />
        </div>
      </div>

{/* About Section */}
<section className="py-20 px-4 bg-[#1e293b]">
  <div className="max-w-6xl mx-auto">
    <div className="flex justify-center mb-12">
      <h2 className="text-3xl md:text-4xl text-center text-[#3b82f6] pixel-border px-6 py-4 bg-[#334155]">
        ABOUT
      </h2>
    </div>
    <div className="pixel-border p-8 bg-[#334155] max-w-5xl mx-auto text-center">
      <p className="text-sm md:text-base leading-relaxed text-[#cbd5e1]">
        Hacknovate 2025 brings together passionate innovators for 24 hours of creativity,
        coding, and collaboration, solving real-world challenges through technology in various domains.
      </p>
    </div>
  </div>
</section>


      {/* Themes Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1e293b] to-[#334155]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <h2 className="text-3xl md:text-4xl text-center text-[#3b82f6] pixel-border px-6 py-4 bg-[#1e293b]">
              THEMES
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {themes.map((theme, index) => (
              <div
                key={index}
                className="pixel-border p-6 bg-[#1e293b] hover:bg-[#475569] transition-colors cursor-pointer group"
              >
                <theme.icon className={`w-12 h-12 mx-auto mb-4 ${theme.color} animate-float-small`} />
                <h3 className="text-xs text-center leading-relaxed">{theme.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-20 px-4 bg-[#334155]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-[#3b82f6] pixel-border inline-block px-6 py-4 bg-[#1e293b] mx-auto block w-fit">
            PRIZES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="pixel-border p-6 bg-[#1e293b]">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-[#fbbf24]" />
              <p className="text-2xl mb-2 text-[#fbbf24]">₹10,000</p>
              <p className="text-xs text-[#94a3b8]">Per Theme</p>
            </div>
            <div className="pixel-border p-6 bg-[#1e293b]">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-[#3b82f6]" />
              <p className="text-sm mb-2">Goodies</p>
              <p className="text-xs text-[#94a3b8]">For All</p>
            </div>
            <div className="pixel-border p-6 bg-[#1e293b]">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-[#22c55e]" />
              <p className="text-sm mb-2">Certificates</p>
              <p className="text-xs text-[#94a3b8]">For All</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline />

      {/* Sponsors Section */}
      <section className="py-20 px-4 bg-[#334155]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-[#3b82f6] pixel-border inline-block px-6 py-4 bg-[#1e293b] mx-auto block w-fit">
            SPONSORS
          </h2>
          <SponsorCarousel />
        </div>
      </section>

      {/* Registration Details */}
      <section className="py-20 px-4 bg-[#1e293b]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-[#3b82f6] pixel-border inline-block px-6 py-4 bg-[#334155] mx-auto block w-fit">
            REGISTRATION
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="pixel-border p-6 bg-[#334155]">
              <p className="text-xs mb-2 text-[#3b82f6]">4 Members Team</p>
              <p className="text-2xl mb-2 text-[#dc2626]">₹1200</p>
              <p className="text-xs text-[#94a3b8]">Early Bird Special</p>
            </div>
            <div className="pixel-border p-6 bg-[#334155]">
              <p className="text-xs mb-2 text-[#3b82f6]">5-6 Members Team</p>
              <p className="text-2xl mb-2 text-[#dc2626]">₹1600</p>
              <p className="text-xs text-[#94a3b8]">Extended Team</p>
            </div>
          </div>
          <div className="pixel-border p-6 bg-[#334155] text-center mb-8">
            <p className="text-xs leading-relaxed text-[#cbd5e1]">
              ₹200 Discount for teams with IEEE or CSI membership
            </p>
          </div>
          <div className="text-center">
            <a
  href="https://forms.gle/okyBZiYGTjetrrMc7"
  target="_blank"
  rel="noopener noreferrer"
  className="relative z-10 pixel-button bg-[#dc2626] text-white px-8 py-4 text-sm md:text-base hover:bg-[#b91c1c] mb-16"
>
              PROCEED TO REGISTER
            </a>
          </div>
        </div>
      </section>

     {/* Contact Section */}
<section className="py-20 px-4 bg-[#334155]">
  <div className="max-w-4xl mx-auto">
    {/* Section Heading */}
    <h2 className="text-3xl md:text-4xl text-center mb-12 text-[#3b82f6] pixel-border inline-block px-6 py-4 bg-[#1e293b] mx-auto block w-fit">
      CONTACT
    </h2>

    {/* Contact Methods */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="pixel-border p-6 bg-[#1e293b]">
        <p className="text-xs mb-4 text-[#3b82f6]">Email</p>
        <p className="text-xs text-[#cbd5e1] break-all">
          hacknovate@methodist.edu.in
        </p>
      </div>
      <div className="pixel-border p-6 bg-[#1e293b]">
        <p className="text-xs mb-4 text-[#3b82f6]">WhatsApp</p>
        <a
          href="https://chat.whatsapp.com/Fq6omGCzrxPJegpf4mTfio?mode=wwt"
          className="text-xs text-[#22c55e] hover:text-[#16a34a] break-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Group
        </a>
      </div>
    </div>

    {/* Faculty Coordinators */}
<div className="mt-8 pixel-border p-6 bg-[#1e293b]">
  <p className="text-xs mb-4 text-[#3b82f6]">Faculty Coordinators</p>
  <div className="space-y-2 text-xs text-[#cbd5e1]">
    <p>Assistant Professor, Vasavi Sravanthi Balusa : +91 8500088390</p>
    <p>Assistant Professor, Meenal H : +91 9014234596</p>
  </div>
</div>

    {/* Student Coordinators */}
    <div className="mt-8 pixel-border p-6 bg-[#1e293b]">
      <p className="text-xs mb-4 text-[#3b82f6]">Student Coordinators</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#cbd5e1]">
        <p>Hemanth: 9398056142</p>
        <p>Divyansi: 9704833523</p>
        <p>Razzak: 8309595385</p>
        <p>Muzakir: 9949692187</p>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="py-8 px-4 bg-[#1e293b] border-t-4 border-[#3b82f6]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs text-[#94a3b8]">
            © 2025 HACKNOVATE - Methodist College
          </p>
          <p className="text-xs text-[#94a3b8] mt-2">
            Deadline: 30-10-2025, 12:00 PM
          </p>
        </div>
      </footer>
    </div>
  );
}
