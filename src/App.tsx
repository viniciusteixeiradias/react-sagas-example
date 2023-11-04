import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersFetch } from './actions';

interface State {
  users: {
    name: string
  }[]
}

function App() {
  console.log('reload')
  const dispatch = useDispatch();
  const users = useSelector((state: State) => state.users);
  return (
    <>
      <button onClick={() => dispatch(getUsersFetch())}>Get Users</button>
      <div>Users: {users?.map((user => (<div>{user.name}</div>)))}</div>
    </>
  )
}

export default App
