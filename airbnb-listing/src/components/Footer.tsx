"use client";

import { Globe } from "lucide-react";

export default function Footer() {
  const sections = [
    {
      title: "Support",
      links: [
        "Help Centre",
        "AirCover",
        "Anti-discrimination",
        "Disability support",
        "Cancellation options",
        "Report neighbourhood concern",
      ],
    },
    {
      title: "Hosting",
      links: [
        "Airbnb your home",
        "AirCover for Hosts",
        "Hosting resources",
        "Community forum",
        "Hosting responsibly",
        "Join a free Hosting class",
      ],
    },
    {
      title: "Airbnb",
      links: [
        "Newsroom",
        "New features",
        "Careers",
        "Investors",
        "Airbnb.org emergency stays",
      ],
    },
  ];

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 lg:px-0">
        {/* Link Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-b border-gray-200">
          {sections.map((section, i) => (
            <div key={i}>
              <h3 className="font-semibold text-sm mb-3">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>&copy; 2026 Airbnb, Inc.</span>
            <span>·</span>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <span>·</span>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <span>·</span>
            <a href="#" className="hover:underline">
              Sitemap
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <button className="flex items-center gap-2 font-semibold">
              <Globe className="w-4 h-4" />
              English (GB)
            </button>
            <button className="font-semibold">£ GBP</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
