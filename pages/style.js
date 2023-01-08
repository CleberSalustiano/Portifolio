import styled from "styled-components"

export const Main = styled.section`
  overflow-x: hidden;
  section {
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 25px;
  }
  img {
    width: 320px;
    height: 300px;
    margin-bottom: 40px;
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  h1 {
    font-size: 40px;
    span {
      color: #17F9FF;
    }
    margin-bottom: 30px;
  }

  p {
    width: 300px;
    color: #ddd;
  }
`

export const About = styled.section`
  display: flex;
`