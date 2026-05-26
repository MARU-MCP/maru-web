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
            SI 산업<br/>
            <span className="text-maru-600">거버넌스-퍼스트 자율협업 플랫폼</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-maru-900/75 max-w-2xl">
            <strong>표준화된 작업지시 · 프로토콜 강제주입 · 콘텍스트 드리프트 최소화 · 임의 중단 불가 거버넌스</strong>로
            에이전트들이 자율 협업하되 <strong>정량적 KPI (재현율 + 요구충족율)</strong>로 완결성을 보장합니다.
            각 PL이 자신의 PMO 에이전트 + 협업 인스턴스를 운영하고, PL-to-PL 상위 협업으로 SI 프로젝트 전체를 진행합니다.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-md bg-maru-600 text-white font-medium hover:bg-maru-900 transition">상담 요청</a>
            <a href="#features" className="px-5 py-3 rounded-md border border-maru-100 text-maru-900 hover:border-maru-400 hover:text-maru-600 transition">특징 살펴보기</a>
          </div>
        </div>
      </section>

      {/* 4 Governance Principles */}
      <section id="features" className="bg-white">
        <div className="container-narrow py-20">
          <div className="text-xs tracking-widest text-maru-600 uppercase mb-2">GOVERNANCE PRINCIPLES</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-maru-900">4대 거버넌스 원칙</h2>
          <p className="mt-3 text-maru-900/70 max-w-2xl">에이전트의 자율성과 결정의 일관성을 동시에 보장하는 원칙 체계.</p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="p-7 rounded-xl border border-maru-100 bg-maru-50/40">
              <div className="text-sm font-semibold text-maru-600">01</div>
              <h3 className="mt-2 text-lg font-semibold text-maru-900">표준화 작업지시</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                Canonical 16-field envelope + WO type vocabulary + posting_ref 규율.
                <strong>지시의 형식</strong>을 표준화해 해석 편차를 차단합니다.
              </p>
            </div>
            <div className="p-7 rounded-xl border border-maru-100 bg-maru-50/40">
              <div className="text-sm font-semibold text-maru-600">02</div>
              <h3 className="mt-2 text-lg font-semibold text-maru-900">프로토콜 강제주입</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                Bootstrap 매 사이클 재주입 + canonical_rule_refs + Ralph guardrails.
                역할별 원칙과 금지 행위가 <strong>매번 새로 주입</strong>되어 드리프트 누적을 차단합니다.
              </p>
            </div>
            <div className="p-7 rounded-xl border border-maru-100 bg-maru-50/40">
              <div className="text-sm font-semibold text-maru-600">03</div>
              <h3 className="mt-2 text-lg font-semibold text-maru-900">콘텍스트 드리프트 최소화</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                Closure honesty 규율 + 명시적 상태 어휘 + 14가지 금지 행위.
                과대 주장과 우회 행동을 <strong>명시적으로 차단</strong>합니다.
              </p>
            </div>
            <div className="p-7 rounded-xl border border-maru-100 bg-maru-50/40">
              <div className="text-sm font-semibold text-maru-600">04</div>
              <h3 className="mt-2 text-lg font-semibold text-maru-900">임의 중단 불가 거버넌스</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                상태 머신 무결성 + chain custody (chain_id / parent_message_id / correlation_id) + lease TTL + retry budget.
                <strong>중도 이탈을 구조적으로 차단</strong>합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Soft + Hard Assets */}
      <section className="bg-maru-50/40">
        <div className="container-narrow py-20">
          <div className="text-xs tracking-widest text-maru-600 uppercase mb-2">CORE ASSETS</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-maru-900">Soft + Hard 자산 체계</h2>
          <p className="mt-3 text-maru-900/70 max-w-2xl">Hard 자산이 인프라 골격이라면, Soft 자산은 거버넌스의 행동 규약입니다.</p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-7 rounded-xl border border-maru-100">
              <h3 className="text-lg font-semibold text-maru-900">Soft 자산 — 행동 규약 (7)</h3>
              <ol className="mt-4 space-y-2 text-sm text-maru-900/80 list-decimal list-inside">
                <li>역할별 부트스트랩 (per-role bootstrap)</li>
                <li>프로토콜 주입 (protocol injection)</li>
                <li>작업지시서 템플릿 (work-order template)</li>
                <li>적합성 보장 (compliance assurance)</li>
                <li>요구사항 전달방식 (requirements transmission)</li>
                <li>결과산출 가이드 (deliverable production guide)</li>
                <li>참조정보 제공방식 (reference info provision)</li>
              </ol>
              <p className="mt-4 text-xs text-maru-900/60">V1.2에서 본격 강화 (Soft Asset Strengthening)</p>
            </div>
            <div className="bg-white p-7 rounded-xl border border-maru-100">
              <h3 className="text-lg font-semibold text-maru-900">Hard 자산 — 인프라 (3)</h3>
              <ul className="mt-4 space-y-3 text-sm text-maru-900/80">
                <li><strong className="text-maru-600">플랫폼 계층모델</strong> — 5-role topology (owner / sec / lab / dev / mgmt / stew) + worker runtime</li>
                <li><strong className="text-maru-600">메시지박스</strong> — PG-backed canonical 상태 머신 + 감사 로그</li>
                <li><strong className="text-maru-600">워크트리</strong> — work_items 상태 머신 + chain context</li>
              </ul>
              <p className="mt-4 text-xs text-maru-900/60">V1.1에서 production-verified</p>
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
          <p className="mt-3 text-maru-900/70 max-w-2xl">초기 vertical은 인터넷 전자상거래; 의료·공공·금융 등은 V1.5+ 산업팩으로 확장 예정.</p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-7 rounded-xl border-2 border-maru-600 bg-maru-50/40">
              <div className="inline-block text-[10px] tracking-widest text-maru-600 uppercase bg-white px-2 py-0.5 rounded">PRIMARY · V1.x</div>
              <h3 className="mt-3 text-lg font-semibold text-maru-900">전자상거래</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                대규모 SI 통합 · 운영 자동화. 카탈로그 · 주문 · 결제 · 정산 전반의
                트랜잭션 정합성. <strong>구현사실 수집용 레거시 시스템 재현 POC</strong>로
                재현율(K8) + 요구충족율(K9) 기준선을 측정합니다.
              </p>
              <p className="mt-3 text-xs text-maru-900/60">규제: PCI DSS · 한국 PIPA / GDPR · 5-10년 감사 보유</p>
            </div>
            <div className="p-7 rounded-xl border border-maru-100 opacity-80">
              <div className="inline-block text-[10px] tracking-widest text-maru-900/50 uppercase bg-maru-100 px-2 py-0.5 rounded">V1.5+ 산업팩</div>
              <h3 className="mt-3 text-lg font-semibold text-maru-900">의료 정보 / 금융</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                EMR · LIS · PACS / 금융 결제·정산 등 다중 시스템 간 사실 수집과
                감사 추적이 <strong>의무</strong>인 영역. 컴플라이언스 팩과 함께
                V1.5+에서 정식 지원.
              </p>
            </div>
            <div className="p-7 rounded-xl border border-maru-100 opacity-80">
              <div className="inline-block text-[10px] tracking-widest text-maru-900/50 uppercase bg-maru-100 px-2 py-0.5 rounded">V1.5+ 산업팩</div>
              <h3 className="mt-3 text-lg font-semibold text-maru-900">공공 · 제조</h3>
              <p className="mt-3 text-sm text-maru-900/70 leading-relaxed">
                공공기관 SI · SM 사업의 거버넌스 요건 (감사 · 보안 · 변경관리) /
                제조 SI 등 산업별 컴플라이언스가 핵심인 영역.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="bg-maru-50/60">
        <div className="container-narrow py-20">
          <div className="text-xs tracking-widest text-maru-600 uppercase mb-2">ROADMAP</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-maru-900">V1.0 → V2.0 트랙</h2>
          <p className="mt-3 text-maru-900/70 max-w-2xl">단일 에이전트 거버넌스 기반에서 시작해 산업팩 + 커머셜 릴리스까지 단계적 진행.</p>

          <div className="mt-12 space-y-4">
            {[
              { v: "V1.0", mark: "DECLARED", desc: "단일 에이전트 거버넌스 기반 (Pillar 7a · lab-solo)" },
              { v: "V1.1", mark: "CURRENT", desc: "멀티 에이전트 협업 production 기반 (Pillar 7b MET · Ralph · 하드 자산 production-verified · 소프트 자산 v1 baseline)" },
              { v: "V1.2", mark: "~3-4개월", desc: "소프트 자산 강화 (7항) · K9 요구충족율 측정 프레임워크 · POC 완료 · 첫 고객 레퍼런스 증거" },
              { v: "V1.5", mark: "~6개월", desc: "전자상거래 산업팩 (PCI DSS · PIPA · 주문 라이프사이클 어휘 · compliance officer 워커 함수) · PL 대시보드" },
              { v: "V2.0", mark: "~9-12개월", desc: "커머셜 릴리스 · 가격/과금 모델 · SLA · 감사/컴플라이언스 인증 · PMO Console hosted" },
              { v: "V2.x", mark: "future", desc: "금융 / 의료 / 제조 산업팩 · 파트너 생태계" },
            ].map((r) => (
              <div key={r.v} className="flex items-start gap-4 p-5 bg-white rounded-lg border border-maru-100">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="text-lg font-semibold text-maru-600">{r.v}</div>
                  <div className="text-[10px] tracking-widest text-maru-900/60 mt-1">{r.mark}</div>
                </div>
                <div className="flex-1 text-sm text-maru-900/80 pt-1">{r.desc}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-maru-900/60">* 시점은 추정이며 commitment 아님. 모든 인식·재현·요구충족 KPI는 인스턴스별 측정 결과로 대체됩니다.</p>
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
              <div className="text-xs text-white/50 tracking-wide mb-3">KPI 프레임워크 — K1 to K10</div>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-white/90 font-semibold">K1-K7 · 데몬 자율성 + 안정성</div>
                  <div className="text-xs text-white/60 mt-1">왕복지연 · 에스컬레이션율 · 체인 무결성 · idempotency · iteration 완료율</div>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <div className="text-white/90 font-semibold">K8 · 재현율 <span className="text-xs text-white/60">(V1.2+)</span></div>
                  <div className="text-xs text-white/60 mt-1">동일 입력 → 동일 출력 일관성 · 목표 &gt;90% (V2.0)</div>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <div className="text-white/90 font-semibold">K9 · 요구충족율 <span className="text-xs text-white/60">(V1.2+)</span></div>
                  <div className="text-xs text-white/60 mt-1">원본 요구사항 addressed 비율 · <strong>SI 산업 기준 &gt;95%</strong></div>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <div className="text-white/90 font-semibold">K10 · 자동 거버넌스 enforcement <span className="text-xs text-white/60">(V1.2+)</span></div>
                  <div className="text-xs text-white/60 mt-1">KPI 미달 → 자동 retry / escalation · manual intervention zero</div>
                </div>
              </div>
              <p className="text-[11px] text-white/40 mt-4">* KPI 측정은 인스턴스별 baseline 후 산출됩니다.</p>
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
