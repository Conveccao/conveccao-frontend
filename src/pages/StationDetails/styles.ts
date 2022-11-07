import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-left: 7rem;
`;

export const TopDiv = styled.div`
  width: 100%;
  padding: 0 0 3rem 10rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.green_100};
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray};
  margin-bottom: 0.5rem;
`;

export const StyledHR = styled.hr`
  width: 15%;
  margin: 0.5rem 0;
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 0.5rem;
`;

export const FormDetails = styled.form`
  display: grid;
  gap: 1rem 2.5rem;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  padding: 10px;

  width: 50%;
`;

export const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
`;

export const Legend = styled.legend`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.blue_100};
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  font-size: 0.9rem;
  font-weight: 400;
  padding: 0.5rem;
  border: none;
  background: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.green_100};
  width: 80%;

  outline: none;
`;

export const FieldsetTextBox = styled.fieldset`
  border: none;

  grid-column: 1 / 3;
`;

export const InputRef = styled.input`
  font-size: 0.9rem;
  font-weight: 400;
  padding: 0.5rem;
  border: none;
  background: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.green_100};
  width: 91%;

  outline: none;
`;

// export const TextBox = styled.textarea`
//   background: none; 
//   font-size: 1rem;
//   font-weight: 400;
//   padding: 0.5rem;

//   border-radius: 0.5rem;
//   border: 1px solid ${(props) => props.theme.colors.green_100};

//   width: 100%;
//   height: 150px;

//   outline: none;

//   resize: none;

//   /* Chrome, Edge, and Safari */
//   ::-webkit-scrollbar {
//     width: 16px;
//   }

//   ::-webkit-scrollbar-track {
//     background: none;
//   }

//   ::-webkit-scrollbar-thumb {
//     background-color: #00c667;
//     border-radius: 10px;
//     border: 3px solid #f8f8ff;
//   }
// `;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  
  width: 50%;
  height: 20rem;

  @media (max-height: 1880px) {
    height: 14rem;
  }
`;