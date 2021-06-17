import styled from "styled-components";
import { colors } from "../../../../../const/colors";

export const TableContainer = styled.article`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  flex-wrap: nowrap;
  margin-top: 3rem;

  table { 
    border-collapse: collapse; 
    background: white;
    overflow: hidden;
    max-width: 50rem; 
    width: 100%;
    margin: 0 auto;
    position: relative;
  
    * { 
      position:relative 
    }
  
    td, th { 
      padding-left: 0.5rem;
      color: ${colors.white};
      font-weight: bold;
      line-height: 1.2rem;
      padding: 1rem;
      text-align: center;
    }

    thead tr { 
      height: 3.75rem;
      background: ${colors.primary};
      font-size: 1rem;
    }
  
    tbody tr {
      height: 3rem;
      border-bottom: 1px solid ${colors.auxilary};
      color: ${colors.auxilary};

      &:last-child { 
        border: 0;
      }
    }

    td {      
      color: ${colors.auxilary};
    }

    .empty {
      text-align: center;
      width: 100%;
    }
  }
`