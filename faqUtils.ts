
import { FAQ, AreaData } from './types';
import { MASTER_FAQ_BANK, FAQTemplate } from './faqBank';

/**
 * Processes FAQ content by converting markdown links to HTML and fixing malformed patterns.
 */
export const processFAQContent = (text: string): string => {
  if (!text) return '';

  return text
    // Handle double-wrapped markdown like [[text](url1)](url2) -> <a href="url2">text</a>
    .replace(/\[\[([^\]]+)\]\s*\(([^)]+)\)\]\s*\(([^)]+)\)/g, '<a href="$3" class="text-red-600 font-bold hover:underline">$1</a>')
    // Handle standard markdown [text](url) -> <a href="url">text</a>
    .replace(/\[([^\]]+)\]\s*\(([^)]+)\)/g, '<a href="$2" class="text-red-600 font-bold hover:underline">$1</a>')
    // Handle duplicate URL text after a link: </a> (/url) -> </a>
    .replace(/(<\/a>)\s*\(\/[^)]+\)/g, '$1')
    // Handle text in brackets that lost its URL: [text] -> text
    .replace(/\[([^\]]+)\](?!\()/g, '$1')
    // Handle isolated URLs in brackets: (/url) -> ""
    .replace(/\s*\(\/[^)]+\)/g, '')
    // Handle multiple slashes at start of internal links
    .replace(/href="\/{2,}/g, 'href="/')
    // Handle any stray markdown characters if needed (optional)
    .trim();
};

/**
 * Replaces placeholders in FAQ templates with area-specific data.
 */
const localizeFAQ = (template: FAQTemplate, area: AreaData): FAQ => {
  const city = (area as any).city || 'bradford';
  const testCentres = city === 'leeds' 
    ? 'Horsforth or Harehills' 
    : 'Heaton or Thornbury';
  
  const internalLinks = [
    { text: 'View all Leeds areas', url: '/leeds' },
    { text: 'Leeds automatic driving lessons', url: '/leeds' },
    { text: 'View all Bradford areas', url: '/bradford' },
    { text: 'Bradford automatic driving lessons', url: '/bradford' },
    { text: 'intensive automatic driving courses', url: '/intensive-driving-courses' },
    { text: 'refresher lessons', url: '/refresher-lessons' },
    { text: 'mock driving test', url: '/mock-driving-tests' },
    { text: 'test preparation', url: '/test-preparation' },
    { text: 'recent passes', url: '/recent-passes' },
    { text: 'secure your start date', url: '/contact' },
    { text: 'intensive course options', url: '/intensive-driving-courses' },
    { text: 'all Leeds areas', url: '/leeds' },
    { text: 'all Bradford areas', url: '/bradford' }
  ];

  const replacePlaceholders = (text: string) => {
    let result = text
      .replace(/\[Area\]/g, area.name)
      .replace(/\[City\]/g, city.charAt(0).toUpperCase() + city.slice(1))
      .replace(/\[Postcode\]/g, area.postcode || '')
      .replace(/\[Landmark\]/g, area.landmarks[0] || 'local landmarks')
      .replace(/\[Road\]/g, area.roads[0] || 'local roads')
      .replace(/\[Neighbouring Area\]/g, (area.nearbyIds && area.nearbyIds.length > 0) ? area.nearbyIds[0].charAt(0).toUpperCase() + area.nearbyIds[0].slice(1) : 'nearby areas')
      .replace(/\[College\]/g, area.colleges[0] || 'local colleges')
      .replace(/\[Test Centres\]/g, testCentres);

    // Inject 1-2 internal links naturally if the text is long enough
    if (result.length > 100) {
      const linksToUse = internalLinks
        .filter(l => city === 'leeds' ? !l.text.includes('Bradford') : !l.text.includes('Leeds'))
        .sort(() => Math.random() - 0.5)
        .slice(0, 2);

      linksToUse.forEach(link => {
        const regex = new RegExp(`\\b${link.text}\\b`, 'i');
        if (regex.test(result)) {
          // Check if it's already linked
          if (!result.includes(`](${link.url})`)) {
            result = result.replace(regex, `[${link.text}](${link.url})`);
          }
        }
      });
    }

    return result;
  };

  return {
    question: replacePlaceholders(template.question),
    answer: replacePlaceholders(template.answer)
  };
};

/**
 * Generates a unique set of 8-10 FAQs for a given area.
 * Uses the area ID as a seed for deterministic but varied selection.
 */
export const getRotatedFAQs = (area: AreaData): FAQ[] => {
  // Simple hash function for seeding
  const seed = area.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  const groups: ('A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H')[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const selectedTemplates: FAQTemplate[] = [];

  // 1. Pick 2 from Group G (Localised)
  const groupG = MASTER_FAQ_BANK.filter(f => f.group === 'G');
  selectedTemplates.push(...pickRandom(groupG, 2, seed));

  // 2. Pick 2 from Group D (Objections/Nervous)
  const groupD = MASTER_FAQ_BANK.filter(f => f.group === 'D');
  selectedTemplates.push(...pickRandom(groupD, 2, seed + 1));

  // 3. Pick 2 from Group H (Conversion)
  const groupH = MASTER_FAQ_BANK.filter(f => f.group === 'H');
  selectedTemplates.push(...pickRandom(groupH, 2, seed + 2));

  // 4. Pick 3-4 more from other groups (A, B, C, E, F)
  const remainingGroups = ['A', 'B', 'C', 'E', 'F'];
  const pool = MASTER_FAQ_BANK.filter(f => remainingGroups.includes(f.group));
  selectedTemplates.push(...pickRandom(pool, 4, seed + 3));

  // Localize and return
  return selectedTemplates.map(t => localizeFAQ(t, area));
};

/**
 * Helper to pick N random items from an array using a seed.
 */
function pickRandom<T>(arr: T[], n: number, seed: number): T[] {
  const result = [...arr];
  for (let i = 0; i < result.length; i++) {
    const j = (seed + i) % result.length;
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result.slice(0, n);
}
