import React, {Component} from 'react'

class Time extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.setState({
                time: new Date()
            }),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }


    render() {
        console.log({...this.props});
        return (
            <span {...this.props}>
                {this.state.time.toLocaleString()}
            </span>
        )
    }
}

export default Time