import { getCharactersInputStore } from '../../../../../src/modules/catalog/use-cases/get-characters/input'

describe('getCharactersInputStore', () => {
  test('search and page should init as undefined', async () => {
    // Arrange
    const sut = getCharactersInputStore.store.getState()

    // Assert
    expect(sut).toEqual({})
  })

  it('should set search', async () => {
    // Arrange
    const input = 'search'

    // Act
    getCharactersInputStore.actions.setSearch(input)

    // Assert
    expect(getCharactersInputStore.store.getState()?.search).toBe(input)
  })

  it('should set page', async () => {
    // Arrange
    const input = 2

    // Act
    getCharactersInputStore.actions.setPage(input)

    // Assert
    expect(getCharactersInputStore.store.getState()?.page).toBe(input)
  })

  afterEach(() => getCharactersInputStore.actions.reset())
})
