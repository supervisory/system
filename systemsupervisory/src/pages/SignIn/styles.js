import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Form = styled.form`
  width: 400px;
  box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 200px;
    margin: 10px 0 40px;
  }
  p {
    color: #ff3333;
    border: 1px solid #ff3333;
    padding: 3px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    color: #777;
    font-size: 15px;
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background-image: linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7);
    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
  hr {
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`