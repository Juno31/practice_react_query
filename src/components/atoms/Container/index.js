//Core
import styled from 'styled-components'

function Container({ width, height, children, ...props}) {

    const WRAPPERPROPS = {
        width,
        height,
        ...props
    }

    return <Wrapper {...WRAPPERPROPS}>{children}</Wrapper>
}

export default Container

const Wrapper = styled.div`
    width: ${props => props.width ? props.width : ''};
    height: ${props => props.height ? props.height : ''};
`