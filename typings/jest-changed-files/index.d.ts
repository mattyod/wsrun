declare module 'jest-changed-files' {
  export function getChangedFilesForRoots(
    roots: string[],
    options?: object
  ): Promise<{ changedFiles: Set<string>; repos: { git: Set<string>; hg: Set<string> } }>
  export function findRepos(roots: any[]): Promise<{ git: Set<string>; hg: Set<string> }>
}
