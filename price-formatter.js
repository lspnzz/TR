document.addEventListener("DOMContentLoaded", () => {
  const priceTags = document.querySelectorAll("[price-tag]");

  function formatPrice(price) {
    const formatter = new Intl.NumberFormat("en-IE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    });

    return formatter.format(price);
  }

  if (priceTags.length > 0) {
    priceTags.forEach((priceTag) => {
      const rawPrice = parseFloat(priceTag.textContent);
      const formattedPrice = formatPrice(rawPrice);
      priceTag.textContent = formattedPrice;
    });
  }
});
