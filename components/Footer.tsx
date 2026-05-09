import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-16 mt-20 bg-[#0a0a0a] border-t border-[#2c2c2c]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 max-w-7xl mx-auto text-center md:text-left">

        {/* Logo + About */}
        <div>
          <div className="flex justify-center md:justify-start mb-6">
            <Image
              src="/logo.webp"
              alt="APPEXE DEVELOPMENTS"
              width={135}
              height={55}
              className="object-contain"
            />
          </div>

          <p className="text-sm text-gray-400 max-w-xs mx-auto md:mx-0">
            Your premier partner in structural engineering and premium property development.
            Registered in England & Wales.
          </p>
        </div>

        {/* Headquarters */}
        <div className="space-y-4">
          <span className="font-semibold text-sm uppercase text-gray-300">
            Headquarters
          </span>
          <p className="text-sm text-gray-400 leading-relaxed">
            FLAT 1, 118 GREENGATES STREET<br />
            STOKE-ON-TRENT, ST6 6DE
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <span className="font-semibold text-sm uppercase text-gray-300">
            Contact
          </span>

          <a
            className="block text-sm text-orange-400 hover:underline decoration-orange-400 underline-offset-4"
            href="mailto:sales@appexedevelopments.co.uk"
          >
            sales@appexedevelopments.co.uk
          </a>

          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <span className="material-symbols-outlined text-gray-500 cursor-pointer hover:text-orange-400 transition-colors">
              language
            </span>
            <span className="material-symbols-outlined text-gray-500 cursor-pointer hover:text-orange-400 transition-colors">
              location_on
            </span>
            <span className="material-symbols-outlined text-gray-500 cursor-pointer hover:text-orange-400 transition-colors">
              verified_user
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-[#2c2c2c] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="text-sm text-gray-500">
          © 2026 APPEXE DEVELOPMENTS LTD. All rights reserved.
        </p>
        <p className="text-sm text-gray-500">
          Designed by{" "}
          <a
            href="https://linkedo.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:underline decoration-orange-400 underline-offset-4"
          >
            Linkedo
          </a>
        </p>
      </div>
    </footer>
  );
}