import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  Roboto_Flex,
  JetBrains_Mono,
  Saira,
  Saira_Condensed,
  Anton,
  Archivo,
  Manrope,
} from "next/font/google";
import { DesignSwitcher } from "./_components/design-switcher";

// Variable font with many axes — the star of the Type Lab (/1).
const flex = Roboto_Flex({
  subsets: ["latin"],
  axes: ["wdth", "opsz", "GRAD", "slnt", "XTRA", "YOPQ"],
  variable: "--f-flex",
  display: "swap",
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--f-mono", display: "swap" });
const saira = Saira({ subsets: ["latin"], variable: "--f-saira", display: "swap" });
const sairaCond = Saira_Condensed({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--f-saira-cond", display: "swap" });
const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--f-anton", display: "swap" });
const archivo = Archivo({ subsets: ["latin"], variable: "--f-archivo", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--f-manrope", display: "swap" });

// Seven-segment display faces for Signal (/2).
const seg7 = localFont({ src: "../../public/fonts/DSEG7Classic-Bold.woff2", variable: "--f-seg7", display: "swap" });
const seg14 = localFont({ src: "../../public/fonts/DSEG14Classic-Bold.woff2", variable: "--f-seg14", display: "swap" });

export const metadata: Metadata = {
  title: "Aryan Gupta — Design Explorations",
  description: "Five out-of-distribution design directions for Aryan Gupta's portfolio.",
};

const fontVars = [
  flex.variable, mono.variable, saira.variable, sairaCond.variable,
  anton.variable, archivo.variable, manrope.variable, seg7.variable, seg14.variable,
].join(" ");

export default function DesignsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={fontVars}>
      {children}
      <DesignSwitcher />
    </div>
  );
}
