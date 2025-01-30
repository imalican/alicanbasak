import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  try {
    const API_SECRET = process.env.CONVERTKIT_API_SECRET;

    if (!API_SECRET) {
      throw new Error("CONVERTKIT_API_SECRET is not defined");
    }

    // Form ID'yi doğrudan kullanıyoruz
    const response = await fetch(
      "https://api.convertkit.com/v3/forms/7624941/subscribe",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_secret: API_SECRET,
          email: email,
        }),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      console.error("ConvertKit Error Response:", responseData);
      throw new Error(
        responseData.message || responseData.error || "Subscription failed"
      );
    }

    return NextResponse.json({
      success: true,
      data: responseData,
    });
  } catch (error) {
    console.error("ConvertKit API Error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        error: "Failed to subscribe. Please try again later.",
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}
