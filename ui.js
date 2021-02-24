"use strict";
const React = require("react");
const { useInput, useApp, Text, Box } = require("ink");
// const BigText = require("ink-big-text");
// const Gradient = require("ink-gradient");
const CFonts = require('cfonts');

CFonts.say('Snake Deluxe', {
	font: 'block',
	align: 'center',
	colors: ['red'],
	background: 'black',
	letterSpacing: 1,
	lineHeight: 4,
	space: true,
	maxLength: '0',
	gradient: ['red', 'blue'],
	independentGradient: false,
	transitionGradient: false,
	env: 'node'
});

const App = () => {
    const { exit } = useApp();
    const [x, setX] = React.useState(1);
    const [y, setY] = React.useState(1);

    useInput((input, key) => {
        if (input === "q") {
            exit();
        }

        if (key.leftArrow) {
            setX(Math.max(1, x - 1));
        }

        if (key.rightArrow) {
            setX(Math.min(20, x + 1));
        }

        if (key.upArrow) {
            setY(Math.max(1, y - 1));
        }

        if (key.downArrow) {
            setY(Math.min(10, y + 1));
        }
    });

    return (
        <Box flexDirection="column">
			{/* <Gradient name="rainbow">
				<BigText text="snake deluxe"/>
			</Gradient> */}
            <Text>Use arrow keys to move the icon. Press "q" to exit.</Text>
            <Box height={12} paddingLeft={x} paddingTop={y}>
                <Text>😁</Text>
            </Box>
        </Box>
    );
};

module.exports = App;
