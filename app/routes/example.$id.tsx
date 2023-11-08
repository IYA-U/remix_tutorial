import styles from "styles/example.module.css";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { json } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.id, "Missing ID");
  return json({ id: params.id });
};

export default function ExamplePage() {
  const { id } = useLoaderData<typeof loader>();
  return <h1 className={styles.heading}>ID:{id}</h1>;
}
