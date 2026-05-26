import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function HomeKo() {
  return (
    <>
      <Nav locale="ko" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-maru-50 to-white">
        <div className="container-narrow py-20 md:py-28">
          <div className="text-xs tracking-widest text-maru-600 uppercase mb-4">MARU · v1.1</div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-maru-900 leading-tight">
            에이전트 협업<br/>
            <span className="text-maru-600">거버넌스 플랫폼</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-maru-900/75 max-w-2xl">
            시스템 사실(fact) 수집과 정교한 가이드에 따른 <strong>목표지향적 협업</strong>을 지원합니다.
            SI · SM 등 산업적 활용을 목적으로 개발된 멀티 에이전트 거버넌스 플랫폼.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-md bg-maru-600 text-white font-medium hover:bg-maru-900 transition">상담 요청</a>
            <a href="#features" className="px-5 py-3 rounded-md border border-maru-100 text-maru-900 hover:border-maru-400 hover:text-maru-600 transition">특징 살펴보기</a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white">
        <div className="container-narrow py-20">
          <div className="text-xs tracking-widest text-maru-600 uppercase mb-2">FEATURES</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-maru-900">목표지향적 협업의 3가지 핵심</h2>
          <p className="mt-3 text-maru-900/70 max-w-2xl">에이전트가 추측이 아니라 <strong>증거</strong> 위에서 의사결정합니다.</p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-7 rounded-xl border border-maru-100 bg-maru-50/40">
              <div className="w-10 h-10 rounded-md bg-maru-600/10 flex items-center justify-center text-maru-600 font-bold">F</div>
              <h3 className="mt-5 text-lg font-semibold text-maru-900">시스템 사실 수집</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                코드 · 인프라 · 운영 데이터 등 <strong>현장의 사실</strong>을 자동 수집해
                에이전트가 추측 없이 작업하도록 합니다.
              </p>
            </div>
            <div className="p-7 rounded-xl border border-maru-100 bg-maru-50/40">
              <div className="w-10 h-10 rounded-md bg-maru-600/10 flex items-center justify-center text-maru-600 font-bold">G</div>
              <h3 className="mt-5 text-lg font-semibold text-maru-900">정교한 가이드</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                역할별 워크플로우 · 안전장치 · 의사결정 게이트로
                <strong>경로를 좁혀</strong> 일관된 산출을 만들어냅니다.
              </p>
            </div>
            <div className="p-7 rounded-xl border border-maru-100 bg-maru-50/40">
              <div className="w-10 h-10 rounded-md bg-maru-600/10 flex items-center justify-center text-maru-600 font-bold">C</div>
              <h3 className="mt-5 text-lg font-semibold text-maru-900">증거 기반 협업</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                모든 의사결정 · 산출은 <strong>감사 가능한 증거</strong>로 결박되어
                협업 효과를 추적·증빙합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="bg-maru-50/60">
        <div className="container-narrow py-20">
          <div className="text-xs tracking-widest text-maru-600 uppercase mb-2">ARCHITECTURE</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-maru-900">개략 아키텍처</h2>

          <div className="grid md:grid-cols-2 gap-10 mt-12 items-start">
            <div>
              <h3 className="text-xl font-semibold text-maru-900">5-Role Canonical Model</h3>
              <ul className="mt-5 space-y-3 text-sm text-maru-900/80">
                <li><strong className="text-maru-600">owner</strong> — 비가역 의사결정 · 최종 권한</li>
                <li><strong className="text-maru-600">sec</strong> — PMO · 디스패치 · 검토 · 협업 효과 증빙</li>
                <li><strong className="text-maru-600">lab</strong> — 프레임워크 · 협업 검증 · 사실 추출</li>
                <li><strong className="text-maru-600">dev</strong> — 구현 사실 · 코드 경로 · 스모크</li>
                <li><strong className="text-maru-600">mgmt</strong> — 운영 · 배포 · 인프라 증거</li>
                <li><strong className="text-maru-600">stew</strong> — 문서 · 상태 · 거버넌스 일관성</li>
              </ul>
              <p className="mt-6 text-sm text-maru-900/70">
                각 역할은 정해진 메일박스 · 상태 머신 · 게이트 위에서 협업합니다.
                무엇이 가능하고 무엇이 금지되는지 <strong>명시적으로 선언</strong>됩니다.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-maru-100 p-6">
              <div className="text-xs text-maru-900/50 tracking-wide mb-3">고객 1인스턴스 (PL 운영)</div>
              <pre className="text-[12px] leading-relaxed text-maru-900/85 overflow-x-auto">{`PL (고객 측 프로젝트 리더)
   │
   └─→ MARU 인스턴스 (vendor 호스팅)
         ├─ owner / sec / lab / dev / mgmt / stew
         ├─ 메일박스 + 상태 머신 + 감사 로그
         ├─ Anthropic API (고객 키 / KV 보관)
         └─ 산출물 → 고객 GitHub 리포

         ↑
         vendor 컨설팅 · 호스팅 · 캐노니컬 업데이트`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="bg-white">
        <div className="container-narrow py-20">
          <div className="text-xs tracking-widest text-maru-600 uppercase mb-2">INDUSTRIES</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-maru-900">적용 분야</h2>
          <p className="mt-3 text-maru-900/70 max-w-2xl">사실 기반 협업이 강하게 요구되는 산업 영역에서 우선 활용 가능합니다.</p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-7 rounded-xl border border-maru-100">
              <h3 className="text-lg font-semibold text-maru-900">전자상거래</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                대규모 시스템 통합 · 운영 자동화. 카탈로그 · 주문 · 결제 · 정산
                전반의 정합성을 사실 기반 에이전트가 모니터링·중재.
              </p>
            </div>
            <div className="p-7 rounded-xl border border-maru-100">
              <h3 className="text-lg font-semibold text-maru-900">의료 정보</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                EMR · LIS · PACS 등 다중 시스템 간 사실 수집과 감사 추적이
                <strong>의무</strong>인 영역. 모든 산출은 증거로 결박.
              </p>
            </div>
            <div className="p-7 rounded-xl border border-maru-100">
              <h3 className="text-lg font-semibold text-maru-900">공공 서비스</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                공공기관 SI · SM 사업의 거버넌스 요건 (감사 · 보안 · 변경관리)에
                직결되는 의사결정 게이트와 증거 운영.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence (sec validation) */}
      <section id="evidence" className="bg-maru-900 text-white">
        <div className="container-narrow py-20">
          <div className="text-xs tracking-widest text-maru-400 uppercase mb-2">COLLABORATION EVIDENCE</div>
          <h2 className="text-3xl md:text-4xl font-semibold">sec가 협업 효과를 증빙합니다</h2>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <p className="text-white/80 leading-relaxed">
                MARU는 모든 dispatch · 작업 · 산출 · 게이트 전환에 <strong className="text-white">감사 가능한 증거</strong>를 결박합니다.
                sec 역할은 이 증거 위에서 협업의 효과 (속도 · 정확도 · 일관성 · 비용)를
                정기적으로 측정·보고합니다.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/70 list-disc list-inside">
                <li>모든 메시지에 request_id · audit_event_id 결박</li>
                <li>역할 권한 경계 + 금지 행위 명시적 선언</li>
                <li>cycle별 evidence package 자동 생성</li>
                <li>owner 게이트 통과 이력 추적</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <div className="text-xs text-white/50 tracking-wide mb-3">증빙 효과 (예시)</div>
              <div className="grid grid-cols-2 gap-4">
                <div><div className="text-3xl font-semibold">3-5×</div><div className="text-xs text-white/60 mt-1">에이전트 협업으로 산출 속도</div></div>
                <div><div className="text-3xl font-semibold">100%</div><div className="text-xs text-white/60 mt-1">감사 가능한 증거 결박</div></div>
                <div><div className="text-3xl font-semibold">0건</div><div className="text-xs text-white/60 mt-1">목표 외 산출 (가이드 강제)</div></div>
                <div><div className="text-3xl font-semibold">실시간</div><div className="text-xs text-white/60 mt-1">상태/게이트 가시화</div></div>
              </div>
              <p className="text-[11px] text-white/40 mt-4">* 수치는 예시이며 실제는 인스턴스별 측정 결과로 대체됩니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Model */}
      <section className="bg-white">
        <div className="container-narrow py-20">
          <div className="text-xs tracking-widest text-maru-600 uppercase mb-2">SERVICE MODEL</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-maru-900">호스팅 + 컨설팅</h2>
          <p className="mt-3 text-maru-900/70 max-w-2xl">PL이 하나의 협업 인스턴스를 운영하고, 상위에서는 vendor가 컨설팅과 호스팅을 함께 제공합니다.</p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="p-7 rounded-xl border border-maru-100 bg-maru-50/40">
              <h3 className="text-lg font-semibold text-maru-900">고객이 보유</h3>
              <ul className="mt-4 space-y-2 text-sm text-maru-900/80 list-disc list-inside">
                <li>Anthropic API 키</li>
                <li>GitHub 산출 리포</li>
                <li>인스턴스 owner 권한 (의사결정 게이트)</li>
                <li>도메인 정책 · 협업 결정</li>
              </ul>
            </div>
            <div className="p-7 rounded-xl border border-maru-100 bg-maru-50/40">
              <h3 className="text-lg font-semibold text-maru-900">vendor가 제공</h3>
              <ul className="mt-4 space-y-2 text-sm text-maru-900/80 list-disc list-inside">
                <li>Azure 호스팅 (전 리소스 운영)</li>
                <li>canonical 템플릿 · 업데이트</li>
                <li>역할별 프로토콜 · 안전장치</li>
                <li>도입·운영 컨설팅</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-br from-maru-600 to-maru-900 text-white">
        <div className="container-narrow py-20">
          <div className="text-xs tracking-widest text-white/60 uppercase mb-2">CONTACT</div>
          <h2 className="text-3xl md:text-4xl font-semibold">상담 요청</h2>
          <p className="mt-3 text-white/80 max-w-2xl">
            도입 검토 · 시범 인스턴스 · 컨설팅 문의를 받습니다. 1영업일 내 회신드립니다.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="mailto:okt@stis.co.kr?subject=MARU+%EB%8F%84%EC%9E%85+%EC%83%81%EB%8B%B4+%EB%AC%B8%EC%9D%98"
               className="px-6 py-3 rounded-md bg-white text-maru-900 font-medium hover:bg-maru-50 transition">
              okt@stis.co.kr 메일 보내기
            </a>
            <a href="https://github.com/MARU-MCP" target="_blank" rel="noreferrer"
               className="px-6 py-3 rounded-md border border-white/30 text-white hover:bg-white/10 transition">
              GitHub: MARU-MCP
            </a>
          </div>
        </div>
      </section>

      <Footer locale="ko" />
    </>
  );
}
