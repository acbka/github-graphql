import styled from "@emotion/styled/macro";

export const Block = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  padding: 20px;
  margin-bottom: 12px;
`;
export const Title = styled.h3`
  color: var(--color-dark);
`;
export const Paragraph = styled.p`
  padding-top: 5px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;
