import SuggestedFriends from "./SuggestedFriends.jsx"
import { users } from "./users/usersdb.js"
import './styles/App.css'

export default function App () {
  return (
    <section className="App">
      {
        users.map(({ isFollowing, name, userName }) => (
          <SuggestedFriends
            key={userName}
            isFollowing={isFollowing}
            name={name}
            userName={userName}
          >
            {name}
          </SuggestedFriends>
        ))
      }
    </section>
  )
}

