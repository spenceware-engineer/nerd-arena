// import original module declarations
import type { AppTheme } from './themes.types'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme { }
}
