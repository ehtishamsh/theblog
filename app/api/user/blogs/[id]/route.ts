import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

interface DATA {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  createdAt: Date;
  blogDetail: {
    tag: {
      tagName: string;
    };
  }[];
}
[];

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const pageNum = parseInt(params.id);
    const data: DATA[] = await db?.blog?.findMany({
      take: 5,
      skip: pageNum * 5 - 5,
      select: {
        description: true,
        createdAt: true,
        id: true,
        slug: true,
        image: true,
        title: true,
        blogDetail: {
          select: {
            tag: {
              select: {
                tagName: true,
              },
            },
          },
        },
      },
    });

    console.log(data);
    return NextResponse.json({
      data,
      status: 200,
      message: "success",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed",
    });
  }
}
