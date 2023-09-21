const initialState = {
    noOfcakes: 50,
    sold: 0,
    remain:50,
    price: 500,
};

const buyCake = (state = initialState, action) => {
    switch (action.type) {
        case 'BUY_CAKE':
            return {
                ...state,
                noOfcakes: state.noOfcakes - action.payload,
                sold:state.sold + action.payload,
            };
        default:
            return state;
   }
};