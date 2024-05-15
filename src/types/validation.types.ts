import { z } from "zod";

export const LoginRequestSchema = z.object({
	email: z.string().email(),
	password: z.string().min(1),
});

export const CreateUserRequestSchema = z
	.object({
		first_name: z.string().min(1),
		last_name: z.string().min(1),
		email: z.string().email(),
		phone: z.string().optional(),
		password: z.string().min(8),
		password_confirmation: z.string().min(8),
	})
	.superRefine(({ password_confirmation, password }, ctx) => {
		if (password_confirmation !== password) {
			ctx.addIssue({
				code: "custom",
				message: "The passwords did not match",
			});
		}
	});

export const ErrorFeedbackSchema = z.object({
	username: z.string().min(1),
	page: z.string().min(1),
	message: z.string().min(1),
});
