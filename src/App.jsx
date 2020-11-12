import React from 'react'
import {connect} from 'react-redux'
import {currentValueTime, firstBelt, secondBelt} from "./store/actions/time";
import Container from "./components/containers/Container.jsx";
import './App.scss'


class App extends React.Component {

    componentDidMount() {
        this.props.currentValueTime(this.props.data.beltFirst, this.props.data.beltSecond)

    }
    componentDidUpdate() {
        this.props.currentValueTime(this.props.data.beltFirst, this.props.data.beltSecond)
    }

    changeFirst = (e) => {
        this.props.firstBelt(Number(e.target.value))

    }
    changeSecond = (e) => {
        this.props.secondBelt(Number(e.target.value))

    }

    render() {
        return (
                <div className='wrapper'>
                    <Container data={this.props.first} change={this.changeFirst}/>
                    <Container data={this.props.second} change={this.changeSecond}/>
                </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        data: state.time,
        first: state.time.timeFirst,
        second: state.time.timeSecond
    }
}

function mapDispatchToProps(dispatch) {
    return {
        currentValueTime: (first, second) => dispatch(currentValueTime(first, second)),
        firstBelt: (val) => dispatch(firstBelt(val)),
        secondBelt: (val) => dispatch(secondBelt(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)