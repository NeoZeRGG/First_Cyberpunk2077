const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Wake up samurai!", likesCount: 54},
        {id: 2, message: "It's time for city to burn", likesCount: 59},
        {id: 3, message: "We could murder someone for good price!", likesCount: 109},
        {id: 4, message: "Empty"},
        {id: 5, message: "Empty"}
    ],
    newPostText: 'something'
};


const userReducer = (state = initialState, action) => {

}


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default userReducer;