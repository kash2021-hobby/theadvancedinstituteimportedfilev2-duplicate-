import { useState, useEffect } from 'react';
import { GraduationCap, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { SpecialLectureCard } from './SpecialLectureCard';
import { CallbackModal } from './CallbackModal';
import { supabase } from '../lib/supabase';

interface SpecialLecture {
  id: string;
  expert_name: string;
  expert_title: string;
  expert_credentials: string;
  expert_image_url?: string;
  topic: string;
  description: string;
  key_takeaways: string[];
  lecture_date?: string;
  duration_minutes: number;
  is_upcoming: boolean;
  is_featured: boolean;
  available_online: boolean;
  registration_url?: string;
}

export function SpecialLecturesSection() {
  const [featuredLectures, setFeaturedLectures] = useState<SpecialLecture[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showCallbackModal, setShowCallbackModal] = useState(false);
  const [selectedLecture, setSelectedLecture] = useState<SpecialLecture | null>(null);

  useEffect(() => {
    fetchFeaturedLectures();
  }, []);

  const fetchFeaturedLectures = async () => {
    try {
      const { data, error } = await supabase
        .from('special_lectures')
        .select('*')
        .eq('is_featured', true)
        .eq('is_upcoming', true)
        .order('lecture_date', { ascending: true });

      if (error) throw error;
      setFeaturedLectures(data || []);
    } catch (error) {
      console.error('Error fetching special lectures:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? featuredLectures.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === featuredLectures.length - 1 ? 0 : prev + 1));
  };

  const handleRegisterClick = (lecture: SpecialLecture) => {
    setSelectedLecture(lecture);
    setShowCallbackModal(true);
  };

  if (loading) {
    return (
      <section className="py-24 md:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block animate-pulse">
              <GraduationCap className="w-16 h-16 text-amber-500" />
            </div>
            <p className="mt-4 text-gray-600">Loading special lectures...</p>
          </div>
        </div>
      </section>
    );
  }

  if (featuredLectures.length === 0) {
    return null;
  }

  return (
    <>
      <section className="py-24 md:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-amber-500 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent tracking-tight">
                Special Guest Lectures
              </h2>
              <Sparkles className="w-8 h-8 text-amber-500 animate-pulse" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
              Learn from industry leaders and government experts who share their invaluable insights and experiences
            </p>
            <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-amber-200">
                <GraduationCap className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-semibold text-gray-700">Former Government Officials</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-amber-200">
                <GraduationCap className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-semibold text-gray-700">Industry Experts</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-amber-200">
                <GraduationCap className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-semibold text-gray-700">Subject Matter Specialists</span>
              </div>
            </div>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {featuredLectures.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-amber-50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-200 hover:border-amber-400 group md:-translate-x-16"
                  aria-label="Previous lecture"
                >
                  <ChevronLeft className="w-6 h-6 text-amber-600 group-hover:text-amber-700" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-amber-50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-200 hover:border-amber-400 group md:translate-x-16"
                  aria-label="Next lecture"
                >
                  <ChevronRight className="w-6 h-6 text-amber-600 group-hover:text-amber-700" />
                </button>
              </>
            )}

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {featuredLectures.map((lecture) => (
                  <div key={lecture.id} className="w-full flex-shrink-0 px-4">
                    <SpecialLectureCard
                      lecture={lecture}
                      variant="featured"
                      onRegisterClick={() => handleRegisterClick(lecture)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {featuredLectures.length > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {featuredLectures.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 w-8'
                        : 'bg-amber-200 hover:bg-amber-300'
                    }`}
                    aria-label={`Go to lecture ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6 text-lg">
              🎓 <strong>All registered students</strong> get exclusive access to these expert sessions at <strong>no additional cost</strong>
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full border-2 border-amber-300">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <span className="text-amber-900 font-bold">Free for all enrolled students</span>
            </div>
          </div>
        </div>
      </section>

      {showCallbackModal && (
        <CallbackModal
          isOpen={showCallbackModal}
          onClose={() => {
            setShowCallbackModal(false);
            setSelectedLecture(null);
          }}
          title="Register for Special Lecture"
          message={selectedLecture ? `Express your interest in attending: "${selectedLecture.topic}" by ${selectedLecture.expert_name}. Our team will contact you with registration details.` : ''}
        />
      )}
    </>
  );
}
