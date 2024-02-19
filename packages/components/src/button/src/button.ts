import type { ExtractPropTypes } from "vue";

import type Button from "./button.vue";

export const buttonProps = {
  title: {
    type: String,
    default: "按钮",
  },
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

export type ButtonInstance = InstanceType<typeof Button>;
