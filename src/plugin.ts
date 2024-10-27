import plugin from 'tailwindcss/plugin'
import { config } from './config'
import components from './components'

export default plugin(({ addComponents }) => {
    addComponents(components)
}, config)