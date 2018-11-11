import _ from 'lodash'
import {
  useContext,
  useState,
  useEffect,
} from 'react'

const calculate = (queries) => (
  _.reduce(queries, (memo, value, key) => ({
    ...memo,
    [key]: value.matches,
  }), {})
)

export default (Context) => () => {
  const { breakpoints } = useContext(Context)

  const queries = _.reduce(breakpoints, (memo, value, key) => ({
    ...memo,
    [key]: window.matchMedia(`(max-width: ${value})`),
  }), {})

  const [state, setState] = useState(calculate(queries))

  useEffect(() => {
    let mounted = true

    const onChange = () => {
      if (!mounted) return

      setState(calculate(queries))
    }

    _.each(queries, (query) => query.addListener(onChange))
    setState(calculate(queries))

    return () => {
      mounted = false
      _.each(queries, (query) => query.removeListener(onChange))
    }
  }, queries)

  return state
}
