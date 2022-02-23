import { signIn, signOut, useSession } from "next-auth/client";

export default function Login() {
  const [session, loading] = useSession();

  return (
    <>
      <div className="flex flex-row items-center w-full h-full">
        {!session && !loading && (
          <>
            <button className="w-full h-full" onClick={() => signIn("reddit")}>
              Login
            </button>
          </>
        )}
        {session && (
          <>
            <button className="w-full h-full" onClick={() => signOut()}>
              Logout
            </button>
          </>
        )}
      </div>
    </>
  );
}
