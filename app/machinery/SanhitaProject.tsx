"use client";

import { useState } from "react";
import { Container } from "@/components/ui";

// Content extracted from "ACHARYA AGRICULTURE SANHITA PROJECT.pdf" and "આચાર્ય એગ્રીકલ્ચર સંહિતા પ્રોજેક્ટ.pdf".
const C = {
  en: {
    eyebrow: "Featured project",
    title: "Acharya Agriculture Sanhita Project",
    tagline: "Shree Sanatan Sanskruti and Sanatan Dharma ki Jay Ho",
    intro:
      "Bharat Varsh was once the golden sparrow of the world. After decades of struggle for independence and many rises and falls since, we can now play our most important role in today's world order — with Sabka Saath, Sabka Vikas and Sabka Vishwas — for Bharat and for the world.",
    shantiTitle: "Three-dimensional shanti",
    shantiText: "Every individual, society, state and nation today needs peace in three dimensions:",
    shanti: [
      ["Aarthik shanti", "Economic peace — 50 to 100 multipliable DPRs for income and enterprise projects."],
      ["Sharirik shanti", "Physical peace — 5D nutrition products and health projects for every age group."],
      ["Manshik shanti", "Mental peace — 27-nakshatra natural farming, village forests, gaushalas and education."],
    ],
    challengesTitle: "Challenges the project sets out to solve",
    challenges: [
      "Socio-economic challenges and per-capita income growth",
      "Small farm holdings and agriculture-related challenges",
      "Sustainable farmer income through the National Natural Farming Mission",
      "Different types of unemployment",
      "Pollution and health-related challenges",
      "Malnutrition, childbirth and pregnancy-related challenges",
      "Development schemes vs. implementation ratio",
      "Raising low-quality base produce to the highest quality",
      "Vikshit village → taluka → district → state → Bharat",
      "Value addition of natural produce through preservation and dehydration",
    ],
    fiveTitle: "5D revolutionary food products",
    fiveText:
      "Made from natural farming inputs, these five powder premixes can be added to any food as a nutrient and taste enhancer. A good protein powder costs ₹2,000–5,000/kg; a 5D supplement can sell at ₹1,000/kg while FPOs and FPCs make it for about ₹300 — leaving ₹700 of margin to create employment.",
    five: [
      "Mix of 15–20 leafy vegetable powders (“atta”)",
      "Mix of 15–20 vegetable powders (“atta”)",
      "Mix of 15–20 sweet fruit powders (premix)",
      "Mix of 15–20 citrus fruit powders (premix)",
      "Essential herbs with kandmool-based powder (premix)",
    ],
    useTitle: "Where 5D products are used",
    uses: [
      "A 5D masala box for every newly married couple",
      "Mid-day meals to remove malnutrition",
      "Nutrient and taste enhancer for the food industry",
      "Army, Navy and Air Force rations",
      "Annakshetra, mandir canteens and bhandaras",
      "Festival gifting and disaster-relief kitchens",
    ],
    chainTitle: "How the model works",
    chain: [
      ["Natural farming FPOs", "Farmers follow the National Natural Farming Mission SOP (Shri Acharya Devvrat ji and the Natural Farming University, Halol), with contract farming on 1,000 acres per FPO."],
      ["FPO / SHG processing", "FPOs, FPCs and women's self-help groups dry produce in small or large units under a common SOP."],
      ["DISA buy-back", "The Dehydration Industries Stakeholders Association (Section 8) buys back semi- or fully-dehydrated products."],
      ["Central processing & marketing", "Central units make 5D and finished products; a sales federation serves domestic and export markets."],
      ["Feedback & R&D", "Testing institutes, R&D centres and customer data feed back into farming and processing."],
    ],
    kamTitle: "Kamdhenu: healthy animals, healthy soil",
    kamText:
      "Human health depends on animal health and soil health. Detoxifying Indian-origin desi cows with natural grazing turns them into 'Kamdhenu' — fresh gobar and gaumutra as live fertilizer that can raise soluble soil carbon by 0.25–1% a year, pure milk for children aged 1–5, and ghee for physical and mental wellbeing. Vacuum freeze-dried gaumutra ark capsules open a ₹5,000 cr OTC opportunity.",
    impactTitle: "₹1,000 cr investment, ₹5,000 cr benefit",
    impact: [
      ["₹1,000 cr", "Agriculture loss converted to farmer income"],
      ["₹1,000 cr", "Employment from food processing expansion"],
      ["₹1,000 cr", "Gross margin selling ₹1,000 cr product at ₹2,000 cr"],
      ["₹1,000 cr", "Health expenses saved by people"],
      ["₹1,000 cr", "Export foreign-exchange earnings"],
    ],
    lossText:
      "India loses about ₹5 lakh crore of fruit, vegetables and other produce every year. Processing even 10% creates ₹50,000 cr of value-added raw material and 5 crore jobs, and can double farmer income in 3 to 5 years.",
    techTitle: "Preservation and drying technology",
    tech: ["Sun & solar drying", "Conveyor belt drying", "Heat-pump food drying", "Vacuum drying", "−50° vacuum freeze drying", "Spray drying"],
    techText:
      "Produce that would be lost within 24–48 hours can be processed — including 2-minute ready-to-eat meals with up to 5 years' shelf life, without preservatives or cold storage.",
    closing: "Jai Hind — towards Viksit Bharat 2047.",
  },
  gu: {
    eyebrow: "મુખ્ય પ્રોજેક્ટ",
    title: "આચાર્ય એગ્રીકલ્ચર સંહિતા પ્રોજેક્ટ",
    tagline: "શ્રી સનાતન સંસ્કૃતિ અને સનાતન ધર્મ કી જય હો",
    intro:
      "ભારતવર્ષ એક સમયે વિશ્વમાં 'સોને કી ચિડિયા' તરીકે ઓળખાતું હતું. આઝાદી માટેના દાયકાઓના સંઘર્ષ અને ત્યાર પછીના અનેક ઉતાર-ચઢાવ બાદ, હવે આપણે 'સૌનો સાથ, સૌનો વિકાસ અને સૌનો વિશ્વાસ' સાથે ભારતવર્ષ તેમજ સમગ્ર વિશ્વ માટે આજની વૈશ્વિક વ્યવસ્થામાં આપણી સૌથી મહત્વપૂર્ણ ભૂમિકા ભજવી શકીએ છીએ.",
    shantiTitle: "ત્રિ-પરિમાણીય શાંતિ",
    shantiText: "આજે દરેક વ્યક્તિ, સમાજ, રાજ્ય અને રાષ્ટ્રને ત્રણ પરિમાણમાં શાંતિની જરૂર છે:",
    shanti: [
      ["આર્થિક શાંતિ", "આવક અને ઉદ્યોગ માટે ૫૦ થી ૧૦૦ વિસ્તરણક્ષમ DPR પ્રોજેક્ટ્સ."],
      ["શારીરિક શાંતિ", "દરેક વયજૂથ માટે 5D પોષક ઉત્પાદનો અને સ્વાસ્થ્ય પ્રોજેક્ટ્સ."],
      ["માનસિક શાંતિ", "૨૭ નક્ષત્ર આધારિત પ્રાકૃતિક ખેતી, ગામ દીઠ નાનું જંગલ, ગૌશાળા અને શિક્ષણ."],
    ],
    challengesTitle: "પ્રોજેક્ટ જે પડકારોનું સમાધાન કરે છે",
    challenges: [
      "સામાજિક-આર્થિક પડકારો અને માથાદીઠ આવકનો વિકાસ",
      "ખેતીની જમીનના નાના કદ અને કૃષિ સંબંધિત પડકારો",
      "રાષ્ટ્રીય પ્રાકૃતિક કૃષિ મિશન દ્વારા ખેડૂતોની ટકાઉ આવક",
      "વિવિધ પ્રકારની બેરોજગારી",
      "પ્રદૂષણ અને સ્વાસ્થ્ય સંબંધિત પડકારો",
      "કુપોષણ, બાળજન્મ અને ગર્ભાવસ્થા સંબંધિત પડકારો",
      "વિકાસ યોજનાઓ વિરુદ્ધ અમલીકરણનો ગુણોત્તર",
      "ઓછી ગુણવત્તાની કૃષિ પેદાશોને ઉચ્ચતમ ગુણવત્તા સુધી લઈ જવી",
      "વિકસિત ગામ → તાલુકો → જિલ્લો → રાજ્ય → ભારતવર્ષ",
      "જાળવણી અને ડિહાઇડ્રેશન દ્વારા પ્રાકૃતિક પેદાશોનું મૂલ્યવર્ધન",
    ],
    fiveTitle: "5D ક્રાંતિકારી ખાદ્ય ઉત્પાદનો",
    fiveText:
      "પ્રાકૃતિક ખેતીના ઇનપુટ્સમાંથી બનેલા આ પાંચ પાવડર પ્રી-મિક્સ કોઈપણ ખોરાકમાં પોષણ અને સ્વાદ વધારવા ઉમેરી શકાય છે. સારો પ્રોટીન પાવડર રૂ. ૨,૦૦૦–૫,૦૦૦/કિલો હોય છે; 5D સપ્લિમેન્ટ રૂ. ૧,૦૦૦/કિલોમાં વેચી શકાય, જ્યારે FPO અને FPC તેને આશરે રૂ. ૩૦૦ માં બનાવે — રોજગારી માટે રૂ. ૭૦૦ નો માર્જિન.",
    five: [
      "૧૫–૨૦ પાંદડાવાળા શાકભાજીનો મિક્સ પાવડર (“આટા”)",
      "૧૫–૨૦ શાકભાજીનો મિક્સ પાવડર (“આટા”)",
      "૧૫–૨૦ મીઠા ફળોનો મિક્સ પાવડર (પ્રી-મિક્સ)",
      "૧૫–૨૦ ખાટા (સાઇટ્રસ) ફળોનો મિક્સ પાવડર (પ્રી-મિક્સ)",
      "કંદમૂળ આધારિત પાવડર સાથે આવશ્યક જડીબુટ્ટીઓ (પ્રી-મિક્સ)",
    ],
    useTitle: "5D ઉત્પાદનોનો ઉપયોગ ક્યાં",
    uses: [
      "દરેક નવદંપતી માટે 5D મસાલા બોક્સ",
      "કુપોષણ દૂર કરવા મધ્યાહન ભોજનમાં",
      "ફૂડ ઉદ્યોગ માટે પોષણ અને સ્વાદ વધારનાર",
      "આર્મી, નેવી અને એરફોર્સના ભોજનમાં",
      "અન્નક્ષેત્ર, મંદિર કેન્ટીન અને ભંડારામાં",
      "તહેવારો અને કુદરતી આપત્તિ સમયે રસોડામાં",
    ],
    chainTitle: "મોડેલ કેવી રીતે કામ કરે છે",
    chain: [
      ["પ્રાકૃતિક ખેતી FPO", "ખેડૂતો શ્રી આચાર્ય દેવવ્રતજી અને નેશનલ નેચરલ ફાર્મિંગ યુનિવર્સિટી, હાલોલની SOP મુજબ પ્રાકૃતિક ખેતી અપનાવે; FPO દીઠ ૧,૦૦૦ એકર પર કોન્ટ્રાક્ટ ફાર્મિંગ."],
      ["FPO / SHG પ્રોસેસિંગ", "FPO, FPC અને મહિલા સ્વ-સહાય જૂથો સામાન્ય SOP હેઠળ નાના કે મોટા એકમોમાં પેદાશો સૂકવે."],
      ["DISA બાય-બેક", "ડિહાઇડ્રેશન ઇન્ડસ્ટ્રીઝ સ્ટેકહોલ્ડર્સ એસોસિએશન (કલમ 8) અર્ધ કે સંપૂર્ણ ડિહાઇડ્રેટેડ ઉત્પાદનો પરત ખરીદે."],
      ["કેન્દ્રીય પ્રોસેસિંગ અને માર્કેટિંગ", "કેન્દ્રીય એકમો 5D અને તૈયાર ઉત્પાદનો બનાવે; વેચાણ ફેડરેશન દેશ અને નિકાસ બજાર સંભાળે."],
      ["પ્રતિસાદ અને R&D", "ટેસ્ટિંગ સંસ્થાઓ, R&D કેન્દ્રો અને ગ્રાહક ડેટા ખેતી અને પ્રોસેસિંગમાં સુધારો લાવે."],
    ],
    kamTitle: "કામધેનુ: સ્વસ્થ પશુ, સ્વસ્થ જમીન",
    kamText:
      "માનવ સ્વાસ્થ્ય પશુ અને જમીનના સ્વાસ્થ્ય પર નિર્ભર છે. પ્રાકૃતિક ચરાઈ દ્વારા ભારતીય મૂળની દેશી ગાયોનું ડિટોક્સિફિકેશન કરીને તેમને 'કામધેનુ' બનાવાય — તાજું ગોબર અને ગૌમૂત્ર જીવંત ખાતર તરીકે જમીનનો દ્રાવ્ય કાર્બન દર વર્ષે ૦.૨૫–૧% વધારે, ૧–૫ વર્ષના બાળકો માટે શુદ્ધ દૂધ અને શારીરિક-માનસિક સુખાકારી માટે ઘી મળે. વેક્યુમ ફ્રીઝ-ડ્રાઇડ ગૌમૂત્ર અર્ક કેપ્સ્યુલ રૂ. ૫,૦૦૦ કરોડની OTC તક ખોલે છે.",
    impactTitle: "₹૧,૦૦૦ કરોડ રોકાણ, ₹૫,૦૦૦ કરોડ લાભ",
    impact: [
      ["₹૧,૦૦૦ કરોડ", "કૃષિ નુકસાન ખેડૂતોની આવકમાં રૂપાંતરિત"],
      ["₹૧,૦૦૦ કરોડ", "ફૂડ પ્રોસેસિંગ વિસ્તરણથી રોજગારી"],
      ["₹૧,૦૦૦ કરોડ", "₹૧,૦૦૦ કરોડનું ઉત્પાદન ₹૨,૦૦૦ કરોડમાં વેચી કુલ નફો"],
      ["₹૧,૦૦૦ કરોડ", "લોકોના સ્વાસ્થ્ય ખર્ચમાં બચત"],
      ["₹૧,૦૦૦ કરોડ", "નિકાસથી વિદેશી હૂંડિયામણ"],
    ],
    lossText:
      "ભારતમાં દર વર્ષે આશરે રૂ. ૫ લાખ કરોડના ફળો, શાકભાજી અને અન્ય પેદાશોનું નુકસાન થાય છે. તેમાંથી માત્ર ૧૦% પ્રોસેસ કરીએ તો રૂ. ૫૦,૦૦૦ કરોડનો મૂલ્યવર્ધિત કાચો માલ, ૫ કરોડ રોજગારી અને ૩ થી ૫ વર્ષમાં ખેડૂતોની આવક બમણી થઈ શકે.",
    techTitle: "જાળવણી અને ડ્રાઇંગ ટેકનોલોજી",
    tech: ["સૂર્ય અને સોલર ડ્રાઇંગ", "કન્વેયર બેલ્ટ ડ્રાઇંગ", "હીટ-પંપ ફૂડ ડ્રાઇંગ", "વેક્યુમ ડ્રાઇંગ", "−૫૦° વેક્યુમ ફ્રીઝ ડ્રાઇંગ", "સ્પ્રે ડ્રાઇંગ"],
    techText:
      "૨૪–૪૮ કલાકમાં બગડી જતી પેદાશો પ્રોસેસ કરી શકાય — પ્રિઝર્વેટિવ કે કોલ્ડ સ્ટોરેજ વિના ૫ વર્ષ સુધી ટકે તેવું ૨ મિનિટમાં તૈયાર ભોજન પણ.",
    closing: "જય હિન્દ — વિકસિત ભારત ૨૦૪૭ તરફ.",
  },
};

type Lang = keyof typeof C;

export default function SanhitaProject() {
  const [lang, setLang] = useState<Lang>("en");
  const t = C[lang];
  const gu = lang === "gu";
  const h2 = gu ? "font-bold text-3xl md:text-4xl leading-tight text-brand-900" : "font-display text-3xl md:text-5xl text-brand-900";
  const tab = (l: Lang, label: string) => (
    <button
      type="button"
      aria-pressed={lang === l}
      onClick={() => setLang(l)}
      className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${l === "gu" ? "font-gu" : ""} ${
        lang === l ? "bg-brand-900 text-white" : "text-muted hover:text-brand-900"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div id="sanhita" lang={lang} className={`scroll-mt-20 border-t border-line ${gu ? "font-gu" : ""}`}>
      <section className="bg-paper-2">
        <Container className="py-16 md:py-24">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="label text-brand-600">{t.eyebrow}</p>
            <div role="group" aria-label="Language" className="inline-flex gap-1 rounded-full bg-white p-1 ring-1 ring-black/5">
              {tab("en", "English")}
              {tab("gu", "ગુજરાતી")}
            </div>
          </div>
          <h2 className={`mt-6 text-brand-900 ${gu ? "font-bold text-4xl md:text-6xl leading-tight" : "font-display text-[2.4rem] leading-[1.04] md:text-6xl"}`}>{t.title}</h2>
          <p className="mt-4 text-clay font-semibold">{t.tagline}</p>
          <p className="mt-6 max-w-3xl text-lg text-muted leading-relaxed">{t.intro}</p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <h3 className={h2}>{t.shantiTitle}</h3>
          <p className="mt-3 text-muted text-lg">{t.shantiText}</p>
          <div className="mt-10 grid md:grid-cols-3 gap-px bg-line border border-line">
            {t.shanti.map(([h, p], n) => (
              <div key={h} className="bg-paper p-8">
                <span className="font-display text-brand-600">0{n + 1}</span>
                <h4 className="mt-6 text-2xl font-semibold text-brand-900">{h}</h4>
                <p className="mt-2 text-muted">{p}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper-2 py-16 md:py-24">
        <Container>
          <h3 className={h2}>{t.challengesTitle}</h3>
          <ol className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-4">
            {t.challenges.map((c, n) => (
              <li key={c} className="flex gap-4 border-b border-line pb-4">
                <span className="font-display text-clay w-6 shrink-0">{n + 1}</span>
                <span className="text-ink">{c}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className={h2}>{t.fiveTitle}</h3>
            <p className="mt-4 text-muted text-lg leading-relaxed">{t.fiveText}</p>
            <ul className="mt-8 space-y-3">
              {t.five.map((f, n) => (
                <li key={f} className="flex items-center gap-4 rounded-sm bg-white p-4 ring-1 ring-black/5">
                  <span className="grid place-items-center w-10 h-10 rounded-full bg-brand-900 text-lime font-display shrink-0">{n + 1}D</span>
                  <span className="text-brand-900 font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-brand-900 text-white p-8 rounded-sm h-full">
              <h4 className="text-2xl font-semibold text-lime">{t.useTitle}</h4>
              <ul className="mt-6 space-y-3">
                {t.uses.map((u) => (
                  <li key={u} className="flex gap-3 text-white/90">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-lime shrink-0" />
                    {u}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper-2 py-16 md:py-24">
        <Container>
          <h3 className={h2}>{t.chainTitle}</h3>
          <ol className="mt-10 grid md:grid-cols-5 gap-px bg-line border border-line">
            {t.chain.map(([h, p], n) => (
              <li key={h} className="bg-paper p-6">
                <span className="font-display text-4xl text-brand-100" style={{ WebkitTextStroke: "1px var(--color-brand-600)" }}>{n + 1}</span>
                <h4 className="mt-6 text-lg font-semibold text-brand-900">{h}</h4>
                <p className="mt-2 text-sm text-muted leading-relaxed">{p}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="max-w-4xl">
          <h3 className={h2}>{t.kamTitle}</h3>
          <p className="mt-6 text-lg text-muted leading-relaxed">{t.kamText}</p>
        </Container>
      </section>

      <section className="bg-brand-900 text-white py-16 md:py-24">
        <Container>
          <h3 className={gu ? "font-bold text-3xl md:text-4xl" : "font-display text-3xl md:text-5xl"}>{t.impactTitle}</h3>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/15 border border-white/15">
            {t.impact.map(([v, l]) => (
              <div key={l} className="bg-brand-900 p-6">
                <p className="font-display text-2xl text-lime">{v}</p>
                <p className="mt-2 text-sm text-white/80">{l}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-white/85 leading-relaxed">{t.lossText}</p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <h3 className={h2}>{t.techTitle}</h3>
          <div className="mt-8 flex flex-wrap gap-2">
            {t.tech.map((x) => (
              <span key={x} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-brand-900 ring-1 ring-black/5">{x}</span>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-muted text-lg leading-relaxed">{t.techText}</p>
          <p className="mt-12 text-2xl font-semibold text-brand-900">{t.closing}</p>
        </Container>
      </section>
    </div>
  );
}
