import dbConnect from "@/app/lib/DBConnect/dbConnect";
import FileCode from "@/app/models/FileCode";

export async function POST(request: Request) {
    try{
        const res = await request.json()
        const slug = res.slug

        await dbConnect();
        
        const result = await FileCode.updateOne(
            { slug: slug },
            { $set: { isShared: true } }
        );

        return new Response(JSON.stringify({res:result,slug:slug}), { status: 200 } );
    }
    catch(err){
        console.log(err)
        return new Response(JSON.stringify({message:"Error", error:err}), { status: 500 } );
    }
}