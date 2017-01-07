var Counter = React.createClass({
	getInitialState: function(){
		return {count : 0};
	},
	upUpUp: function(){
		this.setState({
			count: this.state.count + 1
		});
	},
	render : function(){
		return (<div><h2> count is {this.state.count}!</h2>
			<button type="button" onClick={this.upUpUp}>Up</button></div>);
	}
});