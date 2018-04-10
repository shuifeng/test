/**
 *
 *
 */
import React, {Component} from "react";
import PropTypes from 'prop-types'
import {
    StyleSheet,
    Image,
    View,
    TouchableWithoutFeedback,
    PanResponder,
    Animated,
    Easing,
    ActivityIndicator
} from "react-native";;

export default class SFZoomImage extends Component {

    constructor(props) {
        super(props)
        this.state=({
            loadding : false,
            isShow : false
        })
    }
    static propTypes = {

    }
    componentWillMount() {

    }
    componentDidMount(){


    }

    render() {
       return(
           <View style={flex:1}>
               <Text>dsadas</Text>
           </View>
       )

    }

}

const styles = StyleSheet.create(

)
