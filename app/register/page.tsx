import RegisterComponent from "@/components/register/RegisterComponent";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/authOption";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/property");
  }
  return <RegisterComponent/>
}