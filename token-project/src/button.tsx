import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import allTokkens from './tokens'

const localTokens = {
    buttonbgprimary: allTokkens.primary[100],
    fontcolor: allTokkens.onprimary[100],
    radius: allTokkens.radiusfull[100],
    paddingVertical: allTokkens.paddingV[100],
    paddingHorizonal: allTokkens.paddingH[100],


}

const StyledButton = styled(Button) `
    &.MuiButtonBase-root {
        background-color: ${localTokens.buttonbgprimary};
        color: ${localTokens.fontcolor};
        border-radius: ${localTokens.radius}px;
        padding: ${localTokens.paddingVertical}px ${localTokens.paddingHorizonal}px;
        box-shadow: none;
    }
`

export default function MainButton() {
    console.log(localTokens, 'token')
    console.log(allTokkens)
    return (<StyledButton variant="contained">Contained</StyledButton>)
}