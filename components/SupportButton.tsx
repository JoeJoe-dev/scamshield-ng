'use client';

export function SupportButton() {
  return (
    <button
      onClick={() => alert("Email: support@scamshield.ng\nWhatsApp: +234 800 SHIELD")}
      className="w-full bg-navy-gradient text-white font-bold py-4 rounded-2xl font-display hover:opacity-90"
    >
      Contact Support
    </button>
  );
}
