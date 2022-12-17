//Core
import styled from 'styled-components'

function Input({
    id,
    onChange,
    onFocus,
    value,
    setValue,
    ...props
}) {

    return (
        <Input 
            value={value }
            {...props}
        />
    )
}

export default Input

const Input = styled.input`
    width: 100%;

`