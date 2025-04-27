
import { ComponentCategory } from "@/types/arLearning";
import { mainComponents } from "./mainComponents";
import { fittings } from "./fittings";
import { conduitAccessories } from "./conduitAccessories";

export const componentCategories: ComponentCategory[] = [
  {
    id: 'protection-devices',
    name: 'Protection Devices',
    items: mainComponents.filter(c => ['rcbo', 'mcb', 'rcd'].includes(c.id))
  },
  {
    id: 'distribution-equipment',
    name: 'Distribution Equipment',
    items: mainComponents.filter(c => ['consumer-unit', 'metal-conduit', 'junction-box'].includes(c.id))
  },
  {
    id: 'installation-components',
    name: 'Installation Components',
    items: mainComponents.filter(c => ['socket-outlet', 'metal-clad-switch'].includes(c.id))
  },
  {
    id: 'fittings',
    name: 'Electrical Fittings',
    items: fittings
  },
  {
    id: 'conduit-accessories',
    name: 'Conduit Accessories',
    items: conduitAccessories
  }
];

export const arComponents = [
  ...mainComponents,
  ...fittings,
  ...conduitAccessories
];
