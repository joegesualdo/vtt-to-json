export function timeString2ms(a, b) {
  // time(HH:MM:SS.mss) // optimized
  return (
    (a = a.split(".")), // optimized
    (b = a[1] * 1 || 0), // optimized
    (a = a[0].split(":")),
    b +
      (a[2]
        ? a[0] * 3600 + a[1] * 60 + a[2] * 1
        : a[1]
        ? a[0] * 60 + a[1] * 1
        : a[0] * 1) *
        1e3
  ); // optimized
}
