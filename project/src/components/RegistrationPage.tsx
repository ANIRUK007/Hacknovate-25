import { useState } from 'react';
import { ArrowLeft, Users, DollarSign, Mail, Phone, Building, CheckCircle } from 'lucide-react';

interface RegistrationPageProps {
  onNavigate: () => void;
}

export default function RegistrationPage({ onNavigate }: RegistrationPageProps) {
  const [teamSize, setTeamSize] = useState<'4' | '5-6'>('4');
  const [hasMembership, setHasMembership] = useState(false);
  const [formData, setFormData] = useState({
    teamName: '',
    leaderName: '',
    leaderEmail: '',
    leaderPhone: '',
    college: '',
    theme: ''
  });

  const basePrice = teamSize === '4' ? 1200 : 1600;
  const discount = hasMembership ? 200 : 0;
  const finalPrice = basePrice - discount;

  const themes = [
    'Agentic AI',
    'Clean and Sustainable Technology',
    'Health Tech',
    'Software Innovation'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Registration form submitted! Payment integration will be added here.');
  };

  return (
    <div className="min-h-screen bg-[#1e293b] text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onNavigate}
          className="pixel-button bg-[#334155] text-white px-6 py-3 text-sm mb-8 flex items-center gap-2 hover:bg-[#475569]"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK TO HOME
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 text-[#3b82f6] pixel-border inline-block px-8 py-6 bg-[#334155]">
            REGISTER
          </h1>
          <p className="text-xs md:text-sm mt-6 text-[#cbd5e1]">
            Deadline: 30-10-2025, 12:00 PM
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Team Size Selection */}
          <div className="pixel-border p-6 bg-[#334155]">
            <label className="block text-sm mb-4 text-[#3b82f6]">
              <Users className="inline w-4 h-4 mr-2" />
              TEAM SIZE
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setTeamSize('4')}
                className={`pixel-button p-4 text-sm ${
                  teamSize === '4' ? 'bg-[#3b82f6] text-white' : 'bg-[#1e293b] text-[#94a3b8]'
                }`}
              >
                4 MEMBERS
                <div className="text-xs mt-2">₹1200</div>
              </button>
              <button
                type="button"
                onClick={() => setTeamSize('5-6')}
                className={`pixel-button p-4 text-sm ${
                  teamSize === '5-6' ? 'bg-[#3b82f6] text-white' : 'bg-[#1e293b] text-[#94a3b8]'
                }`}
              >
                5-6 MEMBERS
                <div className="text-xs mt-2">₹1600</div>
              </button>
            </div>
          </div>

          {/* Membership Discount */}
          <div className="pixel-border p-6 bg-[#334155]">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={hasMembership}
                onChange={(e) => setHasMembership(e.target.checked)}
                className="w-6 h-6 accent-[#3b82f6]"
              />
              <span className="text-xs md:text-sm text-[#cbd5e1]">
                Team has IEEE or CSI membership (₹200 discount)
              </span>
            </label>
          </div>

          {/* Team Details */}
          <div className="pixel-border p-6 bg-[#334155]">
            <h3 className="text-sm mb-6 text-[#3b82f6]">TEAM DETAILS</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs mb-2 text-[#94a3b8]">Team Name</label>
                <input
                  type="text"
                  required
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  className="w-full pixel-border px-4 py-3 bg-[#1e293b] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
                  placeholder="Enter team name"
                />
              </div>

              <div>
                <label className="block text-xs mb-2 text-[#94a3b8]">Theme Selection</label>
                <select
                  required
                  value={formData.theme}
                  onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
                  className="w-full pixel-border px-4 py-3 bg-[#1e293b] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
                >
                  <option value="">Select a theme</option>
                  {themes.map((theme) => (
                    <option key={theme} value={theme}>
                      {theme}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Team Leader Details */}
          <div className="pixel-border p-6 bg-[#334155]">
            <h3 className="text-sm mb-6 text-[#3b82f6]">TEAM LEADER DETAILS</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs mb-2 text-[#94a3b8]">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.leaderName}
                  onChange={(e) => setFormData({ ...formData, leaderName: e.target.value })}
                  className="w-full pixel-border px-4 py-3 bg-[#1e293b] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label className="block text-xs mb-2 text-[#94a3b8]">
                  <Mail className="inline w-3 h-3 mr-1" />
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.leaderEmail}
                  onChange={(e) => setFormData({ ...formData, leaderEmail: e.target.value })}
                  className="w-full pixel-border px-4 py-3 bg-[#1e293b] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-xs mb-2 text-[#94a3b8]">
                  <Phone className="inline w-3 h-3 mr-1" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.leaderPhone}
                  onChange={(e) => setFormData({ ...formData, leaderPhone: e.target.value })}
                  className="w-full pixel-border px-4 py-3 bg-[#1e293b] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
                  placeholder="10-digit number"
                />
              </div>

              <div>
                <label className="block text-xs mb-2 text-[#94a3b8]">
                  <Building className="inline w-3 h-3 mr-1" />
                  College Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  className="w-full pixel-border px-4 py-3 bg-[#1e293b] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
                  placeholder="Enter college name"
                />
              </div>
            </div>
          </div>

          {/* Price Summary */}
          <div className="pixel-border p-6 bg-[#334155]">
            <h3 className="text-sm mb-6 text-[#3b82f6]">
              <DollarSign className="inline w-4 h-4 mr-2" />
              PRICE SUMMARY
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-[#cbd5e1]">
                <span>Base Price ({teamSize} members):</span>
                <span>₹{basePrice}</span>
              </div>
              {hasMembership && (
                <div className="flex justify-between text-[#22c55e]">
                  <span>Membership Discount:</span>
                  <span>-₹{discount}</span>
                </div>
              )}
              <div className="border-t-2 border-[#3b82f6] pt-3 flex justify-between text-lg text-[#3b82f6]">
                <span>TOTAL:</span>
                <span>₹{finalPrice}</span>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="pixel-border p-6 bg-[#dc2626] bg-opacity-20">
            <h3 className="text-sm mb-4 text-[#dc2626]">
              <CheckCircle className="inline w-4 h-4 mr-2" />
              IMPORTANT NOTES
            </h3>
            <ul className="space-y-2 text-xs text-[#cbd5e1]">
              <li>• All team members must carry valid college ID cards</li>
              <li>• No team changes allowed after registration</li>
              <li>• Registration closes on 30-10-2025, 12:00 PM</li>
              <li>• Limited to 50 teams (First come, first served)</li>
              <li>• Presence mandatory throughout 24-hour event</li>
            </ul>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="pixel-button bg-[#dc2626] text-white px-12 py-4 text-sm md:text-base hover:bg-[#b91c1c]"
            >
              PROCEED TO PAYMENT
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-12 pixel-border p-6 bg-[#334155] text-center">
          <p className="text-xs text-[#94a3b8] mb-2">Need help with registration?</p>
          <p className="text-xs text-[#3b82f6]">Email: hacknovate@methodist.edu.in</p>
        </div>
      </div>
    </div>
  );
}
