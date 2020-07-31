import { StoryFn } from '@storybook/addons'
import GlobalStyles from '../src/styles/gobal'

const withGlobalStyles = (stortFn: StoryFn) => (
  <>
    <GlobalStyles />
    {stortFn()}
  </>
)

export default withGlobalStyles
