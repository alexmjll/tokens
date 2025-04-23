import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import colors from './tokens'

const token = {
    buttonbgprimary: colors.primaryAction[100]
}

const StyledButton = styled(Button) `
    &.MuiButtonBase-root {
        background-color: ${token.buttonbgprimary};
    }
`

export default function MainButton() {
    console.log(colors)
    console.log(token, 'token')
    return (<StyledButton variant="contained">Contained</StyledButton>)
}