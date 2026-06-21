import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center" style={{ background: "#0f0a08" }}>
      <SignIn />
    </main>
  );
}
