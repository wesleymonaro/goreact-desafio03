import styled from "styled-components";

export const Container = styled.div`
  background: #FFF;
  display: block;
  width: 320px;
  padding: 20px;
  height: 85%;
  position: absolute;
  left: 2%;
  top: 5%;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.20);
  z-index: 1;
  border-radius: 5px;
`;

export const ListContainer = styled.div`
  display: block;
  margin-top: 30px;
`;

export const UserItem = styled.div`
  display: flex;
  padding: 0 10px;

  img {
    width: 48px;
    height: 48px;
    display: block;
    margin-top: 5px;
    border-radius: 50px;
  }

  strong {
    font-weight: bold;
    display: block;
    font-family: sans-serif;
    font-size: 16px;
    color: #333;
  }

  small{
    display: block;
    font-weight: 200;
    font-size: 14px;
    color: #999;
    font-family: sans-serif;
  }

  i{

  }
`;

export const ButtonsUserContainer = styled.div`
  right: 20px;
  position: absolute;
  margin-top: 15px;
  /* cursor: pointer;
  color: #666; */
  display: flex;
`

export const UserInfo = styled.div`
  display: block;
  padding: 10px 10px 10px 15px;
`;

export const Separator = styled.hr`

  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #EEE;
  margin: 1em 0;
  padding: 0;
`

export const DeleteButton = styled.button`
  border: 0;
  cursor: pointer;
  i {
    color: #D45454;
    font-size: 18px;
    margin-right: 15px;
  }
`

export const InfoUsers = styled.p`
  display: block;
  font-weight: 200;
  font-size: 14px;
  color: #999;
  font-family: sans-serif;
  align-self: center;
  text-align: center;
`
