"use client";

import { useState } from "react";
import {
  Target,
  CheckCircle,
  Lightbulb,
  Hash,
  FileText,
  Eye,
} from "lucide-react";

export default function SEOOptimizer() {
  const [videoData, setVideoData] = useState({
    title: "",
    description: "",
    tags: "",
    category: "",
  });

  const [analysis, setAnalysis] = useState<{
    overallScore: number;
    titleScore: number;
    descriptionScore: number;
    tagsScore: number;
    recommendations: string[];
  } | null>(null);

  const analyzeVideo = () => {
    // Simulate SEO analysis
    const titleScore =
      videoData.title.length >= 50 && videoData.title.length <= 60
        ? 100
        : videoData.title.length >= 40
        ? 80
        : 60;
    const descriptionScore =
      videoData.description.length >= 200
        ? 100
        : videoData.description.length >= 100
        ? 80
        : 50;
    const tagsScore =
      videoData.tags.split(",").filter((tag) => tag.trim()).length >= 10
        ? 100
        : videoData.tags.split(",").filter((tag) => tag.trim()).length >= 5
        ? 80
        : 40;

    const overallScore = Math.round(
      (titleScore + descriptionScore + tagsScore) / 3
    );

    setAnalysis({
      overallScore,
      titleScore,
      descriptionScore,
      tagsScore,
      recommendations: [
        titleScore < 80 &&
          "Optimize your title length (50-60 characters recommended)",
        descriptionScore < 80 &&
          "Add more details to your description (200+ characters)",
        tagsScore < 80 && "Include more relevant tags (10+ recommended)",
        "Add timestamps in your description for better engagement",
        "Include a clear call-to-action",
        "Use trending keywords in your niche",
      ].filter(Boolean) as string[],
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-6">
            <Target className="h-8 w-8 text-green-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              SEO Optimizer
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Video Details
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Video Title
                </label>
                <input
                  type="text"
                  value={videoData.title}
                  onChange={(e) =>
                    setVideoData({ ...videoData, title: e.target.value })
                  }
                  placeholder="Enter your video title..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
                <p className="text-xs text-gray-500 mt-1">
                  {videoData.title.length}/60 characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  value={videoData.description}
                  onChange={(e) =>
                    setVideoData({ ...videoData, description: e.target.value })
                  }
                  placeholder="Enter your video description..."
                  rows={6}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
                <p className="text-xs text-gray-500 mt-1">
                  {videoData.description.length} characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tags
                </label>
                <input
                  type="text"
                  value={videoData.tags}
                  onChange={(e) =>
                    setVideoData({ ...videoData, tags: e.target.value })
                  }
                  placeholder="tag1, tag2, tag3..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
                <p className="text-xs text-gray-500 mt-1">
                  {videoData.tags.split(",").filter((tag) => tag.trim()).length}{" "}
                  tags
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <select
                  value={videoData.category}
                  onChange={(e) =>
                    setVideoData({ ...videoData, category: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select category...</option>
                  <option value="tech">Technology</option>
                  <option value="education">Education</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="gaming">Gaming</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="business">Business</option>
                </select>
              </div>

              <button
                onClick={analyzeVideo}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Analyze SEO
              </button>
            </div>
          </div>

          {/* Analysis Results */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              SEO Analysis
            </h2>

            {!analysis ? (
              <div className="text-center py-12">
                <Target className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 dark:text-gray-400">
                  Enter your video details and click &quot;Analyze SEO&quot; to
                  get started
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Overall Score */}
                <div className="text-center">
                  <div
                    className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${
                      analysis.overallScore >= 80
                        ? "bg-green-100 dark:bg-green-900"
                        : analysis.overallScore >= 60
                        ? "bg-yellow-100 dark:bg-yellow-900"
                        : "bg-red-100 dark:bg-red-900"
                    } mb-4`}
                  >
                    <span
                      className={`text-2xl font-bold ${
                        analysis.overallScore >= 80
                          ? "text-green-600"
                          : analysis.overallScore >= 60
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {analysis.overallScore}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    SEO Score
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {analysis.overallScore >= 80
                      ? "Excellent"
                      : analysis.overallScore >= 60
                      ? "Good"
                      : "Needs Improvement"}
                  </p>
                </div>

                {/* Detailed Scores */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        Title
                      </span>
                    </div>
                    <span
                      className={`text-sm font-semibold ${
                        analysis.titleScore >= 80
                          ? "text-green-600"
                          : analysis.titleScore >= 60
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {analysis.titleScore}/100
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center">
                      <Eye className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        Description
                      </span>
                    </div>
                    <span
                      className={`text-sm font-semibold ${
                        analysis.descriptionScore >= 80
                          ? "text-green-600"
                          : analysis.descriptionScore >= 60
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {analysis.descriptionScore}/100
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center">
                      <Hash className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        Tags
                      </span>
                    </div>
                    <span
                      className={`text-sm font-semibold ${
                        analysis.tagsScore >= 80
                          ? "text-green-600"
                          : analysis.tagsScore >= 60
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {analysis.tagsScore}/100
                    </span>
                  </div>
                </div>

                {/* Recommendations */}
                <div>
                  <div className="flex items-center mb-3">
                    <Lightbulb className="h-5 w-5 text-yellow-600 mr-2" />
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Recommendations
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {analysis.recommendations.map(
                      (rec: string, index: number) => (
                        <div
                          key={index}
                          className="flex items-start p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                        >
                          <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-blue-800 dark:text-blue-300">
                            {rec}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SEO Tips */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            YouTube SEO Best Practices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Title Optimization
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Keep it 50-60 characters</li>
                <li>• Include target keywords</li>
                <li>• Make it compelling</li>
                <li>• Avoid clickbait</li>
              </ul>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Description Tips
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• First 125 characters matter most</li>
                <li>• Include relevant keywords</li>
                <li>• Add timestamps</li>
                <li>• Include links and CTAs</li>
              </ul>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Tag Strategy
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Use 10-15 relevant tags</li>
                <li>• Mix broad and specific tags</li>
                <li>• Include variations</li>
                <li>• Research competitor tags</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
