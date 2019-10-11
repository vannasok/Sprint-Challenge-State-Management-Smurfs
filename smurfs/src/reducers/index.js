import {
   FETCHING,
   FETCHING_SUCCESS,
   FETCHING_FAILED,
   ADD_SMURF,
   ADD_SMURF_FAILED
} from '../actions';

const initialState = {
   smurfs: [],
   fetchingSmurf: false,
   addingSmurf: false,
   updateSmurf: false,
   deleteSmurf: false,
   error: null
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCHING:
         return {
            ...state,
            fetchingSmurf: false,
            error: 'fetch error'
         };
      case ADD_SMURF:
         return {
            ...state,
            fetchingSmurf: false,
            addingSmurf: true,
            error: 'add smurf error'
         };
      case ADD_SMURF_FAILED:
         return {
            ...state,
            fetchingSmurf: false,
            addingSmurf: false,
            error: action.payload
         };
      case FETCHING_SUCCESS:
         return {
            ...state,
            fetchingSmurf: true,
            error: '',
            smurfs: [...state.smurfs, ...action.payload]
         };
      case FETCHING_FAILED:
         return {
            ...state,
            fetchingSmurf: false,
            error: action.payload
         };
      default:
         return state;
   }
}; //close reducer

export default reducer;
