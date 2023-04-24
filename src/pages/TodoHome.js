import ListBoard from "../component/todoList/ListBoard";
import Liststs from "../component/todoList/Lists";
import ListTags from "../component/todoList/ListTags";
//image
import Logo from "../image/logo.svg"

function TodoHome() {
  return (
    <div id="loginPage">
      <div className="w-11/12 sm:w-96 py-10 mx-auto">
        <img className="w-full mb-2 opacity-75" src={ Logo } alt="Logo" />
          <ListBoard/>
          <Liststs/>
          <ListTags/>
        <main/>
      </div>
    </div>
  )
}

export default TodoHome;