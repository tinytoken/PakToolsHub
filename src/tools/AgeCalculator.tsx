import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState<{ years: number; months: number; days: number } | null>(null);

  const calculateAge = () => {
    if (!birthDate) return;
    const birth = new Date(birthDate);
    const now = new Date();
    
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="space-y-8">
      <div className="grid gap-4">
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Select your Date of Birth</label>
        <div className="flex flex-col sm:flex-row gap-4">
          <input 
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="flex-grow px-6 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-indigo-600 outline-none transition-all dark:text-white"
          />
          <button 
            onClick={calculateAge}
            className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 dark:shadow-none"
          >
            Calculate Age
          </button>
        </div>
      </div>

      {age && (
        <div className="grid grid-cols-3 gap-4 pt-4">
          {[
            { label: 'Years', value: age.years },
            { label: 'Months', value: age.months },
            { label: 'Days', value: age.days }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-900/30 rounded-3xl text-center">
              <span className="block text-3xl font-black text-indigo-600 dark:text-indigo-400 mb-1">{item.value}</span>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
