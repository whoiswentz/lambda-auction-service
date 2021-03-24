import { Functions } from "serverless/aws"

const functionsDefinition: Functions = {
    createAuction: {
        handler: 'src/functions/auction/handler.createAuction',
        events: [
            {
                http: {
                    method: 'post',
                    path: 'auction',
                }
            }
        ]
    }
}

export default functionsDefinition