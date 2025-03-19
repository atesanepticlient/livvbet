import { INTERNAL_SERVER_ERROR } from "@/error";
import { fetchGamesList } from "@/provider/fetchGamesList";

export const GET = async () => {
  try {
    const games = await fetchGamesList({
      consumerId: +process.env.B2B_CONSUMER_ID!,
    });
    
    return Response.json({ payload: games });
  } catch (error) {
    console.log({ error });
    return Response.json({ message: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
};
