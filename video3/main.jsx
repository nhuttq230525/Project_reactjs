console.log("bai tap1 ")

const listfruit = ["apple", "banana", "cherry", "lemonwater"]

function MyList() {
  return (
    <ul>
      {fruitlist.map(fruit =>
        <li key={fruit}>{fruit}</li>
      )}
    </ul>
  );
}

createRoot(document.getElementById("root").render(<MyList />))