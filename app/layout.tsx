import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify Revenue Leak Detector – Find Hidden Revenue Losses",
  description:
    "Analyze your Shopify store to detect revenue leaks from failed payments, cart abandonment, and checkout friction. Get actionable fix recommendations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="7b3e0f6c-97fa-4c2f-9d3d-9b75641849c1"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
