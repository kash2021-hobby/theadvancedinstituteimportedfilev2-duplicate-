import { Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import CallbackModal from './CallbackModal';
import ChatBot from './ChatBot';

export default function StickyContactBar() {
  const [showCallbackModal, setShowCallbackModal] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white shadow-2xl border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <button
              onClick={() => setShowCallbackModal(true)}
              className="flex items-center justify-center gap-2 bg-[#0066FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0052CC] transition-all shadow-md hover:shadow-lg"
            >
              <div className="bg-white rounded-full p-1.5">
                <Phone className="w-4 h-4 text-[#0066FF]" />
              </div>
              <span>Request a Callback</span>
            </button>

            <a
              href="tel:1800-212-7688"
              className="flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all border-2 border-gray-200"
            >
              <div className="bg-[#0066FF] rounded-full p-1.5">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <span className="hidden sm:inline">Call us on </span>
              <span className="font-bold">1800-212-7688</span>
            </a>

            <button
              onClick={() => setShowChatBot(true)}
              className="flex items-center justify-center gap-2 bg-[#0066FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0052CC] transition-all shadow-md hover:shadow-lg"
            >
              <div className="bg-white rounded-full p-1.5">
                <MessageCircle className="w-4 h-4 text-[#0066FF]" />
              </div>
              <span>Live Chat</span>
            </button>
          </div>
        </div>
      </div>

      <CallbackModal
        isOpen={showCallbackModal}
        onClose={() => setShowCallbackModal(false)}
      />

      <ChatBot
        isOpen={showChatBot}
        onClose={() => setShowChatBot(false)}
      />
    </>
  );
}
