import { ForwardedRef, forwardRef } from 'react'
import { View } from 'react-native'
import { Show } from '../show'
import { Text } from '../text'
import { colors } from '../colors'

type AvatarProps = {
  src?: string
  alt: string
  className?: string
}

export const Avatar = (props: AvatarProps) => {
  const hasImg = !!props.src

  const [firstName, lastName] = props.alt.toUpperCase().split(' ')

  const displayedName = firstName[0] + (lastName?.[0] || firstName?.[1])

  return (
    <View
      style={{
        width: 42,
        height: 42,
        borderRadius: 9999,
        overflow: 'hidden',
        backgroundColor: colors.zinc[50],
        borderWidth: 1,
        borderColor: colors.zinc[200],
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Show show={!props.src}>
        <Text>{displayedName}</Text>
      </Show>
    </View>
  )
}

Avatar.displayName = 'Avatar'
