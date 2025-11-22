import React from "react";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function SpiritMeter({ currentBalance, maxBalance = 100, tokensUsedThisSession = 0 }) {
  const balancePercentage = (currentBalance / maxBalance) * 100;
  const experiencesRemaining = currentBalance; // 1 token = 1 experience

  return (
    <Card className="parchment-bg ornate-border p-8 space-y-6">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Sparkles className="w-8 h-8 text-sky-500" />
        <h2 className="text-3xl font-bold text-blue-900">Spirit Meter</h2>
      </div>

      {/* Progress Bar */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-4xl font-bold text-blue-900">{currentBalance}</span>
          <span className="text-xl text-gray-600">/ {maxBalance} tokens</span>
        </div>
        
        <div className="w-full h-10 bg-gray-200 rounded-full overflow-hidden border-4 border-sky-400 shadow-lg">
          <div 
            className={`h-full transition-all duration-500 flex items-center justify-end pr-4 ${
              balancePercentage > 66 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
              balancePercentage > 33 ? 'bg-gradient-to-r from-yellow-500 to-amber-500' :
              'bg-gradient-to-r from-red-500 to-orange-500'
            }`}
            style={{ width: `${balancePercentage}%` }}
          >
            {balancePercentage > 10 && (
              <span className="text-white font-bold text-sm">
                {Math.round(balancePercentage)}%
              </span>
            )}
          </div>
        </div>
        
        <div className="text-center space-y-2">
          <p className="text-gray-700 text-xl">
            <span className="font-bold text-blue-800 text-2xl">{experiencesRemaining}</span> experiences remaining
          </p>
          <p className="text-sm text-gray-600">(1 token per experience)</p>
        </div>
      </div>

      {/* Session Stats */}
      {tokensUsedThisSession > 0 && (
        <div className="border-t-2 border-sky-400/30 pt-4">
          <p className="text-center text-sm text-gray-600">
            This session: <span className="font-semibold text-blue-800">{tokensUsedThisSession}</span> tokens used
          </p>
        </div>
      )}
    </Card>
  );
}