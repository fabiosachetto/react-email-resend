import FormContato from "@/app/components/formContato";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST() {
	try {
		const data = await resend.emails.send({
			from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_EMAIL}>`,
			to: ["fabio@sachetto.com.br"],
			subject: "Contato do site",
			react: FormContato({ name: "Fabio Sachetto" }),
		});
		return NextResponse.json({ data });
	} catch (e) {
		return NextResponse.json({ e });
	}
}
