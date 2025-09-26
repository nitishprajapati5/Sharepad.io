import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const id = uuidv4();
    
    const res = await prisma.fileCode.create({
      data: {
        slug: id,
      },
    });

    console.log(res)

    return NextResponse.json({ res });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error",
      },
      { status: 500 }
    );
  }
}
