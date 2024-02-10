export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getTodos = async () => {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve(["todo 1", "todo 2", "todo 3"]);
    }, 1500);
  });
};
