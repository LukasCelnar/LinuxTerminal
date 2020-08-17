import { connect } from 'react-redux';
import { createDirectory } from '../../actions';

function submitCommand(props) {

    const values = props.submitedValue.split(" ")

    switch (values[0]) {
        case 'mkdir':
            // valid mkdir "name" command
            if (values.length === 2) {
                props.createDirectory(values[1])
                console.log("creating directory " + values[1])
                break
            }
            break
        default:
            console.log("Wrong command")
    }
/*
    console.log(command)

    if (this.state.inputValue.split(" ").length === 2 && this.state.inputValue.split(" ")[0] === "mkdir") {
        console.log("you are trying to create dir with name " + this.state.inputValue.split(" ")[1]);
    };
*/
}

export default connect(null, { createDirectory })(submitCommand);

