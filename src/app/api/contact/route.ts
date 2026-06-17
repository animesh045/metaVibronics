import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Console logging on server (visible in Vercel logs / local console)
    console.log("=== NEW CONTACT INQUIRY ===");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone || "Not provided"}`);
    console.log(`Service: ${service || "Not selected"}`);
    console.log(`Message: ${message}`);
    console.log("===========================");

    // NOTE: Here you can integrate Resend, SendGrid, or any mailing client.
    // E.g.:
    // await resend.emails.send({
    //   from: 'studio@metavibronics.com',
    //   to: 'metavibronics@gmail.com',
    //   subject: `New project inquiry from ${name}`,
    //   html: `<p>Name: ${name}</p>...`
    // });

    return NextResponse.json(
      { success: true, message: "Inquiry logged successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
