import * as React from "react"
import PropTypes from "prop-types"
import { Animated } from "react-native"
import { useFocusEffect } from "@react-navigation/native"

const SlideView = ({ children }) => {
    const slideAnim = React.useRef(new Animated.Value(0)).current

    useFocusEffect(() => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start()

        return () => {
            Animated.timing(slideAnim, {
                toValue: 600,
                duration: 150,
                useNativeDriver: true,
            }).start()
        }
    })

    const style = {
        flex: 1,
    }

    const transform = {
        transform: [
            {
                translateX: slideAnim,
            },
        ],
    }

    return <Animated.View style={[style, transform]}>{children}</Animated.View>
}

SlideView.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default SlideView
