import { combineReducers } from 'redux';
import movieReviewsReducer from './movieReviewsReducer';


export default combineReducers({
    movieReviews: movieReviewsReducer,

})