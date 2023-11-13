import styled from "styled-components"

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 20px;
    }

    a.remover {
        color: #FF0000;
        margin-top: 20px;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }

    button.remover {
        background-color: transparent;
        border: none;
        color: #FAFAFA60;
        cursor: pointer;
        text-decoration: underline;
      }
      
    button.remover:hover {
        color: #ff6666;
    }
`
