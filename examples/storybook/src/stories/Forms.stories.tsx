import { Meta } from "@storybook/react";
import {
  Container,
  EmailInput,
  Form,
  FormGroup,
  PasswordInput,
  PrimaryButton,
  useLanguage,
} from "@arcnovus/wet-boew-react";

export default {
  title: "Components/Forms",
  component: Form,
} as Meta;

export const BasicUse = () => {
  const { currentLanguage } = useLanguage({
    pathname: window.location.pathname,
    search: window.location.search,
  });

  return (
    <Container>
      <Form action="#" method="get" legend="Basic Form" id="basic-form">
        <FormGroup>
          <EmailInput
            id="exampleInputEmail1"
            name="email"
            label="Email address"
            language={currentLanguage ?? "en"}
            required
          />
        </FormGroup>
        <FormGroup>
          <PasswordInput
            id="exampleInputPassword1"
            label="Password"
            language={currentLanguage ?? "en"}
          />
        </FormGroup>
        <PrimaryButton type="submit">Submit</PrimaryButton>
        {/* <DefaultButton type="submit">Submit</DefaultButton> */}
      </Form>
    </Container>
  );
};
