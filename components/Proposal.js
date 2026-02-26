"use client";

import { useState } from "react";
import Confetti from "./Confetti";
import BrokenHearts from "./BrokenHearts";

export default function Proposal() {
  const [step, setStep] = useState(0);
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6">
      {yes && <Confetti trigger />}
      {no && <BrokenHearts trigger />}

      {step === 0 && (
        <div>
          <h1 className="text-3xl mb-6">Hey… oka special vishayam niku chupinchali</h1>
          <button className="btn" onClick={()=>setStep(1)}>Continue</button>
        </div>
      )}

      {step === 1 && (
        <div>
          <p className="text-2xl mb-6">Recent event lo ninnu chusthu feelings start ayyayi</p>
          <button className="btn" onClick={()=>setStep(2)}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <p className="text-2xl mb-6">Calm ga cheppali ante — naku nuvvu chala nachav</p>
          <button className="btn" onClick={()=>setStep(3)}>One Last Thing</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <p className="text-3xl mb-8">Ninnu inka baaga telusukovadaniki chance istava?</p>
          <div className="flex gap-6 justify-center">
            <button className="px-6 py-3 bg-green-500 rounded" onClick={()=>{setYes(true);setStep(4);}}>Yes ❤️</button>
            <button className="px-6 py-3 bg-gray-500 rounded" onClick={()=>{setNo(true);setStep(5);}}>No</button>
          </div>
        </div>
      )}

      {step === 4 && <h2 className="text-3xl">That really means a lot ❤️</h2>}
      {step === 5 && <h2 className="text-2xl">Thank you for being honest.</h2>}
    </div>
  );
}