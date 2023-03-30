import ProfileComp from './profile/profileComponent';
import MyPic from './MyPic.jpg'

function App() {
  return (
    <div>
      <ProfileComp >
        <img src={MyPic} alt="My Profile Pic" width={200} height={250}/> 
      </ProfileComp>
    </div>
  );
}

export default App;
