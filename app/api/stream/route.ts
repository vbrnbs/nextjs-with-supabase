
export const GET = async (req:Request, res:Response ) => {
    return new Response("hi")
}

export const POST = async (req:Request, res:Response ) => {
    const body = await req.json()
    console.log('post req:', body)

    return new Response(JSON.stringify({body}))
}