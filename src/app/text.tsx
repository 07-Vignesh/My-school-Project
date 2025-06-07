"use server";

import { clerkClient } from "@clerk/nextjs/server";

export async function testClerk() {
  console.log("clerkClient.users: ", clerkClient.users);
}
