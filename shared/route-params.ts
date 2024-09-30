import { loader } from '~/pages/product/product.$id';
import { json, LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const useServerParam = () => {
  return (slugName: string) => (({ params }: LoaderFunctionArgs) => {
    const slug = useLoaderData<() => {// @ts-ignore
      [slugName]: string
    }>();
    // @ts-ignore
    return slug[slugName];

  });
};
