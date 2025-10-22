import zod from "zod";
export const loginSchema = zod.object({
    email: zod.string().nonempty("L'email est obligatoire"),
    password: zod.string().nonempty("Le mot de passe est obligatoire"),
});
