var React = require('react');
var render = require('react-dom').render;

var Inspector = require('..');
var InteractiveSelection = require('./interactive-selection');

var h = React.createElement;

var webSocket = new WebSocket('ws://localhost:8080');
webSocket.onmessage = ({data}) => {
	 render(
        h(Inspector, {
            data: JSON.parse(data),
            onClick: console.log.bind(console),
            interactiveLabel: InteractiveSelection,
            isExpanded: () => true,
        }),
        document.getElementById('inspector')
    );
}