# React Todos - application using forms and different kinds of functions in React
This is one the projects I enjoyed the most. Some of the few important things I learned with this project were using components such as `Nav.js` and `TaskList.js` to handle different parts of the application.

## Some Code Snippets

### one of the wonders of JSX support functionality in React
```javascript
return list.map((el, index) =>
    checkIndex[index] === true ? (
      <li key={index} style={style}>
        <input type="checkbox" value={index} onClick={checked} />{" "}
        <del> {el} </del>{" "}
        <button name="delete" onClick={deleteHit} value={index}>
          {" "}
          Delete{" "}
        </button>{" "}
      </li>
    ) : (
      <li key={index} style={style}>
        <input type="checkbox" value={index} onClick={checked} /> {el}{" "}
        <button name="delete" onClick={deleteHit} value={index}>
          {" "}
          Delete{" "}
        </button>{" "}
        <button name="edit" onClick={edit} value={index}>
          {" "}
          Edit{" "}
        </button>{" "}
      </li>
    )
  );
```
The code above maps through the elements in the array `list` and gives out a JSX element `li` which is the list of todos with delete and edit buttons on each of them.

### Input Handling
```javascript
<form onSubmit={onSubmit}>
      <p> To Add => {inputDisplay} </p>{" "}
      <input
        type="text"
        placeholder="I have to do this or that"
        onChange={currInput}
        value={currVal}
      />{" "}
      <button type="submit"> Add Task </button>
    </form>
```

### Function `addTask()` for adding tasks
```javascript
addTask = event => {
    event.preventDefault();
    console.log("[App.js] addTask runs");

    if (this.state.editMode) {
      if (this.state.currentVal !== "") {
        console.log("value of newArr: ");

        this.setState({
          currentVal: "",
          todos: this.state.todos.map((element, index) => {
            if (this.state.editIndex === index) {
              console.log("if conditional in forEach");
              return this.state.currentVal;
            } else return element;
          }),
          editMode: false
        });
      }
    } else if (this.state.currentVal !== "") {
      this.setState({
        currentVal: "",
        todos: [...this.state.todos, this.state.currentVal]
      });
    }
  };
```

### Function `editTask()` for editing  the todo task whose Delete button is clicked
```javascript
editEl = event => {
    console.log("[App.js] editEl clicked");
    console.log("editEl event.target.value: ", event.target.value);
    console.log("type of target value: ", typeof event.target.value);

    this.setState({
      currentVal: this.state.todos[parseInt(event.target.value)],
      editMode: true,
      editIndex: parseInt(event.target.value)
    });
  };
```
### Function `deletEl()` for deleting the todo task whose Delete button is clicked:
```javascript
 deleteEl = props => {
    console.log("[App.js] deleteEl clicked");
    console.log("props.key deleteEl: " + props.target.value);

    this.setState({
      todos: this.state.todos.filter(
        (el, index) => index !== parseInt(props.target.value)
      ),
      checkIndex: this.state.checkIndex.filter(
        (el, index) => index !== parseInt(props.target.value)
      )
    });
  };
```

### `currentInput()` stores the current input in `this.state.currentVal` on change
```javascript
currentInput = props => {
    console.log("props in currentInput 29", props.target.value);
    console.log("currentInput [App.js]: ", props.target.value);

    this.setState({
      currentVal: props.target.value
    });
  };
```
### an attempt to give a cross out the task already completed when the select box is checked, however I am still getting an error: When I delete a checked todo task, the task below it takes the strikethrough. When I get time, I will try to filter out the element holding the check or not checked boolean or `true or false`
```javascript
  onCheck = props => {
    console.log("[App.js] onCheck event");

    const toCkIndex = parseInt(props.target.value);

    let tmp = this.state.todos.map((el, index) => {
      if (index === toCkIndex) {
        console.log("index===toCkIndex conditional");

        if (this.state.checkIndex[index] === true) {
          return false;
        }

        return true;
      }

      if (this.state.checkIndex[index] === true) {
        console.log("this.state.checkIndex[index]===true");
        return true;
      }

      return false;
    });

    console.log("tmp in onCheckCheck ", tmp);
    this.setState({
      checkIndex: tmp
    });
  };
```
