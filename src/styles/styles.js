import styled from 'styled-components';
import '@reach/combobox/styles.css';

export const SearchBox = styled.div`
  z-index: 2;
  position: absolute;
  max-width: 400px;
  width: 100%;
  top: 1rem;
  left: 50%;
  border-radius: 4px;
  border: 2px solid #e1e1e1;
  transform: translateX(-50%);
  background: #ffffff;
  input {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border-radius: 4px;
    border: 0;
  }
`;
