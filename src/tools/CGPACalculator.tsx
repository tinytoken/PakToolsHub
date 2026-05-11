import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

export const CGPACalculator = () => {
  const [semesters, setSemesters] = useState([{ id: 1, gpa: 0, credits: 0 }]);

  const addSemester = () => {
    setSemesters([...semesters, { id: Date.now(), gpa: 0, credits: 0 }]);
  };

  const removeSemester = (id: number) => {
    if (semesters.length > 1) {
      setSemesters(semesters.filter(s => s.id !== id));
    }
  };

  const updateSemester = (id: number, field: 'gpa' | 'credits', value: number) => {
    setSemesters(semesters.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const totalPoints = semesters.reduce((acc, s) => acc + (s.gpa * s.credits), 0);
  const totalCredits = semesters.reduce((acc, s) => acc + s.credits, 0);
  const cgpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {semesters.map((s, index) => (
          <div key={s.id} className="flex gap-4 items-end animate-in fade-in slide-in-from-top-1 duration-300">
            <div className="flex-none w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center font-bold text-gray-400">
              {index + 1}
            </div>
            <div className="flex-grow grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">GPA</label>
                <input 
                  type="number" step="0.01" max="4"
                  value={s.gpa || ''}
                  onChange={(e) => updateSemester(s.id, 'gpa', parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none dark:text-white"
                  placeholder="0.00"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Credits</label>
                <input 
                  type="number"
                  value={s.credits || ''}
                  onChange={(e) => updateSemester(s.id, 'credits', parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none dark:text-white"
                  placeholder="0"
                />
              </div>
            </div>
            <button 
              onClick={() => removeSemester(s.id)}
              className="p-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      <button 
        onClick={addSemester}
        className="w-full py-4 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-2xl text-gray-500 hover:text-indigo-600 hover:border-indigo-600 hover:bg-indigo-50/30 dark:hover:bg-indigo-900/10 transition-all flex items-center justify-center gap-2 font-semibold"
      >
        <Plus className="w-5 h-5" />
        Add Semester
      </button>

      <div className="p-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[2rem]">
        <div className="bg-white dark:bg-gray-900 rounded-[1.9rem] p-8 text-center">
          <span className="text-sm font-bold text-gray-500 uppercase tracking-[0.2em]">Cumulative GPA</span>
          <div className="text-8xl font-black bg-clip-text text-transparent bg-gradient-to-br from-indigo-600 to-pink-600">
            {cgpa}
          </div>
        </div>
      </div>
    </div>
  );
};
