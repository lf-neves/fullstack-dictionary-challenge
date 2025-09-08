import originalPMap from "p-map";

import { logger } from "./logger";

function getMaxConcurrency(defaultConcurrency = 15): number {
  const dbPoolMax = Number(process.env.DB_POOL_MAX);

  if (!dbPoolMax) {
    logger.info(
      "DB_POOL_MAX environment variable not found, will use default concurrency of %d.",
      defaultConcurrency
    );
  }

  return dbPoolMax || defaultConcurrency;
}

export const pMap = <Element, NewElement>(
  input: Iterable<Element>,
  mapper: originalPMap.Mapper<Element, NewElement>,
  options?: originalPMap.Options
): Promise<NewElement[]> => {
  return originalPMap<Element, NewElement>(input, mapper, {
    // calls originalPMap, with default concurrency set to getMaxConcurrency
    concurrency: getMaxConcurrency(),
    ...options,
  });
};
