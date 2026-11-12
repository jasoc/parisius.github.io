export type ToolKind = 'nuke' | 'asteroid' | 'rod' | 'duck' | 'icbm' | 'cruise' | 'railgun' | 'carpet' | 'ufo' | 'wind' | 'mini';

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
    { id: 'sadm', name: 'W54 SADM', icon: '🎒', kind: 'nuke', W: 0.01, air: false, desc: 'Backpack nuke for special forces.' },
    { id: 'castleromeo', name: 'Castle Romeo', icon: '🍄', kind: 'nuke', W: 11000, air: false, desc: 'Runaway thermonuclear test, 1954.' },
    { id: 'b41', name: 'B41', icon: '☢️', kind: 'nuke', W: 25000, air: true, desc: 'Biggest US bomb ever deployed.' },
    { id: 'tsar', name: 'Tsar Bomba', icon: '👑', kind: 'nuke', W: 50000, air: true, desc: 'The most powerful explosion ever, 1961.' },
  ]),
  ...t('Missiles & guns', [
    { id: 'cruise', name: 'Cruise missile', icon: '🛩️', kind: 'cruise', W: 0.00045, air: false, desc: 'Comes in low from behind you (or from your silo in launch mode). Conventional warhead.' },
    { id: 'railgun', name: 'Railgun', icon: '⚡', kind: 'railgun', W: 0.003, air: false, desc: 'Place up to 4 turrets: they fire Mach 7 slugs on their own within 15 km.' },
    { id: 'hellfire', name: 'Hellfire', icon: '🎯', kind: 'cruise', W: 0.000009, air: false, desc: 'Small drone-launched anti-tank missile.' },
    { id: 'gmlrs', name: 'GMLRS rocket', icon: '🚀', kind: 'cruise', W: 0.00009, air: false, desc: 'Guided artillery rocket, 90 kg warhead.' },
    { id: 'brahmos', name: 'BrahMos', icon: '🚀', kind: 'cruise', W: 0.0003, air: false, desc: 'Supersonic cruise missile.' },
    { id: 'stormshadow', name: 'Storm Shadow', icon: '🛩️', kind: 'cruise', W: 0.00045, air: false, desc: 'Stealthy air-launched cruise missile.' },
    { id: 'kalibr', name: 'Kalibr', icon: '🛩️', kind: 'cruise', W: 0.0005, air: false, desc: 'Ship-launched cruise missile.' },
    { id: 'gbu57', name: 'GBU-57 MOP', icon: '🔩', kind: 'cruise', W: 0.0024, air: false, desc: '14 t bunker buster.' },
    { id: 'moab', name: 'MOAB', icon: '💥', kind: 'cruise', W: 0.011, air: false, desc: 'Mother Of All Bombs, 11 t of explosive.' },
    { id: 'foab', name: 'FOAB', icon: '💥', kind: 'cruise', W: 0.044, air: false, desc: 'Father Of All Bombs, thermobaric.' },
    { id: 'iskander', name: 'Iskander-M', icon: '🚀', kind: 'icbm', W: 50, air: true, desc: 'Short-range ballistic missile, nuclear warhead.' },
    { id: 'hwasong', name: 'Hwasong-17', icon: '🚀', kind: 'icbm', W: 300, air: true, desc: 'North Korean ICBM.' },
    { id: 'sarmat', name: 'RS-28 Sarmat', icon: '🚀', kind: 'icbm', W: 750, air: true, desc: 'Heavy ICBM, one of its warheads.' },
    { id: 'df41', name: 'DF-41', icon: '🚀', kind: 'icbm', W: 1000, air: true, desc: 'Chinese road-mobile ICBM.' },
    { id: 'poseidon', name: 'Poseidon', icon: '🌊', kind: 'icbm', W: 2000, air: false, desc: 'Nuclear torpedo drone, surface burst.' },
    { id: 'carpet', name: 'Carpet bomb', icon: '✈️', kind: 'carpet', W: 0.0003, air: false, desc: 'Click start and end of a line: three bombers lay bombs along it.' },
  ]),
  ...t('From space', [
    { id: 'rod', name: 'Rod from God', icon: '🛰️', kind: 'rod', W: 0.012, air: false, desc: 'A tungsten rod dropped from orbit.' },
    { id: 'chelyabinsk', name: 'Chelyabinsk', icon: '🌠', kind: 'asteroid', W: 450, air: true, hob: 25000, size: 20, desc: '20 m meteor that exploded high over Russia in 2013.' },
    { id: 'tunguska', name: 'Tunguska', icon: '☄️', kind: 'asteroid', W: 12000, air: true, hob: 8000, size: 50, desc: '50 m asteroid that flattened the taiga in 1908.' },
    { id: 'km1', name: '1 km asteroid', icon: '🪨', kind: 'asteroid', W: 7e7, air: false, size: 1000, desc: 'Regional extinction event.' },
    { id: 'apophis', name: 'Apophis', icon: '🪨', kind: 'asteroid', W: 1.2e6, air: false, size: 370, desc: '370 m asteroid that will pass very close in 2029.' },
    { id: 'dino', name: 'Chicxulub', icon: '🦖', kind: 'asteroid', W: 1e11, air: false, size: 10000, desc: '10 km of rock. Ask the dinosaurs.' },
  ]),
  ...t('Weird', [
    { id: 'ufo', name: 'UFO', icon: '🛸', kind: 'ufo', W: 0, air: false, desc: 'A saucer parks over the target and slowly beams people up.' },
    { id: 'duck', name: 'Giant duck', icon: '🦆', kind: 'duck', W: 0, air: false, desc: '250 m of yellow rubber. Squeak.' },
    { id: 'wind', name: 'Wind', icon: '🌬️', kind: 'wind', W: 0, air: false, desc: 'Click to blow the mushroom clouds away: a gust blows toward where you point, over all you can see.' },
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
