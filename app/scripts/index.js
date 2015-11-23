var Todolist = React.createClass({
  createItem: function(itemText){
    return <li> {itemText} </li>

  },
  render: function(){
    return <ul>{this.props.items.map(this.createItem)}</ul>;
  }

});

var TodoApp = React.createClass({
  getInitialState: function(){
    return {items: [], text: ''};
  },
  handleChange: function(e){
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function(){
    return(
      <div>
        <h3>TodoList</h3>
        <Todolist items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value = {this.state.text} />
          <button class="btn btn-danger" >{'Add #' + (this.state.items.length+1)}</button>
        </form>
      </div>
    );
  }
});


React.render(
  <TodoApp />,
  document.getElementById('app')
);
