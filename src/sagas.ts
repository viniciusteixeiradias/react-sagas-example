import { call, put, takeEvery } from "redux-saga/effects";
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from "./actions";

const user = {
  id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
}

type User = typeof user;

function usersFetch() {
  return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
}

function* workGetUsersFetch() {
  console.log(1)
  const users: User[]  = yield call(usersFetch)
  yield put({ type: GET_USERS_SUCCESS, users })
  console.log(2)
}

function* mySaga() {
  yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
}

export default mySaga;