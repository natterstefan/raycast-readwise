import { Action, ActionPanel, List } from "@raycast/api";

import { Book } from "./types";

export const BooksList = ({ item }: { item: Book }) => {
  return (
    <List.Item
      title={item.title}
      subtitle={item.author}
      actions={
        <ActionPanel>
          <ActionPanel.Section>
            <Action.OpenInBrowser
              title="Open in Browser"
              url={"https://readwise.io/bookreview/" + item.id}
            />
          </ActionPanel.Section>
        </ActionPanel>
      }
    />
  );
};
