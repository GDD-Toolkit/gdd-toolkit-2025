/**
 * CaseStudiesPage - Main page component for the Case Studies section
 * Features: search bar, segment selector (Worthwhile Development/Maldevelopment), and magazine-style grid
 * Worthwhile Development combines Projects + Policies; Maldevelopment is a separate segment
 */

import { useState } from "react";
import { useCaseStudiesBySegment } from "@/hooks/useCaseStudiesBySegment";
import CaseStudiesGrid from "@/components/case-studies/CaseStudiesGrid";
import type { CaseStudySegment } from "@/types/caseStudies";

export default function CaseStudies() {
  const [activeSegment, setActiveSegment] = useState<CaseStudySegment>("worthwhile");
    const [searchQuery, setSearchQuery] = useState("");

  // Fetch case studies for the active segment
  const { loading, error, filterBySearch } = useCaseStudiesBySegment(activeSegment);

  // Filter case studies based on search query
  const filteredCaseStudies = filterBySearch(searchQuery);

  // Render content based on active segment
  const renderSegmentContent = () => {
    if (loading) {
      return (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-sky-600"></div>
          <p className="mt-4 text-gray-600">Loading case studies...</p>
        </div>
      );
    }

    if (error) {
        return (
        <div className="text-center py-12">
          <p className="text-red-600 text-lg mb-2">Failed to load case studies.</p>
          <p className="text-gray-500">Please try again later.</p>
          {import.meta.env.DEV && (
            <p className="text-xs text-gray-400 mt-2">{error}</p>
          )}
        </div>
      );
    }

    return <CaseStudiesGrid caseStudies={filteredCaseStudies} searchQuery={searchQuery} />;
  };

    return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Case Studies</h1>
        </div>
            </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Search Bar */}
        <div className="mb-6 flex justify-center">
                        <input
                            type="text"
            placeholder="Search by title, keyword, region, or value…"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-xl border border-gray-300 rounded-full px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        />
                    </div>

        {/* Segment Control */}
        <div className="mb-8 flex justify-center">
          <div className="flex flex-wrap gap-2 bg-white p-1 rounded-lg shadow-sm">
                                <button
              onClick={() => setActiveSegment("worthwhile")}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeSegment === "worthwhile"
                  ? "bg-sky-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Worthwhile Development
                                </button>
                                <button
              onClick={() => setActiveSegment("maldevelopment")}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeSegment === "maldevelopment"
                  ? "bg-sky-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Maldevelopment
                                </button>
                </div>
        </div>

        {/* Grid Content */}
        {renderSegmentContent()}
      </main>
        </div>
    );
}
