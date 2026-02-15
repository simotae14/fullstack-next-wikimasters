import WikiEditor from "@/components/wiki-editor";
import { stackServerApp } from "@/stack/server";

interface EditArticlePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditArticlePage({
  params,
}: EditArticlePageProps) {
  const { id } = await params;
  // check if user is authenticated - in a real app, this would come from auth/user context
  // otherwise redirect to signin page
  await stackServerApp.getUser({ or: "redirect" });

  // In a real app, you would fetch the article data here
  // For now, we'll just show some mock data if it's not "new"
  const mockData =
    id !== "new"
      ? {
          title: `Sample Article ${id}`,
          content: `# Sample Article ${id}

This is some sample markdown content for article ${id}.

## Features
- **Bold text**
- *Italic text*
- [Links](https://example.com)

## Code Example
\`\`\`javascript
console.log("Hello from article ${id}");
\`\`\`

This would normally be fetched from your API.`,
        }
      : {};

  return (
    <WikiEditor
      initialTitle={mockData.title}
      initialContent={mockData.content}
      isEditing={true}
      articleId={id}
    />
  );
}
