export function getSearchParamsValues(searchParams) {
  return {
    topic: searchParams.get("topic") || "",
    sortBy: searchParams.get("sort_by") || "created_at",
    order: searchParams.get("order") || "desc",
  };
}
