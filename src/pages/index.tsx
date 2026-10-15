import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quiz POC</title>
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="text-gray-900">Please click the link below to take your consultation</p>
        <Link
          href="/consultation"
          className="rounded-md bg-brand-600 px-6 py-3 font-medium text-black hover:bg-brand-700 hover:underline"
        >
          Take consultation
        </Link>
      </main>
    </>
  );
}
