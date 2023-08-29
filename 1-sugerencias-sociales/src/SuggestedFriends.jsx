import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export default function SuggestedFriends ({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  const imgUrl = `https://unavatar.io/${userName}`
  const textButton = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonIsFollowing = isFollowing
    ? 'suggestionCard-button isFollowing'
    : 'suggestionCard-button'

  return (
    <article className="suggestionCard">
      <header className="suggestionCard-header">
        <img
          className="suggestionCard-img"
          src={imgUrl}
          alt="User image" />
        <div className="suggestionCard-info">
          <strong>{children}</strong>
          <small className="suggestionCard-infoUserName">@{userName}</small>
        </div>
      </header>

      <aside>
        <button className={buttonIsFollowing} onClick={handleClick}>
          <span className="suggestionCard-text">{textButton}</span>
          <span className="suggestionCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
