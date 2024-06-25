import { ComponentProps } from 'react'
import { Text } from '../text'
import { View } from 'react-native'

const Root = (props: ComponentProps<typeof View>) => <View {...props} />

const Title = (props: ComponentProps<typeof Text>) => (
  <Text
    {...props}
    size="3xl"
    style={[{ fontWeight: '700' }, props.style]}
  />
)

export const Header = {
  Root,
  Title,
}
