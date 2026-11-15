import styled from "styled-components";
import colors from "./colors";

export const RootDiv = styled.div`
  min-height: 100vh;
`;

export const PageShell = styled.main`
  width: min(100% - (var(--space-page) * 2), var(--max-width));
  margin-inline: auto;
`;

export const PetsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1.75rem;
  width: min(100% - (var(--space-page) * 2), 56rem);
  margin: 0 auto 4rem;
`;

export const PurpleSpan = styled.span`
  color: ${colors.aegean};
  font-weight: 600;
`;
