export interface LegalSection {
  id: string;
  tocLabel: string;
  title: string;
  html: string;
}

export interface LegalPageContent {
  seoTitle: string;
  seoDescription: string;
  title: string;
  lastUpdated: string;
  tocTitle: string;
  tocColumns?: boolean;
  sections: LegalSection[];
}
