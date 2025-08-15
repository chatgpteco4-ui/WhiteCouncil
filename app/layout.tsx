// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://whitecouncil.vercel.app"), // update after custom domain
  title: {
    default: "WhiteCouncil — Premium Academic Writing",
    template: "%s | WhiteCouncil",
  },
  description:
    "Discreet, citation-perfect academic writing & editing. Harvard/APA/MLA, finance models, rubric mapping. Built for grades that matter.",
  keywords: [
    "academic writing", "Harvard referencing", "editing", "WIUT", "MDIST",
    "finance models", "portfolio analysis", "report writing", "Tashkent"
  ],
  alternates: {
    canonical: "https://whitecouncil.vercel.app",
  },
  openGraph: {
    type: "website",
    url: "https://whitecouncil.vercel.app",
    siteName: "WhiteCouncil",
    title: "WhiteCouncil — Premium Academic Writing",
    description:
      "Discreet, citation-perfect academic writing & editing. Harvard/APA/MLA, finance models, rubric mapping.",
    images: ["/og.jpg"], // put this file in /public (step 2)
  },
  twitter: {
    card: "summary_large_image",
    title: "WhiteCouncil — Premium Academic Writing",
    description:
      "Discreet, citation-perfect academic writing & editing. Harvard/APA/MLA, finance models, rubric mapping.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* JSON-LD (Organization + Website) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "WhiteCouncil",
              url: "https://whitecouncil.vercel.app",
              logo: "https://whitecouncil.vercel.app/favicon.ico",
              sameAs: [
                "https://t.me/WhiteCouncil"
              ],
              description:
                "Premium academic writing and editing service: Harvard/APA/MLA, finance analysis, rubric mapping."
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}

