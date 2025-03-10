import { ApiResponseType } from "@/types/api-response.type";
import { parseBody, wrapWithTryCatch } from "@/utils/api.utils";
import { SignInDto } from "@/dto/auth.dto";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request): Promise<ApiResponseType<null>> {
  return wrapWithTryCatch(async () => {
    const [parseError, body] = await parseBody<SignInDto>(request);

    if (parseError !== null) {
      return NextResponse.json({ error: parseError }, { status: 400 });
    }

    const foundUser = await prisma.user.findUnique({
      where: { username: body.username, password: body.password },
    });

    if (!foundUser) {
      return NextResponse.json(
        {
          error: "Invalid username or password",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({ data: null, status: 200 });
  });
}
