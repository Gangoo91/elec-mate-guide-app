
import { UnitContent } from './units/interfaces';
import { unit201 } from './units/unit201';
import { unit202 } from './units/unit202';
import { unit203 } from './units/unit203';
import { unit204 } from './units/unit204';
import { unit210 } from './units/unit210';
import { unit301 } from './units/unit301';
import { unit302 } from './units/unit302';
import { unit303 } from './units/unit303';
import { unit304 } from './units/unit304';
import { unit305 } from './units/unit305';
import { unit308 } from './units/unit308';

export type { UnitContent };

export const unitContent: Record<string, UnitContent> = {
  "201": unit201,
  "202": unit202,
  "203": unit203,
  "204": unit204,
  "210": unit210,
  "301": unit301,
  "302": unit302,
  "303": unit303,
  "304": unit304,
  "305": unit305,
  "308": unit308
};
