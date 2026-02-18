import { useState } from 'react';
import {
  Smartphone, Clock, MessageCircle, Mail, Monitor, Download,
  TrendingUp, Bell, BookOpen, Apple, PlayCircle, QrCode,
  Users, Gift, Rocket, CheckCircle, X
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Clock,
    title: '24/7 Lecture Access',
    description: 'Access recorded classes anytime, anywhere'
  },
  {
    icon: MessageCircle,
    title: 'Instant Doubt Clearing',
    description: 'Get your doubts resolved within minutes'
  },
  {
    icon: Mail,
    title: 'Direct Faculty Messaging',
    description: 'Chat directly with your teachers'
  },
  {
    icon: Monitor,
    title: 'Live Class Integration',
    description: 'Attend live classes from your phone'
  },
  {
    icon: Download,
    title: 'Offline Downloads',
    description: 'Download lectures for offline study'
  },
  {
    icon: TrendingUp,
    title: 'Performance Tracking',
    description: 'Track your progress with detailed analytics'
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Never miss a class or assignment'
  },
  {
    icon: BookOpen,
    title: 'Digital Study Library',
    description: 'Complete study materials in your pocket'
  }
];

const stats = [
  { icon: Rocket, text: 'Launching Soon' },
  { icon: Users, text: 'Built for 10,000+ Students' },
  { icon: Smartphone, text: 'iOS & Android' },
  { icon: Gift, text: '100% Free for Enrolled Students' }
];

export default function MobileAppSection() {
  const [showModal, setShowModal] = useState(false);
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <section id="mobile-app" ref={sectionRef} className="relative py-20 overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjRkJDRkU4IiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4zIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div
        className="absolute top-20 left-10 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
        style={{ animationDelay: '0s' }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
        style={{ animationDelay: '2s' }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-rose-md animate-glow-pulse">
            <Rocket className="w-4 h-4" />
            Coming Soon
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 bg-clip-text text-transparent">
            Your Success Story Starts Here
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl">Now Available on Mobile</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            The Advanced Learning Academy App - Learn Anytime, Anywhere with 24/7 Support
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className={`relative transition-all duration-700 delay-200 ${sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative mx-auto w-64 h-[500px] animate-phone-float">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400 via-pink-500 to-rose-600 rounded-[3rem] shadow-rose-xl"></div>

              <div className="absolute inset-3 bg-black rounded-[2.5rem] overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl z-10"></div>

                <div className="relative h-full bg-gradient-to-br from-rose-400 via-pink-500 to-rose-600 flex flex-col items-center justify-center p-8 text-white">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-xl mx-auto">
                      <BookOpen className="w-10 h-10 text-rose-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 drop-shadow-lg">
                      The Advanced<br />Learning Academy
                    </h3>
                    <p className="text-sm opacity-90 drop-shadow">
                      Your Success, Always With You
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 left-4 w-6 h-6 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/3 left-6 w-4 h-4 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>

              <div className="absolute -right-8 top-1/4 bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-rose-600" />
                  <div className="text-xs">
                    <div className="font-semibold text-gray-900">Doubt Cleared!</div>
                    <div className="text-gray-600">In 2 minutes</div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-8 bottom-1/3 bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div className="text-xs">
                    <div className="font-semibold text-gray-900">Live Class</div>
                    <div className="text-gray-600">Starting now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-300 ${sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-3xl font-bold mb-8 text-gray-900">
              Designed for Modern Learners Like You
            </h3>

            <div className="space-y-6 mb-10">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-rose-100 shadow-rose-md hover:shadow-rose-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Study on the Go</h4>
                    <p className="text-gray-700">Access all course content from your smartphone</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-rose-100 shadow-rose-md hover:shadow-rose-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Never Miss a Class</h4>
                    <p className="text-gray-700">Live streaming and recorded sessions</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-rose-100 shadow-rose-md hover:shadow-rose-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Instant Help</h4>
                    <p className="text-gray-700">Chat with faculty and clear doubts immediately</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-rose-100 shadow-rose-md hover:shadow-rose-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Track Your Progress</h4>
                    <p className="text-gray-700">Real-time performance analytics</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-rose-lg border border-rose-100">
              <h4 className="text-xl font-bold mb-4 text-center text-gray-900">Download the App</h4>
              <p className="text-center text-gray-600 mb-6">Launching Soon for iOS & Android</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <button className="w-full bg-black hover:bg-gray-900 text-white rounded-xl px-6 py-4 flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <Apple className="w-6 h-6" />
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-sm font-bold">App Store</div>
                    </div>
                  </button>
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-xs font-bold text-rose-900 bg-white px-3 py-1 rounded-full">Coming Soon</span>
                  </div>
                </div>

                <div className="flex-1 relative">
                  <button className="w-full bg-black hover:bg-gray-900 text-white rounded-xl px-6 py-4 flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <PlayCircle className="w-6 h-6" />
                    <div className="text-left">
                      <div className="text-xs">Get it on</div>
                      <div className="text-sm font-bold">Google Play</div>
                    </div>
                  </button>
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-xs font-bold text-rose-900 bg-white px-3 py-1 rounded-full">Coming Soon</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-center gap-3 text-gray-600">
                  <QrCode className="w-8 h-8" />
                  <div className="text-sm">
                    <div className="font-semibold">Scan to Download</div>
                    <div className="text-xs">(Available Soon)</div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="w-full mt-6 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-rose-md hover:shadow-rose-lg transform hover:scale-105"
              >
                Get Notified at Launch
              </button>
            </div>
          </div>
        </div>

        <div ref={featuresRef} className={`mb-20 transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Powerful Features at Your Fingertips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-rose-100 shadow-rose-md hover:shadow-rose-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div ref={statsRef} className={`transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-rose-200 shadow-rose-md text-center hover:shadow-rose-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-bold text-gray-900">{stat.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn">
            <div className="sticky top-0 bg-gradient-to-r from-rose-500 to-pink-500 text-white p-6 rounded-t-3xl">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 mb-2">
                <Rocket className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Be the First to Know!</h3>
              </div>
              <p className="text-white/90">Get early access and exclusive features</p>
            </div>

            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="Enter your phone"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Preferred Platform</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent">
                    <option value="both">Both iOS & Android</option>
                    <option value="ios">iOS</option>
                    <option value="android">Android</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-rose-md hover:shadow-rose-lg"
                >
                  Notify Me
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                We'll notify you as soon as the app is available for download
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
