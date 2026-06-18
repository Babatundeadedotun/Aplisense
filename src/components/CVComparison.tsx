import React, { useState } from "react";
import { cvStandards, calculateCVMatchScore } from "@/data/cvStandards";

type Props = {
  detectedSections: string[];
};

const countries: { key: keyof typeof cvStandards; label: string }[] = [
  { key: "uk", label: "UK" },
  { key: "usa", label: "USA" },
  { key: "canada", label: "Canada" },
  { key: "australia", label: "Australia" },
  { key: "europe", label: "Europe" },
];

const CVComparison: React.FC<Props> = ({ detectedSections }) => {
  const [selectedCountry, setSelectedCountry] =
    useState<keyof typeof cvStandards>("uk");

  const score = calculateCVMatchScore(detectedSections, selectedCountry);

  return (
    <div className="mt-8 p-6 border rounded-xl bg-white dark:bg-gray-900 shadow-sm">
      <h2 className="text-xl font-bold mb-4">
        Compare Your CV with International Standards
      </h2>

      {/* Country Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {countries.map((country) => (
          <button
            key={country.key}
            onClick={() => setSelectedCountry(country.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              selectedCountry === country.key
                ? "bg-black text-white"
                : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {country.label}
          </button>
        ))}
      </div>

      {/* Score Display */}
      <div className="text-center">
        <div className="text-4xl font-bold">
          {score}%
        </div>
        <p className="text-gray-500 mt-2">
          Match with {cvStandards[selectedCountry].country} CV Standard
        </p>
      </div>
    </div>
  );
};

export default CVComparison;