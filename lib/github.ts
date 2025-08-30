export interface Issue {
  number: number;
  title: string;
  created_at: string;
  body: string;
}

export async function getIssues(page: number = 1, per_page: number = 10) {
  const response = await fetch(
    `https://api.github.com/repos/sing1ee/existential-perplexity/issues?state=open&page=${page}&per_page=${per_page}`,
    {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 }, // 缓存1小时
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch issues');
  }

  const issues: Issue[] = await response.json();
  return issues.map(issue => ({
    ...issue,
    title: issue.title.length > 50 ? `${issue.title.substring(0, 47)}...` : issue.title,
  }));
}

export async function getIssue(issueNumber: number) {
  const response = await fetch(
    `https://api.github.com/repos/sing1ee/existential-perplexity/issues/${issueNumber}`,
    {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 }, // 缓存1小时
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch issue');
  }

  const issue: Issue = await response.json();
  return issue;
} 