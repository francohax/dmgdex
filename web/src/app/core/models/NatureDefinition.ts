import {StatEnum} from './Stats';

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
    ADAMANT:   [StatEnum.ATK, StatEnum.SP_ATK],
    BRAVE:      [StatEnum.ATK, StatEnum.SPEED],
    LONELY:     [StatEnum.ATK, StatEnum.DEF],
    NAUGHTY:    [StatEnum.ATK, StatEnum.SP_DEF],

    BOLD:       [StatEnum.DEF, StatEnum.ATK],
    IMPISH:     [StatEnum.DEF, StatEnum.SP_ATK],
    LAX:        [StatEnum.DEF, StatEnum.SP_DEF],
    RELAXED:    [StatEnum.DEF, StatEnum.SPEED],

    MODEST:     [StatEnum.SP_ATK, StatEnum.ATK],
    MILD:       [StatEnum.SP_ATK, StatEnum.DEF],
    RASH:       [StatEnum.SP_ATK, StatEnum.SP_DEF],
    QUIET:      [StatEnum.SP_ATK, StatEnum.SPEED],

    CALM:       [StatEnum.SP_DEF, StatEnum.ATK],
    GENTLE:     [StatEnum.SP_DEF, StatEnum.DEF],
    CAREFUL:    [StatEnum.SP_DEF, StatEnum.SP_ATK],
    SASSY:      [StatEnum.SP_DEF, StatEnum.SPEED],

    TIMID:      [StatEnum.SPEED, StatEnum.ATK],
    HASTY:      [StatEnum.SPEED, StatEnum.DEF],
    JOLLY:      [StatEnum.SPEED, StatEnum.SP_ATK],
    NAIVE:      [StatEnum.SPEED, StatEnum.SP_DEF]
};

