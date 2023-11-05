import { LoaderFunctionArgs } from '@remix-run/router/utils.ts';
import { RickApiServices } from '../services/rick-api/rick-api.services.ts';

export async function loader({ params }: LoaderFunctionArgs) {
  const item = await RickApiServices.getCurrentCharacter(params?.id);
  return { item };
}
