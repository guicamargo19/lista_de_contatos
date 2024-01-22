import styled from 'styled-components'

export const Footer = styled.footer`
  max-width: 640px;
  background-color: transparent;
  text-align: center;
  color: #34495e;
  margin: 0 auto;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      padding: 6px;
      font-size: 26px;

      a {
        color: #34495e;
      }
    }
  }

  p {
    margin-bottom: 6px;
  }
`
