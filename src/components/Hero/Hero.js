import React from "react";
import Link from "next/link";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome To <br />
        My Personal Perfolio
      </SectionTitle>
      <SectionText>
        Highly motivated developer devoted in creating modern and user-friendly
        web applications...
      </SectionText>

      <Link href="#about">
        <Button>Read More!</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
