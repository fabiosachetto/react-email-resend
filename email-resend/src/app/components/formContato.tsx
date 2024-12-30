import {
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import React from "react";
interface VercelInviteUserEmailProps {
  name?: string;
  email?: string;
  message?: string;
}

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "";

export const FormContato = ({
  name = "Fabio",
  email = "fabio@sachetto.com.br",
  message = "teste eviando email",
}: VercelInviteUserEmailProps) => {

  return (
    <Html>
      <Head />
      <Preview>{name} quer tirar dúvidas.</Preview>
      <Tailwind>
        <body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              <p>Olá <strong>{name}</strong> em que podemos ajudar?</p>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              E-mail do cliente: {email}
            </Text>

            <Text className="text-black text-[14px] leading-[24px]">
              Mensagem do cliente: {message}
            </Text>
          </Container>
        </body>
      </Tailwind>
    </Html>
  );
};

export default FormContato;