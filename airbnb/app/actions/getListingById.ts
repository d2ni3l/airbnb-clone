import {prisma } from '@/app/libs/prismadb'
interface IParams {
    listingsId?: string;
  }
  

export default async function getListingById(params: IParams){
try{
    const {listingsId} = params

    console.log(params)
   

    const listing = await prisma.listing.findUnique({
        where:{
            id: listingsId
        },
        include:{
            user : true
        }
    })

    if(!listing){
        return console.log('listing dose not exits')
    }

    return{
        ...listing,
        createdAt: listing.createdAt.toISOString(),
        user:{
            ...listing,
            createdAt: listing.user.createdAt.toISOString(),
            updatedAt: listing.user.updatedAt.toISOString(),
            emailVerified: listing.user.emailVerified?.toISOString() ||null,


        }
    }
} catch(error: any){
    throw new Error(error)

}

}