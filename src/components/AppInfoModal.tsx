import { X, Smartphone, Clock, MessageCircle, Mail, Monitor, Download, TrendingUp, Bell, BookOpen } from 'lucide-react';

interface AppInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNotifyClick: () => void;
}

const detailedFeatures = [
  {
    icon: Clock,
    title: '24/7 Lecture Access',
    description: 'Never let a doubt slow you down. Access thousands of recorded lectures anytime, anywhere. Whether you\'re traveling, at home, or taking a break - your learning never stops.'
  },
  {
    icon: MessageCircle,
    title: 'Instant Doubt Clearing',
    description: 'Snap a photo of your question or type it in the app, and our expert faculty will respond within minutes. Get personalized explanations that help you truly understand the concept.'
  },
  {
    icon: Mail,
    title: 'Direct Faculty Messaging',
    description: 'Your teachers, always just a message away. Build a personal connection with faculty, ask questions, seek guidance, and get the support you need to excel.'
  },
  {
    icon: Monitor,
    title: 'Live Class Integration',
    description: 'Attend live interactive classes right from your smartphone. Participate in real-time discussions, ask questions, and engage with your peers and instructors.'
  },
  {
    icon: Download,
    title: 'Offline Mode',
    description: 'Study on your schedule, not ours. Download lectures and study materials for offline viewing. Perfect for commutes, travel, or areas with limited connectivity.'
  },
  {
    icon: TrendingUp,
    title: 'Performance Analytics',
    description: 'Track your progress with detailed insights. See your strengths, identify areas for improvement, and watch your performance improve with data-driven learning.'
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Stay on top of your studies with intelligent reminders. Get notified about upcoming classes, assignment deadlines, doubt responses, and personalized study suggestions.'
  },
  {
    icon: BookOpen,
    title: 'Digital Study Library',
    description: 'Your complete study ecosystem in one place. Access textbooks, notes, practice papers, previous year questions, and curated study materials - all organized and searchable.'
  }
];

const benefits = [
  'Study at your own pace with flexible scheduling',
  'Save time with organized, searchable content',
  'Stay motivated with progress tracking and achievements',
  'Connect with peers through study groups',
  'Access expert guidance whenever you need it',
  'Prepare efficiently with smart study plans'
];

const faqs = [
  {
    question: 'Is the app really free?',
    answer: 'Yes! The app is 100% free for all enrolled students. No hidden fees, no premium tiers - just complete access to all features.'
  },
  {
    question: 'Will my progress sync across devices?',
    answer: 'Absolutely! Your progress, bookmarks, notes, and preferences automatically sync across all your devices. Start studying on your phone and continue on your tablet seamlessly.'
  },
  {
    question: 'How fast is the doubt clearing?',
    answer: 'Most doubts are cleared within 2-5 minutes during active hours. Even during off-hours, you\'ll typically get a response within 30 minutes from our 24/7 support team.'
  },
  {
    question: 'Can I use the app without internet?',
    answer: 'Yes! Download lectures, notes, and study materials when you have internet, then access them offline anytime. Perfect for studying on the go.'
  }
];

export default function AppInfoModal({ isOpen, onClose, onNotifyClick }: AppInfoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn" onClick={onClose}>
      <div
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white p-8 rounded-t-3xl z-10 shadow-lg">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl">
              <Smartphone className="w-8 h-8 text-rose-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">The Advanced Learning Academy App</h2>
              <p className="text-white/90 text-lg">Your Success, Always With You</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Transform Your Learning Experience</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              The Advanced Learning Academy mobile app is designed to give you complete control over your learning journey.
              Study smarter, not harder, with tools built specifically for competitive exam preparation. Join thousands of
              students who are already preparing for success with 24/7 access to expert guidance and comprehensive study materials.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Powerful Features Designed For You</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {detailedFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-100 hover:shadow-rose-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-10 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-100">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Students Love Our App</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-lg mb-2 text-gray-900">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Learning?</h3>
            <p className="text-white/90 mb-6 text-lg">
              Be among the first to experience the future of exam preparation.
              Sign up now to get notified when we launch!
            </p>
            <button
              onClick={onNotifyClick}
              className="bg-white text-rose-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Early Access Notification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
