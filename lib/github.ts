interface IssueContent {
  url: string;
  note: string;
}

export interface Issue {
  number: number;
  title: string;
  created_at: string;
  body: string;
  parsedContent?: IssueContent;
}

function parseIssueBody(body: string): IssueContent {
  const urlMatch = body.match(/URL:\s*(.*)/);
  const noteMatch = body.match(/Note:([\s\S]*?)(?=\n\n|$)/);

  return {
    url: urlMatch?.[1]?.trim() || '',
    note: noteMatch?.[1]?.trim() || '',
  };
}

export async function getIssues(page: number = 1, per_page: number = 10) {
  const response = await fetch(
    `https://api.github.com/repos/sing1ee/url-notes/issues?state=open&page=${page}&per_page=${per_page}`,
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
    parsedContent: parseIssueBody(issue.body),
  }));
}

export async function getIssue(issueNumber: number) {
  const response = await fetch(
    `https://api.github.com/repos/sing1ee/url-notes/issues/${issueNumber}`,
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
  return {
    ...issue,
    parsedContent: parseIssueBody(issue.body),
  };
} 