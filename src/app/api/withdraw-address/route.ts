import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const addresses = await db.agentWithdrawAddress.findMany({
      select: {
        id: true,
        country: true,
        city: true,
        postOffice: true,
        storeName: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Format addresses for dropdown
    const formattedAddresses = addresses.map((address) => ({
      id: address.id,
      label: `${address.country} ${address.city} ${address.postOffice} ${address.storeName}`,
      value: address.storeName, // Using storeName as unique identifier
      raw: address, // Include raw data for reference
    }));

    return NextResponse.json(formattedAddresses);
  } catch (error) {
    console.error("Error fetching agent addresses:", error);
    return NextResponse.json(
      { error: "Failed to fetch agent addresses" },
      { status: 500 }
    );
  }
}
