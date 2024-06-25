import axios from 'axios'

// Create a mock of axios
jest.mock('axios')
export const mockedAxios = axios as jest.Mocked<typeof axios>
