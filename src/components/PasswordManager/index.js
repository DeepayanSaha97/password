import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import passwordItem from '../passwordItem'

import './index.css'

class PasswordManager extends Component {
  state = {
    websiteNameInput: '',
    userNameInput: '',
    passwordInput: '',
    passwordCount: 0,
    passwordList: [],
    isPasswordListEmpty: true,
    passwordSearchInput: '',
  }

  onEnterWebsite = e => {
    const {websiteNameInput} = this.state
    this.setState({onEnterWebsite: e.target.value})
  }

  onEnterUserName = e => {
    const {userNameInput} = this.state
    this.setState({userNameInput: e.target.value})
  }

  onEnterPassword = e => {
    const {passwordInput} = this.state
    this.setState({passwordInput: e.target.value})
  }

  onAddPassword = () => {
    const {
      websiteNameInput,
      userNameInput,
      passwordInput,
      passwordList,
    } = this.state

    const newPassword = {
      id: uuidv4(),
      websiteNameInput,
      userNameInput,
      passwordInput,
    }

    const newPasswordList = [...passwordList, newPassword]

    this.setState({passwordList: newPasswordList, isPasswordListEmpty: false})

    this.setState(prevState => ({passwordCount: prevState.passwordCount + 1}))
  }

  removePassword = id => {
    let {passwordList} = this.state

    passwordList = passwordList.filter(each => each.id !== id)

    const newPasswordList = [...passwordList]

    this.setState({passwordList: newPasswordList})
  }

  render() {
    const {passwordList, isPasswordListEmpty, passwordCount} = this.state
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt=" app logo"
          className="app-logo"
        />
        <div className="password-manager-header">
          <div className="password-form-con">
            <h1 className="password-form-heading">Add New Password</h1>
            <form onSubmit={this.onAddPassword}>
              <div className="form-input-el-con">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="icon"
                />
                <input
                  type="text"
                  onChange={this.onEnterWebsite}
                  className="input-field"
                  placeholder="Enter Website"
                />
              </div>
              <div className="form-input-el-con">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="icon"
                />
                <input
                  type="text"
                  onChange={this.onEnterUserName}
                  className="input-field"
                  placeholder="Enter UserName"
                />
              </div>
              <div className="form-input-el-con">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="icon"
                />
                <input
                  type="password"
                  onChange={this.onEnterPassword}
                  className="input-field"
                  placeholder="Enter Password"
                />
              </div>
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
          <img
            className="password-manager-img"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
          />
        </div>

        <div className="password-manager-footer">
          <div className="footer-heading-search-con">
            <h1 className="footer-heading">Your Passwords</h1>
            <p className="password-count-text">{passwordCount}</p>

            <div className="search-icon-input-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
              <input
                type="search"
                onChange={this.onSearchPassword}
                className="search-input-field"
                placeholder="Search"
              />
            </div>
          </div>
          <hr />
          <div className="list-img-show-pass-btn-con">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="label-text">
              Show Passwords
            </label>
            {isPasswordListEmpty ? (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                />
                <p className="text">No Passwords</p>
              </div>
            ) : (
              <ul className="passwords-list-con">
                {passwordList.map(each => (
                  <passwordItem
                    key={each.id}
                    itemDetails={each}
                    onDelete={this.removePassword}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
