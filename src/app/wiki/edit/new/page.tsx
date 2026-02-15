import WikiEditor from "@/components/wiki-editor";
import { stackServerApp } from "@/stack/server";

export default async function NewArticlePage() {
  // check if user is authenticated - in a real app, this would come from auth/user context
  // otherwise redirect to signin page
  await stackServerApp.getUser({ or: "redirect" });
  return <WikiEditor isEditing={false} />;
}
