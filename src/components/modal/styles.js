import styled from "styled-components";

export const Container = styled.div`
  background: rgba(0,0,0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99;
  display: flex;
  padding: 20px;
`;

export const FormContainer = styled.div`
  width: 300px;
  margin: auto;
  background: #FFF;
  border-radius: 5px;
  text-align: center;
  padding: 20px;
`

export const Title = styled.strong`
  font-family: sans-serif;
  font-weight: bold;
`

export const Input = styled.input`
  margin-top: 20px;
  height: 42px;
  border-radius: 5px;
  width: 250px;
  border: 1px solid #DDD;
  padding: 0 15px;
  font-size: 14px;
  margin-bottom: 10px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 0 10px;
`

export const CancelButton = styled.button`
  height: 42px;
  background: #CCC;
  border-radius: 5px;
  padding: 0 20px;
  justify-content: 'center';
  align-items: 'center';
  flex: 1;
  color: white;
  font-size: 14px;
  margin-right: 5px;
`

export const SaveButton = styled.button`
  height: 42px;
  background: #85C47C;
  border-radius: 5px;
  padding: 0 20px;
  justify-content: 'center';
  align-items: 'center';
  flex: 1;
  color: white;
  font-size: 14px;
  margin-left: 5px;
`

export const ErrorMessage = styled.strong`
  font-family: sans-serif;
  color: #E37A7A;
  margin-top: 20px;
  font-size: 14px;
`
