import Link from "next/link";
import {
  Youtube,
  TrendingUp,
  Eye,
  Users,
  BarChart3,
  Target,
  Lightbulb,
  Search,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <Youtube className="h-8 w-8 text-red-600" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                YouTube Growth Hub
              </h1>
            </div>
            <nav className="flex space-x-6">
              <Link
                href="/dashboard"
                className="text-gray-700 hover:text-red-600 dark:text-gray-300"
              >
                Dashboard
              </Link>
              <Link
                href="/seo-optimizer"
                className="text-gray-700 hover:text-red-600 dark:text-gray-300"
              >
                SEO Tools
              </Link>
              <Link
                href="/trending"
                className="text-gray-700 hover:text-red-600 dark:text-gray-300"
              >
                Trending
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Grow Your YouTube Channel
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Optimize your videos, analyze performance, and discover trending
            topics to increase your YouTube views and subscriber count.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/dashboard">
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Get Started
              </button>
            </Link>
            <Link href="/seo-optimizer">
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">
                Optimize Videos
              </button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Video Analytics */}
          <Link href="/dashboard">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="flex items-center mb-4">
                <BarChart3 className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Video Analytics
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Track your video performance with detailed analytics including
                views, engagement rates, and audience retention.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Total Views
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    1.2M
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Avg. Watch Time
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    4:32
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* SEO Optimization */}
          <Link href="/seo-optimizer">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  SEO Optimizer
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Optimize your video titles, descriptions, and tags for maximum
                discoverability on YouTube search.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    SEO Score
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                    85/100
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-600">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>
          </Link>

          {/* Trending Topics */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-8 w-8 text-purple-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Trending Topics
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Discover what&apos;s trending in your niche and create content
              that captures current interest.
            </p>
            <div className="space-y-2">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2 text-sm">
                <span className="text-gray-900 dark:text-white font-medium">
                  #TechReview2024
                </span>
                <span className="text-gray-500 dark:text-gray-400 ml-2">
                  ↗️ +234%
                </span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2 text-sm">
                <span className="text-gray-900 dark:text-white font-medium">
                  #ProductivityTips
                </span>
                <span className="text-gray-500 dark:text-gray-400 ml-2">
                  ↗️ +156%
                </span>
              </div>
            </div>
          </div>

          {/* Thumbnail Analyzer */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <Eye className="h-8 w-8 text-orange-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Thumbnail Analyzer
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Test and compare thumbnail designs to maximize click-through rates
              on your videos.
            </p>
            <button className="w-full bg-orange-100 text-orange-800 py-2 px-4 rounded-lg font-medium hover:bg-orange-200 transition-colors dark:bg-orange-900 dark:text-orange-300">
              Upload Thumbnail
            </button>
          </div>

          {/* Competitor Analysis */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-indigo-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Competitor Analysis
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Analyze your competitors strategies and discover opportunities to
              outperform them.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Tracked Channels
                </span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  12
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Avg. Growth Rate
                </span>
                <span className="font-semibold text-green-600">+15.3%</span>
              </div>
            </div>
          </div>

          {/* Growth Recommendations */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <Lightbulb className="h-8 w-8 text-yellow-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Smart Recommendations
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Get AI-powered recommendations to improve your content strategy
              and boost engagement.
            </p>
            <div className="space-y-2">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-3">
                <p className="text-sm text-yellow-800 dark:text-yellow-300">
                  💡 Post videos on Tuesday at 2 PM for 23% more views
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-3">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  🎯 Add 3 more relevant tags to improve discoverability
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Grow Your Channel?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of creators who are already using our tools to
            optimize their YouTube content and increase their views.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/dashboard">
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center">
                <Search className="h-5 w-5 mr-2" />
                Start Analyzing
              </button>
            </Link>
            <Link href="/seo-optimizer">
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                Optimize Now
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
