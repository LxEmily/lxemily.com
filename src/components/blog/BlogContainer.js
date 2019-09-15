import React from "react"
import styled from "styled-components"
import 'tachyons'
import "../colors.css"

const Container = styled.div.attrs({
    className: `center mv5 w-75-l w-80 flex flex-column justify-center whiteText darkerBG`
})``

class BlogContainer extends React.Component {
    render() {
        return(
            <Container>
                {this.props.children}
            </Container>
        )
    }
}

export default BlogContainer