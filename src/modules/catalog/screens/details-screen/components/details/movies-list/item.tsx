import { Button } from '../../../../../../../components/ui/button'
import { colors } from '../../../../../../../components/ui/colors'
import { Text } from '../../../../../../../components/ui/text'
import { ResourceURL } from '../../../../../models/resource-url'
import { MovieMapper } from '../../../../../repository/movie/mapper'
import { useGetMovieById } from '../../../../../use-cases/get-movie-by-id/use-get-movie-by-id'

type ItemProps = {
  url: ResourceURL
}

export const Item = ({ url }: ItemProps) => {
  const id = MovieMapper.getIdFromURL(url)
  const getMovieById = useGetMovieById({ id })

  if (getMovieById.isLoading) return null

  return (
    <Button
      variant="ghost"
      style={{
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: 8,
        marginBottom: 8,
      }}
    >
      <Text>{getMovieById.data?.title}</Text>
      <Text
        style={{ color: colors.zinc[400] }}
        size="sm"
      >
        {getMovieById.data?.releaseDate.toLocaleDateString()}
      </Text>
      <Text
        style={{ color: colors.zinc[400] }}
        size="sm"
      >
        {getMovieById.data?.director}
      </Text>
    </Button>
  )
}
