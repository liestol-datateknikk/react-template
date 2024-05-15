import type { ErrorFeedback } from "@/types/models/models";
import { ErrorFeedbackSchema } from "@/types/validation.types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Avatar,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Divider,
	Input,
	Textarea,
} from "@nextui-org/react";
import { Controller, FormProvider, useForm } from "react-hook-form";

export const ErrorComponent = () => {
	const defaultValues: ErrorFeedback = {
		username: "",
		page: "",
		message: "",
	};

	const methods = useForm({
		defaultValues,
		mode: "all",
		resolver: zodResolver(ErrorFeedbackSchema),
	});
	const { handleSubmit, control, formState } = methods;
	const { errors } = formState;

	const onSubmit = async (data: ErrorFeedback) => {
		console.log(data);
		try {
			// await postFeedback(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="sm:pt-20 pt-5 w-full">
			<Card className="max-w-[750px] w-full mx-auto">
				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<CardHeader className="flex flex-row gap-3 justify-between">
							<div className="flex flex-col">
								<p className="text-md">Oops...</p>
								<p className="text-small text-default-500">Noe gikk galt</p>
							</div>
							<Avatar radius="sm" src="../assets/icons/firmataxi-logo.png" />
						</CardHeader>
						<Divider />

						<CardBody className="flex flex-col gap-5 pt-5 max-w-[50%]">
							<p>Her skjedde det en feil...</p>
							<p>Vennligst legg igjen en tilbakemelding</p>

							<Controller
								name="username"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<Input
										errorMessage={errors?.username ? "Dette feltet er påkrevd" : ""}
										size="sm"
										label="Din e-post"
										{...field}
									/>
								)}
							/>
							<Controller
								name="page"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<Input
										errorMessage={errors?.page ? "Dette feltet er påkrevd" : ""}
										size="sm"
										label="Hvilke side er du på?"
										{...field}
									/>
								)}
							/>
							<Controller
								name="message"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<Textarea
										errorMessage={errors?.message ? "Dette feltet er påkrevd" : ""}
										size="sm"
										label="Hva gjor du?"
										{...field}
									/>
								)}
							/>
						</CardBody>

						<Divider />
						<CardFooter className="flex justify-center">
							<Button type="submit">Send tilbakemelding</Button>
						</CardFooter>
					</form>
				</FormProvider>
			</Card>
		</div>
	);
};
