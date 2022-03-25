import { List } from "@raycast/api";

import { useBooks } from "./books/useBooks";
import { BooksList } from "./books/BooksList";
import { Category } from "./books/types";
import { getUrlParamsString } from "./utils";

const CATEGORIES: { label: string; category: Category }[] = [
  { label: "Articles", category: "articles" },
  { label: "Book", category: "books" },
  { label: "Podcasts", category: "podcasts" },
  { label: "Supplementals", category: "supplementals" },
  // { label: "Tweets", category: "tweets" },
];

export default function Command() {
  const { data, loading, refetch } = useBooks();

  return (
    <List
      isLoading={loading}
      enableFiltering
      searchBarAccessory={
        <List.Dropdown tooltip="Search Options" onChange={refetch} value="">
          <List.Dropdown.Section title="Page Navigation">
            <List.Dropdown.Item title={"-"} value={""} />
            {data?.previous && (
              <List.Dropdown.Item
                title={"Previous Page"}
                value={getUrlParamsString(data.previous)}
              />
            )}
            {data?.next && (
              <List.Dropdown.Item
                title={"Next Page"}
                value={getUrlParamsString(data.next)}
              />
            )}
          </List.Dropdown.Section>

          <List.Dropdown.Section title="Highlight Category">
            {CATEGORIES.map(({ label, category }) => (
              <List.Dropdown.Item
                key={category}
                title={label}
                value={"category=" + category}
              />
            ))}
          </List.Dropdown.Section>
        </List.Dropdown>
      }
    >
      <List.Section title="Results" subtitle={data?.results.length + ""}>
        {data?.results.map((result) => (
          <BooksList key={result.id} item={result} />
        ))}
      </List.Section>
    </List>
  );
}
