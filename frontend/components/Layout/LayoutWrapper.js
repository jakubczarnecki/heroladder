import styled from "styled-components/native"

export const LayoutWrapper = styled.View`
    flex: 1;
`

export const LayoutWrapperScroll = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        paddingBottom: 35,
    },
}))`
    flex: 1;
`
