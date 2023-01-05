import { merge } from "theme-ui"
import originalTheme from "@lekoarts/gatsby-theme-jodie/src/gatsby-plugin-theme-ui/index"

const theme = merge(originalTheme, {
  fonts: {
    body: `"Poppins", -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
  },
  colors: {
    primary: `#077cd9`,
    primaryLight: `#83beec`,
    textMuted: `#46505f`,
    textMutedLight: `#a0aab8`,
  },
})

export default theme
