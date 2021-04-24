type CP<PHTM, C> = (
  props: C extends (props: infer R) => PHTM ? R : never,
  children?: PHTM
) => PHTM;
