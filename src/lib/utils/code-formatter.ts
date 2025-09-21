/**
 * Utility functions for formatting code strings in CodeBlock and CodeShowcase components
 */

/**
 * Removes common leading whitespace from all lines while preserving relative indentation
 * @param code - Raw code string from template literal
 * @returns Cleaned code string with proper indentation
 */
export function cleanCodeIndentation(code: string): string {
  console.log("🚀 ~ cleanCodeIndentation ~ code:", code)
  if (!code) return '';

  // Split into lines and remove first/last empty lines
  const lines = code.split('\n');

  // Remove leading empty line if present
  if (lines[0]?.trim() === '') {
    lines.shift();
  }

  // Remove trailing empty line if present
  if (lines[lines.length - 1]?.trim() === '') {
    lines.pop();
  }

  if (lines.length === 0) return '';

  // Find the minimum indentation (excluding empty lines)
  const nonEmptyLines = lines.filter(line => line.trim() !== '');
  if (nonEmptyLines.length === 0) return '';

  const minIndentation = Math.min(
    ...nonEmptyLines.map(line => {
      const match = line.match(/^(\s*)/);
      return match ? match[1].length : 0;
    })
  );

  // Remove the common indentation from all lines
  const cleanedLines = lines.map(line => {
    // If line is empty, keep it empty
    if (line.trim() === '') return '';
    // Remove common indentation
    return line.slice(minIndentation);
  });

  return cleanedLines.join('\n');
}

/**
 * Formats code for display in CodeBlock component
 * @param code - Raw code string
 * @returns Formatted code string
 */
export function formatCodeBlock(code: string): string {
  return cleanCodeIndentation(code);
}

/**
 * Formats code for display in CodeShowcase tabs
 * @param code - Raw code string
 * @returns Formatted code string
 */
export function formatCodeShowcase(code: string): string {
  return cleanCodeIndentation(code);
}