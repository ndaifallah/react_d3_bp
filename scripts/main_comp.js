var MyComponent = React.createClass({
    render: function(){
        return (
            <h2>Hello, world! {this.props.name}!</h2>
        );
    }
});

var MyButton = React.createClass({
	render: function(){
		return <a href="#" class="btn btn-sucess">Buttio</a>
	}
});