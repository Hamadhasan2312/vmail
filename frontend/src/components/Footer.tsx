import { Link } from "react-router-dom";
import MailIcon from "./icons/MailIcon.tsx"; // Sirf Email Icon chahiye

/**
 * The website footer component
 */
export function Footer() {
  return (
    <div className="text-white w-full mt-auto flex flex-col items-center justify-between px-5 pt-16 mb-10 md:px-10 mx-auto sm:flex-row">
      
      {/* 1. BRANDING LOGO/TEXT */}
      <Link to="/" className="text-xl font-black leading-none select-none logo hover:text-cyan-400">
        TMAILS.ONLINE {/* Changed VMAIL.DEV to TMAILS.ONLINE */}
      </Link>{" "}
      
      {/* 2. COPYRIGHT AND AUTHOR */}
      <p className="mt-4 text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
        © 2025 Hamad Hassan | Powered by 
        <a
          className="font-semibold underline hover:text-cyan-400"
          href="https://tmails.online" // Updated link
          target="_blank"
          rel="noopener noreferrer"
        >
          Tmails
        </a>
      </p>
      
      {/* 3. SOCIAL ICONS (Only Email Kept) */}
      <div className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
        <a
          href="mailto:hmdhsn5555@gmail.com" // Updated to user's contact email
          title="Email Contact"
          className="text-gray-400 hover:text-cyan-400"
        >
          <MailIcon className="w-6 h-6" />
        </a>
        {/* Twitter, GitHub, WrdoLogo are REMOVED */}
      </div>
    </div>
  );
}
