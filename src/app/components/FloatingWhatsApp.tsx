import { motion } from "motion/react";
import { whatsappChatUrl, WHATSAPP_NUMBER } from "../../config/whatsapp";

function WhatsAppGlyph({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M16 3C8.82 3 3 8.82 3 16c0 2.3.61 4.55 1.76 6.52L3.2 28.8l6.5-1.7A12.9 12.9 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.5c-2.05 0-4.05-.54-5.8-1.56l-.41-.24-3.86 1.01 1.03-3.76-.27-.43A10.45 10.45 0 0 1 5.5 16c0-5.8 4.7-10.5 10.5-10.5S26.5 10.2 26.5 16 21.8 26.5 16 26.5zm5.72-7.86c-.31-.16-1.84-.91-2.13-1.01-.28-.11-.49-.16-.7.16-.21.31-.81 1.01-.99 1.22-.18.21-.37.23-.68.08-.31-.16-1.31-.48-2.5-1.54-.92-.82-1.55-1.84-1.73-2.15-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.7-1.69-.96-2.32-.25-.61-.51-.53-.7-.54h-.6c-.21 0-.55.08-.83.39-.29.31-1.09 1.07-1.09 2.6 0 1.54 1.12 3.02 1.27 3.23.16.21 2.2 3.36 5.33 4.71.75.32 1.33.51 1.78.66.75.24 1.43.2 1.97.12.6-.09 1.84-.75 2.1-1.48.26-.72.26-1.34.18-1.48-.07-.13-.28-.21-.59-.37z" />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  const href = whatsappChatUrl(
    "Hi 3G Decorative Group — I’d like to discuss a project.",
    WHATSAPP_NUMBER,
  );

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsAppGlyph />
    </motion.a>
  );
}
