import './index.css'

const passwordItem = args => {
  const {itemDetails, onDelete} = args
  const {id, websiteNameInput, userNameInput, passwordInput} = itemDetails

  const slicedName = websiteNameInput.slice(0, 1).toUpperCase()

  const handleDelete = () => {
    onDelete(id)
  }

  return (
    <li className="password-item">
      <div className="website-logo">
        <p className="sliced-name">{slicedName}</p>
      </div>
      <div>
        <p className="input-text">{websiteNameInput}</p>
        <p className="input-text">{userNameInput}</p>
        <p className="input-text">{passwordInput}</p>
      </div>
      <button
        onClick={handleDelete}
        data-testid="delete"
        type="button"
        className="delete-btn"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default passwordItem
