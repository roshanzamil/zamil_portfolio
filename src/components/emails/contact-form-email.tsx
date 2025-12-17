import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'react-email';

type ContactFormEmailProps = {
  name: string;
  email: string;
  lookingFor: string;
};

export default function ContactFormEmail({
  name,
  email,
  lookingFor,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Heading style={heading}>New Message from your Portfolio</Heading>
            <Text style={paragraph}>You've received a new message from your contact form.</Text>
            <Hr style={hr} />
            <Text style={paragraph}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={paragraph}>
              <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
            </Text>
            <Text style={paragraph}>
              <strong>Looking for:</strong> {lookingFor}
            </Text>
            <Hr style={hr} />
            <Text style={footer}>
              This email was sent from your portfolio contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 24px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const heading = {
    fontSize: '24px',
    lineHeight: '1.3',
    fontWeight: '700',
    color: '#484848',
}

const paragraph = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
};
