export function stringToMilliseconds(time: string): number {
  const [hhmmss, mss] = time.split(".");
  const [hh, mm, ss] = hhmmss.split(":");
  const milliseconds = parseInt(mss, 10) || 0;
  const seconds = parseInt(ss, 10) || 0;
  const minutes = parseInt(mm, 10) || 0;
  const hours = parseInt(hh, 10) || 0;

  return ((hours * 60 + minutes) * 60 + seconds) * 1_000 + milliseconds;
}
