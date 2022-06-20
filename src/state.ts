import { selector } from 'recoil'
import { IArticle } from '../types/article'
import { getArticles, postArticles } from '../api/articles'

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

/**
 * This is the atom the UI components will use to display state.
 * When `articlesState` is updated,
 * the service request in `allArticlesState.get()` will be called,
 * which will then update `articleListState`
 * and trigger a redraw of any UI Components that
 * consume `articleListState`.
 */
// export const articleListState = atom<Article[]>({
//   key: 'articleListState',
//   default: allArticlesState,
// })
