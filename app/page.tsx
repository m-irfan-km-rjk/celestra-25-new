import { Calendar, Users, Trophy, Sparkles, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section with Animated Background */}
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(50%)'
          }}></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block">
            <Sparkles className="h-12 w-12 text-yellow-400 mx-auto mb-6 animate-pulse" />
            <h1 className="text-7xl font-black mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                CELESTRA
              </span>
              <span className="text-white"> 2024</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Where innovation meets excellence. Join us at South India's premier technical symposium,
            powered by IEI IEEE TKMCE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 rounded-lg font-bold text-gray-900 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 transform hover:-translate-y-1">
              Register Now
              <ArrowRight className="inline-block ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-lg font-bold border-2 border-gray-700 hover:border-yellow-400/50 text-gray-300 hover:text-yellow-400 transition-colors duration-300">
              View Schedule
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-900/50 backdrop-blur-lg border-t border-b border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 py-12 px-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">3000+</div>
            <div className="text-gray-400">Participants</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">20+</div>
            <div className="text-gray-400">Events</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">₹2L+</div>
            <div className="text-gray-400">Prize Pool</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">48hrs</div>
            <div className="text-gray-400">Non-Stop</div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative bg-gray-800/50 backdrop-blur p-8 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-colors duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
            <Calendar className="h-12 w-12 text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-4">Technical Extravaganza</h3>
            <p className="text-gray-400 leading-relaxed">
              Three days of cutting-edge workshops, competitions, and tech talks that push the boundaries of innovation.
            </p>
          </div>
          <div className="group relative bg-gray-800/50 backdrop-blur p-8 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-colors duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
            <Users className="h-12 w-12 text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-4">Industry Leaders</h3>
            <p className="text-gray-400 leading-relaxed">
              Connect with pioneers and thought leaders from top tech companies sharing their insights and experiences.
            </p>
          </div>
          <div className="group relative bg-gray-800/50 backdrop-blur p-8 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-colors duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
            <Trophy className="h-12 w-12 text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-4">Epic Competitions</h3>
            <p className="text-gray-400 leading-relaxed">
              Showcase your skills in hackathons, coding challenges, and project exhibitions with amazing prizes.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
          <div className="relative">
            <h2 className="text-3xl font-bold mb-6 inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                About Celestra
              </span>
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-3xl">
              Celestra is more than just a technical festival - it's a celebration of innovation,
              creativity, and technological excellence. Born from the collaborative spirit of
              IEI IEEE TKMCE, we bring together the brightest minds in technology and engineering
              for an unforgettable experience of learning, competition, and growth.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-yellow-400 mb-2">When</h4>
                <p className="text-gray-300">March 15-17, 2024</p>
                <p className="text-gray-400 text-sm mt-1">Gates open at 9:00 AM</p>
              </div>
              <div>
                <h4 className="font-bold text-yellow-400 mb-2">Where</h4>
                <p className="text-gray-300">TKM College of Engineering</p>
                <p className="text-gray-400 text-sm mt-1">Kollam, Kerala</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
