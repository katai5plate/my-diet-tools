type CP<C> = (
  props: C extends (props: infer R) => any ? R : never,
  children?: any
) => any;
