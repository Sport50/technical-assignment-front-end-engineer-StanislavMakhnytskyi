import { selector } from 'recoil'
import { IArticle } from '../types/article'
import { getArticles } from '../api/articles'

export const allArticlesState = selector<IArticle[]>({
  key: 'allArticlesState',
  get: async () => {
    try {
      const response = await getArticles()

      return response || []
    } catch (error) {
      console.error(`allArticlesState -> getArticles() ERROR: \n${error}`)
      return []
    }
  },
})
