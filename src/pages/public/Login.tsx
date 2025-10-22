import { zodResolver } from "@hookform/resolvers/zod";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";

import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { loginSchema } from "../../schemas/loginSchema";
import { LoginInputs } from "../../types/InputProps";
import { Container } from "../../styles/pages/Login";
import { LoginForm } from "../../styles/components/LoginForm";
import InputField from "../../components/InputField";
import {
    Hr,
    PrimaryButton,
    SuccessButton,
} from "../../styles/components/Buttons";

const Login = () => {
    const { register, handleSubmit, formState } = useForm<LoginInputs>({
        resolver: zodResolver(loginSchema),
    });
    const { errors } = formState;
    const onSubmit: SubmitHandler<LoginInputs> = (data) => console.log(data);
    const onError = (errors: FieldErrors<LoginInputs>) =>
        console.log("Form Errors:", errors);
    return (
        <Container>
            <LoginForm onSubmit={handleSubmit(onSubmit, onError)}>
                <InputField
                    label={"Email"}
                    {...register("email")}
                    type="Email"
                    icon={<MdOutlineMail />}
                    helperText={errors.email?.message}
                    hasError={!!errors.email?.message}
                />
                <InputField
                    {...register("password")}
                    label="Mot de passe"
                    type="password"
                    hasControlVisibility
                    helperText={errors.password?.message}
                    hasError={!!errors.password?.message}
                />
                <PrimaryButton type="submit">Se connecter</PrimaryButton>
                <Hr />
                <SuccessButton>
                    <Link to={""}>Créer un compte</Link>
                </SuccessButton>
            </LoginForm>
        </Container>
    );
};

export default Login;
