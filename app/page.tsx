"use client";

import { useState } from 'react';
import { TRAVEL_QUESTIONS, Category } from '@/constants/data';

export default function TravelPlanner() {
  const [step, setStep] = useState(0);
  const [days, setDays] = useState(7);
  const [selections, setSelections] = useState<Record<Category, number>>({
    stay: 0, food: 0, transport: 0, activity: 0
  });

  const nextStep = () => {
    if (days < 1) return alert("Por favor, introduce al menos 1 día.");
    setStep((prev) => prev + 1);
  };
  
  const restart = () => {
    setStep(0);
    setSelections({ stay: 0, food: 0, transport: 0, activity: 0 });
  };

  const handleSelect = (id: Category, price: number) => {
    setSelections(prev => ({ ...prev, [id]: price }));
    nextStep();
  };

  const calculateTotal = () => {
    const dailySum = Object.values(selections).reduce((a, b) => a + b, 0);
    const krw = dailySum * days;
    const mxn = Math.floor(krw / 75); 
    return { krw, mxn };
  };

  const result = calculateTotal();

  // 숙박 선택에 따른 동적 링크 설정 (텍스트는 "Ver hotel seleccionado"로 통일)
  const getAgodaInfo = () => {
    if (selections.stay === 550000) {
      return {
        link: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1963214&hl=es-es&hid=4409",
        text: "Ver hotel seleccionado"
      };
    }
    if (selections.stay === 160000) {
      return {
        link: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1963214&hl=es-es&hid=921919",
        text: "Ver hotel seleccionado"
      };
    }
    if (selections.stay === 45000) {
      return {
        link: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1963214&hl=es-es&hid=646891",
        text: "Ver hotel seleccionado"
      };
    }
    return {
      link: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1963214&hl=es-es&city=14690",
      text: "Ver hotel seleccionado"
    };
  };

  const agoda = getAgodaInfo();

  return (
    <main className="min-h-screen bg-[#F8F9FA] py-10 px-4 font-sans text-[#1A1A1A]">
      <style jsx global>{`
        /* 크롬, 사파리 등에서 숫자 input 화살표 제거 */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        /* 파이어폭스 숫자 input 화살표 제거 */
        input[type=number] {
          -moz-appearance: textfield;
        }
      `}</style>

      <div className="max-w-md mx-auto bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden p-10 border border-[#F1F3F5] min-h-[600px] flex flex-col">
        
        {step > 0 && step <= 4 && (
          <div className="w-full h-1.5 bg-[#F1F3F5] rounded-full mb-10 overflow-hidden">
            <div 
              className="h-full bg-[#007AFF] transition-all duration-700 ease-in-out" 
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        )}

        {step === 0 && (
          <div className="flex-1 flex flex-col justify-center animate-in fade-in duration-500">
            <h2 className="text-4xl font-black mb-4 tracking-tight">Presupuesto<br/><span className="text-[#007AFF]">Seúl 2026</span></h2>
            <p className="text-[#868E96] mb-10 font-medium text-lg">¿Cuántos días vas a quedarte?</p>
            <div className="relative mb-10 group">
              <input 
                type="number" 
                inputMode="numeric"
                pattern="[0-9]*"
                value={days === 0 ? "" : days} 
                onChange={(e) => setDays(Number(e.target.value))}
                placeholder="0"
                className="w-full p-8 bg-[#F8F9FA] border-none rounded-[2rem] text-4xl font-black text-[#007AFF] outline-none group-hover:ring-4 group-hover:ring-[#E7F1FF] transition-all text-center"
              />
              <p className="mt-4 text-center text-[#ADB5BD] font-bold tracking-widest uppercase text-xs">Ingresa el número de días</p>
            </div>
            <button 
              onClick={nextStep}
              className="w-full bg-[#1A1A1A] text-white py-6 rounded-[2rem] font-black text-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-black/10"
            >
              Empezar
            </button>
          </div>
        )}

        {step >= 1 && step <= 4 && (
          <div className="flex-1 animate-in slide-in-from-right duration-300">
            <h2 className="text-2xl font-black mb-10 leading-tight">
              {TRAVEL_QUESTIONS[step - 1].question}
            </h2>
            <div className="space-y-4">
              {TRAVEL_QUESTIONS[step - 1].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(TRAVEL_QUESTIONS[step - 1].id, opt.priceKRW)}
                  className="w-full p-6 rounded-[2rem] border-2 border-transparent bg-[#F8F9FA] text-left transition-all hover:bg-[#E7F1FF] hover:border-[#007AFF] group active:scale-[0.98]"
                >
                  <div className="font-black text-lg text-[#495057] group-hover:text-[#007AFF]">{opt.text}</div>
                  <div className="text-sm font-medium text-[#ADB5BD]">{opt.description}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="flex-1 text-center animate-in zoom-in duration-500">
            <div className="text-xs font-black text-[#007AFF] uppercase tracking-[0.2em] mb-4">Total Estimado</div>
            <h2 className="text-5xl font-black text-[#1A1A1A] mb-2">${result.mxn.toLocaleString()} <span className="text-2xl text-[#ADB5BD]">MXN</span></h2>
            <p className="text-[#ADB5BD] mb-10 font-bold italic">≈ ₩{result.krw.toLocaleString()} KRW</p>
            
            <div className="bg-[#F8F9FA] rounded-[2.5rem] p-8 mb-10 text-left space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[#868E96] font-bold">Hospedaje</span>
                <span className="text-[#495057] font-black">${Math.floor((selections.stay * days) / 75).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#868E96] font-bold">Comida</span>
                <span className="text-[#495057] font-black">${Math.floor((selections.food * days) / 75).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#868E96] font-bold">Actividades</span>
                <span className="text-[#495057] font-black">${Math.floor(((selections.transport + selections.activity) * days) / 75).toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-4">
              <a 
                href={agoda.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#007AFF] text-white py-6 rounded-[2rem] font-black text-lg shadow-lg shadow-[#007AFF]/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
              >
                {agoda.text}
              </a>
              <button 
                onClick={restart}
                className="w-full py-4 text-[#ADB5BD] font-bold hover:text-[#495057] transition-all"
              >
                Calcular de nuevo
              </button>
            </div>
          </div>
        )}
      </div>
      
      <p className="text-center mt-10 text-[10px] text-[#ADB5BD] font-bold leading-relaxed uppercase tracking-widest">
        Precios estimados Seúl 2026.<br/>
        Válido para 1 persona (vuelos no incluidos).
      </p>
    </main>
  );
}