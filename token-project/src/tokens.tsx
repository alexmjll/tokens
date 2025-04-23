import Tokens from '../../tokens.json'

interface Token {
    [group: string]: {
      [key: string]: string;
    };
}
  
const colors: Token = {
    primaryAction: {
      100: Tokens['Facet Theme/Light'].Schemes.Primary.value,
    },
}

export default colors