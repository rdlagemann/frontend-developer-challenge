import { connect } from 'react-redux'
import Showcase from './Showcase'
import { selectShowcase } from './selectors'
import { loadProducts } from './reducer'

const mapStateToProps = (state) => {
  const showcaseReducer = selectShowcase(state)
  return {
    products: showcaseReducer.products,
    isFetching: showcaseReducer.isFetching,
    error: showcaseReducer.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadProducts: () => dispatch(loadProducts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Showcase)
