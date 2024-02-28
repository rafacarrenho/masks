export const moneyMask = (value: string) => {
  // Garante que só vai ter números
  const formattedValue = value.replace(/\D/g, "");

  // Divide o valor por 100 para obter o valor em centavos
  const numericValue = (Number(formattedValue) || 0) / 100;

  return numericValue
    .toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
    .replace("$", "$ ");
};
