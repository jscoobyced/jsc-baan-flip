import { ContentManager } from './ContentManager'

// Mock the fetch API
const mockFetch = vi.fn()
globalThis.fetch = mockFetch

describe('ContentManager', () => {
  let contentManager: ContentManager

  beforeEach(() => {
    contentManager = new ContentManager()
    // Clear the content before each test
    contentManager = new ContentManager()
  })

  afterEach(() => {
    // Clear mock calls after each test
    mockFetch.mockClear()
  })

  describe('loadContent', () => {
    it('should load content successfully from a valid language file', async () => {
      const mockContent = {
        hero_title: 'Test Title',
        hero_subtitle: 'Test Subtitle',
      }

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockContent),
      })

      const result = await contentManager.loadContent('en')

      expect(result).toBe(true)
      expect(mockFetch).toHaveBeenCalledWith('/content/en.content.json')
      expect(contentManager.getContent('hero_title')).toBe('Test Title')
      expect(contentManager.getContent('hero_subtitle')).toBe('Test Subtitle')
    })

    it('should fallback to default content when fetch fails', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 404,
      })

      const result = await contentManager.loadContent('fr')

      expect(result).toBe(true)
      // Should have fallback content
      expect(contentManager.getContent('hero_title')).toBe(
        'Property Flipping Platform',
      )
      expect(contentManager.getContent('hero_subtitle')).toBe(
        'Connect property owners with renovation experts to quickly sell and flip properties.',
      )
    })

    it('should handle fetch errors gracefully', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Network error'))

      const result = await contentManager.loadContent('es')

      expect(result).toBe(true)
      // Should have fallback content
      expect(contentManager.getContent('hero_title')).toBe(
        'Property Flipping Platform',
      )
    })
  })

  describe('getContent', () => {
    it('should return content for existing keys', async () => {
      const mockContent = {
        hero_title: 'Test Title',
        hero_subtitle: 'Test Subtitle',
      }

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockContent),
      })

      // Load content first
      await contentManager.loadContent('en')
      expect(contentManager.getContent('hero_title')).toBe('Test Title')
      expect(contentManager.getContent('hero_subtitle')).toBe('Test Subtitle')
    })

    it('should return the key itself for non-existing keys', () => {
      expect(contentManager.getContent('non_existing_key')).toBe(
        'non_existing_key',
      )
    })
  })

  describe('getContentWithParams', () => {
    it('should replace parameters in content strings', async () => {
      const mockContent = {
        welcome_message: 'Welcome {name}! You have {count} messages.',
      }

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockContent),
      })

      // Load content first
      await contentManager.loadContent('en')
      const result = contentManager.getContentWithParams('welcome_message', {
        name: 'John',
        count: '5',
      })
      expect(result).toBe('Welcome John! You have 5 messages.')
    })

    it('should return content without replacements if no parameters match', async () => {
      const mockContent = {
        simple_message: 'Hello world',
      }

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockContent),
      })

      // Load content first
      await contentManager.loadContent('en')
      const result = contentManager.getContentWithParams('simple_message', {
        name: 'John',
      })
      expect(result).toBe('Hello world')
    })
  })
})
