export type ToolKind = 'nuke' | 'asteroid' | 'rod' | 'duck' | 'icbm' | 'cruise' | 'railgun' | 'carpet';

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
  ...t('Nucleari', [
    { id: 'davy', name: 'Davy Crockett', icon: '💣', kind: 'nuke', W: 0.02, air: false, desc: 'La più piccola atomica mai costruita, sparata da un cannoncino.' },
    { id: 'littleboy', name: 'Little Boy', icon: '💣', kind: 'nuke', W: 15, air: true, desc: 'Hiroshima, 6 agosto 1945.' },
    { id: 'fatman', name: 'Fat Man', icon: '💣', kind: 'nuke', W: 21, air: true, desc: 'Nagasaki, 9 agosto 1945.' },
    { id: 'w76', name: 'W76-1', icon: '☢️', kind: 'nuke', W: 90, air: true, desc: 'Testata dei missili Trident II.' },
    { id: 'w87', name: 'W87', icon: '☢️', kind: 'nuke', W: 300, air: true, desc: 'Testata del Minuteman III.' },
    { id: 'w88', name: 'W88', icon: '☢️', kind: 'nuke', W: 475, air: true, desc: 'Testata pesante del Trident II.' },
    { id: 'b83', name: 'B83', icon: '☢️', kind: 'nuke', W: 1200, air: true, desc: 'La bomba più potente nell’arsenale USA.' },
    { id: 'ivymike', name: 'Ivy Mike', icon: '🍄', kind: 'nuke', W: 10400, air: false, desc: 'Prima bomba H, Enewetak 1952.' },
    { id: 'bravo', name: 'Castle Bravo', icon: '🍄', kind: 'nuke', W: 15000, air: false, desc: 'Il più grande test americano, Bikini 1954.' },
    { id: 'tsar', name: 'Tsar Bomba', icon: '👑', kind: 'nuke', W: 50000, air: true, desc: 'La più potente mai fatta esplodere, 1961.' },
  ]),
  ...t('Missili e armi', [
    { id: 'icbm', name: 'ICBM', icon: '🚀', kind: 'icbm', W: 300, air: true, desc: 'Piazza la base, poi clicca i bersagli: arco balistico da mezzo pianeta. Testata W87.' },
    { id: 'cruise', name: 'Missile da crociera', icon: '🛩️', kind: 'cruise', W: 0.00045, air: false, desc: 'Vola basso dalla tua base fino al bersaglio. Esplosivo convenzionale.' },
    { id: 'railgun', name: 'Cannone a rotaia', icon: '⚡', kind: 'railgun', W: 0.003, air: false, desc: 'Piazza una torretta: spara da sola proiettili a Mach 7 nel raggio di 15 km.' },
    { id: 'carpet', name: 'Bombardamento a tappeto', icon: '✈️', kind: 'carpet', W: 0.0003, air: false, desc: 'Clicca inizio e fine: tre bombardieri sganciano lungo la linea.' },
  ]),
  ...t('Dallo spazio', [
    { id: 'rod', name: 'Bacchetta di Dio', icon: '🛰️', kind: 'rod', W: 0.012, air: false, desc: 'Un’asta di tungsteno lasciata cadere dall’orbita.' },
    { id: 'chelyabinsk', name: 'Čeljabinsk', icon: '🌠', kind: 'asteroid', W: 450, air: true, hob: 25000, size: 20, desc: 'Meteora da 20 m esplosa in quota nel 2013.' },
    { id: 'tunguska', name: 'Tunguska', icon: '☄️', kind: 'asteroid', W: 12000, air: true, hob: 8000, size: 50, desc: 'Asteroide da 50 m che rase al suolo la taiga nel 1908.' },
    { id: 'km1', name: 'Asteroide 1 km', icon: '🪨', kind: 'asteroid', W: 7e7, air: false, size: 1000, desc: 'Impatto da estinzione regionale.' },
    { id: 'dino', name: 'Chicxulub', icon: '🦖', kind: 'asteroid', W: 1e11, air: false, size: 10000, desc: '10 km di roccia. Chiedete ai dinosauri.' },
  ]),
  ...t('Assurdo', [
    { id: 'duck', name: 'Papera gigante', icon: '🦆', kind: 'duck', W: 0, air: false, desc: '250 m di gomma gialla. Squeak.' },
  ]),
];

export const TOOL_GROUPS = [...new Set(TOOLS.map((x) => x.group))].map((g) => ({ name: g, tools: TOOLS.filter((x) => x.group === g) }));

export function fmtW(W: number): string {
  if (W >= 1e6) return (W / 1e6).toLocaleString('it-IT', { maximumFractionDigits: 0 }) + ' Gt';
  if (W >= 1000) return (W / 1000).toLocaleString('it-IT', { maximumFractionDigits: 1 }) + ' Mt';
  if (W >= 1) return W + ' kt';
  if (W >= 0.001) return Math.round(W * 1000) + ' t';
  return Math.round(W * 1e6) + ' kg';
}
