export interface ErrorFeedback {
	username: string;
	page: string;
	message: string;
}

export interface User {
	first_name: string;
	last_name: string;
	email: string;
	phone?: string;
	password?: string;
	id: string;
}

export interface Token {
	access_token: string;
	expires_in: number | null;
	token_type: "bearer";
}
