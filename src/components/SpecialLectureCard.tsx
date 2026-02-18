import { Calendar, Clock, GraduationCap, CheckCircle, Globe } from 'lucide-react';

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

interface SpecialLectureCardProps {
  lecture: SpecialLecture;
  variant?: 'featured' | 'compact';
  onRegisterClick?: () => void;
}

export function SpecialLectureCard({ lecture, variant = 'compact', onRegisterClick }: SpecialLectureCardProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatTime = (dateString?: string) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  if (variant === 'featured') {
    return (
      <div className="bg-gradient-to-br from-white to-amber-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-amber-200 group">
        <div className="relative">
          {lecture.is_upcoming && (
            <div className="absolute top-4 right-4 z-10">
              <span className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Upcoming
              </span>
            </div>
          )}
          <div className="h-72 bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center relative overflow-hidden">
            {lecture.expert_image_url ? (
              <img
                src={lecture.expert_image_url}
                alt={lecture.expert_name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <GraduationCap className="w-32 h-32 text-amber-600 opacity-40" />
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-2xl font-bold text-white mb-1">{lecture.expert_name}</h3>
              <p className="text-amber-200 font-semibold">{lecture.expert_title}</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
            {lecture.topic}
          </h4>

          <p className="text-gray-700 mb-4 leading-relaxed">
            {lecture.description}
          </p>

          {lecture.expert_credentials && (
            <div className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm text-gray-700 italic">{lecture.expert_credentials}</p>
            </div>
          )}

          <div className="space-y-3 mb-6">
            {lecture.lecture_date && (
              <div className="flex items-center gap-3 text-gray-700">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-amber-200">
                  <Calendar className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold">{formatDate(lecture.lecture_date)}</span>
                  {formatTime(lecture.lecture_date) && (
                    <span className="text-gray-500">at {formatTime(lecture.lecture_date)}</span>
                  )}
                </div>
              </div>
            )}

            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5 text-amber-600" />
                <span className="font-medium">{lecture.duration_minutes} minutes</span>
              </div>

              {lecture.available_online && (
                <div className="flex items-center gap-2 px-3 py-1 bg-teal-100 text-teal-700 rounded-full">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-semibold">Available Online</span>
                </div>
              )}
            </div>
          </div>

          {lecture.key_takeaways && lecture.key_takeaways.length > 0 && (
            <div className="mb-6">
              <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-amber-600" />
                Key Takeaways
              </h5>
              <ul className="space-y-2">
                {lecture.key_takeaways.slice(0, 4).map((takeaway, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span className="text-sm">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {lecture.is_upcoming && (
            <button
              onClick={onRegisterClick}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-4 px-6 rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-5 h-5" />
              Register Your Interest
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-100 hover:border-amber-300 group">
      <div className="relative">
        {lecture.is_upcoming && (
          <div className="absolute top-3 right-3 z-10">
            <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow">
              Upcoming
            </span>
          </div>
        )}
        <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center relative overflow-hidden">
          {lecture.expert_image_url ? (
            <img
              src={lecture.expert_image_url}
              alt={lecture.expert_name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <GraduationCap className="w-20 h-20 text-amber-600 opacity-40" />
          )}
        </div>
      </div>

      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
          {lecture.topic}
        </h4>

        <div className="mb-3">
          <p className="text-amber-700 font-semibold">{lecture.expert_name}</p>
          <p className="text-sm text-gray-600">{lecture.expert_title}</p>
        </div>

        <p className="text-gray-700 text-sm mb-4 line-clamp-3 leading-relaxed">
          {lecture.description}
        </p>

        <div className="space-y-2 mb-4">
          {lecture.lecture_date && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4 text-amber-600" />
              <span>{formatDate(lecture.lecture_date)}</span>
            </div>
          )}

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4 text-amber-600" />
            <span>{lecture.duration_minutes} min</span>
            {lecture.available_online && (
              <>
                <span className="text-gray-400">•</span>
                <Globe className="w-4 h-4 text-teal-600" />
                <span className="text-teal-600 font-medium">Online</span>
              </>
            )}
          </div>
        </div>

        {lecture.is_upcoming && (
          <button
            onClick={onRegisterClick}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-3 px-4 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow hover:shadow-lg text-sm"
          >
            Register Interest
          </button>
        )}
      </div>
    </div>
  );
}
