import connectDb from "@/lib/connectDb";

const { default: useGetData } = require("@/hooks/useGetData");
export async function GET(request){
    const {data} = await useGetData('https://api.npoint.io/220ddaba570a4d9ea9be')
    await connectDb()
    return new Response(JSON.stringify(data))
}