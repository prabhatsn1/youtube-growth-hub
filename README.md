# YouTube Growth Hub

A comprehensive Next.js TypeScript application designed to help YouTube creators optimize their content, analyze performance, and grow their channels through data-driven insights.

## 🚀 Features

### 📊 Analytics Dashboard

- Real-time video performance tracking
- Interactive charts for views, likes, comments, and shares
- Audience demographics visualization
- Top performing videos analysis
- Engagement metrics and growth trends

### 🎯 SEO Optimizer

- Video title optimization with character count
- Description analysis and recommendations
- Tag strategy suggestions
- SEO scoring system with actionable feedback
- Best practices guide for YouTube optimization

### 📈 Trending Topics

- Real-time trending hashtags and topics
- Category-based filtering (Technology, Lifestyle, Finance, etc.)
- Growth indicators and search volume data
- Difficulty ratings for trending topics
- Content idea suggestions based on trends

### 💡 Smart Recommendations

- AI-powered growth suggestions
- Optimal posting time recommendations
- Content strategy improvements
- Competitor analysis insights

## 🛠️ Technology Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **API Integration**: YouTube Data API v3
- **Authentication**: NextAuth.js
- **Database**: Prisma with SQLite
- **Deployment**: Vercel-ready

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd youtube-growth-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Update the `.env.local` file with your actual API keys and configuration:

   - Get a YouTube Data API key from [Google Cloud Console](https://console.cloud.google.com/)
   - Configure Google OAuth credentials for authentication
   - Set up NextAuth secret and URL

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Getting Started

### 1. Dashboard Overview

- Visit `/dashboard` to view your channel analytics
- Explore interactive charts showing video performance
- Analyze audience demographics and engagement metrics

### 2. SEO Optimization

- Go to `/seo-optimizer` to optimize your video content
- Enter your video title, description, and tags
- Get real-time SEO scoring and recommendations

### 3. Trending Analysis

- Check `/trending` for the latest trending topics
- Filter by category to find relevant trends
- Use content ideas to create viral content

## 📈 Key Metrics Tracked

- **Views**: Total and daily view counts
- **Engagement**: Likes, comments, shares, and CTR
- **Audience**: Demographics and retention data
- **SEO**: Title optimization, description quality, tag effectiveness
- **Trends**: Hashtag performance and growth rates

## 🔧 Configuration

### YouTube API Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable YouTube Data API v3
4. Create credentials (API Key and OAuth 2.0)
5. Add your credentials to `.env.local`

### Database Setup

The app uses Prisma with SQLite for development. To set up:

```bash
npx prisma generate
npx prisma db push
```

## 📱 Features Roadmap

- [ ] YouTube channel authentication
- [ ] Real-time data sync with YouTube API
- [ ] Competitor channel analysis
- [ ] Thumbnail A/B testing
- [ ] Video upload scheduler
- [ ] Advanced analytics filters
- [ ] Export reports to PDF/CSV
- [ ] Mobile app companion

## 🎨 Customization

The app is built with Tailwind CSS, making it easy to customize:

- Modify colors in `tailwind.config.js`
- Update components in `src/components/`
- Add new pages in `src/app/`

## 📊 Sample Data

The application includes sample data for demonstration purposes:

- Mock analytics data with realistic trends
- Trending topics across multiple categories
- SEO analysis examples with scoring

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Manual Deployment

```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- Create an issue for bugs or feature requests
- Check the documentation for common questions
- Join our community discussions

## 🙏 Acknowledgments

- YouTube Data API for providing comprehensive analytics
- Next.js team for the amazing framework
- Tailwind CSS for beautiful styling
- Recharts for interactive data visualization

---

**Start growing your YouTube channel today with data-driven insights!** 🎬📈
