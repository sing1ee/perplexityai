export function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "-")
}

export function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
