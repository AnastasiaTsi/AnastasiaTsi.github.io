import styled from "styled-components";
import colors from "../style/colors";
import HoloCard, { HoloCardProps } from "./HoloCard/HoloCard";

const Figure = styled.figure`
  margin: 0;
  display: grid;
  gap: 1rem;

  .holo-card {
    width: 100%;
    aspect-ratio: 4 / 5;
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
  preset?: HoloCardProps["preset"];
};

const PetCard = ({ path, name, description, preset = "stars" }: CardProps) => {
  return (
    <Figure>
      <HoloCard
        image={path}
        alt={name}
        preset={preset}
        width={420}
        radius={20}
        intensity={0.45}
        edgeSparkle={0.55}
        glare={0.35}
        foilColor="#e8eef2"
        idle={false}
        hoverScale={1}
        shadow
      />
      <Caption>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Caption>
    </Figure>
  );
};

export default PetCard;
