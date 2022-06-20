import { AxiosError } from 'axios'
import axios from '../src/axios'
import { IArticle } from '../types/article'

export const articlesUrl = '/api/articles'

export async function getArticles() {
  try {
    const response = await axios.get<IArticle[]>(articlesUrl)
    return response.data || []
  } catch (error) {
    throw new Error(
      `Error in 'axiosGetJsonData(${articlesUrl})': ${
        (error as Error | AxiosError).message
      }`
    )
  }
}

export async function postArticles(article: IArticle) {
  try {
    const response = await axios.post<IArticle[]>(articlesUrl, {
      body: article,
    })
    return response.data || []
  } catch (error) {
    throw new Error(
      `Error in 'axiosGetJsonData(${articlesUrl})': ${
        (error as Error | AxiosError).message
      }`
    )
  }
}
