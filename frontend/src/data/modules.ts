export type ModuleCard = {
  title: string
  source: string
  size: 'wide' | 'medium' | 'full'
  description: string
}

/*
  Keep early content in plain data files.
  This makes the app easier to scan than spreading text across many components too early.
*/
export const modules: ModuleCard[] = [
  {
    title: 'Astronomy Picture of the Day',
    source: 'NASA',
    size: 'wide',
    description: 'Featured image, title, credits, and short explanation from one API endpoint.',
  },
  {
    title: 'Mission Archive',
    source: 'ESA',
    size: 'medium',
    description: 'Mission summaries, launches, and agency highlights normalized into one format.',
  },
  {
    title: 'Portfolio Layer',
    source: 'You',
    size: 'full',
    description: 'Your goals, experiments, visual direction, and technical decisions live here.',
  },
]
