import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MARU — Agent Collaboration Governance Platform",
  description: "에이전트 협업 거버넌스 플랫폼 / Agent Collaboration Governance Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
