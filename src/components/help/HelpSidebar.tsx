import { Link } from '@/components/LocalizedLink';
import { useTranslation } from 'react-i18next';
import { icons } from 'lucide-react';
import { categoryOrder } from '@/data/helpGuides';
import { getTranslatedHelpGuides, getLangPrefix } from '@/utils/i18nData';

interface HelpSidebarProps {
  currentSlug: string;
}

export function HelpSidebar({ currentSlug }: HelpSidebarProps) {
  const { t, i18n } = useTranslation('help');
  const lang = getLangPrefix(i18n.language);
  const helpGuides = getTranslatedHelpGuides(lang);

  const grouped = categoryOrder.map(cat => ({
    category: cat,
    label: t(`categories.${cat}`),
    guides: helpGuides.filter(g => g.category === cat),
  }));

  return (
    <nav className="space-y-6">
      <Link
        to="/help"
        className="text-body-sm font-semibold text-primary hover:underline"
      >
        ← All Guides
      </Link>
      {grouped.map(group => (
        <div key={group.category}>
          <h4 className="text-caption font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            {group.label}
          </h4>
          <ul className="space-y-1">
            {group.guides.map(guide => {
              const Icon = icons[guide.icon as keyof typeof icons];
              const isActive = guide.slug === currentSlug;
              return (
                <li key={guide.slug}>
                  <Link
                    to={`/help/${guide.slug}`}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-body-sm transition-colors ${
                      isActive
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'text-foreground/70 hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4 flex-shrink-0" />}
                    <span className="truncate">{guide.title.split('—')[0].split(':')[0].trim()}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
