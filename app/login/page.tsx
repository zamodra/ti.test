import LoginComponent from "@/components/login/LoginComponent";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/authOption";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/property");
  }
  return <LoginComponent/>
}