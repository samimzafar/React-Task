const initState={
    click:false,
    
}
const menuReducer=(state=initState,action)=>{
        switch(action.type){
            case 'TOGGLE':
                return {...state,click:!state.click}
            default:
                return state;
        }
}
export default menuReducer;