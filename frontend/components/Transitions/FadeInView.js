import * as React from "react"
import PropTypes from "prop-types"
import { Animated } from "react-native"
import { useFocusEffect } from "@react-navigation/native"

const FadeInView = ({ children }) => {
    const fadeAnim = React.useRef(new Animated.Value(0)).current

    useFocusEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start()

        return () => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 250,
                useNativeDriver: true,
            }).start()
        }
    })

    return (
        <Animated.View
            style={{
                flex: 1,
                opacity: fadeAnim,
            }}
        >
            {children}
        </Animated.View>
    )
}

FadeInView.propTypes = {
    children: PropTypes.object,
}

export default FadeInView
