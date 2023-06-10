import './index.css'

function UserInfo() {
  return (
    <div className="userInfoContainer">
      <img
        className="profileImg"
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
      />
      <h1 className="userName">Wade Warren</h1>
      <p className="userDesignation">Software developer at UK</p>
    </div>
  )
}
export default UserInfo
