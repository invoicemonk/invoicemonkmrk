import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BarChart3, MousePointerClick, BookOpen, TrendingUp, Eye, Target, RefreshCw, Trash2, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { getAnalyticsSummary, clearAnalytics, getStoredJourneys, getReadingProgress } from '@/hooks/useContentAnalytics';
import { blogPosts } from '@/data/blogPosts';
import { pillars } from '@/data/topicalMap';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string; value: string | number; description: string;
  icon: React.ComponentType<{ className?: string }>; trend?: number;
}

function StatCard({ title, value, description, icon: Icon, trend }: StatCardProps) {
  const { t } = useTranslation('explore');
  return (
    <Card className="border-border/50">
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold mt-1">{value}</p>
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          </div>
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
        </div>
        {trend !== undefined && (
          <div className={cn("flex items-center gap-1 mt-3 text-xs", trend >= 0 ? "text-wave-green" : "text-destructive")}>
            <TrendingUp className={cn("h-3 w-3", trend < 0 && "rotate-180")} />
            <span>{Math.abs(trend)}% {t('analyticsDashboard.fromLastWeek')}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function AnalyticsDashboard() {
  const { t } = useTranslation('explore');
  const [refreshKey, setRefreshKey] = useState(0);
  const analytics = useMemo(() => getAnalyticsSummary(), [refreshKey]);
  const readingProgress = useMemo(() => getReadingProgress(), [refreshKey]);

  const pillarEngagement = useMemo(() => {
    const engagement: Record<string, number> = {};
    Object.entries(readingProgress).forEach(([slug, progress]) => {
      if (progress >= 25) {
        const post = blogPosts.find(p => p.slug === slug);
        if (post) {
          const pillar = pillars.find(p => post.category === p.title || post.tags.some(tag => p.title.toLowerCase().includes(tag.toLowerCase())));
          if (pillar) engagement[pillar.id] = (engagement[pillar.id] || 0) + 1;
        }
      }
    });
    return pillars.map(pillar => ({ ...pillar, articlesRead: engagement[pillar.id] || 0 })).sort((a, b) => b.articlesRead - a.articlesRead);
  }, [readingProgress]);

  const topArticles = useMemo(() => {
    return Object.entries(readingProgress).map(([slug, progress]) => {
      const post = blogPosts.find(p => p.slug === slug);
      return { slug, progress, title: post?.title || slug };
    }).sort((a, b) => b.progress - a.progress).slice(0, 5);
  }, [readingProgress]);

  const handleClearAnalytics = () => {
    if (window.confirm(t('analyticsDashboard.clearConfirm'))) { clearAnalytics(); setRefreshKey(k => k + 1); }
  };

  const handleExportData = () => {
    const journeys = getStoredJourneys();
    const data = { analytics, journeys, readingProgress, exportedAt: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url;
    a.download = `invoicemonk-analytics-${new Date().toISOString().split('T')[0]}.json`;
    a.click(); URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{t('analyticsDashboard.title')}</h2>
          <p className="text-muted-foreground">{t('analyticsDashboard.subtitle')}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setRefreshKey(k => k + 1)}><RefreshCw className="h-4 w-4 mr-2" />{t('analyticsDashboard.refresh')}</Button>
          <Button variant="outline" size="sm" onClick={handleExportData}><Download className="h-4 w-4 mr-2" />{t('analyticsDashboard.export')}</Button>
          <Button variant="ghost" size="sm" onClick={handleClearAnalytics}><Trash2 className="h-4 w-4 mr-2" />{t('analyticsDashboard.clear')}</Button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title={t('analyticsDashboard.totalEvents')} value={analytics.totalEvents} description={t('analyticsDashboard.allTrackedInteractions')} icon={BarChart3} />
        <StatCard title={t('analyticsDashboard.linkClicks')} value={analytics.eventCounts.link_click || 0} description={t('analyticsDashboard.internalNavigation')} icon={MousePointerClick} />
        <StatCard title={t('analyticsDashboard.articlesStarted')} value={analytics.eventCounts.article_start || 0} description={t('analyticsDashboard.contentEngagement')} icon={BookOpen} />
        <StatCard title={t('analyticsDashboard.avgScrollDepth')} value={`${analytics.avgScrollDepth}%`} description={t('analyticsDashboard.howFarUsersRead')} icon={Eye} />
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Target className="h-5 w-5 text-primary" />{t('analyticsDashboard.learningJourneys')}</CardTitle>
          <CardDescription>{t('analyticsDashboard.trackProgress')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-muted/30 rounded-lg"><p className="text-3xl font-bold">{analytics.journeys.total}</p><p className="text-sm text-muted-foreground">{t('analyticsDashboard.journeysStarted')}</p></div>
            <div className="text-center p-4 bg-muted/30 rounded-lg"><p className="text-3xl font-bold">{analytics.journeys.completed}</p><p className="text-sm text-muted-foreground">{t('analyticsDashboard.journeysCompleted')}</p></div>
            <div className="text-center p-4 bg-muted/30 rounded-lg"><p className="text-3xl font-bold">{analytics.journeys.completionRate}%</p><p className="text-sm text-muted-foreground">{t('analyticsDashboard.completionRate')}</p></div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="border-border/50">
          <CardHeader><CardTitle>{t('analyticsDashboard.topicEngagement')}</CardTitle><CardDescription>{t('analyticsDashboard.articlesByTopic')}</CardDescription></CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pillarEngagement.map((pillar, index) => (
                <motion.div key={pillar.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: pillar.color }} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium truncate">{pillar.title}</span>
                      <Badge variant="secondary" className="text-xs">{pillar.articlesRead} {t('analyticsDashboard.articles')}</Badge>
                    </div>
                    <Progress value={pillar.articlesRead * 10} className="h-1.5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader><CardTitle>{t('analyticsDashboard.topArticles')}</CardTitle><CardDescription>{t('analyticsDashboard.mostReadContent')}</CardDescription></CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topArticles.length > 0 ? topArticles.map((article, index) => (
                <motion.div key={article.slug} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                  <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold", index === 0 && "bg-yellow-500/20 text-yellow-600", index === 1 && "bg-gray-300/20 text-gray-500", index === 2 && "bg-orange-500/20 text-orange-600", index > 2 && "bg-muted text-muted-foreground")}>{index + 1}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{article.title}</p>
                    <div className="flex items-center gap-2 mt-1"><Progress value={article.progress} className="h-1 flex-1" /><span className="text-xs text-muted-foreground">{article.progress}%</span></div>
                  </div>
                </motion.div>
              )) : <p className="text-center text-muted-foreground py-8">{t('analyticsDashboard.startReading')}</p>}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/50">
        <CardHeader><CardTitle>{t('analyticsDashboard.popularLinks')}</CardTitle><CardDescription>{t('analyticsDashboard.mostClickedLinks')}</CardDescription></CardHeader>
        <CardContent>
          {analytics.popularLinks.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {analytics.popularLinks.map((link, index) => (
                <motion.div key={link.url} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="text-sm truncate flex-1">{link.url}</span>
                  <Badge variant="secondary" className="ml-2 text-xs">{link.count}</Badge>
                </motion.div>
              ))}
            </div>
          ) : <p className="text-center text-muted-foreground py-8">{t('analyticsDashboard.clickLinksToTrack')}</p>}
        </CardContent>
      </Card>
    </div>
  );
}

export default AnalyticsDashboard;