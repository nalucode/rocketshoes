import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      border: 0;
      background: #7159c1;
      color: #fff;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    vertical-align: middle;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    input {
      border: 1px solid #ddd;
      color: #666;
      border-radius: 4px;
      width: 50px;
      padding: 4px;
      text-align: center;
    }

    button {
      display: flex;
      align-items: center;
      background: none;
      border: 0;
      padding: 6px;
    }
  }

  button {
    background: #7159c1;
    border: 1px solid #7129c1;
    border-radius: 4px;
    padding: 8px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#7159c1')};
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
