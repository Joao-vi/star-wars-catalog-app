import { ComponentProps } from 'react'
import { Text } from '../text'
import { View } from 'react-native'

const Root = (props: ComponentProps<typeof View>) => (
  <View
    {...props}
    style={[{ flexDirection: 'row', flex: 1, alignItems: 'center' }]}
  />
)

const Title = (props: ComponentProps<typeof Text>) => (
  <Text
    {...props}
    size="lg"
    style={[{ fontWeight: '600' }, props.style]}
  />
)

export const Header = {
  Root,
  Title,
}
