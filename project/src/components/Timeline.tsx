import { Clock, Coffee, Moon, Sun, Award, Utensils, Activity } from 'lucide-react';

export default function Timeline() {
  const allEvents = [
    {
      time: '09:30',
      month: 'NOV 03',
      phase: 'PHASE 1',
      title: 'Registration & Inauguration',
      description: 'Registration verification and inauguration speech',
      icon: Sun,
      color: 'bg-[#3b82f6]',
      textColor: 'text-[#3b82f6]',
      position: 'left'
    },
    {
      time: '10:30',
      phase: 'PHASE 2',
      title: 'Hackathon Morning Session',
      description: 'Start your innovative journey with initial brainstorming and development',
      icon: Clock,
      color: 'bg-[#dc2626]',
      textColor: 'text-[#dc2626]',
      position: 'right'
    },
    {
      time: '12:30',
      phase: 'BREAK',
      title: 'Lunch Break',
      description: 'Refuel and network with other participants',
      icon: Utensils,
      color: 'bg-[#22c55e]',
      textColor: 'text-[#22c55e]',
      position: 'left'
    },
    {
      time: '14:00',
      phase: 'PHASE 3',
      title: 'Activity Session',
      description: 'Interactive activities and team building exercises',
      icon: Activity,
      color: 'bg-[#3b82f6]',
      textColor: 'text-[#3b82f6]',
      position: 'right'
    },
    {
      time: '15:00',
      phase: 'PHASE 4',
      title: 'Hackathon Afternoon',
      description: 'Continue development with mentor support and guidance',
      icon: Clock,
      color: 'bg-[#dc2626]',
      textColor: 'text-[#dc2626]',
      position: 'left'
    },
    {
      time: '17:00',
      phase: 'BREAK',
      title: 'Tea & Snacks',
      description: 'Evening refreshments and casual networking',
      icon: Coffee,
      color: 'bg-[#22c55e]',
      textColor: 'text-[#22c55e]',
      position: 'right'
    },
    {
      time: '18:30',
      phase: 'PHASE 5',
      title: 'Activity Session',
      description: 'Energizing activities before evening session',
      icon: Activity,
      color: 'bg-[#3b82f6]',
      textColor: 'text-[#3b82f6]',
      position: 'left'
    },
    {
      time: '19:00',
      phase: 'PHASE 6',
      title: 'Hackathon Pre-Dinner',
      description: 'Intensive coding session before dinner break',
      icon: Clock,
      color: 'bg-[#dc2626]',
      textColor: 'text-[#dc2626]',
      position: 'right'
    },
    {
      time: '22:00',
      phase: 'BREAK',
      title: 'Dinner Break',
      description: 'Dinner will be served',
      icon: Utensils,
      color: 'bg-[#22c55e]',
      textColor: 'text-[#22c55e]',
      position: 'left'
    },
    {
      time: '23:00',
      month: 'NOV 04',
      phase: 'PHASE 7',
      title: 'Overnight Activity',
      description: 'Special midnight activities and fun challenges',
      icon: Moon,
      color: 'bg-[#8b5cf6]',
      textColor: 'text-[#8b5cf6]',
      position: 'right'
    },
    {
      time: '24:00',
      phase: 'PHASE 8',
      title: 'Hackathon Overnight',
      description: 'The grind continues through the night',
      icon: Clock,
      color: 'bg-[#dc2626]',
      textColor: 'text-[#dc2626]',
      position: 'left'
    },
    {
      time: '06:00',
      phase: 'BREAK',
      title: 'Breakfast Break',
      description: 'Morning breakfast to recharge',
      icon: Coffee,
      color: 'bg-[#22c55e]',
      textColor: 'text-[#22c55e]',
      position: 'right'
    },
    {
      time: '08:00',
      phase: 'PHASE 9',
      title: 'Activity Session',
      description: 'Morning energizers and team motivation',
      icon: Activity,
      color: 'bg-[#3b82f6]',
      textColor: 'text-[#3b82f6]',
      position: 'left'
    },
    {
      time: '09:00',
      phase: 'PHASE 10',
      title: 'Hackathon Final Hour',
      description: 'Last sprint to complete your project',
      icon: Clock,
      color: 'bg-[#dc2626]',
      textColor: 'text-[#dc2626]',
      position: 'right'
    },
    {
      time: '10:30',
      phase: 'FINALE',
      title: 'Winners Announcement',
      description: 'Dignitaries speeches and winners announcement ceremony',
      icon: Award,
      color: 'bg-[#fbbf24]',
      textColor: 'text-[#fbbf24]',
      position: 'left'
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#1e293b]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-12">
          <h2 className="text-3xl md:text-4xl text-center text-[#3b82f6] pixel-border px-6 py-4 bg-[#334155]">
            TIMELINE
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#475569] hidden md:block"
               style={{ top: '40px', height: 'calc(100% - 80px)' }}>
          </div>

          {/* Events */}
          <div className="space-y-0">
            {allEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Mobile Layout (Stacked) */}
                <div className="md:hidden pixel-border p-4 bg-[#334155] mb-4">
                  <div className="flex items-start gap-4">
                    <div className={`${event.color} p-3 flex-shrink-0`}>
                      <event.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-white">{event.time}</span>
                        {event.month && (
                          <span className={`text-xs ${event.textColor} font-bold`}>{event.month}</span>
                        )}
                      </div>
                      <p className={`text-xs font-bold mb-1 ${event.textColor}`}>{event.phase}</p>
                      <p className="text-sm text-white mb-2">{event.title}</p>
                      <p className="text-xs text-[#94a3b8] leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout (Zigzag) */}
                <div className="hidden md:block">
                  <div className={`grid grid-cols-2 gap-8 items-center mb-8 ${
                    event.position === 'left' ? '' : ''
                  }`}>
                    {/* Left Side */}
                    {event.position === 'left' ? (
                      <>
                        <div className="text-right pr-8">
                          <div className="pixel-border p-6 bg-[#334155] inline-block">
                            <div className="flex items-center justify-end gap-3 mb-2">
                              {event.month && (
                                <span className={`text-sm font-bold ${event.textColor}`}>{event.month}</span>
                              )}
                              <span className="text-lg font-bold text-white">{event.time}</span>
                            </div>
                            <p className={`text-xs font-bold mb-2 ${event.textColor}`}>{event.phase}</p>
                            <h3 className="text-sm font-bold text-white mb-2">{event.title}</h3>
                            <p className="text-xs text-[#94a3b8] leading-relaxed">{event.description}</p>
                          </div>
                        </div>
                        <div className="relative flex justify-start pl-8">
                          <div className={`${event.color} p-4 pixel-border relative z-10`}>
                            <event.icon className="w-8 h-8 text-white" />
                          </div>
                          {/* Dotted Line to Center */}
                          <div className="absolute left-0 top-1/2 w-8 border-t-2 border-dotted border-[#475569]"></div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="relative flex justify-end pr-8">
                          <div className={`${event.color} p-4 pixel-border relative z-10`}>
                            <event.icon className="w-8 h-8 text-white" />
                          </div>
                          {/* Dotted Line to Center */}
                          <div className="absolute right-0 top-1/2 w-8 border-t-2 border-dotted border-[#475569]"></div>
                        </div>
                        <div className="text-left pl-8">
                          <div className="pixel-border p-6 bg-[#334155] inline-block">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-lg font-bold text-white">{event.time}</span>
                              {event.month && (
                                <span className={`text-sm font-bold ${event.textColor}`}>{event.month}</span>
                              )}
                            </div>
                            <p className={`text-xs font-bold mb-2 ${event.textColor}`}>{event.phase}</p>
                            <h3 className="text-sm font-bold text-white mb-2">{event.title}</h3>
                            <p className="text-xs text-[#94a3b8] leading-relaxed">{event.description}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
