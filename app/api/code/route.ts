import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
const configuration = new Configuration({
  organization: "org-ZaSTovcgJeJOfLyRDw8FA3X9",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  const isPro = await checkSubscription();
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!configuration.apiKey) {
      return new NextResponse("OpenAI Api Key not configuration ", {
        status: 500,
      });
    }
    if (!messages) {
      return new NextResponse("Message is required", { status: 400 });
    }
    const freeTrial = await checkApiLimit();
    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expried", { status: 403 });
    }
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
    });
    if (!isPro) {
      await increaseApiLimit();
    }
    return NextResponse.json(response.data.choices[0].message);
  } catch (e) {
    console.error("[CONVERSATION_ERROR]", e);
    return new NextResponse("Internal error", { status: 500 });
  }
}
