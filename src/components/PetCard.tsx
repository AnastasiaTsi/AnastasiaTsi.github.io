import styled from "styled-components";
import colors from "../style/colors";

const Figure = styled.figure`
  margin: 0;
  display: grid;
  gap: 1rem;
`;

const ImageWrap = styled.div`
  overflow: hidden;
  border-radius: 1.25rem;
  aspect-ratio: 4 / 5;
  background: ${colors.soft};
  border: 1px solid rgba(18, 21, 26, 0.08);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  &:hover img {
    transform: scale(1.03);
  }

  @media (prefers-reduced-motion: reduce) {
    img {
      transition: none;
    }

    &:hover img {
      transform: none;
    }
  }
`;

const Caption = styled.figcaption``;

const Name = styled.h2`
  margin: 0 0 0.4rem;
  font-family: var(--font-display);
  font-size: 1.65rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${colors.ink};
`;

const Description = styled.p`
  margin: 0;
  color: ${colors.slate};
  line-height: 1.55;
  max-width: 34ch;
`;

type CardProps = {
  path: string;
  name: string;
  description: string;
};

const PetCard = ({ path, name, description }: CardProps) => {
  return (
    <Figure>
      <ImageWrap>
        <img src={path} alt={name} />
      </ImageWrap>
      <Caption>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Caption>
    </Figure>
  );
};

export default PetCard;
