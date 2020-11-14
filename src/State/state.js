let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Wake up samurai!", likesCount: 54},
                {id: 2, message: "It's time for city to burn", likesCount: 59},
                {id: 3, message: "We could murder someone for good price!", likesCount: 109},
                {id: 4, message: "Empty"},
                {id: 5, message: "Empty"}
            ],
            newPostText: 'something'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "How is everything goes?"},
                {id: 3, message: "Yo!"},
                {id: 4, message: "Yo!"},
                {id: 5, message: "Yo!"},
            ],
            dialogs: [
                {id: 1, name: "Alex"},
                {id: 2, name: "Evjeniya"},
                {id: 3, name: "Dina"},
                {id: 4, name: "Vlad"},
                {id: 5, name: "Ruslan"},
                {id: 6, name: "Friend"}
            ],
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
  if (action.type === 'ADD-POST')  {
      let newPost = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
  } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
  }
    }
}

export default store;
window.store = store;   //store это ООП