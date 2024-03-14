import getConversations from "../actions/getConversations";
import ConversationList from "./components/ConversationList";
import Sidebar from "../components/sidebar/Sidebar";
import getUsers from "../actions/getUser";

export default async function ConversationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList users={users} initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
