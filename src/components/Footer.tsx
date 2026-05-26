export default function Footer({ locale }: { locale: "ko" | "en" }) {
  const t = locale === "ko"
    ? { tag: "에이전트 협업 거버넌스 플랫폼", made: "by STIS Co., Ltd.", rights: "All rights reserved.", contact: "문의" }
    : { tag: "Agent Collaboration Governance Platform", made: "by STIS Co., Ltd.", rights: "All rights reserved.", contact: "Contact" };
  return (
    <footer className="border-t border-maru-100 mt-24 bg-white/60">
      <div className="container-narrow py-10 grid md:grid-cols-3 gap-6 text-sm text-maru-900/70">
        <div>
          <div className="font-semibold text-maru-900">MARU</div>
          <div className="mt-1">{t.tag}</div>
        </div>
        <div>
          <div className="font-semibold text-maru-900">{t.contact}</div>
          <div className="mt-1">okt@stis.co.kr</div>
        </div>
        <div className="md:text-right">
          <div>{t.made}</div>
          <div className="mt-1">© 2026 STIS Co., Ltd. {t.rights}</div>
        </div>
      </div>
    </footer>
  );
}
