export function SnakeCaseStringToLowerCaseString(str: string): string {
  return str.toLowerCase().replace(/_/g, " ");
}
