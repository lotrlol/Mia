import React, { useEffect } from 'react';
import { CheckCircle, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NotificationProps {
  message: string;
  link?: string;
  isVisible: boolean;
  onClose: () => void;
}

export function Notification({ message, link, isVisible, onClose }: NotificationProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: '100%' }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, x: '100%' }}
          className="fixed bottom-4 right-4 z-50"
        >
          <div className="bg-dark-purple/95 border border-white/10 rounded-lg shadow-lg p-4 flex items-start space-x-3 max-w-md">
            <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-white mb-2">{message}</p>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition-colors inline-flex items-center space-x-1"
                >
                  <span>View page</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}