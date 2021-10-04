const LOGIN_URL = 'http://localhost:8000/api/auth/login';
const SIGNUP_URL = 'http://localhost:8000/api/auth/register';
const DELETE_TOKEN_URL = "http://localhost:8000/api/auth/logout";
const CHECK_TOKEN_URL = "http://localhost:8000/api/auth/checkToken";
const GET_USER_URL = "http://localhost:8000/api/auth/user";
const UPDATE_USER = (userId)=>{ return `http://localhost:8000/api/user/${userId}/update`}
const REFRESH_TOKEN_URL = "http://localhost:8000/api/auth/token";
const FETCH_USER_URL = (userId)=>`http://localhost:8000/api/user/${userId}`
const POST = "http://localhost:8000/api/posts/create";
const ADD_COMMENT = (id)=>`http://localhost:8000/api/posts/${id}/comment`;
const LIKE_POST = (id)=>`http://localhost:8000/api/posts/${id}/like`;
const FOLLOW_USER = (id)=>`http://localhost:8000/api/user/${id}/follow`;
const UNFOLLOW_USER = (id)=>`http://localhost:8000/api/user/${id}/unfollow`;
const FEED_POSTS = `http://localhost:8000/api/posts/time/all`

export {LOGIN_URL,SIGNUP_URL,DELETE_TOKEN_URL,CHECK_TOKEN_URL,GET_USER_URL,UPDATE_USER,REFRESH_TOKEN_URL,FETCH_USER_URL,POST,ADD_COMMENT,LIKE_POST,FOLLOW_USER,UNFOLLOW_USER,FEED_POSTS};
