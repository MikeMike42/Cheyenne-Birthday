import './Header.css';
import styled from "styled-components";

const BirthdayText = styled.div`
  color: #8b6a60;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-style: italic;
  text-align: center;
`;

export default function Header({ cheyenneIsThirty }) {
  return (
    <>
      {cheyenneIsThirty ? 
        <BirthdayText>
          <h1>You're 30!!!</h1>
        </BirthdayText>
      :
        <div class="heading">
          You'll be 30 in just...
        </div>
      }
    </>
  )
}