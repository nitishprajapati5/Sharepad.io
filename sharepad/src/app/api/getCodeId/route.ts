import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import FileCode from "@/app/models/FileCode";
import dbConnect from "@/app/lib/DBConnect/dbConnect";

export async function POST() {
  try {
    const id = uuidv4();
    await dbConnect();

    const res = await FileCode.create({
      slug: id,
      Code:""
    })

    console.log(res)

    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Error",
        error: error,
      },
      { status: 500 }
    );
  }
}
