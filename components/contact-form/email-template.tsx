import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, phone, message
}) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Img
          src={'../../public/logo.svg'}
          width="220"
          height="68"
          alt="EcomShape"
          style={logo}
        />
        <Text style={paragraph}>
          Name: {name}
          <Hr style={hr} />
          Email: {email}
          <Hr style={hr} />
          Phone: {phone}
          <Hr style={hr} />
          Message: {message}
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const logo = {
  margin: '0 auto',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};
