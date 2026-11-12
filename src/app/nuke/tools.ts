export type ToolKind = 'nuke' | 'asteroid' | 'rod' | 'duck' | 'icbm' | 'cruise' | 'railgun' | 'carpet' | 'ufo';

export interface Tool {
  id: string;
  name: string;
  icon: string;
  group: string;
  kind: ToolKind;
  desc: string;
  /** yield in kilotons (for missiles: the warhead) */
  W: number;
  air: boolean;
  hob?: number;
  size?: number;
}

const t = (group: string, list: Omit<Tool, 'group'>[]): Tool[] => list.map((x) => ({ ...x, group }));

export const TOOLS: Tool[] = [
  ...t('Nuclear', [
    { id: 'davy', name: 'Davy Crockett', icon: '💣', kind: 'nuke', W: 0.02, air: false, desc: 'The smallest nuke ever built, fired from a recoilless rifle.' },
    { id: 'littleboy', name: 'Little Boy', icon: '💣', kind: 'nuke', W: 15, air: true, desc: 'Hiroshima, 6 August 1945.' },
    { id: 'fatman', name: 'Fat Man', icon: '💣', kind: 'nuke', W: 21, air: true, desc: 'Nagasaki, 9 August 1945.' },
    { id: 'w76', name: 'W76-1', icon: '☢️', kind: 'nuke', W: 90, air: true, desc: 'Trident II submarine warhead.' },
    { id: 'w87', name: 'W87', icon: '☢️', kind: 'nuke', W: 300, air: true, desc: 'Minuteman III warhead.' },
    { id: 'w88', name: 'W88', icon: '☢️', kind: 'nuke', W: 475, air: true, desc: 'Heavy Trident II warhead.' },
    { id: 'b83', name: 'B83', icon: '☢️', kind: 'nuke', W: 1200, air: true, desc: 'The most powerful bomb in the US arsenal.' },
    { id: 'ivymike', name: 'Ivy Mike', icon: '🍄', kind: 'nuke', W: 10400, air: false, desc: 'First hydrogen bomb, Enewetak 1952.' },
    { id: 'bravo', name: 'Castle Bravo', icon: '🍄', kind: 'nuke', W: 15000, air: false, desc: 'Largest US test, Bikini Atoll 1954.' },
    { id: 'tsar', name: 'Tsar Bomba', icon: '👑', kind: 'nuke', W: 50000, air: true, desc: 'The most powerful explosion ever, 1961.' },
  ]),
  ...t('Missiles & guns', [
    { id: 'icbm', name: 'ICBM', icon: '🚀', kind: 'icbm', W: 300, air: true, desc: 'Click to place your silo, then click targets anywhere on Earth. W87 warhead.' },
    { id: 'cruise', name: 'Cruise missile', icon: '🛩️', kind: 'cruise', W: 0.00045, air: false, desc: 'Comes in low from behind you and hits the target. Conventional warhead.' },
    { id: 'railgun', name: 'Railgun turret', icon: '⚡', kind: 'railgun', W: 0.003, air: false, desc: 'Place up to 4 turrets: they fire Mach 7 slugs on their own within 15 km.' },
    { id: 'carpet', name: 'Carpet bombing', icon: '✈️', kind: 'carpet', W: 0.0003, air: false, desc: 'Click start and end of a line: three bombers lay bombs along it.' },
  ]),
  ...t('From space', [
    { id: 'rod', name: 'Rod from God', icon: '🛰️', kind: 'rod', W: 0.012, air: false, desc: 'A tungsten rod dropped from orbit.' },
    { id: 'chelyabinsk', name: 'Chelyabinsk', icon: '🌠', kind: 'asteroid', W: 450, air: true, hob: 25000, size: 20, desc: '20 m meteor that exploded high over Russia in 2013.' },
    { id: 'tunguska', name: 'Tunguska', icon: '☄️', kind: 'asteroid', W: 12000, air: true, hob: 8000, size: 50, desc: '50 m asteroid that flattened the taiga in 1908.' },
    { id: 'km1', name: '1 km asteroid', icon: '🪨', kind: 'asteroid', W: 7e7, air: false, size: 1000, desc: 'Regional extinction event.' },
    { id: 'dino', name: 'Chicxulub', icon: '🦖', kind: 'asteroid', W: 1e11, air: false, size: 10000, desc: '10 km of rock. Ask the dinosaurs.' },
  ]),
  ...t('Weird', [
    { id: 'ufo', name: 'UFO', icon: '🛸', kind: 'ufo', W: 0, air: false, desc: 'A saucer parks over the target and slowly beams people up.' },
    { id: 'duck', name: 'Giant duck', icon: '🦆', kind: 'duck', W: 0, air: false, desc: '250 m of yellow rubber. Squeak.' },
  ]),
];

export const TOOL_GROUPS = [...new Set(TOOLS.map((x) => x.group))].map((g) => ({ name: g, tools: TOOLS.filter((x) => x.group === g) }));

export function fmtW(W: number): string {
  if (W >= 1e6) return (W / 1e6).toLocaleString('en-US', { maximumFractionDigits: 0 }) + ' Gt';
  if (W >= 1000) return (W / 1000).toLocaleString('en-US', { maximumFractionDigits: 1 }) + ' Mt';
  if (W >= 1) return W + ' kt';
  if (W >= 0.001) return Math.round(W * 1000) + ' t';
  return Math.round(W * 1e6) + ' kg';
}
