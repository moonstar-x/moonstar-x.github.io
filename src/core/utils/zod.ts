import { hasProperty } from '@core/utils/object';
import type { ZodError } from 'zod';
import { z } from 'zod';

export type ZodShape<T extends object> = {
  [K in keyof T]: z.ZodType<T[K]>;
};

export interface ExtendedZodErrorOptions extends ErrorOptions {
  zodError: z.ZodError;
}

export class ExtendedZodError extends Error {
  public readonly zodError: ZodError;

  constructor(reason: string, options: ExtendedZodErrorOptions) {
    super(`${reason}\n${z.prettifyError(options.zodError)}`, options);
    this.name = 'ExtendedZodError';
    this.zodError = options.zodError;
  }
}

export const betterZodParse = <T extends object>(Schema: z.ZodType<T>, data: unknown, identifier: keyof T & string): T => {
  try {
    return Schema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const name = hasProperty(data, identifier) ? String(data[identifier]) : '';

      throw new ExtendedZodError(`Failed to parse: ${name}`, { zodError: error });
    }

    throw error;
  }
};
