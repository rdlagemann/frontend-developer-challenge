import axios from 'axios'
import { selectShowcase } from './selectors'

const types = {
  FETCH_DATA: 'components/ProdutoShowcase/FETCH_DATA',
  RECEIVE_DATA: 'components/ProdutoShowcase/RECEIVE_DATA',
  RECEIVE_ERROR: 'components/ProdutoShowcase/RECEIVE_ERROR'
}

export const initialState = {
  isFetching: false,
  error: null,
  products: [],
  requestUrl:
    '//frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1'
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_DATA:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case types.RECEIVE_DATA:
      return {
        ...state,
        products: [...state.products, ...action.payload.products],
        requestUrl: `//${action.payload.nextPage}`,
        isFetching: false,
        error: null
      }
    case types.RECEIVE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state
  }
}

/** actions */
export const fetchData = () => ({
  type: types.FETCH_DATA
})

export const receiveData = (data) => ({
  type: types.RECEIVE_DATA,
  payload: data
})

export const receiveError = (error) => ({
  type: types.RECEIVE_ERROR,
  payload: error
})

export function loadProducts() {
  return (dispatch, getState) => {
    const { requestUrl } = selectShowcase(getState())

    dispatch(fetchData())

    axios
      .get(requestUrl)
      .then((res) => dispatch(receiveData(res.data)))
      .catch((err) => {
        dispatch(receiveError(err))
      })
  }
}
