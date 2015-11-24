/**@jsx React.DOM*/

var ToDo = React.createClass({
  render: function() {
    var defaultClass = 'callout';

   //defaultClass += this.props.done ? ' callout-success' : ' callout-info';

    return (
      <div className={defaultClass}>
        <span>{this.props.value}</span>
        <i className='close' onClick={this.props.onClickClose}>&times;</i>
      </div>
    )
  }
});
  
var ToDoList = React.createClass({
  getInitialState: function() {
    return {
      todos: []
    }
  },
  addTodo: function() {
    var todos = this.state.todos;

    todos.push({
      value: this.state.inputValue
    });

    this.setState({
      todos: todos,
      inputValue: ''
    });

    // Return false for form
    return false;
  },
  handleChange: function(e) {
    this.setState({
      inputValue: e.target.value
    });
  },
  removeTodo: function(index) {
    this.state.todos.splice(index, 1);

    this.setState({
      todos: this.state.todos
    });
  },
  render: function() {

    var todos = this.state.todos.map(function(todo, index) {
      return (
        <ToDo
        key={index}
        value={todo.value}        
        onClickClose={this.removeTodo.bind(this, index)}
      /> );
    }.bind(this));

    return (
      <div className='container'>
        <div className='col-xs-6 col-xs-offset-3'>
          <h1>My Todo List</h1>
          {todos}
          <form
            onSubmit={this.addTodo}>
            <div className='input-group'>
              <input type='text' value={this.state.inputValue}
                onChange={this.handleChange}
                className='form-control'
                placeholder='What do you need to do?'
              />
              <span className='input-group-btn'> 
                <button className='btn btn-success'>Add Todo</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

React.renderComponent(ToDoList(), document.getElementById('app'));
