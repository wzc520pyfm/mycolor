import { DecimalColorRGB } from "../../type";

export {};

declare module "ohcolor" {
  interface MyColor {
    /** Override format: Support formatting to get decimal number. */
    format<T extends "dec" = "dec", R = DecimalColorRGB>(f: T): R;
  }
}
