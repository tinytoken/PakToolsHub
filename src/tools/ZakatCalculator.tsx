import React, { useState } from 'react';

export const ZakatCalculator = () => {
  const [assets, setAssets] = useState({
    cash: 0,
    gold: 0,
    silver: 0,
    business: 0,
    moneyOwed: 0,
    debts: 0
  });

  const goldPricePerGram = 18000; // Sample PKR
  const silverPricePerGram = 2200; // Sample PKR
  const nisabGoldGrams = 87.48;
  const nisabSilverGrams = 612.36;

  const totalAssets = assets.cash + (assets.gold * goldPricePerGram) + (assets.silver * silverPricePerGram) + assets.business + assets.moneyOwed;
  const netWealth = totalAssets - assets.debts;
  const nisabThreshold = nisabSilverGrams * silverPricePerGram; // Silver is common nisab base
  const zakatPayable = netWealth >= nisabThreshold ? netWealth * 0.025 : 0;

  return (
    <div className="space-y-8">
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { id: 'cash', label: 'Cash / Bank (PKR)', value: assets.cash },
          { id: 'gold', label: 'Gold (Grams)', value: assets.gold },
          { id: 'silver', label: 'Silver (Grams)', value: assets.silver },
          { id: 'business', label: 'Business Assets (PKR)', value: assets.business },
          { id: 'moneyOwed', label: 'Credits (PKR)', value: assets.moneyOwed },
          { id: 'debts', label: 'Debts (PKR)', value: assets.debts },
        ].map((field) => (
          <div key={field.id} className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{field.label}</label>
            <input 
              type="number"
              value={field.value || ''}
              onChange={(e) => setAssets({ ...assets, [field.id]: parseFloat(e.target.value) || 0 })}
              className="w-full px-4 py-2 bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all dark:text-white text-sm"
              placeholder="0"
            />
          </div>
        ))}
      </div>

      <div className="p-10 bg-indigo-600 rounded-2xl text-white shadow-lg flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-xs font-bold text-indigo-200 uppercase tracking-[0.2em]">Total Zakat Payable</span>
          <div className="text-5xl font-extrabold tracking-tight mt-2 flex items-baseline gap-2">
            <span className="text-xl font-medium text-indigo-300">Rs.</span>
            {zakatPayable.toLocaleString()}
          </div>
        </div>
        <div className="text-right flex flex-col items-center md:items-end">
          <div className="text-xs font-bold text-indigo-200 uppercase tracking-[0.2em] mb-3">Status</div>
          <div className={zakatPayable > 0 ? "bg-green-400/20 text-green-300 border border-green-400/30 px-3 py-1.5 rounded-lg font-bold text-[10px] uppercase tracking-widest" : "bg-white/10 text-white/50 border border-white/10 px-3 py-1.5 rounded-lg font-bold text-[10px] uppercase tracking-widest"}>
            {zakatPayable > 0 ? "Threshold Met" : "Below Nisab"}
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700">
        <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed italic text-center">
            Nisab calculation: Gold ({nisabGoldGrams}g) or Silver ({nisabSilverGrams}g). Current estimation uses Silver base as is common practice. 
            This is a financial planning tool; please consult your local Iman for specific religious guidance.
        </p>
      </div>
    </div>
  );
};
