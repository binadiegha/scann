import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

 
  video {
    object-fit: cover;
  }
`;

export const ScanningSignal = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 60px;
  @keyframes pulse {
    from {transform: scale(1,1)}
    to {transform: scale(1.2, 1.2)}
  }
  .dot{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--primary-color);
    animation-name: pulse;
    animation-duration: 1s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }
`;
