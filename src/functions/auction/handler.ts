import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const createAuction: APIGatewayProxyHandler = async (event, _context) => {
  const { title } = JSON.parse(event.body)

  const auction = {
    title,
    status: 'OPEN',
    createAt: new Date().toISOString()
  }

  return {
    statusCode: 201,
    body: JSON.stringify(auction),
  };
}
