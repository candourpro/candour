import {
  useContext,
} from 'react'

import convert from './convert'

export default (Context) => (style) => {
  const config = useContext(Context)
  return convert(config, style)
}
