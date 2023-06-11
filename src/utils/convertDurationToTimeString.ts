export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / 3600)
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  let numeroString = seconds.toString();

  // Extrair os dois primeiros dígitos
  let doisPrimeirosDigitos = numeroString.substring(0, 2);

  const timeString = [minutes, doisPrimeirosDigitos]
    .map(unit => String(unit).padStart(1, '0'))
    .join(':')
  return timeString;
}
