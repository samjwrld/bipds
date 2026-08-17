import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, AlertCircle } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CertificateModal({ isOpen, onClose }: CertificateModalProps) {
  const [imgSrc, setImgSrc] = useState<string>('/certificate.png');
  const [hasError, setHasError] = useState<boolean>(false);

  // Reset image state when modal opens
  useEffect(() => {
    if (isOpen) {
      setImgSrc('/certificate.png');
      setHasError(false);
    }
  }, [isOpen]);

  // Close on Escape key press and lock background scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  const handleImageError = () => {
    if (imgSrc === '/certificate.png') {
      setImgSrc('/certificate.jpg');
    } else if (imgSrc === '/certificate.jpg') {
      setImgSrc('/certificate.svg');
    } else if (imgSrc === '/certificate.svg') {
      setImgSrc('/certificate.webp');
    } else {
      setHasError(true);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          id="certificate-image-modal"
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-hidden select-none"
        >
          {/* Dark Backdrop - click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* Top Bar Close Button */}
          <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[110] flex items-center gap-3">
            <button
              id="modal-close-top-btn"
              type="button"
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/20 hover:bg-red-600 text-white font-semibold text-sm backdrop-blur-xl border border-white/30 shadow-2xl transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 group"
              aria-label="Close certificate popup"
            >
              <span>Close</span>
              <div className="w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center">
                <X className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>

          {/* Image Container with Corner Close Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ type: "spring", duration: 0.3, bounce: 0.1 }}
            className="relative z-[105] max-w-[94vw] max-h-[88vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prominent Corner Close Button on image frame */}
            <button
              id="modal-close-corner-btn"
              type="button"
              onClick={onClose}
              className="absolute -top-3.5 -right-3.5 sm:-top-4 sm:-right-4 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900 text-white hover:bg-red-600 border-2 border-white/80 shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
              title="Close (Esc)"
              aria-label="Close certificate image"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.5]" />
            </button>

            {!hasError ? (
              <img
                id="certificate-popup-img"
                src={imgSrc}
                alt="Govt Recognized IPR Certificate"
                onError={handleImageError}
                className="max-h-[84vh] max-w-[90vw] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/20 bg-slate-900/60"
              />
            ) : (
              <div className="bg-slate-900/95 border border-white/20 text-white p-8 rounded-3xl text-center max-w-md shadow-2xl backdrop-blur-xl">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4 border border-amber-500/30">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Govt. Recognized IPR Certificate</h3>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  Image path configured:
                </p>
                <div className="font-mono text-xs bg-slate-950 p-3 rounded-xl border border-white/10 text-emerald-400 mb-5 text-center font-semibold">
                  /public/certificate.png
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 font-semibold text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
