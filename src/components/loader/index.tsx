import styled from "styled-components";

const LoaderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Spinner = styled.div`
  border: 16px solid pink;
  border-top: 16px deeppink solid;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  );
};

export default Loader;
