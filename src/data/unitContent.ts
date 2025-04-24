
import { UnitContent } from './units/interfaces';
import { unit201 } from './units/unit201';
import { unit202 } from './units/unit202';
import { unit203 } from './units/unit203';
import { unit210 } from './units/unit210';

export type { UnitContent };

export const unitContent: Record<string, UnitContent> = {
  "201": unit201,
  "202": unit202,
  "203": unit203,
  "210": unit210
};
