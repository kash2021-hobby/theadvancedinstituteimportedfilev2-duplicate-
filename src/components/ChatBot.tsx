import { X, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatBot({ isOpen, onClose }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to The Advanced Learning Academy. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickReplies = [
    "Course information",
    "Batch timings",
    "Fee structure",
    "Contact details"
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputMessage('');

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 800);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes('course') || input.includes('program')) {
      return "We offer specialized coaching for RRB NTPC, SSC CGL, SSC CHSL, and Banking exams. Which course are you interested in?";
    } else if (input.includes('batch') || input.includes('timing')) {
      return "We have both weekday and weekend batches available. Classes are conducted 3 days per week. Would you like to book a free demo class?";
    } else if (input.includes('fee') || input.includes('price') || input.includes('cost')) {
      return "Our course fees vary by program. Please call us at 1800-212-7688 or request a callback for detailed fee structure and current offers.";
    } else if (input.includes('contact') || input.includes('location') || input.includes('address')) {
      return "We're located in Guwahati. You can reach us at 1800-212-7688 or submit your details for a callback. Our team will contact you within 24 hours.";
    } else if (input.includes('demo') || input.includes('trial')) {
      return "Yes! We offer free demo classes. Please provide your contact details, and we'll schedule a demo for you.";
    } else {
      return "Thank you for your message. For detailed information, please call us at 1800-212-7688 or request a callback. Our team will be happy to assist you!";
    }
  };

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-4 z-50 w-full max-w-sm transform transition-all animate-slideUp">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-[#0066FF] to-[#0052CC] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-2">
              <MessageCircle className="w-5 h-5 text-[#0066FF]" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Live Chat</h3>
              <p className="text-white/80 text-xs">We typically reply instantly</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="h-96 overflow-y-auto p-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.sender === 'user'
                    ? 'bg-[#0066FF] text-white rounded-br-sm'
                    : 'bg-white text-gray-900 rounded-bl-sm shadow-sm'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 bg-white p-3">
          <div className="flex gap-2 mb-3 overflow-x-auto">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => handleQuickReply(reply)}
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-full whitespace-nowrap transition-colors"
              >
                {reply}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent text-sm"
            />
            <button
              onClick={handleSendMessage}
              className="bg-[#0066FF] text-white p-3 rounded-xl hover:bg-[#0052CC] transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
