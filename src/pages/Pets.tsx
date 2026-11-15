import styled from "styled-components";
import { PetsDiv } from "../style/genericStyles";
import PetCard from "../components/PetCard";
import colors from "../style/colors";

const Page = styled.main`
  padding: calc(var(--nav-height) + 3rem) 0 2rem;
  min-height: 100vh;
`;

const Header = styled.header`
  width: min(100% - (var(--space-page) * 2), var(--max-width));
  margin: 0 auto 3rem;
  max-width: 36rem;
`;

const Signature = styled.p`
  margin: 0 0 0.75rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: ${colors.aegean};
`;

const Title = styled.h1`
  margin: 0 0 0.75rem;
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 600;
  letter-spacing: -0.035em;
  line-height: 1;
  color: ${colors.ink};
`;

const Lead = styled.p`
  margin: 0;
  color: ${colors.slate};
  font-size: 1.1rem;
  line-height: 1.55;
`;

const fivos =
  "Fivos is a Maltese. Born in 2015, this gentleman still cannot get enough cuddles.";
const charlotte =
  "Charlotte, queen of the house, was rescued as a newborn and has been ruling ever since.";

const Pets = () => {
  return (
    <Page>
      <Header>
        <Signature>Anastasia.is(pets)</Signature>
        <Title>Because why not?</Title>
        <Lead>
          A short break from product UI — meet the two who keep the house
          interesting.
        </Lead>
      </Header>
      <PetsDiv>
        <PetCard
          path="images/pets/fivos.JPG"
          name="Fivos"
          description={fivos}
        />
        <PetCard
          path="images/pets/charlotte.jpg"
          name="Charlotte"
          description={charlotte}
        />
      </PetsDiv>
    </Page>
  );
};

export default Pets;
