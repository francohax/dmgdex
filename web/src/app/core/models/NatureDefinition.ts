import {Stat} from './Stats';

export enum NatureEnum {
    BASHFUL,
    DOCILE,
    HARDY,
    QUIRKY,

    ADAMANT,
    BRAVE,
    LONELY,
    NAUGHTY,
    BOLD,
    IMPISH,
    LAX,
    RELAXED,
    MODEST,
    MILD,
    RASH,
    QUIET,
    CALM,
    GENTLE,
    CAREFUL,
    SASSY,
    TIMID,
    HASTY,
    JOLLY,
    NAIVE
}

export const NeutralNatures = [NatureEnum.BASHFUL, NatureEnum.DOCILE, NatureEnum.HARDY, NatureEnum.QUIRKY];

export const NatureDefinitions = {
    ADMAMANT:   [Stat.ATK, Stat.SP_ATK],
    BRAVE:      [Stat.ATK, Stat.SPEED],
    LONELY:     [Stat.ATK, Stat.DEF],
    NAUGHTY:    [Stat.ATK, Stat.SP_DEF],

    BOLD:       [Stat.DEF, Stat.ATK],
    IMPISH:     [Stat.DEF, Stat.SP_ATK],
    LAX:        [Stat.DEF, Stat.SP_DEF],
    RELAXED:    [Stat.DEF, Stat.SPEED],

    MODEST:     [Stat.SP_ATK, Stat.ATK],
    MILD:       [Stat.SP_ATK, Stat.DEF],
    RASH:       [Stat.SP_ATK, Stat.SP_DEF],
    QUIET:      [Stat.SP_ATK, Stat.SPEED],

    CALM:       [Stat.SP_DEF, Stat.ATK],
    GENTLE:     [Stat.SP_DEF, Stat.DEF],
    CAREFUL:    [Stat.SP_DEF, Stat.SP_ATK],
    SASSY:      [Stat.SP_DEF, Stat.SPEED],

    TIMID:      [Stat.SPEED, Stat.ATK],
    HASTY:      [Stat.SPEED, Stat.DEF],
    JOLLY:      [Stat.SPEED, Stat.SP_ATK],
    NAIVE:      [Stat.SPEED, Stat.SP_DEF]
};

