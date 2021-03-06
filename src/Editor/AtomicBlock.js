import React from "react";
import styled, { keyframes } from 'styled-components';

export default function AtomicBlock() {
  return (
   <Atomic />
    // <img style={{width: "100%"}}src="https://images.unsplash.com/photo-1569912629764-4e94377c56f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"></img>
  );
}

const Atomic = styled.div`
  background-color: blue;
  height: 300px;
  animation: fadeIn 3s ease-out;

  @keyframes fadeIn {
    0% { opacity: 0%; }
    100% { opacity: 100%; }
  }
`;
