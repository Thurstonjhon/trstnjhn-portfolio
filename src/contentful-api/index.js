import { createClient } from 'contentful'

export const getClient = () => {
    const client = createClient({
        space: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN
    })

    return client
}
