import { buttonStyles } from '@styles/components'
import { colors } from '@styles/foundations'

import { extendTheme } from '@chakra-ui/react'
import styles from './global'

export default extendTheme({
  colors,
  styles,
  components: { Button: buttonStyles }
})
