import Link from "next/link";

export default function Nav({ locale }: { locale: "ko" | "en" }) {
  const altLocale = locale === "ko" ? "en" : "ko";
  const altLabel = locale === "ko" ? "EN" : "한국어";
  const t = locale === "ko"
    ? { features: "특징", architecture: "아키텍처", industries: "산업 분야", evidence: "협업 증빙", contact: "상담" }
    : { features: "Features", architecture: "Architecture", industries: "Industries", evidence: "Evidence", contact: "Contact" };
  return (
    <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-maru-100">
      <div className="container-narrow flex items-center justify-between py-4">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded bg-gradient-to-br from-maru-400 to-maru-900" />
          <span className="font-semibold tracking-tight">MARU</span>
        </Link>
        <div className="hidden md:flex items-center gap-7 text-sm text-maru-900/80">
          <a href="#features" className="hover:text-maru-900">{t.features}</a>
          <a href="#architecture" className="hover:text-maru-900">{t.architecture}</a>
          <a href="#industries" className="hover:text-maru-900">{t.industries}</a>
          <a href="#evidence" className="hover:text-maru-900">{t.evidence}</a>
          <a href="#contact" className="hover:text-maru-900">{t.contact}</a>
        </div>
        <div className="flex items-center gap-3">
          <Link href={`/${altLocale}`} className="text-xs px-3 py-1.5 rounded border border-maru-100 hover:border-maru-400 hover:text-maru-600 transition">{altLabel}</Link>
          <a href="#contact" className="text-xs px-3 py-1.5 rounded bg-maru-600 text-white hover:bg-maru-900 transition">
            {locale === "ko" ? "상담 요청" : "Request Consultation"}
          </a>
        </div>
      </div>
    </nav>
  );
}
