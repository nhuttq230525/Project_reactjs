// function App() {
//   // const fruitList = ["Apple", "Banana", "Orange"];

//   // return (
//   //   <div>
//   //     <h1>Học ReactJS</h1>

//   //     <ul>
//   //       {fruitList.map((fruit, index) => (
//   //         <li key={index}>{fruit}</li>
//   //       ))}
//   //     </ul>
//   //   </div>
//   // );
// }
// export default App;

const users = [
  { id: 1, name: "nhut", age: "30" },
  { id: 2, name: "kieu", age: "10" },
  { id: 3, name: "hai", age: "20" }
]

// function UserList() {
//   return (
//     <div>
//       <h1>Danh sach</h1>

//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name} is {user.age} years old</li>
//         ))}
//       </ul>
//     </div>
//   )
// }


// tham so cua map
function UserList() {
  return (
    <div>
      <h1>Danh sach</h1>

      <ul>
        {users.map((user, index, array) => (
          <li key={user.id}>
            {user.name} is {user.age} years old — Stt: {index + 1}/{array.length}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UserList;