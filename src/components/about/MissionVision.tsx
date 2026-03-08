import { Target, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

export function MissionVision() {
  const { t } = useTranslation('about');

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-transparent">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-heading-md font-semibold text-foreground">{t('mission.label')}</h3>
          </div>
          <p className="text-body text-muted-foreground leading-relaxed">
            {t('mission.text')}
          </p>
        </CardContent>
      </Card>

      <Card className="border-border/50 bg-gradient-to-br from-accent/50 to-transparent">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-heading-md font-semibold text-foreground">{t('vision.label')}</h3>
          </div>
          <p className="text-body text-muted-foreground leading-relaxed">
            {t('vision.text')}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
