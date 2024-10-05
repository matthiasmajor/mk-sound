import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";

export const StyledButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.dark};
  background-color: transparent;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  padding: 10px 15px;
  font-weight: 500;
  text-transform: uppercase;
  display: block;
  margin: 8px 15px 0 0.5px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    opacity: 0.6;
  }
`;

export const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  width: 360px;
  margin: 0 auto;

  input {
    padding: 10px;
    font-family: ${({ theme }) => theme.font.family.roboto};
  }
  textarea {
    padding: 10px;
    min-height: 200px;
    font-family: ${({ theme }) => theme.font.family.roboto};
  }
  label {
    font-weight: 600;
    font-family: ${({ theme }) => theme.font.family.roboto};
  }
  ${({ theme }) => theme.mq.desktop} {
    margin: 0 auto;
  }
`;

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xaygqzaz");
  console.log(state);

  return (
    <ContactFormWrapper onSubmit={handleSubmit}>
      <label htmlFor="email">Twój adres e-mail</label>
      <input type="email" name="email" id="email" placeholder="Adres e-mail" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Treść</label>
      <textarea name="message" id="message" placeholder="Wiadomość" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      {state.errors ? <p style={{ color: "red" }}>Wpisz wiadomość</p> : null}
      {state.succeeded ? <p>Dziękujemy za wiadomość!</p> : null}

      <StyledButton isCenter type="submit" disabled={state.submitting}>
        Wyślij
      </StyledButton>
    </ContactFormWrapper>
  );
};
