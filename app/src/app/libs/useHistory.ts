export function useHistory() {
  return {
    push: (path: string) => window.history.pushState({}, "", path),
    replace: (path: string) => window.history.replaceState({}, "", path),
  };
}
