"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const revalidateAllCache = async () => {
  console.log("🔄 [revalidateAllCache] Clearing all cached data...");
  
  // Revalidate all paths that use this data
  revalidatePath("/a");
  revalidatePath("/a/b");
  
  console.log("✅ [revalidateAllCache] Cache invalidated! Next request will fetch fresh data.");
  
  return { success: true, timestamp: new Date().toISOString() };
};

export const revalidateCurrentPath = async (path: string) => {
  console.log(`🔄 [revalidateCurrentPath] Clearing cache for: ${path}`);
  
  revalidatePath(path);
  
  console.log(`✅ [revalidateCurrentPath] Cache invalidated for ${path}!`);
  
  return { success: true, timestamp: new Date().toISOString() };
};
