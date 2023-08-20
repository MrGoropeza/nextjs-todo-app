import PocketBase from "pocketbase";

const globalForPocketBase = globalThis as unknown as {
  pb: PocketBase | undefined;
};

const pb =
  globalForPocketBase.pb ??
  new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_ENDPOINT);

if (process.env.NODE_ENV !== "production") globalForPocketBase.pb = pb;

export default pb;
